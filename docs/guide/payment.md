# Receive money

POST `/api/v1/trades`

### HTTP headers <Badge type="tip" text="Header" vertical="top" />

| Key          | Value              |
|--------------|--------------------|
| Accept       | `application/json` |
| Content-Type | `application/json` |

### Body parameters <Badge type="tip" text="Body" vertical="top" />

| Key          | Type   | Required | Sign | Description                                                       |
|--------------|--------|----------|------|-------------------------------------------------------------------|
| client_key   | string | Yes      | Yes  | The API access key.                                               |
| amount       | string | Yes      | Yes  | The amount for receive money.                                     |
| channel_id   | string | Yes      | Yes  | The payment method.                                               |
| out_trade_no | string | Yes      | Yes  | The transaction ID you provided. **Must be a unique identifier**. |
| notify_url   | string | Yes      | Yes  | The webhook URL you provided.                                     |
| extra        | string | No       | Yes  | Extra parameters. **MUST be a valid JSON string**.                |
| signature    | string | Yes      | No   | Signed value.                                                     |

### Request example

:::warning NOTE
Not every request requires the `extra` parameter,
Please refer to the request examples for each country.
The following example is for a specific bank in Vietnam to receive money.
:::

```shell{8,11}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "50000.00",
    "channel_id": "1001",
    "out_trade_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "extra": "{\"bank_code\":\"VCB\"}",
    "signature": "32db0797717edf25775a95cbbf61c4f693b47604a309fb63d46e36faf75e58ce"
  }'
```

### Response parameters

| Key          | Type   | Description                            |
|--------------|--------|----------------------------------------|
| client_key   | string | The API access key.                    |
| amount       | string | The amount for receive money.          |
| trade_no     | string | The transaction ID DaYangPay provided. |
| out_trade_no | string | The transaction ID you provided.       |
| payment_url  | string | The Cashier page URL.                  |
| created_at   | string | Created time. `UTC±00:00`              |

### Response example

#### Successful Response Example

A successful response has an HTTP status code in the range 200 ~ 299.

```json{4,6}
{
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "amount": "100.00",
  "trade_no": "100000012023072123389872",
  "out_trade_no": "20230101000000",
  "payment_url": "https://example.com/cashier",
  "created_at": "2023-01-01T01:01:01.000000Z"
}
```

#### Error Response Example

An error response has an HTTP status code in the range 400 ~ 499 (client error) or 500 ~ 599 (server error).

```json
{
  "message": "The out_trade_no has already been taken.",
  "errors": {
    "out_trade_no": ["The out_trade_no has already been taken."]
  }
}
```

### How to Determine if the Order Was Successfully Placed?

Check if the HTTP response status code is in the range 200 ~ 299. Alternatively, verify whether a specific key exists in the JSON response, such as `payment_url`.

::: code-tabs

@tab Java

```java
import com.google.gson.*;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpClientExample {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();

        // Create the request body (example, if needed, otherwise, you can remove this)
        String requestBody = "{\"key\":\"value\"}";  // You can replace with actual data for POST request

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://example.com/api/v1/trades"))
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .header("Accept", "application/json")
                .header("Content-Type", "application/json")
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            // Check if the HTTP status code is 200 ~ 299
            int statusCode = response.statusCode();

            if (statusCode >= 200 && statusCode <= 299) {
                System.out.println("Success: " + statusCode);
            } else {
                System.out.println("Failed: " + statusCode);
            }

            // Check if a specific key exists in the JSON response, e.g., 'payment_url'
            String responseBody = response.body();
            System.out.println("Response Body: " + responseBody);

            if (isValidJson(responseBody)) {
                Gson gson = new Gson();
                JsonObject jsonObject = gson.fromJson(responseBody, JsonObject.class);

                String key = "payment_url";

                if (jsonObject.has(key)) {
                    String value = jsonObject.get(key).getAsString();
                    System.out.println(key + " found: " + value);
                } else {
                    System.out.println(key + " not found");
                }
            } else {
                System.out.println("Response body is not valid JSON.");
            }
        } catch (IOException | InterruptedException e) {
            System.err.println("Error occurred: " + e.getMessage());
        }
    }

    // Check if a string is valid JSON
    private static boolean isValidJson(String json) {
        try {
            JsonElement jsonElement = JsonParser.parseString(json);
            return jsonElement.isJsonObject() || jsonElement.isJsonArray();
        } catch (JsonParseException e) {
            return false;
        }
    }
}
```
:::

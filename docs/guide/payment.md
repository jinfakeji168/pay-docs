# Receive money

POST `/api/v1/trades`

### HTTP headers <Badge type="tip" text="Header" vertical="top" />

| Key    | Value              |
| ------ | ------------------ |
| Accept | `application/json` |

### Body parameters <Badge type="tip" text="Body" vertical="top" />

| Key          | Type   | Required | Sign | Description                                                       |
| ------------ | ------ | -------- | ---- | ----------------------------------------------------------------- |
| client_key   | string | Yes      | Yes  | The API access key.                                               |
| amount       | string | Yes      | Yes  | The amount for receive money.                                     |
| channel_id   | string | Yes      | Yes  | The payment method.                                               |
| out_trade_no | string | Yes      | Yes  | The transaction ID you provided. **Must be a unique identifier**. |
| notify_url   | string | Yes      | Yes  | The webhook URL you provided.                                     |
| extra        | string | No       | Yes  | Extra parameters. **MUST be a valid JSON string**.                |
| signature    | string | Yes      | No   | Signed value.                                                     |

### Request example

```shell{8}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "100.00",
    "channel_id": "1003",
    "out_trade_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

### Response parameters

| Key          | Type   | Description                            |
| ------------ | ------ | -------------------------------------- |
| client_key   | string | The API access key.                    |
| amount       | string | The amount for receive money.          |
| trade_no     | string | The transaction ID DaYangPay provided. |
| out_trade_no | string | The transaction ID you provided.       |
| payment_url  | string | The Cashier page URL.                  |
| created_at   | string | Created time. `UTC±00:00`              |

### Response example

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

### How to Determine if the Order Was Successfully Placed?

Check whether the HTTP response status code is `200` or `201`. Or verify if a specific field, such as `payment_url` exists in the response.

::: code-tabs

@tab Java

```java
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpClientExample {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://example.com"))
                .POST()
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            // Check if the HTTP status code is 200 or 201
            int statusCode = response.statusCode();

            if (statusCode == 200 || statusCode == 201) {
                System.out.println("Success: " + statusCode);
            } else {
                System.out.println("Failed: " + statusCode);
            }

            // Check if the key "payment_url" exists
            Gson gson = new Gson();
            JsonObject jsonObject = gson.fromJson(response.body(), JsonObject.class);

            if (jsonObject.has("payment_url")) {
                String tradeNo = jsonObject.get("payment_url").getAsString();
                System.out.println("payment_url found: " + tradeNo);
            } else {
                System.out.println("payment_url not found");
            }

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```
:::

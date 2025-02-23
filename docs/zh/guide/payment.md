# 代收下单

POST `/api/v1/trades`

### HTTP头参数 <Badge type="tip" text="Header" vertical="top" />

| 参数           | 说明                 |
|--------------|--------------------|
| Accept       | `application/json` |
| Content-Type | `application/json` |

### 包体参数 <Badge type="tip" text="Body" vertical="top" />

| 参数           | 类型     | 必填 | 参与签名 | 说明                                                          |
|--------------|--------|----|------|-------------------------------------------------------------|
| client_key   | string | 是  | 是    | 商户标识。由大洋支付颁发。                                               |
| amount       | string | 是  | 是    | 代收金额。单位：`元`。                                                |
| channel_id   | string | 是  | 是    | 代收通道ID。                                                     |
| out_trade_no | string | 是  | 是    | 商户代收订单号。<br><span style="color: red">最大长度 64，必须是唯一的。</span> |
| notify_url   | string | 是  | 是    | 商户接收通知的网址。                                                  |
| extra        | string | 否  | 是    | 业务参数。 必须是 `JSON` 字符串。                                       |
| signature    | string | 是  | 否    | 签名值。                                                        |

### 请求示例

:::warning NOTE
不是每个请求都需要 `extra` 参数，请参考各个国家的请求示例。以下示例适用于越南银行代收。
:::

```bash{8,11}
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

### 响应参数

| 参数           | 类型     | 说明            |
|--------------|--------|---------------|
| client_key   | string | 商户标识。由大洋支付颁发。 |
| amount       | string | 代收金额。单位：`元`。  |
| trade_no     | string | 代收订单号。        |
| out_trade_no | string | 商户代收订单号。      |
| payment_url  | string | 支付网址。         |
| created_at   | string | 下单时间。UTC 时间。  |

### 响应示例

#### 成功的响应示例

成功响应的HTTP 状态码为： (200 ~ 299)

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

#### 错误的响应示例

错误响应的HTTP 状态码为：客户端错误响应 (400 ~ 499) 或 服务器错误响应 (500 ~ 599)

```json
{
  "message": "The out_trade_no has already been taken.",
  "errors": {
    "out_trade_no": ["The out_trade_no has already been taken."]
  }
}
```

### 如何判断是否下单成功？

判断响应的HTTP 状态码是否是 `200` ~ `299`。或判断响应中是否存在某个特定的字段，如：`payment_url`。

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

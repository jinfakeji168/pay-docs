# 接口签名

### 签名字符串

请求参数示例:

```json{8-10}
{
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "amount": "50000.00",
  "channel_id": "1001",
  "out_trade_no": "20230101000000",
  "notify_url": "https://your-domain.com/webhook",
  "extra": "{\"bank_code\":\"VCB\"}",
  "empty_string": "",
  "null_value": null,
  "should_not_include": "example"
}
```

删除值为 `empty string` 或 `null` 的参数，或不参与签名的参数。

```json
{
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "amount": "50000.00",
  "channel_id": "1001",
  "out_trade_no": "20230101000000",
  "notify_url": "https://your-domain.com/webhook",
  "extra": "{\"bank_code\":\"VCB\"}"
}
```

对请求参数的键进行排序。

```json
{
  "amount": "50000.00",
  "channel_id": "1001",
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "extra": "{\"bank_code\":\"VCB\"}",
  "notify_url": "https://your-domain.com/webhook",
  "out_trade_no": "20230101000000"
}
```

使用 `&` 连接请求参数，使用 `=` 连接参数的键和参数的值。

`amount=50000.00&channel_id=1001&client_key=01h6tn69wfcpy5q5x3vpb3x9me&extra={"bank_code":"VCB"}&notify_url=https://your-domain.com/webhook&out_trade_no=20230101000000`

### HmacSHA256 示例

::: code-tabs

@tab Java

```java
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;

public class Main {
    public static void main(String[] args) {
        String secretKey = "CLIENT_SECRET";
        String stringToSign = "amount=50000.00&channel_id=1001&client_key=01h6tn69wfcpy5q5x3vpb3x9me&notify_url=https://your-domain.com/webhook&out_trade_no=20230101000000";

        byte[] hmacSha256 = calcHmacSha256(
            secretKey.getBytes(StandardCharsets.UTF_8),
            stringToSign.getBytes(StandardCharsets.UTF_8)
        );

        System.out.printf("Signature: %064x%n", new BigInteger(1, hmacSha256));
    }

    public static byte[] calcHmacSha256(byte[] secretKey, byte[] stringToSign) {
        byte[] hmacSha256 = null;

        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey, "HmacSHA256");
            mac.init(secretKeySpec);
            hmacSha256 = mac.doFinal(stringToSign);
        } catch (Exception e) {
            throw new RuntimeException("Failed to calculate hmac-sha256", e);
        }

        return hmacSha256;
    }
}
```

@tab PHP

```php
<?php

$secretKey = "CLIENT_SECRET";
$stringToSign = "amount=50000.00&channel_id=1001&client_key=01h6tn69wfcpy5q5x3vpb3x9me&notify_url=https://your-domain.com/webhook&out_trade_no=20230101000000";

$signature = hash_hmac('sha256', $stringToSign, $secretKey);

echo $signature;
```

:::

`ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082`

### 带签名的请求示例

```shell
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
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

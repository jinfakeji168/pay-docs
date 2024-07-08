# Signature

### HmacSHA256

:::: code-group

::: code-group-item PHP
```php
<?php

$secretKey = "CLIENT_SECRET";
$stringToSign = "amount=50000.00&channel_id=1001&client_key=CLIENT_KEY&notify_url=https://your-domain.com/webhook&out_trade_no=20230101000000";

$signature = hash_hmac('sha256', $stringToSign, $secretKey);
echo $signature;
```
:::

::: code-group-item Java
```java
```java
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;

public class Main {
    public static void main(String[] args) {
        String secretKey = "CLIENT_SECRET";
        String stringToSign = "amount=50000.00&channel_id=1001&client_key=CLIENT_KEY&notify_url=https://your-domain.com/webhook&out_trade_no=20230101000000";

        byte[] hmacSha256 = calcHmacSha256(
            secretKey.getBytes(StandardCharsets.UTF_8),
            stringToSign.getBytes(StandardCharsets.UTF_8)
        );

        System.out.printf("Hex: %064x%n", new BigInteger(1, hmacSha256));
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
```
:::

::::


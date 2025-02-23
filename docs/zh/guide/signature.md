# 接口签名

## 签名字符串

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

### 参数过滤

移除值为 `empty string` 或 `null` 的参数，或不参与签名的参数。

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

### 参数排序

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

### 拼接字符串

使用 `&` 连接请求参数，使用 `=` 连接参数的键和参数的值。

`
amount=50000.00&channel_id=1001&client_key=01h6tn69wfcpy5q5x3vpb3x9me&extra={"bank_code":"VCB"}&notify_url=https://your-domain.com/webhook&out_trade_no=20230101000000
`

## HmacSHA256 示例

::: code-tabs

@tab Java

```java
import com.google.gson.Gson;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        String accessKey = "01h6tn69wfcpy5q5x3vpb3x9me"; // Your client key
        String secretKey = "your-client-secret";

        // Request parameters
        Map<String, Object> params = new HashMap<>();
        params.put("client_key", accessKey);
        params.put("amount", "50000.00");
        params.put("channel_id", "1001");
        params.put("out_trade_no", "20230101000000");
        params.put("notify_url", "https://your-domain.com/webhook");

        // Ensure 'extra' is always a JSON string
        //
        // Note: Not every request requires the "extra" parameter,
        // Please refer to the request examples for each country.
        // The following example is for a specific bank in Vietnam to receive money.
        Map<String, String> extra = new HashMap<>();
        extra.put("bank_code", "VCB");
        params.put("extra", new Gson().toJson(extra));

        params.put("empty_string", ""); // Empty string (excluded from signature)
        params.put("null_value", null); // NULL value (excluded from signature)
        params.put("should_not_include", "example"); // Parameter to be excluded from the signature

        // Parameters to exclude from the signature
        Set<String> except = new HashSet<>(List.of("should_not_include"));

        // Filter parameters (exclude null, empty, and specified keys)
        Map<String, Object> filteredParams = params.entrySet().stream()
                .filter(entry -> !except.contains(entry.getKey()) && entry.getValue() != null && !entry.getValue().toString().isEmpty())
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

        // Sort the parameters by key in ascending order
        TreeMap<String, Object> sortedParams = new TreeMap<>(filteredParams);

        // Build the string to sign
        String stringToSign = sortedParams.entrySet().stream()
                .map(entry -> entry.getKey() + "=" + entry.getValue())
                .collect(Collectors.joining("&"));

        System.out.println("String to Sign: " + stringToSign);
        // Output:
        // amount=50000.00&channel_id=1001&client_key=01h6tn69wfcpy5q5x3vpb3x9me&extra={"bank_code":"VCB"}&notify_url=https://your-domain.com/webhook&out_trade_no=20230101000000

        // Generate the HMAC-SHA256 signature
        byte[] hmacSha256 = calcHmacSha256(
                secretKey.getBytes(StandardCharsets.UTF_8),
                stringToSign.getBytes(StandardCharsets.UTF_8)
        );

        System.out.printf("Signature: %064x%n", new BigInteger(1, hmacSha256));
        // Output:
        // 32db0797717edf25775a95cbbf61c4f693b47604a309fb63d46e36faf75e58ce
    }

    // Calculate the HMAC-SHA256 signature
    public static byte[] calcHmacSha256(byte[] secretKey, byte[] stringToSign) {
        byte[] hmacSha256 = null;

        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey, "HmacSHA256");
            mac.init(secretKeySpec);
            hmacSha256 = mac.doFinal(stringToSign);
        } catch (Exception e) {
            throw new RuntimeException("Failed to calculate HMAC-SHA256", e);
        }

        return hmacSha256;
    }
}
```

@tab PHP

```php
<?php

$accessKey = "01h6tn69wfcpy5q5x3vpb3x9me"; // Your client key
$secretKey = "your-client-secret";

// Request parameters
$params = [
    "client_key" => $accessKey,
    "amount" => "50000.00",
    "channel_id" => "1001",
    "out_trade_no" => "20230101000000",
    "notify_url" => "https://your-domain.com/webhook",

    // Ensure 'extra' is always a JSON string
    //
    // Note: Not every request requires the "extra" parameter,
    // Please refer to the request examples for each country.
    // The following example is for a specific bank in Vietnam to receive money.
    "extra" => json_encode([
        "bank_code" => "VCB",
    ]),

    "empty_string" => "", // Empty string (excluded from the signature)
    "null_value" => null, // NULL value (excluded from the signature)
    "should_not_include" => "example", // Parameter to be excluded from the signature
];

// Define parameters to exclude from the signature
$except = [
    "should_not_include",
];

// Filter parameters
$params = array_filter($params, function ($value, $key) use ($except) {
    return !in_array($key, $except) && $value !== '' && !is_null($value);
}, ARRAY_FILTER_USE_BOTH);

// Sort the parameters by key in ascending (lexicographical) order
ksort($params);

// Build the string to sign
$stringToSign = implode('&', array_map(function ($key, $value) {
    return "{$key}={$value}";
}, array_keys($params), $params));

var_dump($stringToSign);
// Output:
// amount=50000.00&channel_id=1001&client_key=01h6tn69wfcpy5q5x3vpb3x9me&extra={"bank_code":"VCB"}&notify_url=https://your-domain.com/webhook&out_trade_no=20230101000000

// Generate the HMAC-SHA256 signature
// Use the hash_hmac() function to create the signature with the secret key
$signature = hash_hmac('sha256', $stringToSign, $secretKey);

var_dump($signature);
// Output:
// 32db0797717edf25775a95cbbf61c4f693b47604a309fb63d46e36faf75e58ce
```

:::

## 带签名的请求示例

**注意：不是每个请求都需要 `extra` 参数，请参考各个国家的请求示例。**

```bash
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

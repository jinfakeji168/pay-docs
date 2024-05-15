# 代收下单接口

### 接口地址

`POST /api/v1/trades`

### 请求参数

| 参数           | 类型     | 必填  | 参与签名 | 说明                          |                   |
|--------------|--------|-----|------|-----------------------------|-------------------|
| client_key   | string | 是   | 是    | 商户标识。由大洋支付颁发。               |                   |
| amount       | string | 是   | 是    | 代收金额。单位：`元`。                |                   |
| channel_id   | string | 是   | 是    | 代收通道ID。                     | [查看](channels.md) |
| out_trade_no | string | 是   | 是    | 商户代收订单号。<br>最大长度 64，必须是唯一的。 |                   |
| notify_url   | string | 是   | 是    | 商户接收通知的网址。                  |                   |
| extra        | string | 特殊的 | 是    | 业务参数。<br>必填时必须是 `JSON` 字符串。 |                   |
| signature    | string | 是   | 否    | 签名值。                        |                   |

::: warning
`extra` 参数说明：您可以理解为 `required_if`，也就是说特定的场景为必填，且需提交的参数可能不一样。目前各个国家的代收暂时没有业务参数。
:::

示例：

```shell
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "100.00",
    "channel_id": "1000",
    "out_trade_no": "20230101000000",
    "notify_url": "https://example.com/notify/url",
    "extra": "{\"foo\":\"bar\"}",
    "signature": ""
  }'
```

### 响应参数
| 参数           | 类型     | 说明             | 
|--------------|--------|----------------|
| client_key   | string | 商户标识。由大洋支付颁发。  |
| amount       | string | 代收金额。          |
| trade_no     | string | 代收订单号。         |
| out_trade_no | string | 商户代收订单号。       |
| payment_url  | string | 支付网址。          |
| created_at   | string | 下单时间。UTC+0 时间。 |

示例：

```json
{
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "amount": "100.00",
  "trade_no": "100000012023072123389872",
  "out_trade_no": "20230101000000",
  "payment_url": "https://example.com/payment/url",
  "created_at": "2023-01-01T01:01:01.000000Z"
}
```

### 示例代码

:::: code-group
::: code-group-item PHP
```php
$secret = 'YOUR CLIENT SECRET';

$url = "{API_URL}/api/v1/trades";

$headers = [
    "Accept: application/json",
];

$data = [
    'client_key' => 'YOUR CLIENT KEY',
    'amount' => '100.00',
    'channel_id' => '1000',
    'out_trade_no' => '20230101000000',
    'notify_url' => 'https://example.com/notify/url',

    //'extra' => json_encode([
    //    'foo' => 'bar',
    //]),
];
$data['signature'] = signed(
    createStringToSign($data), $secret
);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
$result = curl_exec($ch);
$httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

print_r($result);
var_dump($httpStatus);

if ($httpStatus >= 200 && $httpStatus < 300) {
    // successful
}
    
if ($httpStatus >= 400 && $httpStatus < 500) {
    // client error
} 

if ($httpStatus >= 500) {
    // server error
}
```
:::
::::

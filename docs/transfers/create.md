# 代付下单接口


### 接口地址

`POST /api/v1/transfers`

### 请求参数

| 参数              | 类型     | 必填  | 参与签名 | 说明                          |                   |
|-----------------|--------|-----|------|-----------------------------|-------------------|
| client_key      | string | 是   | 是    | 商户标识。由大洋支付颁发。               |                   |
| amount          | string | 是   | 是    | 代付金额。单位：`元`。                |                   |
| channel_id      | string | 是   | 是    | 代付通道ID。                     | [查看](channels.md) |
| out_transfer_no | string | 是   | 是    | 商户代付订单号。<br>最大长度 64，必须是唯一的。 |                   |
| notify_url      | string | 是   | 是    | 商户接收通知的网址。                  |                   |
| payee_account   | string | 是   | 是    | 收款人账号。                      |                   |
| payee_name      | string | 是   | 是    | 收款人姓名。                      |                   |
| extra           | string | 特殊的 | 是    | 业务参数。<br>必填时必须是 `JSON` 字符串。 |                   |
| signature       | string | 是   | 否    | 签名值。                        |                   |

::: warning
`extra` 参数说明：您可以理解为 `required_if`，也就是说特定的场景为必填，且需提交的参数可能不一样，请参考代付接口的业务参数。例：越南银行代付，`extra.bank_code` 必填。
:::

示例：

```json
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100",
  "channel_id": "5003",
  "out_transfer_no": "20230101000000",
  "notify_url": "https://example.com/notify/url",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "extra": "{\"bank_code\":\"BANK\"}",
  "signature": ""
}
```

### 响应参数
| 参数              | 类型     | 说明             | 
|-----------------|--------|----------------|
| client_key      | string | 商户标识。由大洋支付颁发。  |
| amount          | string | 代付金额。          |
| transfer_no     | string | 代付订单号。         |
| out_transfer_no | string | 商户代付订单号。       |
| channel_id      | string | 代付通道ID。        |
| payee_account   | string | 收款人账号。         |
| payee_name      | string | 收款人姓名。         |
| created_at      | string | 下单时间。UTC+0 时间。 |

示例：

```json
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "transfer_no": "100000012023072123389872",
  "out_transfer_no": "20230101000000",
  "channel_id": "5001",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "created_at": "2023-01-01T01:01:01.000000Z"
}
```

### 示例代码

:::: code-group
::: code-group-item PHP
```php
$secret = 'YOUR CLIENT SECRET';

$url = "{API_URL}/api/v1/transfers";

$headers = [
    "Accept: application/json",
];

$data = [
    'client_key' => 'YOUR CLIENT KEY',
    'amount' => '100.00',
    'channel_id' => '1000',
    'out_trade_no' => '20230101000000',
    'notify_url' => 'https://example.com/notify/url',

    'payee_account' => '1234567890',
    'payee_name' => 'Sammy Shark',

    'extra' => json_encode([
        'bank_code' => 'BANK'
    ]),
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

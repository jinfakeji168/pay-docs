# 代付查询接口

### 接口地址

`GET /api/v1/transfers/:transfer`

:::warning
`:transfer` 为路径参数。填 `transfer_no` 或 `out_transfer_no`  ，路径参数不参与签名。
:::

### 请求参数

| 参数         | 类型     | 必填 | 参与签名 | 说明            |                  
|------------|--------|----|------|---------------|
| client_key | string | 是  | 是    | 商户标识。由大洋支付颁发。 |
| signature  | string | 是  | 否    | 签名值。          |

示例：

`https://api.example.com/api/v1/transfers/100000012023072123389872?client_key=YOUR_CLIENT_KEY&signature=YOUR_SIGNATURE`

```json
{
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "signature": ""
}
```

### 响应参数
| 参数              | 类型      | 说明                                     | 
|-----------------|---------|----------------------------------------|
| client_key      | string  | 商户标识。由大洋支付颁发。                          |
| amount          | string  | 代付金额。单位：`元`。                           |
| transfer_no     | string  | 代付订单号。                                 |
| out_transfer_no | string  | 商户代付订单号。                               |
| channel_id      | string  | 代付通道ID。                                |
| payee_account   | string  | 收款人账号。                                 |
| payee_name      | string  | 收款人姓名。                                 |
| created_at      | string  | 下单时间。UTC+0 时间。                         |
| paid_at         | string  | 付款时间。UTC+0 时间。未付款订单响应 `null` 。         |
| status          | integer | 订单状态。`0: 待处理, 1: 代付成功, 2: 处理中, 3:代付失败` |

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
  "created_at": "2023-01-01T01:01:01.000000Z",
  "paid_at": "2023-01-01T01:02:03.000000Z",
  "status": 1
}
```

### 示例代码

:::: code-group
::: code-group-item PHP
```php
$secret = 'YOUR CLIENT SECRET';

$transferNo = '100000012023072123389872';

$url = "{API_URL}/api/v1/transfers/".$transferNo;

$headers = [
    "Accept: application/json",
];

$data = [
    'client_key' => 'YOUR CLIENT KEY',
];
$data['signature'] = signed(
    createStringToSign($data), $secret
);

$url .= '?'.http_build_query($data);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
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
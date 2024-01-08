# 余额

### 接口地址

`GET /api/v1/user/balances`

### 请求参数

| 参数         | 类型     | 必填 | 参与签名 | 说明            |                  
|------------|--------|----|------|---------------|
| client_key | string | 是  | 是    | 商户标识。由大洋支付颁发。 |
| signature  | string | 是  | 否    | 签名值。          |

示例：

`https://api.example.com/api/v1/user/balances?client_key=YOUR_CLIENT_KEY&signature=YOUR_SIGNATURE`

```json
{
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "signature": ""
}
```

### 响应参数
| 参数              | 类型     | 说明             | 
|-----------------|--------|----------------|
| client_key      | string | 商户标识。由大洋支付颁发。  |
| available_funds | string | 可用资金。单位：`元`。   |
| locked_funds    | string | 锁定资金。单位：`元`。   |
| currency        | string | 币种。            |

示例：

```json
{
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "available_funds": "16055.90",
  "locked_funds": "0.00",
  "currency": "BRL"
}
```

### 示例代码

:::: code-group
::: code-group-item PHP
```php
$secret = 'YOUR CLIENT SECRET';

$url = "{API_URL}/api/v1/user/balances";

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

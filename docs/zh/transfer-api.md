# 转账接口

## 代付下单

`POST /api/v1/transfers`

### 请求参数

|参数|类型|必须的|示例|描述|
|---|---|---|---|---|
|out_transfer_no|string|是|`12345678910`|商户转账订单号。|
|amount|string|是|`100.00`| 转账金额。|
|bank_id|string|是|`5000`| 请参考 [银行](banks.md)。|
|payee_account|string|是|`1234567890123456`|收款人账号。|
|payee_name|string|是|`CARD HOLDER`|收款人姓名。|
|notify_url|string|否|`https://example.com/notify`| 转账完成支付后，我们会请求的你提供的通知网址。 请参考 [转账通知](transfer-notification.md) 。 |
|extra|string|特殊的|`{"ifsc":"TEST0TEST00"}`| 额外的参数，必须是 **JSON 字符串**。请参考 [银行](banks.md) 。 |
|custom|string|否|`{"custom_key":"custom_value"}`|商户定义的参数，原样返回。|

:::warning
**特需的** 参数说明：如果通道指定了 **额外的参数**，那么 `extra` 参数必须提交 **通道指定的额外的参数** 并以 **JSON 字符串** 提交。如果通道没有指定 **额外的参数**，可以不提交 `extra` 参数。
:::

### PHP 示例代码

```php
use App\Support\Pay;
use Illuminate\Support\Facades\Http;

$params = [
    'client_key' => '01h2z4p4zqrz8ctrhj9d50z3ab',

    'out_transfer_no' => '12345678910',
    'amount' => '100.00',
    'bank_id' => '5000',
    'payee_account' => '1234567890123456',
    'payee_name' => 'CARD HOLDER',
    'notify_url' => 'https://example.com/notify',
    'extra' => json_encode([
        'ifsc' => 'TEST0TEST00'
    ]),  
    'custom' => json_encode([
        'custom_key' => 'custom_value',
    ]),  
];
$params['signature'] = Pay::signature($params);

$response = Http::post('/api/v1/transfers', $params);

print_r($response->json());
```

### 响应参数

|参数|类型|示例|描述|
|---|---|---|---|
|client_key|string|`01h2z4p4zqrz8ctrhj9d50z3ab`|客户端标识，用于身份验证。|
|amount|string|`100.00`| 转账金额。|
|transfer_no|string|`100000012023072123389872`|转账订单号。|
|out_transfer_no|string|`1691138038690`|商户转账订单号。|
|bank_id|string|`5000`| 请参考 [银行](banks.md) 。|
|payee_account|string|`1234567890123456`|收款人账号。|
|payee_name|string|`Firstname Lastname`|收款人姓名。|
|custom|string|`{"custom_key":"custom_value"}`|商户定义的参数，原样返回。|
|created_at|string|`2023-06-15 08:34:31`|创建时间。|

### 响应示例

```json
{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "1000",
    "transfer_no": "100000012023080430838628",
    "out_transfer_no": "1691138038690",
    "bank_id": "5000",
    "payee_account": "1234567890",
    "payee_name": "Firstname Lastname",
    "custom": "{\"custom_key\":\"custom_value\"}",
    "created_at": "2023-08-04 08:33:58"
}
```

## 查询转账

`GET /api/v1/transfers/:transfer`

路径变量 **transfer** 是 `transfer_no` 或 `out_transfer_no`.

### PHP 示例代码

```php
use App\Support\Pay;
use Illuminate\Support\Facades\Http;

$params = [
    'client_key' => '01h2z4p4zqrz8ctrhj9d50z3ab',
];
$params['signature'] = Pay::signature($params);

$transferNo = '100000012023072123389872';
$response = Http::get("/api/v1/transfers/{$transferNo}", $params);
// or
$outTransferNo = '123456789102';
$response = Http::get("/api/v1/transfers/{$outTransferNo}", $params);

print_r($response->json());
```

### 响应参数

|参数|类型|示例|描述|
|---|---|---|---|
|client_key|string|`01h2z4p4zqrz8ctrhj9d50z3ab`|客户端标识，用于身份验证。|
|amount|string|`100.00`| 转账金额。|
|transfer_no|string|`100000012023072123389872`|转账订单号。|
|out_transfer_no|string|`1691138038690`|商户转账订单号。|
|bank_id|string|`5000`| 请参考 [银行](banks.md) 。|
|payee_account|string|`1234567890`|收款人账号。|
|payee_name|string|`Firstname Lastname`|收款人姓名。|
|custom|string|`{"custom_key":"custom_value"}`|商户定义的参数，原样返回。|
|created_at|string|`2023-06-15 08:34:31`|创建时间。|
|paid_at|string|`2023-06-15 08:35:31`|支付时间。|
|status|integer|`1`|`0` = 待处理，`1` = 已支付, `2` = 进程中, `3` = 失败|

### 响应示例

```json
{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "1000.00",
    "transfer_no": "100000012023080430838628",
    "out_transfer_no": "1691138038690",
    "bank_id": 5000,
    "payee_account": "1234567890",
    "payee_name": "Firstname Lastname",
    "custom": "{\"custom_key\": \"custom_value\"}",
    "created_at": "2023-08-04 08:33:58",
    "paid_at": null,
    "status": 0
}
```

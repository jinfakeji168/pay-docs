# 交易接口

## 收款下单

`POST /api/v1/trades`

### 请求参数

|参数|类型|必须的|示例|描述|
|----|----|----|----|----|
|amount|string|是|`100.00`|交易金额。|
|channel_id|string|是|`1000`|请参考 [通道](channels.md)。|
|out_trade_no|string|是|`12345678910`|商户订单号。 最大长度 **32** 必须是 **唯一** 的。|
|subject|string|否|`test create trade`|商品描述。|
|notify_url|string|是|`https://example.com/trade/notify`|交易完成支付后，我们会请求的你提供的通知网址。 请参考 [交易通知](trade-notification.md)。|
|redirect_url|string|是|`https://example.com/orders/12345678910`|交易完成支付后，重定向到你提供的网址。|
|extra|string|特需的|`{"bank_id":"5000","payer_name":"Michael Jackson","payer_phone":"+1234567890"}`|额外的参数，必须是 **JSON 字符串**。请参考 [通道](channels.md)。|
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

    'amount' => '100.00',
    'channel_id' => '1000',
    'out_trade_no' => '12345678910',
    'subject' => 'test create trade',
    'notify_url' => 'https://example.com/trade/notify',
    'redirect_url' => 'https://example.com/orders/12345678910'
    'custom' => => json_encode([
        'custom_key' => 'custom_value',
    ]),
    //'extra' => json_encode([]),
];
$params['signature'] = Pay::signature($params);

$response = Http::post('/api/v1/trades', $params);

print_r($response->json());
```

### 响应参数

|参数|类型|示例|描述|
|----|----|----|----|
|client_key|string|`01h2z4p4zqrz8ctrhj9d50z3ab`|客户端标识，用于身份验证。|
|amount|string|`100.00`|交易金额。|
|trade_no|string|`100000012023072123389872`|交易订单号。|
|out_trade_no|string|`12345678910`|商户交易订单号。|
|payment_url|string|`https://pay.example.com/orders/a0b1c2d3e4f5g6h7i8j9`|支付网址。|
|created_at|string|`2023-06-15 08:34:31`|创建时间。|
|custom|string|`{"custom_key":"custom_value"}`|商户自定义的参数，原样返回。|

### 响应示例

```json
{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "10000",
    "trade_no": "100000012023080429755359",
    "out_trade_no": "1691136955342",
    "payment_url": "https://pay.example.com/orders/a0b1c2d3e4f5g6h7i8j9",
    "created_at": "2023-08-04 08:15:55",
    "custom": "{\"custom_key\":\"custom_value\"}"
}
```

## 查询交易

`GET /api/v1/trades/:trade`

路径变量 **trade** 是 `trade_no` 或 `out_trade_no`.

### PHP 示例代码

```php
use App\Support\Pay;
use Illuminate\Support\Facades\Http;

$params = [
    'client_key' => '01h2z4p4zqrz8ctrhj9d50z3ab',
];
$params['signature'] = Pay::signature($params);

$tradeNo = '100000012023072123389872';
$response = Http::get("/api/v1/trades/{$tradeNo}", $params);
// or
$outTradeNo = '123456789102';
$response = Http::get("/api/v1/trades/{$outTradeNo}", $params);

print_r($response->json());
```

### 响应参数

|参数|类型|示例|描述|
|----|----|----|----|
|client_key|string|`01h2z4p4zqrz8ctrhj9d50z3ab`|客户端标识，用于身份验证。|
|amount|string|`100.00`|交易金额。|
|trade_no|string|`100000012023072123389872`|交易订单号。|
|out_trade_no|string|`12345678910`|商户交易订单号。|
|created_at|string|`2023-06-15 08:34:31`|创建时间。|
|custom|string|`{"custom_key": "custom_value"}`|商户自定义的参数，原样返回。|
|paid_at|string|`2023-06-15 08:34:31`|支付时间。当交易状态为待支付时，响应 `null`。|
|status|integer|`1`|`0` = 待支付，`1` = 已支付, `2` = 关闭|

### 响应示例

```json
{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "10000.00",
    "trade_no": "100000012023080429092829",
    "out_trade_no": "1691136292860",
    "created_at": "2023-08-04 08:04:52",
    "custom": "{\"custom_key\": \"custom_value\"}",
    "paid_at": null,
    "status": 0
}
```

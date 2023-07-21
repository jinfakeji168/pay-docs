# Trade API

## Create a Trade

`POST /api/v1/trades`

### Request Parameters

|Key|Type|Required|Example|Description|
|----|----|----|----|----|
|amount|string|yes|`100.00`|Amount of the trade|
|channel_id|string|yes|`1000`|Refer to [Channels](channels.md)|
|out_trade_no|string|yes|`12345678910`|Trade identifier in Merchant platform. Max length is **32** and must be **unique**.|
|subject|tring|no|`test create trade`|Trade description|
|payer|string|special|`{"id": "10000"}`|Payer information|
|notify_url|string|yes|`https://example.com/trade/notify`|After the trade is paid. We will request the notification URL you provided. Refer to [Trade Notification](trade-notification.md)|
|redirect_url|string|yes|`https://example.com/orders/12345678910`|After the trade is paid. Redirect to the URL you provided.|

### PHP Example Code

```php
use App\Support\Pay;
use Illuminate\Support\Facades\Http;

$params = [
    'client_key' => '01h2z4p4zqrz8ctrhj9d50z3ab',
    'timestamp' => time(),

    'amount' => '100.00',
    'channel_id' => '1000',
    'out_trade_no' => '12345678910',
    'subject' => 'test create trade',
    'payer' => '{"id": "10000"}',    
    'notify_url' => 'https://example.com/trade/notify',
    'redirect_url' => 'https://example.com/orders/12345678910'
];
$params['signature'] = Pay::signature($params);

$response = Http::post('/api/v1/trades', $params);

print_r($response->json());
```

### Response Parameters

|Key|Type|Example|Description|
|----|----|----|----|
|client_key|string|`01h2z4p4zqrz8ctrhj9d50z3ab`|Client Key for Authentication.|
|amount|string|`100.00`|Amount of the trade|
|trade_no|string|`100000012023072123389872`|Trade identifier in our system|
|out_trade_no|string|`12345678910`|Trade identifier in Merchant platform|
|payment_url|string|`https://pay.example.com/orders/a0b1c2d3e4f5g6h7i8j9`|Payment URL|
|created_at|string|`2023-06-15T08:34:31.000000Z`|Trade created time|

### Response Example

```json
{
    "client_key": "01h2z4p4zqrz8ctrhj9d50z3ab",
    "amount": "100.00",
    "trade_no": "100000012023072123389872",
    "out_trade_no": "12345678910",
    "payment_url": "https://pay.example.com/orders/a0b1c2d3e4f5g6h7i8j9",
    "created_at": "2023-06-15T08:34:31.000000Z"
}
```

## Query a Trade

`GET /api/v1/trades/:trade`

The Path Variable **trade** is `trade_no` or `out_trade_no`.

### PHP Example Code

```php
use App\Support\Pay;
use Illuminate\Support\Facades\Http;

$params = [
    'client_key' => '01h2z4p4zqrz8ctrhj9d50z3ab',
    'timestamp' => time(),
];
$params['signature'] = Pay::signature($params);

$tradeNo = '100000012023072123389872';
$response = Http::get("/api/v1/trades/{$tradeNo}", $params);
// or
$outTradeNo = '123456789102';
$response = Http::get("/api/v1/trades/{$outTradeNo}", $params);

print_r($response->json());
```

```
https://example.com/api/v1/trades/100000012023072123389872?client_key=01h2z4p4zqrz8ctrhj9d50z3ab&timestamp=1687683433&signature=c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2
```

```
https://example.com/api/v1/trades/123456789102?client_key=01h2z4p4zqrz8ctrhj9d50z3ab&timestamp=1687683433&signature=c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2
```

### Response Parameters

|Key|Type|Example|Description|
|----|----|----|----|
|client_key|string|`01h2z4p4zqrz8ctrhj9d50z3ab`|Client Key for Authentication.|
|amount|string|`100.00`|Amount of the trade|
|trade_no|string|`100000012023072123389872`|Trade identifier in our system|
|out_trade_no|string|`12345678910`|Trade identifier in Merchant platform|
|payment_url|string|`https://pay.example.com/orders/a0b1c2d3e4f5g6h7i8j9`|Payment URL|
|created_at|string|`2023-06-15T08:34:31.000000Z`|Trade created time|
|paid_at|string|`2023-06-15T08:34:31.000000Z`|Trade Paid time. Return `null` when the trade state is pending pay.|
|status|integer|`1`|`0` = pending，`1` = paid, `2` = closed|

::: warning
Only the trade status is **pending** will be return the key `payment_url`.
:::

### Response Example

```json
{
    
    "client_key": "01h2z4p4zqrz8ctrhj9d50z3ab",
    "amount": "100.00",
    "trade_no": "100000012023072123389872",
    "out_trade_no": "12345678910",
    "payment_url": "https://pay.example.com/order/a0b1c2d3e4f5g6h7i8j9",
    "created_at": "2023-06-15T08:34:31.000000Z",
    "paid_at": null,
    "status": 0
}
```

# Transfer API

## Create Transfer

`POST /api/v1/transfers`

### Request Parameters

|Key|Type|Required|Example|Description|
|---|---|---|---|---|
|out_transfer_no|string|yes|`12345678910`|Transfer identifier in Merchant platform.|
|bank_code|string|yes|`1000`| Refer to [Bank Codes](bank-codes.md)|
|amount|string|yes|`100.00`| Transfer amount|
|payee_account|string|yes|`1234567890123456`| Payee account|
|payee_name|string|yes|`CARD HOLDER`| Payee name|
|payee_phone|string|special|`+1234567890`| Payee phone number |
|code|string|special|`TEST0TEST00`| IFSC code etc.|
|notify_url|string|yes|`https://example.com/notify`| After the transfer is paid. We will request the notification URL you provided. Refer to [Transfer Notification](transfer-notification.md) |

### PHP Example Code

```php
use App\Support\Pay;
use Illuminate\Support\Facades\Http;

$params = [
    'client_key' => '01h2z4p4zqrz8ctrhj9d50z3ab',
    'timestamp' => time(),

    'out_transfer_no' => '12345678910',
    'bank_code' => '1000',
    'amount' => '100.00',
    'payee_account' => '1234567890123456',
    'payee_name' => 'CARD HOLDER',
    'payee_phone' => '+1234567890',  
    'code' => 'TEST0TEST00',  
    'notify_url' => 'https://example.com/notify',
];
$params['signature'] = Pay::signature($params);

$response = Http::post('/api/v1/transfers', $params);

print_r($response->json());
```

### Response Parameters

|Key|Type|Example|Description|
|---|---|---|---|
|client_key|string|`01h2z4p4zqrz8ctrhj9d50z3ab`|Client Key for Authentication.|
|transfer_no|string|`100000012023072123389872`|Transfer identifier in our system.|
|out_transfer_no|string|`12345678910`|Transfer identifier in Merchant platform.|
|bank_code|string|`1000`| Refer to [Bank Codes](bank-codes.md)|
|amount|string|`100.00`| Transfer amount|
|created_at|string|`2023-06-15T08:34:31.000000Z`|Transfer created time|
|status|integer|`1`|`0` = pending，`1` = success, `2` = processing, `3` = fail|

### Response Example

```json
{
    "client_key": "01h2z4p4zqrz8ctrhj9d50z3ab",
    "transfer_no": "100000012023072123389872",
    "out_transfer_no": "12345678910",
    "bank_code": '1000',
    "amount": "100.00",
    "created_at": "2023-06-15T08:34:31.000000Z",
    "status": 0
}
```

## Query Transfer

`GET /api/v1/transfers/:transfer`

The Path Variable **transfer** is `transfer_no` or `out_transfer_no`.

### PHP Example Code

```php
use App\Support\Pay;
use Illuminate\Support\Facades\Http;

$params = [
    'client_key' => '01h2z4p4zqrz8ctrhj9d50z3ab',
    'timestamp' => time(),
];
$params['signature'] = Pay::signature($params);

$transferNo = '100000012023072123389872';
$response = Http::get("/api/v1/transfers/{$transferNo}", $params);
// or
$outTransferNo = '123456789102';
$response = Http::get("/api/v1/transfers/{$outTransferNo}", $params);

print_r($response->json());
```

```
https://example.com/api/v1/transfers/100000012023072123389872?client_key=01h2z4p4zqrz8ctrhj9d50z3ab&timestamp=1687683433&signature=c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2
```

```
https://example.com/api/v1/transfers/123456789102?client_key=01h2z4p4zqrz8ctrhj9d50z3ab&timestamp=1687683433&signature=c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2
```

### Response Parameters

|Key|Type|Example|Description|
|---|---|---|---|
|client_key|string|`01h2z4p4zqrz8ctrhj9d50z3ab`|Client Key for Authentication.|
|transfer_no|string|`100000012023072123389872`|Transfer identifier in our system.|
|out_transfer_no|string|`12345678910`|Transfer identifier in Merchant platform.|
|bank_code|string|`1000`| Refer to [Bank Codes](bank-codes.md)|
|amount|string|`100.00`| Transfer amount|
|created_at|string|`2023-06-15T08:34:31.000000Z`|Transfer created time|
|status|integer|`1`|`0` = pending，`1` = success, `2` = processing, `3` = fail|

### Response Example

```json
{
    "client_key": "01h2z4p4zqrz8ctrhj9d50z3ab",
    "transfer_no": "100000012023072123389872",
    "out_transfer_no": "12345678910",
    "bank_code": "1000",
    "amount": "100.00",
    "created_at": "2023-06-15T08:34:31.000000Z",
    "status": 0
}
```

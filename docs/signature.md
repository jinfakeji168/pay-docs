# Signature Method

## Introduction

1. Sort the request parameters

Sort the request parameters by key in ascending order, Include [Common Request Parameters](README.md#common-request-parameters) and API's Parameters, The `signature` parameter in the common request parameters is not included.

PHP example code:

```php
$params = [
    'key3' => 'value3',
    'key1' => 'value1',
    'key2' => 'value2',
    // ...
];

ksort($params);
```

2. Concatenate the sorted request parameters into a string

use `=` to connect parameter key and parameter value, and use `&` to connect request parameter.

```php
$str = "key1=value1&key2=value2&key3=value3";
```

3. Hash the string using **HMAC-SHA256** with secret

```php
$signature = hash_hmac('sha256', $str, "CLIENT SECRET");
```

## Example

### PHP example code

```php
namespace App\Support;

class Pay
{
    public static function signature(array $params) 
    {
        // config('pay.client_secret');
        // env(PAY_CLIENT_SECRET);
        $secret = 'test_client_secret';

        if (array_key_exists('signature', $params)) {
            unset($params['signature']);
        }

        ksort($params);

        $str = "";
        foreach ($params as $key => $value) {
            $str .= $key."=".$value."&";
        }
        $str = substr($str, 0, -1);

        return hash_hmac('sha256', $str, $secret);
    }
    
    public static function validateSignature(array $params)
    {
        $signature = $params['signature'];

        if ($signature !== $this->signature($params)) {
            return false;
        }

        return true;
    }
}
```

#### Usage

For example the **client secret** is: `ccdcb845f142da37620de1473b007f8e`

##### Generate signature

```php
use App\Support\Pay;

$params = [
    'client_key' => '01h349bd08hk3ze70h3zyytaq6',
    'timestamp' => '1687683433',
    'out_trade_no' => '12345678910',
    'payer' => '{"id": "10000"}',
    'amount' => '100.00',
    'subject' => 'test create trade',
    'channel_id' => '1000',
    'notify_url' => 'https://example.com/notify',
    'redirect_url' => 'https://example.com/orders/12345678910',
];
        
$signature = Pay::signature($params);
echo $signature;
// 049a728918611d4fc74ed333d0d09456ab6b91d2f2365e390b55e0dfe888e028
```

##### Validate signature

```php
use App\Support\Pay;

$params = [
    'client_key' => '01h349bd08hk3ze70h3zyytaq6',
    'timestamp' => '1687683433',
    'signature' => 'd7514d31f7d8dde3a553e097e8a6861f299636ff747a1afd09521a5de45a93ce',
    'merchant_id' => '1000000001',
    'trade_no' => '100000012023072123389872',
    'out_trade_no' => '12345678910',
    'amount' => '100.00',
    'channel_id' => '1000',
    'subject' => 'test create trade',
    'payer' => '{"id": "10000"}',
    'paid_at' => '2023-06-15T08:34:31.000000Z',
];

if (Pay::validateSignature($params)) {
    // valid signature
} else {
    // invalid signature
}
```

### Postman Pre-request Script example
For `GET` `HEAD` `OPTIONS`
```js
let params = parseParams(pm.request.url.query.all())
pm.request.addQueryParams("signature="+signature(params))
```

For `POST` `PUT` `PATCH` `DELETE`
```js
let params = parseParams(pm.request.body.urlencoded.all())
pm.request.body.urlencoded.add({key:"signature", value: signature(params), type: "text"})
```

```js
function parseParams(obj) {
    let arr = {}
    obj.forEach((item) => {
        if (item.key == 'client_key') item.value = pm.environment.get('client_key')
        else if (item.key == 'timestamp') item.value = pm.variables.replaceIn("{{$timestamp}}")

        arr[item.key] = item.value
    })
    return arr
}

function signature(params) {
    let string = http_build_query(ksort(params))
    return CryptoJS.HmacSHA256(string, pm.environment.get('client_secret')).toString()
}

function http_build_query(obj) {
    let str = ""
    for (let key in obj) str += key+"="+obj[key]+"&"
    return str.slice(0, -1)
}

function ksort(obj) {
    let keys = Object.keys(obj).sort(), arr = {}
    for (let i in keys) arr[keys[i]] = obj[keys[i]]
    return arr
}
```
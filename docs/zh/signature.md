# 签名方式

## 介绍

1. 排序签名参数

将请求参数以 **键** 升序排序，包括 [公共请求参数](README.md#common-request-parameters) 和接口参数, 公共请求参数中的 `signature` 参数不参与签名。

PHP 示例代码：

```php
$params = [
    'key3' => 'value3',
    'key1' => 'value1',
    'key2' => 'value2',
    // ...
];

ksort($params);
```

2. 将排序后的请求参数连接成字符串

使用 `=` 连接参数键和参数值， 使用 `&` 连接参数。

```php
$str = "key1=value1&key2=value2&key3=value3";
```

3. 使用 **HMAC-SHA256** 和 **密钥** 对字符串进行哈希处理

```php
$signature = hash_hmac('sha256', $str, "CLIENT SECRET");
```

## 示例

### PHP 示例代码

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

#### 使用方法

比如 **client secret** 是： `ccdcb845f142da37620de1473b007f8e`

##### 生成签名

```php
use App\Support\Pay;

$params = [
    'client_key' => '01h349bd08hk3ze70h3zyytaq6',
    'out_trade_no' => '12345678910',
    'amount' => '100.00',
    'subject' => 'test create trade',
    'channel_id' => '1000',
    'notify_url' => 'https://example.com/notify',
    'redirect_url' => 'https://example.com/orders/12345678910',
    // ...
];
        
$signature = Pay::signature($params);
echo $signature;
// 049a728918611d4fc74ed333d0d09456ab6b91d2f2365e390b55e0dfe888e028
```

##### 验证签名

```php
use App\Support\Pay;

$params = [
    'client_key' => '01h349bd08hk3ze70h3zyytaq6',
    'signature' => 'd7514d31f7d8dde3a553e097e8a6861f299636ff747a1afd09521a5de45a93ce',
    'trade_no' => '100000012023072123389872',
    'out_trade_no' => '12345678910',
    'amount' => '100.00',
    'channel_id' => '1000',
    'paid_at' => '2023-06-15 08:34:31',
    // ...
];

if (Pay::validateSignature($params)) {
    // valid signature
} else {
    // invalid signature
}
```

### Postman 示例

Pre-request Script 

`GET` `HEAD` `OPTIONS` 请求
```js
let params = parseParams(pm.request.url.query.all())
pm.request.addQueryParams("signature="+signature(params))
```

`POST` `PUT` `PATCH` `DELETE` 请求
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
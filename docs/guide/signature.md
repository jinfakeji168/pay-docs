# 签名

### 一、排序

将请求参数以键 `升序` 排序。

:::: code-group
::: code-group-item PHP
```php
$parameters = [
    'client_key' => '01h6tn69wfcpy5q5x3vpb3x9me',
    'amount' => '100.00',
    'channel_id' => '1000',
    'out_trade_no' => '20230101000000',
    'notify_url' => 'https://your-domain.com/webhook',

    'extra' => json_encode([
        'foo' => 'bar',
    ]),
];

ksort($parameters);

print_r($parameters);
```
```
Array
(
    [amount] => 100.00
    [channel_id] => 1000
    [client_key] => 01h6tn69wfcpy5q5x3vpb3x9me
    [extra] => {"foo":"bar"}
    [notify_url] => https://your-domain.com/webhook
    [out_trade_no] => 20230101000000
)
```
:::
::::

### 二、拼接字符串

将排序后的请求参数连接成字符串。使用 `=` 连接参数键和参数值， 使用 `&` 连接参数。

:::: code-group
::: code-group-item PHP
```php
$stringToSign= "";

foreach ($parameters as $key => $value) {
    $stringToSign .= $key . "=" . $value . "&";
}

$stringToSign = substr($stringToSign, 0, -1);

print_r($stringToSign);
```

`amount=100.00&channel_id=1000&client_key=01h6tn69wfcpy5q5x3vpb3x9me&extra={"foo":"bar"}&notify_url=https://example.com/notify/url&out_trade_no=20230101000000`
:::
::::

### 三、哈希

使用 HMAC-SHA256 和 密钥 对字符串进行哈希处理。

:::: code-group
::: code-group-item PHP
```php
$signature = hash_hmac('sha256', $stringToSign, "CLIENT SECRET");

print_r($signature);
```

`94863665764a17a29eb8b560eae14054d4726777b238d201986a39937fc8a747`

:::
::::

### 签名示例代码

:::: code-group
::: code-group-item PHP
```php
/**
 * Create a string to sign given parameters.
 *
 * @param array $parameters
 * @return string
 */
function createStringToSign($parameters)
{
    ksort($parameters);

    $string = "";

    foreach ($parameters as $key => $value) {
        $string .= $key . "=" . $value . "&";
    }

    return substr($string, 0, -1);
}

/**
 * Create a signed string.
 *
 * @param string $stringToSign
 * @param string $secret
 * @return string
 */
function signed($stringToSign, $secret)
{
    return hash_hmac('sha256', $stringToSign, $secret);
}

$parameters = [
    'client_key' => 'YOUR CLIENT KEY',
    'amount' => '100.00',
    'channel_id' => '1000',
    'out_transfer_no' => '20230101000000',
    'notify_url' => 'https://your-domain.com/webhook',

    'extra' => json_encode([
        'bank_code' => 'BANK',
    ]),
];

$stringToSign = createStringToSign($parameters);

$secret = 'YOUR CLIENT SECRET';

$signature = signed($stringToSign, $secret);

var_dump($signature);

```
:::
::::

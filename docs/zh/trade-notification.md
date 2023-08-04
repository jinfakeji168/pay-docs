# 交易通知（收款通知）

交易付款后。 我们将请求您提供的通知 URL。

请求方法：**POST**

表单数据：

|参数|类型|类型|描述|
|----|----|----|----|
|client_key|string|`01h349bd08hk3ze70h3zyytaq6`|客户端标识，用于身份验证。|
|signature|string|`c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2`|签名值，请参考 [签名方式](signature.md) 。|
|amount|string|`100.00`|交易金额|
|channel_id|string|`1000`|通道ID。请参考 [通道](channels.md) 。|
|trade_no|string|`100000012023072123389872`|交易订单号。|
|out_trade_no|string|`12345678910`|商户交易订单号。|
|created_at|string|`2023-06-15 08:34:31`|创建时间。|
|custom|string|`{"custom_key": "custom_value"}`|商户自定义的参数，原样返回。|
|paid_at|string|`2023-06-15 08:35:31`|支付时间。|
|status|integer|`1`|`1` = 已支付|


### 带签名的通知

加密并不能保证通知请求来自我们。 我们将向商户发送带有签名的通知。

::: warning
商户应验证签名，以确认该请求来自我们而不是其他第三方。 签名验证请参考 [签名方式](signature.md)。
:::

### 请求参数示例

```json
{
    "client_key": "01h349bd08hk3ze70h3zyytaq6",
    "signature": "c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2",
    "amount": "100.00",
    "channel_id": "1000",
    "trade_no": "100000012023072123389872",
    "out_trade_no": "12345678910",
    "created_at": "2023-06-15 08:34:31",
    "custom": "{\"custom_key\": \"custom_value\"}",
    "paid_at": "2023-06-15 08:35:31",
    "status": 1,
}
```

### 响应参数

商户应响应参数来完成交易。

|参数|类型|必须|示例|描述|
|----|----|----|----|----|
|code|string|是|`SUCCESS`|状态码，`SUCCESS`表示 **成功** 接收，其他代码表示 **失败**。|
|message|string|否|`We received the notification, Thank you!`||

```json
{
    "code": "SUCCESS",
    "message": "We received the notification, Thank you!",
}
```

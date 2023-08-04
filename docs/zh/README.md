# 介绍

:::warning
需要在 **Header Parameters** 添加 `Accept:application/json` 获取 JSON 数据。
:::

## 接口

|接口地址|请求方法|描述||
|----|----|----|----|
|`/api/v1/trades`|`POST`|交易接口，收款下单。|[详情](trade-api.md)|
|`/api/v1/trades/:trade`|`GET`|查询交易。|[详情](trade-api.md)|
|`/api/v1/transfers`|`POST`|转账接口，代付下单。|[详情](transfer-api.md)|
|`/api/v1/transfers/:transfer`|`GET`|查询转账。|[详情](transfer-api.md)|
|`/api/v1/user`|`GET`|查询用户基本信息。可用资金等等。|[详情](user-api.md)|

## 公共请求参数

|参数|类型|必需的|示例|描述|
|----|----|----|----|----|
|client_key|string|是|`01h2z4p4zqrz8ctrhj9d50z3ab`|客户端标识，用于身份验证。|
|signature|string|是|`c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2`|请参考 [签名方式](signature.md) 。|

## 成功的请求

HTTP 状态码 `2xx`.

```json
{
    "amount": "100.00",
    "client_key": "01h2z4p4zqrz8ctrhj9d50z3ab",
    "created_at": "2023-06-15 08:34:31",
    "out_trade_no": "12345678910",
    "payment_url": "https://pay.example.com/orders/a0b1c2d3e4f5g6h7i8j9",
    "signature": "c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2",
    "status": 0,
    "trade_no": "100000012023072123389872",
}
```

## 错误的请求

HTTP 状态码 `4xx` 或 `5xx`，同时响应 `message` 字段。当请求参数验证失败时，会响应 `errors` 字段。

```json
// HTTP Status code: 403
{
    "message": "Invalid signature." 
}
```

```json
// HTTP Status code: 422
{
    "message": "The out trade no has already been taken.",
    "errors": {
        "out_trade_no": [
            "The out trade no has already been taken."
        ]
    }
}
```

```json
// HTTP Status code: 422
{
    "message": "The out trade no field is required. (and 2 more errors)",
    "errors": {
        "out_trade_no": [
            "The out trade no field is required."
        ],
        "amount": [
            "The amount field is required."
        ],
        "notify_url": [
            "The notify url field is required."
        ]
    }
}
```

::: tip
更多HTTP 状态码的知识，请参考 [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
:::

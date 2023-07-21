# Introduction

:::warning
You may need to add `Accept:application/json` to the **Header Parameters** if you want to respond with JSON data.
:::

## Common Request Parameters

|Key|Type|Required|Example|Description|
|----|----|----|----|----|
|client_key|string|yes|`01h2z4p4zqrz8ctrhj9d50z3ab`|Client Key for Authentication.|
|signature|string|yes|`c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2`|Refer to [Signature Method](signature.md)|

## Response without errors

HTTP status code `2xx`.

```json
{
    "amount": "100.00",
    "client_key": "01h2z4p4zqrz8ctrhj9d50z3ab",
    "created_at": "2023-06-15T08:34:31.000000Z",
    "out_trade_no": "12345678910",
    "payment_url": "https://pay.example.com/orders/a0b1c2d3e4f5g6h7i8j9",
    "signature": "c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2",
    "status": 0,
    "trade_no": "100000012023072123389872",
}
```

## Response with errors

HTTP status code `4xx` or `5xx`, and with the key `message`. The key `errors` will be return when the request parameters validation fails.

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
Refer to [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
:::

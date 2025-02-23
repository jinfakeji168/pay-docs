# Responses

[HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## HTTP Status Codes

| Status Code               | Description                     |
|---------------------------|---------------------------------|
| 200 OK                    | When `GET` request successful.  |
| 201 Created               | When `POST` request successful. |
| 403 Forbidden             | Invalid signature.              |
| 404 Not Found             | Transaction not found.          |
| 422 Unprocessable Content | Validation Exception.           |
| 429 Too Many Requests     |                                 |
| 500 Internal Server Error |                                 |

## Successful examples

### 200 OK

```json
{
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "amount": "100.00",
  "trade_no": "100000012023072123389872",
  "out_trade_no": "1698896652712",
  "created_at": "2023-01-01T01:01:01.000000Z",
  "paid_at": "2023-01-01T01:02:03.000000Z",
  "status": 1
}
```

### 201 Created

```json
{
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "amount": "100.00",
  "trade_no": "100000012023072123389872",
  "out_trade_no": "20230101000000",
  "payment_url": "https://example.com/cashier",
  "created_at": "2023-01-01T01:01:01.000000Z"
}
```

## Failed examples

### 403 Forbidden

```json
{
  "message": "Invalid signature."
}
```

### 404 Not Found

```json
{
  "message": "The transaction not found."
}
```

### 422 Unprocessable Content

```json
{
  "message": "The out trade no has already been taken.",
  "errors": {
    "out_trade_no": ["The out trade no has already been taken."]
  }
}
```

### 429 Too Many Requests

```json
{
  "message": "Too Many Attempts."
}
```

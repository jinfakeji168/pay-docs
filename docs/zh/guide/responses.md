# 响应

## 状态说明

| HTTP Status Code          | 说明                  |
|---------------------------|---------------------|
| 200 OK                    | 查询成功                |
| 201 Created               | 下单成功                |
| 403 Forbidden             | 签名错误                |
| 404 Not Found             | 订单未找到               |
| 422 Unprocessable Content | 表单验证不通过（提交的参数未通过验证） |
| 429 Too Many Requests     | 限流（通常不会响应这个错误）      |
| 500 Internal Server Error | 服务器错误               |

更多HTTP 状态码知识，请参考 [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 。

## 成功示例

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

## 失败示例

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

### 500 Internal Server Error

```json
{
  "message": "Server error. Please contact support."
}
```

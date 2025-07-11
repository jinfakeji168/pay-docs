# Usdt

## Receive money

### Channels for receive money

| ID   | Description                                        |
| ---- | -------------------------------------------------- |
| 1052 |                                    |

### Request example for receive money

```shell{8}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "10000",
    "channel_id": "1052",
    "out_trade_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

```json{4,6}
{
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "amount": "100.00",
  "trade_no": "100000012023072123389872",
  "out_trade_no": "20230101000000",
  "payment_url": "https://example.com/cashier",
  "created_at": "2023-01-01T01:01:01.000000Z"
}
```

### Get a transaction for receive money

```shell
curl -X GET \
  https://example.com/api/v1/trades/20230101000000?client_key=01h6tn69wfcpy5q5x3vpb3x9me&signature=ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082 \
  -H "Accept: application/json"
```

```json{8}
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

Status

| Code | Description     |
| ---- | --------------- |
| 0    | Pending payment |
| 1    | Paid            |

## Send money

### Channels for send money

| ID   | Description      |
| ---- | ---------------- |
| 5056 |  |

### Extra parameter <Badge type="warning" text="extra" vertical="top" />

If you send money to a bank in Vietnam, The `extra.bank_code` field is **required**.

| Field     | Required | Description               |
| --------- | -------- | ------------------------- |
| bank_code | Yes      |  |

::: warning NOTE
The `extra` It must be a valid JSON string, required in Thailand, and the bank card number must be at least 9 digits. for example:
:::

```json{4,6}
{ "banc_code":"USDT" }
```

### Request examples for send money

Send money to a bank in Vietnam:

```shell{8,13}
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
    "amount": "10000",
    "channel_id": "5056",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "extra": "{\"bank_code\":\"VCB\"}",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```


```json{4}
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "transfer_no": "100000012023072123389872",
  "out_transfer_no": "20230101000000",
  "channel_id": "5056",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "created_at": "2023-01-01T01:01:01.000000Z"
}
```


Status

| Code | Description |
| ---- | ----------- |
| 0    | Pending     |
| 1    | Successful  |
| 2    | Processing  |
| 3    | Failed      |



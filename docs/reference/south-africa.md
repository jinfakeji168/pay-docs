# South Africa

## Receive money

### Channels for receive money

| ID   | Description           |
| ---- | --------------------- |
| 1046 | Banks in South Africa |

### Request example for receive money

```shell{8}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "100.00",
    "channel_id": "1046",
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

## Send money

### Channels for send money

| ID   | Description           |
| ---- | --------------------- |
| 5052 | Banks in South Africa |

### Extra parameter <Badge type="warning" text="extra" vertical="top" />

`extra`

| Field     | Required | Description               |
| --------- | -------- | ------------------------- |
| bank_code | Yes      | [Bank codes](#bank-codes) |

### Request example of send money

```shell{8,13}
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
    "amount": "100.00",
    "channel_id": "5052",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "extra": "{\"bank_code\":\"10010\"}",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

```json{4}
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "transfer_no": "100000012023072123389872",
  "out_transfer_no": "20230101000000",
  "channel_id": "5052",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "created_at": "2023-01-01T01:01:01.000000Z"
}
```

### Get a transaction for send money

```shell
curl -X GET \
  https://example.com/api/v1/transfers/20230101000000?client_key=01h6tn69wfcpy5q5x3vpb3x9me&signature=ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082 \
  -H "Accept: application/json"
```

```json{11}
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "transfer_no": "100000012023072123389872",
  "out_transfer_no": "20230101000000",
  "channel_id": "5052",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "created_at": "2023-01-01T01:01:01.000000Z",
  "paid_at": "2023-01-01T01:02:03.000000Z",
  "status": 1
}
```

### Bank codes

`extra.bank_code`

| Bank code | Bank name           |
| --------- | ------------------- |
| 10010     | Absa                |
| 10011     | NedBank             |
| 10012     | Capitec             |
| 10013     | Standard            |
| 10014     | Fnb                 |
| 10015     | African Bank        |
| 10016     | Bidvest Bank        |
| 10017     | Discovery           |
| 10018     | FirstRand Bank      |
| 10019     | Grindrod Bank       |
| 10020     | Imperial Bank       |
| 10021     | Investec Bank       |
| 10022     | Sasfin Bank         |
| 10023     | Ubank               |
| 10024     | TymeBank            |
| 10025     | Mercantile Bank     |
| 10026     | Albaraka Bank       |
| 10027     | HBZ Bank            |
| 10028     | Habib Overseas Bank |
| 10029     | Wesbank             |
| 10030     | Rand Merchant Bank  |
| 10031     | Bank of Athens      |
| 10032     | Access Bank         |

# Thailand

## Receive money

### Channels for receive money

| ID   | Description       |
| ---- | ----------------- |
| 1074 | Banks in Thailand |

### Extra parameter <Badge type="warning" text="extra" vertical="top" />

`extra`

| Field            | Required | Description                                |
| ---------------- | -------- | ------------------------------------------ |
| bank_code        | Yes      | [Bank codes](#bank-codes)                  |
| holder_name      | Yes      | Payer name                                 |
| bank_card_number | Yes      | Card number, must be greater than 9 digits |

::: warning NOTE
The `extra` It must be a valid JSON string, required in Thailand, and the bank card number must be at least 9 digits. for example:
:::

```json{4,6}
{"banc_code":"CPF", "bank_card_number":"123456789"，"holder_name":"BRAIN TECHNOLOGIES"}
```

### Request example for receive money

```shell{8}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "100.00",
    "channel_id": "1074",
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

| ID   | Description       |
| ---- | ----------------- |
| 5069 | Banks in Thailand |

### Extra parameter <Badge type="warning" text="extra" vertical="top" />

`extra`

| Field            | Required | Description                                |
| ---------------- | -------- | ------------------------------------------ |
| bank_code        | Yes      | [Bank codes](#bank-codes)                  |
| holder_name      | Yes      | Payer name                                 |
| bank_card_number | Yes      | Card number, must be greater than 9 digits |

::: warning NOTE
The `extra` It must be a valid JSON string, required in Thailand, and the bank card number must be at least 9 digits. for example:
:::

```json{4,6}
{"banc_code":"CPF", "bank_card_number":"123456789"，"holder_name":"BRAIN TECHNOLOGIES"}
```

### Request example of send money

```shell{8,13}
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
    "amount": "100.00",
    "channel_id": "5069",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "extra": "{\"bank_code\":\"KBANK\"}",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

```json{4}
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "transfer_no": "100000012023072123389872",
  "out_transfer_no": "20230101000000",
  "channel_id": "5069",
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
  "channel_id": "5069",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "created_at": "2023-01-01T01:01:01.000000Z",
  "paid_at": "2023-01-01T01:02:03.000000Z",
  "status": 1
}
```

### Bank codes

`extra.bank_code`

| Bank code | Bank name                                          |
| --------- | -------------------------------------------------- |
| KBANK     | Kasikorn Bank Plc.                                 |
| BBL       | Bangkok Bank Plc.                                  |
| KTB       | Krung Thai Bank                                    |
| ABN       | ABN Amro Bank N.V.                                 |
| TTB       | TMBThanachart                                      |
| SCB       | Siam Commercial Bank                               |
| UOB       | UOB Bank Plc.                                      |
| BAY       | Bank of Ayudhya / Krungsri                         |
| CIMB      | CIMB Thai Bank Public Company Limited              |
| LHBANK    | Land and Houses Bank Public Company Limited        |
| GSB       | Government Savings Bank                            |
| KKP       | Kiatnakin Phatra Bank Public Company Limited       |
| CITI      | Citibank N.A.                                      |
| GHB       | Government Housing Bank                            |
| BAAC      | Bank for Agriculture and Agricultural Cooperatives |
| MHCB      | Mizuho Corporate Bank Limited                      |
| IBANK     | Islamic Bank of Thailand                           |
| TISCO     | TISCO Bank Plc.                                    |

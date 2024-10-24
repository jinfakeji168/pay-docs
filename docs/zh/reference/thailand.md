# 泰国

## 代收

### 代收通道

| ID   | 说明 |
| ---- | ---- |
| 1009 | 银行 |

### 代收下单

```shell{8}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "100.00",
    "channel_id": "1009",
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

### 代收查单

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

## 代付

### 代付通道

| ID   | 说明 |
| ---- | ---- |
| 5014 | 银行 |

### 业务参数 <Badge type="warning" text="extra" vertical="top" />

`extra`

| 参数      | 必填 | 说明                  |
| --------- | ---- | --------------------- |
| bank_code | 是   | [银行编码](#银行编码) |

### 代付下单

```shell{8,13}
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
    "amount": "100.00",
    "channel_id": "5014",
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
  "channel_id": "5014",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "created_at": "2023-01-01T01:01:01.000000Z"
}
```

### 代付查单

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
  "channel_id": "5014",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "created_at": "2023-01-01T01:01:01.000000Z",
  "paid_at": "2023-01-01T01:02:03.000000Z",
  "status": 1
}
```

### 银行编码

`extra.bank_code`

| 银行编码 | 银行名称                                           |
| -------- | -------------------------------------------------- |
| KBANK    | Kasikorn Bank Plc.                                 |
| BBL      | Bangkok Bank Plc.                                  |
| KTB      | Krung Thai Bank                                    |
| ABN      | ABN Amro Bank N.V.                                 |
| TTB      | TMBThanachart                                      |
| SCB      | Siam Commercial Bank                               |
| UOB      | UOB Bank Plc.                                      |
| BAY      | Bank of Ayudhya / Krungsri                         |
| CIMB     | CIMB Thai Bank Public Company Limited              |
| LHBANK   | Land and Houses Bank Public Company Limited        |
| GSB      | Government Savings Bank                            |
| KKP      | Kiatnakin Phatra Bank Public Company Limited       |
| CITI     | Citibank N.A.                                      |
| GHB      | Government Housing Bank                            |
| BAAC     | Bank for Agriculture and Agricultural Cooperatives |
| MHCB     | Mizuho Corporate Bank Limited                      |
| IBANK    | Islamic Bank of Thailand                           |
| TISCO    | TISCO Bank Plc.                                    |

# Vietnam

## Receive money

### Channels for receive money

| ID   | Description                                        |
| ---- | -------------------------------------------------- |
| 1001 | Banks in Vietnam                                   |
| 1047 | Banks in Vietnam (New Version of The Cashier Page) |
| 1002 | MoMo                                               |
| 1024 | Zalo                                               |

### Request example for receive money

```shell{8}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "10000",
    "channel_id": "1001",
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

### Specific a bank (Optional)

If you want specific a bank to receive money. You may include the `extra.bank_code` field in your request.

`extra.bank_code`

| Code | Name        |
| ---- | ----------- |
| BIDV | BIDV        |
| VCB  | Vietcombank |
| TCB  | Techcombank |
| MBB  | MB Bank     |

```shell{8,11}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "10000",
    "channel_id": "1001",
    "out_trade_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "extra": "{\"bank_code\":\"VCB\"}",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

### Different cashier page (Optional)

If you wish to display a different cashier page to your customers, you may include the field `extra.type` in your request. By the default: display full information.

`extra.type`

| Type | Description                    |
| ---- | ------------------------------ |
| 1    | Display Bank information only. |
| 2    | Display QR-Code only.          |

```shell{8,11}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "10000",
    "channel_id": "1001",
    "out_trade_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "extra": "{\"type\":\"1\"}",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
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
| 2    | Closed          |

## Send money

### Channels for send money

| ID   | Description      |
| ---- | ---------------- |
| 5001 | Banks in Vietnam |
| 5002 | MoMo             |
| 5029 | Zalo             |

### Extra parameter <Badge type="warning" text="extra" vertical="top" />

If you send money to a bank in Vietnam, The `extra.bank_code` field is **required**.
If you send money to Zalo or MoMo, Please DO NOT include the `extra` field in your request.

| Field     | Required | Description               |
| --------- | -------- | ------------------------- |
| bank_code | Yes      | [Bank codes](#bank-codes) |

::: warning NOTE
The `extra` parameter MUST be a valid JSON string.
:::

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
    "channel_id": "5001",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "extra": "{\"bank_code\":\"VCB\"}",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

Send money to MoMo:

```shell{8}
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
    "amount": "10000",
    "channel_id": "5002",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

Send money to Zalo:

```shell{8}
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
    "amount": "10000",
    "channel_id": "5029",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

```json{4}
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "transfer_no": "100000012023072123389872",
  "out_transfer_no": "20230101000000",
  "channel_id": "5001",
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
  "channel_id": "5001",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "created_at": "2023-01-01T01:01:01.000000Z",
  "paid_at": "2023-01-01T01:02:03.000000Z",
  "status": 1
}
```

Status

| Code | Description |
| ---- | ----------- |
| 0    | Pending     |
| 1    | Successful  |
| 2    | Processing  |
| 3    | Failed      |

### Bank codes

`extra.bank_code`

| Code      | Name                                |
| --------- | ----------------------------------- |
| TCB       | Techcombank                         |
| VPB       | VPBank                              |
| VIB       | VIB                                 |
| BIDV      | BIDV                                |
| MBB       | MB                                  |
| TPB       | TPBank                              |
| STB       | Sacombank                           |
| VCB       | Vietcombank                         |
| ACB       | ACB                                 |
| AGR       | Agribank                            |
| CTG       | Vietinbank                          |
| SEAB      | SeAbank                             |
| HDB       | HDBank                              |
| MSB       | MSB                                 |
| OCB       | OCB                                 |
| PVC       | PVcomBank                           |
| KLB       | Kien Long Bank                      |
| SHB       | SHB                                 |
| ABB       | An Binh Commercial Joint Stock Bank |
| DAB       | DongA Bank                          |
| BAB       | BacAbank                            |
| LPB       | LPBank                              |
| BVB       | BaoVietBank                         |
| VBB       | Vietbank                            |
| VCCB      | BVBank                              |
| SGB       | Saigonbank                          |
| PGB       | PG Bank                             |
| SCB       | Sai Gon Joint Stock Commercial Bank |
| EIB       | Eximbank                            |
| SHBVN     | Shinhan Bank Vietnam                |
| Oceanbank | Oceanbank                           |
| NAB       | NAM A bank                          |

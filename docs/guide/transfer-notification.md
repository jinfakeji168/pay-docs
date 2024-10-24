# Webhook for send money

Request method: `POST`

Content-Type: `application/json`

:::warning NOTE
DaYangPay will request the webhook URL you provided when the transaction status is `successful` or `failed`.
:::

### Body parameters <Badge type="tip" text="Body" vertical="top" />

| Key             | Type    | Sign | Description                                                 |
| --------------- | ------- | ---- | ----------------------------------------------------------- |
| client_key      | string  | Yes  | The API access key.                                         |
| signature       | string  | No   | Signed value.                                               |
| amount          | string  | Yes  | The amount for send money.                                  |
| channel_id      | string  | Yes  | The payment method.                                         |
| transfer_no     | string  | Yes  | The transaction ID DaYangPay provided.                      |
| out_transfer_no | string  | Yes  | The transaction ID you provided.                            |
| created_at      | string  | Yes  | Created time. `UTC±00:00`                                   |
| paid_at         | string  | Yes  | Paid time when the transaction is `successful`. `UTC±00:00` |
| message         | string  | Yes  | Failed message when the transaction is `failed`.            |
| status          | integer | Yes  | The transaction status.                                     |

#### Status code

| Code | Description |
| ---- | ----------- |
| 1    | Successful  |
| 3    | Failed      |

### Request examples

Successful example

```shell{11,13,14}
curl -X POST \
  https://your-domain.com/webhook \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h349bd08hk3ze70h3zyytaq6",
    "signature": "c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2",
    "amount": "50000.00",
    "channel_id": "5001",
    "transfer_no": "100000012023072123389872",
    "out_transfer_no": "20230101000000",
    "created_at": "2023-01-01T01:01:01.000000Z",
    "paid_at": "2023-01-01T01:02:03.000000Z",
    "status": 1
  }'
```

Failed example:

```shell{11,13,14}
curl -X POST \
  https://your-domain.com/webhook \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h349bd08hk3ze70h3zyytaq6",
    "signature": "c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2",
    "amount": "50000.00",
    "channel_id": "5001",
    "transfer_no": "100000012023072123389872",
    "out_transfer_no": "20230101000000",
    "created_at": "2023-01-01T01:01:01.000000Z",
    "message": "Failed.",
    "status": 3
  }'
```

### Response parameters

| Key  | Value   |
| ---- | ------- |
| code | SUCCESS |

The `code` is `SUCCESS` means the request is accepted. other code means that is failed.

#### Example:

HTTP Status code: `200`

```json
{
  "code": "SUCCESS"
}
```

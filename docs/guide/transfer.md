# Send money

POST `/api/v1/transfers`

### HTTP headers <Badge type="tip" text="Header" vertical="top" />

| Key    | Value              |
| ------ | ------------------ |
| Accept | `application/json` |

### Body parameters <Badge type="tip" text="Body" vertical="top" />

| Key             | Type   | Required    | Sign | Description                                                       |
| --------------- | ------ | ----------- | ---- | ----------------------------------------------------------------- |
| client_key      | string | Yes         | Yes  | The API access key.                                               |
| amount          | string | Yes         | Yes  | The amount for send money.                                        |
| channel_id      | string | Yes         | Yes  | The payment method.                                               |
| out_transfer_no | string | Yes         | Yes  | The transaction ID you provided. **Must be a unique identifier**. |
| notify_url      | string | Yes         | Yes  | The webhook URL you provided.                                     |
| payee_account   | string | Yes         | Yes  | Send money to the account.                                        |
| payee_name      | string | Yes         | Yes  | Full name for the account.                                        |
| extra           | string | Required If | Yes  | Extra parameters. **MUST be a valid JSON string**.                |
| signature       | string | Yes         | No   | Signed value.                                                     |

### Request example

```shell{8,13}
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
    "amount": "100.00",
    "channel_id": "5003",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "extra": "{\"account_type\":\"CPF\", \"id_number\":\"1234567890\"}",
    "signature": ""
  }'
```

### Response parameters

| Key             | Type   | Description                            |
| --------------- | ------ | -------------------------------------- |
| client_key      | string | The API access key.                    |
| amount          | string | The amount for send money.             |
| transfer_no     | string | The transaction ID DaYangPay provided. |
| out_transfer_no | string | The transaction ID you provided.       |
| channel_id      | string | The payment method.                    |
| payee_account   | string | Send money to the account.             |
| payee_name      | string | Full name for the account.             |
| created_at      | string | Created time. `UTC±00:00`              |

### Response example

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

### Important Information

::: warning Important
Due to communication issues, when you request DaYangPay, there may be a timeout, or you may not receive any response. However, in reality, DaYangPay has responded normally. In this case, to avoid any loss of funds, you should set your transaction status to 'successful' and not process it through other third parties.
:::

Communication Test Example with the DaYangPay Server:

```bash
curl -X POST \
  https://pay.dayangpay.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": "50000.00",
    "channel_id": "5001",
    "client_key": "01j****************7h",
    "extra": "{\"bank_code\":\"AGR\"}",
    "notify_url": "https://api.your-domain.com/webhook-for-dayangpay",
    "out_transfer_no": "20240101000000123456",
    "payee_account": "1234567890",
    "payee_name": "PAYEE NAME",
    "signature": "99c************************************de"
}' \
  -w "\n\nDNS Lookup: %{time_namelookup}s\nConnection: %{time_connect}s\nPretransfer: %{time_pretransfer}s\nStart Transfer: %{time_starttransfer}s\nTotal Time: %{time_total}s\n"
```

Output:

```text
DNS Lookup: 0.001148s
Connection: 0.095378s
Pretransfer: 0.241598s
Start Transfer: 0.452405s
Total Time: 0.452453s
```

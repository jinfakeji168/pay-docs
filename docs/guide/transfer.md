# Send money

POST `/api/v1/transfers`

### HTTP headers <Badge type="tip" text="Header" vertical="top" />

| Key    | Value              |      
|--------|--------------------|
| Accept | `application/json` | 

### Body parameters <Badge type="tip" text="Body" vertical="top" />

| Key             | Type   | Required     | Sign | Description                                                       | 
|-----------------|--------|--------------|------|-------------------------------------------------------------------|
| client_key      | string | Yes          | Yes  | The API access key.                                               | 
| amount          | string | Yes          | Yes  | The amount for send money.                                        |                   
| channel_id      | string | Yes          | Yes  | The payment method.                                               | 
| out_transfer_no | string | Yes          | Yes  | The transaction ID you provided. **Must be a unique identifier**. |                   
| notify_url      | string | Yes          | Yes  | The webhook URL you provided.                                     |                   
| payee_account   | string | Yes          | Yes  | Send money to the account.                                        |                   
| payee_name      | string | Yes          | Yes  | Full name for the account.                                        |                   
| extra           | string | Required If  | Yes  | Extra parameters. **MUST be a valid JSON string**.                |                   
| signature       | string | Yes          | No   | Signed value.                                                     |

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

| Key             | Type   | Description                      | 
|-----------------|--------|----------------------------------|
| client_key      | string | The API access key.              |
| amount          | string | The amount for send money.       |
| transfer_no     | string | DaYangPay's transaction ID.      |
| out_transfer_no | string | The transaction ID you provided. |
| channel_id      | string | The payment method.              |
| payee_account   | string | Send money to the account.       |
| payee_name      | string | Full name for the account.       |
| created_at      | string | Created time. `UTC±00:00`        |

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

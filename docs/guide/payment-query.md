# Get a transaction for receive money

GET `/api/v1/trades/:trade`

### HTTP Headers <Badge type="tip" text="Header" vertical="top" />

| Key    | Value              |
|--------|--------------------|
| Accept | `application/json` | 

### Path parameters <Badge type="tip" text="Path" vertical="top" />

| Key   | Type   | Required | Sign | Description                                              |                  
|-------|--------|----------|------|----------------------------------------------------------|
| trade | string | Yes      | No   | DaYangPay's transaction ID or Merchant's transaction ID. |

### Query parameters <Badge type="tip" text="Query" vertical="top" />

| Key        | Type   | Required | Sign | Description         |                  
|------------|--------|----------|------|---------------------|
| client_key | string | Yes      | Yes  | The API access key. |
| signature  | string | Yes      | No   | Signed value.       |

### Request parameters

```shell
curl -X GET \
  https://example.com/api/v1/trades/20230101000000?client_key=YOUR_CLIENT_KEY&signature=SIGNED_STRING \
  -H "Accept: application/json"
```

### Response parameters
| Key          | Type    | Description                            | 
|--------------|---------|----------------------------------------|
| client_key   | string  | The API access key.                    |
| amount       | string  | The amount for receive money.          |
| trade_no     | string  | DaYangPay's transaction ID.            |
| out_trade_no | string  | Merchant's transaction ID.             |
| payment_url  | string  | Cashier page URL.                      |
| created_at   | string  | created time. `UTC±00:00`              |
| paid_at      | string  | paid time. `UTC±00:00`                 |
| status       | integer | `0: Pending, 1: Successful, 3: Failed` |


### Response example

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

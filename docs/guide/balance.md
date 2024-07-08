# DaYangPay Balance

GET `/api/v1/user/balances`

### HTTP headers <Badge type="tip" text="Header" vertical="top" />

| Key    | Value              |       
|--------|--------------------|
| Accept | `application/json` | 

### Query parameters <Badge type="tip" text="Query" vertical="top" />

| Key        | Type   | Required | Sign | Description         |                  
|------------|--------|----------|------|---------------------|
| client_key | string | 是        | 是    | The API access key. |
| signature  | string | 是        | 否    |                     |

### Request example

```shell
curl -X GET \
  https://example.com/api/v1/user/balances?client_key=YOUR_CLIENT_KEY&signature=SIGNED_STRING \
  -H "Accept: application/json"
```

### Response parameters
| Key              | Type     | Description             | 
|-----------------|--------|----------------|
| client_key      | string | The API access key.  |
| available_funds | string | 可用资金。单位：`元`。   |
| locked_funds    | string | 锁定资金。单位：`元`。   |
| currency        | string | 币种。            |

### Response example

```json{3}
{
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "available_funds": "16055.90",
  "locked_funds": "0.00",
  "currency": "BRL"
}
```

# DaYangPay Balance

GET `/api/v1/user/balances`

### HTTP headers <Badge type="tip" text="Header" vertical="top" />

| Key    | Value              |
| ------ | ------------------ |
| Accept | `application/json` |

### Query parameters <Badge type="tip" text="Query" vertical="top" />

| Key        | Type   | Required | Sign | Description         |
| ---------- | ------ | -------- | ---- | ------------------- |
| client_key | string | Yes      | Yes  | The API access key. |
| signature  | string | Yes      | No   | Signed value.       |

### Request example

```shell
curl -X GET \
  https://example.com/api/v1/user/balances?client_key=01h6tn69wfcpy5q5x3vpb3x9me&signature=ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082 \
  -H "Accept: application/json"
```

### Response parameters

| Key             | Type   | Description                      |
| --------------- | ------ | -------------------------------- |
| client_key      | string | The API access key.              |
| available_funds | string | Available funds of your account. |
| locked_funds    | string | Locked funds of your account.    |
| currency        | string | The currency code.               |

### Response example

```json{3}
{
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "available_funds": "16055.90",
  "locked_funds": "0.00",
  "currency": "BRL"
}
```

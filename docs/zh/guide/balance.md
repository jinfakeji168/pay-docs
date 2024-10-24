# 余额查询

GET `/api/v1/user/balances`

### HTTP头参数 <Badge type="tip" text="Header" vertical="top" />

| 参数   | 说明               |
| ------ | ------------------ |
| Accept | `application/json` |

### 查询参数 <Badge type="tip" text="Query" vertical="top" />

| 参数       | 类型   | 必填 | 参与签名 | 说明                       |
| ---------- | ------ | ---- | -------- | -------------------------- |
| client_key | string | 是   | 是       | 商户标识。由大洋支付颁发。 |
| signature  | string | 是   | 否       | 签名值。                   |

### 请求示例

```shell
curl -X GET \
  https://example.com/api/v1/user/balances?client_key=01h6tn69wfcpy5q5x3vpb3x9me&signature=ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082 \
  -H "Accept: application/json"
```

### 响应参数

| 参数            | 类型   | 说明                       |
| --------------- | ------ | -------------------------- |
| client_key      | string | 商户标识。由大洋支付颁发。 |
| available_funds | string | 可用资金。单位：`元`。     |
| locked_funds    | string | 锁定资金。单位：`元`。     |
| currency        | string | 币种。                     |

### 响应示例

```json{3}
{
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "available_funds": "16055.90",
  "locked_funds": "0.00",
  "currency": "BRL"
}
```

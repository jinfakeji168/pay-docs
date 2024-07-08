# Query a receive money transaction

GET `/api/v1/trades/:trade`

### HTTP Headers <Badge type="tip" text="Header" vertical="top" />

| Key | Value              |        
|-----------|--------------------|
| Accept    | `application/json` | 

### Path parameters <Badge type="tip" text="Path" vertical="top" />

| Key | Type   | Required | Sign | Description              |                  
|-----------|--------|----------|------|-----------------|
| trade     | string | Yes      | No   | 大洋支付订单号 或 商户订单号 |

### Query parameters <Badge type="tip" text="Query" vertical="top" />

| Key         | Type     | Required | Sign | Description            |                  
|------------|--------|----|------|---------------|
| client_key | string | Yes  | Yes  | 商户标识。由大洋支付颁发。 |
| signature  | string | Yes  | No   | 签名值。          |

### Request parameters

```shell
curl -X GET \
  https://example.com/api/v1/trades/20230101000000?client_key=YOUR_CLIENT_KEY&signature=SIGNED_STRING \
  -H "Accept: application/json"
```

### Response parameters
| Key           | Type      | Description                             | 
|--------------|---------|--------------------------------|
| client_key   | string  | The API access key.                  |
| amount       | string  | 代收金额。单位：`元`。                   |
| trade_no     | string  | 代收订单号。                         |
| out_trade_no | string  | 商户代收订单号。                       |
| payment_url  | string  | 支付网址。                          |
| created_at   | string  | 下单时间。UTC 时间。                   |
| paid_at      | string  | 付款时间。UTC 时间。未付款订单响应 `null` 。   |
| status       | integer | 订单状态。 `0: 待支付, 1: 已支付, 2: 已关闭` |


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

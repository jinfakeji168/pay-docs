# Query a send money transaction

GET `/api/v1/transfers/:transfer`

### HTTP Headers <Badge type="tip" text="Header" vertical="top" />

| Key    | Value              |       
|--------|--------------------|
| Accept | `application/json` | 

### Path parameters <Badge type="tip" text="Path" vertical="top" />

| Key         | Type     | Required | Sign | Description            |                  
|------------|--------|----------|------|---------------|
| transfer | string | Yes      | No   | 大洋支付订单号 或 商户订单号 |

### Qeury parameters <Badge type="tip" text="Query" vertical="top" />

| Key        | Type     | Required | Sign | Description            |                  
|------------|--------|----|------|---------------|
| client_key | string | 是  | 是    | 商户标识。由大洋支付颁发。 |
| signature  | string | 是  | 否    | 签名值。          |

### Request example

```shell
curl -X GET \
  https://example.com/api/v1/transfers/20230101000000?client_key=YOUR_CLIENT_KEY&signature=SIGNED_STRING \
  -H "Accept: application/json"
```

### Response parameters
| Key              | Type      | Description                                     | 
|-----------------|---------|----------------------------------------|
| client_key      | string  | The API access key.                          |
| amount          | string  | 代付金额。单位：`元`。                           |
| transfer_no     | string  | 代付订单号。                                 |
| out_transfer_no | string  | 商户代付订单号。                               |
| channel_id      | string  | 代付通道ID。                                |
| payee_account   | string  | 收款人账号。                                 |
| payee_name      | string  | 收款人姓名。                                 |
| created_at      | string  | 下单时间。UTC 时间。                           |
| paid_at         | string  | 付款时间。UTC 时间。未付款订单响应 `null` 。           |
| status          | integer | 订单状态。`0: 待处理, 1: 代付成功, 2: 处理中, 3:代付失败` |

### Response example

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

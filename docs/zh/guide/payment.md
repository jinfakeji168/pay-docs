# 代收下单

POST `/api/v1/trades`

### HTTP头参数 <Badge type="tip" text="Header" vertical="top" />

| 参数   | 说明               |
| ------ | ------------------ |
| Accept | `application/json` |

### 包体参数 <Badge type="tip" text="Body" vertical="top" />

| 参数         | 类型   | 必填 | 参与签名 | 说明                                                                            |
| ------------ | ------ | ---- | -------- | ------------------------------------------------------------------------------- |
| client_key   | string | 是   | 是       | 商户标识。由大洋支付颁发。                                                      |
| amount       | string | 是   | 是       | 代收金额。单位：`元`。                                                          |
| channel_id   | string | 是   | 是       | 代收通道ID。                                                                    |
| out_trade_no | string | 是   | 是       | 商户代收订单号。<br><span style="color: red">最大长度 64，必须是唯一的。</span> |
| notify_url   | string | 是   | 是       | 商户接收通知的网址。                                                            |
| extra        | string | 否   | 是       | 业务参数。 必须是 `JSON` 字符串。                                               |
| signature    | string | 是   | 否       | 签名值。                                                                        |

### 请求示例

```shell{8}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "100.00",
    "channel_id": "1003",
    "out_trade_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

### 响应参数

| 参数         | 类型   | 说明                       |
| ------------ | ------ | -------------------------- |
| client_key   | string | 商户标识。由大洋支付颁发。 |
| amount       | string | 代收金额。单位：`元`。     |
| trade_no     | string | 代收订单号。               |
| out_trade_no | string | 商户代收订单号。           |
| payment_url  | string | 支付网址。                 |
| created_at   | string | 下单时间。UTC 时间。       |

### 响应示例

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

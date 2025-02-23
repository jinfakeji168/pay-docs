# 代收查询

GET `/api/v1/trades/:trade`

### HTTP头参数 <Badge type="tip" text="Header" vertical="top" />

| 参数     | 说明                 |
|--------|--------------------|
| Accept | `application/json` |

### 路径参数 <Badge type="tip" text="Path" vertical="top" />

| 参数    | 类型     | 必填 | 参与签名 | 说明              |
|-------|--------|----|------|-----------------|
| trade | string | 是  | 否    | 大洋支付订单号 或 商户订单号 |

### 查询参数 <Badge type="tip" text="Query" vertical="top" />

| 参数         | 类型     | 必填 | 参与签名 | 说明            |
|------------|--------|----|------|---------------|
| client_key | string | 是  | 是    | 商户标识。由大洋支付颁发。 |
| signature  | string | 是  | 否    | 签名值。          |

### 请求示例

```shell
curl -X GET \
  https://example.com/api/v1/trades/20230101000000?client_key=01h6tn69wfcpy5q5x3vpb3x9me&signature=ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082 \
  -H "Accept: application/json"
```

### 响应参数

| 参数           | 类型      | 说明                           |
|--------------|---------|------------------------------|
| client_key   | string  | 商户标识。由大洋支付颁发。                |
| amount       | string  | 代收金额。单位：`元`。                 |
| trade_no     | string  | 代收订单号。                       |
| out_trade_no | string  | 商户代收订单号。                     |
| payment_url  | string  | 支付网址。                        |
| created_at   | string  | 下单时间。UTC 时间。                 |
| paid_at      | string  | 付款时间。UTC 时间。未付款订单响应 `null` 。 |
| status       | integer | 订单状态。                        |

#### 订单状态状态码

| status | 描述  |
|--------|-----|
| 0      | 待支付 |
| 1      | 成功  |

### 响应示例

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

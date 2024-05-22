# 代收通知

请求方式： `POST`

Content-Type: `application/json`

:::warning NOTE
代收订单状态为 `已支付` ，才会通知商户，其他订单状态不会通知商户。
:::

如果首次通知商户出现异常，会尝试再通知4次，共5次。频率为：0s/10s/10s/30s/30s。时间可能有1~2秒的差异，以实际为准。

### 包体参数 <Badge type="tip" text="Body" vertical="top" />

| 参数           | 类型      | 参与签名 | 说明            |
|--------------|---------|------|---------------|
| client_key   | string  | 是    | 商户标识。由大洋支付颁发。 |
| signature    | string  | 否    | 签名值。          |
| amount       | string  | 是    | 代收金额。单位：`元`。  |
| channel_id   | string  | 是    | 代收通道ID。       |
| trade_no     | string  | 是    | 代收订单号。        |
| out_trade_no | string  | 是    | 商户代收订单号。      |
| created_at   | string  | 是    | 下单时间。UTC 时间。  |
| paid_at      | string  | 是    | 支付时间。UTC 时间。  |
| status       | integer | 是    | 订单状态。`1: 已支付` |

### 通知示例

```shell{11,14}
curl -X POST \
  https://your-domain.com/webhook \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h349bd08hk3ze70h3zyytaq6",
    "signature": "c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2",
    "amount": "100.00",
    "channel_id": "1000",
    "trade_no": "100000012023072123389872",
    "out_trade_no": "20230101000000",
    "created_at": "2023-01-01T01:01:01.000000Z",
    "paid_at": "2023-01-01T01:02:03.000000Z",
    "status": 1
  }'
```

### 商户应答

| 参数   | 说明                                                                                        |
|------|-------------------------------------------------------------------------------------------|
| code | 状态码。值为 `SUCCESS` 表示成功，**区分大小写**。<br>其他代码表示失败。<span style="color: red">请响应 JSON 数据</span>。 |

示例：

```json
{
  "code": "SUCCESS"
}
```

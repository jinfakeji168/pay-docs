# Webhook for Receive money 

Request method: `POST`

Content-Type: `application/json`

:::warning NOTE
代收订单状态为 `已支付` ，才会通知商户，其他订单状态不会通知商户。
:::

如果首次通知商户出现异常，会尝试再通知4次，共5次。频率为：0s/10s/10s/30s/30s。时间可能有1~2秒的差异，以实际为准。

### Body parameters <Badge type="tip" text="Body" vertical="top" />

| Key          | Type    | Sign | Description                   |
|--------------|---------|------|-------------------------------|
| client_key   | string  | Yes  | The API access key.           |
| signature    | string  | No   | Signed value.                 |
| amount       | string  | Yes  | The amount for receive money. |
| channel_id   | string  | Yes  | The payment method.           |
| trade_no     | string  | Yes  | DaYangPay's transaction ID.   |
| out_trade_no | string  | Yes  | Merchant's transaction ID.    |
| created_at   | string  | Yes  | Created time. `UTC+00:00`     |
| paid_at      | string  | Yes  | Paid time. `UTC+00:00`        |
| status       | integer | Yes  | `1: Successful`               |

### Request examples

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

### Merchant response parameters

| Key  | Value    |
|------|----------|
| code | SUCCESS  |

状态码。值为 `SUCCESS` 表示成功，**区分大小写**。其他代码表示失败。<span style="color: red">请响应 JSON 数据</span>。

Example:

HTTP Status code: `200`

```json
{
  "code": "SUCCESS"
}
```

# 代付下单

POST `/api/v1/transfers`

### HTTP头参数 <Badge type="tip" text="Header" vertical="top" />

| 参数   | 说明               |
| ------ | ------------------ |
| Accept | `application/json` |

### 包体参数 <Badge type="tip" text="Body" vertical="top" />

| 参数            | 类型   | 必填   | 参与签名 | 说明                                                                            |
| --------------- | ------ | ------ | -------- | ------------------------------------------------------------------------------- |
| client_key      | string | 是     | 是       | 商户标识。由大洋支付颁发。                                                      |
| amount          | string | 是     | 是       | 代付金额。单位：`元`。                                                          |
| channel_id      | string | 是     | 是       | 代付通道ID。                                                                    |
| out_transfer_no | string | 是     | 是       | 商户代付订单号。<br><span style="color: red">最大长度 64，必须是唯一的</span>。 |
| notify_url      | string | 是     | 是       | 商户接收通知的网址。                                                            |
| payee_account   | string | 是     | 是       | 收款人账号。                                                                    |
| payee_name      | string | 是     | 是       | 收款人姓名。                                                                    |
| extra           | string | 特殊的 | 是       | 业务参数。<br>必填时必须是 `JSON` 字符串。                                      |
| signature       | string | 是     | 否       | 签名值。                                                                        |

::: warning NOTE
`extra` 参数说明：您可以理解为 `required_if`，也就是说特定的场景为必填，且需提交的参数可能不一样，请参考不同国家代付下单接口的业务参数。例：越南银行代付，`extra.bank_code` 必填。
:::

### 请求示例

**注意：以下示例仅适用于巴西的业务。**

```shell{8,13}
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
    "amount": "100.00",
    "channel_id": "5003",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "extra": "{\"account_type\":\"CPF\", \"id_number\":\"1234567890\"}",
    "signature": ""
  }'
```

### 响应参数

| 参数            | 类型   | 说明                       |
| --------------- | ------ | -------------------------- |
| client_key      | string | 商户标识。由大洋支付颁发。 |
| amount          | string | 代付金额。单位：`元`。     |
| transfer_no     | string | 代付订单号。               |
| out_transfer_no | string | 商户代付订单号。           |
| channel_id      | string | 代付通道ID。               |
| payee_account   | string | 收款人账号。               |
| payee_name      | string | 收款人姓名。               |
| created_at      | string | 下单时间。UTC 时间。       |

### 响应示例

```json{4}
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "transfer_no": "100000012023072123389872",
  "out_transfer_no": "20230101000000",
  "channel_id": "5001",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "created_at": "2023-01-01T01:01:01.000000Z"
}
```

### 重要信息

::: warning Important
由于通信问题，可能您请求大洋支付时发生了超时或没有收到任何响应，但实际上，大洋支付已经作出了正常的响应。在这种情况下，为了不造成您的资金损失，您应将您的订单状态设为“成功”，且不在其他第三方出款。
:::

> 张三叫李四去买一下单，李四说：“好的，老板。” 过了一会儿，张三问李四：“刚刚我叫你买单，你怎么都不回答我？我叫其他人买了”。李四想说的是：“老板，我有回答你，你没听到吗？”

与大洋支付服务器通信测试示例：

```bash
curl -X POST \
  https://pay.dayangpay.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": "50000.00",
    "channel_id": "5001",
    "client_key": "01j****************7h",
    "extra": "{\"bank_code\":\"AGR\"}",
    "notify_url": "https://api.your-domain.com/webhook-for-dayangpay",
    "out_transfer_no": "20240101000000123456",
    "payee_account": "1234567890",
    "payee_name": "PAYEE NAME",
    "signature": "99c************************************de"
}' \
  -w "\n\nDNS Lookup: %{time_namelookup}s\nConnection: %{time_connect}s\nPretransfer: %{time_pretransfer}s\nStart Transfer: %{time_starttransfer}s\nTotal Time: %{time_total}s\n"
```

Output:

```text
DNS Lookup: 0.001148s
Connection: 0.095378s
Pretransfer: 0.241598s
Start Transfer: 0.452405s
Total Time: 0.452453s
```

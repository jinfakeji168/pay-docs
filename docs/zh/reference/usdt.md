# USDT

## 代收

### 代收通道

| ID   | 说明                |
| ---- | ------------------- |
| 1052 |                   |

### 代收下单示例

```shell{8}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "10000",
    "channel_id": "1052",
    "out_trade_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

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

### 代收查单示例

```shell
curl -X GET \
  https://example.com/api/v1/trades/20230101000000?client_key=01h6tn69wfcpy5q5x3vpb3x9me&signature=ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082 \
  -H "Accept: application/json"
```

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

订单状态码

| status | 描述   |
| ------ | ------ |
| 0      | 待支付 |
| 1      | 已支付 |

## 代付

### 代付通道

| ID   | 说明 |
| ---- | -- |
| 5056 |  |

### 业务参数 <Badge type="warning" text="extra" vertical="top" />

如果您需要代付至越南的银行， `extra.bank_code` 字段为必填。

| 参数      | 必填 | 说明                  |
| --------- | ---- | --------------------- |
| bank_code | 是   |  |

::: warning NOTE
`extra` 必须是有效的 JSON 字符串,泰国地区必填且银行卡号需9位数字以上。
例如：
:::

```json{4,6}
{"banc_code":"USDT"}
```

### 代付下单示例

银行

```shell{8,13}
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
    "amount": "10000",
    "channel_id": "5056",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "extra": "{\"bank_code\":\"USDT\"}",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

订单状态码

| status | 描述     |
| ------ | -------- |
| 0      | 待处理   |
| 1      | 代付成功 |
| 2      | 处理中   |
| 3      | 代付失败 |


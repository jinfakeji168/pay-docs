# 越南

## 代收

### 代收通道

| ID   | 说明                  |
| ---- | --------------------- |
| 1001 | 银行                  |
| 1047 | 银行 (新版收银台页面) |
| 1002 | MoMo                  |
| 1024 | Zalo                  |

### 代收下单示例

```shell{8}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "10000",
    "channel_id": "1001",
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

### 指定银行 (可选)

如果您想指定银行代收，您可以在请求中包含字段`extra.bank_code`，不推荐。

`extra.bank_code`

| 银行编码 | 银行名称    |
| -------- | ----------- |
| BIDV     | BIDV        |
| VCB      | Vietcombank |
| TCB      | Techcombank |
| MBB      | MB Bank     |

### 指定收银台页面 (可选)

默认显示所有信息，如果您希望向客户显示不同的收银台页面，您可以在请求中包含字段`extra.type`，不推荐。

`extra.type`

| 类型 | 描述           |
| ---- | -------------- |
| 1    | 只显示银行信息 |
| 2    | 只显示二维码   |

```shell{8,11}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "10000",
    "channel_id": "1001",
    "out_trade_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "extra": "{\"bank_code\":\"VCB\", \"type\":\"1\"}",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
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
| ---- | ---- |
| 5001 | 银行 |
| 5002 | MoMo |
| 5029 | Zalo |

### 业务参数 <Badge type="warning" text="extra" vertical="top" />

如果您需要代付至越南的银行， `extra.bank_code` 字段为必填。
如果您需要代付至 Zalo 或 MoMo，请不要在您的请求中包含 `extra` 字段。

| 参数      | 必填 | 说明                  |
| --------- | ---- | --------------------- |
| bank_code | 是   | [银行编码](#银行编码) |

::: warning NOTE
`extra` 必须是有效的 JSON 字符串。
:::

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
    "channel_id": "5001",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "extra": "{\"bank_code\":\"VCB\"}",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

MoMo

```shell{8}
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
    "amount": "10000",
    "channel_id": "5002",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

Zalo

```shell{8}
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
    "amount": "10000",
    "channel_id": "5029",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "signature": "SIGNED_STRING"
  }'
```

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

### 代付查单示例

```shell
curl -X GET \
  https://example.com/api/v1/transfers/20230101000000?client_key=01h6tn69wfcpy5q5x3vpb3x9me&signature=SIGNED_STRING \
  -H "Accept: application/json"
```

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

订单状态码

| status | 描述     |
| ------ | -------- |
| 0      | 待处理   |
| 1      | 代付成功 |
| 2      | 处理中   |
| 3      | 代付失败 |

### 银行编码

`extra.bank_code`

| 银行编码  | 银行名称                            |
| --------- | ----------------------------------- |
| TCB       | Techcombank                         |
| VPB       | VPBank                              |
| VIB       | VIB                                 |
| BIDV      | BIDV                                |
| MBB       | MB                                  |
| TPB       | TPBank                              |
| STB       | Sacombank                           |
| VCB       | Vietcombank                         |
| ACB       | ACB                                 |
| AGR       | Agribank                            |
| CTG       | Vietinbank                          |
| SEAB      | SeAbank                             |
| HDB       | HDBank                              |
| MSB       | MSB                                 |
| OCB       | OCB                                 |
| PVC       | PVcomBank                           |
| KLB       | Kien Long Bank                      |
| SHB       | SHB                                 |
| ABB       | An Binh Commercial Joint Stock Bank |
| DAB       | DongA Bank                          |
| BAB       | BacAbank                            |
| LPB       | LPBank                              |
| BVB       | BaoVietBank                         |
| VBB       | Vietbank                            |
| VCCB      | BVBank                              |
| SGB       | Saigonbank                          |
| PGB       | PG Bank                             |
| SCB       | Sai Gon Joint Stock Commercial Bank |
| EIB       | Eximbank                            |
| SHBVN     | Shinhan Bank Vietnam                |
| Oceanbank | Oceanbank                           |
| NAB       | NAM A bank                          |

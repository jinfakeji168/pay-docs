# 墨西哥

#### 代付业务参数

`extra`

| 参数        | 必填   | 说明   |                       |
|-----------|------|------|-----------------------|
| bank_code | 是    | 银行编码 | 暂不支持指定银行，请填固定值 `BANK` |

示例：

```json
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "channel_id": "5011",
  "out_transfer_no": "20230101000000",
  "notify_url": "https://example.com/notify/url",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "extra": "{\"bank_code\":\"BANK\"}",
  "signature": ""
}
```

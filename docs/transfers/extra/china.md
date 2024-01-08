# 中国

#### 代付业务参数

`extra`

| 参数           | 必填 | 说明   |             |
|--------------|----|------|-------------|
| bank_name    | 是  | 银行名称 |             |
| bank_branch  | 否  | 支行   |             |


示例：

```json
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "channel_id": "5031",
  "out_transfer_no": "20230101000000",
  "notify_url": "https://example.com/notify/url",
  "payee_account": "1234567890",
  "payee_name": "张三",
  "extra": "{\"bank_name\":\"中国建设银行\", \"bank_branch\":\"支行名称\"}",
  "signature": ""
}
```

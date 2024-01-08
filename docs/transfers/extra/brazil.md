# 巴西

#### 代付业务参数

`extra`

| 参数           | 必填 | 说明                            |             |
|--------------|----|-------------------------------|-------------|
| account_type | 是  | 账户类型。一共有5种。                   | [查看](#账户类型) |
| id_number    | 是  | 证件号码。个人提交 `CPF`，公司提交 `CNPJ`。  |             |


示例：

```json
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "channel_id": "5003",
  "out_transfer_no": "20230101000000",
  "notify_url": "https://example.com/notify/url",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "extra": "{\"account_type\":\"CPF\", \"id_number\":\"ID_NUMBER\"}",
  "signature": ""
}
```

#### 账户类型

`extra.account_type`

| 类型    | 说明                |
|-------|-------------------|
| EMAIL | 邮箱格式              |
| PHONE | 11位数(可加前缀 `+55` ) |
| CPF   | 11位数              |
| CNPJ  | 14位数              |
| EVP   | UUID              |


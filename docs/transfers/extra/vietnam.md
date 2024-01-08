# 越南

## 银行

#### 代付业务参数

`extra`

| 参数        | 必填 | 说明   |             |
|-----------|----|------|-------------|
| bank_code | 是  | 银行编码 | [查看](#银行编码) |

示例：

```json
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "channel_id": "5001",
  "out_transfer_no": "20230101000000",
  "notify_url": "https://example.com/notify/url",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "extra": "{\"bank_code\":\"ACB\"}",
  "signature": ""
}
```

#### 银行编码

`extra.bank_code`

| 银行编码  | 银行名称                                |
|-------|-------------------------------------|
| TCB   | Techcombank                         |
| VPB   | VPBank                              |
| VIB   | VIB                                 |
| BIDV  | BIDV                                |
| MBB   | MB                                  |
| TPB   | TPBank                              |
| STB   | Sacombank                           |
| VCB   | Vietcombank                         |
| ACB   | ACB                                 |
| AGR   | Agribank                            |
| CTG   | Vietinbank                          |
| SEAB  | SeAbank                             |
| HDB   | HDBank                              |
| MSB   | MSB                                 |
| OCB   | OCB                                 |
| PVC   | PVcomBank                           |
| KLB   | Kien Long Bank                      |
| SHB   | SHB                                 |
| ABB   | An Binh Commercial Joint Stock Bank |
| DAB   | DongA Bank                          |
| BAB   | BacAbank                            |
| LPB   | LPBank                              |
| BVB   | BaoVietBank                         |
| VBB   | Vietbank                            |
| VCCB  | BVBank                              |
| SGB   | Saigonbank                          |
| PGB   | PG Bank                             |
| SCB   | Sai Gon Joint Stock Commercial Bank |
| EIB   | Eximbank                            |
| SHBVN | Shinhan Bank Vietnam                |


## MoMo

`MoMo` 代付，不需要提交业务参数。

示例：

```json
{
	"client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
	"amount": "100.00",
	"channel_id": "5002",
	"out_transfer_no": "20230101000000",
	"notify_url": "https://example.com/notify/url",
	"payee_account": "1234567890",
	"payee_name": "Sammy Shark",
    "signature": ""
}
```

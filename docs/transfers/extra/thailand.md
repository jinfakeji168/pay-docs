# 泰国

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
  "channel_id": "5014",
  "out_transfer_no": "20230101000000",
  "notify_url": "https://example.com/notify/url",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "extra": "{\"bank_code\":\"KBANK\"}",
  "signature": ""
}
```

#### 银行编码

`extra.bank_code`

| 银行编码   | 银行名称                                                |
|--------|-----------------------------------------------------|
| KBANK  | 	Kasikorn Bank Plc.                                 |	
| BBL    | 	Bangkok Bank Plc.	                                 |
| KTB    | 	Krung Thai Bank	                                   |
| ABN    | 	ABN Amro Bank N.V.                                 |	
| TTB    | 	TMBThanachart	                                     |
| SCB    | 	Siam Commercial Bank                               |	
| UOB    | 	UOB Bank Plc.	                                     |
| BAY    | 	Bank of Ayudhya / Krungsri                         |	
| CIMB   | 	CIMB Thai Bank Public Company Limited              |	
| LHBANK | 	Land and Houses Bank Public Company Limited        |	
| GSB    | 	Government Savings Bank                            |	
| KKP    | 	Kiatnakin Phatra Bank Public Company Limited       |	
| CITI   | 	Citibank N.A.                                      |	
| GHB    | 	Government Housing Bank                            |	
| BAAC   | 	Bank for Agriculture and Agricultural Cooperatives |	
| MHCB   | 	Mizuho Corporate Bank Limited                      |	
| IBANK  | 	Islamic Bank of Thailand                           |	
| TISCO  | 	TISCO Bank Plc.                                    |	



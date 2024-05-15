# 越南

## 银行

示例：

```shell
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "YOUR_CLIENT_KEY",
    "amount": "10000",
    "channel_id": "1001",
    "out_trade_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "signature": "YOUR_SIGNATURE"
  }'
```

## MoMo

示例：

```shell
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "YOUR_CLIENT_KEY",
    "amount": "10000",
    "channel_id": "1002",
    "out_trade_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "signature": "YOUR_SIGNATURE"
  }'
```

# Trade Notification

After the trade is paid. We will request the notification URL you provided.

Request Method: **POST**

Form Data:

|Key|Type|Example|Description|
|----|----|----|----|
|client_key|string|`01h349bd08hk3ze70h3zyytaq6`|Client Key for Authentication.|
|timestamp|string|`1687683433`|Current UNIX timestamp|
|signature|string|`c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2`|Refer to [Signature Method](signature.md)|
|merchant_id|string|`1000000001`|Merchant identifier.|
|trade_no|string|`100000012023072123389872`|Trade identifier in our system|
|out_trade_no|string|`12345678910`|Trade identifier in Merchant platform|
|amount|string|`100.00`|Amount of the trade|
|channel_id|string|`1000`|Refer to [Channels](channels.md)|
|subject|string|`test create trade`|Trade description|
|payer|string|`{"id": "10000"}`|Payer information|
|paid_at|string|`2023-06-15T08:34:31.000000Z`|Trade Paid time|

### Notification With Signature

Encryption does not guarantee that notification requests come from us. We will send notifications to merchants with signature.

::: warning
Merchants should verify the signature to confirm that the request is from us and not another third party. For signature verification, please refer to [Signature Method](signature.md).
:::

### Example Request Parameters

```json
{
    "client_key": "01h349bd08hk3ze70h3zyytaq6",
    "timestamp": "1687683433",
    "signature": "c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2",
    "merchant_id": "1000000001",
    "trade_no": "100000012023072123389872",
    "out_trade_no": "12345678910",
    "amount": "100.00",
    "channel_id": "1000",
    "subject": "test create trade",
    "payer": {
        "id": "10000"
    },
    "paid_at": "2023-06-15T08:34:31.000000Z"
}
```

::: tip
We will request the notification URL you provide ten times every minute. You can also query trade data through the [Query Trade API](trade-api.md#query-a-trade).
:::

### Response Parameters

Merchants should response parameters to complete the trade.

|Key|Type|Required|Example|Description|
|----|----|----|----|----|
|code|string|yes|`SUCCESS`|Status code, `SUCCESS` means successfully **accepted**, other code means **failed**.|
|message|string|no|`We received the notification, Thank you!`||

```json
{
    "code": "SUCCESS",
    "message": "We received the notification, Thank you!",
}
```

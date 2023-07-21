# Transfer Notification

After the transfer is completed. We will request the notification URL you provided.

Request Method: **POST**

Form Data:

|Key|Type|Example|Description|
|----|----|----|----|
|client_key|string|`01h349bd08hk3ze70h3zyytaq6`|Client Key for Authentication.|
|timestamp|string|`1687683433`|Current UNIX timestamp|
|signature|string|`c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2`|Refer to [Signature Method](signature.md)|
|merchant_id|string|`1000000001`|Merchant identifier.|
|transfer_no|string|`100000012023072123389872`|Transfer identifier in our system|
|out_transfer_no|string|`12345678910`|Transfer identifier in Merchant platform|
|amount|string|`100.00`|Amount of the Transfer|
|bank_code|string|`1000`|Refer to [Bank Codes](bank-codes.md)|
|completed_at|string|`2023-06-15T08:34:31.000000Z`|Transfer completed time|

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
    "transfer_no": "100000012023072123389872",
    "out_transfer_no": "12345678910",
    "amount": "100.00",
    "bank_code": "1000",
    "completed_at": "2023-06-15T08:34:31.000000Z"
}
```

::: tip
We will request the notification URL you provide ten times every minute. You can also query transfer data through the [Query Transfer API](transfer-api.md#query-transfer).
:::

### Response Parameters

Merchants should response parameters to complete the transfer.

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

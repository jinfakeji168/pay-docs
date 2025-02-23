# Nigeria

## Receive money

### Channels for receive money

| ID   | Description      |
|------|------------------|
| 1057 | Banks in Nigeria |

### Request example for receive money

```shell{8}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "100.00",
    "channel_id": "1057",
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

### Get a transaction for receive money

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

## Send money

### Channels for send money

| ID   | Description      |
|------|------------------|
| 5060 | Banks in Nigeria |

### Extra parameter <Badge type="warning" text="extra" vertical="top" />

`extra`

| Field     | Required | Description               |
|-----------|----------|---------------------------|
| bank_code | Yes      | [Bank codes](#bank-codes) |

### Request example of send money

```shell{8,13}
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
    "amount": "100.00",
    "channel_id": "5060",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "extra": "{\"bank_code\":\"NR0110\"}",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

```json{4}
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "transfer_no": "100000012023072123389872",
  "out_transfer_no": "20230101000000",
  "channel_id": "5060",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "created_at": "2023-01-01T01:01:01.000000Z"
}
```

### Get a transaction for send money

```shell
curl -X GET \
  https://example.com/api/v1/transfers/20230101000000?client_key=01h6tn69wfcpy5q5x3vpb3x9me&signature=ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082 \
  -H "Accept: application/json"
```

```json{11}
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "transfer_no": "100000012023072123389872",
  "out_transfer_no": "20230101000000",
  "channel_id": "5060",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "created_at": "2023-01-01T01:01:01.000000Z",
  "paid_at": "2023-01-01T01:02:03.000000Z",
  "status": 1
}
```

### Bank codes

`extra.bank_code`

| Bank code | Bank name                                |
|-----------|------------------------------------------|
| NR0110    | ALERT MFB                                |
| NR0231    | ECOMOBILE                                |
| NR0111    | BOSAK MFB                                |
| NR0232    | EK-RELIABLE MICROFINANCE BANK            |
| NR0233    | ENTERPRISE BANK                          |
| NR0112    | FSDH                                     |
| NR0234    | EVERGREEN MICROFINANCE BANK              |
| NR0113    | FAST MFB                                 |
| NR0118    | ADDOSSER MFB                             |
| NR0239    | GTI MICROFINANCE BANK                    |
| NR0119    | MINT-FINEX MFB                           |
| NR0235    | Eyowo                                    |
| NR0114    | IBILE MICROFINANCE BANK                  |
| NR0236    | FINCA MICROFINANCE BANK                  |
| NR0115    | MEGAPRAISE MICROFINANCE BANK             |
| NR0237    | FIRMUS MICROFINANCE BANK                 |
| NR0238    | FIRST TRUST MORTGAGE BANK PLC            |
| NR0117    | NNEW WOMEN MFB                           |
| NR0220    | FIDFUND MFB                              |
| NR0100    | MAINSTREET MFB                           |
| NR0101    | ASTRAPOLARIS MFB                         |
| NR0222    | MONIEPOINT MICROFINANCE BANK             |
| NR0223    | 9 PAYMENT SOLUTIONS BANK                 |
| NR0228    | CORESTEP MICROFINANCE BANK               |
| NR0107    | KONTAGORA MFB                            |
| NR0229    | DAVODANI  MICROFINANCE BANK              |
| NR0109    | RUBIES MFB                               |
| NR0224    | BIPC MICROFINANCE BANK                   |
| NR0103    | KUDA MICROFINANCE BANK                   |
| NR0225    | CASHCONNECT MICROFINANCE BANK            |
| NR0104    | FEDERALPOLY NASARAWAMFB                  |
| NR0226    | CHAMS MOBILE                             |
| NR0105    | LAPO MFB                                 |
| NR0227    | COASTLINE MICROFINANCE BANK              |
| NR0106    | GREENBANK MFB                            |
| NR0132    | ALPHAKAPITAL MFB                         |
| NR0011    | REFUGE MORTGAGE BANK                     |
| NR0012    | FBNQUEST MERCHANT BANK                   |
| NR0254    | MOZFIN MICROFINANCE BANK                 |
| NR0133    | MUTUAL TRUST MICROFINANCE BANK           |
| NR0013    | INFINITY TRUST MORTGAGE BANK             |
| NR0255    | NEPTUNE MICROFINANCE BANK                |
| NR0014    | HAGGAI MORTGAGE BANK                     |
| NR0256    | NEW GOLDEN PASTURES MICROFINANCE BANK    |
| NR0135    | TAJ BANK                                 |
| NR0250    | MAYFAIR MICROFINANCE BANK                |
| NR0251    | MAYFRESH MORTGAGE BANK                   |
| NR0010    | ABBEY MORTGAGE BANK                      |
| NR0252    | MOLUSI MICROFINANCE BANK                 |
| NR0131    | PILLAR MFB                               |
| NR0019    | PLATINUM MORTGAGE BANK                   |
| NR0015    | FIRST GENERATION MORTGAGE BANK           |
| NR0257    | NUTURE MICROFINANCE BANK                 |
| NR0016    | CELLULANT                                |
| NR0137    | JAIZ BANK                                |
| NR0258    | NWANNEGADI MICROFINANCE BANK             |
| NR0017    | BRENT MORTGAGE BANK                      |
| NR0259    | OCHE MICROFINANCE BANK                   |
| NR0139    | GROOMING MICROFINANCE BANK               |
| NR0242    | ILISAN MICROFINANCE BANK                 |
| NR0121    | OKPOGA MFB                               |
| NR0001    | GT BANK                                  |
| NR0122    | SPARKLE MICROFINANCE BANK                |
| NR0123    | ASSET MATRIX                             |
| NR0244    | INTERLAND MICROFINANCE BANK              |
| NR0002    | United Bank For Africa Plc               |
| NR0124    | ESO-E MICROFINANCE BANK                  |
| NR0003    | EVANGEL MFB                              |
| NR0245    | ISALEOYO MICROFINANCE BANK               |
| NR0240    | HEADWAY MICROFINANCE BANK                |
| NR0120    | ARISE MFB                                |
| NR0241    | IKENNE MICROFINANCE BANK                 |
| NR0008    | NPF MFB                                  |
| NR0129    | SAFE HAVEN MFB                           |
| NR0009    | GATEWAY MORTGAGE BANK                    |
| NR0125    | DAYLIGHT MICROFINANCE BANK               |
| NR0005    | BRIGHTWAY MFB                            |
| NR0126    | FIRST OPTION MFB                         |
| NR0247    | LEGEND MICROFINANCE BANK                 |
| NR0006    | HACKMAN MICROFINANCE BANK                |
| NR0248    | Letshego MFB                             |
| NR0007    | CORONATION MERCHANT BANK                 |
| NR0249    | MANNY MICROFINANCE BANK                  |
| NR0128    | PETRA MICROFINANCE BANK                  |
| NR0210    | FCMB EASY ACCOUNT                        |
| NR0212    | NOVA MERCHANT BANK                       |
| NR0217    | CITI BANK                                |
| NR0218    | WETLAND MFB                              |
| NR0213    | PALMPAY                                  |
| NR0215    | GOWANS MFB                               |
| NR0216    | TRUSTBANC J6 MICROFINANCE BANK LIMITED   |
| NR0200    | PECAN TRUST MICROFINANCE BANK            |
| NR0201    | ALEKUN MICROFINANCE BANK                 |
| NR0206    | KEYSTONE BANK PLC                        |
| NR0209    | STANDARD CHARTERED BANK PLC              |
| NR0202    | ROYAL EXCHANGE MFB                       |
| NR0203    | PERSONAL TRUST MFB                       |
| NR0204    | MICROCRED MICROFINANCE BANK              |
| NR0205    | VISA MICROFINANCE BANK                   |
| NR0081    | IRL MICROFINANCE BANK                    |
| NR0082    | TRIDENT MICROFINANCE BANK                |
| NR0083    | ADEYEMI COLLEGE STAFF MICROFINANCE BANK  |
| NR0077    | APEKS MICROFINANCE BANK                  |
| NR0198    | RICHWAY MFB                              |
| NR0078    | AUCHI MICROFINANCE BANK                  |
| NR0199    | IMO MICROFINANCE BANK                    |
| NR0079    | BOWEN MFB                                |
| NR0073    | FULL RANGE MFB                           |
| NR0195    | AL-BARKAH MFB                            |
| NR0196    | ACCION MFB                               |
| NR0197    | ALLWORKERS MFB                           |
| NR0076    | YES MFB                                  |
| NR0190    | CONSUMER MFB                             |
| NR0071    | CIT MICROFINANCE BANK                    |
| NR0193    | FIRST BANK OF NIGERIA PLC                |
| NR0066    | CHIKUM MICROFINANCE BANK                 |
| NR0067    | STELLAS MICROFINANCE BANK                |
| NR0068    | CONPRO MICROFINANCE BANK                 |
| NR0069    | ABOVE ONLY MICROFINANCE BANK             |
| NR0183    | FIDELITY MOBILE                          |
| NR0062    | IKIRE MFB                                |
| NR0063    | TITAN TRUST BANK                         |
| NR0184    | ZENITH MOBILE                            |
| NR0185    | MONEYBOX                                 |
| NR0064    | SUNTRUST BANK                            |
| NR0065    | QUICKFUND MICROFINANCE BANK              |
| NR0186    | ZINTERNET - KONGAPAY                     |
| NR0099    | AFEKHAFE MFB                             |
| NR0096    | PAGA                                     |
| NR0098    | OMIYE MFB                                |
| NR0091    | FCT MFB                                  |
| NR0093    | INFINITY MFB                             |
| NR0094    | EAGLE FLIGHT MFB                         |
| NR0090    | ZENITH BANK                              |
| NR0280    | YOBE MICROFINANCE  BANK                  |
| NR0160    | SEED CAPITAL MICROFINANCE BANK           |
| NR0275    | Unical Microfinance Bank                 |
| NR0034    | REGENT MFB                               |
| NR0156    | FIRSTMONIE WALLET                        |
| NR0277    | Unity Bank Plc                           |
| NR0157    | COVENANT MICROFINANCE BANK               |
| NR0036    | MONEYTRUST MFB                           |
| NR0278    | VENTURE GARDEN NIGERIA LIMITED           |
| NR0271    | THINK FINANCE MICROFINANCE BANK          |
| NR0030    | BC KASH MFB                              |
| NR0151    | ECOBANK XPRESS ACCOUNT                   |
| NR0272    | TRUST MICROFINANCE BANK                  |
| NR0152    | EKONDO MICROFINANCE BANK                 |
| NR0273    | U & C MICROFINANCE BANK                  |
| NR0153    | TEASY MOBILE                             |
| NR0274    | UNAAB MICROFINANCE BANK                  |
| NR0032    | XSLNCE MICROFINANCE BANK                 |
| NR0158    | ACCESSMONEY                              |
| NR0037    | FIDELITY BANK PLC                        |
| NR0279    | VFD microfinance bank                    |
| NR0159    | SAGAMU MICROFINANCE BANK                 |
| NR0270    | TAGPAY                                   |
| NR0143    | NIRSAL NATIONAL MICROFINANCE BANK        |
| NR0144    | ABU MICROFINANCE BANK                    |
| NR0023    | JUBILEE LIFE                             |
| NR0265    | REPHIDIM MICROFINANCE BANK               |
| NR0024    | PATRICK GOLD                             |
| NR0145    | RENMONEY MICROFINANCE BANK               |
| NR0267    | SEEDVEST MICROFINANCE BANK               |
| NR0262    | PAGE MFBank                              |
| NR0141    | PENNYWISE MICROFINANCE BANK              |
| NR0020    | STERLING BANK PLC                        |
| NR0021    | GLOBUS BANK                              |
| NR0263    | PARALLEX                                 |
| NR0026    | Stanbic IBTC Bank                        |
| NR0268    | STANBIC IBTC @Ease WALLET                |
| NR0027    | PROVIDUS BANK                            |
| NR0269    | STERLING MOBILE                          |
| NR0148    | TCF                                      |
| NR0149    | BAINES CREDIT MFB                        |
| NR0028    | FIRST CITY MONUMENT BANK                 |
| NR0029    | PURPLEMONEY MFB                          |
| NR0060    | GLORY MFB                                |
| NR0181    | HEDONMARK                                |
| NR0182    | FORTIS MOBILE                            |
| NR0061    | FUTO MFB                                 |
| NR0176    | AMML MICROFINANCE BANK                   |
| NR0055    | FFS MICROFINANCE BANK                    |
| NR0177    | MICROVIS MFB                             |
| NR0056    | PRESTIGE MICROFINANCE BANK               |
| NR0057    | CEMCS MFB                                |
| NR0178    | EMPIRE TRUST MFB                         |
| NR0179    | OHAFIA MFB                               |
| NR0173    | PAYATTITUDE ONLINE                       |
| NR0052    | TRUSTFUND MICROFINANCE BANK              |
| NR0174    | FINATRUST MICROFINANCE BANK              |
| NR0054    | E-BARCS MFB                              |
| NR0175    | FORTIS MICROFINANCE BANK                 |
| NR0059    | CREDIT AFRIQUE MFB                       |
| NR0171    | FLUTTERWAVE TECHNOLOGY SOLUTIONS LIMITED |
| NR0050    | VIRTUE MFB                               |
| NR0165    | HERITAGE BANK                            |
| NR0044    | RAND MERCHANT BANK                       |
| NR0166    | WEMA BANK PLC                            |
| NR0161    | ACCESS BANK PLC                          |
| NR0040    | POLARIS BANK                             |
| NR0042    | AG MORTGAGE BANK PLC                     |
| NR0163    | BALOGUN GAMBARI MFB                      |
| NR0043    | INNOVECTIVES KESH                        |
| NR0164    | NEWDAWN MICROFINANCE BANK                |
| NR0048    | AB MICROFINANCE BANK                     |
| NR0049    | LAVENDER MICROFINANCE BANK               |
| NR0140    | OPAY(PAYCOM)                             |
| NR0085    | ECOBANK NIGERIA PLC                      |

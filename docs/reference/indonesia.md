# Indonesia

## Receive money

### Channels for receive money

| ID   | Description |
|------|-------------|
| 1013 |             |

### Request example for receive money

```shell{8}
curl -X POST \
  https://example.com/api/v1/trades \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
    "amount": "100.00",
    "channel_id": "1013",
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

| ID   | Description |
|------|-------------|
| 5018 |             |

### Extra parameters <Badge type="warning" text="extra" vertical="top" />

`extra`

| Key       | Required | Description               |
|-----------|----------|---------------------------|
| bank_code | Yes      | [Bank codes](#bank-codes) |

### Request example for send money

```shell{8,13}
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
    "amount": "100.00",
    "channel_id": "5018",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "extra": "{\"bank_code\":\"BCA\"}",
    "signature": "ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082"
  }'
```

```json{4}
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "transfer_no": "100000012023072123389872",
  "out_transfer_no": "20230101000000",
  "channel_id": "5018",
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
  "channel_id": "5018",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "created_at": "2023-01-01T01:01:01.000000Z",
  "paid_at": "2023-01-01T01:02:03.000000Z",
  "status": 1
}
```

### Bank codes

`extra.bank_code`

| Code                    | Name                                           |
|-------------------------|------------------------------------------------|
| ACEH                    | Bank Aceh Syariah                              |
| ACEH_UUS                | Bank Agris UUS                                 |
| ACEH_SYR                | BPD ISTIMEWA ACEH SYARIAH                      |
| AGRIS                   | Bank IBK Indonesia                             |
| AMAR                    | BANK AMAR INDONESIA                            |
| AGRONIAGA               | Bank Agroniaga                                 |
| ANDARA                  | Bank Andara                                    |
| ANGLOMAS                | Anglomas International Bank                    |
| ANTAR_DAERAH            | BANK ANTAR DAERAH                              |
| ANZ                     | Bank ANZ Indonesia                             |
| ANZ_PANIN               | Bank ANZ PANIN                                 |
| ARTAJASA                | ARTAJASA PEMBAYARAN ELEKTRONIK                 |
| ARTA_NIAGA_KENCANA      | Bank Arta Niaga Kencana                        |
| ARTHA                   | Bank Artha Graha Internasional                 |
| ARTOS                   | Bank ARTOS/ Bank Jago                          |
| BALI                    | BPD Bali                                       |
| BISNIS_INTERNASIONAL    | Bank Bisnis Internasional                      |
| BANGKOK                 | Bangkok Bank                                   |
| BANTEN                  | BPD Banten                                     |
| BARCLAYS                | BANK BARCLAYS INDONESIA                        |
| BCA                     | Bank Central Asia                              |
| BCA_SYR                 | Bank Central Asia (BCA) Syariah                |
| BENGKULU                | Bank Bengkulu                                  |
| BJB                     | Bank Jawa Barat(BJB)                           |
| BJB_SYR                 | Bank BJB Syariah                               |
| BNI                     | Bank Negara Indonesia(BNI)                     |
| BNI_SYR                 | Bank BNI Syariah                               |
| BOC                     | BANK OF CHINA LIMITED                          |
| BRI                     | Bank Rakyat Indonesia(BRI)                     |
| BRI_SYR                 | Bank BRI Syariah                               |
| BNP_PARIBAS             | Bank BNP Paribas                               |
| BOA                     | BANK OF AMERICA NA                             |
| BPRKS                   | BPR KS                                         |
| BSI                     | Bank Syariah Indonesia(BSI)                    |
| BTN                     | Bank Tabungan Negara (BTN)                     |
| BTN_UUS                 | Bank Tabungan Negara (BTN) UUS                 |
| BTPN                    | Bank BTPN                                      |
| BTPN_SYARIAH            | BTPN Syariah                                   |
| BTPN_SYR                | Bank BTPN Syariah                              |
| BUKOPIN                 | Wokee/Bukopin                                  |
| BUKOPIN_SYR             | Bank Bukopin Syariah                           |
| BUMI_ARTA               | Bank Bumi Arta                                 |
| BUMIPUTERA              | BANK BUMIPUTERA                                |
| CAPITAL                 | Bank Capital Indonesia                         |
| CENTRATAMA              | BANK CENTRATAMA                                |
| CHINACONS               | BANK CHINA CONSTRUCTION                        |
| CHINATRUST              | CTBC Indonesia                                 |
| CNB                     | Centratama Nasional Bank(CNB)                  |
| CIMB                    | Bank CIMB Niaga                                |
| CIMB_UUS                | Bank CIMB Niaga UUS                            |
| CIMB_REKENING_PONSEL    | Bank CIMB Niaga REKENING PONSEL                |
| CITIBANK                | Citibank                                       |
| COMMONWEALTH            | Bank Commonwealth                              |
| BPD_DIY                 | BPD DIY                                        |
| BPD_DIY_SYR             | BANK PEMBANGUNAN DAERAH DIY UNIT USAHA SYARIAH |
| DANAMON                 | Bank Danamon                                   |
| DANAMON_UUS             | Bank Danamon UUS                               |
| DBS                     | Bank DBS Indonesia                             |
| DEUTSCHE                | Deutsche Bank                                  |
| DINAR_INDONESIA         | Bank Dinar Indonesia                           |
| DIPO                    | BANK DIPO INTERNATIONAL                        |
| DKI                     | Bank DKI                                       |
| DKI_UUS                 | Bank DKI UUS                                   |
| EKA                     | Bank EKA                                       |
| EKONOMI_RAHARJA         | BANK EKONOMI RAHARJA                           |
| FAMA                    | Bank Fama International                        |
| GANESHA                 | Bank Ganesha                                   |
| HANA                    | LINE Bank/KEB Hana                             |
| HARDA_INTERNASIONAL     | Allo Bank/Bank Harda Internasional             |
| HIMPUNAN_SAUDARA        | Bank Himpunan Saudara 1906                     |
| HSBC                    | HSBC                                           |
| ICBC                    | Bank ICBC Indonesia                            |
| INA_PERDANA             | Bank Ina Perdana                               |
| INDEX_SELINDO           | Bank Index Selindo                             |
| INDIA                   | Bank of India Indonesia                        |
| JAGO                    | BANK JAGO TBK                                  |
| JAMBI                   | Bank Jambi                                     |
| JASA_JAKARTA            | Bank Jasa Jakarta                              |
| JAWA_TENGAH             | Bank Jateng                                    |
| JAWA_TENGAH_UUS         | BPD JAWA TENGAH UNIT USAHA SYARIAH             |
| JATIM                   | Bank Jatim                                     |
| JAWA_TIMUR              | BPD Jawa Timur                                 |
| JATIM_UUS               | Bank Jatim UUS                                 |
| JPMORGAN                | JPMORGAN CHASE BANK                            |
| JTRUST                  | Bank JTrust Indonesia                          |
| KALIMANTAN_BARAT        | BPD Kalimantan Barat/Kalbar                    |
| KALIMANTAN_BARAT_UUS    | BPD Kalimantan Barat UUS                       |
| KALIMANTAN_SELATAN      | BPD Kalimantan Selatan/Kalsel                  |
| KALIMANTAN_SELATAN_UUS  | BPD Kalimantan Selatan UUS                     |
| KALIMANTAN_TENGAH       | BPD Kalimantan Tengah (Kalteng)                |
| KALIMANTAN_TIMUR        | BPD Kalimantan Timur                           |
| KALIMANTAN_TIMUR_UUS    | BPD Kalimantan Timur UUS                       |
| KESEJAHTERAAN_EKONOMI   | Seabank/Bank Kesejahteraan Ekonomi(BKE)        |
| LAMPUNG                 | BPD Lampung                                    |
| MALUKU                  | Bank Maluku                                    |
| MANDIRI                 | Bank Mandiri                                   |
| MANDIRI_SYR             | Bank Syariah Mandiri                           |
| MANDIRI_TASPEN          | Bank Mandiri Taspen Pos                        |
| MANTAP                  | Bank MANTAP                                    |
| MULTI_ARTA_SENTOSA      | Bank Multi Arta Sentosa(MAS)                   |
| MASPION                 | Bank Maspion Indonesia                         |
| MAYAPADA                | Bank Mayapada                                  |
| MAYBANK                 | Bank Maybank                                   |
| MAYBANK_SYR             | Bank Maybank Syariah Indonesia                 |
| MAYBANK_UUS             | Bank Maybank Syariah Indonesia UUS             |
| MAYORA                  | Bank Mayora Indonesia                          |
| MEGA                    | Bank Mega                                      |
| MEGA_SYR                | Bank Mega Syariah                              |
| MESTIKA_DHARMA          | Bank Mestika Dharma                            |
| METRO_EXPRESS           | BANK METRO EXPRESS                             |
| MNC_INTERNASIONAL       | Motion/Bank MNC Internasional                  |
| MUAMALAT                | Bank Muamalat Indonesia                        |
| MITRA_NIAGA             | Bank Mitra Niaga                               |
| MIZUHO                  | Bank Mizuho Indonesia                          |
| MUTIARA                 | Bank MUTIARA                                   |
| MULTICOR                | Bank MULTICOR                                  |
| NATIONALNOBU            | Bank National Nobu                             |
| NIAGA_SYR               | BANK NIAGA TBK. SYARIAH                        |
| NUSA_TENGGARA_BARAT     | BPD Nusa Tenggara Barat(NTB)                   |
| NUSA_TENGGARA_BARAT_UUS | BPD Nusa Tenggara Barat (NTB) UUS              |
| NUSA_TENGGARA_TIMUR     | BPD Nusa Tenggara Timur(NTT)                   |
| NUSANTARA_PARAHYANGAN   | Bank Nusantara Parahyangan                     |
| OCBC                    | Bank OCBC NISP                                 |
| OCBC_UUS                | Bank OCBC NISP UUS                             |
| PANIN                   | Bank Panin                                     |
| PANIN_SYR               | Panin Dubai Syariah                            |
| PAPUA                   | Bank Papua                                     |
| PERMATA                 | Bank Permata                                   |
| PERMATA_UUS             | Bank Permata UUS                               |
| PRIMA_MASTER            | Bank Prima Master                              |
| PUNDI                   | BANK PUNDI INDONESIA                           |
| QNB_KESAWAN             | QNB KESAWAN                                    |
| QNB_INDONESIA           | QNB Indonesia                                  |
| OKE                     | Bank Oke Indonesia                             |
| RABOBANK                | Rabobank International Indonesia               |
| RESONA                  | Bank Resona Perdania                           |
| RIAU_DAN_KEPRI          | BPD Riau Dan Kepri                             |
| RIAU_DAN_KEPRI_UUS      | BPD Riau Dan Kepri UUS                         |
| ROYAL                   | Blu/BCA Digital                                |
| SAHABAT_PURBA_DANARTA   | BANK PURBA DANARTA                             |
| SAHABAT_SAMPOERNA       | Bank Sahabat Sampoerna                         |
| SBI_INDONESIA           | Bank SBI Indonesia                             |
| SHINHAN                 | Bank Shinhan Indonesia                         |
| SINARMAS                | Bank Sinarmas                                  |
| SINARMAS_UUS            | Bank Sinarmas UUS                              |
| STANDARD_CHARTERED      | Standard Chartered Bank                        |
| SULAWESI                | Bank Sulteng                                   |
| SULAWESI_TENGGARA       | Bank Sultra                                    |
| SULSELBAR               | Bank Sulselbar                                 |
| SULSELBAR_UUS           | Bank Sulselbar UUS                             |
| SULUT                   | BPD Sulawesi Utara(SulutGo)                    |
| SUMATERA_BARAT          | BPD Sumatera Barat                             |
| SUMATERA_BARAT_UUS      | BPD Sumatera Barat UUS                         |
| NAGARI                  | BANK NAGARI                                    |
| SUMSEL_BABEL            | BPD Sumsel Babel                               |
| SUMSEL_DAN_BABEL        | Bank Sumsel Babel                              |
| SUMSEL_DAN_BABEL_UUS    | Bank Sumsel Dan Babel UUS                      |
| SUMUT                   | Bank Sumut                                     |
| SUMUT_UUS               | Bank Sumut UUS                                 |
| MITSUI                  | Bank Sumitomo Mitsui Indonesia                 |
| TOKYO                   | Bank of Tokyo                                  |
| UOB                     | TMRW/Bank UOB Indonesia                        |
| VICTORIA_INTERNASIONAL  | Bank Victoria International                    |
| VICTORIA_SYR            | Bank Victoria Syariah                          |
| WOORI                   | Bank Woori Saudara                             |
| YUDHA_BHAKTI            | Neo Commerce/Bank Yudha Bhakti                 |
| DAERAH_ISTIMEWA_UUS     | BPD*Daerah_Istimewa_Yogyakarta*(DIY)           |
| CCB                     | CCB Indonesia                                  |
| RBS                     | Royal Bank of Scotland (RBS)                   |
| OVO                     | OVO                                            |
| DANA                    | DANA                                           |
| GOPAY                   | GOPAY                                          |
| SHOPEEPAY               | SHOPEEPAY                                      |
| LINKAJA                 | LINKAJA                                        |

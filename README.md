# Google_AS-Sheets-Finance-HELOC
Google Sheets automation for calculating risk, interest, and amount owed on home equity lines of credit (HELOC)

## Google Apps Script Configuration

### Triggers

| Function | Event Source | Time Based Trigger ( - nn)* | Time of Day | Failure Notifications |
| -------- | ------------ | ------------------ | ----------- | --------------------- |
| freezeValueEntryHL1nonDedapr | Time-driven | Month timer - 15th | 2am to 3am | Daily |
| freezeValueEntryHL2nonDedapr | Time-driven | Month timer - 15th | 2am to 3am | Daily |
| FreezeValueEntryHL1BPapr | Time-driven | Month timer - 15th | 1am to 2am | Daily |
| FreezeValueEntryHL2BPapr | Time-driven | Month timer - 15th | 1am to 2am | Daily |
| FreezeValueEntryHL1apr | Time-driven | Month timer - 15th | Midnight to 1am | Immediately |
| FreezeValueEntryHL2apr | Time-driven | Month timer - 15th | Midnight to 1am | Immediately |
| errorCheckRates | Time-driven | Day timer | 8pm to 9pm | Daily |
| checkRateChange | Time-driven | Day timer | 10pm to 11pm | Daily |
| copyCheckRateData | Time-driven | Week timer - Friday | Midnight to 1am | Daily |

*\*Day of the month if `Month timer` is selected or Day of Week if `Week timer` is selected*

<sup><sub>Spreadsheet Name: `Line of Credit Schedule (HELOC)`</sup></sub>

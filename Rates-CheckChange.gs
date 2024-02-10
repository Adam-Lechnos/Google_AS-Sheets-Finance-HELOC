function checkRateChange() {
  // Fetch error status
  var errorRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Rates").getRange("K2"); 
  var errorStatus = errorRange.getValue();
  // Check totals sales
  if (errorStatus){
    // Fetch the email address
    var emailAddress = 'adam.lechnos@gmail.com';
  
    // Send Alert Email.
    var message = 'Rate Change in "Line of Credit Schedule (HELOC)", "Rates" tab (https://docs.google.com/spreadsheets/d/1MUk51uUWREKYw4EzrghDl8qxRTfHuebaj_41MWFJn9o). Update the automatic payment amount for the HELOC loan(s) as required, by referring to the Summary tab under the Manual Payment column.'; // Second column
    var subject = 'Rate Change - Line of Credit Schedule (HELOC)';
    MailApp.sendEmail(emailAddress, subject, message);
    }
}
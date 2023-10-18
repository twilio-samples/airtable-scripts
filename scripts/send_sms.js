// This script shows how to make a simple SMS request using the Twilio API.
// This is only an example that can be expanded upon for other Twilio API calls.
// For the use case of sending SMS messages, the built in Airtable-Twilio integration is a better option.

// Get secrets to use for Twilio API
const secrets = await base
  .getTable("Secrets")
  .selectRecordsAsync({ fields: ["key", "value"] })
  .then((results) => {
    let s = {};
    results.records.forEach((r) => {
      s[r.getCellValue("key")] = r.getCellValue("value");
    });
    return s;
  });

// Select a record and get the phone number
// This will also let you add it as a button
let event_record = await input.recordAsync(
  "Select a contact",
  base.getTable("Contacts")
);
let phone = event_record.getCellValue("Phone");

// Create headers for API request
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append(
  "Authorization",
  `Basic ${btoa(secrets.Account_SID + ":" + secrets.Auth_Token)}`
);

// Add encoded parameters to body
var urlencoded = new URLSearchParams();
urlencoded.append("To", phone);
urlencoded.append("From", secrets.Phone_Number);
urlencoded.append("Body", "Ahoy from inside an Airtable");

// Optional: add status callback to store message status in Airtable
urlencoded.append("StatusCallback", "YOUR_AIRTABLE_WEBHOOK_URL")

// Set the request options
var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow",
};

// make request
let apiResponse = await fetch(
  `https://api.twilio.com/2010-04-01/Accounts/${secrets.Account_SID}/Messages.json`,
  requestOptions
);

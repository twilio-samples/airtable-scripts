// Configuration: Chase these lines to configure the script
// 1. Configure the table to be used in the script
const table = "Habits";
// 2. Configure the fields to be sent to Studio
const fields = ["habit_text", "phone"]
// 3. Set you Twilio Account Info
const ACCOUNT_SID = "<TWILIO_ACCOUNT_SID>";
const AUTH_TOKEN = "<TWILIO_AUTH_TOKEN>";
const FROM_PHONE = "<YOUR_TWILIO_PHONE_NUMBER>";
const STUDIO_URL = "<YOUR_TWILIO_STUDIO_API_URL>";
// WARNING: the API credentials will be visible to all collaborators

// ----- Done with configuration ----- //

// Pick the record
let record = await input.recordAsync(
    "Select a record",
    base.getTable(table),
    {"fields": fields}
);

// Create header
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Authorization", `Basic ${btoa(ACCOUNT_SID + ":" + AUTH_TOKEN)}`);

// Create body
var urlencoded = new URLSearchParams();
urlencoded.append("To", record.getCellValue("phone"));
urlencoded.append("From", FROM_PHONE);
urlencoded.append("Parameters",JSON.stringify(inputConfig));

// Put the request together
var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
};

// Send request
let apiResponse = await fetch(STUDIO_URL,
    requestOptions
);
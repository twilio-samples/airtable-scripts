// Configuration: Chase these lines to configure the script
// 1. Configure the table to be used in the script
const table = "Habits";
// 2. Configure the fields to be sent to Studio
const fields = ["habit_text", "phone"]


// Get Secrets
const secrets = await base.getTable("Secrets")
    .selectRecordsAsync({fields: ["key", "value"]})
    .then((results) => {
        let s = {};
        results.records.forEach((r) => {
            s[r.getCellValue("key")] = r.getCellValue("value");
        });
        return s;
    });

// Pick the record
let record = await input.recordAsync(
    "Select a record",
    base.getTable(table),
    {"fields": fields}
);

// Create header
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Authorization", `Basic ${btoa(secrets.Account_SID + ":" + secrets.Auth_Token)}`);

// Create body
var urlencoded = new URLSearchParams();
urlencoded.append("To", record.getCellValue("phone"));
urlencoded.append("From", secrets.Phone_Number);

// Turn all the fields into parameters to send to Studio
var params = {"id": record.id};
  fields.forEach((field) => {
    params[field] = record.getCellValue(field);
  });
JSON.stringify(params);
urlencoded.append("Parameters",JSON.stringify(params));


// Put the request together
var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
};

// Send request
let apiResponse = await fetch(secrets.Studio_URL,
    requestOptions
);
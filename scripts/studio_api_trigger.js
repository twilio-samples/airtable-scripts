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
let habit = await input.recordAsync(
    "Select a habit",
    base.getTable("Habits")
);

// Create header
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Authorization", `Basic ${btoa(secrets.Account_SID + ":" + secrets.Auth_Token)}`);

// Create body
var urlencoded = new URLSearchParams();
urlencoded.append("To", habit.getCellValue("phone"));
urlencoded.append("From", secrets.Phone_Number);
urlencoded.append("Parameters",`{"text":"${habit.getCellValue("habit_text")}", "id":"${habit.id}"}`);
// Be careful about to follow the format for custom parameters 

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
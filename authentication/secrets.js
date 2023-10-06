// Get secrets to use for Twilio API
const secrets = await base
  // Tables and fields are case sensitive, so make they match exactly.
  .getTable("Secrets")
  .selectRecordsAsync({ fields: ["key", "value"] })
  .then((results) => {
    let s = {};
    results.records.forEach((r) => {
      s[r.getCellValue("key")] = r.getCellValue("value");
    });
    return s;
  });

// secrets = {  Account_SID: "AC********************************",
//              Auth_Token: "2f******************************",
//              Phone_Number: "+1**********"}

A collection of Airtable scripts to call Twilio APIs.
These are specifically written for the Scripting Extension Tool which runs in the browser

## Contents:

### [send_sms.js](/scripts/send_sms.js)
- This script shows how to make a simple SMS request using the Twilio API.
- This is only an example that can be expanded upon for other Twilio API calls.
- The optional status callback requires set up via the webhook automation trigger within Airtable
- For the use case of sending SMS messages, the built in Airtable-Twilio integration is a better option.

### [studio_api_trigger.js](/scripts/studio_api_trigger.js)
- This script triggers a studio flow via the API
- See the [Studio API docs](https://www.twilio.com/docs/studio/rest-api/v2/execution#create-an-execution-to-trigger-a-flow) for more details.
- Tip: pass an airtable ID as a parameter to Studio and use it to store responses or other data from the flow.

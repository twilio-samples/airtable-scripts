A collection of Airtable automation scripts to call Twilio APIs.
These are specifically written for Scripting Automation Actions which run on Airtable servers via automatons and interfaces. 

## Contents:

### [studio_api_trigger.js](/automation_scripts/studio_api_trigger.js)
- This script triggers a studio flow via the API
- See the [Studio API docs](https://www.twilio.com/docs/studio/rest-api/v2/execution#create-an-execution-to-trigger-a-flow) for more details.
- Tip: pass an airtable ID as a parameter to Studio and use it to store responses or other data from the flow.
# Airtable Scripts

This repo contains scripts, automations, and code snippets that add deeper Twilio functionality to Airtable. 

## Contents
### [authentication](/authentication/)
  Suggestions for saving secrets and code snippets for authentication
### [scripts](/scripts/)
  Scripts for using Twilio in Airtable via Extension > Scripting
### [automation_scripts](/automation_scripts/)
  Scripts for using Twilio in Airtable via Automations > Run a script

## Thoughts and Musings

- Airtable does not allow for importing libraries or dependencies in their scripts.
  - Therefore, we cannot use the javascript Twilio SDK.
  - Airtable use the [fetch library](https://developer.mozilla.org/en-US/docs/Web/API/fetch) to make external API calls.
  - When using Twilio with fetch, the Account SID and Auth Token need to be 64 bit encrypted. See [Authentication](/authentication/) for more on this.


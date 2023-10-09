# Airtable Scripts

This repo contains scripts, automations, and code snippets that add deeper Twilio functionality to Airtable. 

## Contents
### [authentication](/authentication/)
  Suggestions for saving secrets and code snippets for authentication
### [scripts](/scripts/)
  One off scripts for using Twilio in Airtable
  
<!-- To Do: -->
<!-- ### [projects](/projects/)
  Collections of related scripts into bigger projects
### [formulas](/formulas/)
  Useful field level formulas for Airtable -->

## Getting Started

Start by looking at the Auth and Secrets folder. In this folder you will find:
1. Suggestions for setting up and saving and accessing Twilio secrets (like Account SID and Auth Token) in a table.
1. Two methods for authenticating with Twilio when you make an API call in a script or automation

## Thoughts and Musings

- Airtable does not allow for importing libraries or dependencies in their scripts.
  - Therefore, we cannot use the javascript Twilio SDK.
  - Airtable use the [fetch library](https://developer.mozilla.org/en-US/docs/Web/API/fetch) to make external API calls.
  - When using Twilio with fetch, the Account SID and Auth Token need to be 64 bit encrypted. See [Authentication](/authentication/) for more on this.


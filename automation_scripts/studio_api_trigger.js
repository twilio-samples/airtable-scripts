// Configuration: Chase these lines to configure the script
// Set you Twilio Account Info
const ACCOUNT_SID = "<TWILIO_ACCOUNT_SID>";
const AUTH_TOKEN = "<TWILIO_AUTH_TOKEN>";
const FROM_PHONE = "<YOUR_TWILIO_PHONE_NUMBER>";
const STUDIO_URL = "<YOUR_TWILIO_STUDIO_API_URL>";
// WARNING: the API credentials will be visible to all collaborators

// All other configuration is done in the Airtable UI
// via "Input Variables" on the left side of the "Edit Script" dialog

// ----- Done with configuration ----- //

// The following line is a minified version of https://github.com/mathiasbynens/base64/blob/master/src/base64.js to allow us to base64 encode strings which is required for HTTP Basic Authentication
!function(e){var t="object"==typeof exports&&exports,r="object"==typeof module&&module&&module.exports==t&&module,o="object"==typeof global&&global;o.global!==o&&o.window!==o||(e=o);var a=function(e){this.message=e};(a.prototype=new Error).name="InvalidCharacterError";var n=function(e){throw new a(e)},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=/<%= spaceCharacters %>/g,h={encode:function(e){e=String(e),/[^\0-\xFF]/.test(e)&&n("The string to be encoded contains characters outside of the Latin1 range.");for(var t,r,o,a,d=e.length%3,h="",i=-1,f=e.length-d;++i<f;)t=e.charCodeAt(i)<<16,r=e.charCodeAt(++i)<<8,o=e.charCodeAt(++i),h+=c.charAt((a=t+r+o)>>18&63)+c.charAt(a>>12&63)+c.charAt(a>>6&63)+c.charAt(63&a);return 2==d?(t=e.charCodeAt(i)<<8,r=e.charCodeAt(++i),h+=c.charAt((a=t+r)>>10)+c.charAt(a>>4&63)+c.charAt(a<<2&63)+"="):1==d&&(a=e.charCodeAt(i),h+=c.charAt(a>>2)+c.charAt(a<<4&63)+"=="),h},decode:function(e){var t=(e=String(e).replace(d,"")).length;t%4==0&&(t=(e=e.replace(/==?$/,"")).length),(t%4==1||/[^+a-zA-Z0-9\/]/.test(e))&&n("Invalid character: the string to be decoded is not correctly encoded.");for(var r,o,a=0,h="",i=-1;++i<t;)o=c.indexOf(e.charAt(i)),r=a%4?64*r+o:o,a++%4&&(h+=String.fromCharCode(255&r>>(-2*a&6)));return h},version:"<%= version %>"};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define(function(){return h});else if(t&&!t.nodeType)if(r)r.exports=h;else for(var i in h)h.hasOwnProperty(i)&&(t[i]=h[i]);else e.base64=h}(this);

let inputConfig = input.config()

  // Create header
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Authorization", `Basic ${base64.encode(ACCOUNT_SID + ":" + AUTH_TOKEN)}`);

// Create body
var urlencoded = new URLSearchParams();
urlencoded.append("To", `${inputConfig.phone}`);
urlencoded.append("From", FROM_PHONE);

// Turn all the inputs into parameters to send to Studio
var params = {};
for (const [field, value] of Object.entries(inputConfig)) {
  params[field] = value;
};
urlencoded.append("Parameters",JSON.stringify(params));

// Put the request together
var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "manual",
};

// Send request
let apiResponse = await fetch(STUDIO_URL,
    requestOptions
);
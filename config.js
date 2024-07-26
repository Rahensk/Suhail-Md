const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_41_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzksXG4gICAgICAgIDI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NixcbiAgICAgICAgMjUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgOSxcbiAgICAgICAgODIsXG4gICAgICAgIDU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDcxLFxuICAgICAgICAzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICA2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MixcbiAgICAgICAgODcsXG4gICAgICAgIDgwLFxuICAgICAgICA0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICA3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDc3LFxuICAgICAgICAzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI2LFxuICAgICAgICA0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk3LFxuICAgICAgICA4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NixcbiAgICAgICAgMjI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDkyLFxuICAgICAgICAxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS25HU3RmYkQ5YkZXYmxNbHNxUWQycWJSZlF1R1ptWTBDQTJwSmdkdEg3ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ1dpSVhfaTJRX0MxZV9xYTNzV2ExZ1wiLFxuICBcInBob25lSWRcIjogXCJkYzI4ZjVlYS04ZGVkLTQzOGQtYmQzMy1iMTNlMmRkMTQzYzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAxNjksXG4gICAgICAzMixcbiAgICAgIDI1MyxcbiAgICAgIDcwLFxuICAgICAgMTgzLFxuICAgICAgMzksXG4gICAgICA1OCxcbiAgICAgIDIyNSxcbiAgICAgIDE4LFxuICAgICAgNzAsXG4gICAgICAxOCxcbiAgICAgIDcsXG4gICAgICAyNDQsXG4gICAgICA1MyxcbiAgICAgIDI0NCxcbiAgICAgIDk1LFxuICAgICAgMzIsXG4gICAgICAxMTMsXG4gICAgICA5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICAwLFxuICAgICAgMjQxLFxuICAgICAgODksXG4gICAgICAyMDcsXG4gICAgICA3NCxcbiAgICAgIDE4MSxcbiAgICAgIDIxNSxcbiAgICAgIDE5NixcbiAgICAgIDE2NSxcbiAgICAgIDEyMCxcbiAgICAgIDQsXG4gICAgICA5NCxcbiAgICAgIDgyLFxuICAgICAgNTAsXG4gICAgICAxMjUsXG4gICAgICA5MCxcbiAgICAgIDI0NixcbiAgICAgIDI1MyxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5TUNYRlZHUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3NTU3MDE5MzM0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NDQ2NTMxMDYzODIwNzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ056NjZkQUdFUHlKamJVR0dCRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib2M2LzBrTmFmeW9NcXdlM2RPZERrem82VUVzNU56aWl4b3YweVVSTGcxST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhRlkyN0k4azdRcW8vR0NDWnFVcldDYVlBMzFpRExQQm1oRUpzVVY1Z2dWTkpTbkdtZkp1bTVvQVNuT1NxUlJiQUFLNUh4QjBnOVl2UzE1STllaS9DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4VHdTUUcvaXFEOUFUVTBNdEZZWXhSc0JFbUorcnF5TXQ0aDJQbTJxZjViUlhkSjJRZlU1a2RXb2c5cXRHdlNoR1V0TVl6d2M0aTJFY3JYRGRVeDZpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc1NTcwMTkzMzQ6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5NzYwNjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKYXVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUphdS5qc29uIjogIntcImtleURhdGFcIjpcIldTTzFqSVVPVi93c251UnMrQzlMVlVkYk1zTUtqSUFNWk9QRVAyWVBWRWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc4MDEyMDkyNCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //EENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_18_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMTI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY3LFxuICAgICAgICA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDk2LFxuICAgICAgICA4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY3LFxuICAgICAgICA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxLFxuICAgICAgICAyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4LFxuICAgICAgICA2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDczLFxuICAgICAgICAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjIsXG4gICAgICAgIDczLFxuICAgICAgICA3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNCxcbiAgICAgICAgODksXG4gICAgICAgIDYyLFxuICAgICAgICA4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaVlSb2F6OHJnd3RJc1FpRmg5WDdYWXNHVVZNanVZM1M3Vzh0c3V1WCtCTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkzMzkwMTM4MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQxMDNCQkY2M0JEODg5QTk5RTAwNTNDNzYxQzFERDk3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTEzOTQ5M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTMzOTAxMzgxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDg4MDJBMTU0RkREQTRCMTc0MjY2QTQ1MzM5RkNGMDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTM5NDk2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNnV0dETkZOUWUtRV9ndDdXajA2OWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjM1YTY0ZTMtNDU5My00NDIzLTk2ZGYtNWYxMjk5ZjIwYjgzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDk3LFxuICAgICAgMjUsXG4gICAgICAwLFxuICAgICAgMjA5LFxuICAgICAgOTksXG4gICAgICAyMjAsXG4gICAgICAxNTcsXG4gICAgICAxOTIsXG4gICAgICA0OSxcbiAgICAgIDI1MSxcbiAgICAgIDE4NyxcbiAgICAgIDUsXG4gICAgICAyMDksXG4gICAgICAxNTIsXG4gICAgICAxNyxcbiAgICAgIDgyLFxuICAgICAgMTI5LFxuICAgICAgNjMsXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA0LFxuICAgICAgMjQ0LFxuICAgICAgMTY2LFxuICAgICAgMjMwLFxuICAgICAgNTQsXG4gICAgICAyNTEsXG4gICAgICAxNDcsXG4gICAgICAyMjIsXG4gICAgICAyMSxcbiAgICAgIDIxNCxcbiAgICAgIDE1MyxcbiAgICAgIDE3MyxcbiAgICAgIDQ4LFxuICAgICAgOTAsXG4gICAgICAyMDksXG4gICAgICA1MSxcbiAgICAgIDE0MSxcbiAgICAgIDYxLFxuICAgICAgOTQsXG4gICAgICAyMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVg2VENDUVpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTMzOTAxMzgxNToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ3MTU0MTQ0NzUxNjI1OjEwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkphY2sgU3BhcnJvd1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lxaHZJSURFSitDMnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS3FTMWVWSVRyTjhZdjJzTXo4cnFFajJ0MW4zU1FUMmNsb3l4ZmNPZEoyYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUMUd6V0NCNldqL2dBVTFIRUtzcEgxbEdtWFZlb1N3SmZ4K1lDU2hhS0E2RklRZVU4M2ZJOGx2ZEZhQytFYUZKYkp3WTkxQVlsUjdLYzhkdnVvYnJEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrNnIxejZ6TU1OeTYzQXc4NVR2SmM0NGUveENkZVJNS3Z6eDZvcHdqVlVPcjdYdUduMUV2OHRWMFl0eEZHMDJKb1krcm9FL1JoeWEzOTBEK0VKQjhnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkzMzkwMTM4MTU6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTEzOTQ4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURQeFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFB4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiaURINnY2Zko0VkNJOGZvSUFBaFdTTm1YN2p6R0tKS3MyVVdOVy81QmRiZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MTA0ODc5NDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTEzOTQ5MDk0OVwifSIKfQ=="  // PUT your SESSION_ID 


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
  //read_status: process.env.AUTO_READ_STATUS || "flash",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //EENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

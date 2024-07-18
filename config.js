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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_19_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExLFxuICAgICAgICAyNCxcbiAgICAgICAgNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk5LFxuICAgICAgICA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMixcbiAgICAgICAgMjE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU3LFxuICAgICAgICA1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM0LFxuICAgICAgICA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic0RDRTI2YkRyMXh6bzkzSnJlMHVMSmRBL1dkdmhIQWhEVTMwdXREL1pTTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib00wUk9DeHlUUEtya084LWNsd0RFUVwiLFxuICBcInBob25lSWRcIjogXCIzNDQ1NThiNi1iODAyLTQ3MGQtYjFiOS05ODU4Yjk1YWU4NTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgMjM0LFxuICAgICAgNTIsXG4gICAgICAxOTIsXG4gICAgICAxNzUsXG4gICAgICAxNTUsXG4gICAgICA5LFxuICAgICAgMTkyLFxuICAgICAgMTkzLFxuICAgICAgODYsXG4gICAgICA1MCxcbiAgICAgIDIzMyxcbiAgICAgIDE2MCxcbiAgICAgIDE3NCxcbiAgICAgIDUxLFxuICAgICAgODYsXG4gICAgICAxMTcsXG4gICAgICAxMjgsXG4gICAgICAxNTcsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICA2OSxcbiAgICAgIDE1LFxuICAgICAgMTk3LFxuICAgICAgNTksXG4gICAgICAyMixcbiAgICAgIDEyNSxcbiAgICAgIDI0MixcbiAgICAgIDI0NSxcbiAgICAgIDIyLFxuICAgICAgMzIsXG4gICAgICAyMixcbiAgICAgIDIxMyxcbiAgICAgIDE2MixcbiAgICAgIDQyLFxuICAgICAgMTQ0LFxuICAgICAgMTIwLFxuICAgICAgMjE0LFxuICAgICAgMjQwLFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFlIQk1SRzVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzU1NzAxOTMzNDo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ0NDY1MzEwNjM4MjA3OjkzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ056NjZkQUdFT3ZFM2JRR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib2M2LzBrTmFmeW9NcXdlM2RPZERrem82VUVzNU56aWl4b3YweVVSTGcxST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrTFZMYStXbDJyTUd2NS9WbWc0U2NMa3VGbUJidTN5Q1N0cVcraEg3dDl4QldoVkRiOGFSUCtpRUNrOVhzWFphejN1Q3A3YnVqV0Q5dXdMRGJxTEpDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2MDIxWEZZdnEycGpOTGdYR3ZQZzI4aWJZUjB6b2IyTVhCam9kTG9iRkMwZno2REhIWmFTZTM5V1I0cUV5ZHVOaDJpS0plUWFsNVU2bTZZZTlaWU1qUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc1NTcwMTkzMzQ6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTk3MTY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmF1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKYXUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXU08xaklVT1Yvd3NudVJzK0M5TFZVZGJNc01LaklBTVpPUEVQMllQVkVrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3ODAxMjA5MjQsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //EENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

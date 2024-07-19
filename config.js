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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_27_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOSxcbiAgICAgICAgNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDExLFxuICAgICAgICA3OSxcbiAgICAgICAgNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDAsXG4gICAgICAgIDIxLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1LFxuICAgICAgICA1MCxcbiAgICAgICAgNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAzLFxuICAgICAgICAxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDcxLFxuICAgICAgICAxODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgODYsXG4gICAgICAgIDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDYyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1LR3RWVjFuRXl6Q1NDb1NQMjFNM2x3azQ0QW4yemF0ZldDVi9oNnpGbVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVDX0IxdGhOVGxxY1luVE5uaE1TUWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDE2YmFmNjctODMyMi00ZTM1LTlhZjktMmUzOTZkNGZiMjQ2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgMTc1LFxuICAgICAgNjIsXG4gICAgICAyMDEsXG4gICAgICAxNDcsXG4gICAgICA3MixcbiAgICAgIDE5OCxcbiAgICAgIDg0LFxuICAgICAgNTYsXG4gICAgICA3MyxcbiAgICAgIDIzNyxcbiAgICAgIDE2OCxcbiAgICAgIDE1LFxuICAgICAgNTEsXG4gICAgICA3NSxcbiAgICAgIDg1LFxuICAgICAgMTUwLFxuICAgICAgMTAwLFxuICAgICAgOSxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDExMixcbiAgICAgIDExMSxcbiAgICAgIDEyLFxuICAgICAgMTczLFxuICAgICAgODMsXG4gICAgICA3MixcbiAgICAgIDE3OSxcbiAgICAgIDE4MyxcbiAgICAgIDIxNixcbiAgICAgIDEwNSxcbiAgICAgIDg0LFxuICAgICAgMTU1LFxuICAgICAgMjQxLFxuICAgICAgMTQyLFxuICAgICAgMTc3LFxuICAgICAgMTk4LFxuICAgICAgNzQsXG4gICAgICAzNCxcbiAgICAgIDExNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJURTRQN1BOR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4MzcxOTY0Nzc5OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiX/CdkYzwnZGC8J2RiPCdkYVf8J2RhfCdkLjwnZC78J2QtPCdkYFfXCIsXG4gICAgXCJsaWRcIjogXCIxNjM5NTIyMDYwNjE2NzU6NTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHVCcGFNQkVMZlQ2YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyWkY4VWZVV1VhT1ZPdTc4OFhTQ005bmRIUE9xd0J4bytxSSsveXZoNlJVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlkckpyTXhnNEdRS1hmUHpWbEZPQXNmWUVnc2x1NGs4R1Bna0pCRDBTdHFuNE8yQkhxQ2dlNllldWc5dFQ5bTBqRnVMN2ZaRG44c1ZGaFRqSkUrVEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1ZVE0yRzJJQ1p2TnBUaTQzQmFzMS91SE5wa1o0RnlyY3JiSndNT29DNFA0dTY1cmJlWFo4NW1aZ0VOeG1FdWtMOGtlVWpVYnhhUWgvQldPdWdqNkFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODM3MTk2NDc3OTo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzk1NjQyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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

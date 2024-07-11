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
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_45_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDkyLFxuICAgICAgICA5MixcbiAgICAgICAgODEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAxODIsXG4gICAgICAgIDExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNixcbiAgICAgICAgMjM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MixcbiAgICAgICAgMTY1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYaDJuT29naGdjM0Jpa2k2Z0szWEw4WXVOSllhMEowVURFZ2l3a2xGZ2t3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxZU84MjhZZVQyZUxQeTNDYVZxNG9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFmNmRhZjJiLTIyZTctNDM5NC1iNTZhLTUzMTQ1YmUyNWY2NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxNCxcbiAgICAgIDI3LFxuICAgICAgODYsXG4gICAgICAyNTMsXG4gICAgICA5MyxcbiAgICAgIDIzOSxcbiAgICAgIDI0MixcbiAgICAgIDE2NCxcbiAgICAgIDIyNixcbiAgICAgIDE0LFxuICAgICAgNCxcbiAgICAgIDExNSxcbiAgICAgIDE0OCxcbiAgICAgIDE4NCxcbiAgICAgIDEzNCxcbiAgICAgIDI0MSxcbiAgICAgIDI0MSxcbiAgICAgIDYzLFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICAzNixcbiAgICAgIDIyOCxcbiAgICAgIDU1LFxuICAgICAgMTA1LFxuICAgICAgMTkwLFxuICAgICAgNTIsXG4gICAgICA0NCxcbiAgICAgIDg2LFxuICAgICAgMjA3LFxuICAgICAgMjAyLFxuICAgICAgMTE5LFxuICAgICAgMTksXG4gICAgICAxNTgsXG4gICAgICAxMjMsXG4gICAgICAxNjMsXG4gICAgICA5OCxcbiAgICAgIDE3NSxcbiAgICAgIDI1NSxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTVFY3U01KWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3NTU3MDE5MzM0Ojg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDQ0NjUzMTA2MzgyMDc6ODhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTno2NmRBR0VKUHhzN1FHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvYzYvMGtOYWZ5b01xd2UzZE9kRGt6bzZVRXM1TnppaXhvdjB5VVJMZzFJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitQNG1XNUw3cHJFUXNaUHpWd05CTGkwcjMxQWpIcE1ZS2piOUtmZXBnYzZzWllnWEpWVjFFM0FRdThmQ3Y1TFErblRYS3ltaEVPVHIzZHV5VjkyK0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdSRlhjMGhsN3oxdTFIVlRLRnNEclQyVldEeFdSZjFsQldCSVBKMXJ5VkluZE5QZUhCQ0lodVlWbDV0cG9GL3dDUUVLVlpvMHkrZnJQVTdjMXorOGlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzU1NzAxOTMzNDo4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MTQ3MDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKYW1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUphbS5qc29uIjogIntcImtleURhdGFcIjpcIjg5ZEJweElRc1ZUd3FRSGFkN1FaUjdMM2lsNWFYNjZRdFhOelVtejhCTlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc4MDEyMDkyMyxcImN1cnJlbnRJbmRleFwiOjE5LFwiZGV2aWNlSW5kZXhlc1wiOlsxNiwwLDE5XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
  //save_status: process.env.AUTO_SAVE_STATUS || "fe",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

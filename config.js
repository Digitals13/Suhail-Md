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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348080212949";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_29_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDU0LFxuICAgICAgICA2OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDUwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAzMixcbiAgICAgICAgMTIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDksXG4gICAgICAgIDg2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDk5LFxuICAgICAgICA5MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzLFxuICAgICAgICA0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQzLFxuICAgICAgICA4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEVXVsanpUb3JLYmVla0hWbTlmRW8vQzNuSGJiR0NaOEV3UTZ1Zzh3NzRzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnMmVrRFlaNVJ0RzIwQjlOeElIQmh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdjODA2MjU5LWIyMTItNGEwZi1iMDczLTBhY2Q0ODcyZGZlY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICAyMTEsXG4gICAgICAxNDMsXG4gICAgICAyMzQsXG4gICAgICAzMSxcbiAgICAgIDE5MSxcbiAgICAgIDE3NCxcbiAgICAgIDE5MixcbiAgICAgIDk5LFxuICAgICAgMjAzLFxuICAgICAgMTgzLFxuICAgICAgMTU4LFxuICAgICAgMjMyLFxuICAgICAgMjU0LFxuICAgICAgMjMxLFxuICAgICAgMTkyLFxuICAgICAgNzIsXG4gICAgICA0OSxcbiAgICAgIDIzNyxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgNjAsXG4gICAgICAyMDAsXG4gICAgICAxNDgsXG4gICAgICAyMjcsXG4gICAgICA5OCxcbiAgICAgIDIwNyxcbiAgICAgIDEzNixcbiAgICAgIDc3LFxuICAgICAgMTE3LFxuICAgICAgMjIwLFxuICAgICAgMjMxLFxuICAgICAgMTY4LFxuICAgICAgMjMwLFxuICAgICAgMjAxLFxuICAgICAgMTYyLFxuICAgICAgMTMwLFxuICAgICAgMTk1LFxuICAgICAgMTgxLFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRaR0JSWEo0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDgwMjEyOTQ5OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NDI2MTczNjg5ODcwNDoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKK21xWTBCRUtXOW1MTUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImV0N0dieDQ3UWw2dnh2bUJWanM1RjZDd3Y1b1J5OTNVZ1dGb3RDNHVRaUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOWlrWjhqUXdEL2JyTW43YlNFMkhaRk5JMWd4VThhSHM0RW90am1aOHJKR0hhaWNlNU1wUGVRSWEzUVlHcGxjQmVUNFR6MkRQVzlqZWJ0WW1rWnNDQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYWZEQlZQbzNTZEdJVlRvMWlHOTRZaVFaVjRiN05NMHV6Y0ZBTE1CRk9hTG5oM0ovbmFJVXRXeFUxSStLZnU2dkI4dTJ5bFNWRXZneVNuN1NzQ29BaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4MDIxMjk0OToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc5Njg1NTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMU3NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxTcy5qc29uIjogIntcImtleURhdGFcIjpcIk1WaEhJR0VDQmkrZ3lpK0EyTnFLeWRSY1BnMnJGTFhoVkpDRW9Oak9mNFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjk2Mzc1MDcxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsM119LFwidGltZXN0YW1wXCI6XCIxNzE3OTY2OTM3ODYzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

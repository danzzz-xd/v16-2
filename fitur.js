//HALLO TOT, I.M RAMDANI/DAN'ZZ CYBER
//MAU NYOLONG CASE? TAG DULU NAMA RAMDANI OFFICIAL ATAU NAMA PANGGILAN "DAN'ZZ"
//REST API BARU YE NGAB, JAN DI BULY
//NOTES : KETAHUAN REUPLOAD KAGA IZIN/TAG, GUA MATIIN REST APINYA
//ATO SC INI DI JUAL? REST API SUNG PADAM BANG, HADEH
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
//NODE_MODULES
const fs = require('fs')
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const yts = require( 'yt-search')
const Ramdaniofficial = require('Ramdaniofficial-api')
const { exec } = require('child_process')
//LIB
const { color, bgcolor } = require('./lib/color')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { pinterest } = require('./lib/pinterest')
const { encimg } = require('./lib/encimg')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
//DATABASE
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antivirus = JSON.parse(fs.readFileSync('./database/antivirus.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const _regist = JSON.parse(fs.readFileSync('./database/registered.json'))
const _bocil = JSON.parse(fs.readFileSync('./database/bocil.json'))
const _dewasa = JSON.parse(fs.readFileSync('./database/dewasa.json'))
//RUN
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./index')
//RESULT LIB
const { iklan } = require('./result/lib/iklan')
const { donasi } = require('./result/lib/donasi')
const { grupbot } = require('./result/lib/grupbot')
const { rules } = require('./result/lib/rules')
const { infobot } = require('./result/lib/infobot')
//RESULT GAME
const setGelud = require('./result/game/lib/gamegelud.js')
const game = require("./result/game/lib/game");
//PLUGING
//BELI SCRIPT
const { beliscript } = require('./plugins/buyscript')
//TOPUP
//TOPUPGAME
const { topupgame } = require('./plugins/topupgame')
const { topupmobilelegends } = require('./plugins/topupmobilelegends')
const { topupfreefire } = require('./plugins/topupfreefire')
const { topuppubg } = require('./plugins/topuppubg')
const { topuppointblank } = require('./plugins/topuppointblank')
//TOP UP SALDO
const { topupsaldo } = require('./plugins/topupsaldo')
const { topupgopay } = require('./plugins/topupgopay')
const { topupdana } = require('./plugins/topupdana')
const { topupovo } = require('./plugins/topupovo')
const { topuppulsa } = require('./plugins/topuppulsa') 
//CONFIG
const settings = JSON.parse(fs.readFileSync('./config/settings.json'))
const fake = JSON.parse(fs.readFileSync('./config/fake.json'))
const sosmed = JSON.parse(fs.readFileSync('./config/sosmed.json'))
const donate = JSON.parse(fs.readFileSync('./config/donate.json'))
const apikey = JSON.parse(fs.readFileSync('./config/apikey.json'))
//MEDIA
//FOTO
const fakeimage = fs.readFileSync("./media/foto/fakeimg.jpg"); 
const fthumb = fs.readFileSync("./media/foto/thumb.jpg");
const thumb = fs.readFileSync("./media/foto/thumb.jpg");
const menu = fs.readFileSync("./media/foto/menu.jpg"); 
const imgqris = fs.readFileSync("./media/foto/qris.jpg");
//VIDEO
const sendVideo = fs.readFileSync("./media/video/video.mp4");
//AUDIO
const sendAudio = fs.readFileSync("./media/audio/audio.mp3");
//GIF
const sendGif = fs.readFileSync("./media/gif/gif.mp4");
//STICKER
const sendSticker = fs.readFileSync("./media/sticker/sticker.webp");
//EXIF
const Exif = require('./media/sticker/exif')
const exif = new Exif()
//MEDIA FUNCTIONS
let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
//SETTINGS
namaowner = settings.NamaOwner
namabot = settings.NamaBot
nomorowner = settings.NomorOwner
nomorbot = settings.NomorBot
prefixx = settings.Prefix
//DONASI
gopay = donate.Gopay
dana = donate.Dana
ovo = donate.Ovo
pulsa = donate.Pulsa
qris = donate.Qris
saweria = donate.Saweria
linktree = donate.Linktree
//APIKEY
Ramdaniapi = apikey.Ramdaniapi
Danzkey = apikey.Danzkey
Lolhuman = apikey.Lolhuman
Lolkey = apikey.Lolkey
//SOSIAL MEDIA
Github = sosmed.Github
Heroku = sosmed.Heroku
Website = sosmed.Website
Wa = sosmed.Whatsapp
Yt = sosmed.Youtube
Ig = sosmed.Instagram
Twitter = sosmed.Twitter
Fb = sosmed.Facebook
Saweria = sosmed.Saweria
Linktree = sosmed.Linktree
//FAKE
fakemenu = fake.FakeMenu
fakereply = fake.FakeReply
faketroli = fake.FakeTroli
//TRUE AND FALSE
public = true
self = false
//ADD CMD
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
scommand.push(obj)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}
const getCmd = (id) => {
let position = null;
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i;
}
});
if (position !== null) {
return scommand[position].chats;
}
};
//REGISTRASI
const addRegist = (registid, sender, age, time, serials) => {
const reg = { id: registid, name: sender, age: age, time: time, serial: serials }
_regist.push(reg)
fs.writeFileSync('./database/registered.json', JSON.stringify(_regist))
}
const addSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const cekRegist = (sender) => {
let status = false
Object.keys(_regist).forEach((i) => {
if (_regist[i].id === sender) {
status = true
}
})
return status
}
//DEWASA
const addDewasa = (dewasaid, sender, age, time, serimek) => {
const dew = { id: dewasaid, name: sender, age: age, time: time, serimek: serimek }
_dewasa.push(dew)
fs.writeFileSync('./database/dewasa.json', JSON.stringify(_dewasa))
}
const addSerimek = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const cekDewasa = (sender) => {
let status = false
Object.keys(_dewasa).forEach((i) => {
if (_dewasa[i].id === sender) {
status = true
}
})
return status
} 
    function danz(seconds){
    function pad(s){
    return (s < 10 ? '0' : '') + s;
    }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
module.exports = Ramdani = async (Ramdani, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : `${prefixx}`
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
//MESS
			mess = {
				daftar: `─ 「 *NOT REGISTERED* 」 ─\n\n*ENGLISH*\n_YOU HAVE NOT REGISTERED ON THE BOTTOM OF I DECK, TYPE ${prefix}verify FOR RUQYAH_\n\n*INDONESIA*\n_LUH BELUM DAFTAR DI BOT GUA DEX, KETIK ${prefix}daftar UNTUK DI RUQYAH_`,
				dewasa: `─ 「 *WARNING* 」 ─\n\n*ENGLISH*\n_not allowed for minors, if you are an adult, please verify first, type ${prefix}my18_\n\n*INDONESIA*\n_dilarang untuk anak di bawah umur, jika Anda sudah dewasa, silahkan verifikasi terlebih dahulu, ketik ${prefix}saya18_`,
				kecil: `_luh masih kecil dek, mending main epep_`,
				wait: '_wait deck..._',
				banned: '_you have been blocked, contact the owner for ruqyah_',
				success: '_succeed, dont forget to subscribe_ : https://youtube.com/channel/UCB157jomCne961WzYHpG4gg',
				error: {
		        apikey: '_error, apikey is not defined:(_',
		        format: '_format error_',
			    stick: '_Failed, an error occurred while converting the image to a sticker_',
			    link: '*English*\n\n_what link did you send goblog: v_\n*indonesian*\n\n_Luh ngasih link apaan goblog:v_'
				},
				only: {
					group: '*THIS FEATURE CAN ONLY BE USED FOR GROUPS!!!*',
					premium: '*YOU IS NOT A PREMIUM USER, CHAT OWNER TO RUQYAH!!!*',
					ownerG: '*THIS FEATURE CAN ONLY BE USED BY THE OWNER GROUP!!!*',
					ownerB: '*THIS FEATURE CAN ONLY BE USED BY THE OWNER BOT!!!*',
					admin: '*THIS FEATURE CAN ONLY BE USED BY GROUP ADMINS!!! ️*',
					Badmin: '*THIS FEATURE CAN ONLY BE USED WHEN THE BOTS BECOME ADMIN!!!*'
				}
			}            
			const botNumber = Ramdani.user.jid
			const ownerNumber = settings.NomorOwner2
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const senderr = mek.key.fromMe ? Ramdani.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
			pushname = Ramdani.contacts[sender] != undefined ? Ramdani.contacts[sender].vname || Ramdani.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await Ramdani.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isRegist = cekRegist(sender)
			const isDewasa = cekDewasa(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
            const isAntivirus = isGroup ? antivirus.includes(from) : false
			const isOwner = ownerNumber.includes(senderr)
		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        //${jam} ${hari} ${tanggal} ${bulan} ${tahun}
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        //${jam} ${timeWib}
        const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
			Ramdani.sendMessage(from, teks, text, { thumbnail: thumb, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `New Base By Ramdani Official`,body:"© Creator By Ramdani Official",previewType:"PHOTO",thumbnail:thumb,sourceUrl:`https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`}}})
		}
		const reply2 = (teks) => {
Ramdani.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
const freply = (teks) => {
Ramdani.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${ucapanWaktu}`,
                "body": `${faketroli}`,
                "mediaType": "10",
                "mediaUrl": `https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`,
                "thumbnailUrl": "https://youtube.com/channel/UCB157jomCne961WzYHpG4gg",
                "thumbnail": fakeimage,
                "sourceUrl": `https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`,
},mentionedJid:[sender]}, quoted : mek})
};
			const sendMess = (hehe, teks) => {
				Ramdani.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Ramdani.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Ramdani.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				freply(` *「 GROUP LINK DETECTOR 」*\nKamu terdeteksi mengimkan link group, maaf saya harus ngeluarin anda :(`)
				setTimeout(() => {
				Ramdani.groupRemove(from, [kic]).catch((e) => { freply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			   }
			            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}`; break;
            }
            var ucapanFakereply = "" + waktoonyabro;
           
//FAKE TROLI

           const fakedoc = {key: {fromMe: false, participant: `${nomorowner}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanFakereply}`, pageCount: 0, fileName: `RamdaniBot`, jpegThumbnail: fs.readFileSync(`./media/foto/thumb.jpg`)}}}
			const ftoko = { key: { fromMe: false, 
			             participant: `0@s.whatsapp.net`, ...(from ? { 
			             remoteJid: 'status@broadcast' } : {}) }, 
			             message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./media/foto/thumb.jpg') }, 'title': `${namabot}\nRp. 10.000`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
    const ftrol = {key : {fromMe:false, 
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `New Base By Ramdani Official \nRp. 999.999.999`, 
                            orderTitle: `© Creator By Ramdani Official`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const fhidetag = {key : {fromMe:false, 
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `New Base By Ramdani Official`, 
                            orderTitle: `© Creator By Ramdani Official`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const ftrolMENU = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: { 
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `New Base By Ramdani Official`, 
                            orderTitle: `© Creator By Ramdani Official`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
			const fakeitem = (teks) => {
           Ramdani.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false, 
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"0-1604595598@g.us" }: {})
                           },message:{"orderMessage":{
                                  "orderId":"4302154426574187",
                                  "thumbnail":fs.readFileSync("./media/foto/thumb.jpg"),
                                  "itemCount":999999999,
                                  "status":"INQUIRY",
                                  "surface":"CATALOG",
                                  "message": `${namabot}\nRp. 999.999.999.999`,
                                  "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}


	Ramdani.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Ramdani.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                              


    const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await Ramdani.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    Ramdani.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: mek})
  }
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Ramdani.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  
      
      const sendButVideo = async (id, text1, desc1, gam1, but = [], options = {} ) => {
      kma = gam1;
      mhan = await Ramdani.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {quoted: mek})
    };
        
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               Ramdani.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
      
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Ramdani.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
    
    const sendKontak = (from, nomor, nama, org, Ponsel, descBiz = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
        let nano = `Berikut Adalah Nomor Developer Saya, Silahkan Chat/Simpan Nomor Developer Saya.\n\n*NB: Dilarang Chat Yang Tidak Berkepentingan.*`
      Ramdani.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek, caption: nano}
      );
    }; 
    
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = Ramdani.contacts[from] != undefined ? Ramdani.contacts[from].vname || Ramdani.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 300, status: 200, thumbnail: fakeimage, surface: 200, message: fake, orderTitle: 'Ramdani Store', sellerJid: '0@s.whatsapp.net'} } }
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Bot'; if (!author) author = 'By RamdaniBot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/stickers/${name}.exif`)) return `./media/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./media/stickers/${name}.exif`, buffer, (err) => {	
					return `./media/stickers/${name}.exif`	
				})	
	          }
Ramdani.updatePresence(from, Presence.composing)
if (!public) {
if (!isOwner && !mek.key.fromMe) return
}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night🌃'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon🌉'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon🌆'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon🌇'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night🌃'
 }
const fdanz = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `© Creator By Ramdani Official`,
                 "title": `© Creator By Ramdani Official`,
                 'jpegThumbnail': fs.readFileSync("./media/foto/thumb.jpg"),
                        }
	                  } 
                     }
//Buat fake info bot
//DI UBAH YATIM
danzrun = process.uptime() 
           Ramdani.setStatus(`${namabot} Aktif Selama ${(danzrun)} © Creator By Ramdani Official`).catch((_)=>_); //DI UBAH YATIMM
          settingstatus = new Date() * 1;
const jmn = moment.tz('Asia/Jakarta').format('HH.mm')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
const fakeText = (teks) => {
Ramdani.sendMessage(from, teks, text, {quoted: fdanz})
}

switch(command) {
	            case 'verify':
	            case 'daftar':
	            if (isBanned) return freply(mess.banned)
				const serials = addSerial(20)
				try {
				ppimg = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://mekpa-result.herokuapp.com/bgverify.jpeg' //ubah sesuka kamu, bisa upload di imgbb.com
				veri = sender
				fs.writeFileSync('./database/registered.json', JSON.stringify(_regist))
				addRegist(sender, serials)
				const ramdaniganteng = 
`
─── 「 *REGISTERED SUCCESS* 」───
• NAMA : ${pushname}
• NOMOR : ${sender.split('@')[0]}
• SERI : ${serials}
• TANGGAL : ${Tanggal}
• PUKUL : ${jam}
`
                let buff = await getBuffer(`${ppimg}`)
                Ramdani.sendMessage(from, buff, MessageType.image, {quoted: mek, caption: ramdaniganteng, contextInfo: {'mentionedJid': [sender]}})
                break
//DEWASA
    case 'saya18':
	case 'my18':
	if (!isRegist) return freply(mess.daftar)
    if (isBanned) return freply(mess.banned)
				const serimek = addSerimek(20)
				try {
				ppimg = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://mekpa-result.herokuapp.com/bgverify.jpeg'
				veri = sender
				fs.writeFileSync('./database/dewasa.json', JSON.stringify(_dewasa))
				addDewasa(sender, serimek)
				const ramdanigans = 
`
─── 「 *VERIFY SUCCESS* 」───
• NAMA : ${pushname}
• NOMOR : ${sender.split('@')[0]}
• SERI : ${serimek}
• USIA : 18 tahun
• TANGGAL : ${Tanggal}
• PUKUL : ${jam}
`
                let buffmek = await getBuffer(`${ppimg}`)
                Ramdani.sendMessage(from, buffmek, MessageType.image, {quoted: mek, caption: ramdanigans, contextInfo: {'mentionedJid': [sender]}})
                break
//BOCIL
case 'my11':
case 'my12':
case 'my13':
case 'my14':
case 'my15':
case 'my16':
case 'my17':
//
case 'saya11':
case 'saya12':
case 'saya13':
case 'saya14':
case 'saya15':
case 'saya16':
case 'saya17':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*SKIP LU MASIH BOCIL, MENDING MAIN EP EP:V*`)
break
//MENU
case 'menu':
case 'help':
case 'h':
case 'm':
case 'danz':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(mess.wait)
teks = `*Hallo Kak @${sender.split('@')[0]}👋 ${ucapanWaktu}*
*Jangan Lupa Kunjungi Sosmet Gue Ya*`
img = fs.readFileSync('./media/foto/menu.jpg')
danz = `
• *SOSMED*
ᴍʏ ɢɪᴛʜᴜʙ : ${Github}
ᴍʏ ʜᴇʀᴏᴋᴜ : ${Heroku}
ᴍʏ ᴡᴇʙ : ${Website}
ᴍʏ ʏᴏᴜᴛᴜʙᴇ : ${Yt}
ᴍʏ ɪɴsᴛᴀɢʀᴀᴍ : ${Ig}
ᴍʏ ᴛᴡɪᴛᴛᴇʀ : ${Twitter}
ᴍʏ ғᴀᴄᴇʙᴏᴏᴋ : ${Fb}

• *DONATE*
ɢᴏᴘᴀʏ : ${gopay}
ᴅᴀɴᴀ : ${dana}
ᴏᴠᴏ : ${ovo}
ᴘᴜʟsᴀ : ${pulsa}
ǫʀɪs : ${qris}
sᴀᴡᴇʀɪᴀ : ${saweria}
ʟɪɴᴋᴛʀᴇ : ${linktree}
${fakemenu}`
but = [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'allmenu' }, type: 1 },{ buttonId: `${prefix}c`, buttonText: { displayText: 'select menu' }, type: 1 },{ buttonId: `${prefix}rules`, buttonText: { displayText: 'rules' }, type: 1 }]
soundmenu = fs.readFileSync('./media/audio/menu.mp3')
Ramdani.sendMessage(from, soundmenu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
sendButImage(from, teks, danz, img, but, {quoted: ftrol})
break
//ALLMENU
case 'allmenu':
case 'allfitur':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(mess.wait)
teks = `*hallo kak @${sender.split('@')[0]}👋 ${ucapanWaktu}*
notes : Jangan spam ya kak, kasih jeda 5 detik agar bot tidak delay, okeh kak?

*⌜ Grup Menu ⌟* 
• ${prefix}welcome <1/0>
• ${prefix}antilink <1/0>
• ${prefix}group <1/0>
• ${prefix}simi <1/0>
• ${prefix}kick <@user>
• ${prefix}kickall <no banned>
• ${prefix}hedsot <@user>
• ${prefix}reportbug
• ${prefix}request
• ${prefix}here
• ${prefix}setdesk
• ${prefix}setnamegc
• ${prefix}setppgrup
• ${prefix}promote
• ${prefix}demote
• ${prefix}promoteall
• ${prefix}demoteall
• ${prefix}notif
• ${prefix}listadmin
• ${prefix}listonline
• ${prefix}linkgrup

*⌜ Asupan Menu ⌟* 
• ${prefix}bocil
• ${prefix}santuy
• ${prefix}hijaber
• ${prefix}ukhty
• ${prefix}cecan
• ${prefix}asupan
• ${prefix}bunga
• ${prefix}ayu
• ${prefix}caca
• ${prefix}yubi
• ${prefix}aura
• ${prefix}delvira

*⌜ Maker Menu ⌟* 
• ${prefix}blackpink <text>
• ${prefix}halloween <text>
• ${prefix}3dgradient <text>
• ${prefix}naturalleaves <text>
• ${prefix}dropwater <text>
• ${prefix}blood <text>
• ${prefix}blood2 <text>
• ${prefix}neondevil <text>
• ${prefix}neon <text>
• ${prefix}neonlight <text>
• ${prefix}neonlight2 <text>
• ${prefix}neonlight3 <text>
• ${prefix}greenneon <text>
• ${prefix}toxic <text>
• ${prefix}matrix <text>
• ${prefix}thunder <text>
• ${prefix}thunder2 <text>
• ${prefix}bokeh <text>
• ${prefix}carbontext <text>
• ${prefix}christmas <text>
• ${prefix}breakwall <text>
• ${prefix}roadwarning <text>
• ${prefix}engraved3d <text>
• ${prefix}embossed <text>
• ${prefix}writefoggy <text>
• ${prefix}3dstone <text>
• ${prefix}futuristic <text>
• ${prefix}asketch <text>
• ${prefix}bluecircuit <text>
• ${prefix}space <text>
• ${prefix}amagmahot <text>
• ${prefix}artpapercut <text>
• ${prefix}3dluxurygold <text>
• ${prefix}robotr2d2 <text>
• ${prefix}harrypotter <text>
• ${prefix}glitch3 <text>
• ${prefix}greenhorrorstyle <text>
• ${prefix}3ddeepseametal <text>
• ${prefix}leddisplayscreen <text>
• ${prefix}wonderfulgraffitiart <text>
• ${prefix}8bit <text1&text2>
• ${prefix}pornhub <text1&text2>
• ${prefix}glitch <text1&text2>
• ${prefix}glitch2 <text1&text2>
• ${prefix}layered <text1&text2>
• ${prefix}3dsteel <text1&text2>
• ${prefix}realistic <text1&text2>
• ${prefix}lionlogo <text1&text2>
• ${prefix}ninjalogo <text1&text2>
• ${prefix}wolf <text1&text2>
• ${prefix}wolf2 <text1&text2>
• ${prefix}halloween2 <text1&text2>
• ${prefix}marvel <text1&text2>
• ${prefix}marvel2 <text1&text2>
• ${prefix}cinematichorror <text1&text2>
• ${prefix}avengers <text1&text2>
• ${prefix}graffiti3 <text1&text2>
• ${prefix}captainamerica <text1&text2>
• ${prefix}girlneko <text1&text2>
• ${prefix}sadboy <text1&text2>
• ${prefix}kaneki <text1&text2>
• ${prefix}rem <text1&text2>
• ${prefix}lolimaker <text1&text2>
• ${prefix}gura <text1&text2>

*⌜ Game Menu ⌟* 
• ${prefix}truth
• ${prefix}dare  
• ${prefix}slot
• ${prefix}suit
• ${prefix}gelud
• ${prefix}tebakkata
• ${prefix}tebakkimia
• ${prefix}tebaklirik
• ${prefix}tebakbendera
• ${prefix}tebakgambar
• ${prefix}tebakanime
• ${prefix}math
• ${prefix}siapaaku
• ${prefix}tictactoe
• ${prefix}family100
• ${prefix}caklontong

*⌜ Anime Menu ⌟* 
• ${prefix}ppcouple
• ${prefix}uniform
• ${prefix}cuckold
• ${prefix}zettairyouiki
• ${prefix}sfwneko
• ${prefix}sao
• ${prefix}cosplay
• ${prefix}milf
• ${prefix}loli
• ${prefix}lovelive
• ${prefix}hsdxd
• ${prefix}husbu
• ${prefix}wallml
• ${prefix}waifu

*⌜ Hewan Menu ⌟* 
• ${prefix}fox
• ${prefix}dog
• ${prefix}cat
• ${prefix}panda
• ${prefix}panda1
• ${prefix}bird
• ${prefix}koala

*⌜ Hentai Menu ⌟* 
• ${prefix}art
• ${prefix}bts
• ${prefix}exo
• ${prefix}elf
• ${prefix}loli
• ${prefix}neko
• ${prefix}waifu
• ${prefix}shota
• ${prefix}husbu
• ${prefix}sagiri
• ${prefix}shinobu
• ${prefix}megumin
• ${prefix}wallnime
• ${prefix}chiisaihentai
• ${prefix}trap
• ${prefix}blowjob
• ${prefix}yaoi
• ${prefix}ecchi
• ${prefix}hentai
• ${prefix}ahegao
• ${prefix}hololewd
• ${prefix}sideoppai
• ${prefix}animefeets
• ${prefix}animebooty
• ${prefix}animethighss
• ${prefix}hentaiparadise
• ${prefix}animearmpits
• ${prefix}hentaifemdom
• ${prefix}lewdanimegirls
• ${prefix}biganimetiddies
• ${prefix}animebellybutton
• ${prefix}hentai4everyone
• ${prefix}bj
• ${prefix}ero
• ${prefix}cum
• ${prefix}feet
• ${prefix}yuri
• ${prefix}trap
• ${prefix}lewd
• ${prefix}feed
• ${prefix}eron
• ${prefix}solo
• ${prefix}gasm
• ${prefix}poke
• ${prefix}anal
• ${prefix}holo
• ${prefix}tits
• ${prefix}kuni
• ${prefix}kiss
• ${prefix}erok
• ${prefix}smug
• ${prefix}baka
• ${prefix}solog
• ${prefix}feetg
• ${prefix}lewdk
• ${prefix}waifu
• ${prefix}pussy
• ${prefix}femdom
• ${prefix}cuddle
• ${prefix}hentai
• ${prefix}eroyuri
• ${prefix}cum_jpg
• ${prefix}blowjob
• ${prefix}erofeet
• ${prefix}holoero
• ${prefix}classic
• ${prefix}erokemo
• ${prefix}fox_girl
• ${prefix}futanari
• ${prefix}lewdkemo
• ${prefix}wallpaper
• ${prefix}pussy_jpg
• ${prefix}kemonomimi
• ${prefix}nsfw_avatar
• ${prefix}ngif
• ${prefix}nsfw_neko_gif
• ${prefix}random_hentai_gif

*⌜ 18+ Menu ⌟* 
• ${prefix}bokep <text>
• ${prefix}xnxx <text>
• ${prefix}4everproxy <search>
• ${prefix}vpn

*⌜ Islam Menu ⌟* 
• ${prefix}listsurah
• ${prefix}asmaulhusna
• ${prefix}alquran 
• ${prefix}alquran 
• ${prefix}alquran 
• ${prefix}alquranaudio 
• ${prefix}alquranaudio 
• ${prefix}kisahnabi 
• ${prefix}jadwalsholat 

*⌜ Download Menu ⌟* 
• ${prefix}play <judul lagu>
• ${prefix}ytmp3 <judul/link>
• ${prefix}ytmp4 <judul/link>
• ${prefix}shortlink <link>
• ${prefix}mediafire <link>
• ${prefix}playstore <nama apk>
• ${prefix}appsstore <nama apl>
• ${prefix}y2mate <link>
• ${prefix}tiktok <judul>
• ${prefix}tiktokmusic <link>
• ${prefix}tiktoknowm <link>
• ${prefix}tiktokwm <link>
• ${prefix}igvideo <link>
• ${prefix}igfoto <link>
• ${prefix}ktp <isi dengan lengkap>
• ${prefix}pinterest <text>
• ${prefix}lirik <text>
• ${prefix}herolist <text>
• ${prefix}herodetail <nama hero>

*⌜ Serti Menu ⌟* 
• ${prefix}serti1 <text>
• ${prefix}serti2 <text>
• ${prefix}serti3 <text>
• ${prefix}serti4 <text>
• ${prefix}serti5 <text>
• ${prefix}serti6 <text>
• ${prefix}serti7 <text>
• ${prefix}serti8 <text>
• ${prefix}serti9 <text>
• ${prefix}serti10 <text>

*⌜ Hiburan Menu ⌟* 
• ${prefix}namaninja
• ${prefix}pantun
• ${prefix}katasindiran
• ${prefix}katailham
• ${prefix}tongue
• ${prefix}nickepep

*⌜ Sticker Menu ⌟* 
• ${prefix}sticker <reply image>
• ${prefix}ttp <text>
• ${prefix}attp <text>
• ${prefix}attp2 <text>
• ${prefix}attp3 <text>
• ${prefix}attp4 <text>
• ${prefix}attp5 <text>
• ${prefix}amongus <text>
• ${prefix}patrick <text>
• ${prefix}toimg <reply sticker>

*⌜ Kode Menu ⌟*
• ${prefix}tts <kode negara> <text>
• ${prefix}kodenegara <text>
• ${prefix}kodebahasa <text>

*⌜ Tools Menu ⌟*
• ${prefix}wame
• ${prefix}ssweb
• ${prefix}ssurl
• ${prefix}sslink
• ${prefix}encimg
• ${prefix}encfoto
• ${prefix}addvn
• ${prefix}listvn
• ${prefix}getvn
• ${prefix}addimg
• ${prefix}listimg
• ${prefix}getimg
• ${prefix}addvid
• ${prefix}listvid
• ${prefix}getvid
• ${prefix}addstik
• ${prefix}liststik
• ${prefix}getstik
• ${prefix}tupai

*⌜ Owner Menu ⌟* 
• ${prefix}broadcast <text>
• ${prefix}broadcast2 <text>
• ${prefix}broadcastvideo <text>
• ${prefix}bcvideo <text>
• ${prefix}bc <text>
• ${prefix}bc2 <text>
• ${prefix}bc3 <text>
• ${prefix}bc4 <text>
• ${prefix}bc5 <text>
• ${prefix}delete <reply message>
• ${prefix}ban <target>
• ${prefix}unban <target>
• ${prefix}block <user>
• ${prefix}unblock <user>
• ${prefix}settppbot <image>
• ${prefix}leaveall (keluar semua grup)
• ${prefix}join <link grup>
• ${prefix}join2 <link grup>
• ${prefix}public
• ${prefix}self
• ${prefix}clearall
• ${prefix}restart
• ${prefix}addcmd
• ${prefix}delcmd
• ${prefix}listcmd
• ${prefix}exif`
img = fs.readFileSync('./media/foto/menu.jpg')
ramdanimastah = `${fakemenu}`
but = [{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sewa bot' }, type: 1 },{ buttonId: `${prefix}infobot`, buttonText: { displayText: 'info bot' }, type: 1 }]
soundmenu = fs.readFileSync('./media/audio/allmenu.mp3')
Ramdani.sendMessage(from, soundmenu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
sendButImage(from, teks, ramdanimastah, img, but, {quoted: ftrol})
break
//SELECT MENU
case 'c':
case 'selectmenu':
case 'simplemenu':
case 'simpelmenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
 listMsg = {
 buttonText: 'Click Here',
 footerText: `${fakemenu}`,
 description: `Hai Kak @${sender.split('@')[0]}👋 ${ucapanWaktu}, Silahkan Pilih Menunya Disini\nJangan Spam Ya Kak, Kasih Jeda 5 Detik!!!`,
 sections: [
                     {
                      "title": `Jangan Lupa Donasi Ya Tod`,
 rows: [
                           {                         
                               "title": "[❤️]Thanks to",
                               "description" :"Menampilkan Thanks To",
                               "rowId": `${prefix}tqto`
                            },
                            {                         
                               "title": "[📝]Rules",
                               "description" :"Menampilkan Rules Bot",
                               "rowId": `${prefix}rules`
                            },
                            {                         
                               "title": "[📃]Info Bot",
                               "description" :"Menampilkan Info Bot",
                               "rowId": `${prefix}infobot`
                            },
                            {                         
                               "title": "[🗂️]Script",
                               "description" :"Menampilkan Script Bot",
                               "rowId": `${prefix}script`
                            },
                            {                         
                               "title": "[🤖]Jadi Bot",
                               "description" :"Menampilkan Jadi Bot",
                               "rowId": `${prefix}jadibot`
                            },
                            {                         
                               "title": "[👤]Owner",
                               "description" :"Menampilkan Owner Bot",
                               "rowId": `${prefix}owner`
                            },
                            {                         
                               "title": "[👩‍💻]Developer",
                               "description" :"Menampilkan Developer Bot",
                               "rowId": `${prefix}developer`
                            },
                            {                         
                               "title": "[👥]Group Bot",
                               "description" :"Menampilkan Group Bot",
                               "rowId": `${prefix}groupbot`
                            },
                            {                         
                               "title": "[📒]Allmenu",
                               "description" :"Menampilkan Fitur Allmenu",
                               "rowId": `${prefix}allmenu`
                            },
                            {                         
                               "title": "[🛒]Store Menu",
                               "description" :"Menampilkan Fitur Store Menu",
                               "rowId": `${prefix}storemenu`
                            },
                            {                         
                               "title": "[🤍]Asupan Menu",
                               "description" :"Menampilkan Fitur",
                               "rowId": `${prefix}asupanmenu`
                            },
                            {                         
                               "title": "[👥]Group Menu",
                               "description" :"Menampilkan Fitur",
                               "rowId": `${prefix}groupmenu`
                            },
                            {                         
                              "title": "[🖨️]Maker Menu",
                              "description" :"Menampilkan Fitur Menu Maker",
                              "rowId": `${prefix}makermenu`
                           },
                           {                         
                              "title": "[🉐]Anime Menu",
                              "description" :"Menampilkan Fitur Menu Anime",
                              "rowId": `${prefix}animemenu`
                           },
                           {                         
                              "title": "[🎮]Game Menu",
                              "description" :"Menampilkan Fitur Menu Game",
                              "rowId": `${prefix}gamemenu`
                           },
                           {                         
                              "title": "[👳]Islam Menu",
                              "description" :"Menampilkan Fitur Menu Islam",
                              "rowId": `${prefix}islammenu`
                           },
                           {                         
                              "title": "[🦊]Hewan Menu",
                              "description" :"Menampilkan Fitur Menu Hewan",
                              "rowId": `${prefix}hewanmenu`
                           },
                           {                         
                              "title": "[🈵]Hentai Menu",
                              "description" :"Menampilkan Fitur Menu Hentai",
                              "rowId": `${prefix}hentaimenu`
                           },
                           {                         
                              "title": "[🔞]18+ Menu",
                              "description" :"Menampilkan Fitur Menu 18+",
                              "rowId": `${prefix}18+menu`
                           },
                           {                         
                              "title": "[📥]Download Menu",
                              "description" :"Menampilkan Fitur Menu Download",
                              "rowId": `${prefix}downloadmenu`
                           },
                           {                         
                              "title": "[👩‍💻]Owner Menu",
                              "description" :"Menampilkan Fitur Menu Owner",
                              "rowId": `${prefix}ownermenu`
                           },
                           {                         
                              "title": "[🤡]Hiburan Menu",
                              "description" :"Menampilkan Fitur Menu Hiburan",
                              "rowId": `${prefix}hiburanmenu`
                           },
                           {                         
                              "title": "[🗿]Sticker Menu",
                              "description" :"Menampilkan Fitur Menu Sticker",
                              "rowId": `${prefix}stickermenu`
                           },
                           {                         
                              "title": "[#️⃣]Kode Menu",
                              "description" :"Menampilkan Fitur Menu Kode",
                              "rowId": `${prefix}kodemenu`
                           },                           
                           {                         
                              "title": "[⚒️]Tools Menu",
                              "description" :"Menampilkan Fitur Menu Tools",
                              "rowId": `${prefix}toolsmenu`
                            },                            
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
//STORE MENU
case 'store menu':
case 'storemenu':
case 'sm':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
 listMsg = {
 buttonText: 'Click Here',
 footerText: `${fakemenu}`,
 description: `Hai kak @${sender.split('@')[0]}👋 ${ucapanWaktu},, Silahkan pilih Command nya disini`,
 sections: [
                     {
                      "title": `Jangan Lupa Donasi Ya Tod`,
 rows: [
                           {                         
                               "title": "TOP UP GAME",
                               "description" :"",
                               "rowId": `${prefix}topupgame`
                            },
                            {                         
                               "title": "TOP UP SALDO",
                               "description" :"",
                               "rowId": `${prefix}topupsaldo`
                            },
                            {                         
                               "title": "BELI SCRIPT BOT",
                               "description" :"",
                               "rowId": `${prefix}beliscript`
                            },
                            {                         
                               "title": "BELI PREMIUM",
                               "description" :"",
                               "rowId": `${prefix}belipremium`
                            },
                            {                         
                               "title": "JASA RUN HEROKU",
                               "description" :"",
                               "rowId": `${prefix}jasarun`
                            },
                            {                         
                               "title": "JASA UP GITHUB",
                               "description" :"",
                               "rowId": `${prefix}jasaup`
                            },
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
//TOP UP GAME
case 'topupgame':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
 listMsg = {
 buttonText: 'Click Here',
 footerText: `${fakemenu}`,
 description: `Hai kak @${sender.split('@')[0]}👋 ${ucapanWaktu}, Silahkan pilih Command nya disini`,
 sections: [
                     {
                      "title": `Jangan Lupa Donasi Ya Tod`,
 rows: [
                           {                         
                               "title": "FREE FIRE",
                               "description" :"",
                               "rowId": `${prefix}topupff`
                            },
                            {                         
                               "title": "MOBILE LEGENDS",
                               "description" :"",
                               "rowId": `${prefix}topupml`
                            },
                            {                         
                               "title": "PUBG",
                               "description" :"",
                               "rowId": `${prefix}topuppubg`
                            },
                            {                         
                               "title": "POINT BLANK",
                               "description" :"",
                               "rowId": `${prefix}topuppb`
                            },
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
//TOPUP SALDO
case 'topupsaldo':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
 listMsg = {
 buttonText: 'Click Here',
 footerText: `${fakemenu}`,
 description: `Hai kak @${sender.split('@')[0]}👋 ${ucapanWaktu}, Silahkan pilih Command nya disini`,
 sections: [
                     {
                      "title": `Jangan Lupa Donasi Ya Tod`,
 rows: [
                           {                         
                               "title": "GOPAY",
                               "description" :"",
                               "rowId": `${prefix}topupgopay`
                            },
                            {                         
                               "title": "DANA",
                               "description" :"",
                               "rowId": `${prefix}topupdana`
                            },
                            {                         
                               "title": "OVO",
                               "description" :"",
                               "rowId": `${prefix}topupovo`
                            },
                            {                         
                               "title": "PULSA",
                               "description" :"",
                               "rowId": `${prefix}topuppulsa`
                            },
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
//CASE NYA
case 'donasi':
case 'donate':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`HALLO KAK, MAU DONASI?
• *PAYMENT*
*Gopay:* ${gopay}
*Dana:* ${dana}
*Ovo:* ${ovo}
*Pulsa:* ${pulsa}
*Qris:* ${qris}
*Saweria:* ${saweria}
*Linktree:* ${linktree}`)
break
case 'sewabot':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`━━━━━『 *LIST SEWA BOT* 』━━━━━

❏ PERHARI : 1 HARI 2K, 5 HARI 10K 
❏ PERMINGGU : 1MIN. 14K, 2MIN. 28K, 3MIN. 60K,
❏ PERBULAN : 1B. 30K, 2B. 70K, 3B. 140K,
❏ PERTAHUN : 1THN. 350K, 2THN. 700K,
❏ PERMANEN : TIMDAK TERSEDIA!
*minat chat owner*`)
break
case 'belipremium':
case 'buypremium':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`━━━━━『 *LIST PREMIUM* 』━━━━━

❏ PERHARI : 2H. 1K, 5H. 4K, 7H 6K,
❏ PERMINGGU : 1MIN. 6K, 2MIN. 10K, 3MIN. 15K,
❏ PERBULAN : 1B. 18K, 2B. 28K, 3B. 38K,
❏ PERTAHUN : 1THN. 100K
❏ PERMANEN : 150K
*minat chat owner*`)
break
//JADIBOT
case 'jadibot':
case 'jadibotwa':
case 'carajadibot':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*Jika ingin menjadi bot silahkan kunjungi channel YouTube Ramdani Official*\n*link* : https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`)
break
//SOSMET
//YOUTUBE
case 'youtube':
case 'ytb':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*nih channel youtube owner ku, jan lupa subscribe ya*\n${Yt}`)
break
//INSTAGRAM
case 'intagram':
case 'ig':
case 'ige':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*nih Instagram owner ku, jan lupa follow ya*\n${Ig}`)
break
//OWNER/CREATOR
//OWNER
case 'owner':
case 'ownerbot': 
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${nomorowner}:+${nomorowner}\n`  
            + 'END:VCARD'  
  Ramdani.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
  titid = 'Hallo kak, itu owner ku, jangan di ganggu ya\nbtw mau tau soal apa tentang owner ku?'
           sendButMessage(from, titid, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}ytb`, buttonText: { displayText: `YOUTUBE`, }, type: 1, },
          {buttonId: `${prefix}ig`, buttonText: { displayText: `INSTAGRAM`, }, type: 1, },
]); 
            break
            case 'creator'://DI UBAH YATIM
            case 'developer'://GAUSAH DI UBAH MEMEK
            if (!isRegist) return freply(mess.daftar)
            if (isBanned) return freply(mess.banned)
               sendKontak(from, `6289512545999`, `Ramdani Official`, 'Sibukk!!') //DI UBAH YATIM
               await sleep(1000)
               txtt =`*Hai Kak* ${pushname}\nItu Ownerku, Mau Ngpain Yaa?`

               buttons = [{buttonId: '${prefix}ytb',buttonText:{displayText: 'yσυтυвє'},type:1},{buttonId:'${prefix}ig',buttonText:{displayText:'ıηsтαgяαм'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Jangan Ganggu Owner Ku🗿',
               buttons: buttons,
               headerType: 1
}

               prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{})
               Ramdani.relayWAMessage(prep)
               break
//THANKS TO
case 'thanksto': //DI HAPUS? KETAHUAN AWAS LUH GUA GABAKAL NGEBOT LAGI
case 'tqto':
case 'tqtq':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`• *BIG THANKS TO*
• RAMDANI OFFICIAL (ME)
• ARUL (MY GURU)
• MHANKBARBAR (MASTAH)
• APRILIA
• ZEEONE OFC
• DIKA ARDNT
• RIMURUBOTZ
• KAHFZXZY
• LEXXY OFFICIAL
• HERMAN CHANNEL
• ABIL BOT
• KURR XD OFFICIAL
• DIKA XD
• SIEGRIN
• KANNABOT
• YANZ BOT`)
break
//FITUR NYAAH BANGGG

//JANGAN DI HAPUS INI NYA ANJING, KETAHUAN AWAS LUH BANG
//KASIH CREDITS LAH KONCOL, CAPEK GUA CODING
//BIKIN SC NIH 1 MINGGU LEBIH ASU GAK DI KASIH CREDITS BABI
case 'script':
case 'script ori':
case 'sc':
case 'sc ori':
function _0xa39c(_0x55373c,_0x4f554b){var _0x6f350f=_0x6f35();return _0xa39c=function(_0xa39c38,_0x38fbeb){_0xa39c38=_0xa39c38-0x193;var _0x1c1ff0=_0x6f350f[_0xa39c38];return _0x1c1ff0;},_0xa39c(_0x55373c,_0x4f554b);}var _0x98b2d6=_0xa39c;(function(_0x3c89fb,_0x3c0da8){var _0x146795=_0xa39c,_0x15f157=_0x3c89fb();while(!![]){try{var _0x376827=parseInt(_0x146795(0x197))/0x1+-parseInt(_0x146795(0x196))/0x2+parseInt(_0x146795(0x193))/0x3*(-parseInt(_0x146795(0x19d))/0x4)+parseInt(_0x146795(0x199))/0x5*(-parseInt(_0x146795(0x19a))/0x6)+parseInt(_0x146795(0x195))/0x7+-parseInt(_0x146795(0x198))/0x8*(parseInt(_0x146795(0x19c))/0x9)+parseInt(_0x146795(0x194))/0xa;if(_0x376827===_0x3c0da8)break;else _0x15f157['push'](_0x15f157['shift']());}catch(_0x4fb779){_0x15f157['push'](_0x15f157['shift']());}}}(_0x6f35,0xd7373),freply(_0x98b2d6(0x19b)));function _0x6f35(){var _0xd7c541=['1628812jeDVJA','11978376xbAUoh','1549025vKiqSi','6NFQNcJ','_*SRIPT\x20ORI\x20BY\x20RAMDANI\x20OFFICIAL*_\x0a•\x20*LINK*\x0a•\x20*GITHUB*\x20:\x20https://github.com/Ramdaniofficial/v16\x0a•\x20*YOUTUBE*\x20:\x20https://youtube.com/channel/UCB157jomCne961WzYHpG4gg','9EUOBqv','1711868cgIpPU','3fsRXCB','14268290YorAQW','6636119fcFvXR','1774132seWGmo'];_0x6f35=function(){return _0xd7c541;};return _0x6f35();}
break
//BELI SCRIPT
case 'beliscript':
case 'belisc':
case 'buysc':
case 'buyscript':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, beliscript(prefix, nomorowner), text)
break
//STORE MENU//
//TOP UP GAME
case 'topupgame':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupgame(prefix), text)
break
case 'topupfreefire':
case 'topupff':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupfreefire(prefix, nomorowner), text)
break
case 'topupmobilelegends':
case 'topupml':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupmobilelegends(prefix, nomorowner), text)
break
case 'topuppubg':
case 'topuppapji':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topuppubg(prefix, nomorowner), text)
break
case 'topuppointblank':
case 'topuppb':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topuppointblank(prefix, nomorowner), text)
break
//TOP UP SALDO
case 'topupsaldo':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupsaldo(prefix), text)
break
case 'topupgopay':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupgopay(prefix, nomorowner), text)
break
case 'topupdana':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupdana(prefix, nomorowner), text)
break
case 'topupovo':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupovo(prefix, nomorowner), text)
break
case 'topuppulsa':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topuppulsa(prefix, nomorowner), text)
break
//REPLY
case 'bebantot':
freply(`_awoakwok_`)
break
case 'berkat':
freply(`_anjing cuma mau berkatnya:v_`)
break      
case 'grupbot':
case 'groupbot':
case 'gcbot':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, grupbot(prefix), text)
break
//INFO BOT
case 'rules':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, rules(prefix, namabot, namaowner), text)
break
case 'infobot':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, infobot(prefix, namabot, nomorbot, namaowner, nomorowner), text)
break               
case 'donasi2':
case 'donate2':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, donasi(prefix, namabot, namaowner), text)
break
case 'iklan':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, iklan(prefix, namabot, namaowner), text)
break
case 'rules':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, rules(prefix, namabot, namaowner), text)
break
//COMMAND
case 'groupmenu':
case 'grupmenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ Group Menu ⌟* 
• ${prefix}welcome <1/0>
• ${prefix}antilink <1/0>
• ${prefix}antivirus <1/0>
• ${prefix}group <1/0>
• ${prefix}simi <1/0>
• ${prefix}kick <@user>
• ${prefix}kickall
• ${prefix}hedsot <@user>
• ${prefix}reportbug
• ${prefix}request
• ${prefix}here
• ${prefix}setdesk
• ${prefix}setnamegc
• ${prefix}setppgrup
• ${prefix}promote
• ${prefix}demote
• ${prefix}promoteall
• ${prefix}demoteall
• ${prefix}notif
• ${prefix}listadmin
• ${prefix}listonline
• ${prefix}linkgrup`)
break

case 'asupanmenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ Asupan Menu ⌟*
• ${prefix}bocil
• ${prefix}santuy
• ${prefix}hijaber
• ${prefix}ukhty
• ${prefix}cecan
• ${prefix}asupan
• ${prefix}bunga
• ${prefix}ayu
• ${prefix}caca
• ${prefix}yubi
• ${prefix}aura
• ${prefix}delvira`)
break

case 'makermenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ Maker Menu ⌟* 
• ${prefix}blackpink <text>
• ${prefix}halloween <text>
• ${prefix}3dgradient <text>
• ${prefix}naturalleaves <text>
• ${prefix}dropwater <text>
• ${prefix}blood <text>
• ${prefix}blood2 <text>
• ${prefix}neondevil <text>
• ${prefix}neon <text>
• ${prefix}neonlight <text>
• ${prefix}neonlight2 <text>
• ${prefix}neonlight3 <text>
• ${prefix}greenneon <text>
• ${prefix}toxic <text>
• ${prefix}matrix <text>
• ${prefix}thunder <text>
• ${prefix}thunder2 <text>
• ${prefix}bokeh <text>
• ${prefix}carbontext <text>
• ${prefix}christmas <text>
• ${prefix}breakwall <text>
• ${prefix}roadwarning <text>
• ${prefix}engraved3d <text>
• ${prefix}embossed <text>
• ${prefix}writefoggy <text>
• ${prefix}3dstone <text>
• ${prefix}futuristic <text>
• ${prefix}asketch <text>
• ${prefix}bluecircuit <text>
• ${prefix}space <text>
• ${prefix}amagmahot <text>
• ${prefix}artpapercut <text>
• ${prefix}3dluxurygold <text>
• ${prefix}robotr2d2 <text>
• ${prefix}harrypotter <text>
• ${prefix}glitch3 <text>
• ${prefix}greenhorrorstyle <text>
• ${prefix}3ddeepseametal <text>
• ${prefix}leddisplayscreen <text>
• ${prefix}wonderfulgraffitiart <text>
• ${prefix}8bit <text1&text2>
• ${prefix}pornhub <text1&text2>
• ${prefix}glitch <text1&text2>
• ${prefix}glitch2 <text1&text2>
• ${prefix}layered <text1&text2>
• ${prefix}3dsteel <text1&text2>
• ${prefix}realistic <text1&text2>
• ${prefix}lionlogo <text1&text2>
• ${prefix}ninjalogo <text1&text2>
• ${prefix}wolf <text1&text2>
• ${prefix}wolf2 <text1&text2>
• ${prefix}halloween2 <text1&text2>
• ${prefix}marvel <text1&text2>
• ${prefix}marvel2 <text1&text2>
• ${prefix}cinematichorror <text1&text2>
• ${prefix}avengers <text1&text2>
• ${prefix}graffiti3 <text1&text2>
• ${prefix}captainamerica <text1&text2>
• ${prefix}girlneko <text1&text2>
• ${prefix}sadboy <text1&text2>
• ${prefix}kaneki <text1&text2>
• ${prefix}rem <text1&text2>
• ${prefix}lolimaker <text1&text2>
• ${prefix}gura <text1&text2>`)
break

case 'gamemenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ Game Menu ⌟* 
• ${prefix}truth
• ${prefix}dare  
• ${prefix}slot
• ${prefix}suit
• ${prefix}gelud
• ${prefix}tebakkata
• ${prefix}tebakkimia
• ${prefix}tebaklirik
• ${prefix}tebakbendera
• ${prefix}tebakgambar
• ${prefix}tebakanime
• ${prefix}math
• ${prefix}siapaaku
• ${prefix}tictactoe
• ${prefix}family100
• ${prefix}caklontong`)
break

case 'animemenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ Anime Menu ⌟* 
• ${prefix}ppcouple
• ${prefix}uniform
• ${prefix}cuckold
• ${prefix}zettairyouiki
• ${prefix}sfwneko
• ${prefix}sao
• ${prefix}cosplay
• ${prefix}milf
• ${prefix}loli
• ${prefix}lovelive
• ${prefix}hsdxd
• ${prefix}husbu
• ${prefix}wallml
• ${prefix}waifu`)

case 'hewanmenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ Hewan Menu ⌟* 
• ${prefix}fox
• ${prefix}dog
• ${prefix}cat
• ${prefix}panda
• ${prefix}panda1
• ${prefix}bird
• ${prefix}koala`)
break

case 'hentaimenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ Hentai Menu ⌟* 
• ${prefix}art
• ${prefix}bts
• ${prefix}exo
• ${prefix}elf
• ${prefix}loli
• ${prefix}neko
• ${prefix}waifu
• ${prefix}shota
• ${prefix}husbu
• ${prefix}sagiri
• ${prefix}shinobu
• ${prefix}megumin
• ${prefix}wallnime
• ${prefix}chiisaihentai
• ${prefix}trap
• ${prefix}blowjob
• ${prefix}yaoi
• ${prefix}ecchi
• ${prefix}hentai
• ${prefix}ahegao
• ${prefix}hololewd
• ${prefix}sideoppai
• ${prefix}animefeets
• ${prefix}animebooty
• ${prefix}animethighss
• ${prefix}hentaiparadise
• ${prefix}animearmpits
• ${prefix}hentaifemdom
• ${prefix}lewdanimegirls
• ${prefix}biganimetiddies
• ${prefix}animebellybutton
• ${prefix}hentai4everyone
• ${prefix}bj
• ${prefix}ero
• ${prefix}cum
• ${prefix}feet
• ${prefix}yuri
• ${prefix}trap
• ${prefix}lewd
• ${prefix}feed
• ${prefix}eron
• ${prefix}solo
• ${prefix}gasm
• ${prefix}poke
• ${prefix}anal
• ${prefix}holo
• ${prefix}tits
• ${prefix}kuni
• ${prefix}kiss
• ${prefix}erok
• ${prefix}smug
• ${prefix}baka
• ${prefix}solog
• ${prefix}feetg
• ${prefix}lewdk
• ${prefix}waifu
• ${prefix}pussy
• ${prefix}femdom
• ${prefix}cuddle
• ${prefix}hentai
• ${prefix}eroyuri
• ${prefix}cum_jpg
• ${prefix}blowjob
• ${prefix}erofeet
• ${prefix}holoero
• ${prefix}classic
• ${prefix}erokemo
• ${prefix}fox_girl
• ${prefix}futanari
• ${prefix}lewdkemo
• ${prefix}wallpaper
• ${prefix}pussy_jpg
• ${prefix}kemonomimi
• ${prefix}nsfw_avatar
• ${prefix}ngif
• ${prefix}nsfw_neko_gif
• ${prefix}random_hentai_gif`)
break

case '18+menu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ 18+ Menu ⌟* 
• ${prefix}bokep <text>
• ${prefix}xnxx <text>
• ${prefix}4everproxy <search>
• ${prefix}vpn`)
break

case 'islammenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ Islam Menu ⌟* 
• ${prefix}listsurah
• ${prefix}asmaulhusna
• ${prefix}alquran 
• ${prefix}alquran 
• ${prefix}alquran 
• ${prefix}alquranaudio 
• ${prefix}alquranaudio 
• ${prefix}kisahnabi 
• ${prefix}jadwalsholat`)
break

case 'downloadmenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
repy(`*⌜ Download Menu ⌟* 
• ${prefix}play <judul lagu>
• ${prefix}ytmp3 <judul/link>
• ${prefix}ytmp4 <judul/link>
• ${prefix}shortlink <link>
• ${prefix}mediafire <link>
• ${prefix}playstore <nama apk>
• ${prefix}appsstore <nama apl>
• ${prefix}y2mate <link>
• ${prefix}tiktok <judul>
• ${prefix}tiktokmusic <link>
• ${prefix}tiktoknowm <link>
• ${prefix}tiktokwm <link>
• ${prefix}igvideo <link>
• ${prefix}igfoto <link>
• ${prefix}ktp <isi dengan lengkap>
• ${prefix}pinterest <text>
• ${prefix}lirik <text>
• ${prefix}herolist <text>
• ${prefix}herodetail <nama hero>`)
break

case 'sertimenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ Serti Menu ⌟* 
• ${prefix}serti1 <text>
• ${prefix}serti2 <text>
• ${prefix}serti3 <text>
• ${prefix}serti4 <text>
• ${prefix}serti5 <text>
• ${prefix}serti6 <text>
• ${prefix}serti7 <text>
• ${prefix}serti8 <text>
• ${prefix}serti9 <text>
• ${prefix}serti10 <text>`)
break

case 'hiburanmenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ Hiburan Menu ⌟* 
• ${prefix}namaninja
• ${prefix}pantun
• ${prefix}katasindiran
• ${prefix}katailham
• ${prefix}tongue
• ${prefix}nickepep`)
break

case 'stickermenu':
case 'stikermenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ Sticker Menu ⌟* 
• ${prefix}sticker <reply image>
• ${prefix}ttp <text>
• ${prefix}attp <text>
• ${prefix}attp2 <text>
• ${prefix}attp3 <text>
• ${prefix}attp4 <text>
• ${prefix}attp5 <text>
• ${prefix}amongus <text>
• ${prefix}patrick <text>
• ${prefix}toimg <reply sticker>`)
break

case 'codemenu':
case 'kodemenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ Kode Menu ⌟*
• ${prefix}tts <text>
• ${prefix}kodenegara <text>
• ${prefix}kodebahasa <text>`)
break

case 'toolsmenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ Tools Menu ⌟*
• ${prefix}wame
• ${prefix}ssweb
• ${prefix}ssurl
• ${prefix}sslink
• ${prefix}encimg
• ${prefix}encfoto
• ${prefix}addvn
• ${prefix}listvn
• ${prefix}getvn
• ${prefix}addimg
• ${prefix}listimg
• ${prefix}getimg
• ${prefix}addvid
• ${prefix}listvid
• ${prefix}getvid
• ${prefix}addstik
• ${prefix}liststik
• ${prefix}getstik
• ${prefix}tupai`)
break

case 'ownermenu':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(`*⌜ Owner Menu ⌟* 
• ${prefix}broadcast <text>
• ${prefix}broadcast2 <text>
• ${prefix}broadcastvideo <text>
• ${prefix}bcvideo <text>
• ${prefix}bc <text>
• ${prefix}bc2 <text>
• ${prefix}bc3 <text>
• ${prefix}bc4 <text>
• ${prefix}bc5 <text>
• ${prefix}delete <reply message>
• ${prefix}ban <target>
• ${prefix}unban <target>
• ${prefix}block <user>
• ${prefix}unblock <user>
• ${prefix}settppbot <image>
• ${prefix}leaveall (keluar semua grup)
• ${prefix}join <link grup>
• ${prefix}join2 <link grup>
• ${prefix}public
• ${prefix}self
• ${prefix}clearall
• ${prefix}restart
• ${prefix}addcmd
• ${prefix}delcmd
• ${prefix}listcmd
• ${prefix}exif`)
//ASUPAN MENU
              case 'cecan':
              if (!isRegist) return freply(mess.daftar)
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const cecan = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/asupan/cecan?apikey=${Ramdaniapi}`)
              buttons = [{buttonId: `${prefix}cecan`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(cecan, "videoMessage", { thumbnail: cecan, })).videoMessage
              buttonsMessage = {footerText:'© Creator By Ramdani Official', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
              case 'ukhty':
              if (!isRegist) return freply(mess.daftar)
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const ukhty = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/asupan/ukhty?apikey=${Ramdaniapi}`)
              buttons = [{buttonId: `${prefix}ukhty`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(ukhty, "videoMessage", { thumbnail: ukhty, })).videoMessage
              buttonsMessage = {footerText:'© Creator By Ramdani Official', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
              case 'santuy':
              if (!isRegist) return freply(mess.daftar)
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const santuy = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/asupan/santuy?apikey=${Ramdaniapi}`)
              buttons = [{buttonId: `${prefix}santuy`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(santuy, "videoMessage", { thumbnail: santuy, })).videoMessage
              buttonsMessage = {footerText:'© Creator By Ramdani Official', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
              case 'bocil':
              if (!isRegist) return freply(mess.daftar)
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const bocil = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/asupan/bocil?apikey=${Ramdaniapi}`)
              buttons = [{buttonId: `${prefix}bocil`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(bocil, "videoMessage", { thumbnail: bocil, })).videoMessage
              buttonsMessage = {footerText:'© Creator By Ramdani Official', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
              case 'hijaber':
              if (!isRegist) return freply(mess.daftar)
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const hijaber = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/asupan/hijaber?apikey=${Ramdaniapi}`)
              buttons = [{buttonId: `${prefix}hijaber`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(hijaber, "videoMessage", { thumbnail: hijaber, })).videoMessage
              buttonsMessage = {footerText:'© Creator By Ramdani Official', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
              case 'geayubi':
              if (!isRegist) return freply(mess.daftar)
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              const geayubi = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/asupan/geayubi?apikey=${Ramdaniapi}`)
              buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(geayubi, "videoMessage", { thumbnail: geayubi, })).videoMessage
              buttonsMessage = {footerText:'© Creator By Ramdani Official', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
              case 'aura':
              if (!isRegist) return freply(mess.daftar)
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              const naura = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/asupan/aura?apikey=${Ramdaniapi}`)
              buttons = [{buttonId: `${prefix}aura`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(naura, "videoMessage", { thumbnail: naura, })).videoMessage
              buttonsMessage = {footerText:'© Creator By Ramdani Official', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
              case 'bunga':
              if (!isRegist) return freply(mess.daftar)
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const bunga = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/asupan/bunga?apikey=${Ramdaniapi}`)
              buttons = [{buttonId: `${prefix}bunga`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(bunga, "videoMessage", { thumbnail: bunga, })).videoMessage
              buttonsMessage = {footerText:'© Creator By Ramdani Official', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break              
              case 'ayu':
              if (!isRegist) return freply(mess.daftar)
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              const ayu = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/asupan/ayu?apikey=${Ramdaniapi}`)
              buttons = [{buttonId: `${prefix}ayu`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(ayu, "videoMessage", { thumbnail: ayu, })).videoMessage
              buttonsMessage = {footerText:'© Creator By Ramdani Official', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break              
              case 'caca':
              if (!isRegist) return freply(mess.daftar)
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              const caca = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/asupan/caca?apikey=${Ramdaniapi}`)
              buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(caca, "videoMessage", { thumbnail: caca, })).videoMessage
              buttonsMessage = {footerText:'© Creator By Ramdani Official', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break              
              case 'delvira':
              if (!isRegist) return freply(mess.daftar)
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              const delvira = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/asupan/delvira?apikey=${Ramdaniapi}`)
              buttons = [{buttonId: `${prefix}delvira`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(caca, "videoMessage", { thumbnail: delvira, })).videoMessage
              buttonsMessage = {footerText:'© Creator By Ramdani Official', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
//TEXT PRO MENU
//MAKER MENU
case 'blackpink':
case 'halloween':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'neondevil':
case 'neon':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case 'writefoggy':
case '3dstone':
case 'futuristic':
case 'asketch':
case 'bluecircuit':
case 'space':
case 'amagmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorrorstyle':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=${Danzkey}&text=${teks}`)
oke = await getBuffer(anu.result)
Ramdani.sendMessage(from, oke, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
break
case 'hartatahta': 
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
harta = await getBuffer(`https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=${Danzkey}&text=${teks}`)
Ramdani.sendMessage(from, harta, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
break

//----> 2 TEXT <----//

case '8bit':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'pornhub':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'glitch':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'glitch2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'layered':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case '3dsteel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'realistic':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lionlogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'ninjalogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf2?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'halloween2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween2?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'cinematichorror':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'avengers':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'graffiti3':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'captainamerica':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=${Danzkey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'girlneko':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=${Danzkey}&text=${F1}&text2=${F2}`)
Ramdani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'sadboy':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=${Danzkey}&text=${F1}&text2=${F2}`)
Ramdani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'kaneki':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=${Danzkey}&text=${F1}&text2=${F2}`)
Ramdani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'rem':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=${Danzkey}&text=${F1}&text2=${F2}`)
Ramdani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lolimaker':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=${Danzkey}&text=${F1}&text2=${F2}`)
Ramdani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'gura':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=${Danzkey}&text=${F1}&text2=${F2}`)
Ramdani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
//ANIME MENU
case 'ppcouple':
            if (!isRegist) return freply(mess.daftar)
                 if (isBanned) return freply(mess.banned)
             anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`)
             cewe = await getBuffer(anu.result.female)
              cowo = await getBuffer(anu.result.male)
              Ramdani.sendMessage(from, cowo, image, {quoted: fdanz, caption: 'Nih Versi Cowo Nya ^_^' })
              Ramdani.sendMessage(from, cewe, image, {quoted: fdanz, caption: 'Nih Versi Cewe Nya ^_^' })
              break
                case 'sao':
                if (!isRegist) return freply(mess.daftar)
                 if (isBanned) return freply(mess.banned)
				Ramdani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 Ramdani.sendMessage(from, swordartonline, image, {quoted: fdanz, caption: 'swort art online\nMEZ RazoR'})
				 break
				case 'hsdxd':
				if (!isRegist) return freply(mess.daftar)
                 if (isBanned) return freply(mess.banned)
				 Ramdani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 Ramdani.sendMessage(from, highschooldxd, image, {quoted: fdanz, caption: 'NIH BANG '})
				break
				 case 'lovelive':
				if (!isRegist) return freply(mess.daftar)
                 if (isBanned) return freply(mess.banned)
				 Ramdani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 Ramdani.sendMessage(from, lovelive, image, {quoted: fdanz, caption: 'NIH BANG '})
				break
                    case 'uniform':
					case 'sfwneko':
					case 'cuckold':
					case 'wpnsfwmobile':
					case 'zettairyouiki':
					if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
					qute6 = await getBuffer(`https://api.xteam.xyz/randomimage/${command}?APIKEY=7415bc4287ad5ca8`)
					Ramdani.sendMessage(from, qute6, image, { quoted: fdanz, caption: ':)' })
					break
             case 'waifu':
            case 'loli':
            case 'husbu':
            case 'milf':
            case 'cosplay':
            case 'wallml':
            if (!isRegist) return freply(mess.daftar)
            if (isBanned) return freply(mess.banned)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${command}`,buttonText:{displayText: `Next`},type:1},{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await Ramdani.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Menuju Tak Terbatas', imageMessage: imageMsg,
              contentText:`Creator Ramdani Official`,buttons,headerType:4}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fdanz})
              Ramdani.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
//HEWAN MENU
case 'fox':  
                   if (!isRegist) return freply(mess.daftar)
                   if (isBanned) return freply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: fdanz})
                   break
                   case 'dog':  
                   if (!isRegist) return freply(mess.daftar)
                   if (isBanned) return freply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: fdanz})
                   break
                   case 'cat':
                   if (!isRegist) return freply(mess.daftar)
                   if (isBanned) return freply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: fdanz})
                   break
                   case 'panda':  
                   if (!isRegist) return freply(mess.daftar)
                   if (isBanned) return freply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: fdanz})
                   break
                   case 'panda1':  
                   if (!isRegist) return freply(mess.daftar)
                   if (isBanned) return freply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: fdanz})
                   break
                   case 'bird': 
                   if (!isRegist) return freply(mess.daftar)
                   if (isBanned) return freply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: fdanz})
                   break
                   case 'koala':  
                   if (!isRegist) return freply(mess.daftar)
                   if (isBanned) return freply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: fdanz})
                   break
//ISLAM MENU
                   case 'listsurah':
                   if (!isRegist) return freply(mess.daftar)
                   if (isBanned) return freply(mess.banned)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    freply(ini_txt)
                    break
                    case 'alquran':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
                    if (args.length < 1) return freply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${Lolhuman}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    freply(ini_txt)
                    break
                    case 'alquranaudio':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
                    if (args.length == 0) return freply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${Lolhuman}`)
                    await lolhuman.sendMessage(from, ini_buffer, audio, { quoted: lol, mimetype: Mimetype.mp4Audio })
                    break
                    case 'asmaulhusna':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    freply(ini_txt)
                    break
                    case 'kisahnabi':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
                    if (args.length == 0) return freply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    freply(ini_txt)
                    break
                    case 'jadwalsholat':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
                    freply(mess.wait)
                    if (args.length == 0) return freply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    freply(ini_txt)
                    break
//RANDOM FOTO
case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (!isRegist) return freply(mess.daftar)
                if (!isDewasa) return freply(mess.dewasa)
                if (isBanned) return freply(mess.banned)                
                getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolhuman}`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: fdanz })
                })
                break
//HENTAI MENU
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
                freply(mess.wait)
                if (!isPremium) return freply(mess.only.premium)
                await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${Lolhuman}`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: fdanz })
                })
                break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
                freply(mess.wait)
                if (!isPremium) return freply(mess.only.premium)
                getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${Lolhuman}`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: fdanz })
                })
                break
//18+ MENU
case 'bokep':
case 'xnxx':
case '4everproxy':
case 'vpn':
case 'bahasa':
if (!isRegist) return freply(mess.daftar)
if (!isDewasa) return freply(mess.dewasa)
if (isBanned) return freply(mess.banned)
freply(`*TOBAT TOLOL, BOKEP MULU PIKIRAN LU,*`)
break
//KODE MENU
                    case 'kodebahasa':                  
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
                    freply(`id = Indonesia
                    en = English
                    jp = Japan`)
                    break 
                    case 'kodenegara':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
                    negara = args.join(' ')
                    texxt = args.join(' ')
					Ramdani.sendMessage(from, negara(), texxt)
					break
                    case 'tts':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
				    if (args.length < 1) return Ramdani.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Ramdani.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? freply('Textnya kebanyakan cok')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return freply(ind.stikga())
							Ramdani.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
//STICKER MENU
           case 'ttp':  
           if (!isRegist) return freply(mess.daftar)
           if (isBanned) return freply(mess.banned)
           if (!c) return freply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp Ramdani botz Whatsapp`)
           anu1 = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${Lolhuman}&${c}`)
           Ramdani.sendMessage(from, anu1, image, {quoted: mek, caption : `${prefix}sticker`})
           break
            case 'attp':
            if (!isRegist) return freply(mess.daftar)
            if (isBanned) return freply(mess.banned)
            if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
            buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
            Ramdani.sendMessage(from, buffer, sticker, { quoted: mek })
            break
            case 'patrick':
            if (!isRegist) return freply(mess.daftar)
            if (isBanned) return freply(mess.banned)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${Lolhuman}`)
			Ramdani.sendMessage(from, wkwk, sticker, {quoted: fdanz})
			break
			case 'amongus':
			if (!isRegist) return freply(mess.daftar)
            if (isBanned) return freply(mess.banned)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=${Lolhuman}`)
			Ramdani.sendMessage(from, wkwk, sticker, {quoted: fdanz})
			break  
case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Ramdani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Ramdani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'toimg':
case 'tojpg':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (!isQuotedSticker) return freply('reply stickernya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return freply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
fs.unlinkSync(ran)
})
break
                    case 'sticker2':
					case 'stiker2':
					case 's2':
					if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
			        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await Ramdani.downloadAndSaveMediaMessage(encmedia, `./media/sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										freply(mess.error.apikey)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./media/sticker/data.exif ./media/sticker/${sender}.webp -o ./media/sticker/${sender}.webp`, async (error) => {
											if (error) return freply(mess.error.apikey)
											Ramdani.sendMessage(from, fs.readFileSync(`./media/sticker/${sender}.webp`), sticker, {quoted: fdanz})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./media/sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./media/sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await Ramdani.downloadAndSaveMediaMessage(encmedia, `./media/sticker/${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										freply(mess.error.apikey)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./media/sticker/data.exif ./media/sticker/${sender}.webp -o ./media/sticker/${sender}.webp`, async (error) => {
											if (error) return freply(mess.error.apikey)
											Ramdani.sendMessage(from, fs.readFileSync(`./media/sticker/${sender}.webp`), sticker, {quoted: fdanz})
											fs.unlinkSync(media)
											fs.unlinkSync(`./media/sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./media/sticker/${sender}.webp`)
						} else {
							freply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
//DOWNLOAD MENU
case 'pinterest':
            if(!q) return freply('gambar apa?')
            let pin = await Ramdaniofficial.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await Ramdani.sendMessage(from,di,image,{quoted: mek})
            break              
case 'play':
if(isBanned) return freply(mess.banned)
if (args.length === 0) return freply(`Example ${prefix + command} love nwantiti`)
anu = await fetchJson (`https://api.lolhuman.xyz/api/ytplay?apikey=13710ff963cb90b9a88fb436&query=${args.join(' ')}`)
sayang = `TITLE BERHASIL DImekATKAN OLEH BOT\n\nTitle : ${anu.title}\nChannel : ${anu.channel}\nUpload : ${anu.published}\nViews : ${anu.views}\n\n*Mohon Tunggu Beberapa Menit Bot Sedang Mengirimkan File*`
buf = await getBuffer (anu.thumb)
Ramdani.sendMessage (from, buf, image, {quoted: mek, caption: sayang})
sound = await getBuffer (anu.url)
Ramdani.sendMessage(from, sound, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'play2':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (args.length ==0)return freply('Judul Lagunya Apa?')
bo = args.join(" ")
freply(mess.wait)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=apivinz&q=${bo}`)
thmb = await getBuffer(ini.result.thumbnail)
ply1 =`Judul: ${ini.result.title}\nSize: ${ini.result.size}\nDurasi: ${ini.result.duration}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: '️ᴍᴜsɪᴋ 🎵' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'ᴠɪᴅᴇᴏ 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'mp4':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=apivinz&q=${bo}`)
mp4 = await getBuffer(ini.result.url_video)
Ramdani.sendMessage(from, mp4, video)
break
case 'mp3':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=apivinz&q=${bo}`)
mp3 = await getBuffer(ini.result.url_audio)
Ramdani.sendMessage(from, mp3, audio)
break
case 'tiktok196453':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(mess.wait)
if (!q) return freply('Linknya?')
if (!q.includes('tiktok')) return freply(mess.error.link)
              data = await fetchJson(`https://adiwajshing-api.herokuapp.com/api/download/tiktok?url=${q}/&apikey=${Ramdaniapi}`)
              result = `Ramdani, *Nickname*: ${data.result.author}\n*Like*: ${data.result.statistic.diggCount}\n *Komentar*: ${data.result.statistic.commentCount}\n*Share*: ${data.result.statistic.shareCount}\n*Views*: ${data.result.statistic.playCount}\n*Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `NO WATERMARK`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'Audio ( 4.5 MB )'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await Ramdani.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fdanz})
              Ramdani.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'tiktok':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(mess.wait)
anu = await fetchJson (`https://api-aprilia-xyz.herokuapp.com/api/tiktok?url=${args.join(' ')}`)
buffer = await getBuffer (anu.result.original)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'SUBS Ramdani Official SU'})
break
/*
case 'tiktoknowm':
      if (isBanned) return freply(mess.banned)
freply(mess.wait)
anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${args.join(' ')}`)
buffer = await getBuffer(anu.download)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
case 'tiktokwm':
      if (isBanned) return freply(mess.banned)
freply(mess.wait)
anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_wm?url=${args.join(' ')}`)
buffer = await getBuffer (anu.download)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
*/
case 'igvideo':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply("```Mana linknya tot```")
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return freply('```Invalid link```')
freply(mess.wait)
anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/igdownload?url=${args.join(' ')}&apikey=wf2tghNhfU`)
buffer = await getBuffer (anu.result.download_url)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: '*Subscribe channel Ramdani Official dan follow Instagram Ramdani Store*'})
break
case 'igdownload':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply("```Mana linknya tot```")
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return freply('```Invalid link```')
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/download/instagram?apikey=${Ramdaniapi}&url=${args.join(' ')}`)
buffer = await getBuffer (anu.result.download_url)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: '*Subscribe channel Ramdani Official dan follow Instagram Ramdani Store*'})
break
case 'igfoto':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply("```Mana linknya tot```")
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return freply('```Invalid link```')
freply(mess.wait)
anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/igdownload?url=${args.join(' ')}&apikey=wf2tghNhfU`)
buffer = await getBuffer (anu.result.download_url)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: '*Subscribe channel Ramdani Official dan follow Instagram Ramdani Store*'})
break
case 'playmp3':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply("```JUDUL MANA TOT```")
anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytplaymp3?query=${args.join(' ')}&apikey=wf2tghNhfU`)
freply(mess.wait)
captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nSize : ${anu.result.size}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM AUDIO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buff, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'playmp4':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply("```JUDUL MANA TOT```")
anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytplaymp4?query=${args.join(' ')}&apikey=wf2tghNhfU`)
freply(mess.wait)
captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nSize : ${anu.result.size}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM VIDEO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buff, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'ytmp3':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply("```LINK NYA?```")
if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return freply('```LINK NYA JELEK NIH```')
freply(mess.wait)
anu = await fetchJson (`https://api-ramdaniofficial.herokuapp.com/api/download/ytmp3?url=${args.join(' ')}apikey=${Ramdaniapi}`)
captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nSize : ${anu.result.size}\nLike Video: ${anu.result.likes}\nViews : ${anu.result.views}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM AUDIO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'ytmp4':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply("```LINK NYA?```")
if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return freply('```LINK NYA JELEK NIH```')
freply(mess.wait)
anu = await fetchJson (`https://api-ramdaniofficial.herokuapp.com/api/download/ytmp4?url=${args.join(' ')}&apikey=${Ramdaniapi}`)
captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nSize : ${anu.result.size}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM VIDEO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, video, {mimetype: 'video/mp4', quoted: mek})
break
                    case 'ktp':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
                    if (args.length == 0) return freply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nContoh: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|Akira|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${Lolhuman}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    Ramdani.sendMessage(from, ini_anu, image, {quoted: mek, caption: 'Noh Jadi'})
                    break
case 'tiktokmusic':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(mess.wait)
anu = await fetchJson(`http://zekais-api.herokuapp.com/tiktokmusic?url=${args.join(' ')}&apikey=Rj9pGDhE`)
buffer = await getBuffer (anu.result)
Ramdani.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'shortlink':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
anu = await fetchJson (`https://api-ramdaniofficial.herokuapp.com/api/short/tiny?url=${args.join(' ')}&apikey=${Ramdaniapi}`)
freply(anu.result.link)
break
case 'buttons3': 
if (!isRegist) return freply(mess.daftar)
 if (isBanned) return freply(mess.banned)
freply(mess.wait)
if (!q) return freply('Linknya?')
if (!q.includes('tiktok')) return freply(mess.error.Iv)
data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${Lolhuman}&url=${q}`)
ini_video = await getBuffer(data.result.link)
Ramdani.sendMessage(from, ini_video, video, { quoted: fdanz })
break
          case 'buttons4': 
          if (!isRegist) return freply(mess.daftar)
          if (isBanned) return freply(mess.banned)
          freply(mess.wait)
          if (!q) return freply('Linknya?')
          if (!q.includes('tiktok')) return freply(mess.error.Iv)
          data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${Lolhuman}&url=${args[0]}`)
          Ramdani.sendMessage(from, data, audio, { quoted: fdanz })
          break
              case 'buttons1':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=apivinz&q=${q}`)
		     .then(res => {
			  Ramdani.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: fdanz, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
              })
              break
case 'lirik':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
freply(mess.wait)
if (args.length < 1) return freply('Judulnya?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
freply(lirik)
})
break
case 'herolist':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
freply(listt)
})
break
case 'herodetail':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*
*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
freply(her)
break
//OWNER MENU
case 'exif':
             if (!isOwner) return  freply(mess.only.ownerB)
             if (!q) return freply(mess.error.format)
             if (!arg.split('|')) return freply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             freply('sukses')
             break
case 'clearall':
					if (!isOwner) return freply(mess.only.ownerB)
					anu = await Ramdani.chats.all()
					Ramdani.setMaxListeners(25)
					for (let _ of anu) {
						Ramdani.deleteChat(_.jid)
					}
					break
case 'block':
				 Ramdani.updatePresence(from, Presence.composing) 
				 Ramdani.chatRead (from)
					if (!isGroup) return freply(mess.only.group)
					if (!isOwner) return freply(mess.only.ownerB)
					Ramdani.blockUser (`${body.slice(7)}@c.us`, "add")
					Ramdani.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return freply(mess.only.group)
					if (!isOwner) return freply(mess.only.ownerB)
				    Ramdani.blockUser (`${body.slice(9)}@c.us`, "remove")
					Ramdani.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break   				
					case 'setppbot':
					if (!isOwner) return freply(ind.ownerb())
					Ramdani.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return freply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(enmedia)
					await Ramdani.updateProfilePicture(botNumber, media)
					freply('Makasih profil barunya😗')
					break 
		case 'setppbot':
				    if (!isOwner) return freply('*Only Owner bot*')
					Ramdani.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return freply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(enmedia)
					await Ramdani.updateProfilePicture(botNumber, media)
					freply('Makasih profil barunya😗')
					break 
case 'public':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (!isOwner) return freply(mess.only.ownerB)
public = true
fakeText('*LANGUAGE ENGLISH*\n_Success change to public mode_\n\n*BAHASA INDONESIA*\n_Berhasil mengubah ke mode publik_')
break
case 'self':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (!isOwner) return freply(mess.only.ownerB)
public = false
fakeText('*LANGUAGE ENGLISH*\n_Success change to self mode_\n\n*BAHASA INDONESIA*\n_Berhasil mengubah ke mode self_')
freply('*⌜ SELF MODE ⌟*')
break
      case 'hedsot':
             if (!isRegist) return freply(mess.daftar)
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return 
             freply(`Byeee....`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
             if (!isRegist) return freply(mess.daftar)
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return 
             freply(mess.wait)
             exec(`node start.js`)
             freply('_Restarting Bot Success_')
             break
      case 'leaveall':
             if (!isRegist) return freply(mess.daftar)
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return  freply(mess.only.owner)
             let totalgroup = Ramdani.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             Ramdani.groupLeave(id)
}
             break
        case 'join':
            if (!isRegist) return freply(mess.daftar)
            if (isBanned) return freply(mess.banned)
            if (!isOwner) return freply(mess.only.ownerB)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return freply(mess.Iv)
            hen = args[0]
            if (!q) return freply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakeitem('pastikan link sudah benar!')
            var response = await Ramdani.acceptInvite(codeInvite)
            fakeitem('SUKSES')
            } catch {
            fakeitem('LINK ERROR!')
            }
        break
        case 'join2': 
             if (!isRegist) return freply(mess.daftar)
             if (isBanned) return freply(mess.banned)
             if (!q) return freply('Linknya?')
             if (!isOwner) return freply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return freply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = Ramdani.query({ json: ['action', 'invite', link],
             expect200: true })
             freply('Berhasil Masuk Grup')
             break
                    case 'ban':
                    case 'banned':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
					if (!isOwner) return freply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					freply(`Nomor wa.me/${bnnd} telah dibanned !`)
	                break
                    case 'unban':
                    case 'unbanned':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
					if (!isOwner) return freply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					freply(`Nomor wa.me/${bnnd} telah di unban!`)
		break
        case 'd':
        case 'del':
        case 'delete': 
        if (!isRegist) return freply(mess.daftar)
        if (isBanned) return freply(mess.banned)
        if (!isOwner) return freply(mess.only.ownerB)
					Ramdani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
break
case 'addcmd': 
case 'setcmd':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (!isOwner && !mek.key.fromMe) return freply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return freply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
freply("Done Bwang")
} else {
freply('tag stickenya')
}
break
case 'delcmd':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (!isOwner && !mek.key.fromMe) return freply(mess.only.ownerB)
if (!isQuotedSticker) return freply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
freply("Done Bwang")
break
case 'listcmd':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (!isOwner && !mek.key.fromMe) return freply(mess.only.ownerB)
let teksnyee = `F`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*➪𝙸𝙳:* ${i.id}\n*➪𝙲𝚖𝚍:* ${i.chats}`
}
freply(teksnyee)
break
                    case 'bc': 
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
					if (!isOwner) return freply(mess.only.ownerB) 
					if (args.length < 1) return freply('.......')
					anu = await Ramdani.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Ramdani.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Ramdani.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
             freply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             Ramdani.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`,
			"footerText": '© Creator By Ramdani Official',
			"buttons": [
			{"buttonId": `${prefix}simpelmenu`,
			"buttonText": {"displayText": "Simple Menu"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )}
             freply('Suksess broadcast')}
        break
        case 'bc2':
             if (!isRegist) return freply(mess.daftar)
             if (isBanned) return freply(mess.banned)
             if(!isOwner) return freply('Anda Bukan Owner')
             buff10 = await getBuffer (`https://api-xcz.herokuapp.com/api/random/waifu`)
             if (args.length < 1) return freply('teks?')
             anu = await Ramdani.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Ramdani.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	Ramdani.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             freply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             Ramdani.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             freply('Suksess broadcast')}
             break
//SERTI MENU
case 'serti1':
case 'serti2':
case 'serti3':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (args.length ==0) return freply('Text Nya Mana Tod?')
txtt = args.join (" ")
freply(mess.wait)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
Ramdani.sendMessage(from, buff, image, { quoted: fdanz, caption: 'Nih Bro Hasil nya' })
break
//GAME MENU
case 'truth':
case 'dare':
case 'slot':
case 'suit':
case 'gelud':
case 'tebakkata':
case 'tebakkimia':
case 'tebaklirik':
case 'tebakbendera':
case 'tebakgambar':
case 'tebakanime':
case 'math':
case 'siapaaku':
case 'tictactoe':
case 'family100':
case 'caklontong':
freply(mess.error.apikey)
break
       case 'suit':
              if (!q) return freply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return freply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              freply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              freply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              freply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              freply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              freply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              freply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              freply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
//CERITA MENU
                    case 'cersex':
                    if (!isRegist) return freply(mess.daftar)
					if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://api-senku.herokuapp.com/api/cersex?apikey=apisenku`)
					freply(anu.result)
					break
//HIBURAN MENU
case 'rate':
				if (!isRegist) return freply(mess.daftar)
				if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break           
           case 'seberapagay':
           if (!isRegist) return freply(mess.daftar)
           if (!isRegist) return freply(mess.daftar)
           if (isBanned) return freply(mess.banned)
		   gay = body.slice(13)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${gay}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   freply(hasil)
		   break           
        case 'quotes':
        if (isBanned) return freply(mess.banned)
        anu = await fetchJson(`https://melcanz.net/api/quotes?apikey=daff`)
        freply(anu.quotes)
        break
                case 'cerpen':
                if(isBanned) return freply(mess.banned)
                gatauda = body.slice(1)
                anu = await fetchJson(`https://api-senku.herokuapp.com/api/cerpen?apikey=${apisenku}`)
                freply(anu.result.ceritanya)
                break
               case 'artinama':
               if (isBanned) return freply(mess.banned)
               if (args.length == 0) return freply(`Example: ${prefix + command} apri`)
               anu = await fetchJson(`https://melcanz.net/api/artinama?nama=${args.join(' ')}&apikey=daff`)
               freply(anu.result)
               break
               case 'artimimpi':
               if (isBanned) return freply(mess.banned)
               if (args.length == 0) return freply(`Example: ${prefix + command} apri`)
               anu = await fetchJson(`https://melcanz.net/api/artimimpi?mimpi=${args.join(' ')}&apikey=daff`)
               freply(anu.result)
               break
case 'nickepep':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=${Leyscoders}`)
freply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'katailham':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=${Leyscoders}`)
freply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'katasindiran':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/skak?apikey=${Leyscoders}`)
freply(`*Random Kata Sindiran*\n${anu.result}`)
break
case 'tongue':  
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `➻ *NIHH* : ${anu.result}`
freply(anu1)
break
case 'pantun': 
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
freply(anu1)
break 
case 'namaninja':  
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.your_name}\n`
anu1 += `➻ *NINJA* : ${anu.result}\n`
freply(anu1)
break 
//PEMBATASAN
case 'notif':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (!isGroupAdmins) return freply(ind.only.admin)
Ramdani.updatePresence(from, Presence.composing)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await Ramdani.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
} 
await Ramdani.sendMessage(from, options, text)
break
//RANDOM MENU
// Note jangan Salah Gunain
case 'buggc':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (!isOwner) return freply(mess.only.ownerB)
if (!isOwner) return freply(mess.only.ownerB)
await Ramdani.toggleDisappearingMessages(from)
freply("mampus")
break
case 'hacked':
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)
              if (!isOwner) return freply(mess.only.ownerB)
              if (!isBotGroupAdmins) return freply(mess.only.Badmin)
              if (args.length < 1) return freply('Teksnya?')
              freply('Otw Hack')
              tessgc = await getBuffer(`https://telegra.ph/file/42bbb3c9962702d314008.jpg`)
              Ramdani.updateProfilePicture (from, tessgc)
              Ramdani.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
              Ramdani.groupUpdateDescription(from, `_Owner telah meretas grup ini_`)             
              Ramdani.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
		      break
// Fitur Join Grup Whatsapp
case 'join':  case 'joingc':
   if (!isRegist) return freply(mess.daftar)
   if (isBanned) return freply(mess.banned)
   if (!q) return freply('Linknya?')
   if (isOwner) {
   if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return freply('Linknya Invalid Kak')
   freply('Please waitt...')
   link = args[0].replace('https://chat.whatsapp.com/','')
   fak = Ramdani.query({ json: ['action', 'invite', link],
   expect200: true })
   freply('Berhasil Masuk Grup')
   } else {
   const buttons = [{buttonId: `${prefix}sewabot`, buttonText: {displayText: 'SEWA'}, type: 1}]
   const buttonMessage = {
   headerType: "IMAGE",
   contentText: `Hai Kak, Fitur Ini Hanya Bisa Di Gunakan Oleh Owner`,
   footerText: 'ingin sewa? klik di bawah',
   buttons: buttons,
   headerType: 1
   }
   await Ramdani.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
   }
   break
//GROUP MENU
                    case 'simi':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
                    if (!isGroup) return freply(mess.only.group)
                    if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
                    if (!isBotGroupAdmins) return freply(mess.only.Badmin)
                    danzz = 'PILIH MANA MIN?'
        sendButMessage(from, danzz, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}simion`,
            buttonText: {
              displayText: `ON`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}simiof`,
            buttonText: {
              displayText: `OFF`,
            },
            type: 1,
          },
        ]);
        break
                    case 'simion':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
                    if (!isGroup) return freply(mess.only.group)
                    if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
                    if (!isBotGroupAdmins) return freply(mess.only.Badmin)
                    freply(`*LANGUAGE ENGLISH*\n_Success, Activate the simi feature in the group_ *${groupMetadata.subject}*\n\n*BAHASA INDONESIA*\n_Sukses, Mengaktifkan fitur simi di grup_ *${groupMetadata.subject}*`)
                    break
                    case 'simiof':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
                    if (!isGroup) return freply(mess.only.group)
                    if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
                    if (!isBotGroupAdmins) return freply(mess.only.Badmin)
                    freply(`*LANGUAGE ENGLISH*\n_Success, Disabling the simi feature in the group_ *${groupMetadata.subject}*\n\n*BAHASA INDONESIA*\n_Sukses, Menonaktifkan fitur simi di grup_ *${groupMetadata.subject}*`)
                    break
case 'kickall':
	 if (!isOwner) return freply(mess.only.ownerB)
	 members_id = []
     teks = (args.length > 1) ? body.slice(8).trim() : ''
	            teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*??* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					Ramdani.groupRemove(from, members_id)
			        break
                    case 'setdesk':
					if (!isGroup) return freply(mess.only.group)
					if (!isGroupAdmins) return freply(mess.only.admin)
					if (!isBotGroupAdmins) return freply(mess.only.Badmin)
					Ramdani.groupUpdateDescription(from, `${body.slice(9)}`)
					Ramdani.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: amv})
					break
                    case 'setnamegc':
					if (!isGroup) return freply(mess.only.group)
					if (!isGroupAdmins) return freply(mess.only.admin)
					if (!isBotGroupAdmins) return freply(mess.only.Badmin)
					Ramdani.groupUpdateSubject(from, `${body.slice(9)}`)
					Ramdani.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: amv})
					break
                    case 'listadmin2':
					if (!isGroup) return freply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
//WELCOME
case 'intro':
var intro = `ᴡᴇʟᴄᴏᴍᴇ
ɪɴᴛʀᴏ
┌ > ɴᴀᴍᴀ : 
┌ > ᴀsᴀʟ ᴋᴏᴛᴀ : 
┌ > ᴜsɪᴀ : 
┌ > ɢᴇɴᴅᴇʀ : 
┌ > sᴛᴀᴛᴜs :
ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sᴜʙsᴄʀɪʙᴇ ʏᴛ ʀᴀᴍᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ
${Yt}
`
Ramdani.sendMessage(from, intro, text, {quoted: ftrolMENU, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true })
break
             case 'listonline':             
             if (!isRegist) return freply(mess.daftar)
             if (isBanned) return freply(mess.banned)
             if (!isGroup) return freply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(Ramdani.chats.get(ido).presences), Ramdani.user.jid]
             Ramdani.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             freply(`${e}`)
}
             break
              case 'setgrupname':
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return freply(`Penggunaan ${prefix}setgrupname name`)
              Ramdani.groupUpdateSubject(from, q)
             .then((res) => freply(jsonformat(res)))
             .catch((err) => freply(jsonformat(err)))
              break
              case 'setdesc':
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return freply(mess.only.Badmin)
              if (args.length == 0)  return freply(`Penggunaan ${prefix}setdesc desc`)
              Ramdani.groupUpdateDescription(from, q)
             .then((res) => freply(jsonformat(res)))
             .catch((err) => freply(jsonformat(err)))
              break
              case 'setppgrup':
              if (!isRegist) return freply(mess.daftar)
              if (isBanned) return freply(mess.banned)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return freply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await Ramdani.downloadMediaMessage(encmedia)
              Ramdani.updateProfilePicture(from, media)
             .then((res) => freply(jsonformat(res)))
             .catch((err) => freply(jsonformat(err)))
              } else {
              freply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
        case 'demoteall':
        if (!isRegist) return freply(mess.daftar)
        
        if (isBanned) return freply(mess.banned)
        
		if (!isOwner && !rn.key.fromMe) return freply(mess.only.ownerB)

		if (!isGroup) return freply(mess.only.group)

		if (!isBotGroupAdmins) return freply(mess.only.Badmin)
               
		 members_id = [ ]
		
		 for (let mem of groupMembers) {
	   
		 	members_id.push(mem.jid)
	  
		 		}
              
		 		  Ramdani.groupDemoteAdmin(from, members_id)
              
		 		    break
                
    case 'promoteall':
	if (!isRegist) return freply(mess.daftar)
    if (isBanned) return freply(mess.banned)
	if (!isOwner && !rn.key.fromMe) return freply(mess.only.ownerB)
	if (!isGroup) return freply(mess.only.group)
    if (!isBotGroupAdmins) return freply(mess.only.Badmin)
	members_id = [ ]
	for (let mem of groupMembers) {
	members_id.push(mem.jid)
	}
    Ramdani.groupMakeAdmin(from, members_id)
    break
                 case 'groupsetting':
                 if (!isRegist) return freply(mess.daftar)
                 if (isBanned) return freply(mess.banned)        
                 if (!isGroup) return freply(mess.only.group)
                 if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
                 if (!isBotGroupAdmins) return freply(mess.only.Badmin)
				 danz = 'PILIH MANA MIN?'
        sendButMessage(from, danz, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
        case "closegc": 
        if (!isRegist) return freply(mess.daftar)
        if (isBanned) return freply(mess.banned)        
        if (!isGroup) return freply(mess.only.group)
        if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
        if (!isBotGroupAdmins) return freply(mess.only.Badmin)
        freply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
        case "opengc":
        if (!isRegist) return freply(mess.daftar)
        if (isBanned) return freply(mess.banned)        
        if (!isGroup) return freply(mess.only.group)
        if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
        if (!isBotGroupAdmins) return freply(mess.only.Badmin)
        freply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
                    case 'hidetag':        
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)                
					if (!isGroup) return freply(mess.only.group)                   
					var value = body.slice(9)
					var group = await Ramdani.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					//var options = {text: value, contextInfo: { mentionedJid: mem }, quoted: fhidetag}
					Ramdani.sendMessage(from, value, text, {quoted: fhidetag, contextInfo: { mentionedJid: mem }})
					break;
		        case 'tagall':
			    if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
                if (!isGroup) return freply(mess.only.group)
                if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
				members_id = []
				teks = (args.length > 1) ? body.slice(8).trim() : ''
				teks += '\n\n'
				for (let mem of groupMembers) {
				teks += `*${prefix}* @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
				break
                    case 'promote':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
                    if (!isGroup) return freply(mess.only.group)
                    if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
                    if (!isBotGroupAdmins) return freply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						Ramdani.groupMakeAdmin(from, mentioned)
					}
					break
				    case 'demote':
				    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
			        if (!isGroup) return freply(mess.only.group)
                    if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
                    if (!isBotGroupAdmins) return freply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						Ramdani.groupDemoteAdmin(from, mentioned)
					}    
					break
			 case 'add':        
				    if (isBanned) return freply(mess.banned)
				    if (!isRegist) return freply(mess.daftar)
			        if (!isGroup) return freply(mess.only.group)
                    if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
                    if (!isBotGroupAdmins) return freply(mess.only.Badmin)
					if (args.length < 1) return freply('Yang mau di add apaan tot?')
					if (args[0].startsWith('08')) return freply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Ramdani.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						freply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
				    if (isBanned) return freply(mess.banned)
				    if (!isRegist) return freply(mess.daftar)
		            if (!isGroup) return freply(mess.only.group)
                    if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
                    if (!isBotGroupAdmins) return freply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return freply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
				if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
			    if (!isGroup) return freply(mess.only.group)
				teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
				no = 0
				for (let admon of groupAdmins) {
				no += 1
				teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
				}
				mentions(teks, groupAdmins, true)
				break
                case 'linkgroup':
                case 'linkgrup':
                case 'linkgc':
                if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
                if (!isGroup) return freply(mess.only.group)
                if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
                if (!isBotGroupAdmins) return freply(mess.only.Badmin)
                linkgc = await Ramdani.groupInviteCode(from)
                freply(`*Link Group* : *${groupMetadata.subject}*\nhttps://chat.whatsapp.com/`+linkgc)
                break
                    case 'leave':
                    if (!isGroup) return freply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    Ramdani.groupLeave(from)
                    } else {
                        freply(mess.only.admin)
                    }
                    break
            case 'welcome':
            if (!isRegist) return freply(mess.daftar)
            if (isBanned) return freply(mess.banned)
			if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
            if (!isBotGroupAdmins) return freply(mess.only.Badmin)
			if (Number(args[0]) === 1) {
			if (isWelkom) return freply(`*LANGUAGE ENGLISH*\n_welcome is already active_\n\n*BAHASA INDONESIA*\n_welcome sudah aktif sebelumnya_`)
			welkom.push(from)
			fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
		    freply(`*LANGUAGE ENGLISH*\n_Success, Activate the welcome feature in the group_ *${groupMetadata.subject}*\n\n*BAHASA INDONESIA*\n_Sukses, Mengaktifkan fitur welcome di grup_ *${groupMetadata.subject}*`)
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						freply(`*LANGUAGE ENGLISH*\n_Success, Disabling the welcome feature in the group_ *${groupMetadata.subject}*\n\n*BAHASA INDONESIA*\n_Sukses, Menonaktifkan fitur welcome di grup_ *${groupMetadata.subject}*`)
					} else {
						sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
   
                    case 'antilink':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
                	if (!isGroup) return freply(mess.only.group)
                    if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
                    if (!isBotGroupAdmins) return freply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
					if (isAntilink) return freply(`*LANGUAGE ENGLISH*\n_antilink is already active_\n\n*BAHASA INDONESIA*\n_antilink sudah aktif sebelumnya_`)
					antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					freply(`*LANGUAGE ENGLISH*\n_Success, Activate the antivirus feature in the group_ *${groupMetadata.subject}*\n\n*BAHASA INDONESIA*\n_Sukses, Mengaktifkan fitur antivirus di grup_ *${groupMetadata.subject}*`)
					Ramdani.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return freply(`*LANGUAGE ENGLISH*\n_antilink is already active_\n\n*BAHASA INDONESIA*\n_antilink sudah aktif sebelumnya_`)
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						freply(`*LANGUAGE ENGLISH*\n_Success, Disabling the antilink feature in the group_ *${groupMetadata.subject}*\n\n*BAHASA INDONESIA*\n_Sukses, Menonaktifkan fitur antilink di grup_ *${groupMetadata.subject}*`)
					} else {
						sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break
case 'antivirus2':
case 'antivirtext2':
if (!isRegist) return freply(mess.daftar)
if (!isGroup) return freply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
if (!isBotGroupAdmins) return freply(mess.only.Badmin)
if (!q) return freply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntivirus) return freply(`Udah aktif`)
antivirus.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(antivirus))
freply(`*LANGUAGE ENGLISH*\n_Success, Activate the antivirus feature in the group_ *${groupMetadata.subject}*\n\n*BAHASA INDONESIA*\n_Sukses, Mengaktifkan fitur antivirus di grup_ *${groupMetadata.subject}`)
} else if (args[0].toLowerCase() === 'off'){
let anu = antivirus.indexOf(from)
antivirus.splice(anu, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(antivirus))
reply(`*LANGUAGE ENGLISH*\n_Success, Disabling the antivirus feature in the group_ *${groupMetadata.subject}*\n\n*BAHASA INDONESIA*\n_Sukses, Menonaktifkan fitur antivirus di grup_ *${groupMetadata.subject}*`)
} else {
freply(`_Pilih on atau off_`)
}
break
case 'antivirus':
case 'antivirtex':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
                    if (!isGroup) return freply(mess.only.group)
                    if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
                    if (!isBotGroupAdmins) return freply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
					if (isAntivirus) return freply(`*LANGUAGE ENGLISH*\n_antivirus is already active_\n\n*BAHASA INDONESIA*\n_antivirus sudah aktif sebelumnya_`)
					antivirus.push(from)
					fs.writeFileSync('./database/antivirus.json', JSON.stringify(antivirus))
					freply(`*LANGUAGE ENGLISH*\n_Success, Activate the antivirus feature in the group_ *${groupMetadata.subject}*\n\n*BAHASA INDONESIA*\n_Sukses, Mengaktifkan fitur antivirus di grup_ *${groupMetadata.subject}*`)
					Ramdani.sendMessage(from,`Perhatian kepada seluruh member antivirus group aktif apabila anda mengirim virus, anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntivirus) return freply(`*LANGUAGE ENGLISH*\n_antivirus is already active_\n\n*BAHASA INDONESIA*\n_antilink sudah aktif sebelumnya_`)
						antivirus.splice(from, 1)
						fs.writeFileSync('./database/antivirus.json', JSON.stringify(antivirus))
						freply(`*LANGUAGE ENGLISH*\n_Success, Disabling the antivirus feature in the group_ *${groupMetadata.subject}*\n\n*BAHASA INDONESIA*\n_Sukses, Menonaktifkan fitur antivirus di grup_ *${groupMetadata.subject}*`)
					} else {
						sendButMessage(from, `MODE ANTIVIRUS`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirus 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirus 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break
        case 'd':
        case 'del':
        case 'delete': 
        if (!isRegist) return freply(mess.daftar)
        if (isBanned) return freply(mess.banned)        
        if (!isOwner) return freply(mess.only.ownerB)
		Ramdani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		break
//TOOLS MENU
case 'addstik':
        if (!isRegist) return freply(mess.daftar)
        if (isBanned) return freply(mess.banned)
		if (!isOwner) return reply (mess.only.owner)
	    if (!isQuotedSticker) return freply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return freply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Ramdani.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./media/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
				Ramdani.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: troli})
				break
case 'addimg':
                if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
				if (!isOwner) return reply (mess.only.owner)
				if (!isQuotedImage) return freply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return freply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Ramdani.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./media/foto/${svst}jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				Ramdani.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: troli})
				break
				
case 'addvid':
                if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
				if (!isOwner) return reply (mess.only.owner)
				if (!isQuotedVideo) return freply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return freply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Ramdani.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./media/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				Ramdani.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: troli })
				break
			        
case 'addvn':
                if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
				if (!isOwner) return reply (mess.only.owner)
				if (!isQuotedAudio) return freply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return freply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Ramdani.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				Ramdani.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: troli})
				break 
case 'liststik':
                if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				Ramdani.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": setiker } })
				break				
case 'listimg':
                if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				Ramdani.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": setiker } })
				break				
case 'listvid':
                if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				Ramdani.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": imagenye } })
				break				
case 'listvn':
                if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				Ramdani.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": audionye } })
				break	
case 'getstik':
                if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				Ramdani.sendMessage(from, result, sticker,{quoted:troli})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break				
case 'getimg':
                if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				Ramdani.sendMessage(from, buffer, image, { quoted: troli, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
case 'getvid':
                if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				Ramdani.sendMessage(from, buffer, video, { quoted: troli, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break				
case 'getvn':
                if (!isRegist) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				Ramdani.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: troli, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break            
                    case 'tupai':
                    if (!isRegist) return freply(mess.daftar)
                    if (isBanned) return freply(mess.banned)
				    freply('PROSES')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return freply('Error!')
						hah = fs.readFileSync(ran)
						Ramdani.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: troli})
						fs.unlinkSync(ran)
					})
				break 
case 'wa.me':
case 'wame':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
Ramdani.updatePresence(from, Presence.composing) 
options = {
text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: { mentionedJid: [sender] }
}
Ramdani.sendMessage(from, options, text, { quoted: mek } )
break
if (data.error) return freply(data.error)
freply(data.result)
break
case 'ssweb':
case 'ssurl':
case 'sslink':
case 'ss':
if (!isRegist) return freply(mess.daftar)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply('Urlnya nya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
Ramdani.sendMessage(from, buff, image, {quoted: fdanz, caption : teks})
break
            case 'ssweb2':
            case 'ssurl2':
            case 'sslink2':
            case 'ss2':
            if (!isRegist) return freply(mess.daftar)
            if (isBanned) return freply(mess.banned)
            if (args.length < 1) return freply(`[❗] Example :\n*${prefix}${command} https://google.com*`)                  
            freply(mess.wait)
            anu = await getBuffer(`https://hardianto.xyz/api/tools/ssweb?url=${args.join(' ')}&apikey=hardianto`)
            Ramdani.sendMessage(from, anu, image, {caption: `BERHASIL KAK\n\nPlease Support *Aprilia*`, quoted: mek})
            break
	        case 'encimg':
		    case 'encfoto':
            if (!isRegist) return freply(mess.daftar)
            if (isBanned) return freply(mess.banned)
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
			freply(mess.wait)
			await encimg(media, {lang: 'eng+ind', oem: 1, psm: 3})
			.then(teks => {
			freply(teks.trim())
			fs.unlinkSync(media)
			})
			.catch(err => {
			freply(err.message)
		    fs.unlinkSync(media)
			})
					} else {
						freply('Foto aja mas')
					}
					break
default:
if (budy.includes(`Assalamualaikum`)) {
Ramdani.sendMessage(from, 'Waalaikumsalam', text, {quoted: fakeitem})
                  }
if (budy.includes(`kontol`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`memek`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`anjg`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`Anjg`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`tai`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`Asu`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`asu`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`hai`)) {
Ramdani.sendMessage(from, 'Hai Juga', text, {quoted: fakeitem})
                  }
if (budy.includes(`stres`)) {
Ramdani.sendMessage(from, 'Lu Yang Stres', text, {quoted: fakeitem})
                  }
if (budy.includes(`??`)) {
Ramdani.sendMessage(from, 'Larii Cuk Ada Batu!!', text, {quoted: fakeitem})
                  }
if (budy.includes(`Bot`)) {
Ramdani.sendMessage(from, 'iya? Saya Bot, Ada Yang Bisa Saya Bantu?', text, {quoted: fakeitem})
                  }
if (budy.includes(`bot`)) {
Ramdani.sendMessage(from, 'iya? Saya Bot, Ada Yang Bisa Saya Bantu?', text, {quoted: fakeitem})
                  }
if (budy.includes(`Tes`)) {
Ramdani.sendMessage(from, 'Hmmm', text, {quoted: fakeitem})
                  }
}
if (budy.startsWith('x')){
try {
return Ramdani.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
freply(e)
}
}  

	
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'WhatsApp', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}

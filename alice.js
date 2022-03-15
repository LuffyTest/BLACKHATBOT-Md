/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let handler = async (m) => {
let duit = `Hello Honey My Name is Alice. How Can i Help You? 💞 

● ᴜᴘᴛɪᴍᴇ : %uptime
● sᴇʀᴠᴇʀ : ᴀᴢᴜʀᴇ `
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/89292e86386a9e55baf69.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '🍃 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼 🍃',
               url: 'https://www.instagram.com/alicewabot/'
             }

           },
               {
             callButton: {
               displayText: '🎐 𝙼𝙾𝙱𝙸𝙻𝙴 🎐',
               phoneNumber: '+94 77 451 9383'
             }
           },           
               {
             quickReplyButton: {
               displayText: '✨ 𝑀𝐸𝑁𝑈 ✨',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['alive']
handler.tags = ['info']
handler.command = /^ali(ce|ive)|hello$/i

module.exports = handler

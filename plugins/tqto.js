/**
* jangan dihapus/diganti ya kontol
* lu itu cuma make jadi jangan diapa apain ya bangsat
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fetch = require('node-fetch')
let handler = async (m, { usedPrefix}) => {
let tqto = `
*───「  BIG THANKS TO  」───*

Nurutomo: 
https://github.com/Nurutomo
Istikmal: 
https://github.com/BochilGaming
Ariffb: 
https://github.com/Ariffb25
Ilman: 
https://github.com/ilmanhdyt
Koleksibot: 
https://github.com/koleksibot
Irwan:
https://github.com/irwanx
NekelPeler:
https://github.com/nekelganss

\`\`\`${conn.user.name}\`\`\`
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
            hydratedTemplate: {
                locationMessage: { jpegThumbnail: await(await fetch('https://avatars.githubusercontent.com/u/98952894?s')).buffer() }, 
                hydratedContentText: tqto,
                hydratedFooterText: wm,
                hydratedButtons: [{
                  index: 0,
                   urlButton: {
                        displayText: `🎗 Telegram Group`,
                        url: `https://t.me/whatsappgang`
                    }
                }, {
                   quickReplyButton: {
                        displayText: `Menu`,
                        id: `${usedPrefix}menu`
                    },
                    selectedIndex: 1
                }]
            }
        }
    }), { userJid: m.participant || m.key.remoteJid, quoted: m });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|t(hanks)?to|tq(to)?)$/i

module.exports = handler

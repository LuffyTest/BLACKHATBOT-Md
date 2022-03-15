const {
    //default: makeWASocket,
    //useSingleFileAuthState,
    WAMessage,
    proto,
    generateWAMessageFromContent
  } = require('@adiwajshing/baileys-md')
let fetch = require('node-fetch')
let handler = async(m, { usedPrefix: _p, conn }) => {
let teks = `
*Privacy Policy,Terms and Conditions and Q & A of Bot*

━❰･Q & A･❱━*
🔹 Q : How to add Alice bot To to Your Group?
🔸 A : Send The Group Invite link to owners DM.
(type .owner to get owner\'s number)

🔹 Q : How Can I Deploy Alice Bot?
🔸 A : Sorry can't deploy alice wa bot.this is not a opensource project..
(but you can deploy Other bot..This Bot Is also Edited Version Of Other WAbot)

🔹 Q : Why Bot dosen\'t have a lot of commands?
🔸 A : Thisbot is under under developing so plz understand that..
(if you want add command type .report [your questions]



*━❰･Privacy Policy･❱━*

1. BOT will not record user chat history data.
2. BOT will not share user numbers.
3. BOT will not save media sent by users.
4. BOT will not misuse user data.
5. BOT owners have the right to view chat history data from users.
6. The BOT owner has the right to see the status of users.
7. BOT owners can view chat history, and media sent by users.

*━❰･Bot Rules･❱━*

1. Users are prohibited from calling or video calling bot numbers.
2. Users are prohibited from sending various bugs, virtexes, etc. to the bot number.
3. Users are expected not to spam in the use of bots.
4. Users are prohibited from adding bot numbers illegally, to add please contact the owner.
5. Users are expected not to abuse the bot features.
6. Users are prohibited from including bots in important groups (there are teachers, etc.).

*━❰･Bot Terms and Conditions･❱━*

1. The bot will leave the group when it's time to leave.
2. BOT can ban users unilaterally regardless of the wrong users or not.
3. BOT *will not be responsible for anything users do to the bot feature.*
4. BOT will impose penalties: block or ban on users who violate the rules.
5. BOT is responsible for fatal errors in programming and owner.

\`\`\`Alice Bot Multi-Device\`\`\`
`
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                locationMessage: { jpegThumbnail: await (await fetch(fla + `${namabot}`)).buffer()},
                hydratedContentText: teks.trim(),
                hydratedFooterText: wm,
                hydratedButtons: [{
                  index: 0,
                   urlButton: {
                        displayText: Telegram Group,
                        url: t.me/watsappgang
                    }
                },
                {
                   quickReplyButton: {
                        displayText: 'Menu',
                        id: `${_p}menu`
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
handler.help = ['snk']
handler.command = /^(snk|syarat|peraturan|rules)$/i
handler.tags = ['main']
module.exports = handler

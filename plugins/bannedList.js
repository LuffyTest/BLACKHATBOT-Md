const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let handler = async (m, { jid, conn, usedPrefix, command, isOwner }) => {
let fetch = require('node-fetch')
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let caption = `${readMore}
╭─「 Banned Chat 」
│✇ Total : ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
│• ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
│• ${isOwner ? '@' + jid.split`@`[0] : jid}
`.trim()).join('\n') : ''}
╰────

╭─「 Banned User 」
│✇ Total : ${users.length} User${users ? '\n' + users.map(([jid], i) => `
│• ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
│• ${isOwner ? '@' + jid.split`@`[0] : jid}
`.trim()).join('\n') : ''}
╰────
`.trim()
    conn.sendButtonLoc(m.chat, caption, wm, await(await fetch(fla + `${command}`)).buffer(), [[`Menu`, `${usedPrefix}menu`]], m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['bannedlist']
handler.tags = ['info']
handler.command = /^list?ban(ned)?|ban(ned)?list?|daftarban(ned)?$/i

handler.owner = false

module.exports = handler

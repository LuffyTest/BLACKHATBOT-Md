let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, isPrems, isOwner}) => {
    if (!args[0]) throw `where\'s the link?`
    let [_, code] = args[0].match(linkRegex) || []
    let user = db.data.users[m.sender]
    if (!code) throw 'Which link?'
    if (!(isPrems || isOwner)) {
        if (user.joincount === 1 ) throw `You have exceeded the token/limit of adding bots to the group!`
        user.joincount += 1
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, 'Joining group...', m).then(async() => {
            var jumlahHari = 86400000 * 0.1
            var now = new Date() * 1
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
                conn.reply(m.chat, `Successfully join the group ${res}\nBot will exit automatically after: ${msToDate(global.db.data.chats[res].expired - now)}.\nYour joincount token: ${user.joincount}/1`, m)
                this.reply(global.owner[0] + '@s.whatsapp.net', `@${m.sender.split`@`[0]} added ${conn.user.name} to ${res}, bot will exit in time: ${msToDate(global.db.data.chats[res].expired - now)}`, 0,  { contextInfo: { mentionedJid: [m.sender]}})
                await conn.sendButtonLoc(res, `${conn.user.name} is a whatsapp bot built with Nodejs, ${conn.user.name} invited by @${m.sender.split(`@`)[0]}\n\nType ${usedPrefix}menu to view command list\nBot will exit automatically after${msToDate(global.db.data.chats[res].expired - now)}`.trim(), wm, await(await fetch(img)).buffer(), [['Menu', `${usedPrefix}?`]], null, { contextInfo: { mentionedJid: [m.sender] } })
        })
    } else if (!isOwner) {
        if (users.joincount === 1) throw `You have exceeded the token/limit of adding bots to the group!`
        user.joincount += 1
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, 'Joining group...', m).then(async() => {
            var jumlahHari = 86400000 * 30
            var now = new Date() * 1
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
                conn.reply(m.chat, `Successfully join group ${res}\nBot will exit automatically after: ${msToDate(global.db.data.chats[res].expired - now)}.\nYour joincount token: ${user.joincount}/3`, m)
                this.reply(global.owner[0] + '@s.whatsapp.net', `@${m.sender.split`@`[0]} have added ${conn.user.name} to ${res}, bot will exit in time: ${msToDate(global.db.data.chats[res].expired - now)}`, 0,  { contextInfo: { mentionedJid: [m.sender]}})
                await conn.sendButtonLoc(res, `${conn.user.name} is a whatsapp bot built with Nodejs, ${conn.user.name} invited by @${m.sender.split(`@`)[0]}\n\nType ${usedPrefix}menu to view command list\nBot will exit automatically after ${msToDate(global.db.data.chats[res].expired - now)}`.trim(), wm, await(await fetch(img)).buffer(), [['Menu', `${usedPrefix}?`]], null, { contextInfo: { mentionedJid: [m.sender] } })
        })
    } else if (isOwner) {
        if (!args[1]) throw `Enter the correct format! format: ${usedPrefix}join <link> <number of days>`
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, 'Joining group...', m).then(async() => { 
            var jumlahHari = 86400000 * args[1]
            var now = new Date() * 1
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
            await conn.reply(m.chat, `Successfully join group ${res}\nBot will exit automatically after: ${msToDate(global.db.data.chats[res].expired - now)}`, m)
            await conn.sendButtonLoc(res, `${conn.user.name} is a whatsapp bot built with Nodejs, ${conn.user.name} invited by @${m.sender.split(`@`)[0]}\n\nType ${usedPrefix}menu to view command list\nBot will exit automatically after  ${msToDate(global.db.data.chats[res].expired - now)}`.trim(), wm, await(await fetch(img)).buffer(), [['Menu', `${usedPrefix}?`]], null, { contextInfo: { mentionedJid: [m.sender] } })
        })
    }
}
handler.help = ['join <link> <time>']
handler.tags = ['owner']
handler.owner = true
handler.command = /^(join)$/i

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}

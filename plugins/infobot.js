let handler = async (m, { conn, command, usedPrefix, text }) => {
  let fetch = require('node-fetch')
  let _uptime = process.uptime() * 1000
  let a = require('moment-timezone').tz('Asia/Colombo').format('HH:mm:ss') 
  let d = new Date(new Date + 3600000)
  let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  let runtime = clockString(_uptime)
  let usergakdaftar = Object.keys(global.db.data.users).length
  let userdaftar = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let infonyacok = `
╭──「 ${conn.user.name} ──࿐
│✇ Library : *Baileys-MD*
│✇ Language : *Javascript*
│✇ Runtime : *${runtime}*
│✇ Prefix : *Multi Prefix 「 ${usedPrefix} 」*
│✇ Mode : *${global.opts['self'] ? 'Self' : 'Public'}*
│✇ User : *${usergakdaftar}*
│✇ Register : *${userdaftar}*
│✇ Database : *MongoDB*
│✇ TG Group : *t.me/WhatsappGang*
╰─────────⳹
`.trim()
var as = `Date : ${week}, ${date}\nTime : ${a} (WIB)`

  await conn.sendButtonLoc(m.chat, infonyacok, as, await(await fetch(fla + `${command}`)).buffer(), [[`Menu`,  `${usedPrefix}menu`]], m)

}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(info(bot)?)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}


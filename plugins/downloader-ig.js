const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. where's the url?\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/CTTcc4qFYau/?utm_medium=copy_link`
  if (/^https?:\/\/.*(m.instagram.com||www.instagram.com|instagram.com)/i.test(m.text)) throw `only support url from ig and web only _please check url again_`

  let res = await fetch(API('xteam', '/dl/igv2', { url: args[0] }, 'APIKEY'))
  if (!res.ok) return m.reply(eror)
  let json = await res.json()
  await m.reply(wait)
  await conn.sendFile(m.chat, json.result.url, '', '© Alice 🥀', m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig|instagram)$/i

handler.premium = true

module.exports = handler

let limit = 50
let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate')
let handler = async(m, { conn, args, isPrems, isOwner }) => {
    if (!args || !args[0]) return conn.reply(m.chat, 'Uhm... where\'s the url?', m)
    let chat = global.db.data.chats[m.chat]
    let server = (args[1] || servers[0]).toLowerCase()
    let { dl_link, thumb, title, filesize, filesizeF } = await ytv(args[0], servers.includes(server) ? server : servers[0])
    let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
    conn.reply(isLimit ? `File Size: ${filesizeF}\nFile size above ${limit} MB, download it yourself..🥱: ${dl_link}` : global.wait, m)
    let _thumb = {}
    try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } } catch (e) {}
    //m.reply(wait)
    if (!isLimit) await sock.sendMessage(m.chat, { document: { url: dl_link }, mimetype: 'video/mp4', fileName: title + `.mp4`}, {quoted: m})
//conn.sendFile(m.chat, dl_link, title + '.mp4', `
//*Title:* ${title}
//*Filesize:* ${filesizeF}
//   `.trim(), m, false, { thumbnail: Buffer.alloc(0), mimetype: 'video/mp4' })
}
handler.help = ['ytmp4 <query>']
handler.tags = ['downloader']
handler.command = /^(ytv|mp4)?$/i

module.exports = handler

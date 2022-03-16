let handler = async (m, {conn}) => {
     conn.reply(m.chat, `☕ Alice is a not open source project..💞💞 `, m) 
}
handler.help = ['sourcecode']
handler.tags = ['jadibot']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler



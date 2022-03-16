let handler = async (m, { conn }) => {
    conn.reply(m.chat, `*Link Group:*\n\nhttps://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat), m)
  }
  handler.help = ['grouplink']
  handler.tags = ['group']
  handler.command = /^(grouplink)?$/i
  
  handler.group = true
  handler.botAdmin = true
  
  module.exports = handler

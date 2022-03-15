let fetch = require('node-fetch')

let handler = m => m

handler.before = async function (m) {
    let id = m.chat
    this.skata = this.skata ? this.skata : {}
    if (/nyerah/i.test(m.text) && (id in this.skata)) {
        delete conn.skata[id]
        return await this.sendButton(m.chat, `Restart?`, wm, 'Connect Words', '.skata', m)
    }
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/(Mulai|Lanjut) :/i.test(m.quoted.text)) return !0
    if (!(id in this.skata)) return await this.sendButton(m.chat, `Restart?`, wm, 'Connect Words', '.skata', m)
    if (m.quoted.id == this.skata[id][0].id) {
        let answerF = (m.text.toLowerCase().split` `[0]).trim()
        let res = await fetch(API('amel', '/ceksambungkata', { kata: m.text.toLowerCase().split` `[0] }, 'apikey'))
        if (!res.ok) throw eror
        let json = await res.json()
        if (!answerF.startsWith(this.filter(this.skata[id][1]))) {
            return m.reply(`👎🏻 *Incorrect!*\nAnswers must start with the word *${this.filter(this.skata[id][1]).toUpperCase()}*`)
        } else if (!json.status) {
            return m.reply(`👎🏻 *Invalid!*\nWord *${m.text.toUpperCase()}* Invalid!`)
        } else if (this.skata[id][1] == answerF) {
            return m.reply(`👎🏻 *Wrong!*\nYour answer is the same as the question, please find another word!`)
        } else if (this.skata[id][2].includes(answerF)) {
            return m.reply(`👎🏻 *Incorrect!*\nThe word *${m.text.toUpperCase()}* already used!`)
        }
        db.data.users[m.sender].exp += 100
        this.skata[id][2].push(answerF)
        this.skata[id] = [
            await this.reply(m.chat, 'Carryon : *' + answerF.toUpperCase() + '*\n\n*' + this.filter(answerF).toUpperCase() + '... ?*\n\n*reply to this message to answer!*', m),
            answerF,
            this.skata[id][2]
        ]
        return !0
    }
}

module.exports = handler

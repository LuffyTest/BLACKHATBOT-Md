let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.bacot)}`, m)
}
handler.help = ['bacot']
handler.tags = ['quotes']
handler.command = /^(bacot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bacot = [
'Do you like coffee? I do like it. Do you know the reason? Coffee is like you, it\'s bitter but it makes you want to keep craving for it.',
'Salary is like an ex, isn\'t it? Usually only passes for a moment.',
'Pak Haji said, guys who don\'t want to go to Friday prayers are told to wear a skirt.',
'Do you know your ex? The ex is like a payday, it\'s normal to ride past dong in our lives.',
'I like you, you like him, but he sadly doesn\'t like you. Awww funny huh? Love as complicated as this.',
'Google is great huh? But unfortunately as great as Google can\'t find our soul mate.',
'Too often hold the eyebrow pencil can make the eye go blind, if it is plugged into the eye.',
'I worked hard because I realized that money doesn\'t have legs to walk into my pocket.',
'If you can\'t convince and amaze people with your intelligence, confuse them with your stupidity.',
'Tired of working, even more tired when idle.',
'We live in a time when we get angry when we are wrong, when we are right, we are called tumben.',
'No boyfriend shoulder? Don\'t worry, there\'s still a shoulder to lean on.',
'It\'s natural to love yourself, it\'s not natural to love your father.',
'He said he couldn\'t lie. Yes, the eye can only see.',
'Honey in your right hand, poison in your left hand, your soul mate remains in God\'s hands.',
'Cheating doesnt happen because there is an intention, cheating happens because your boyfriend is still selling.',
'Netizens, if the thumb exercise on the cellphone doesn\'t use cooling, it\'s no wonder the comments make it hot.',
'The match is not going anywhere, but the rivals are everywhere.',
'The feeling I was wrong kept in your eyes. Then tomorrow I\'ll move to your nose.',
'Singles don\'t need to be ashamed, being single doesn\'t mean they don\'t sell, but no one wants to.',
'If your prayer has not been answered then be patient, remember that it is not only you who pray!',
'Still hoping and continuing to hope that over time I will be the champion of hope.',
'I don\'t know what to type',
]

let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*There are no absences in this group!*_\n\n*${usedPrefix}startabsence* - to start absent`
    delete conn.absen[id]
    m.reply(`Done!`)
}
handler.help = ['deleteabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
module.exports = handler

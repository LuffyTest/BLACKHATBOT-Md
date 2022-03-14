global.owner = ['94711392491'] // Put your number here
global.mods = ['94711392491'] // Want some help?
global.prems = ['94711392491'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  amel: 'https://melcanz.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://myselfff.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://melcanz.com': 'obefhhqP',
  'https://api.xteam.xyz': '86399e0f56a8347f',
  'https://api.lolhuman.xyz': 'eafcf901640d1c599ae71519',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://myselfff.herokuapp.com': '/docs',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

//===========Sticker WM============//
global.packname = '© Alice-Md 🥀'
global.author = 'WaBot'

global.wm = '© Alice-Md 🥀'
global.wait = 'Please Wait..'
global.eror = '*sorry server is busy*'

//========Url 1 Template Buttons=========//
global.ig = 'Instagram Owner'
global.lig = 'https://www.instagram.com/alicewabot/'

//========Url 2 Template Buttons=========//
global.dtu2 = 'Group Bot WhatsApp'
global.urlnya2 = 'https://chat.whatsapp.com/'

//=============callButtons=============//
global.dtc = 'Thanks For Using Me'
global.urlnya2 = 'https://www.instagram.com/alicewabot/'


global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

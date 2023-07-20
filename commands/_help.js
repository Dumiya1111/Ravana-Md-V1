/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Ravana-Md
 * @author : dayanisuru <https://github.com/dayanisuru>
 * @description : Ravana,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Ravana = require('../lib/commands')

    //---------------------------------------------------------------------------
Ravana.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
            react: "✨",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭───《 ` + fancytext(Config.split('𝙍𝘼𝙑𝘼𝙉𝘼')[0], 58) + ` 》────⊷\n`
                str +=
                    '```' + `│ ╭──────────────◆
│ │ User:- ${citel.pushName}
│ │ Theme:- ${tlang().title}
│ │ Prefix:- [ ${prefix} ]
│ │ Owner:- {𝙆𝙄𝙉𝙂 𝙄𝙎𝙐𝙍𝙐}
│ │ 
│ │ Users:- ${total}
│ │ 
│ │
│ ╰──────────────◆
╰───────────────⊷
🌸🌼
᳆⃞⃚🎓❉⃟࿔ꦿ⃝⃘̉̉̉̉̉̉𝙍𝘼𝙑𝘼𝙉𝘼 𝙈𝘿 𝙢𝙤𝙩 🔥ᴮᴼᵀ⚖۝⃟̥̩̩̩̥̩̥͚̮🇦🇴
* ♡꧂✺⃘̶̶۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟̊̊̊̊̊̊͜͡✮ᰳᰳᰳᰳᰳᰳ▬▭ᘡ⃠⃤̭͍͍͍͍͍̭͍͍͍͍͍͍̬̽̽̽̽̌́̎̎̎ͦͦꦿ̥̯̯͚͚̊ࣧࣧ̑̆ᘡ⃠⃤̭͍͍͍͍͍̭͍͍͍͍͍͍̬̽̽̽̽̌́̎̎̎ͦͦꦿ.**KING ISURU .*

:     .ılı.——Volume——.ılı.
:    ▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █
: Min- – – – – – – – – -●Max

✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩

┈┈╭━╱▔▔▔▔╲━╮┈┈┈ɪ
┈┈╰╱╭▅╮╭▅╮╲╯┈┈┈ꜱ
╳┈┈▏╰┈▅▅┈╯▕┈┈┈┈ᴡ
┈┈┈╲┈╰━━╯┈╱┈┈╳┈ᴀ
┈┈┈╱╱▔╲╱▔╲╲┈┈┈┈ᴋ
┈╭━╮▔▏┊┊▕▔╭━╮┈╳ɪ
┈┃┊┣▔╲┊┊╱▔┫┊┃┈┈ɴ
┈╰━━━━╲╱━━━━╯┈╳ɢ
  ᴾᵒʷᵉʳᵈ ᴮʸ king isuru
  
  ✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩

❉
*Hey guys* 😅✊💦
☠🚫 *I m Live guys......* 🚫☠
‼️☠‼️ *~මනෝවිකාර කොල්ලෝ කෙල්ලො ටික~* මෙ පැත්තට සෙට් වෙලා ආතල් එකේ සින්දුවක් බාගෙන වීඩීයෝ එකක් බාගෙන සැපේ ඉමුනේ ඒනන්😅✊💦⭕❌...බේසික් බොට් කෙනෙක් ඉන්නවා ගෲප් එකේ... ☠ *".𝙢𝙚𝙣𝙪 * ☠ කියලා ටයිප් කරන්න...🚫☠🚫
😈🔥🔥🔥🔥🔥🔥🔥🔥😈

🚫 *වලි බෑ*
🚫 *ස්ටීකර් බෑ*
🚫 *වෙනත් link බෑ*

😈🔥🔥🔥🔥🔥🔥🔥🔥😈
☠🚫


 ```💢❗️⚜️❗️💢ඩිස්ක්‍රිප්ශන් එකේ සඳහන්🔱කිසියම් හෝ වරදක් සිදුවීද⭕️💢⭕️
පෙර දැනුම්දීමකින් තොරව⚠️‼️⚠️ඔබව ඉවත්කරනු ලැබේ...❗️️``️`


😅✊💦😈
😊😊😊😊😊😊😊😊😊😊😊😊😊
‼️🚫☠🚫‼️ඒ වගේම ගෲප් එකේ ලින්ක් එක පල්ලේහා තියෙනවා‼️☠🚫☠‼️ශෙයා කරලා යාලුවන්වත් සෙට් කරගන්න....⛔😌❌😌⛔
☢️☠☢️☠️☢️☠️☢️☠️☢️
*~සැ.යු:ඇඩ්මින් ඉල්ලා අමනාප නොවන්න~*
☠‼️☠🚫☠‼️☠
👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻

📌️⁣ඔබට අවශ්‍ය නම් group එකේ ඉල්ලීමට නොහැකි දෙයක් පෞද්ගලිකව Bot ගෙන් ලබා ගන්න.

http://Wa.me/+94776312185
   
📌️GROUP link  යාලුවන්න යවලා ඇඩ් කර ගන්න.
✨️.https:https://chat.whatsapp.com/JpTSogcUnpTHzpxyMWdeVY.

✨️.https:https://chat.whatsapp.com/JpTSogcUnpTHzpxyMWdeVY.

✨️.https:https://chat.whatsapp.com/JpTSogcUnpTHzpxyMWdeVY.

I'm online now....🌸🤗❤

*Thanx for use my bot*💞✨️* 𝙧𝙖𝙫𝙖𝙣𝙖.*\n
` + '```'
                for (const category in cmds) 
                {
                   str += `╭────❏ *${tiny(category)}* ❏\n` ;
                   if(text.toLowerCase() == category.toLowerCase()){ str = `╭─────❏ *${tiny(category)}* ❏\n` ;      
                        for (const plugins of cmds[category]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                        str += `╰━━━━━━━━━━━━━──⊷\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[category]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                         str += `╰━━━━━━━━━━━━━━──⊷\n`  ; 
                   }
  
                }
                str+= `*⭐️Type:* _${prefix}help cmd_ name to know more about specific command.\n*Eg:* _${prefix}help attp_\n*Made with ❤️ in Nodejs* `
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
Ravana.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙━━──⊷`
            str += `
┃ ⛥╭──────────────      
┃ ⛥│ User: ${citel.pushName}
┃ ⛥│ Theme: ${tlang().title}
┃ ⛥│ Prefix: ${prefix}
┃ ⛥│ Owner: ${Config.ownername}
┃ ⛥│ Commands: ${commands.length}
┃ ⛥│ Uptime: ${runtime(process.uptime())}
┃ ⛥│ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃ ⛥│  
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷\n`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str +=       `╭ ${i+1} *${fancytext(commands[i].pattern,1)}*\n` 
     if(commands[i].desc=undefined) commands[i].desc=""
     str += `╰➛ ${fancytext(commands[i].desc,1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Ravana.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "💜",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Ravana.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})

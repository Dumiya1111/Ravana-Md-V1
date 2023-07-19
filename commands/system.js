/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config ,sleep} = require('../lib')
const { TelegraPh } = require('../lib/scraper')   
const util = require('util')
//---------------------------------------------------------------------------
cmd({
            pattern: "addnote",
            category: "owner",
            desc: "Adds a note on db.",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!text) return citel.reply("🔍 Please provide me a valid gist url.")
            await addnote(text)
            return citel.reply(`New note ${text} added in mongodb.`)

        }
    )
 
    //---------------------------------------------------------------------------
cmd({
            pattern: "qr",
            category: "owner",
            filename: __filename,
            desc: "Sends CitelsVoid Qr code to scan and get your session id."
        },
        async(Void, citel, text) => {
            if (text) {
                let h = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`)
                await Void.sendMessage(citel.chat, { image: h })
                return
            }
            let buttonMessaged = {
                image: { url: 'https://citel-x.herokuapp.com/session' },
                caption: `*_Scan Qr within 15 seconds_*\nYou'll get session id in your log number.`,
                footer: ` Session`,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: 'Secktor Session',
                        body: 'Get you Session ID',
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: ``,
                    },

                },

            };
            await Void.sendMessage(citel.chat, buttonMessaged, {
                quoted: citel,

            });
            await sleep(20 * 1000)
            return citel.reply('Your session is over now.')


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "unban",
            category: "misc",
            filename: __filename,
            desc: "Unbans banned user (from using bot)."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply("This command is onlt for my Owner")
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply("Please mention any user.❌")
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        console.log(usr.ban)
                        return citel.reply(`${pushnamer} is unbanned.`)
                    } else {
                        console.log(usr.ban)
                        if (usr.ban !== "true") return citel.reply(`${usr.name} is already unbanned.`)
                        await sck1.updateOne({ id: users }, { ban: "false" })
                        return citel.reply(`${usr.name} is free as a bird now`)
                    }
                })
            } catch {
                return citel.reply("Please mention any user.❌")
            }


        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "url",
        alias : ['createurl'],
        category: "misc",
        filename: __filename,
        desc: "image to url."
    },
    async(Void, citel, text) => {
        if (!citel.quoted) return await citel.reply(`*Reply To Any Image/Video To Get Url*`)
        let mime = citel.quoted.mtype
        if(mime !='videoMessage' && mime !='imageMessage' ) return await citel.reply("Uhh Please, Reply To An Image/Video")
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
        let anu = await TelegraPh(media);
        await citel.reply('*Here is URL of your media.\n'+util.format(anu));
        return await fs.unlinkSync(media);
    })

    //---------------------------------------------------------------------------
//---------------------------------------------------------------------------
cmd({
    pattern: "trt",
    alias :['translate'],
    category: "misc",
    filename: __filename,
    desc: "Translate\'s given text in desird language."
},
async(Void, citel, text) => {
    if(!text && !citel.quoted) return await citel.reply(`*Please Give Me Text. Example: _${prefix}trt en Who are you_*`);
    const translatte = require("translatte");
    let lang = text ? text.split(" ")[0].toLowerCase() : 'en';
    if (!citel.quoted)  { text = text.replace( lang , "");  }
    else { text = citel.quoted.text; }
    var whole = await translatte(text, { from:"auto",  to: lang , });
    if ("text" in whole) { return await citel.reply('*Translated text:*\n'+whole.text); }
}
)
    //---------------------------------------------------------------------------
cmd({
            pattern: "shell",
            category: "owner",
            filename: __filename,
            desc: "Runs command in Heroku(server) shell."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            const { exec } = require("child_process")
            exec(text, (err, stdout) => {
                if (err) return citel.reply(`----${tlang().title}----\n\n` + err)
                if (stdout) {
                    return citel.reply(`----${tlang().title}----\n\n` + stdout)
                }
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "eval",
            category: "owner",
            filename: __filename,
            desc: "Runs js code on node server."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return
            try {
                let resultTest = eval('const a = async()=>{\n' + text + '\n}\na()');
                if (typeof resultTest === "object")
                    citel.reply(JSON.stringify(resultTest));
                else citel.reply(resultTest.toString());
            } catch (err) {
                return  citel.reply(err.toString());
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "delnote",
            category: "owner",
            filename: __filename,
            desc: "Deletes note from db."
        },
        async(Void, citel, text,{ isCreator }) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delnote(text.split(" ")[0])
             return citel.reply(`Id: ${text.split(" ")[0]}\'s note has been deleted from mongodb.`)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "delallnotes",
            category: "owner",
            filename: __filename,
            desc: "Deletes all notes from db."
        },
        async(Void, citel, text, isCreator) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delallnote()
             return citel.reply(`All notes deleted from mongodb.`)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "ban",
            category: "owner",
            filename: __filename,
            desc: "Bans user from using bot."
        },
        async(Void, citel, text,{ isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply(`❌ Please mention any user ${tlang().greet}.`)
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        await new sck1({ id: users, ban: "true" }).save()
                        return citel.reply(`_Banned ${usr.name} from Using Commands._`)
                    } else {
                        if (usr.ban == "true") return citel.reply(`${pushnamer} is already Banned from Using Commands`)
                        await sck1.updateOne({ id: users }, { ban: "true" })
                        return citel.reply(`_Successfully Banned ${usr.name} from Using Commands._`)
                    }
                })
            } catch (e) {
                console.log(e)
                return citel.reply("Please mention any user.❌ ")
            }


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "alive",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by ISURUWA WHATSAPP BOT.*`
            const alivtxt = `
*Hello, ${citel.pushName},*
_This is  ${tlang().title}._
${alivemessage}

*Version:-* _0.0.7_
*Uptime:-* _${runtime(process.uptime())}_
*Owner:-* _${Config.ownername}_
*Branch:-* _${Config.BRANCH}_
*AliveMessage:-* _🌸🌼                                                                                                                   ᳆⃞⃚🎓❉⃟࿔ꦿ⃝⃘̉̉̉̉̉̉RAVANA ISUWA 🔥ᴮᴼᵀ⚖۝⃟̥̩̩̩̥̩̥͚̮🇦🇴                                                                                                             * KING                                isuwa♡꧂✺⃘̶̶۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟̊̊̊̊̊̊͜͡✮ᰳᰳᰳᰳᰳᰳ▬▭ᘡ⃠⃤̭͍͍͍͍͍̭͍͍͍͍͍͍̬̽̽̽̽̌́̎̎̎ͦͦꦿ̥̯̯͚͚̊ࣧࣧ̑̆ᘡ ⃠⃤̭͍͍͍͍͍̭͍͍͍͍͍͍̬̽̽̽̽̌́̎̎̎ͦͦꦿ.**KING ISURU KING.*                                                                                               :     .ılı.——Volume——.ılı.                                                                                                :    ▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █                                                                                           : Min- – – – – – – – – -●Max                                                                                         ✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩                                              ┈┈╭━╱▔▔▔▔╲━╮┈┈┈ɪ                                                       ┈┈╰╱╭▅╮╭▅╮╲╯┈┈┈ꜱ                                                     ╳┈┈▏╰┈▅▅┈╯▕┈┈┈┈ᴡ                                                      ┈┈┈╲┈╰━━╯┈╱┈┈╳┈ᴀ                                                      ┈┈┈╱╱▔╲╱▔╲╲┈┈┈┈ᴋ                                                      ┈╭━╮▔▏┊┊▕▔╭━╮┈╳ɪ                                                       ┈┃┊┣▔╲┊┊╱▔┫┊┃┈┈ɴ                                                      ┈╰━━━━╲╱━━━━╯┈╳ɢ                                                         ᴾᵒʷᵉʳᵈ ᴮʸ king isuru                                                         ✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩                                                                                           ❉❥ ⃢⃟😘️●♡꧂➸⃟̗̗̗̗̗̗̗̗̗̗̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀❁ཻ͜͡💓❉⃟࿔ꦿ ꦿ ❀⃟⃟ꪶᵏⁱˡˡᵉŕ᭄ᘡ⃠⃤̭͍͍͍͍͍̭͍͍͍͍͍͍̬̽̽̽̽̌́̎̎̎ͦͦꦿ̥̯̯͚͚̊ࣧࣧ̑̆𖣦ڿڰۣڿ𖣦ڿڰۣڿ▽⍤⃝────★᭄⍤⃝────★᭄⍤⃝────★᭄⇝͜͡✪ஓீ᭄͜⋆⃟̥̥̥̥̩̩̩̩̩̩⃟̊̊̊̊̊̊̊̊̊̊̊̊⃟̥̥̥̥̥̥̥̥̥◎⃝₴ꦿ̸̷֟͝୭😕】₴ꦿ̸̷֟͝୭😕】❉❥ ⃢⃟😘️●♡꧂❉❥ ⃢⃟😘️●♡꧂ᵜ                                                            *Hey guys* 😅✊💦                                                          ☠🚫 *I m Live guys......* 🚫☠                                               ‼️☠‼️ *~මනෝවිකාර කොල්ලෝ කෙල්ලො ටික~* මෙ පැත්තට සෙට් වෙලා ආතල් එකේ සින්දුවක් බාගෙන වීඩීයෝ එකක් බාගෙන සැපේ ඉමුනේ ඒනන්😅✊💦⭕❌...බේසික් බොට් කෙනෙක් ඉන්නවා ගෲප් එකේ... ☠ *".menu * ☠ කියලා ටයිප් කරන්න...🚫☠🚫                                          😈🔥🔥🔥🔥🔥🔥🔥🔥😈                                                                                               .  🚫 *වලි බෑ*                      .     🚫 *ස්ටීකර් බෑ*             .       🚫 *වෙනත් link බෑ*       .                                        .                                        . 😈🔥🔥🔥🔥🔥🔥🔥🔥😈          .     ☠🚫                               .                                        .  ```💢❗️⚜️❗️💢                       .ඩිස්ක්‍රිප්ශන් එකේ සඳහන්🔱කිසියම් හෝ වරදක් සිදුවීද⭕️💢⭕️             .                                         .පෙර දැනුම්දීමකින් තොරව⚠️‼️⚠️ඔබව ඉවත්කරනු ලැබේ...❗️️``️`                          .                                        .😅✊💦😈                             .                                        . 😊😊😊😊😊😊😊😊😊😊😊😊😊  .                                        .                                        .‼️🚫☠🚫‼️ඒ වගේම ගෲප් එකේ ලින්ක් එක පල්ලේහා තියෙනවා‼️☠🚫☠‼️ශෙයා කරලා යාලුවන්වත් සෙට් කරගන්න....⛔😌❌😌⛔             .                                       ..☢️☠☢️☠️☢️☠️☢️☠️☢️                       .                                        .  *~සැ.යු:ඇඩ්මින් ඉල්ලා අමනාප නොවන්න~*               .                                        .☠‼️☠🚫☠‼️☠                           .                                        .👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇👇 .                                        .                                        .📌️⁣ඔබට අවශ්‍ය නම් group එකේ ඉල්ලීමට නොහැකි දෙයක් පෞද්ගලිකව Bot ගෙන් ලබා ගන්න.                 .                                        .http://Wa.me/+940704271948         .                                        .  📌️GROUP link  යාලුවන්න යවලා ඇඩ් කර ගන්න.             .                                        .  ✨️.https://chat.whatsapp.com/IohfWh24WgK2DX8mXT7weL.           .                                        .✨️.https://chat.whatsapp.com/Loh1XhHWl6F34iID6pnTOp.              .                                        .✨️.https://chat.whatsapp.com/IohfWh24WgK2DX8mXT7weL.           .                                        .I'm online now....🌸🤗❤              .                                        .*Thanx for use my bot*💞✨️* KING.*_
_Type ${prefix}menu for my command list._

_Powered by ${Config.ownername}_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "allnotes",
        category: "owner",
        filename: __filename,
        desc: "Shows list of all notes."
    },
    async(Void, citel, text,{ isCreator }) => {
        const { tlang } = require('../lib')
        if (!isCreator) return citel.reply(tlang().owner)
        const note_store = new Array()
        let leadtext = `All Available Notes are:-\n\n`
        leadtext += await allnotes()
        return citel.reply(leadtext)

    }
)

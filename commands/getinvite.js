const Discord = require('discord.js')
module.exports = {
    name : 'getinvite',
    description: 'f',
    async execute(message,args){
        const user = message.mentions.users.first()
        if(!user.bot) return message.reply('Thats not a bot')
        else{
            let embed = new Discord.MessageEmbed()
            .setTitle(`Invite link for ${user.username}`)
            .setColor('BLUE')
            .setDescription(`Link: https://discord.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=2147483647`)
            message.channel.send(embed)
        }
    }
}
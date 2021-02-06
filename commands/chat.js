const fetch = require('node-fetch')
module.exports = {
    name : 'chat',
    description: 'bruh',
    async execute(message,args){
        let mesg = args.join(" ")
        if(!mesg) return message.channel.send('Please say some stuff after -chat')
    }
}
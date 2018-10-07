const Discord = require("discord.js");
const client = new Discord.Client();
const request = require('request');

var prefix = "/";

    var hoje = new Date();
            var dd = hoje.getDate();
            var mm = hoje.getMonth()+1;
            var hh = hoje.getHours()-3;
            var min = hoje.getMinutes();
            var ss = hoje.getSeconds();
            var yyyy = hoje.getFullYear();
            if(dd<10){
                dd = '0'+dd;
            }
            if (mm<10) {
                mm = '0'+mm;
            }
            if (hh<10){
        if(hh<01){
            hh = 3+hh;
        }
                hh = '0'+hh;
            }
            if (min<10){
                min = '0'+min;
            }
            var hoje = dd+ '/' +mm+ '/' +yyyy + ' às ' + hh + ':' + min;
        var hojee = dd+ '/' +mm+ '/' +yyyy;

client.on("ready", () => {
    
     client.channels.get('480125622174351392').send(':white_check_mark: ' + hoje).then(msg => {
        msg.delete(60000)
    })
      
     
    const activities = ['https://gamersboard.com.br/', 'https://gamersboard.com.br/']
    let counter = 0
    setInterval(function() {
        client.user.setGame(activities[counter], "https://twitch.tv/gamersboard")
        counter+= 1
        counter %= activities.length
    }, 10000)
});

client.on('message', (message) => {
    
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    
    if(message.channel.type === 'dm') return;
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if(msg.startsWith(prefix + 'SUGERIR')){

                if(!message.member.roles.find("name", 'Muted')) return message.channel.sendMessage(":x: | Você não está mutado.").then(msg => {
                msg.delete(10000)
            })
        let sugerindo = args.slice(0).join(" ");

        const erd = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setColor('3498db')
            .setTimestamp()
            .setTitle('📝 Sugestão')
            .setDescription("*Faça sugestões para a Gamers Board com o comando*\n\n:bulb: **| /sugerir ``<sugestão>``.**")

        if(!sugerindo) return message.channel.send(erd).then(msg => {
            msg.react('💡');
        });

        const embed = new Discord.RichEmbed()
            .setThumbnail('https://cdn.discordapp.com/icons/173639611648573441/cf8763951089898365e532f80b82076d.png?size=2048')
            .setTitle(':hammer: Sugestão')
            .setColor('3498db')
            .setDescription('Para enviar uma sugestão, utilize o comando: /sugerir (sugestão).')
            .addField('📝 | Sugestão:', sugerindo )
            .addField('<:rotating_light:452700782001913867> | Autor:', message.author, true)
        client.channels.get('498247273927540746').send(embed).then(msg => {
            msg.react('👍');
            msg.react('👎');
        });

        message.reply(' Sua sugestão foi enviada com sucesso, é de extrema importancia que você mande sugestões para a GamersBoard, muito obrigado').then(msg => {
        });
    }
   
       if(msg.startsWith(prefix + 'AVISO')){
        
	    if(!message.member.roles.find("name", 'Moderadores')) return message.channel.sendMessage(":x: | Você não possui permissão").then(msg => {
        })
              let args1 = message.content.slice(prefix.length + 5).split(";");
            let embed = new Discord.RichEmbed()
                .setFooter(hoje)
                .setTitle(`:loudspeaker: | GamersBoard - Anúncio`)
                .setDescription(args1[0])
                .addField('Atenciosamente,', message.author.username)
                .setColor('3498db')
    
        client.channels.get('488098325552300035').send({embed});
        }
    
    if(msg.startsWith(prefix + 'CHANGELOG')){
        
                if(!message.member.roles.find("name", 'Teste')) return message.channel.sendMessage(":x: | Você não possui permissão").then(msg => {
                msg.delete(10000)
            })
                  let args1 = message.content.slice(prefix.length + 9);
                let embed = new Discord.RichEmbed()
                    .setTitle(`:pencil: | GamersBoard - Atualização `)
                    .setDescription(`${args1}`)
                .setColor('3498db')
                .setFooter(message.author.username, message.author.avatarURL)
	         message.channel.send(embed);
        
          
        }
    
    if(msg.startsWith(prefix + 'DENUNCIAR')){


        let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        let motivo = args.slice(1).join(" ").split('-');

        const erd = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setColor('3498db')
            .setTimestamp()
            .setTitle('🛡 Denúncias')
            .setDescription("*Denúnciar membros.*\n\n:bulb: **| /denunciar ``<@membro>`` ``<motivo>`` - ``<prova>``**")

        if(!user) return message.channel.send(erd).then(msg => {
            msg.react('🛡');
        });

        if(!motivo) return message.channel.send(erd).then(msg => {
            msg.react('🛡');
        });

        if(!motivo[1]) return message.channel.send(erd).then(msg => {
            msg.react('🛡');
        });

        const reportado = new Discord.RichEmbed()
            .setColor('3498db')
            .setTitle('🛡 Denúncia')
            .setDescription('Nova denúncia criada.')
            .addField('<:e_mail:457899299213279243> | Acusado:', user, true)
            .addField('<:flag_pm:457899299376726016> | Autor:', message.author, true)
            .addField('💬 | Canal:', message.channel, true)
            .addField('📝 | Motivo:', motivo[0], true)
            .addField('🖼 | Prova:', motivo[1], true)
            .setThumbnail(client.user.avatarURL)
        client.channels.get('488872840356036608').send(reportado).then(msg => {
            msg.react('✅');
            msg.react('❌');
        });

        message.reply('🛡 | Sua denúncia foi enviada com sucesso, agradecemos pela sua denúncia!').then(msg => {
        });

    }

    if(msg.startsWith(prefix + 'AJUDA') || msg.startsWith(prefix + 'TICKET')){

        let motivo = args.slice(0).join(" ");

        const mto = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setTitle('🎟 | Ticket')
            .setDescription("*Use-o para tirar suas dúvidas.*\n\n:information_desk_person: | **/ajuda** ``<sua dúvida>``\n\n⚖ | **Alternativas:** \n/ticket")
            .setColor('3498db')
            .setFooter('Ajuda', client.user.avatarURL)

        if(!motivo) return message.channel.send(mto).then(msg => {
        })

        const ert = new Discord.RichEmbed()
            .setTitle(':warning: Opa... Erros foram encontrados!')
            .addField(':no_entry_sign: | Erro encontrado:', "Grupo ``Teste`` não foi encontrado porfavor crie-o /")
            .setColor('3498db')
            .setTimestamp()
            .setFooter('Erro: Ticket', client.user.avatarURL)

        if(!message.guild.roles.exists("name", "Teste")) return client.channels.get('474352141985775628').send(ert);

        if(message.guild.channels.exists("name", "ticket-" + message.author.username)) return message.reply(':x: | Você já possui um ticket aberto...  ').then(msg => {
            msg.delete(10000);
        })
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {

            let role = message.guild.roles.find("name", "Teste");
            let role2 = message.guild.roles.find("name", "@everyone");

            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });

            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });

            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });

            message.reply(`📂| Seu ticket foi criado com sucesso ! Por favor aguarde até alguem atende-lo, obrigado.\n\n📝 | Acesse seu ticket: <#${c.id}>`).then(msg => {
                msg.react('🕐');
            });

            const embed = new Discord.RichEmbed()
                .setColor('3498db')
                .setTimestamp()
                .setAuthor(message.author.tag, message.author.avatarURL)
                .addField('⚙ | Status:', 'Aberto')
                .addField('📝 | Informação adicional:', motivo)
                .addField(':loudspeaker: | Atenção:', 'Quando sua dúvida for resolvida por favor adicione sua reação, como: :x: ou :white_check_mark:')
            c.send(embed).then(msg => {
                msg.react('✅');
                msg.react('❌');
            });

        });
    }

    if(msg.startsWith(prefix + 'FECHAR')){


        if(!message.channel.name.startsWith(`ticket-`)) return message.reply(':x: | Esse comando não pode ser usado aqui... :frowning:').then(msg => {
            msg.delete(10000);
        });

        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setDescription("*Você realmente deseja fechar esse ticket ?*\n🚪 | **Fechar:**\nCaso queira fechar basta utilizar o comando: ``confirmar``\n🕐 | Você possui 10 segundos para fechar, ou será cancelado ! \n\n :thumbsup:\n")
            .setFooter(message.channel.name, client.user.avatarURL)
            .setTimestamp()
            .setColor('3498db')
        message.channel.send(embed)
        .then((m) => {
          message.channel.awaitMessages(response => response.content === '/confirmar', {
            max: 1,
            time: 10000,
            errors: ['time'],
          })
          .then((collected) => {
              message.channel.delete();
            })
            .catch(() => {
              m.delete();
              message.channel.send('📪 | Cancelando... 10 segundos se passaram e não recebi uma resposta !').then(m2 => {
              }, 3000);
            });
        });
    }

}); 

client.on('guildMemberAdd', member => {
    let avatar = member.user.avatarURL
  
    let embed = new Discord.RichEmbed()
        .setColor('3498db')
        .setThumbnail(avatar)
        .addField('Novo membro!', `» Olá, ${member}. Seja bem vindo \n ao servidor de Discord da GamersBoard \n \n» Fórum: https://gamersboard.com.br `)
        .setFooter(`© GamersBoard`);
        client.channels.get('497398358080618526').send(embed);
  })


  client.login(process.env.token);; 

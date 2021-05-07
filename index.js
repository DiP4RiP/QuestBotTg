const { Telegraf, Markup } = require('telegraf')
const bot = new Telegraf('1783153297:AAEXHFZePlFTBI827xsXgi7CpKONqfR-Z6E') //сюда помещается токен, который дал botFather

//bot.use(Telegraf.log())

// bot.start(async (ctx) => {
//     await ctx.reply("Выберите действие", Markup.inlineKeyboard([
//         Markup.button.callback("📕 Доступные главы", "chapters"),
//         Markup.button.callback("🔧 Настройки", "settings")
//     ],));    
// })

bot.start(async (ctx) => {
    await ctx.reply(
`Добро пожаловать в историю заброшенного замка.
Текст здесь может быть расположен в несколько строк.
Содержать эмодзи (📞).`
    )
    setTimeout(async () => {
        await ctx.reply('Так же обращу твое внимание на то, что мне нужно время для набора', 
        Markup.keyboard([
            ['📕 Главы'], // Row1 with 2 buttons
            ['🔧 Настройки', '📞 Обратная связь'], // Row2 with 2 buttons
            ['⭐️ Оценить нас', '👥 Поделиться'] // Row3 with 3 buttons
        ])
        .oneTime()
        .resize()
        )
    }, 1500);
})

bot.hears('📕 Главы', async (ctx) => {
    await ctx.reply('Возможно два варианта развития событий. Могу писать новые сообщения')
    setTimeout(async () => {
        temp = await ctx.reply('А могу редактировать старые. Жмякни ниже для примера', 
        Markup.keyboard([
            Markup.button.callback('Отредактируй', 'edit'), // Row1 with 2 buttons
            Markup.button.callback('Пустая кнопка', 'empty'), // Row2 with 2 buttons
        ])
        .oneTime()
        .resize()
        )
    }, 1500)
})

bot.hears('Отредактируй', async (ctx) => {
    await ctx.reply('Крч, нихуя не пашет, сделать можно будет, но стиля в этом нет. А теперь показываю красоту',
    Markup.inlineKeyboard([
        Markup.button.callback('🔮 Отредактирую', 'edit'),
        Markup.button.callback('Сделаю нихуя', 'empty')
    ])
    .resize()
    )
})

bot.on('callback_query', (ctx) => {
    console.log(ctx.callbackQuery.data);
    if (ctx.callbackQuery.data === 'edit') {
        ctx.editMessageText("Теперь тут другие букавы =(")
        ctx.answerCbQuery()

    }    

});

bot.launch();
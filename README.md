# Discord-Nsfw
Discord-Nsfw is a simple package to implement NSFW commands for discord bots.

# Note
> ⚠ Please install the latest version of this package only. Old versions won't work anymore.

# Installing

```bash
npm i discord-nsfw
```

# Methods
- Anal (anal)
- 4K (fourk)
- Ass (ass)
- Gonewild (gonewild)
- Porngif (pgif)
- Pussy (pussy)
- Thigh (thigh)
- Boobs (boobs)
- Hentai Ass (hentaiass)
- Hentai (hentai)
- Hentai Midriff (hmidriff)
- Hentai Thigh (hentaithigh)
- Erokemo (erokemo)
- Kitsune (kitsune)
- Lewd (lewd)
- Neko Feet (nekofeet)
- Neko Pussy (nekopussy)
- Neko Tits (nekotits)
- Solo (solo)
- Wallpaper (wallpaper)

# Example
```js
const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

const image = await nsfw.pussy();
const embed = new Discord.MessageEmbed()
    .setTitle(`Pussy Image`)
    .setColor("GREEN")
    .setImage(image);
message.channel.send(embed);
```

# Note
> ⚠ | This package uses **[Nekobot API](https://nekobot.xyz/)** and **[Nekos.life](https://nekos.life/)** to fetch images.
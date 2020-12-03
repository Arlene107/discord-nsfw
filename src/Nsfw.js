const superagent = require("superagent");

class Nsfw {
  constructor() {
    this.version = require("../package.json").version;
    this.methods = [
      "anal",
      "fourk",
      "ass",
      "gonewild",
      "pgif",
      "pussy",
      "thigh",
      "boobs",
      "hentaiass",
      "hentai",
      "hmidriff",
      "hentaithigh",
      "erokemo",
      "kitsune",
      "lewd",
      "nekofeet",
      "nekopussy",
      "nekotits",
      "solo",
      "wallpaper",
    ];
  }

  async anal() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=anal"
    );
    return body.message;
  }

  async fourk() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=4k"
    );
    return body.message;
  }

  async ass() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=ass"
    );
    return body.message;
  }

  async gonewild() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=gonewild"
    );
    return body.message;
  }

  async pgif() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=pgif"
    );
    return body.message;
  }

  async pussy() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=pussy"
    );
    return body.message;
  }

  async thigh() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=thigh"
    );
    return body.message;
  }

  async boobs() {
    const id = [Math.floor(Math.random() * 10930)];
    const res = await superagent.get(`http://api.oboobs.ru/boobs/${id}`);
    const preview = res.body[0]["PREVIEW".toLowerCase()];
    const image = `http://media.oboobs.ru/${preview}`;
    return image;
  }

  async hentaiass() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hass"
    );
    return body.message;
  }

  async hentai() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hentai"
    );
    return body.message;
  }

  async hmidriff() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hmidriff"
    );
    return body.message;
  }

  async hentaithigh() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hthigh"
    );
    return body.message;
  }

  async erokemo() {
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/img/erokemo"
    );
    return body.url;
  }

  async kitsune() {
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/img/fox_girl"
    );
    return body.url;
  }

  async lewd() {
    const { body } = await superagent.get("https://nekos.life/api/v2/img/lewd");
    return body.url;
  }

  async nekofeet() {
    const { body } = await superagent.get("https://nekos.life/api/v2/img/feet");
    return body.url;
  }

  async nekopussy() {
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/img/pussy_jpg"
    );
    return body.url;
  }

  async nekotits() {
    const { body } = await superagent.get("https://nekos.life/api/v2/img/tits");
    return body.url;
  }

  async solo() {
    const { body } = await superagent.get("https://nekos.life/api/v2/img/solo");
    return body.url;
  }

  async wallpaper() {
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/img/wallpaper"
    );
    return body.url;
  }
}

module.exports = Nsfw;

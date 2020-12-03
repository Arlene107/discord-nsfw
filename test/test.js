async () => {
  const NSFW = require("../index");
  const nsfw = new NSFW();

  let img = await nsfw.pussy();
  console.log(img);
};

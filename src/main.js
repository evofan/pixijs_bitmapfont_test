const WIDTH = 720;
const HEIGHT = 480;

// stats
let stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

// app
let app = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT
});
document.body.appendChild(app.view);
app.renderer.backgroundColor = 0x000000;

// v5 ticker
let ticker = PIXI.Ticker.shared;
ticker.autoStart = false;
ticker.add(function (time) {
  // app.renderer;
  // console.log("render...", time);
  update(time);
});

// init
let bg;
let ASSET_BG = "images/pic_water.jpg";
let ASSET_FONT = "font/font.xml";

let container_bg = new PIXI.Container();
container_bg.x = 0;
container_bg.y = 0;
app.stage.addChild(container_bg);

let container = new PIXI.Container();
container.width = WIDTH;
container.height = HEIGHT;
container.x = 0;
container.y = 0;
container.pivot.x = 0;
container.pivot.y = 0;
container.interactive = true;
app.stage.addChild(container);

// loader
let loader = new PIXI.Loader();
loader.add("bg_data", ASSET_BG);
loader.add("bitmap_font", ASSET_FONT);

/**
 * Asset load Complete
 * @param { object } loader object
 * @param { object } resources asset data
 */
loader.load((loader, resources) => {
  console.log(loader);
  console.log(resources);

  // BG
  bg = new PIXI.Sprite(resources.bg_data.texture);
  container_bg.addChild(bg);
  bg.x = 0;
  bg.y = 0;
  bg.interactive = true;
  bg.on("tap", event => {
    console.log("onTap"); // Mobile, Desktop(Touch)
  });
  bg.on("click", event => {
    console.log("click"); // Desktop
  });

  // BitmapFont
  const bitmapFontText = new PIXI.BitmapText("THIS IS BITMAP FONT 12345", { fontName: "gameFont", fontSize: 50 });
  container.addChild(bitmapFontText);
  bitmapFontText.x = 20;
  bitmapFontText.y = 100;

  // Text
  let text = new PIXI.Text("This is System Font 12345", {
    fontFamily: "Arial",
    fontSize: 30,
    fill: 0x33cc33,
    align: "center",
    fontWeight: "bold",
    dropShadow: true,
    dropShadowColor: "#003300",
    dropShadowDistance: 2,
    trim: true
  });
  container.addChild(text);
  text.x = 20;
  text.y = 50;

  // render start
  ticker.start();

});

/**
 * app rendering
 * @param { number } time
 */
update = (time) => {
  stats.begin();
  stats.end();
}
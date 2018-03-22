// main.ts

/// <reference path="./../node_modules/pixi-typescript/pixi.js.d.ts" />

import PIXI = require("pixi.js");


class Bunny {

    private myTexture :  PIXI.Texture;
    public mySprite : PIXI.Sprite;

    constructor(theTexture : PIXI.Texture) {
        this.myTexture = theTexture;
        this.mySprite = new PIXI.Sprite(this.myTexture);

        this.mySprite.anchor.x = 0.5;
        this.mySprite.anchor.y = 0.5;
        this.mySprite.position.x = 400;
        this.mySprite.position.y = 300;
    }

    update() {
        if (this.mySprite.position.x > 600)
            this.mySprite.position.x = 400;
        this.mySprite.position.x++;    
    }
    
}

const params = {
    backgroundColor: 0x000000,
    canvasW: 800,
    canvasH: 450
}

class Engine {
    public container: HTMLElement;
    public loader: PIXI.loaders.Loader;
    public renderer: PIXI.SystemRenderer;
    public stage: PIXI.Container;
    public graphics: PIXI.Graphics;
    public fps: int;
    public elapsed: double;
    public bunny: Bunny;

    constructor(width: int, height: int, containerId?: string, fps = 60) {
        this.loader = PIXI.loader;
        this.renderer = PIXI.autoDetectRenderer(width, height, { "antialias": true });
        this.stage = new PIXI.Container();
        this.graphics = new PIXI.Graphics();
        this.fps = fps;
        this.elapsed = performance.now();

        this.container = containerId ? document.getElementById(containerId) || document.body : document.body;
        this.container.appendChild(this.renderer.view);
    } // constructor
} // Engine

const engine = new Engine(params.canvasW, params.canvasH, "game");

const fpsMeter = {
    nbFrames: 0,
    framerate: 0.0,
    elapsed: performance.now(),
    refresh: 500,
    domElement: document.createElement("div")
}

// ==============
// === STATES ===
// ==============

window.onload = load;

function load() {
    create();
} // load

function create() {
    /* Create Game Objects */

    /* FPS */
    fpsMeter.domElement.style.position = "fixed";
    fpsMeter.domElement.style.left = "0px";
    fpsMeter.domElement.style.bottom = "0px";
    fpsMeter.domElement.style.color = "#00ff00";
    fpsMeter.domElement.style.zIndex = "10";
    fpsMeter.domElement.style.fontFamily = "monospace";
    engine.container.appendChild(fpsMeter.domElement);

    /* bunny */
    var bunny = new Bunny(PIXI.Texture.fromImage('images/bunny.png'))
    engine.bunny = bunny;
    engine.stage.addChild(bunny.mySprite);

    setInterval(update, 1000.0 / engine.fps);
    render();
} // create

function update() {
    let now = performance.now();
    //let frameTime = now - engine.elapsed;
    //let timeRatio = frameTime * engine.fps * 0.001;

	
    engine.elapsed = now;
} // update

function render() {
    requestAnimationFrame(render);
    let now = performance.now();
    let frameTime = now - fpsMeter.elapsed;
    engine.bunny.update();

    engine.renderer.render(engine.stage);

    /* FPS Meter */
    fpsMeter.nbFrames++;
    if (frameTime >= fpsMeter.refresh) {
        let framerate = 1000.0 * fpsMeter.nbFrames / frameTime;
        fpsMeter.domElement.innerHTML = "FPS: " + framerate.toFixed(2).toString();
        fpsMeter.elapsed = now;
        fpsMeter.nbFrames = 0;
    }
} // render

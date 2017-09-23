import Stage from '_/hilo/view/Stage';
import Ticker from '_/hilo/util/Ticker';
import Tween from '_/hilo/tween/tween';

import mediator from '_/mediator';
import Assets from '_/assets';
import BitmapScene from '_/bitmapScene';
import SpriteScene from '_/spriteScene';
import TextScene from '_/textScene';
export default {
  width: 0,
  height: 0,
  scale: 1,
  stage: null,
  assets: null,
  init: function() {
    const loading = $('.loading');
    const loadingNum = $('.loading-num', loading);
    const loadingBar = $('.loading-inner', loading);
    const assets = this.assets = new Assets();
    assets.on('load', (data) => {
      loadingNum.text(data.detail.percent + '%');
      loadingBar.css('width', data.detail.percent + '%');
    });
    assets.on('complete', () => {
      loading.addClass('hidden');
      setTimeout(() => {
        loading.css('display', 'none');
        this._initStage();
      }, 2000);
      assets.off('load');
    }, true);
  
    assets.load();
  },
  _initStage: function() {
    this.width = 750;
    this.scale = window.innerWidth / this.width;
    this.height = window.innerHeight / this.scale;
  
    const stage = this.stage = new Stage({
      renderType: 'canvas',
      container: 'stage',
      width: this.width,
      height: this.height,
      scaleX: this.scale,
      scaleY: this.scale,
    });
    const ticker = new Ticker(60);
    ticker.addTick(stage);
    ticker.addTick(Tween);
    ticker.start();
    this._initBitmapScene();
    this._initSpriteScene();
    this._initTextScene();
  },
  _initBitmapScene: function() {
    this.bitmapScene = new BitmapScene({
      width: this.width,
      height: this.height,
      assets: this.assets,
    }).addTo(this.stage);
  },
  _initSpriteScene: function() {
    this.spriteScene = new SpriteScene({
      width: this.width,
      height: this.height,
      assets: this.assets,
    }).addTo(this.stage);
  },
  _initTextScene: function() {
    this.textScene = new TextScene({
      width: this.width,
      height: this.height,
    }).addTo(this.stage);
  }
};
import HiloClass from '_/hilo/core/Class';
import Container from '_/hilo/view/Container';
import Sprite from '_/hilo/view/Sprite';
import TextureAtlas from '_/hilo/util/TextureAtlas';

const SpriteScene = HiloClass.create({
  Extends: Container,
  constructor: function(cfg) {
    SpriteScene.superclass.constructor.call(this, cfg);
    Object.assign(this, cfg);
    this.init();
  },
  init: function() {
    const image = this.assets.get('bird');
    const sprite1 = new Sprite({
      frames: [{
        image,
        rect: [0, 120, 86, 60],
      }, {
        image,
        rect: [0, 60, 86, 60],
      }, {
        image,
        rect: [0, 0, 86, 60],
      }]
    });

    sprite1.x = 25;
    sprite1.y = 200;
    const sprite2 = new Sprite({
      frames: [{
        image,
        rect: [0, 120, 86, 60],
        duration: 10,
      }, {
        image,
        rect: [0, 60, 86, 60],
        duration: 50,
      }, {
        image,
        rect: [0, 0, 86, 60],
        duration: 10,
      }]
    });
    sprite2.x = 205;
    sprite2.y = 200;
    const sprite3 = new Sprite({
      frames: [{
        image,
        rect: [0, 120, 86, 60],
        duration: 50,
      }, {
        image,
        rect: [0, 60, 86, 60],
        duration: 50,
      }, {
        image,
        rect: [0, 0, 86, 60],
        duration: 50,
      }]
    });
    sprite3.loop = false;
    sprite3.x = 385;
    sprite3.y = 200;
    const sprite4 = new Sprite({
      frames: [{
        image,
        rect: [0, 120, 86, 60],
      }, {
        image,
        rect: [0, 60, 86, 60],
        stop: true,
      }, {
        image,
        rect: [0, 0, 86, 60],
      }]
    });

    sprite4.x = 565;
    sprite4.y = 200;
    this.addChild(sprite1, sprite2, sprite3, sprite4);

    const atlas1 = new TextureAtlas({
      image: this.assets.get('bird'),
      frames: [
        [0, 120, 86, 60],
        [0, 60, 86, 60],
        [0, 0, 86, 60]
      ],
      sprites: {
        one1: [0, 1, 2],
        one2: {
          from: 0,
          to: 2,
        }
      }
    });

    const sprite5 = new Sprite({
      frames: atlas1.getSprite('one1')
    });
    sprite5.x = 25;
    sprite5.y = 300;

    const sprite6 = new Sprite({
      frames: atlas1.getSprite('one2')
    });
    sprite6.x = 205;
    sprite6.y = 300;

    this.addChild(sprite5, sprite6);

    const atlas2 = new TextureAtlas({
      image: this.assets.get('bird'),
      width: 86,
      height: 180,
      frames: {
        frameWidth: 86,
        frameHeight: 60,
        numFrames: 3,
      },
      sprites: {
        one1: [0, 1, 2],
        one2: {
          from: 0,
          to: 2,
        }
      }
    });
    const sprite7 = new Sprite({
      frames: atlas2.getSprite('one1')
    });
    sprite7.x = 385;
    sprite7.y = 300;

    const sprite8 = new Sprite({
      frames: atlas2.getSprite('one2')
    });
    sprite8.x = 565;
    sprite8.y = 300;

    this.addChild(sprite7, sprite8);

    const atlas3 = TextureAtlas.createSpriteFrames([
      ["one1", "0,1,2", this.assets.get('bird'), 86, 60, true, 10],
      ["one2", "0-2", this.assets.get('bird'), 86, 60, false, 1]
    ]);
    const sprite9 = new Sprite({
      frames: atlas3,
      x: 25,
      y: 400,
    });
    this.addChild(sprite9);
  }
});

export default SpriteScene;
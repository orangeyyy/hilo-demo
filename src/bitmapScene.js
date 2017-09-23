import Bitmap from '_/hilo/view/Bitmap';
import HiloClass from '_/hilo/core/Class';
import Container from '_/hilo/view/Container';

const BitmapScene = HiloClass.create({
  Extends: Container,
  constructor: function(cfg) {
    BitmapScene.superclass.constructor.call(this, cfg);
    Object.assign(this, cfg);
    this.init();
  },
  init: function() {
    for(let i = 0; i < 4; ++i) {
      const bitmap = new Bitmap({
        image: this.assets.get('img1'),
      });
      bitmap.y = 25;
      bitmap.width = 160;
      bitmap.height = 160;
      bitmap.x = 25 + i * 180;
      this.addChild(bitmap);
    }
  }
});

export default BitmapScene;

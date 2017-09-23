import HiloClass from '_/hilo/core/Class';
import Container from '_/hilo/view/Container';
import Text from '_/hilo/view/Text';
const TextScene = HiloClass.create({
  Extends: Container,
  constructor: function(cfg) {
    TextScene.superclass.constructor.call(this, cfg);
    this.init();
  },
  init: function() {
    let text1 = new Text({
      color: '#ff0000',
      lineSpacing: 10,
      text: 'hello world',
      x: 385,
      y: 400,
      width: 160,
      height: 100,
      textVAlign: 'middle',
    });

    let text2 = new Text({
      color: '#0000ff',
      lineSpacing: 0,
      text: 'hello world yo yo check now',
      outline: true,
      x: 545,
      y: 400,
      width: 160,
      height: 100,
      textAlign: 'center',
    });
    debugger;

    text2.setFont('italic small-caps bold 20px arial,sans-serif');

    this.addChild(text1, text2);
  }
});

module.exports = TextScene;

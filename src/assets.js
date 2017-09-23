import LoadQueue from '_/hilo/loader/LoadQueue';
import HiloClass from '_/hilo/core/Class';
import EventMixin from '_/hilo/event/EventMixin';

function _generateResourceList() {
  const result = [];
  for (let i = 1; i < 10; ++i) {
    result.push({
      id: `img${i}`,
      src: `imgs/${i}.png`,
    });
  }
  result.push({
    id: 'bird',
    src: 'imgs/bird.png',
  });
  result.push({
    id: 'number',
    src: 'imgs/number.png',
  });
  return result;
}
export default HiloClass.create({
  Mixes: EventMixin,
  load: function() {
    this.queue = new LoadQueue(_generateResourceList());

    this.queue.on('load', this.onLoad.bind(this));
    this.queue.on('complete', this.onComplete.bind(this));
    this.queue.start();
  },
  onLoad: function(res) {
    this.fire('load', {
      res,
      percent: parseInt(this.queue.getLoaded() * 100 / this.queue.getTotal()),
    });
  },
  onComplete: function() {
    this.queue.off('load');
    this.queue.off('complete');

    this.fire('complete');
  },
  get: function(idOrSrc) {
    return this.queue.getContent(idOrSrc);
  }
});

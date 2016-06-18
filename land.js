define(function(require, exports, module) {



  function Land(img, x) {
    this.img = img;
    this.x = x;
    this.speed = -0.1;
  }

  Land.prototype.update = function(dt) {

    if (this.x < -336) {

      this.x = 336 * 4 + this.x;
    }
    this.x = this.x + dt * this.speed;
  };

  Land.prototype.draw = function() {
    ctx.drawImage(this.img, this.x, 600 - 112);
  };

  module.exports = Land;
});

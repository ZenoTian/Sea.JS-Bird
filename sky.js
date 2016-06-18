define(function(require, exports, module) {

  function Sky(img, x) {
    this.img = img;
    this.x = x;
    this.speed = -0.03;
  }

  Sky.prototype.update = function(dt) {
    if (this.x < -800) {
      this.x = this.x + 1600;
    }
    this.x = this.x + dt * this.speed;
  };

  Sky.prototype.draw = function() {
    ctx.drawImage(this.img, this.x, 0);
  };

  module.exports = Sky;

});

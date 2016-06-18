define(function(require, exports, module) {
  function Pipe(img1, img2, x) {
    this.img1 = img1;
    this.img2 = img2;
    this.pipe1Y = Math.random() * 150 + 50;
    this.x = x;
    this.speed = -0.1;
  }

  Pipe.prototype.update = function(dt) {
    if (this.x < -52) {
      this.x = this.x + 200 * 5;
      this.pipe1Y = Math.random() * 150 + 50; 
    }
    this.x = this.x + this.speed * dt;
  };

  Pipe.prototype.draw = function() {

    ctx.drawImage(this.img2, this.x, this.pipe1Y - 420);
    ctx.drawImage(this.img1, this.x, this.pipe1Y + 150);

    ctx.rect(this.x, this.pipe1Y - 420, 52, 420);
    ctx.rect(this.x, this.pipe1Y + 150, 52, 420);
  };

  module.exports = Pipe;

});

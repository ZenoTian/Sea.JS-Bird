
define(function(require, exports, module) {

  var foo = 'bar';
  var $ = '';
  function Bird(img, cvs) {
    var _this = this;

    cvs.addEventListener('click', function(event) {
      var x = event.layerX;
      var y = event.layerY;
      _this.fly();
    });
    
    this.img = img;
    
    this.x = 200;
    this.y = 100;
    
    this.index = 0;
    
    this.speed = 0;
    this.a = 0.0005;
    
    this.waitTime = 0;
  }

  Bird.prototype.update = function(dt) {

    this.waitTime = this.waitTime + dt;
    if (this.waitTime > 100) {
      this.index = (this.index + 1) % 3;
      this.waitTime = this.waitTime - 100;
    }

    
    this.speed = this.speed + this.a * dt;
    this.y = this.y + this.speed * dt;
  };

  Bird.prototype.draw = function() {



    ctx.save();


    ctx.translate(this.x, this.y);


    var speed = this.speed > 0.3 ? 0.3 : this.speed;

    var angle = speed / 0.3 * 45;

    ctx.rotate(angle / 180 * Math.PI);


    ctx.drawImage(this.img,
      52 * this.index, 0, 52, 45,

      -26, -22.5, 52, 45
    );

    ctx.restore(); 
  };



  Bird.prototype.fly = function() {

    this.speed = -0.3;
  };


  module.exports = Bird;
});

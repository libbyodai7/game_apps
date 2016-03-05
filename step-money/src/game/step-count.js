var five = require("johnny-five");
var board = new five.Board();
var step = 0;
var up = false;
var down = false;

board.on("ready", function() {
  var accelerometer = new five.Accelerometer({
    controller: "MPU6050"
  });

  accelerometer.on("change", function() {
    var sum = this.x + this.y + this.z;


    if (sum > 1){
      up = true;
    };

    if (sum < 0){
      down = true;
    };

    if( up == true && down == true){
      step = step + 1;
      up = false;
      down = false;

    console.log(step);
    }

  });
});
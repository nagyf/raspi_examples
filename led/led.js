var Gpio = require('onoff').Gpio;
// The led is connected to the GPIO 18 pin
var led = new Gpio(18, 'out');

var state = true;
var timer = setInterval(function(){
    console.log('Led: ' + (state ? 'On' : 'Off'));
    state = !state;
    led.writeSync(state ? 1 : 0);
}, 1000);

// Terminate the timer, free up resources
process.on('SIGINT', function(){
    led.unexport();
    clearInterval(timer);
});

var bmp085 = require('bmp085');
var device = new bmp085({
    'mode': 1,
    'address': 0x77,
    'device': '/dev/i2c-1'
});

device.read(function(data){
    console.log(data);
});

# DHT22 with a Raspberry Pi

This sample project can be used to test a [DHT22](https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf) sensor connected to a Raspberry Pi on the GPIO 22 pin.

## Install the C library

[http://www.airspayce.com/mikem/bcm2835/](http://www.airspayce.com/mikem/bcm2835/)

```
cd
wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.50.tar.gz
tar zxvf bcm2835-1.50.tar.gz
cd bcm2835-1.50
./configure
make
sudo make check
sudo make install
```

## Test the sensor

```
npm install
node dht22.js
```

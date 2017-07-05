var HID = require('node-hid');
var robot = require('robotjs');

console.log('doin it');
console.log('devices:', HID.devices());

var device = new HID.HID(1133, 49974);

device.on('error', function(err) {
  console.log('error', data);
});

device.on('data', function(data) {
  console.log('data', data);
});

device.gotData = function(err, data) {
  console.log('got  data', data);
  this.read(this.gotData.bind(this));
};

device.read(device.gotData.bind(device));

setInterval(function() {
  robot.typeString('aaa');
}, 100);

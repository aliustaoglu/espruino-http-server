var MQTT = require('https://github.com/aliustaoglu/tinyMQTT/blob/master/tinyMQTT.min.js');
var mqtt = null;

E.on('init', function() {
  var WIFI_NAME = 'SPARK-PLWZV6';
  var WIFI_OPTIONS = { password: 'LKYEM8VVH6' };

  var wifi = require('Wifi');
  wifi.connect(
    WIFI_NAME,
    WIFI_OPTIONS,
    function(err) {
      if (err) {
        console.log('Connection error: ' + err);
        return;
      }
      console.log('Connected!');
      mqtt = MQTT.create('192.168.1.77', { port: 1883 });
      setTimeout(function() {
        mqtt.connect();
        console.log('mqtt-connected')
      }, 2000);
      runServer();
    }
  );
});

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
      runServer();
    }
  );
});

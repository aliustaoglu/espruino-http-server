var MQTT = require('https://github.com/aliustaoglu/tinyMQTT/blob/master/tinyMQTT.min.js');
var mqtt = null;

E.on('init', function() {
  var WIFI_NAME = 'TOTOLINK_A3';
  var WIFI_OPTIONS = { password: 'QWERTYUI' };


  
  var spi = new SPI()
  
  spi.setup({ sck: NodeMCU.D5, mosi: NodeMCU.D7 });
  var g = require('ILI9163').connect(
    spi,
    NodeMCU.D2 /* RS / DC */,
    NodeMCU.D8 /* CS / CE */,
    NodeMCU.D1 /*RST*/,
    function() {
      g.drawImage(img, 10, 10)
      
    }
  );
  digitalWrite(2, 0);
});

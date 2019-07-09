Boiler plate for Espruino that does below:

npm run &lt;one of the commands below&gt;

- **erase**: erase flash in ESP8266
- **flash**: flash new firmware
- **reset** erase then flash
- **reupload**: erase flash, flash new firmware, uglify javascript code and then upload
- **uglify**: just uglify the code and bundle in index.js
- **upload**: upload the bundled code to ESP8266
- **screen**: serial monitor your device

# How to make this run for your environment

1. Update your port accordingly. I am using port `/dev/cu.wchusbserial1420` find this entry and change it for your environemnt

2. Update your firmware accordingly. Firmware here included(under /firmware folder) works for ESP8266-12E. If you have a different hardware you will need a different firmware. 

Find yours here:
https://www.espruino.com/Download
and change with the existing files

3. If you get errors you might want to change your baudRate. I am using `--baud 115200`

4. Add all your files into src folder and do NOT `require` them. `require` command will have a different action for Espruino. You can require native and online libraries. To include your own library simply add it into src folder and call directly.


Nokia-5110  NodeMCU     ESP-12    Nokia-Replacement
LED         3V3         3V3       LED
SCLCK       D5          GPIO14    SCK
DN<MOSI>    D7          GPIO13    SDA
D/C         D2          GPIO04    A0
RST         D1          GPIO05    RST
SCE         D8          GPIO15    CS
GND         GND         GND       GND
VCC         3V3         3V3       VCC

TFT side   -------------------- microprocessor  
- Vcc       -->     +3V3V(!!!!)
- Gnd       -->     Gnd
- CS        -->     CS pin (3v3 level!)
- RST       -->     connect to a MCU pin or tie to +3V3 or 10K to 3V3 (do NOT leave float!)
- A0        -->     DC or RS pin (3v3 level!)
- SDA       -->     Mosi (3v3 level!)
- SCK       -->     Sclk (3v3 level!)
- LED       -->     Some display need a resistor (see note below)

function runServer() {
  SPI1.setup({ sck: NodeMCU.D5, mosi: NodeMCU.D7 });
  var g = require('PCD8544').connect(
    SPI1,
    NodeMCU.D2 /* RS / DC */,
    NodeMCU.D8 /* CS / CE */,
    NodeMCU.D1 /*RST*/,
    function() {
      g.clear();
      g.setRotation(2); //Flip display 180
      g.drawString('Hello', 0, 0);
      g.drawLine(0, 10, 84, 10);
      g.flip();
    }
  );
}

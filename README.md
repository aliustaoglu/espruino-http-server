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
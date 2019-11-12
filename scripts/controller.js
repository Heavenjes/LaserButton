
var conectar = document.getElementById('on');
var desconnectar = document.getElementById('off');
var estatus = document.getElementById('status');
console.log("Connecting..");
client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')
console.log('wss://test.mosquitto.org:8081/mqtt');
client.on("on", function () {
console.log("Successfully connected");
})
$(document).ready(function () {
$("#on").click(function (e) {
e.preventDefault();
client.publish('iranToring/temp', 'on');
estatus.disabled = false;
desconnectar.disabled = false;
conectar.disabled = true;
console.log("connected");
$("#status").html("The LASER SENSOR is currently turned ON");
})
$("#off").click(function (e) {
e.preventDefault();
client.publish('iranToring/temp', 'off');
estatus.disabled = true;
desconnectar.disabled = true;
conectar.disabled = false;
console.log("disconnected");
$("#status").html("The LASER SENSOR is currently turned OFF");
})
})

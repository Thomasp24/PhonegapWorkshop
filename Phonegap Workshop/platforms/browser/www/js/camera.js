/**
 * Created by thomaspeters on 09-01-17.
 */

var camera = navigator.camera;

document.getElementById("TakePhoto").addEventListener("click", function (e) {
    camera.getPicture(succesCallback, errorCallback);
});

var succesCallback = function (data) {

},
errorCallback = function (message) {
    App.alert(message);
};
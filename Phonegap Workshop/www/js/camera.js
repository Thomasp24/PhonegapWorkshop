/**
 * Created by thomaspeters on 09-01-17.
 */
var cameraInit = function () {
    var camera = navigator.camera;
    $$("#TakePhoto").on("click", function (e) {
        App.alert("bladiebla");
        camera.getPicture(succesCallback, errorCallback, {});
    });

    var succesCallback = function (data) {
        App.alert("Picture taken!");
    },
    errorCallback = function (message) {
        App.alert(message);
    };
}

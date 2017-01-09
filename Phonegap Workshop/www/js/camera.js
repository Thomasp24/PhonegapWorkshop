/**
 * Created by thomaspeters on 09-01-17.
 */
var cameraInit = function () {
    var camera = navigator.camera;
    $$("#TakePhoto").on("click", function (e) {
        App.alert("bladiebla");
        camera.getPicture(succesCallback, errorCallback, {
            // Some common settings are 20, 50, and 100
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            // In this app, dynamically set the picture source, Camera or photo gallery
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true  //Corrects Android orientation quirks
        });
    });

    var succesCallback = function (data) {
        App.alert("Picture taken!");
    },
    errorCallback = function (message) {
        App.alert(message);
    };
}

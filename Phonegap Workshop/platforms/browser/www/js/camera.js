/**
 * Created by thomaspeters on 09-01-17.
 */
var cameraInit = function () {

    $$("#TakePhoto").on("click", function (e) {
        navigator.camera.getPicture(succesCallback, errorCallback, {
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


}
var succesCallback = function (imgUrl) {
    var d = new Date();
    var date = d.getDate() + "-" + (d.getMonth() + 1) + "-" +  d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
    $$('#itemList').append(getElement("Test", date, imgUrl));
},
errorCallback = function (message) {
    App.alert(message);
};

var getElement = function(name, date, imgUrl) {
    return  "<li class=\"contact-item\">" +
        "<a class=\"item-link\" href=\"#\">" +
        "<div class=\"item-content\">" +
        "<div class=\"item-media\"><img src=\"" + imgUrl +"\" width=\"44\"></div>" +
        "<div class=\"item-inner\">" +
        "<div class=\"item-title-row\">" +
        "<div class=\"item-title\">" + name + "</div>" +
        "</div>" +
        "<div class=\"item-subtitle\">" + date + "</div>" +
        "</div>" +
        "</div>" +
        "</a>" +
        "</li>";
}
// Initialize app
var App = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

if (Framework7.prototype.device.android) {
    $$('head').append(
        '<link rel="stylesheet" href="lib/framework7/css/framework7.material.min.css">' +
        '<link rel="stylesheet" href="lib/framework7/css/framework7.material.colors.min.css">' +
        '<link rel="stylesheet" href="lib/framework7/css/material-icons.css">'
    );
}
else {
    $$('head').append(
        '<link rel="stylesheet" href="lib/framework7/css/framework7.ios.min.css">' +
        '<link rel="stylesheet" href="lib/framework7/css/framework7.ios.colors.min.css">' +
        '<link rel="stylesheet" href="lib/framework7/css/framework7-icons.css">'
    );
}


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    cameraInit();
});

$$('.open-help').on('click', function () {
    App.popover('.popover-help', this);
});

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
App.onPageInit('about', function (page) {
    // Do something here for "about" page

});

// Option 2. Using one 'pageInit' event handler for all pages:
/*$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        //App.alert('Here comes About page');
    }
})*/

// Option 2. Using live 'pageInit' event handlers for each page
/*$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    App.alert('Here comes About page');
})*/
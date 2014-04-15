var photoApp = angular.module("photoSharingApp", [ "ngRoute", 'angularFileUpload' ]);

photoApp.config(function ($routeProvider) {
    $routeProvider
        .when("/albums",  { controller: "AlbumListController", templateUrl: "/app/partials/album_list.html" })
        .when("/album/:album_name",  { controller: "AlbumViewerController", templateUrl: "/app/partials/album_viewer.html" })
        .when("/album/:album_name/upload",  { controller: "AlbumUploadController", templateUrl: "/app/partials/album_uploader.html" })
        .when("/album/:album_name/photos/:photo_filename",  { controller: "PhotoViewerController", templateUrl: "/app/partials/photo_viewer.html" })
        .when("/",  { redirectTo: "/albums" })
        .otherwise({ redirectTo: "/404_page" });
});


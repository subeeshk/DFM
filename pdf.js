function fileDownload(dirName, fileURL, fileName, id) {

    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fsAccess, fsFail);

    function fsAccess(fileSystem) {

        fileSystem.root.getDirectory(dirName, { create: true, exclusive: false }, dirReady, dirFail);

    }

    function fsFail() {

        console.log("Filesystem Access Failed");
        alert("Filesystem Access Failed")

    }

    function dirFail() {

        console.log("Directory Access Failed");
        alert("Directory Access Failed");

    }

    function dirReady(entry) {






        window.appRootDir = entry;

        alert(window.appRootDir.nativeURL);




        window.resolveLocalFileSystemURL(window.appRootDir.nativeURL + fileName, exist(window.appRootDir.nativeURL + fileName), downloadAsset(window.appRootDir.nativeURL + fileName, fileURL));





    }

}


function PdfAttachment(content, id) {
    $$("#pdf1").attr("src", "Images/PdfL.gif");


    var store;


    //URL of our asset
    var assetURL = "http://www.inkwelleditorial.com/pdfSample.pdf";

    //File name of our important data file we didn't ship with the app
    var fileName = "mydatafile.pdf";




    store = cordova.file.dataDirectory;

    //Check for the file. 
    window.resolveLocalFileSystemURL(store + fileName, appStart, downloadAsset);













    //fileDownload("DFMChtbot", content, id + '.pdf', id);
}








function appStart() {
    //$status.innerHTML = "App ready!";

    alert('exix');
}

function downloadAsset() {

    alert('Down');

    var assetURL = "http://www.inkwelleditorial.com/pdfSample.pdf";

    //File name of our important data file we didn't ship with the app
    var fileName = "mydatafile.pdf";

    var fileTransfer = new FileTransfer();
    console.log("About to start transfer");
    fileTransfer.download(assetURL, store + fileName,
        function (entry) {
            console.log("Success!");
            appStart();
        },
        function (err) {
            console.log("Error");
            console.dir(err);
        });
}
















function downloadAsset(toURL, fileURL) {
    alert("d");
    var fileTransfer = new FileTransfer();

    fileTransfer.download(
        fileURL,
        toURL,
        function (theFile) {



            window.openFileNative.open(theFile);
            $$("#pdf1").attr("src", "Images/pdfC.png");


        },
        function (error) {
            alert(JSON.stringify(error));
            console.log(JSON.stringify(error));

        }
    );





}


function exist(toURL) {
    alert("e");
    window.openFileNative.open(toURL);
    $$("#pdf1").attr("src", "Images/pdfC.png");


}

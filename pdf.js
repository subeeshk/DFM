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

        console.log(JSON.stringify(window.appRootDir));

        var fileTransfer = new FileTransfer();

        alert(window.appRootDir.nativeURL + fileName);
        
        
        window.resolveLocalFileSystemURL(window.appRootDir.nativeURL + fileName, exist(window.appRootDir.nativeURL + fileName), downloadAsset(window.appRootDir.nativeURL + fileName));
        
        
        
        
        fileTransfer.download(
            fileURL,
            window.appRootDir.nativeURL + fileName,
            function (theFile) {

                var furl = theFile.toURL();


                pdfcomplete(furl);
            },
            function (error) {
                alert(JSON.stringify(error));
                console.log(JSON.stringify(error));
                pdferror(id);
            }
        );

    }

}


function PdfAttachment(content, id) {
    $$("#pdf1").attr("src", "Images/PdfL.gif");
    fileDownload("DFMChtbot", content, id + '.pdf', id);

}

function pdferror(id) {

    alert("N" + id);

}
function pdfcomplete(toURL) {
    $$("#pdf1").attr("src", "Images/pdfC.png");



    //window.resolveLocalFileSystemURL(toURL, exist(toURL), downloadAsset);

    window.openFileNative.open(toURL);




}



function downloadAsset(toURL){
alert('Download'+toURL);
}


function exist(toURL) {
   alert('ex'+ toURL);
}


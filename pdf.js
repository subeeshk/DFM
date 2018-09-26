




function fileDownload(dirName, fileURL, fileName,id) {

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

        fileTransfer.download(
            fileURL,
            window.appRootDir.nativeURL + fileName,
            function (theFile) {
				
				var furl= theFile.toURL();
				
       
				pdfcomplete(id,furl);
            },
            function (error) {
				alert(JSON.stringify(error));
                console.log(JSON.stringify(error));
				pdferror(id);
            }
        );

    }

}


function PdfAttachment(content,id){
	 $$("#pdf1").attr("src", "Images/PdfL.gif");
	 checkfile(content,id); 
	
	
	//var fileurl= window.appRootDir.nativeURL;
	//alert(fileurl);
	
	
	// fileDownload("DFMChtbot", content, id+'.pdf',id);
	 
	 
	

}

function pdferror(id){
	
		alert("N"+id);
	
}
function pdfcomplete(id,toURL){
	$$("#pdf1").attr("src", "Images/pdfC.png");

	
	
	//window.resolveLocalFileSystemURL(toURL, exist(toURL), downloadAsset);

	// window.openFileNative.open(toURL);
	
	
	
	
}

function downloadAsset(){
alert('NNNN');
}


function exist(toURL){
alert(toURL);
	
	var fileurl= window.appRootDir.nativeURL;
	alert(fileurl);

}
function checkfile(content,id){
alert(content);
alert(id);
var fileurl= window.appRootDir.nativeURL;
alert(fileurl);
}

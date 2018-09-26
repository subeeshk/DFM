

//The directory to store data
var store;

//URL of our asset
var assetURL = "";

//File name of our important data file we didn't ship with the app
var fileName = "";



function downloadAsset() {
   
	var fileTransfer = new FileTransfer();
	
	fileTransfer.download(assetURL, store + fileName,function(entry) {
			console.log("Success!");		
			Showpdf();},
			function(err) {
			console.log("Error");		
		});
}

function Showpdf() {
	
	 window.openFileNative.open(store + fileName);
	  $$("#pdf1").attr("src", "Images/pdfC.png");

}
function PdfAttachment(content, id) {
$$("#pdf1").attr("src", "Images/PdfL.gif");
store = cordova.file.dataDirectory;
 assetURL = content;
 fileName = id+".pdf";
window.resolveLocalFileSystemURL(store + fileName, Showpdf, downloadAsset);

}

document.addEventListener("deviceready", init, false);
var offlin= '<div class="toolbar-inner" id="toffline" style="color: red;">You appear to be offline.</div>';
 $(".toolbar-inner").append(offlin);

var connectionStatus = false;
function init(){
setInterval(function () {
        connectionStatus = navigator.onLine ? 'online' : 'offline';
	
	if(connectionStatus=='offline')
	{
	alert('offline');
	}
	
    }, 100);

}


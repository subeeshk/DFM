document.addEventListener("deviceready", init, false);

//The directory to store data
var store;

//Used for status updates
var $status;

//URL of our asset
var assetURL = "";

//File name of our important data file we didn't ship with the app
var fileName = "";



function downloadAsset() {
   
	var fileTransfer = new FileTransfer();
	console.log("About to start transfer");
	fileTransfer.download(assetURL, store + fileName, 
		function(entry) {
			console.log("Success!");
		
		
			appStart();
		}, 
		function(err) {
			console.log("Error");
			console.dir(err);
		});
}

//I'm only called when the file exists or has been downloaded.
function appStart() {
	
	 window.openFileNative.open(store + fileName);
     alert(store + fileName);
     
	//$status.innerHTML = "App ready!";
}
function PdfAttachment(content, id) {
store = cordova.file.dataDirectory;
 assetURL = content;


 fileName = id+".pdf";

window.resolveLocalFileSystemURL(store + fileName, appStart, downloadAsset);

}

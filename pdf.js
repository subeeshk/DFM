function PdfAttachment(content,id){
	 $$("#pdf1").attr("src", "Images/PdfL.gif");
	 
	 fileDownload('DFMChatbot', 'http://www.inkwelleditorial.com/pdfSample.pdf', 'myfile.pdf',id);
	 
	 
	

}

function pdferror(id){
	
		alert("N"+id);
	
}
function pdfcomplete(id){
	$$("#"+id).attr("src", "Images/PdfC.gif");
		alert("S"+id);
	
}


function PdfAttachment(content,id){
	 $$("#pdf1").attr("src", "PdfL.gif");
	 
	 fileDownload('DFMChatbot', 'http://www.inkwelleditorial.com/pdfSample.pdf', 'myfile.pdf',id);
	 
	 
	

}

function pdferror(id){
	
		alert("N"+id);
	
}
function pdfcomplete(id){
	
		alert("S"+id);
	
}


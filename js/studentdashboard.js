$(document).ready(function(){
	var template = $("#dashboard-row").html();
	var template2 = $("#dashboard-col").html();
	$(".page-content").append(template);
	for (var i = 0; i<10; i++){
		$(".append-data").append(template2);
	}
});
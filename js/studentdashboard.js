$(document).ready(function(){
	$("#dash").addClass("sidebar-highlight");

	var containerTemplate = $("#dashboard-row").html();
	var updatesTemplate = $("#table-of-updates").html();
	var recommendedTemplate = $("#dashboard-col").html();

	$(".page-content").append(containerTemplate);
	for (var i = 0; i<4; i++){
		$(".append-data").append(recommendedTemplate);
		$("#updates-table").append(updatesTemplate);
	}
});
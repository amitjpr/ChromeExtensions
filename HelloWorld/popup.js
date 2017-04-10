$(function(){
	$('#name').keyup(function(){
		$('#t1').text('Hello '+$('#name').val());
	})
})
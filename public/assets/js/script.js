function closeAside() {
	$('.close-aside').click(function() {
		if (!$('aside').hasClass('small-width') &&  (!$('.list-category').hasClass('small-width'))) {
			$('aside').addClass('small-width');
			$('.list-category').addClass('small-width');
		}else {
			$('aside').removeClass('small-width');
			$('.list-category').removeClass('small-width');
		}
	})
}
function toggleAside() {
	$('.box-category h2').click(function() {
		if (!$(this).next().children().hasClass('active')) {			
			$('.box-category .category').removeClass('active');
			$(this).next().children().addClass('active');
			$('.box-category h2').removeClass('active');
			$(this).addClass('active');
		}else {
			$(this).next().children().removeClass('active');
			$(this).removeClass('active');
		}
	})
}
function showNotice() {
	$('.notice').click(function() {
		if ($('.list-notice').hasClass('active')) {
			$('.list-notice').removeClass('active');
		}else {
			$('.list-notice').addClass('active');
		}
	})
}
function checkboxAll() {
	$("#mytable #checkall").click(function () {
        if ($("#mytable #checkall").is(':checked')) {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });   
    $("[data-toggle=tooltip]").tooltip();
}
$(document).ready(function() {
	closeAside();
	// toggleAside();
	showNotice();
	checkboxAll();
})
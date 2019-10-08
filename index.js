$(document).ready(function(){
    $("a").click(function() {
        $(".content").html(getData.getContent($(this).text()));
        $('a').removeClass('active');
        $(this).addClass('active');
    });
});

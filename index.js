$(document).ready(function(){
    $(".content").html('<h3>What’s a pensions dashboard?</h3><p>Pensions dashboard is a digital tool intended to revolutionise how people engage with their pensions throughout their lives. Pensions dashboard will insure people throughout the UK have easy access to key information about what pensions they have, who manages team and what they are worth.</p>');

    $("a").click(function() {
        $(".content").html(getData.getContent($(this).text()));
        $('a').removeClass('active');
        $(this).addClass('active');
    });
});

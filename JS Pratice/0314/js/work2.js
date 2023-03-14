$(function () {
    $('.imgbox').click(function () {
        const id = $(this).attr('id');
        let link = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + id + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        $('.fade').fadeIn(300, function () {
            $(".popup").html(link);
        });
    });
    $('.fade').click(function () {
        $(this).fadeOut(300);
    });
});

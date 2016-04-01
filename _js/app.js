
$(document).foundation();

$("#top-search-icon").on('click', function(event){
    event.preventDefault();
    var el = $(this);
    var icon = el.find('i');
    var mss = $("#mobile-site-search");
    mss.slideToggle(300, function() {
        if (mss.is(':hidden')) {
            icon.attr('class', 'icon-search');
        }
        else {
            icon.attr('class', 'icon-cancel');
        }
    });
});

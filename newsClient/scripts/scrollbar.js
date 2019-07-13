jQuery(document).ready(function(){
    console.log("scroll");
    
    jQuery('.scrollbar-external').scrollbar({
        "autoScrollSize": false,
        forceVisible: true,
        "scrollx": $('.external-scroll_x'),
        "scrolly": $('.external-scroll_y')
    });

    jQuery('.scrollbar-news').scrollbar({
        "autoScrollSize": false,
        "scrollx": $('.news-scroll_x'),
        "scrolly": $('.news-scroll_y')
    });
});


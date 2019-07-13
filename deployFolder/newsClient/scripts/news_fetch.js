
    var url = "https://immense-waters-25821.herokuapp.com/api/news/getNews";

    var newsForCategory;

    var urlHref = location.href;
    var queryString = urlHref ? urlHref.split('?')[1] : window.location.search.slice(1);

    if(queryString === "#" || !queryString || queryString === "tech") {
                var messageToSend = {
            posts: "techradar",
            news : "techcrunch"
        };
        getNewsByParameters(messageToSend);

        $('a[href$="?tech"').addClass('active');

        $('.top_article img')[0].src ="../newsClient/public/articles/zach-savinar-130828-unsplash3.jpg";

        $('.second_article img')[0].src = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        $('.second_article img')[0].setAttribute('data-src', "../newsClient/public/articles/jr-korpa-1635075-unsplash.jpg");

        $('.last_article img')[0].src = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        $('.last_article img')[0].setAttribute('data-src', "../newsClient/public/articles/muhammad-raufan-yusup-254422-unsplash2.jpg");

    } else if(queryString === "sport") {
        var messageToSend = {
            posts: "the-sport-bible",
            news : "talksport"
        };
        getNewsByParameters(messageToSend);

        $('a[href$="?sport"').addClass('active');

        $('.top_article img')[0].src = "../newsClient/public/articles/dave-contreras-190480-unsplash.jpg";
       
        $('.second_article img')[0].src = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        $('.second_article img')[0].setAttribute('data-src', "../newsClient/public/articles/nil-castellvi-309295-unsplash.jpg");
       
        $('.last_article img')[0].src = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        $('.last_article img')[0].setAttribute('data-src', "../newsClient/public/articles/gentrit-sylejmani-723365-unsplash.jpg");
    
    } else if(queryString === "science") {

        var messageToSend = {
            posts: "next-big-future",
            news : "new-scientist"
        };
        getNewsByParameters(messageToSend);

        $('a[href$="?science"').addClass('active');

        $('.top_article img')[0].src = "../newsClient/public/articles/bill-jelen-555144-unsplash.jpg";
        
        
        $('.second_article img')[0].src = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        $('.second_article img')[0].setAttribute('data-src', "../newsClient/public/articles/rohan-makhecha-408608-unsplash.jpg");
        
        $('.last_article img')[0].src = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        $('.second_article img')[0].setAttribute('data-src', "../newsClient/public/articles/nathan-anderson-131022-unsplash.jpg");
    
    }else if(queryString === "other") {
        var messageToSend = {
            posts: "entertainment-weekly",
            news : "national-geographic"
        };
        
        getNewsByParameters(messageToSend);

        $('a[href$="?other"').addClass('active');
        
        $('.top_article img')[0].src = "../newsClient/public/articles/clark-tibbs-367075-unsplash.jpg";
        
        
        $('.second_article img')[0].src = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        $('.second_article img')[0].setAttribute('data-src', "../newsClient/public/articles/jerry-wang-1191399-unsplash.jpg");
        
        $('.last_article img')[0].src = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        $('.last_article img')[0].setAttribute('data-src', "../newsClient/public/articles/kate-thielicke-1566322-unsplash.jpg");
    
    }

    function getNewsByParameters(messageToSend) {

        $.ajax({
            url: url,
            data: messageToSend,
            crossDomain: true,
            
            type: "GET",
            success: function(result) {
                postsForCategory = result.posts;
                newsForCategory = result.news;
                appendPostToPage(postsForCategory, newsForCategory);

            },
            error: function(error) {
            },
    
        });
    }
    

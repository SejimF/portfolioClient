

    function appendPostToPage(postArray, newsArray) {
        
        postArray.forEach(function( element ) {
            generatePostsForCategory(element.urlToImage, element.url, element.title);
          });

          newsArray.forEach(function( element ) {
            generateNewsForCategory(element.urlToImage, element.url, element.title, element.description, element.source.name);
          });
          
          cutTitleInPostsParagraph();
          cutDescriptionInNewsParagraph();
          cutTitleInNewsParagraph();
        }

    // generatePostsForCategory();

    function generatePostsForCategory(imgUrl, newsUrl, description) {
        
        // create post item with class
        var post_item = document.createElement("div");
        post_item.classList.add("post_item");

        // create post image container
        var imgContainer = document.createElement("div");
        imgContainer.classList.add("post_img_container");
        imgContainer.classList.add("img_container");


        // create post image container img 
        var img = document.createElement("img");
        img.src = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        img.setAttribute('data-src', imgUrl);

        // create img post arrow and link to post with icon
        var postArrow = document.createElement("div");
        postArrow.classList.add("post_cross");

        var link = document.createElement("a");
        link.setAttribute('href', newsUrl);
        link.setAttribute('target', "_blank");

        var icon = document.createElement("i");
        icon.classList.add("fas");
        icon.classList.add("fa-chevron-right");

        link.append(icon);

        postArrow.append(link);
        
        imgContainer.append(img);
        imgContainer.append(postArrow);
        // create post title
        var postTitleContainer = document.createElement("div");
        postTitleContainer.classList.add("post_title");

        var postTitle = document.createElement("p");
        postTitle.textContent = description;

        postTitleContainer.append(postTitle);

        // add to post item

        var post_container = document.getElementsByClassName("posts")[1];
        
        post_container.append(post_item);
        
        post_item.append(imgContainer);
        post_item.append(postTitleContainer);
    }

    function generateNewsForCategory(imgUrl, newsUrl, title, description, website) {
        // create news_item container
        var news_item = document.createElement("div");
        news_item.classList.add("news_item");
        // create img container
        var img_container = document.createElement("div");
        img_container.classList.add("post_img_container");
        img_container.classList.add("img_container");
        // create img
        var img = document.createElement("img");
        // img.src = imgUrl;
        img.src = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        img.setAttribute('data-src', imgUrl);
        img_container.append(img);
    
        // create title div
        var news_title = document.createElement("div");
        news_title.classList.add("news_title");

        var n_title = document.createElement("h1");
        n_title.textContent = title;
        
        news_title.append(n_title);

        // create description div
        var news_description = document.createElement("div");
        news_description.classList.add("news_description");

        var desc = document.createElement("p");
        desc.classList.add("news_content");
        desc.textContent = description;

        news_description.append(desc);
        // create news link
        var news_link = document.createElement("div");
        news_link.classList.add("news_link");

        var span = document.createElement("span");
        var web = document.createElement("a");
        web.setAttribute('href', website);
        web.setAttribute('target', "_blank");
        web.append(website);
        span.append(website);

        var news_arrow = document.createElement("div");
        news_arrow.classList.add("news_arrow");

        var link = document.createElement("a");
        link.setAttribute('href', newsUrl);
        link.setAttribute('target', "_blank");

        var icon = document.createElement("i");
        icon.classList.add("fas");
        icon.classList.add("fa-chevron-right");

        link.append(icon);
        
        news_arrow.append(link);

        news_link.append(span);
        news_link.append(news_arrow);

        // appending all together
        var news_container = document.getElementsByClassName("news")[1];

        news_container.append(news_item);
        news_item.append(img_container);
        news_item.append(news_title);    
        news_item.append(news_description); 
        news_item.append(news_link);
    }

    function cutTitleInPostsParagraph() {
        var p=$('.post_title p');
        var divh=$('.post_title').height();

        $('.post_title p').each(function( ) {
            while ($(this).outerHeight()>divh) {
                $($(this)).text(function (index, text) {
                    return text.replace(/\W*\s(\S)*$/, '...');
                });
            }
        })
    }

    function cutDescriptionInNewsParagraph() {

        var divh=$('.news_description').height();

        $('.news_description p').each(function( ) {

            while ($(this).outerHeight()>divh) {
                $($(this)).text(function (index, text) {
                    return text.replace(/\W*\s(\S)*$/, '...');
                });
            }
        })
    }

    function cutTitleInNewsParagraph() {
        var divh=$('.news_title').height();

        $('.news_title h1').each(function( ) {

            while ($(this).outerHeight()>divh) {
                $($(this)).text(function (index, text) {
                    return text.replace(/\W*\s(\S)*$/, '...');
                });
            }
        })
    }

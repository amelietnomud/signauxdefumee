var tweets = document.querySelectorAll('li.stream-item');

var html = "";

for (var i = 0, l = tweets.length; i<l; i++) {
    html += "<h1>" +tweets[i].querySelectorAll(".fullname")[0].innerHTML + "</h1>";
    html += "<span>" +tweets[i].querySelectorAll(".tweet-timestamp")[0].innerHTML + "</span>";
    html += "<p>" +tweets[i].querySelectorAll(".tweet-text")[0].innerHTML + "</p>";
};

html
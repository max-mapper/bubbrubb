(function ($) {
  $.fn.bubbRubb = function (options) {
    feedData = [];

    function appendData(feed) {
      $.each(feed, function(i, item) {
        feedData.push(item);
      });
    };

    function displayFeeds() {
      feedData.sort(function(left, right) {
        var a = left.postedTime, b = right.postedTime;
        return a < b ? -1 : a > b ? 1 : 0;
      });

      $.each(feedData, function(i, items) {
        $.each(items, function(i, row){
          $('#bubbrubb > ul').append("<li class='message'><img class='avatar' src='http://www.gravatar.com/avatar/9ec4d6d86cbf793e1ff04ed4478d95ab.jpg?s=40&d=identicon'/><div class='content'><span class='from'><a class='hover_profile'>" + row.actor.displayName + "</a>	" + row.object.summary + "</span><div class='info'>" + row.postedTime + "</div></div></li>");
        });
      });
    }


    $('#bubbrubb').append("<ul id='stream'></ul>");
    for(var i = 0; i < options.feeds.length; i++) {
      $.ajax({
        url: options.feeds[i],
        dataType: 'jsonp',
        success: function(data) {
          // woooo!
          appendData(data);
          if(i == options.feeds.length) {
            displayFeeds();
          }
        }
      });
    }
  };
})(jQuery);

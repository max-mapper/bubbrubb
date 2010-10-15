(function ($) {
  $.fn.bubbRubb = function (options) {
    $('#bubbrubb').append("<ul id='stream'></ul>");
    $.each(options.feeds, function(i, feed) { 
      $.ajax({
        url: feed,
        dataType: 'jsonp',
        success: function(data) {
          // woooo!
          $.each(data, function(i, items) {
            $.each(items, function(i, row){
              $('#bubbrubb > ul').append("<li class='message'><img class='avatar' src='http://www.gravatar.com/avatar/9ec4d6d86cbf793e1ff04ed4478d95ab.jpg?s=40&d=identicon'/><div class='content'><span class='from'><a class='hover_profile'>" + row.actor.displayName + "</a>	" + row.object.summary + "</span><div class='info'>" + row.postedTime + "</div></div></li>");
            });
          });
        }
      });
    });
  };
})(jQuery);
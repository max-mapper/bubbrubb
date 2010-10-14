(function ($) {
  $.fn.bubbRubb = function (options) {
    $('head').append("<style>#bubbrubb { width: 130px; border 1px solid black; padding: 0px; margin: 0px; background-color: #eee;} #bubbrubb h3 { margin: 0px; padding: 0px; } #bubbrubb ul { font-size: 75%; padding: 0px; list-style-type: none; } #bubbrubb li { border-bottom: 1px solid black } #bubbrubb .br_item { padding-right: 5px; }</style>");
    $('#bubbrubb').append("<h3>BubbRubb</h3><ul></ul>");
    $.each(options.feeds, function(i, feed) { 
      $.ajax({
        url: feed,
        dataType: 'jsonp',
        success: function(data) {
          // woooo!
          $.each(data, function(i, items) {
            $.each(items, function(i, row){
              $('#bubbrubb > ul').append('<li><span class="br_item">' + row.object.summary + '</span></li>');
            });
          });
        }
      });
    });
  };
})(jQuery);
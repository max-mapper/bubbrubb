(function() {
  function BubbRubb() {
    $('head').append("<style>#bubbrubb { width: 130px; border 1px solid black; padding: 0px; margin: 0px; background-color: #eee;} #bubbrubb h3 { margin: 0px; padding: 0px; } #bubbrubb ul { font-size: 75%; padding: 0px; list-style-type: none; } #bubbrubb li { border-bottom: 1px solid black } #bubbrubb .br_item { padding-right: 5px; }</style>");
    $('#bubbrubb').append("<h3>BubbRubb</h3><ul></ul>");

    $.getJSON('http://max.couchone.com/pdx911/_design/push/_list/feed/recent?descending=true&limit=5&callback=?', function(data) {
      $.each(data, function(i, items) {
        $.each(items, function(i, row){
          $('#bubbrubb > ul').append('<li><span class="br_item">' + row.object.summary + '</span></li>');
        });
      });
    });
  }

  // In case the user doesn't have jQuery, we'll go fetch it all nice like
  if(!window.jQuery) {
    var script = document.createElement("script");
    script.setAttribute('type', 'text/javascript');
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js";
    script.onload = function() {
      new BubbRubb(articles);
    }
  } else {
    new BubbRubb(articles);
  }
  document.body.appendChild(script);
})();

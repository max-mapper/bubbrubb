(function() {
  function BubbRubb() {
    // Here are the articles that the user wanted
    console.log(articles);
    $('head').append("<style>#bubbrubb { width: 70px; } #bubbrubb ul { font-size: 75%; list-style-type: none; } #bubbrubb .br_item { padding-right: 5px; } #bubbrubb .br_date { padding-left: 5px; }</style>");
    $('#bubbrubb').append("<ul></ul>");
    $.getJSON('http://max.couchone.com/bubbrubb/_design/bubbrubb/_view/recent?descending=true&callback=?', function(data) {
      $.each(data.rows, function(i, row) {
        $('#bubbrubb > ul').append('<li><span class="br_item">' + row.key[0] + '</span><span class="br_date">' + row.key[1] + '</span></li>');
      });
    });
  }

  // In case the user doesn't have jQuery, we'll go fetch it all nice like
  if(!window.jQuery) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.setAttribute('type', 'text/javascript');
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js";
    script.onload = function() {
      new BubbRubb();
    }
  } else {
    new BubbRubb();
  }
  document.body.appendChild(script);
})();

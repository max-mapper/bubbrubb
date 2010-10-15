// lilsis will evolve into a build tool for generating easily droppable bootstrapping javascript files to embed bubbrubb feed widgets for users with minimal technological experience

// In case the user doesn't have jQuery, we'll go fetch it all nice like. they up cookin breakfast or something anyway
if(!window.jQuery) {
  var script = document.createElement("script");
  script.setAttribute('type', 'text/javascript');
  script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js";
  script.onload = function() {
    new bubbRubb(articles);
  }
} else {
  new bubbRubb(articles);
}
document.body.appendChild(script);
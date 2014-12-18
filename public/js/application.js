
$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  interval_id = 0;
  var meditation = null;
  Mousetrap.bind('space', function(){
      if (!meditation) {
        meditation = new Meditation();
      } else {
        meditation.breathe();
      }
  });

});


function time_counter(start) {
  $('#time_count h2').text('Time: ' + ((Date.now()-start)/1000)+' sec')
};
$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  interval_id = 0;
  Mousetrap.bind('space', function(){
    var start = Date.now();
    // event.preventDefault();
    // console.log(interval_id==null);
    $('#breath').text(function(i, text){
      console.log(text === "Inhale");
      return text === "Inhale" ? "Exhale" : "Inhale";
    });


    if (interval_id == 0){
      interval_id = setInterval(function() {time_counter(start)}, 100);

    }else{
      clearInterval(interval_id);
      interval_id = setInterval(function() {time_counter(start)}, 100);
    };
  });

});


function time_counter(start) {
  $('#time_count h2').text('Time: ' + ((Date.now()-start)/1000)+' sec')
};
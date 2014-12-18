function Meditation(){
  this.max_inhale = 0;
  this.max_exhale = 0;
  interval_id = 0;
};


Meditation.prototype.update_max_inhale = function(new_record){
  if(new_record > this.max_inhale){
    this.max_inhale = new_record;
  };
};

Meditation.prototype.update_max_exhale = function(last_record){
  if(new_record > this.max_exhale){
    this.max_exhale = new_record;
  };
};


Meditation.prototype.time_counter = function(start) {
  $('#time_count h2').text('Time: ' + ((Date.now()-start)/1000)+' sec')
};


Meditation.prototype.breath = function(){
  var start = Date.now();
  var self = this;
  $('#breath').text(function(i, text){
    return text === "Inhale" ? "Exhale" : "Inhale";
  });
  if (this.interval_id == 0) {
    this.interval_id = setInterval(function() {self.time_counter(start)}, 100);
  } else {
    clearInterval(interval_id);
    this.interval_id = setInterval(function() { self.time_counter(start)}, 100);
    //debugger
  };
};
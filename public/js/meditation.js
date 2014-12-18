function Meditation(){
  this.max_inhale = 0;
  this.max_exhale = 0;
  interval_id = 0;
  phase_start = Date.now();
};


Meditation.prototype.update_max_inhale = function(new_record){
  if(new_record > this.max_inhale){
    this.max_inhale = new_record;
  };
};

Meditation.prototype.update_max_exhale = function(last_record){
  if(last_record > this.max_exhale){
    this.max_exhale = last_record;
  };
};


Meditation.prototype.time_counter = function(start) {
  $('#time_count h2').text('Time: ' + ((Date.now()-start)/1000)+' sec')
};


// Meditation.prototype.time_diff = function() {
//   console.log('time_diff', ((Date.now()-this.phase_start)/1000));
//   return ((Date.now()-this.phase_start)/1000);
// };


Meditation.prototype.breathe = function(){
  var self = this;
  var t_collapsed = (Date.now() - phase_start)/1000;

  console.log('max_inhale', self.max_inhale);
  phase_start = Date.now();



  $('#breath').text(function(i, text){

    if (text === "Inhale") {

      self.update_max_inhale(t_collapsed);
      // $("<li>Max inhale: "+self.max_inhale+" sec</li>").appendTo('#current_measure');
      $("#max_in").text("Max Inhale: "+self.max_inhale);
      return "Exhale";
    }else{
      self.update_max_exhale(t_collapsed);
      // $("<li>Max exhale: "+self.max_exhale+" sec</li>").appendTo('#current_measure');
      $("#max_ex").text("Max Exhale: "+self.max_exhale);
      return "Inhale";
    };
  });


  if (interval_id == 0){
    interval_id = setInterval(function() {self.time_counter(phase_start)}, 100);

  }else{
    clearInterval(interval_id);
    interval_id = setInterval(function() {self.time_counter(phase_start)}, 100);
  };

};


Meditation.prototype.time_counter = function(start) {
  $('#time_count h2').text('Time: ' + ((Date.now()-start)/1000)+' sec')
};
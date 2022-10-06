//jshint esversion:6

exports.getdate= function (){
  let today=new Date();
  var currentDay=today.getDay();


  var options={
    weekday:'long',
    day: 'numeric',
    month :'long'
  };
  return today.toLocaleDateString("en-US", options);
}
exports.getDay=function(){
  let today=new Date();
  var currentDay=today.getDay();


  var options={
    weekday:'long'

  };
  return today.toLocaleDateString("en-US", options);

}

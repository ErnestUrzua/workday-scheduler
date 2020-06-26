$(document).ready(function () {
  //set current time and Day

  //update the time continuously
  let updateTime = function () {
    let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    $("#currentDay").text(currentTime)
  }

  setInterval(updateTime, 1000);

  //moment().hour(Number);//this sets the hr
  var currentHour = moment().hour() + 1; // this gets the hr +1 because function only does 0-23
  console.log(currentHour);

  //adds to the div class and changes it's color
  // $("#1").addClass("currentHour");
  // $("#1").css("visibility", "visible");

  //highlight curent hour
  function currentHr() {
    $(".day").each(function() {

    var hour = parseInt($(this).attr("id"));
    console.log(hour);
    if (hour < currentHour){
      $(this).addClass("pastHour");
    }

    else if (hour === currentHour){
      $(this).removeClass("pastHour");
      $(this).addClass("currentHour");
    }
    else {
      $(this).removeClass("pastHour");
      $(this).removeClass("currentHour");
    }
    
    })
   

  }

  currentHr();


  //store <textarea> input in local storage
  //when user presses save, 
  $(".fa-save").click(function(){
    // console.log("trying to save data");
    var id = $(this).parent().attr("id");
    var text = $(this).siblings(".event").val();// 
    console.log(id,text);
    
    if (text !== null || text !== "") {
      localStorage.setItem(id, text);
    }
  });

  //be able to retrieve that data on refresh and populate the data
  //$("#9 .event").val(localStorage.getItem("9"));


  $(".event").each(function() {

    var tempId = $(this).parent().attr("id");//grabbing parent-div attr-id
    
    $(this).val(localStorage.getItem(tempId));


    // if (hour < currentHour){
    //   $(this).addClass("pastHour");
    // }
    
    })
  

  





  //create event listeners for updates to hour cells and update them dynamically
  // with set attribute
  // $("#1").on("click", function () {

  //   //  // if (($("#1").hasClass("textarea"))) {

  //   //   }
  //   //   else {
  //   //     //select div
  //   //    // var eventDiv = $("#1");
  //   //     //append <textarea tags to div element
  //   //    // eventDiv.append("<textarea></textarea>");
});
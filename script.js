$(document).ready(function () {
  //set current time and Day

  //update the time continuously
  let updateTime = function () {
    let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    $("#currentDay").text(currentTime)
  }

  setInterval(updateTime, 1000);

  //moment().hour(Number);//this sets the hr
  var currentHour = moment().hour() ; // this gets the hr +1 because function only does 0-23
  console.log("Current hour is " + currentHour);

  //adds to the div class and changes it's color
  // $("#1").addClass("currentHour");
  // $("#1").css("visibility", "visible");

  
  function currentHr() {
    $(".day").each(function () {

      var hour = parseInt($(this).attr("id")); //for each day class take id and put into hour
      console.log(hour);
      //if the hour is less than the current hour we then give it the class pastHour
      //this turns them gray
      if (hour < currentHour) {  
        $(this).addClass("pastHour");
      }

      // if hour is current then we highlight
      else if (hour === currentHour) {
        $(this).removeClass("pastHour");
        $(this).addClass("currentHour");
      }
      //else we dont give it any classes and it will be default styling
      else {
        $(this).removeClass("pastHour");
        $(this).removeClass("currentHour");
      }

    })

  }

  currentHr(); //call function to check what the current hour is

  //store <textarea> input in local storage
  //when user presses save
  $(".fa-save").click(function () {
    // console.log("trying to save data");
    var id = $(this).parent().attr("id"); //select the parent id for the save button
    var text = $(this).siblings(".event").val();// take the text area of event class
    console.log(id, text); 

    //if the text is not null or empty 
    if (text !== null || text !== "") {
      localStorage.setItem(id, text); //set the key and value into local storage
    }
  });

  //be able to retrieve that data on refresh and populate the data
  //$("#9 .event").val(localStorage.getItem("9"));
  $(".event").each(function () {

    var tempId = $(this).parent().attr("id");//grabbing parent-div attr-id

    $(this).val(localStorage.getItem(tempId));//get the item from storage using the Id 

  })

});
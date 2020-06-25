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
    
       

    
    const elements = document.querySelectorAll('div');
    Array.from(elements).forEach((element, index) => {
      // conditional logic here.. access element
      if (currentHour === $(this).val())
      $(this).addClass("currentHour");
      $(this).css("visibility", "visible");
    })

  }

  currentHr();

  //gray out div containers that are past




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
  //   //   }

  // });



});
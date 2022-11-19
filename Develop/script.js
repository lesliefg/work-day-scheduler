$(document).ready(function () {
  //This varible calls for 'now' to return a fresh object with current time and date
  var now = dayjs();
  //This first function will color code our time block according to our local time
  function colorCode() {
    //This varible will make our hour equal to our current local time
      var hour = now.format("HH")
      //Next we look for our textarea time ids that we set to the different time blocks
      $("textarea").each(function () {
        //The timeBlock varible will pull the id of each textarea and compare it to our 'hour' varible
          var timeBlock = parseInt($(this).attr("id"));
          //If our timeBlock is less than the current hour then it will add a 'Past' class to make it gray
          if (timeBlock < hour) {
            $(this).addClass("past")
            //If our timeBlock is greater than the current hour then it will add a 'Future' class to make it green
        } else if (timeBlock > hour) {
          $(this).addClass("future")
          //If our timeBlock is neither greater or less than the current hour then it will add a 'Present' class to make it  red and only one timeblock at a time can hold this class
        } else {
          $(this).addClass("present")
        } 
      })
  }
  //Now that our color coding function has been created we can add the function to our DOM function so it occurs once all elements have rendered
  colorCode();
//Here we add an event listener for our save buttons. It will use the data-id attribute to id which text input is being saved
$(".saveBtn").on("click", function () {
    var saved = $(this).attr("data-id");
    var text = $("#" + saved).val();
    localStorage.setItem("event" + saved, text)

})
for (var i = 9; i <= 18; i++) {
  var savedEvent = localStorage.getItem("event" + (i));
  if (savedEvent !== null) {
      $("#" + (i)).text(savedEvent);
  }
}
  //This varible displays the current date in the header of the page
  var currentDate = dayjs().format('dddd, MMMM D, YYYY ')
  $("#currentDay").text('Today is: ' + currentDate);

  //Added a clear local data button to make it easier to clear all events at the beginning of each day
  $("#clear-btn").on("click", function () {
    //This clears the local storage
    localStorage.clear();
    //This clear all the description event boxes
    $(".description").val('');
  })
});

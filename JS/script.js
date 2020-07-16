// displays date on top of page
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));



$(document).ready(function () {
    // listens for click event on save button
    $(".saveBtn").on("click", function (event) {
        // reads the description
        let description = $(this).siblings(".description").val();
        // reads the hour next to description
        let hour = $(this).parent().attr("id");
        // saves the hour and description to local storage
        localStorage.setItem(hour, description);

        console.log(hour)
        console.log(description)
    });

    // gets the hour and description from local storage and displays it
    $(".description").each(function(){
        $(this).val(localStorage.getItem($(this).parent().attr("id")));
  
    });

    function hourChecker() {
        // checks what hour it currently is 
        currentHour = moment().hours();

        $(".time-block").each(function () {
            // checks hour displayed in time-block
            let displayHour = parseInt($(this).attr("id").split("-")[1]);

            // if the display hour is less than current hour it changes to past
            if (currentHour > displayHour) {
                $(this).removeClass("present");
                $(this).addClass("past");
                $(this).removeClass("future");

            // if display hour is equal to current hour it changes to present
            } else if (currentHour === displayHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");

            // if display hour is not less than or equal to current hour it changes to future
            } else {
                $(this).addClass("future");
            }
        })

    }
    hourChecker();
    // checks hour every 15 seconds in order to update past, present & future
    setInterval(hourChecker, 15000);
})
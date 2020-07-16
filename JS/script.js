// displays date on top of page
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


$(document).ready(function () {
    // listens for click event on save button
    $(".saveBtn").on("click", function (event) {
        // reads the description
        let description = $(this).siblings(".description").val();
        // reads the hour
        let hour = $(this).parent().attr("id");
        // saves the hour and description to local storage
        localStorage.setItem(hour, description);

        console.log(hour)
        console.log(description)
    });

    // gets the hour and description from local storage and displays it
    $(".description").each(function(){
        $(this).val(localStorage.getItem($(this).parent().attr("id")));
  
    })
})
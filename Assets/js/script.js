// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
//   $(".saveBtn").click(function () {
//     let timeBlockId = $(this).parent().attr("id");

//     let textAreaValue = $(this).parent().find("textarea").val();

//     // Need to save text area to local
//     localStorage.setItem(timeBlockId, textAreaValue);
//   });

//   $(".time-block").each(function () {
//     let timeBlock = $(this).attr("id").split("-")[1];

//     let hour = dayjs().hour();

//     if (hour > timeBlock) {
//       // this just calls to the last called id/class
//       // add class past,present,future
//       $(this).addclass("past");
//     } else if (hour === timeBlock) {
//       $(this).addclass("present");
//     } else {
//       $(this).addclass("future");
//     }
//   });

//   $(".description").each(function () {
//     let parentId = $(this).parent().attr("id");

//     let description = localStorage.getItem(parentId);
//     $(this).val(description);
//   });

//
//

$(".saveBtn").on("click", function () {
  let idTimeBlock = $(this).parent().attr("id");

  let textAreaValue = $(this).siblings(".description").val();

  localStorage.setItem(idTimeBlock, textAreaValue);
});

//
//

$(".time-block").each(function () {
  let timeBlock = $(this).attr("id").split("-")[1];
  // split - will give an array and will split "hour-15" into ["hour", "15"]
  let hour = dayjs().hour();

  if (hour > timeBlock) {
    $(this).addClass("past");
  } else if (hour == timeBlock) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

//

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

$(".description").each(function () {
  let parentDes = $(this).parent().attr("id");
  let des = localStorage.getItem(parentDes);

  $(this).val(des);
});
//
// TODO: Add code to display the current date in the header of the page.
$("#todaysDate").text(dayjs().format("dddd, MMM D"));
// });

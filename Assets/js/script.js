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
//

$(".description").each(function () {
  let parentDes = $(this).parent().attr("id");
  let des = localStorage.getItem(parentDes);

  $(this).val(des);
});
//
// TODO: Add code to display the current date in the header of the page.
$("#todaysDate").text(dayjs().format("dddd, MMM D"));
// });

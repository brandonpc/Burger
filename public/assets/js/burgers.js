// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function () {
//   $(".change-sleep").on("click", function (event) {
//     var id = $(this).data("id");
//     var newConsume = $(this).data("newsleep");

//     var newConsumeState = {
//       consumed: newConsume
//     };

//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: newConsumeState
//     }).then(
//       function () {
//         console.log("changed consume to", newConsume);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".create-form").on("submit", function (event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newburger = {
//       name: $("#ca").val().trim(),
//       consume: $("[name=consumed]:checked").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newburger
//     }).then(
//       function () {
//         console.log("created new burger");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
//  IAP ASSIGNMENT
//
// REBECCA AKALWA SHIRIEVO-SCT211 -0538/2022
// NYAGA JOY CHRISTINE-SCT221-O572/2022
// GITHINJI JOYJANE WAMBUI -SCT211-0024/2022
// JEDDY AWUOR ODUOR -SCT 211 -0027/2022
// Query for submit button and input task field
const submit = document.querySelector('#submit');
const newTask = document.querySelector('#task');


// Disable the submit button by default
submit.disabled = true;

// Listen for input to be typed into the input field
newTask.addEventListener("input", function () {
  // Enable the submit button if the input is not empty
  submit.disabled = newTask.value.trim() === "";
});

// Listen for submission of the form
document.querySelector("form").addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Find the task the user just submitted
  const taskText = newTask.value.trim();

  // Create a list item for the new task and add the task to it

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Add new element to our unordered list

document.getElementById("tasks").appendChild(taskItem);

    // Clear the input field
    newTask.value = "";
    submit.disabled = true;


         // prevent the default submission of the form
      event.preventDefault();


 return false;

});

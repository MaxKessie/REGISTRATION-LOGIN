// Get form element by id
const registerForm = document.querySelector('#register');
console.log(registerForm);
// Handle form submit event
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect form data
    const formData = new FormData(registerForm);
   // Send Data to backend
   // Display success message to user
   const messageH1= document.querySelector('#message');
   messageH1.textContent = 'Account registered successfully!';
    });

//registerForm.onsubmit = function(event) {
 //   event.preventDefault();
 //   console.log(event);

 //declare variable age
 // const age = 71;

 //define square age function
 function squareAge(age) {
    return age ** 2;
 }

 const squaredAge = squareAge(34);
 console.log(squaredAge);
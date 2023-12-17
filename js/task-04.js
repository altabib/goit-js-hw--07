const formlInput = document.querySelector(".login-form");

formlInput.addEventListener("submit", (el) => {
  el.preventDefault();
 
  
  if (el.target.elements.email.value.length === 0) {
    return alert("All form fields must be filled in");
    } 
  if (el.target.elements.password.value.length === 0) {
    return alert("All form fields must be filled in");
  }   

  const submitInfo = {
    email: el.target.elements.email.value.trim(),
    password: el.target.elements.password.value.trim(),
  };
  console.log(submitInfo);
   formlInput.reset();

});




 
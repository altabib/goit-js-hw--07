const formInput = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");

formInput.addEventListener("input", (el) => {
    const inputContent = el.target.value.trim();
   

    if (inputContent === "") {
        spanText.textContent = "Anonymous";
       
        console.log(spanText.textContent);
    } else {
        spanText.textContent = inputContent;
    }
    
    
    console.log(spanText.textContent);
}
   
);
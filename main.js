const commentName = document.querySelector("#comment-name");
const commentEmail = document.querySelector("#commment-email");
const commentSubject = document.querySelector("#comment-subject");
const commentContent = document.querySelector("#comment-content");
const commentBtn = document.querySelector("#commentbtn");
const inputs = document.querySelectorAll(".input");

commentBtn.addEventListener("click", ()=>{
    commentBtn.type = "submit"
    let invalidValue = 0;
    for(const input of inputs){
        input.classList.remove("warning");
        input.placeholder = "";
        if(input.value.length === 0){
            commentBtn.type = "button"
            input.placeholder = "Enter value!";
            input.classList.add("warning");
            invalidValue ++;
        }
    }
    if(invalidValue !== 0){
        alert("Please enter values!");
    }else{
        for(const input of inputs){
            input.value = "";
        }
    }
})
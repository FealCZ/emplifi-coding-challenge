// Adds a click event to the primary button that changes its text and appearance
const button = document.querySelector(".primary-btn");
const sendDemo = () => {
    button.innerHTML = '<span class="green-text">✓</span><span> Your request has been sent</span>';
    button.style.background = "#C7EFDC";
    button.style.border = "1px solid #25A066";
    button.style.color = "#000";
}

button.addEventListener("click", sendDemo);
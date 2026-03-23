let count = 0;

const num = document.getElementsByTagName("h1")[0];
const plusButton = document.getElementsByTagName("button")[0];

// plusButton.addEventListener("click", () => {
//     count++;
//     num.innerHTML = count;
// });

plusButton.onclick=()=>{
    count++;
    num.innerHTML = count;
};
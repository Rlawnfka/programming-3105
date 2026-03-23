let count = 0;

const num = document.getElementById("plus");
// const num = document.querySelector("#plus");
// const plusButton = document.getElementsByTagName("button")[0];

// plusButton.addEventListener("click", () => {
//     count++;
//     num.innerHTML = count;
// });

// plusButton.onclick=()=>{
//     count++;
//     num.innerHTML = count;
// };

function plus(){
    count++;
    num.innerHTML = count;
}
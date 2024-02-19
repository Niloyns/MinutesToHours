//fetch id

let gettime = document.getElementById("get");
let submit = document.getElementById("sub");
let result = document.getElementById("res");
let btnsubmit = submit.innerText;

//global value 
let togglr = true;

//click event
submit.addEventListener("click", () => {
  if (togglr) {
    if (gettime.value == "") {
      result.innerHTML = `<p>Enter your Minutes</p>`;
      reset();
    } else {
      let time = gettime.value;
      console.log(time);

      let hr = time / 60;
      let hour = Math.floor(hr);
      console.log(hour);

      let RemainingMinutes = time - hour * 60;
      console.log(RemainingMinutes);
      result.innerHTML = `<p>${hour}hr ${RemainingMinutes}min</p>`;
      reset();
    }
  } else {
    submit.innerText = btnsubmit;
    submit.style = "background-color: green;";
    gettime.value = "";
    result.innerHTML = "";
    console.log("check");
  }
  togglr = !togglr;
});

function reset() {
  submit.style = "background-color: brown;";
  submit.innerText = "Reset";
}

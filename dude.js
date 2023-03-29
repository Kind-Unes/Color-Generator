//Create random string 
//create li
//append li to container 
//add the function to the container when clicking 
//copied (ez)
//Query Selection

const container = document.querySelector(".container");
const button = document.querySelector("button");

const MAX = 16;

const Generate = () => {
  container.innerHTML = "";

  for (let i = 0; i < MAX; i++) {
    //random number
    let randomN = Math.floor(Math.random() * 0xffffff).toString(16);
    //Regulization 
    randomN = `#${randomN.padStart(6, "0")}`;

    //Li's
    const dude = document.createElement("li"); //just creation with out appending 
    dude.classList.add("color");
    dude.innerHTML = `<div class="image" style="background-color: ${randomN}"></div>
                         <span class="hex">${randomN}</span>`;
    //copy function
    dude.addEventListener("click", () => copycolor(dude, randomN));
    //insert Child 
    container.appendChild(dude);
  }
};
Generate();

const copycolor = (elem, hexvalue) => {
  const ColorElement = document.querySelector(".btn");
    ColorElement.innerText = "Copied !";
    navigator.clipboard.writeText(hexvalue);
    setTimeout(()=> ColorElement.innerText = "Click Me" , 1000);

};

button.addEventListener("click", Generate);
// function greet(userName, time = "Day") {
//   return(`Good ${time} ${userName}`);
// }

// const result = greet("Neda", "Night");
// console.log(result)

// let greet = function (userName) {
//   //   console.log("Hello " + userName);
//   console.log(`Hello ${userName}`);
// };

// let greet = (userName) => {
//     console.log(`Hello ${userName}`);
//   };

const unorderedListElement = document.querySelector(".shopping");//DOM element
function populateList (list)
{

    // for (let item of list )
    // {

    // }
    for (let i = 0 ; i <list.length ; i++)
    {
        console.log(list[i]); //for each of these items, create an li, append it to unorderedlistElement
        const listItemElement = document.createElement("li");
        listItemElement.textContent = list[i];
        unorderedListElement.appendChild(listItemElement);

    }
}

let shoppingList = ["cheese", "bread", "green pepper"];

populateList(shoppingList);

function changeListStyle()
{
  unorderedListElement.classList.add("squareList");
  unorderedListElement.classList.remove("circleList");

//   unorderedListElement.classList.replace("circleList", "squareList");

}

changeListStyle()


function updateImage()
{
    const imageElement = document.querySelector("#shoppingCart");
    console.log(imageElement);
    imageElement.src = "https://cdn-icons-png.flaticon.com/512/263/263142.png";
    imageElement.width = 100;
    imageElement.heigt= 100;
    imageElement.alt = "shopping cart icon"
}
updateImage();

function findGreen ()
{
    const listItems = document.querySelectorAll(".shopping li");
    for (let i = 0 ; i < listItems.length; i++)
    {
        if(listItems[i].textContent.includes("green")){
            listItems[i].classList.add("greenText");
        }
    }
}

findGreen();
const url = 'data.json';

async function getBusinessData(){
    const response = await fetch(url);
    const data = await response.json();
    //const arrFruitID = [6,35,84];
    console.log(data.fruits);
    //displayBusinesses(data.business);
    populateOptions(data.fruits,'first');
    populateOptions(data.fruits,'second');
    populateOptions(data.fruits,'third');
    //calcNutrition(data.fruits,arrFruitID);
    return data;
}
const data = getBusinessData();


function populateOptions(fruits,selector){
    const sel = document.getElementById(selector);

    fruits.forEach(fruit => {
        let opt = document.createElement('option');
        opt.innerHTML = fruit.name;
        opt.value = fruit.id;
        sel.appendChild(opt);
        //console.log(fruit.name);
    });

}

const btnSend = document.getElementById('send');

btnSend.addEventListener('click',()=>{
    let arrFruitID=[];
    const name = document.getElementById('first_name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const firstFruit = document.getElementById('first');
    const secondFruit = document.getElementById('second');
    const thirdFruit = document.getElementById('third');
    console.log("I click on send button");
    arrFruitID.push(firstFruit.value);
    arrFruitID.push(secondFruit.value);
    arrFruitID.push(thirdFruit.value);
    console.log(arrFruitID);
    //let data_fruit=[];
    //data_fruit = data.then( (data) => console.log("Line 47:", data.fruits));
    //console.log("Line 49:",data_fruit);
    //calcNutrition(data.then( (data) => data.fruits),arrFruitID);
    //console.log("Line 46:",data.then( (data) => console.log(data.fruits[1].name)));
});

function calcNutrition(fruits, arrFruitID){
    let calories=0;
    let protein=0;
    let fat=0;
    let sugar=0;
    let carbohydrates = 0;

    arrFruitID.forEach( id=>{
            fruits.forEach( fruit =>{
                if (fruit.id === id){
                    calories += fruit.nutritions.calories; 
                    protein += fruit.nutritions.protein;
                    carbohydrates +=fruit.nutritions.carbohydrates;
                    fat +=fruit.nutritions.fat;
                    sugar +=fruit.nutritions.sugar;
                }
            });
        });

    console.log(`Calories: ${calories} \nProtein: ${protein} \nCarbohydrates: ${carbohydrates} \nFat: ${fat} \nSugar: ${sugar}`);

}

const url = 'data.json';
let fruitdata=[];
async function getBusinessData(){
    const response = await fetch(url);
    //console.log(response);
    const data = await response.json();
    //const arrFruitID = [6,35,84];
    console.log(data.fruits);
    //displayBusinesses(data.business);
    populateOptions(data.fruits,'first');
    populateOptions(data.fruits,'second');
    populateOptions(data.fruits,'third');
    //calcNutrition(data.fruits,arrFruitID);
    //console.log("line 13:",data);
    //data.fruits.forEach( fruit=>fruitdata.push(fruit));
    //this.data=data;
    //return data;
    fruitdata = data;
}
//getBusinessData();
//console.log("line 19:",fruitdata);

/*
async function getFruits(){
    try{
        let response = await fetch(url);
        return await response.json();
    }catch (error){
        console.log(error);
    }
}
async function renderFruits(){
    let data = await getFruits();
    console.log("line 27:", data.fruits);
}
renderFruits();
*/


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
    //let numDrinks = 0;
    
    
    let arrFruitID=[];
    const name = document.getElementById('first_name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const firstFruit = document.getElementById('first');
    const secondFruit = document.getElementById('second');
    const thirdFruit = document.getElementById('third');
    const notes = document.getElementById('instructions');
    //console.log("I click on send button");
    arrFruitID.push(firstFruit.value);
    arrFruitID.push(secondFruit.value);
    arrFruitID.push(thirdFruit.value);
    console.log(arrFruitID);

    console.log(name.value);

    document.getElementById('name_order').textContent = ` ${name.value}`;
    document.getElementById('email_order').textContent = ` ${email.value}`;
    document.getElementById('phone_order').textContent = ` ${phone.value}`;
    document.getElementById('fruit_one').textContent = ` ${firstFruit.options[firstFruit.selectedIndex].text}`;
    document.getElementById('fruit_two').textContent = ` ${secondFruit.options[secondFruit.selectedIndex].text}`;
    document.getElementById('fruit_three').textContent = ` ${thirdFruit.options[thirdFruit.selectedIndex].text}`;
    document.getElementById('notes').textContent = `${notes.value}`;

    //Count the drinks using localStorage
    if(!localStorage.getItem('drinks')){
        localStorage.setItem('drinks',1);
    }else{
        let numDrinks = Number(localStorage.getItem('drinks'))+1;
        localStorage.setItem('drinks',numDrinks);
    }

    //numDrinks++;

    //console.log("Line 83:",numDrinks);

    //let data_fruit=[];
    //data_fruit = data.then( (data) => console.log("Line 47:", data.fruits));
    //console.log("Line 49:",data_fruit);
    calcNutrition(fruitdata.fruits,arrFruitID);
    //console.log("Line 46:",data.then( (data) => console.log(data.fruits[1].name)));
    resetForm();
});
function resetForm(){
    document.forms[0].reset();
}
function addLocalStorage(){

}
function calcNutrition(fruits, arrFruitID){
    let calories=0;
    let protein=0;
    let fat=0;
    let sugar=0;
    let carbohydrates = 0;

    arrFruitID.forEach( id=>{
            fruits.forEach( fruit =>{
                if (fruit.id == id){
                    calories += fruit.nutritions.calories; 
                    protein += fruit.nutritions.protein;
                    carbohydrates +=fruit.nutritions.carbohydrates;
                    fat +=fruit.nutritions.fat;
                    sugar +=fruit.nutritions.sugar;
                }
            });
        });

    document.getElementById('calories').textContent = ` ${calories}`;
    document.getElementById('protein').textContent = ` ${protein}`;
    document.getElementById('carbohydrates').textContent = ` ${carbohydrates}`;
    document.getElementById('fat').textContent = ` ${fat}`;
    document.getElementById('sugar').textContent = ` ${sugar}`;
    
    //console.log(`Calories: ${calories} \nProtein: ${protein} \nCarbohydrates: ${carbohydrates} \nFat: ${fat} \nSugar: ${sugar}`);

}



async function main(){
    await getBusinessData();
    //calcNutrition(fruitdata.fruits,[6,35,84]);
    //console.log("line 102:",fruitdata.fruits[0].name);
}
main();
//console.log("line 105:",fruitdata);
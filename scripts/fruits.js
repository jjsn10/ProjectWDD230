const url = 'data.json';

async function getBusinessData(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.fruits);
    //displayBusinesses(data.business);
    populateOptions(data.fruits,'first');
    populateOptions(data.fruits,'second');
    populateOptions(data.fruits,'third');
    calcNutrition(data.fruits,6);
}
getBusinessData();

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
function calcNutrition(fruits, id){
    let calories=0;
    let protein=0;
    let fat=0;
    let sugar=0;
    let carbohydrates = 0;

    fruits.forEach( fruit =>{
        if (fruit.id === id){
            calories += fruit.nutritions.calories; 
            protein += fruit.nutritions.protein;

        }
    });
    console.log(`Calories: ${calories} \nProtein: ${protein}`);

}

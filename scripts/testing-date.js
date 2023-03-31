current_date = new Date("2023-04-02 18:00:00");

const optionLong = {
    weekday:"long"
};

const lDay= current_date.toLocaleDateString('en-US', optionLong);
const nDay= current_date.getDate();
/*console.log("Line 12:",current_date);

console.log("Line 14:",lDay);
console.log("Line 15:",nDay);

console.log("Line 17:",`${lDay} - ${nDay}`);*/


function formattDate(date_forecast){
    current_date = new Date(date_forecast);
    console.log("Line 18:",current_date);
    const optionLong = {
        weekday:"long"
    };

    const lDay= current_date.toLocaleDateString('en-US', optionLong);
    const nDay= current_date.getDate();

    return `${lDay} - ${nDay}`;

}

date_to_format = formattDate('2023-04-02 18:00:00');

console.log("Line 33,",date_to_format);
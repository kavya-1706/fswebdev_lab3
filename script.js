function calculateBMI(){
    var userName = document.getElementById("userName").value;
    var userAge = document.getElementById("userAge").value;
    var userWeight = document.getElementById("userWeight").value;
    var userHeight = document.getElementById("userHeight").value;
    var bmi=(userWeight)/((userHeight)*(userHeight))
    var result=("BMI: "+bmi)
    if (!userName || !userAge || !userWeight || !userHeight) {
        alert("Please fill in all the required fields!");
        return; 
    }
    var status="Weight Status: ";
    if (bmi < 18.5) {
        status += 'Underweight';
    } else if (18.5 <= bmi && bmi <= 24.9) {
        status += 'Healthy Weight';
    } else if (25.0 <= bmi && bmi <= 29.9) {
        status += 'Overweight';
    } else if (30.0 <= bmi && bmi <= 39.9) {
        status += 'Obese';
    } else if (bmi > 40.0){
        status += 'Severe Obesity';
    }else{
        status += 'Error: enter valid details please!'
    }

    document.getElementById("output").innerHTML = result;
    document.getElementById("status").innerHTML = status;
    
}

    let input;
    let btn = document.getElementById("btn"); // select the button with btn
    let output = document.getElementById("output"); // select the output section
    

inputCheck = () => { // this function check the input data to ascertain that it meet the required condition
    input = document.getElementById("input").value;
    if(input.length < 3){
        output.innerHTML = `Input is less than 3 digits, so check button is deactivated`;
    } else if(input.length > 3){
        output.innerHTML = `This Armstrong Number checker is for 3 digits number, your input value exceed 3 digits`;
    } else if(input.length === 3){
        if(isNaN(input)){
            output.innerHTML = `Only valid number is require`;
        } else {
            output.innerHTML = armstrong(input)
        }
    }
}

deactivate = () => { // this function is to deactivate the check button in case the conditions are not met
    input = document.getElementById("input").value;
    if(input.length < 3){
        btn.style.opacity = `0.2`;
        output.innerHTML = `Input is less than 3 digits, so check button is deactivated`;
    } else if(input.length > 3){
        btn.style.opacity = `0.2`;
        output.innerHTML = `This Armstrong Number checker is for 3 digits number, your input value exceed 3 digits`;
    }
    else {
        btn.style.opacity = `1`;
        output.innerHTML= ``;
    }
}

armstrong = (num) => { // this is the algorithm that check whether the number is an armstrong number or not
	let numArr = num.toString();
	let sum = 0;
	for(let i = 0; i < numArr.length; i++){
		sum += Math.pow(numArr[i], 3);
	}
	if(sum == num){
			return `${num} is an armstrong number`;
		} else{
			return `${num} is not an armstrong number`;
		}
}
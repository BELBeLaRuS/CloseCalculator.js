let string = '',
    $input = document.querySelector('.input');
    $story = document.querySelector('.story');


$input.onkeyup = function(e){

	if(e.key == 'Enter'){
		let result = strToMath(string); 	
        this.value = result; 

        $story.innerHTML += `<i>${string}=${result}</i>`; 
        string = `(${string})`; 
	}
	else
		string += e.key;
}

function strToMath(string){
	string = string.replaceAll(' ', '').replaceAll('+', ' + ').replaceAll('*', ' * ').replaceAll('-', ' - ').replaceAll('/', ' / ').split(' ');


	for(let i = 0; i < string.length; i++){
		if(string[i] == ''){
			string.splice(i, 2);
			string[i] = '-'+string[i];
		}
	}

	let calc = document.createElement('calc');
	calc.style['opacity'] = `calc(${string.join(' ')})`;
	let result = parseFloat(calc.style['opacity'].replace('calc(', '').replace(')', ''))

	calc.remove();
	return result;
}































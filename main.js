const food = document.querySelectorAll('.food')

Array.from(food).forEach(element => element.addEventListener('click', checkForFood))

function checkForFood(click){
	if(click.target.classList.contains('full')){
		alert("Good boy!");
		document.querySelector('#finnYes').classList.toggle('hidden')
	}else{
		alert("Wrong! How dare you starve him?");
		document.querySelector('#finnNo').classList.toggle('hidden')
	}
}

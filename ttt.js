
window.onload = init;

function init ()  {
	const ss = document.getElementsByTagName("td");
	const ss1 = ss.length;

	for(i = 0; i < ss1; i++) {
		ss[i].onclick = controller.pClick;
	}
}
const controller = {
	pClick: function (e) {
		toggle();
			//console.log(model.state);
			//console.log(e);
		const domID = e.target;
		const event = parseInt(e.target.id); 
		if (double(event)) {
			return false;
		} 
		model.arrayCount++;
		array (event);
			console.log(model.clickArray);
			console.log(model.clickArray2);
		if(model.statexo) {
			domID.innerHTML = "X";
			model.statexo = false;
		} else  {
			domID.innerHTML = "O";
			model.statexo = true;
		}
			//console.log(model.clickArray);
		if(model.arrayCount == 3){
			const gg = model.clickArray.sort();
			winArray(gg);
			document.getElementById("show").innerHTML = "YOU WINNER!";
		}
	}

};

function win () {
	if(winArray()) {
			document.getElementById("show").innerHTML = "YOU WINNER!";
		return true;
	}
}

function winArray (input) {
	for(let y = 0; y < 8; y++) {
		for(let i = 0; i < 3; i++) {
			if (input[i] != model.statewin[y][i])
				 return false;

		return true;
		}
	}
}

function array (event) {
	(model.arrayCount < 4) ?  model.clickArray.push(event): model.clickArray2.push(event);
}

function toggle () {
	model.state = (model.state == 0) ? 1 : 0;
}

function double (input) {
	
	const mess = ["You clicked Already!","Please Click another."];

	const hh = model.clickArray.indexOf(input);
	const h2 = model.clickArray2.indexOf(input);
	if (hh >= 0 || h2 >= 0) {
			document.getElementById("show").innerHTML = mess[model.state]; 
		return true;
	} 
	return false;
}

const model = {
	state: 0,
	clickArray:[],
	clickArray2:[],
	arrayCount: 0,
	statexo: true,

	statelength: 3,
	statex:[],
	stateo:[],
	statewin:[ 
		[1,2,3],
		[1,5,9],
		[1,4,7],
		[2,5,8],
		[3,5,7],
		[3,6,9],
		[4,5,6],
		[7,8,9]
			]

};


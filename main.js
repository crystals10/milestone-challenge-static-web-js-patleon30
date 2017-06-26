const heightInput = document.getElementById('heightInput');
const characterInput = document.getElementById('characterInput');
const button = document.getElementById('GrowYourTree');


var Tree = {
	height: "",
	character: ""


};
button.addEventListener("click", function(){
	growTree (Tree.height, Tree.character)
});

heightInput.addEventListener ("keyup", function(){
	Tree.height = heightInput.value

})

characterInput.addEventListener ("keyup", function(){
	Tree.character = characterInput.value
})

function growTree (num, char){
var Leaves = "";
	for (var i = 0; i < num; i++) {
		Leaves +=char 
	console.log(Leaves)

}
}


#pragma strict

function Start () {
	gameObject.SetActive (false);
}

function Update () {
	if(gameObject)
	showHint();
}
function showHint(){
	yield WaitForSeconds (5);
	gameObject.SetActive (true);

}
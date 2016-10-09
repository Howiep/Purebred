#pragma strict

var target : Transform;
var distance : float;



function Update () {
	//Camera
	transform.position.z = target.position.z -distance;
	transform.position.y = target.position.y;
	transform.position.x = target.position.x;
}
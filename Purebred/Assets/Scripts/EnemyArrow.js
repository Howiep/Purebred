#pragma strict

var damage : int;


function Awake () {
	
}

function Update(){
	Destroy(gameObject, 15);
	
}


function OnTriggerEnter2D(other: Collider2D) {
	if (other.gameObject.tag == "Player"){
		other.gameObject.GetComponent(PlayerController).RemoveLives(damage);
		if (other.gameObject.GetComponent(PlayerController).livesLeft <= 0 ){
			other.gameObject.GetComponent(Rigidbody2D).gravityScale = 10;
		}
		other.gameObject.SetActive (false);
		yield WaitForSeconds (0.2);
		other.gameObject.SetActive (true);
		gameObject.SetActive (false);
	}
}

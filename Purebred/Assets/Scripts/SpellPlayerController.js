#pragma strict

var scoreValue : int;

var gameMainController : GameObject;
var gameController : GameMainController;

function Awake(){
	gameMainController = GameObject.Find("gameMain");
	gameController = gameMainController.GetComponent(GameMainController);
}

function Start () {
	
}

function Update () {
	Destroy(gameObject, 5);
}

function OnTriggerEnter2D(other: Collider2D) {
	if (other.gameObject.tag == "enemy"){
		if(other.gameObject.GetComponent(VillagerController)){
			other.gameObject.GetComponent(VillagerController).CancelInvoke ("castSpell");
			other.gameObject.SetActive (false);
		}
		else if(other.gameObject.GetComponent(ArcherController)){
			other.gameObject.GetComponent(ArcherController).livesLeft --;
			if (other.gameObject.GetComponent(ArcherController).livesLeft <= 0 ){
				other.gameObject.GetComponent(ArcherController).CancelInvoke ("castSpell");
				other.gameObject.SetActive (false);
			}
		}
		else if(other.gameObject.GetComponent(TowerController)){
			other.gameObject.GetComponent(TowerController).livesLeft --;
			if (other.gameObject.GetComponent(TowerController).livesLeft <= 0 ){
				other.gameObject.GetComponent(TowerController).CancelInvoke ("castSpell");
				other.gameObject.SetActive (false);
			}
		}
		gameObject.SetActive (false);
		gameController.AddScore (scoreValue);
		other.gameObject.GetComponent(ParticleSystem).emission.enabled = true;
		
	}
	
	
}
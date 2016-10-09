#pragma strict

var playerSpeed : float = 1; //speed player moves
var turnSpeed : float = 1; // speed player turns

var gameMainController : GameObject;
var gameController : GameMainController;

var optionsGO : GameObject;
var options : Options;

var spellOrbSpeed : float;
var playerSpell : GameObject;

var livesLeft : int;
var livesLeftValue : int;
var HPText : UI.Text;
var winText : UI.Text;

var scoreValue : int;

function Awake  ()
{
	optionsGO = GameObject.Find("options");
	options = optionsGO.GetComponent(Options);
	
	gameMainController = GameObject.Find("gameMain");
	gameController = gameMainController.GetComponent(GameMainController);
}
function Start(){
	livesLeft = 50;
	UpdateLivesLeft();
}
function Update ()
{
	MoveForward(); // Player Movement
	TurnRightAndLeft();//Player Turning
	CastSpell();
}

function MoveForward()
{
	if(Input.GetKey(options.moveForward)){
		transform.Translate(Vector2.right * playerSpeed * Time.deltaTime);
	}
	
	if(Input.GetKey(options.moveBackwards)){
		transform.Translate(Vector2.left * playerSpeed * Time.deltaTime);
	}
}

function TurnRightAndLeft()
{
	if(Input.GetKey(options.turnRight)){
		transform.Rotate(0.0, 0.0, -5.0);
		
	}else if(Input.GetKey(options.turnLeft)){
		transform.Rotate(0.0, 0.0, 5.0);
	}
}
function CastSpell() {
	if(Input.GetKeyDown(options.castSpell)){
		var spawnPoint : Vector3 = new Vector3 (0, 0, 0);
		var castPoint : GameObject = GameObject.Find("castPoint");
		spawnPoint += castPoint.transform.position;
		var newSpell : GameObject = GameObject.Instantiate(playerSpell);
		newSpell.transform.position = spawnPoint;
		var spellSpeed : Vector3 = new Vector3 (transform.rotation.z, spellOrbSpeed * Time.deltaTime);
		newSpell.GetComponent(Rigidbody2D).velocity = transform.right;
	}
}


function OnTriggerEnter2D(other: Collider2D) {
	if (other.gameObject.tag == "enemy"){
		if(other.gameObject.GetComponent(VillagerController)){
			other.gameObject.GetComponent(VillagerController).CancelInvoke ("castSpell");
			other.gameObject.SetActive (false);
			gameController.AddScore (scoreValue);
			Addlives (livesLeftValue);
		}
		else if(other.gameObject.GetComponent(ArcherController)){
			other.gameObject.GetComponent(ArcherController).CancelInvoke ("castSpell");
			other.gameObject.SetActive (false);
			gameController.AddScore (scoreValue);
			Addlives (livesLeftValue);
		}
		
	}
	if(livesLeft <= 0 && other.gameObject.tag == "ground"){
		gameObject.GetComponent(Rigidbody2D).gravityScale = 10;
		Destroy (GetComponent (PlayerController));
	}
	
}
function Addlives(newlivesValue : int){
	livesLeft += newlivesValue;
	UpdateLivesLeft();
	
}
function RemoveLives(newLivesValue : int){
	livesLeft -= newLivesValue;
	UpdateLivesLeft();
}
function UpdateLivesLeft(){
	HPText.text = "HP: " + livesLeft;
	if(livesLeft < 1){
		winText.text = "RIP";
	}
}
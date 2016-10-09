#pragma strict

var isCasting = false;
var enemyAttack : GameObject;
var enemyCastDir : GameObject;

var targetGO: GameObject;

var fireRate : float;
var fireDelay : float;

var gameMainGO: GameObject;
var gameMainController: GameMainController;

var livesLeft : float = 2;

function Awake() {
	targetGO = GameObject.Find("player");
	gameMainGO = GameObject.Find("gameMain");
	gameMainController = gameMainGO.GetComponent(GameMainController);
}
function Start () {
	
	fireRate = Random.Range(1,5) / gameMainController.gameSpeed;
	fireDelay = Random.Range(3,5) / gameMainController.gameSpeed;
	
	isCasting = true;
	InvokeRepeating ("castSpell", fireDelay, fireRate);
	
	var enemyNR : String = gameObject.name;
	enemyCastDir = GameObject.Find ("/" + enemyNR + "/enemyCastPoint");
	
}

function Update () {
	
	var targetPostition;
	targetPostition = new Vector2( targetGO.transform.position.y, this.transform.position.x) ;
	enemyCastDir.transform.LookAt( targetGO.transform ) ;
	
}

function castSpell() {
	
	var newSpell : GameObject = GameObject.Instantiate(enemyAttack);
	
	var spawnPoint : Vector2;
	spawnPoint = new Vector2 (0, 0);
	spawnPoint += enemyCastDir.transform.position;
	
	newSpell.transform.position = spawnPoint;
	
	newSpell.GetComponent(Rigidbody2D).velocity = enemyCastDir.transform.forward;
	
}
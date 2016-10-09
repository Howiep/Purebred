#pragma strict
import UnityEngine.SceneManagement;

var gameSpeed : float;
var checkGameOver = false;

var scoreText : UI.Text;
var winText : UI.Text;
var score : int;


function Start () {
	score = 0;
	UpdateScore();
}

function Update () {
	
}
function FixedUpdate(){
	if (Input.GetKey(KeyCode.Escape)) {
		SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
	}
}

function AddScore(newScoreValue : int){
	score += newScoreValue;
	UpdateScore();
}

function UpdateScore(){
	scoreText.text = "" + score;
		if (score >= 1740){
		winText.text = "You win!";
	}
}
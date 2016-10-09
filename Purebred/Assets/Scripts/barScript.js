#pragma strict
import UnityEngine.UI;

var fillAmount : float;

var healthContent : Image;
var scoreContent : Image;

var playerGO : GameObject;
var player : PlayerController;

var gameMainController : GameObject;
var gameController : GameMainController;

function Awake () {
	playerGO = GameObject.Find("player");
	player = playerGO.GetComponent(PlayerController);
	
	gameMainController = GameObject.Find("gameMain");
	gameController = gameMainController.GetComponent(GameMainController);
}

function Update () {
	healthContent.fillAmount = Map(player.livesLeft, 0, 50, 0, 1);
	scoreContent.fillAmount = Map(gameController.score, 0, 1740, 0, 1);
}


function Map (value: float, inMin : float, inMax : float, outMin : float, outMax : float){
	return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

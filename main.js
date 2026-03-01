// In main.js, change the initialization to pass video-wrapper as the render target
// so the webcam feed and Three.js canvas sit inside the inset rounded container.
// The outer renderDiv is only used for sizing reference.

import { Game } from "./game.js";

var renderDiv = document.getElementById("video-wrapper"); // ← changed from 'renderDiv'
if (!renderDiv) {
	console.error("Fatal Error: video-wrapper element not found.");
} else {
	var game = new Game(renderDiv);
	window._game = game;
}

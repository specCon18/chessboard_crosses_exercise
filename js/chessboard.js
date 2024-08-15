export default {
	draw,
	highlight
};
var diagonals = [];
var highlighted = [];;
var tileDiagonals = new Map();

function draw(boardEl) {
	//instantiating the diagonals data structure
	for (let i = 0; i < 30; i++){
		diagonals.push([]);
	}

	for (let i = 0; i <= 7; i++) {
		let rowEl = document.createElement("div");
		for (let j = 0; j <= 7; j++) {
			let tileEl = document.createElement("div");
			rowEl.appendChild(tileEl);

			let majorDiagIdx = diagonals[7 - (i-j)];
			let minorDiagIdx = diagonals[15 + (i+j)];
			
			majorDiagIdx.push(tileEl);
			minorDiagIdx.push(tileEl);

			tileDiagonals.set(tileEl,[majorDiagIdx,minorDiagIdx]);
		}
		boardEl.appendChild(rowEl);
	}
}

function highlight(tileEl) {
	// clear all currently highlighted tiles (if any)
	for (let diag of highlighted) {
		for (let el of diag){
			el.classList.remove("highlighted");
		}
	}


	// check if user clicked on a board tile.
	if (tileEl) {
		highlighted = tileDiagonals.get(tileEl);

		for (let diag of highlighted) {
			for (let el of diag){
				el.classList.add("highlighted");
			}
		}
	}
}
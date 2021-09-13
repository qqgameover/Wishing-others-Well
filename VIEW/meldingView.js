//Kasper :)

let leddValg = [[], [], [], []];
let mottaker = "";
let mottakerUserName = "";
function updateViewMeldinger() {
	let html = "";
	let leddArray = [[], [], [], []];
	const ledd = () => {
		for (let i = 0; i < model.data.muligeMeldinger.length; i++) {
			if (model.data.muligeMeldinger[i].ledd == 0) {
				leddArray[0].push(model.data.muligeMeldinger[i]);
			}
			if (model.data.muligeMeldinger[i].ledd == 1) {
				leddArray[1].push(model.data.muligeMeldinger[i]);
			}
			if (model.data.muligeMeldinger[i].ledd == 2) {
				leddArray[2].push(model.data.muligeMeldinger[i]);
			}
			if (model.data.muligeMeldinger[i].ledd == 3) {
				leddArray[3].push(model.data.muligeMeldinger[i])
			}
		}
	}
	ledd();
	let suggestions = suggestionPrinter(mottaker);
	html = `
	<div id="top"></div> 
	<div class="containerInput">
		<label for="messageSearch">Send melding til:
		<input id="focusInput" onclick="focusMethod(this.id)" oninput="searchName(this.value) ; mottakerUserName = findUserName(this.value) ; 
		mottaker = this.value ; updateView() ; focusMethod(this.id)" ; value = "${mottaker}" autofocus="true"/></label>
			<div id="suggestions">${suggestions}</div>
	</div>
	<div class="containerMessages"> `

	for (let j = 0; j < 4; j++) {
		html += `<select id="select${j}" onchange="leddValg[${j}] = this.value; updateView()" id="leddValg[${j}]" multiple>`
		for (let i = 0; i < leddArray[j].length; i++) {
			if (leddValg[j] == leddArray[j][i].text) {
				html += `<option selected value="${leddArray[j][i].text}">
					${leddArray[j][i].text}
				</option>`
			} else {
				html += `<option value="${leddArray[j][i].text}">
					${leddArray[j][i].text}
				</option>`
			}
		}
		html += `</select>`
	}

	html += `</select> 
	</div>
	</div>
	<div class="containerForFluff">
	<p id="valgtMelding">${leddValg[0]} ${leddValg[1]} ${leddValg[2]} ${leddValg[3]}</p>
	<button class="sendButton" 
		onclick="sendMessage(leddValg[0], leddValg[1], leddValg[2], leddValg[3], mottakerUserName, model.app.currentUser) ;
		 mottaker = '' ; updateView()">
		Send melding
	</button>
	</div>

	<div class="navbar">
		<a href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
		<a href="#Hjem" onclick="gotoH()" class="fa fa-home"></a>
		<a href="#" class="previous round" onclick="goBack()">&#8249;</a>

	</div>`
	return html;
}
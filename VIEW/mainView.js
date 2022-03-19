function updateViewMain() {
	let html = ""
	html = `

	<div class="navbar navbar-expand-lg">
		<a class="nav-item" href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
		<a class="nav-item" href="#Hjem" onclick="gotoH()">Hjem</a>
        <a class="nav-item" onclick="gotoInbox()">Inbox</a> 
		<a class="nav-item" onclick="handleSignoutClick(event)">Logg ut
		</a>
	</div>
	<div class="container">
	<img src="https://i.ibb.co/0nL3TqP/Banner-Wo-W.png" alt="Banner" 
		style="width: 75%; display: block; margin-left: auto; margin-right: auto; max-height: 25vh;">
	<div class="imgLeft">
		<img id="larvikBilde" src="https://i.ibb.co/rwn3rbj/larvik-Kom.png" alt="larvik-Kom" border="0"></div>
	<div class="imgRight">
		<img id="lhkBilde" src="https://i.ibb.co/Sf5F7MD/lhk.png" alt="lhk" border="0"></div>
	<h1 class="headerMain mt-2">WOW</h1>
	<h1 class="subHeader mb-2">I LARVIKSKOLEN</h1></div>
<div class="container">
<div class="mainGrid">
	<div style="background-image: linear-gradient(to bottom right,${gradientMessage});"
		class="grid-item" onclick="gotoMeldinger()"> Meldinger
		<div class="gridInsideAGrid">
			<div class="battery" id="pointsG" style="background-image: 
			linear-gradient(to bottom right,${colorM1});"></div>
			<div class="battery" id="pointsG" style="background-image: 
			linear-gradient(to bottom right,${colorM2});"></div>
			<div class="battery" id="pointsG" style="background-image: 
			linear-gradient(to bottom right,${colorM3});"></div>
		</div>		
	</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientMental});" 
		class="grid-item" onclick="gotoKategorier(3)">Mental Styrke
		<div class="gridInsideAGrid">
			<div class="battery" id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorMs1});"></div>
			<div class="battery" id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorMs2});"></div>
			<div class="battery" id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorMs3});"></div>
	</div>
	</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientFysisk});" 
		class="grid-item" onclick="gotoKategorier(2)">Fysisk Aktivitet
		<div class="gridInsideAGrid">
			<div class="battery" id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorF1});"></div>
			<div class="battery" id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorF2});"></div>
			<div class="battery" id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorF3});"></div>
		</div>
	</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientLag});"
		class="grid-item" onclick="gotoKategorier(4)">Lagånd
		<div class="gridInsideAGrid">
			<div class="battery" id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorL1});"></div>
			<div class="battery" id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorL2});"></div>
			<div class="battery" id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorL3});"></div>
		</div>
	</div>	
</div>		
</div>	

`
	return html
}

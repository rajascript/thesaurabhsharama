let activateSpoke = function(spk, mainTxt) {
	spk.classList.remove("profileButton__info--borderInactive");
	spk.classList.add("profileButton__info--borderActive");
	if (mainTxt !== null && typeof mainTxt !== "undefined") {
		mainTxt.classList.remove("profileButton__info--inactive");
		mainTxt.classList.add("profileButton__info--active");
	}
};

let deActivateSpoke = function(spk, mainTxt) {
	spk.classList.remove("profileButton__info--borderActive");
	spk.classList.add("profileButton__info--borderInactive");
	if (mainTxt !== null && typeof mainTxt !== "undefined") {
		mainTxt.classList.remove("profileButton__info--active");
		mainTxt.classList.add("profileButton__info--inactive");
	}
};

spokeworkMain = document.getElementById("spoke__workMain");
spokeworkMainTxt = document.getElementById("spoke__workMainTxt");
spokework1 = document.getElementById("spoke__work1");
spokework2 = document.getElementById("spoke__work2");

spokehealthMain = document.getElementById("spoke__healthMain");
spokehealthMainTxt = document.getElementById("spoke__healthMainTxt");
spokehealth1 = document.getElementById("spoke__health1");
spokehealth2 = document.getElementById("spoke__health2");

spokerelMain = document.getElementById("spoke__relMain");
spokerelMainTxt = document.getElementById("spoke__relMainTxt");
spokerel1 = document.getElementById("spoke__rel1");
spokerel2 = document.getElementById("spoke__rel2");
$(window).scroll(function() {
	if ($(window).scrollTop() >= 1 * $(window).height()) {
		document
			.getElementById("profileButton")
			.classList.remove("animated__rightInvisible");
		document
			.getElementById("profileButton")
			.classList.add("animated__leftVisible");
	} else if ($(window).scrollTop() <= 1 * $(window).height()) {
		console.log("2");
		document
			.getElementById("profileButton")
			.classList.remove("animated__leftVisible");
		document
			.getElementById("profileButton")
			.classList.add("animated__rightInvisible");
	}
	if (
		$(window).scrollTop() >= 1 * $(window).height() &&
		$(window).scrollTop() <= 2 * $(window).height()
	) {
		console.log("3");
		activateSpoke(spokework1);
		activateSpoke(spokeworkMain);
		deActivateSpoke(spokework2);

		deActivateSpoke(spokehealthMain, spokehealthMainTxt);
		deActivateSpoke(spokehealth1);
		deActivateSpoke(spokehealth2);

		deActivateSpoke(spokerelMain);
		deActivateSpoke(spokerel1);
		deActivateSpoke(spokerel2);
	}
	if (
		$(window).scrollTop() >= 2 * $(window).height() &&
		$(window).scrollTop() <= 3 * $(window).height()
	) {
		console.log("4");
		activateSpoke(spokework2);
		activateSpoke(spokeworkMain, spokeworkMainTxt, spokeworkMainTxt);
		deActivateSpoke(spokework1);

		deActivateSpoke(spokehealthMain, spokehealthMainTxt);
		deActivateSpoke(spokehealth1);
		deActivateSpoke(spokehealth2);

		deActivateSpoke(spokerelMain, spokerelMainTxt, spokerelMainTxt);
		deActivateSpoke(spokerel1);
		deActivateSpoke(spokerel2);
	}
	if (
		$(window).scrollTop() >= 3 * $(window).height() &&
		$(window).scrollTop() <= 4 * $(window).height()
	) {
		console.log("5");
		activateSpoke(spokehealth1);
		activateSpoke(spokehealthMain, spokehealthMainTxt);
		deActivateSpoke(spokehealth2);

		deActivateSpoke(spokeworkMain, spokeworkMainTxt);
		deActivateSpoke(spokework1);
		deActivateSpoke(spokework2);

		deActivateSpoke(spokerelMain, spokerelMainTxt);
		deActivateSpoke(spokerel1);
		deActivateSpoke(spokerel2);
	}
	if (
		$(window).scrollTop() >= 4 * $(window).height() &&
		$(window).scrollTop() <= 5 * $(window).height()
	) {
		console.log("5");
		activateSpoke(spokehealth2);
		activateSpoke(spokehealthMain, spokehealthMainTxt);
		deActivateSpoke(spokehealth1);

		deActivateSpoke(spokeworkMain, spokeworkMainTxt);
		deActivateSpoke(spokework1);
		deActivateSpoke(spokework2);

		deActivateSpoke(spokerelMain, spokerelMainTxt);
		deActivateSpoke(spokerel1);
		deActivateSpoke(spokerel2);
	}
	if (
		$(window).scrollTop() >= 5 * $(window).height() &&
		$(window).scrollTop() <= 6 * $(window).height()
	) {
		console.log("6");
		activateSpoke(spokerel1);
		activateSpoke(spokerelMain, spokerelMainTxt);
		deActivateSpoke(spokerel2);

		deActivateSpoke(spokeworkMain, spokeworkMainTxt);
		deActivateSpoke(spokework1);
		deActivateSpoke(spokework2);

		deActivateSpoke(spokehealthMain, spokehealthMainTxt);
		deActivateSpoke(spokehealth1);
		deActivateSpoke(spokehealth2);
	}
	if (
		$(window).scrollTop() >= 6 * $(window).height() &&
		$(window).scrollTop() <= 7 * $(window).height()
	) {
		console.log("7");
		activateSpoke(spokerel2);
		activateSpoke(spokerelMain, spokerelMainTxt);
		deActivateSpoke(spokerel1);

		deActivateSpoke(spokeworkMain, spokeworkMainTxt);
		deActivateSpoke(spokework1);
		deActivateSpoke(spokework2);

		deActivateSpoke(spokehealthMain, spokehealthMainTxt);
		deActivateSpoke(spokehealth1);
		deActivateSpoke(spokehealth2);
	}
});

let moveTo = function(el) {
	console.log("here", el);
	console.log("click");
	$([document.documentElement, document.body]).animate(
		{
			scrollTop: $("#" + el).offset().top
		},
		1000
	);
};

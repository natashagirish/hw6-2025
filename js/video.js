var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
});

document.getElementById("play").addEventListener("click", function () {
	video.play();
	updateVolumeInfo();
});

document.getElementById("pause").addEventListener("click", function () {
	video.pause();
});

document.getElementById("slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
});

document.getElementById("faster").addEventListener("click", function () {
	video.playbackRate /= 0.9;
});

document.getElementById("skip").addEventListener("click", function () {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
});

document.getElementById("mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		this.textContent = "Mute";
	} else {
		video.muted = true;
		this.textContent = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	updateVolumeInfo();
});

function updateVolumeInfo() {
	var volumeDisplay = document.querySelector('#volume');
	volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
}

document.getElementById("vintage").addEventListener("click", function () {
	if (!video.classList.contains('oldSchool')) {
		video.classList.add('oldSchool');
	}
});

document.getElementById("orig").addEventListener("click", function () {
	if (video.classList.contains('oldSchool')) {
		video.classList.remove('oldSchool');
	}
});
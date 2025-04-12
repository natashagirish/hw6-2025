var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	// initialize the video element, turn off autoplay and looping
	video = document.querySelector('video');
	video.autoplay = false;
	video.loop = false;
});

// Play the video and update the volume info display
document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	updateVolumeInfo();
});

// Pause the video
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

// Reduce video playback speed by 10% and show the new speed
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Slow speed is " + video.playbackRate);
});

// Increase video playback speed by dividing by 0.9 and show the new speed
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Fast speed is " + video.playbackRate);
});

// Forward the video by 10 seconds or restart if the end is reached
document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime = video.currentTime + 10;
	}
	console.log("Current location is " + video.currentTime);
});

// Toggle mute on the video and update button text 
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		this.textContent = "Mute";
		console.log("Unmute")
	} else {
		video.muted = true;
		this.textContent = "Unmute";
		console.log("Mute")
	}
});

// Update the video volume based on slider input and update volume info
document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	updateVolumeInfo();
	console.log("Volume is " + video.volume);
});

// Update volume info display
function updateVolumeInfo() {
	var volumeDisplay = document.querySelector('#volume');
	volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
}

// Add the oldSchool class to apply vintage styling
document.querySelector("#vintage").addEventListener("click", function () {
	if (!video.classList.contains('oldSchool')) {
		video.classList.add('oldSchool');
	}
});

// Remove the oldSchool class to revert to original styling
document.querySelector("#orig").addEventListener("click", function () {
	if (video.classList.contains('oldSchool')) {
		video.classList.remove('oldSchool');
	}
});

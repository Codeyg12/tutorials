"use strict";

const playNpauseBtn = document.querySelector("#play-pause");
const video = document.querySelector("video");
const rewindBtn = document.querySelector("#rewind");
const fastForwardBtn = document.querySelector("#fast-forward");
const volumeBtn = document.querySelector("#volume");
const progressIndicator = document.querySelector("#progress-indicator");
const progessBar = document.querySelector("#progress-bar");

let mouseIsDown = false;

function playNpauseFn() {
  video.paused ? video.play() : video.pause();
}

function updatePlayNPauseIcon() {
  const icon = playNpauseBtn.querySelector("i");
  icon.textContent = "";

  icon.textContent = video.paused ? "play_arrow" : "paused";
}

function rewindNforwardFn(type) {
  video.currentTime += type === "rewind" ? -10 : 10;
}

function muteNunmuteFn() {
  video.muted = video.muted ? false : true;
}

function updateVolumeIcon() {
  const icon = volumeBtn.querySelector("i");
  icon.textContent = "";
  icon.textContent = video.muted ? "volume_off" : "volume_up";
}

function updateProgress() {
  const progressPercentage = (video.currentTime / video.duration) * 100;

  progressIndicator.style.width = `${progressPercentage}%`;
}

function seekingFn(e) {
  const updatedTime = (e.offsetX / progessBar.offsetWidth) * video.duration;

  video.currentTime = updatedTime;
}

video.addEventListener("play", updatePlayNPauseIcon);
video.addEventListener("click", playNpauseFn);
video.addEventListener("pause", updatePlayNPauseIcon);
playNpauseBtn.addEventListener("click", playNpauseFn);
rewindBtn.addEventListener("click", () => rewindNforwardFn("rewind"));
fastForwardBtn.addEventListener("click", () => rewindNforwardFn("forward"));
video.addEventListener("volumechange", updateVolumeIcon);
volumeBtn.addEventListener("click", muteNunmuteFn);
video.addEventListener("timeupdate", updateProgress);
progessBar.addEventListener("mousedown", () => (mouseIsDown = true));
progessBar.addEventListener("mouseup", () => (mouseIsDown = false));
progessBar.addEventListener("click", seekingFn);
progessBar.addEventListener("mousemove", (e) => mouseIsDown && seekingFn);

window.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    playNpauseFn();
  } else if (e.code === "ArrowLeft") {
    rewindNforwardFn("rewind");
  } else if (e.code === "ArrowRight") {
    rewindNforwardFn("forward");
  } else {
    return;
  }
});

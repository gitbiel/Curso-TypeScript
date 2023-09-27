"use strict";
const video = document.querySelector("video");
if (video instanceof HTMLVideoElement) {
    console.log(video.volume);
}

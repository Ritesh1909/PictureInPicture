const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt a user to select a media stream , pass to element, then play
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    }catch(error){
        console.log("Whoops, error here:",error);
    }
}

button,addEventListener('click',async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

//on Load
selectMediaStream();
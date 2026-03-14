const video = document.getElementById('webcam');
const siren = new Audio('siren.mp3'); // You must have a siren.mp3 file in your folder!
siren.loop = true;

// 1. Load the AI Models
// face-api needs these specific model files to know what a face looks like
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
  faceapi.nets.faceExpressionNet.loadFromUri('./models')
]).then(startVideo);

// 2. Start the Webcam
function startVideo() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
    })
    .catch(err => console.error("Webcam error:", err));
}

// 3. The Torture Loop
video.addEventListener('play', () => {
  
  setInterval(async () => {
    // Scan the video feed for faces and expressions
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();
    
    // If a face is found on screen
    if (detections.length > 0) {
      
      // Get the score of how "surprised" they look (0.0 to 1.0)
      const surprisedScore = detections[0].expressions.surprised;
      
      // If they are holding the pose (80% confidence)
      if (surprisedScore > 0.8) {
         siren.pause();
         video.style.border = "5px solid green"; // Visual feedback
      } else {
         // They dropped the pose! Punish them.
         if (siren.paused) siren.play();
         video.style.border = "5px solid red";
      }

    } else {
       // No face detected at all
       if (siren.paused) siren.play();
       video.style.border = "5px solid red";
    }
    
  }, 500); // Check twice a second
});
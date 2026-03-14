# ⏰ The Doomsday Alarm: Pure Psychological Warfare

**Disclaimer: The creator of this application takes no responsibility for broken screens, lost hearing, or extreme emotional distress caused by attempting to turn off this alarm.**

## 💀 Overview
Built for a hackathon, this is not an alarm clock designed to wake you up gently. It is an alarm clock designed to trap you in a gauntlet of cognitive and physical torture. There is no simple "Stop" button. To silence the alarm, the user must survive a randomly selected pool of hostile user-interface challenges and biometric gates. 

Fail, and the system triggers the **Escalation Protocol**.

## 🪤 Methods of Torture (Features)
* 👁️ **The Gate (Facial Recognition):** Powered by AI, the system requires the user to stare into the webcam and hold a physical "Surprised" expression (jaw dropped, eyes wide) with at least 80% confidence. If they drop the pose, the siren immediately resumes.
* 👻 **The Ghost Button:** A tiny, unstyled "Stop" button that calculates the user's screen size and teleports to a random X/Y coordinate every 400 milliseconds, making it nearly impossible to click.
* ⌨️ **The Panic Passphrase:** The user must type an apocalyptic phrase (e.g., "THE SERVERS ARE BURNING") perfectly backward. A single typo instantly wipes the input field clean, forcing them to start over.
* 🚨 **The Escalation Protocol:** A 10-second Doomsday Clock. If the user fails to pass the challenges in time, the browser is forced into Fullscreen mode, the UI strobes violently using pure CSS animations, and the HTML5 Audio API blasts a siren at maximum volume.

## 🛠️ Tech Stack
* **Frontend:** Raw, unstyled HTML5, CSS3, and Vanilla JavaScript (because modern UI frameworks are too forgiving).
* **AI / Biometrics:** `face-api.js` (for client-side facial expression detection).
* **Local Environment:** Python HTTP Server.

## 🚀 How to Run (Enter at Your Own Risk)
Because modern browsers block webcams and AI models from loading on local `file:///` paths for security reasons, you **must** run this on a local server.

1. Clone this repository to your local machine.
2. Ensure you have the required `face-api.js` weights inside a folder named exactly `/models`:
   * `tiny_face_detector_model-weights_manifest.json`
   * `tiny_face_detector_model-shard1`
   * `face_expression_model-weights_manifest.json`
   * `face_expression_model-shard1`
3. Ensure you have a terrifying audio file named `siren.mp3` in the root directory.
4. Open your terminal in the root folder and start a Python server:
   ```bash
   python -m http.server 8000

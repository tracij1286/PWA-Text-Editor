const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
	// Store the triggered event.
	window.deferredPrompt = event;

	// Show the button.
	butInstall.classList.toggle("hidden", false);
});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
	// When button is clicked, access the stored event.
	const promptEvent = window.deferredPrompt;
	if (!promptEvent) {
		return;
	}
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle("hidden", true);
});
// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
	// Clear prompt.
	window.deferredPrompt = null;
});

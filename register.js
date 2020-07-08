function register() {
    console.log("Registering mailto...");
    navigator.registerProtocolHandler("mailto", "./handler.html?protocol=%s", "title_mailto");
    console.log("Registering web+foo...");
    navigator.registerProtocolHandler("web+foo", "./handler.html?protocol=%s", "title_webfoo");
    console.log("Registering ext+foo...");
    navigator.registerProtocolHandler("ext+foo", "./handler.html?protocol=%s", "title_extfoo");
    console.log("Registering ipfs...");
    navigator.registerProtocolHandler("ipfs", "https://example.org?protocol=%s", "title_ipfs");
}

window.addEventListener("DOMContentLoaded", function() {
    register(); // no user gesture
    document.getElementsByTagName("button")[0].addEventListener("click", register); // user gesture
});

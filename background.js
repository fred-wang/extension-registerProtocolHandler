chrome.commands.onCommand.addListener(function(command) {
    if (command === "register_in_tab") {
        chrome.tabs.create({"url": "register.html",
                            "selected": true});
    } else if (command === "register_in_background") {
        console.log("Registering mailto...");
        navigator.registerProtocolHandler("mailto", "./handler.html?protocol=%s", "title_mailto");
        console.log("Registering web+foo...");
        navigator.registerProtocolHandler("web+foo", "./handler.html?protocol=%s", "title_webfoo");
        console.log("Registering ext+foo...");
        navigator.registerProtocolHandler("ext+foo", "./handler.html?protocol=%s", "title_extfoo");
        console.log("Registering ipfs...");
        navigator.registerProtocolHandler("ipfs", "https://example.org?protocol=%s", "title_ipfs");
        chrome.tabs.create({"url": "handler.html",
                            "selected": true});
    }
});

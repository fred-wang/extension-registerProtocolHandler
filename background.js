chrome.commands.onCommand.addListener(function(command) {
    if (command === "register_in_tab") {
        chrome.tabs.create({"url": "register.html",
                            "selected": true});
    } else if (command === "register_in_background") {
        console.log("Registering email and web+foo...");
        navigator.registerProtocolHandler("mailto", "./handler.html?protocol=%s", "title_mailto");
        navigator.registerProtocolHandler("web+foo", "./handler.html?protocol=%s", "title_webfoo");
        chrome.tabs.create({"url": "handler.html",
                            "selected": true});
    }
});

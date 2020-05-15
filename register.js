console.log("Registering email and web+foo...");
navigator.registerProtocolHandler("mailto", "./handler.html?protocol=%s", "title_mailto");
navigator.registerProtocolHandler("web+foo", "./handler.html?protocol=%s", "title_webfoo");

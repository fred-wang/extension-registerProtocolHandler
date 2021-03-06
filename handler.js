window.addEventListener("DOMContentLoaded", function() {
    var url = new URL(window.location);
    var searchParams = new URLSearchParams(url.search);
    document.body.insertAdjacentHTML(
        "beforeend",
        searchParams.has("protocol") ?
            `Protocol handled:\n\n${searchParams.get('protocol')}` :
            'Try a protocol handler: <a href="mailto:email@example.com">email</a> <a href="web+foo:49258711b31d9faf71c4fcd269d9bfb8">web+foo</a> <a href="ext+foo:49258711b31d9faf71c4fcd269d9bfb8">ext+foo</a> <a href="ipfs:QmT5NvUtoM5nWFfrQdVrFtvGfKFmG7AHE8P34isapyhCxX/wiki/Mars.html">ipfs</a>'
    );
});

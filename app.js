const getLinks = () => {
    var external_links = Array.prototype.map.call(
            document.querySelectorAll("link, img, script, iframe, source, embed, video, audio"),
            (HTMLtag) => {
                return HTMLtag.src || HTMLtag.href;
            }
    )
    return external_links;
};

browser.runtime.onMessage.addListener((request, _, sendResponse) => {
    if (request.method == "getLinks"){
        sendResponse({
            data: getLinks(),
        });
    }else if (request.method == "localStorage"){
        sendResponse({
            data: Object.entries(localStorage),
        });
    }else{
        sendResponse({
            data: null,
        })
    }
});
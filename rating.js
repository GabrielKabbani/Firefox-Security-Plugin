const showRating = () => {
    let cookie_num = Number(document.getElementById('all-cookies').getAttribute("value"));
    let storage_num = Number(document.getElementById('num-storage').getAttribute("value"));
    let domains_num = Number(document.getElementById('third-party-domains-number').getAttribute("value"));

    var rating = document.getElementById("rating");

    var score = ((cookie_num) + (storage_num/2) + (domains_num/30)) * 1000;

    let content = document.createTextNode("Security Rating: " + score.toFixed(1));

    rating.appendChild(content);

};

function getActiveTab(){
    return browser.tabs.query({
        currentWindow: true,
        active: true
    });
}

setTimeout(() => {
    getActiveTab().then(showRating);
}, 100);

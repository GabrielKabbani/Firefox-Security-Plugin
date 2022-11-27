const gettingAllCookies = (tabs) => {
    let tab = tabs.pop();
    let domain = tab.url.split("/")[2];
    let num_cookies = 0;
    var getAllCookies = browser.cookies.getAll({
        url: tab.url,
    });

    getAllCookies.then((cookies) => {

        num_cookies = cookies.length;
        var totalcookies = document.getElementById("all-cookies");
        var firstpartycookies = document.getElementById("first-party-cookies");
        var thirdpartycookies = document.getElementById("third-party-cookies");

        if (cookies.length > 0){
            let content = document.createTextNode(num_cookies + " cookies in this page!");
            totalcookies.appendChild(content);
            totalcookies.setAttribute("value", num_cookies);

            for (let cookie of cookies){
                let li = document.createElement("li");
                let sessnav = "";
                if (cookie.session){
                    sessnav = "session";
                }else{
                    sessnav = "navigation";
                }

                let content = document.createTextNode("Cookie name: " + cookie.name + "--> This is a " + sessnav + " cookie");
                li.appendChild(content);

                if ((cookie.domain ==  domain) || (cookie.domain == "." + domain) || (cookie.domain == "www" + domain) || (cookie.domain == "www." + domain) || ("." + cookie.domain == domain) || ("www." + cookie.domain == domain) || ("www" + cookie.domain == domain)){
                    firstpartycookies.appendChild(li);
                } else{
                    thirdpartycookies.appendChild(li);
                }
            }
        } 
    });
};

function getActiveTab(){
    return browser.tabs.query({
        currentWindow: true,
        active: true
    });
}

getActiveTab().then(gettingAllCookies);

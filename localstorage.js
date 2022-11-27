const getLocalStorage = async (tabs) => {
    let tab = tabs.pop();
    const response = await browser.tabs.sendMessage(tab.id, {method: "localStorage",});
    const localStorageSize = response.data.length;
    var storageList = document.getElementById("local-storage-list");
    var numstorage = document.getElementById("num-storage");

    if(localStorageSize > 0){
        let amount_storage = 0;
        for (let i of response.data){
            let li = document.createElement("li");
            let content = document.createTextNode(i[0]);
            li.appendChild(content);
            storageList.appendChild(li);
            amount_storage++;
        }
        let content = document.createTextNode(amount_storage + " storage instances in this page!");
        numstorage.appendChild(content);
        numstorage.setAttribute("value", amount_storage);
    } else{
        let li = document.createElement("li");
        let content = document.createTextNode("Zero local storage!");
        li.appendChild(content);
        storageList.appendChild(li);
    }
};

function getActiveTab(){
    return browser.tabs.query({
        currentWindow: true,
        active: true
    });
}

getActiveTab().then(getLocalStorage);
chrome.runtime.onInstalled.addListener(() => {
        chrome.contextMenus.create({
            title: "POST2GAS",
            contexts: ["all"],
            id:"contextid",
        });
    });
chrome.contextMenus.onClicked.addListener((item) => {

    const GASUrl = "";//GAS側のdoPOST関数のurl
    let mydata = {mydata:{value:item.selectionText}}
    fetch(GASUrl, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(mydata)
      })
  });
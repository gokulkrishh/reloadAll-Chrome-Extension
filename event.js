
function reloadAll () {
  chrome.tabs.query({}, function (arrayOfTabs) {
    arrayOfTabs.forEach(function (tabs) {
      chrome.tabs.reload(tabs.id); //will reload current tab
    });
  });
};

chrome.browserAction.onClicked.addListener(reloadAll);
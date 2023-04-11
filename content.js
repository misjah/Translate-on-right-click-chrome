chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "translate") {
    var text = window.getSelection().toString();
    var url = "https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=" + encodeURIComponent(text);
    chrome.tabs.create({ url: url });
  }
});


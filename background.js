chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translate",
    title: "Translate \"%s\" to English",
    contexts: ["selection"]
  });

  chrome.contextMenus.create({
    id: "translateToSpanish",
    title: "Translate \"%s\" to Spanish",
    contexts: ["selection"]
  });

  chrome.contextMenus.create({
    id: "translateToFrench",
    title: "Translate \"%s\" to French",
    contexts: ["selection"]
  });
  chrome.contextMenus.create({
    id: "translateToSerbian",
    title: "Translate \"%s\" to Serbian",
    contexts: ["selection"]
  });
  chrome.contextMenus.create({
    id: "translateToGerman",
    title: "Translate \"%s\" to German",
    contexts: ["selection"]
  });

  chrome.contextMenus.create({
    id: "translateToChinese",
    title: "Translate \"%s\" to Chinese",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "translate") {
    translateTo("en", info.selectionText);
  } else if (info.menuItemId === "translateToSpanish") {
    translateTo("es", info.selectionText);
  } else if (info.menuItemId === "translateToFrench") {
    translateTo("fr", info.selectionText);
  } else if (info.menuItemId === "translateToSerbian") {
    translateTo("sr", info.selectionText);
  } else if (info.menuItemId === "translateToGerman") {
    translateTo("de", info.selectionText);
  } else if (info.menuItemId === "translateToChinese") {
    translateTo("zh-CN", info.selectionText);
  }
});

function translateTo(language, text) {
  const url = `https://translate.google.com/#view=home&op=translate&sl=auto&tl=${language}&text=${encodeURIComponent(text)}`;
  chrome.tabs.create({ url });
}


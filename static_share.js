var INJECTED_CLASSNAME = 'crx-lazy-box';

var onDOMNodeInserted = function(e) {
  var currentNode = e.target;
  if (currentNode.nodeType == Node.ELEMENT_NODE && currentNode.className != '' &&
      !currentNode.classList.contains(INJECTED_CLASSNAME)) {
    findShareDialog(currentNode);
  }
};

var findShareDialog = function(currentNode) {
  var shareDialog = currentNode.querySelector('div[role="dialog"] > div > span');
  if (!shareDialog) {
    return false;
  }
  currentNode.classList.add(INJECTED_CLASSNAME);
  currentNode.style.top = '5px';
  currentNode.style.left = ((window.innerWidth - currentNode.clientWidth) / 2) + 'px';
  currentNode.style.position = 'fixed';
};

document.body.addEventListener('DOMNodeInserted', onDOMNodeInserted, false);

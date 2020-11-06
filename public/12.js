function test () {        
    // eslint-disable-next-line no-undef
    window.open(chrome.extension.getURL('public/index.html'));
}

document.querySelector("#myapp").addEventListener('click', test, false)
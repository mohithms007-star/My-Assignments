let browser = "Browser Version: Chrome";

function checkBrowserVersion(cb) {
    setTimeout(() => cb(browser),2000);
}
function callback(version){
    console.log(version);
}
checkBrowserVersion(callback)
isMobile()
  ? (function (win) {
      let doc = win.document;
      let docEl = doc.documentElement;
      let metaEl = document.querySelector('meta[name="viewport"]');
      metaEl.setAttribute(
        "content",
        "initial-scale=.5,maximum-scale=.5,minimum-scale=.5,user-scalable=no,viewport-fit=cover"
      );
      function reRem() {
        let _width = docEl.getBoundingClientRect().width;
        let _rem = _width / 100;
        docEl.style.fontSize = _rem + "px";
      }
      reRem();
      win.addEventListener("resize", function () {
        reRem();
      });
    })(window)
  : "";

function isMobile() {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return true;
  } else {
    return false;
  }
}

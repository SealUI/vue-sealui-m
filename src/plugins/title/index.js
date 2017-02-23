const plugin = {
  install (Vue, opts) {
    if (!Vue.$seal) {
      Vue.$seal = {
        setTitle: setTitle
      }
    } else {
      Vue.$seal.setTitle = setTitle
    }
  }
}

var setTitle = function (title, url = '/favicon.ico') {
  if (title === undefined) {
    return
  }
  document.title = title
  var mobile = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/i.test(mobile)) {
    var iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.setAttribute('src', url)
    var iframeCallback = function () {
      setTimeout(function () {
        iframe.removeEventListener('load', iframeCallback)
        document.body.removeChild(iframe)
      }, 0)
    }
    iframe.addEventListener('load', iframeCallback)
    document.body.appendChild(iframe)
  }
}

export default plugin
export const install = plugin.install

;(function main() {
  const iframe = document.querySelector('frame[name="x3"]')
  iframe.addEventListener('load', onLoad)
})()

function onLoad() {
  const iWindow = this.contentWindow
  const iDocument = iWindow.document
  const head = iDocument.head || iDocument.getElementsByTagName('head')[0]
  const styleElement = createStyle()
  head.appendChild(styleElement)
  console.log('form#zabba style changed')
}

function createStyle() {
  var css = `
  @media (max-width: 576px) {
    form#zabba table {
      display: block;
      width: 100%;
    }
    form#zabba tr {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
    form#zabba td {
      width: auto !important;
    }
    form#zabba .auto-style2 {
      white-space: normal;
      display: inline-block;
      font-size: 16px;
    }
  }  
  `
  var style = document.createElement('style')
  style.appendChild(document.createTextNode(css))
  return style
}

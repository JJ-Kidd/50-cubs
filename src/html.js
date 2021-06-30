import React from "react"
import PropTypes from "prop-types"

const goFundMe =  `!function(t,e){try{function n(t){var n=e.createElement("iframe");return n.setAttribute("class","gfm-embed-iframe"),n.setAttribute("width","100%"),n.setAttribute("height","540"),n.setAttribute("frameborder","0"),n.setAttribute("scrolling","no"),n.setAttribute("src",t),n}t.addEventListener("message",function(t){t.data&&((function(t){return[].slice.call(e.getElementsByClassName("gfm-embed-iframe")).filter(function(e){return e.contentWindow===t.source})[0]}(t)).height=t?.data?.offsetHeight)},!1),e.addEventListener("DOMContentLoaded",function(){for(var t=e.getElementsByClassName("gfm-embed"),r=0;r<t.length;r++){var i=n(t[r].getAttribute("data-url"));t[r].appendChild(i)}})}catch(t){}}(window,document);`

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <div id="donate" className="gfm-embed" data-url="https://www.gofundme.com/f/thee-old-men-and-50-cubs/widget/medium/"></div>
        <script dangerouslySetInnerHTML= {{ __html: `${goFundMe}`}} defer />`  
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
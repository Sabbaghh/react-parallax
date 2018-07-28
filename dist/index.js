!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports["react-parallax"]=t(require("react"),require("prop-types")):e["react-parallax"]=t(e.React,e.PropTypes)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),u=r(l),c=n(0),f=r(c),d=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"react-parallax-background "+this.props.className},this.props.children)}}],[{key:"isParallaxBackground",value:function(){return!0}}]),t}(f.default.Component);d.propTypes={children:u.default.node,className:u.default.string},d.defaultProps={className:""},t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),f=n(0),d=r(f),g=n(6),p=n(4),h=r(p),b={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},m=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onWindowResize=function(){n.parentHeight=(0,g.getNodeHeight)(n.canUseDOM,n.parent),n.updatePosition()},n.onWindowLoad=function(){n.updatePosition()},n.onScroll=function(e){if(n.canUseDOM){var t=Date.now();t-n.timestamp>=10&&(0,g.isScrolledIntoView)(n.node,100,n.canUseDOM)&&(window.requestAnimationFrame(n.updatePosition),n.timestamp=t)}},n.onContentMount=function(e){n.content=e},n.updatePosition=function(){if(n.content){var e=!1;n.contentHeight=n.content.getBoundingClientRect().height,n.contentWidth=n.node.getBoundingClientRect().width,n.img&&n.img.naturalWidth/n.img.naturalHeight<n.contentWidth/n.getImageHeight()&&(e=!0);var t=(0,g.getRelativePosition)(n.node,n.canUseDOM,n.parent);n.img&&n.setImagePosition(t,e),n.bg&&n.splitChildren.bgChildren.length>0&&n.setBackgroundPosition(t)}},n.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:b,bgStyle:s({},b,n.getCustomBgStyle(e)),percentage:0},n.canUseDOM=(0,g.canUseDOM)(),n.node=null,n.content=null,n.splitChildren=(0,g.getSplitChildren)(e),n.bgImageLoaded=!1,n.bgImageRef=void 0,n.parent=e.parent,n.parentHeight=(0,g.getNodeHeight)(n.canUseDOM,n.parent),n.timestamp=Date.now(),n.dynamicBlur=!(!e.blur||void 0===e.blur.min||void 0===e.blur.max),n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this.props.parent,t=this.state,n=t.bgImage,r=t.bgImageSrcSet,i=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,r,i):this.updatePosition(),this.setParallaxStyle()}},{key:"componentWillReceiveProps",value:function(e){var t=e.parent,n=e.bgImage,r=e.bgImageSrcSet,i=e.bgImageSizes;this.splitChildren=(0,g.getSplitChildren)(e),t&&this.parent!==t&&(this.parent=t,this.removeListeners(),this.addListeners()),this.parentHeight=(0,g.getNodeHeight)(this.canUseDOM,this.parent),this.state.bgImage!==n&&this.loadImage(n,r,i)}},{key:"shouldComponentUpdate",value:function(e,t){return e.bgImage===this.props.bgImage||t.bgImage!==this.state.bgImage}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setParallaxStyle",value:function(){this.node&&(this.node.style.position="relative",this.node.style.overflow="hidden")}},{key:"getCustomBgStyle",value:function(e){var t=this,n={};return this.props.bgStyle&&Object.keys(this.props.bgStyle).forEach(function(e){n[e]=t.props.bgStyle[e]}),n}},{key:"setBackgroundPosition",value:function(e){var t=this.props,n=t.disabled,r=t.strength;if(!0!==n){var i=r<0,o=(i?r:0)-r*e,a="translate3d(-50%, "+o+"px, 0)";this.setState({bgStyle:s({},this.state.bgStyle,{WebkitTransform:a,transform:a}),percentage:e})}}},{key:"setImagePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.bgHeight,i=n.bgWidth,o=n.disabled,a=n.strength,l=n.blur,u=r||(t?"auto":this.getImageHeight()+"px"),c=i||(t?this.contentWidth+"px":"auto");if(!0!==o){var f=a<0,d=(f?a:0)-a*e,g="translate3d(-50%, "+d+"px, 0)",p="none";l&&(p="blur("+(this.dynamicBlur?l.min+(1-e)*l.max:l)+"px)"),this.setState({imgStyle:s({},this.state.imgStyle,{height:u,width:c,WebkitTransform:g,transform:g,WebkitFilter:p,filter:p}),percentage:e})}}},{key:"getImageHeight",value:function(){var e=this.props.strength<0,t=e?2.5:1,n=t*Math.abs(this.props.strength);return Math.floor(this.contentHeight+n)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"loadImage",value:function(e,t,n){var r=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(i){r.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},function(){return r.updatePosition()})},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"log",value:function(){if(this.props.log){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.style,i=t.bgClassName,o=t.bgImageAlt,a=t.renderLayer,s=this.state,l=s.bgImage,u=s.bgImageSrcSet,c=s.bgImageSizes,f=s.percentage;return d.default.createElement("div",{className:"react-parallax "+n,style:r,ref:function(t){return e.node=t}},l?d.default.createElement("img",{className:i,src:l,srcSet:u,sizes:c,ref:function(t){return e.img=t},alt:o,style:this.state.imgStyle}):null,a?a(Math.min(-(f-1),1)):null,this.splitChildren.bgChildren.length>0?d.default.createElement("div",{className:"react-parallax-background-children",ref:function(t){return e.bg=t},style:this.state.bgStyle},this.splitChildren.bgChildren):null,d.default.createElement(h.default,{onMount:this.onContentMount},this.splitChildren.children))}}]),t}(d.default.Component);m.propTypes={bgClassName:c.default.string,bgHeight:c.default.string,bgImage:c.default.string,bgImageAlt:c.default.string,bgImageSizes:c.default.string,bgImageSrcSet:c.default.string,bgStyle:c.default.object,bgWidth:c.default.string,blur:c.default.oneOfType([c.default.number,c.default.object]),className:c.default.string,disabled:c.default.bool,log:c.default.bool,parent:c.default.any,renderLayer:c.default.func,strength:c.default.number,style:c.default.object},m.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",disabled:!1,log:!1,strength:100},t.default=m},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(1),f=r(c),d=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.onMount;return u.default.createElement("div",{ref:function(e){return n(e)},className:"react-parallax-content",style:{position:"relative"}},t)}}]),t}(l.PureComponent);d.propTypes={children:f.default.node,onMount:f.default.func},d.propTypes={},t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var i=n(3),o=r(i),a=n(2),s=r(a);t.Parallax=o.default,t.Background=s.default},function(e,t,n){"use strict";function r(e){if(!e)return 0;var t=window,n=document,r=n.documentElement,i=n.getElementsByTagName("body")[0];return t.innerHeight||r.clientHeight||i.clientHeight}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2];if(!n)return!1;var i=e.getBoundingClientRect().top-t,o=e.getBoundingClientRect().bottom+t;return i<=r(n)&&o>=0}function o(e,t){return e?t?t.clientHeight:r(e):0}function a(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}function s(e,t,n){return(n-e)/(t-e)||0}function l(e,t,n){if(!t)return 0;var r=e,i=r.getBoundingClientRect(),a=i.top,l=i.height,u=o(t),c=l>u?l:u;return s(-l,c,Math.round(a>c?c:a),l)}function u(e){var t=[],n=d.default.Children.toArray(e.children);return n.forEach(function(e,r){e.type&&e.type.isParallaxBackground&&(t=t.concat(n.splice(r,1)))}),{bgChildren:t,children:n}}function c(e,t){e.style.WebkitFilter="blur("+t+"px)",e.style.filter="blur("+t+"px)"}Object.defineProperty(t,"__esModule",{value:!0}),t.getWindowHeight=r,t.isScrolledIntoView=i,t.getNodeHeight=o,t.canUseDOM=a,t.getPercentage=s,t.getRelativePosition=l,t.getSplitChildren=u,t.setBlur=c;var f=n(0),d=function(e){return e&&e.__esModule?e:{default:e}}(f)}])});
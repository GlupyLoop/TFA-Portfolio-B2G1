// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"assets/css/base.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\guill\\Desktop\\TFA-Portfolio-B2G1\\assets\\Font\\statics-ttf\\Geist-Regular.ttf":[["Geist-Regular.4c545c93.ttf","assets/Font/statics-ttf/Geist-Regular.ttf"],"assets/Font/statics-ttf/Geist-Regular.ttf"],"C:\\Users\\guill\\Desktop\\TFA-Portfolio-B2G1\\assets\\Font\\statics-ttf\\Geist-Medium.ttf":[["Geist-Medium.03d52c02.ttf","assets/Font/statics-ttf/Geist-Medium.ttf"],"assets/Font/statics-ttf/Geist-Medium.ttf"],"C:\\Users\\guill\\Desktop\\TFA-Portfolio-B2G1\\assets\\Font\\statics-ttf\\Geist-Light.ttf":[["Geist-Light.01a2662a.ttf","assets/Font/statics-ttf/Geist-Light.ttf"],"assets/Font/statics-ttf/Geist-Light.ttf"],"C:\\Users\\guill\\Desktop\\TFA-Portfolio-B2G1\\assets\\Font\\statics-ttf\\Geist-Bold.ttf":[["Geist-Bold.0c8b4b5e.ttf","assets/Font/statics-ttf/Geist-Bold.ttf"],"assets/Font/statics-ttf/Geist-Bold.ttf"],"C:\\Users\\guill\\Desktop\\TFA-Portfolio-B2G1\\assets\\Font\\statics-ttf\\Geist-Black.ttf":[["Geist-Black.ee34ae4d.ttf","assets/Font/statics-ttf/Geist-Black.ttf"],"assets/Font/statics-ttf/Geist-Black.ttf"],"C:\\Users\\guill\\Desktop\\TFA-Portfolio-B2G1\\assets\\Font\\statics-ttf\\Geist-SemiBold.ttf":[["Geist-SemiBold.905b9f28.ttf","assets/Font/statics-ttf/Geist-SemiBold.ttf"],"assets/Font/statics-ttf/Geist-SemiBold.ttf"],"C:\\Users\\guill\\Desktop\\TFA-Portfolio-B2G1\\assets\\Font\\statics-ttf\\Geist-Thin.ttf":[["Geist-Thin.e0163296.ttf","assets/Font/statics-ttf/Geist-Thin.ttf"],"assets/Font/statics-ttf/Geist-Thin.ttf"],"C:\\Users\\guill\\Desktop\\TFA-Portfolio-B2G1\\assets\\Font\\statics-ttf\\Geist-UltraBlack.ttf":[["Geist-UltraBlack.d8826326.ttf","assets/Font/statics-ttf/Geist-UltraBlack.ttf"],"assets/Font/statics-ttf/Geist-UltraBlack.ttf"],"C:\\Users\\guill\\Desktop\\TFA-Portfolio-B2G1\\assets\\Font\\statics-ttf\\Geist-UltraLight.ttf":[["Geist-UltraLight.b4899080.ttf","assets/Font/statics-ttf/Geist-UltraLight.ttf"],"assets/Font/statics-ttf/Geist-UltraLight.ttf"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/css/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"/assets/css/base.css":"assets/css/base.css","C:\\Users\\guill\\Desktop\\TFA-Portfolio-B2G1\\assets\\img\\wave.png":[["wave.a8daedb0.png","assets/img/wave.png"],"assets/img/wave.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/js/script.js":[function(require,module,exports) {
// script.js
"use strict";

// Import main CSS file
require("/assets/css/style.css");
// Canvas setup
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Circle properties
var circleSize = 1;
var spacing = 45;
var maxEffectSize = 250;
var circles = [];

// Resize and redraw function
function resizeAndRedraw() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Recalculate circle positions
  circles.length = 0; // Clear existing circles
  for (var y = circleSize; y < canvas.height; y += spacing) {
    for (var x = circleSize; x < canvas.width; x += spacing) {
      circles.push({
        x: x,
        y: y,
        originalRadius: circleSize,
        targetRadius: circleSize,
        currentRadius: circleSize,
        isHovered: false
      });
    }
  }
  draw();
}

// Draw function
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach(function (circle) {
    // Smooth radius transition
    circle.currentRadius += (circle.targetRadius - circle.currentRadius) * 0.1;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.currentRadius, 0, Math.PI * 2);
    ctx.fillStyle = circle.isHovered ? '#BA20D3' : '#D9D9D9';
    ctx.fill();
    ctx.closePath();
  });
  requestAnimationFrame(draw); // Optimize with requestAnimationFrame
}

// Event listener for mouse movement
document.addEventListener('mousemove', function (event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  circles.forEach(function (circle) {
    var dx = circle.x - mouseX;
    var dy = circle.y - mouseY;
    var distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < maxEffectSize) {
      circle.isHovered = true;
      var effectRatio = distance / maxEffectSize;
      var maxRadiusChange = circle.originalRadius * 5;
      var radiusChange = maxRadiusChange * (1 - effectRatio);
      circle.targetRadius = Math.max(circle.originalRadius, circle.originalRadius + radiusChange);
    } else {
      circle.isHovered = false;
      circle.targetRadius = circle.originalRadius;
    }
  });
});

// Event listener for mouse leaving the window
document.addEventListener('mouseleave', function () {
  circles.forEach(function (circle) {
    circle.isHovered = false;
    circle.targetRadius = circle.originalRadius;
  });
});

// Event listener for window resize
window.addEventListener('resize', resizeAndRedraw);

// Initial setup
resizeAndRedraw();

// Vertical slider functionality
document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll(".section");
  var currentSection = 0;
  var isThrottled = true;

  // Function to scroll to a specific section
  function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    currentSection = index;
    sections.forEach(function (section, i) {
      section.style.transform = "translateY(".concat((i - index) * 100, "%)");
    });
  }

  // Event listener for mouse wheel scroll
  document.addEventListener("wheel", function (event) {
    if (isThrottled) return;
    isThrottled = true;
    setTimeout(function () {
      return isThrottled = false;
    }, 1000);
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    } else if (event.deltaY < 0 && currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  });

  // Initial call to scroll to the current section
  scrollToSection(currentSection);
});

// Event listener for window resize to adjust canvas size
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  draw();
});
document.getElementById('whatnextButton').addEventListener('click', function () {
  window.location.href = 'whatnext.html';
});

//défilement mac

// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  var menuItems = document.querySelectorAll('.menu-item');
  var contentItems = document.querySelectorAll('.content-item');
  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var index = item.getAttribute('data-index');
      menuItems.forEach(function (item) {
        return item.classList.remove('active');
      });
      item.classList.add('active');
      contentItems.forEach(function (content) {
        return content.classList.remove('active');
      });
      contentItems[index].classList.add('active');
    });
  });
  document.querySelector('.left-arrow').addEventListener('click', function () {
    changeContent(-1);
  });
  document.querySelector('.right-arrow').addEventListener('click', function () {
    changeContent(1);
  });
  function changeContent(direction) {
    var currentIndex = Array.from(menuItems).findIndex(function (item) {
      return item.classList.contains('active');
    });
    currentIndex = (currentIndex + direction + menuItems.length) % menuItems.length;
    menuItems.forEach(function (item) {
      return item.classList.remove('active');
    });
    menuItems[currentIndex].classList.add('active');
    contentItems.forEach(function (content) {
      return content.classList.remove('active');
    });
    contentItems[currentIndex].classList.add('active');
  }
});
document.querySelectorAll('.scroll-down').forEach(function (item) {
  item.addEventListener('click', function (event) {
    var targetId = item.getAttribute('data-scroll');
    var targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
document.addEventListener('DOMContentLoaded', function (event) {
  var linkedinButton = document.getElementById('linkedinButton');
  var githubButton = document.getElementById('githubButton');
  var instagramButton = document.getElementById('instagramButton');
  var mailButton = document.getElementById('mailButton');
  linkedinButton.addEventListener('click', function () {
    window.open('https://www.linkedin.com/in/guillaume-laplume-8ba103117/', '_blank');
  });
  githubButton.addEventListener('click', function () {
    window.open('https://github.com/GlupyLoop?tab=repositories', '_blank');
  });
  instagramButton.addEventListener('click', function () {
    window.open('https://www.instagram.com/glupy.designs/', '_blank');
  });
  mailButton.addEventListener('click', function () {
    window.location.href = 'mailto:guillaume.laplume99@gmail.com';
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('.section');
  var summaryElement = document.querySelector('.summary');
  var spanElement = summaryElement.querySelector('span');
  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
  function updateSummary(entry) {
    if (entry.isIntersecting) {
      if (entry.target.id === 'section1') {
        summaryElement.style.display = 'none';
      } else {
        summaryElement.style.display = 'block';
        summaryElement.childNodes[1].nodeValue = "/".concat(entry.target.getAttribute('data-summary'));
      }
    }
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      updateSummary(entry);
    });
  }, options);
  sections.forEach(function (section) {
    observer.observe(section);
  });
});
var menuToggle = document.getElementById("menu-toggle");
var menu = document.querySelector(".menu");
menuToggle.addEventListener("change", function () {
  menu.style.display = menuToggle.checked ? "block" : "none";
});
var sections = document.querySelectorAll('.section');
function handleIntersection(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active'); // Retire la classe 'active' quand la section n'est plus visible
    }
  });
}
var observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5 // Déclenche l'animation lorsque 50% de la section est visible
});
sections.forEach(function (section) {
  observer.observe(section);
});
},{"/assets/css/style.css":"assets/css/style.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56913" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/script.js"], null)
//# sourceMappingURL=/script.c10090b4.js.map
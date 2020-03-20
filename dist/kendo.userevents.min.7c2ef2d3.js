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
})({"telerik/kendo.userevents.min.js":[function(require,module,exports) {
var define;
/** 
 * Kendo UI v2020.1.219 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2020 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
!function (e, define) {
  define("kendo.userevents.min", ["kendo.core.min"], e);
}(function () {
  return function (e, t) {
    function n(e, t) {
      var n = e.x.location,
          i = e.y.location,
          o = t.x.location,
          r = t.y.location,
          s = n - o,
          a = i - r;
      return {
        center: {
          x: (n + o) / 2,
          y: (i + r) / 2
        },
        distance: Math.sqrt(s * s + a * a)
      };
    }

    function i(e) {
      var t,
          n,
          i,
          o = [],
          r = e.originalEvent,
          a = e.currentTarget,
          c = 0;
      if (e.api) o.push({
        id: 2,
        event: e,
        target: e.target,
        currentTarget: e.target,
        location: e,
        type: "api"
      });else if (e.type.match(/touch/)) for (n = r ? r.changedTouches : [], t = n.length; c < t; c++) {
        i = n[c], o.push({
          location: i,
          event: e,
          target: i.target,
          currentTarget: a,
          id: i.identifier,
          type: "touch"
        });
      } else o.push(s.pointers || s.msPointers ? {
        location: r,
        event: e,
        target: e.target,
        currentTarget: a,
        id: r.pointerId,
        type: "pointer"
      } : {
        id: 1,
        event: e,
        target: e.target,
        currentTarget: a,
        location: e,
        type: "mouse"
      });
      return o;
    }

    function o(e) {
      for (var t = r.eventMap.up.split(" "), n = 0, i = t.length; n < i; n++) {
        e(t[n]);
      }
    }

    var r = window.kendo,
        s = r.support,
        a = r.Class,
        c = r.Observable,
        u = e.now,
        l = e.extend,
        h = s.mobileOS,
        p = h && h.android,
        d = 800,
        f = 300,
        v = s.browser.msie ? 5 : 0,
        g = "press",
        _ = "hold",
        m = "select",
        T = "start",
        y = "move",
        k = "end",
        E = "cancel",
        x = "tap",
        D = "doubleTap",
        M = "release",
        w = "gesturestart",
        b = "gesturechange",
        A = "gestureend",
        C = "gesturetap",
        I = {
      api: 0,
      touch: 0,
      mouse: 9,
      pointer: 9
    },
        S = !s.touch || s.mouseAndTouchPresent,
        P = a.extend({
      init: function init(e, t) {
        var n = this;
        n.axis = e, n._updateLocationData(t), n.startLocation = n.location, n.velocity = n.delta = 0, n.timeStamp = u();
      },
      move: function move(e) {
        var t = this,
            n = e["page" + t.axis],
            i = u(),
            o = i - t.timeStamp || 1;
        !n && p || (t.delta = n - t.location, t._updateLocationData(e), t.initialDelta = n - t.startLocation, t.velocity = t.delta / o, t.timeStamp = i);
      },
      _updateLocationData: function _updateLocationData(e) {
        var t = this,
            n = t.axis;
        t.location = e["page" + n], t.client = e["client" + n], t.screen = e["screen" + n];
      }
    }),
        L = a.extend({
      init: function init(e, t, n) {
        l(this, {
          x: new P("X", n.location),
          y: new P("Y", n.location),
          type: n.type,
          useClickAsTap: e.useClickAsTap,
          threshold: e.threshold || I[n.type],
          userEvents: e,
          target: t,
          currentTarget: n.currentTarget,
          initialTouch: n.target,
          id: n.id,
          pressEvent: n,
          _clicks: e._clicks,
          supportDoubleTap: e.supportDoubleTap,
          _moved: !1,
          _finished: !1
        });
      },
      press: function press() {
        this._holdTimeout = setTimeout(e.proxy(this, "_hold"), this.userEvents.minHold), this._trigger(g, this.pressEvent);
      },
      _tap: function _tap(e) {
        var t = this;
        t.userEvents._clicks++, 1 == t.userEvents._clicks && (t._clickTimeout = setTimeout(function () {
          1 == t.userEvents._clicks ? t._trigger(x, e) : t._trigger(D, e), t.userEvents._clicks = 0;
        }, f));
      },
      _hold: function _hold() {
        this._trigger(_, this.pressEvent);
      },
      move: function move(e) {
        var t = this,
            n = "api" !== e.type && t.userEvents._shouldNotMove;

        if (!t._finished && !n) {
          if (t.x.move(e.location), t.y.move(e.location), !t._moved) {
            if (t._withinIgnoreThreshold()) return;
            if (X.current && X.current !== t.userEvents) return t.dispose();

            t._start(e);
          }

          t._finished || t._trigger(y, e);
        }
      },
      end: function end(e) {
        this.endTime = u(), this._finished || (this._finished = !0, this._trigger(M, e), this._moved ? this._trigger(k, e) : this.useClickAsTap || (this.supportDoubleTap ? this._tap(e) : this._trigger(x, e)), clearTimeout(this._holdTimeout), this.dispose());
      },
      dispose: function dispose() {
        var t = this.userEvents,
            n = t.touches;
        this._finished = !0, this.pressEvent = null, clearTimeout(this._holdTimeout), n.splice(e.inArray(this, n), 1);
      },
      skip: function skip() {
        this.dispose();
      },
      cancel: function cancel() {
        this.dispose();
      },
      isMoved: function isMoved() {
        return this._moved;
      },
      _start: function _start(e) {
        clearTimeout(this._holdTimeout), this.startTime = u(), this._moved = !0, this._trigger(T, e);
      },
      _trigger: function _trigger(e, t) {
        var n = this,
            i = t.event,
            o = {
          touch: n,
          x: n.x,
          y: n.y,
          target: n.target,
          event: i
        };
        n.userEvents.notify(e, o) && i.preventDefault();
      },
      _withinIgnoreThreshold: function _withinIgnoreThreshold() {
        var e = this.x.initialDelta,
            t = this.y.initialDelta;
        return Math.sqrt(e * e + t * t) <= this.threshold;
      }
    }),
        X = c.extend({
      init: function init(t, n) {
        var i,
            a,
            u,
            h,
            p = this,
            f = r.guid();
        n = n || {}, i = p.filter = n.filter, p.threshold = n.threshold || v, p.minHold = n.minHold || d, p.touches = [], p._maxTouches = n.multiTouch ? 2 : 1, p.allowSelection = n.allowSelection, p.captureUpIfMoved = n.captureUpIfMoved, p.useClickAsTap = !n.fastTap && !s.delayedClick(), p.eventNS = f, p._clicks = 0, p.supportDoubleTap = n.supportDoubleTap, t = e(t).handler(p), c.fn.init.call(p), l(p, {
          element: t,
          surface: e(n.global && S ? t[0].ownerDocument.documentElement : n.surface || t),
          stopPropagation: n.stopPropagation,
          pressed: !1
        }), p.surface.handler(p).on(r.applyEventMap("move", f), "_move").on(r.applyEventMap("up cancel", f), "_end"), t.on(r.applyEventMap("down", f), i, "_start"), p.useClickAsTap && t.on(r.applyEventMap("click", f), i, "_click"), (s.pointers || s.msPointers) && (s.browser.version < 11 ? (a = "pinch-zoom double-tap-zoom", t.css("-ms-touch-action", n.touchAction && "none" != n.touchAction ? a + " " + n.touchAction : a)) : t.css("touch-action", n.touchAction || "none")), n.preventDragEvent && t.on(r.applyEventMap("dragstart", f), r.preventDefault), t.on(r.applyEventMap("mousedown", f), i, {
          root: t
        }, "_select"), p.captureUpIfMoved && s.eventCapture && (u = p.surface[0], h = e.proxy(p.preventIfMoving, p), o(function (e) {
          u.addEventListener(e, h, !0);
        })), p.bind([g, _, x, D, T, y, k, M, E, w, b, A, C, m], n);
      },
      preventIfMoving: function preventIfMoving(e) {
        this._isMoved() && e.preventDefault();
      },
      destroy: function destroy() {
        var e,
            t = this;
        t._destroyed || (t._destroyed = !0, t.captureUpIfMoved && s.eventCapture && (e = t.surface[0], o(function (n) {
          e.removeEventListener(n, t.preventIfMoving);
        })), t.element.kendoDestroy(t.eventNS), t.surface.kendoDestroy(t.eventNS), t.element.removeData("handler"), t.surface.removeData("handler"), t._disposeAll(), t.unbind(), delete t.surface, delete t.element, delete t.currentTarget);
      },
      capture: function capture() {
        X.current = this;
      },
      cancel: function cancel() {
        this._disposeAll(), this.trigger(E);
      },
      notify: function notify(e, t) {
        var i = this,
            o = i.touches;

        if (this._isMultiTouch()) {
          switch (e) {
            case y:
              e = b;
              break;

            case k:
              e = A;
              break;

            case x:
              e = C;
          }

          l(t, {
            touches: o
          }, n(o[0], o[1]));
        }

        return this.trigger(e, l(t, {
          type: e
        }));
      },
      press: function press(e, t, n) {
        this._apiCall("_start", e, t, n);
      },
      move: function move(e, t) {
        this._apiCall("_move", e, t);
      },
      end: function end(e, t) {
        this._apiCall("_end", e, t);
      },
      _isMultiTouch: function _isMultiTouch() {
        return this.touches.length > 1;
      },
      _maxTouchesReached: function _maxTouchesReached() {
        return this.touches.length >= this._maxTouches;
      },
      _disposeAll: function _disposeAll() {
        for (var e = this.touches; e.length > 0;) {
          e.pop().dispose();
        }
      },
      _isMoved: function _isMoved() {
        return e.grep(this.touches, function (e) {
          return e.isMoved();
        }).length;
      },
      _select: function _select(e) {
        this.allowSelection && !this.trigger(m, {
          event: e
        }) || e.preventDefault();
      },
      _start: function _start(t) {
        var n,
            o,
            r = this,
            s = 0,
            a = r.filter,
            c = i(t),
            u = c.length,
            l = t.which;
        if (!(l && l > 1 || r._maxTouchesReached())) for (X.current = null, r.currentTarget = t.currentTarget, r.stopPropagation && t.stopPropagation(); s < u && !r._maxTouchesReached(); s++) {
          o = c[s], n = a ? e(o.currentTarget) : r.element, n.length && (o = new L(r, n, o), r.touches.push(o), o.press(), r._isMultiTouch() && r.notify("gesturestart", {}));
        }
      },
      _move: function _move(e) {
        this._eachTouch("move", e);
      },
      _end: function _end(e) {
        this._eachTouch("end", e);
      },
      _click: function _click(t) {
        var n = {
          touch: {
            initialTouch: t.target,
            target: e(t.currentTarget),
            endTime: u(),
            x: {
              location: t.pageX,
              client: t.clientX
            },
            y: {
              location: t.pageY,
              client: t.clientY
            }
          },
          x: t.pageX,
          y: t.pageY,
          target: e(t.currentTarget),
          event: t,
          type: "tap"
        };
        this.trigger("tap", n) && t.preventDefault();
      },
      _eachTouch: function _eachTouch(e, t) {
        var n,
            o,
            r,
            s,
            a = this,
            c = {},
            u = i(t),
            l = a.touches;

        for (n = 0; n < l.length; n++) {
          o = l[n], c[o.id] = o;
        }

        for (n = 0; n < u.length; n++) {
          r = u[n], s = c[r.id], s && s[e](r);
        }
      },
      _apiCall: function _apiCall(t, n, i, o) {
        this[t]({
          api: !0,
          pageX: n,
          pageY: i,
          clientX: n,
          clientY: i,
          target: e(o || this.element)[0],
          stopPropagation: e.noop,
          preventDefault: e.noop
        });
      }
    });
    X.defaultThreshold = function (e) {
      v = e;
    }, X.minHold = function (e) {
      d = e;
    }, r.getTouches = i, r.touchDelta = n, r.UserEvents = X;
  }(window.kendo.jQuery), window.kendo;
}, "function" == typeof define && define.amd ? define : function (e, t, n) {
  (n || t)();
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54084" + '/');

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
      }); // Enable HMR for CSS by default.

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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","telerik/kendo.userevents.min.js"], null)
//# sourceMappingURL=/kendo.userevents.min.7c2ef2d3.js.map
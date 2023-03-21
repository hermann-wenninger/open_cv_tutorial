var ethicalads = (function (e) {
  var t = {};
  function a(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, a), (o.l = !0), o.exports;
  }
  return (
    (a.m = e),
    (a.c = t),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          a.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = ""),
    a((a.s = 1))
  );
})([
  function (e, t, a) {
    var n, o;
    (n = this),
      (o = function () {
        var e = {},
          t = "undefined" != typeof window && window,
          a = "undefined" != typeof document && document,
          n = a && a.documentElement,
          o = t.matchMedia || t.msMatchMedia,
          r = o
            ? function (e) {
                return !!o.call(t, e).matches;
              }
            : function () {
                return !1;
              },
          i = (e.viewportW = function () {
            var e = n.clientWidth,
              a = t.innerWidth;
            return e < a ? a : e;
          }),
          d = (e.viewportH = function () {
            var e = n.clientHeight,
              a = t.innerHeight;
            return e < a ? a : e;
          });
        function l() {
          return { width: i(), height: d() };
        }
        function c(e, t) {
          return (
            !(!(e = e && !e.nodeType ? e[0] : e) || 1 !== e.nodeType) &&
            (function (e, t) {
              var a = {};
              return (
                (t = +t || 0),
                (a.width = (a.right = e.right + t) - (a.left = e.left - t)),
                (a.height = (a.bottom = e.bottom + t) - (a.top = e.top - t)),
                a
              );
            })(e.getBoundingClientRect(), t)
          );
        }
        return (
          (e.mq = r),
          (e.matchMedia = o
            ? function () {
                return o.apply(t, arguments);
              }
            : function () {
                return {};
              }),
          (e.viewport = l),
          (e.scrollX = function () {
            return t.pageXOffset || n.scrollLeft;
          }),
          (e.scrollY = function () {
            return t.pageYOffset || n.scrollTop;
          }),
          (e.rectangle = c),
          (e.aspect = function (e) {
            var t = (e = null == e ? l() : 1 === e.nodeType ? c(e) : e).height,
              a = e.width;
            return (
              (t = "function" == typeof t ? t.call(e) : t),
              (a = "function" == typeof a ? a.call(e) : a) / t
            );
          }),
          (e.inX = function (e, t) {
            var a = c(e, t);
            return !!a && a.right >= 0 && a.left <= i();
          }),
          (e.inY = function (e, t) {
            var a = c(e, t);
            return !!a && a.bottom >= 0 && a.top <= d();
          }),
          (e.inViewport = function (e, t) {
            var a = c(e, t);
            return (
              !!a &&
              a.bottom >= 0 &&
              a.right >= 0 &&
              a.top <= d() &&
              a.left <= i()
            );
          }),
          e
        );
      }),
      e.exports ? (e.exports = o()) : (n.verge = o());
  },
  function (e, t, a) {
    "use strict";
    a.r(t),
      function (e, n) {
        a.d(t, "Placement", function () {
          return v;
        }),
          a.d(t, "check_dependencies", function () {
            return g;
          }),
          a.d(t, "load_placements", function () {
            return w;
          }),
          a.d(t, "wait", function () {
            return k;
          }),
          a.d(t, "load", function () {
            return x;
          }),
          a.d(t, "uplifted", function () {
            return j;
          }),
          a.d(t, "detectedKeywords", function () {
            return S;
          });
        var o,
          r = a(0),
          i = a.n(r);
        a(4);
        function d(e) {
          return (d =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function l(e, t) {
          return !t || ("object" !== d(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function c(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (c = function (e) {
            if (
              null === e ||
              ((a = e),
              -1 === Function.toString.call(a).indexOf("[native code]"))
            )
              return e;
            var a;
            if ("function" != typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            function n() {
              return u(e, arguments, f(this).constructor);
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              p(n, e)
            );
          })(e);
        }
        function u(e, t, a) {
          return (u = s()
            ? Reflect.construct
            : function (e, t, a) {
                var n = [null];
                n.push.apply(n, t);
                var o = new (Function.bind.apply(e, n))();
                return a && p(o, a.prototype), o;
              }).apply(null, arguments);
        }
        function s() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        function p(e, t) {
          return (p =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function f(e) {
          return (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function h(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function y(e, t) {
          for (var a = 0; a < t.length; a++) {
            var n = t[a];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        function m(e, t, a) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = a),
            e
          );
        }
        var b =
            (m(
              (o = {
                android: "android",
                ios: "ios",
                iphone: "ios",
                blockchain: "blockchain",
                bitcoin: "bitcoin",
                ethereum: "ethereum",
                hyperledger: "hyperledger",
                solidity: "solidity",
                cryptography: "cryptography",
                security: "security",
                infosec: "security",
                privacy: "privacy",
                authentication: "authentication",
                authorization: "authorization",
                otp: "otp",
                "2fa": "2fa",
                mfa: "mfa",
                sms: "sms",
                frontend: "frontend",
                backend: "backend",
                "full-stack": "backend",
                devops: "devops",
                ai: "artificial-intelligence",
                nlp: "nlp",
                ml: "machine-learning",
                cloud: "cloud",
                api: "api",
                docker: "docker",
                kubernetes: "kubernetes",
                container: "containers",
                containers: "containers",
                ansible: "ansible",
                serverless: "serverless",
                openshift: "openshift",
                terraform: "terraform",
                openid: "openid",
                aws: "aws",
                azure: "azure",
                gcp: "gcp",
                linux: "linux",
                ubuntu: "ubuntu",
                monitoring: "monitoring",
                redis: "redis",
                rabbitmq: "rabbitmq",
                nosql: "nosql",
                postgres: "postgresql",
                postgresql: "postgresql",
                mysql: "mysql",
                database: "database",
                testing: "testing",
                pytest: "pytest",
                lint: "lint",
                linting: "lint",
                pylint: "pylint",
                unittest: "unittest",
                ci: "ci",
                cd: "cd",
                tdd: "test-driven-development",
                elasticsearch: "elasticsearch",
                lucene: "lucene",
                solr: "solr",
                nginx: "nginx",
                heroku: "heroku",
                spa: "spa",
                django: "django",
                rails: "rails",
                angular: "angular",
                angularjs: "angular",
                laravel: "laravel",
                react: "reactjs",
                reactjs: "reactjs",
                "react-native": "reactjs",
                jupyter: "jupyter",
                matplotlib: "matplotlib",
                pytorch: "pytorch",
                pydata: "pydata",
                pandas: "pandas",
                numpy: "numpy",
                wsgi: "wsgi",
                celery: "celery",
                jinja: "jinja",
                jinja2: "jinja",
                flask: "flask",
                werkzeug: "werkzeug",
                oauth: "oauth",
                vuejs: "vuejs",
                vue: "vuejs",
                tensorflow: "tensorflow",
                tensor: "tensor",
                webpack: "webpack",
                dotnet: "dotnet",
                ".net": "dotnet",
                "c#": "c-sharp",
                "c++": "cplusplus",
                erlang: "erlang",
                "f#": "fsharp",
                golang: "golang",
                haskell: "haskell",
                java: "java",
                javascript: "javascript",
                julia: "julia",
                kotlin: "kotlin",
                "obj-c": "obj-c",
                "objective-c": "obj-c",
                php: "php",
                python: "python",
                perl: "perl",
                sql: "sql",
                ruby: "ruby",
                rust: "rust",
                scala: "scala",
                swift: "swift",
                css: "css",
                scss: "scss",
                typescript: "typescript",
              }),
              "rust",
              "rust"
            ),
            m(o, "redux", "redux"),
            o),
          v = (function () {
            function e(t, a, n, o) {
              h(this, e),
                (this.publisher = t),
                (this.ad_type = a),
                (this.target = n),
                (this.options = o),
                (this.style = o.style),
                (this.keywords = o.keywords || []),
                (this.load_manually = o.load_manually),
                (this.force_ad = o.force_ad),
                (this.force_campaign = o.force_campaign),
                (this.campaign_types = o.campaign_types || []),
                this.campaign_types.length ||
                  (this.campaign_types = ["paid", "community", "house"]),
                (this.view_time = 0),
                (this.view_time_sent = !1),
                (this.response = null);
            }
            var t, a, n;
            return (
              (t = e),
              (n = [
                {
                  key: "from_element",
                  value: function (t) {
                    var a = t.getAttribute("data-ea-publisher"),
                      n = t.getAttribute("data-ea-type");
                    n ||
                      ((n = "image"), t.setAttribute("data-ea-type", "image"));
                    var o = (t.getAttribute("data-ea-keywords") || "")
                        .split("|")
                        .filter(function (e) {
                          return e.length > 1;
                        }),
                      r = (t.getAttribute("data-ea-campaign-types") || "")
                        .split("|")
                        .filter(function (e) {
                          return e.length > 1;
                        }),
                      i = "true" === t.getAttribute("data-ea-manual"),
                      d = t.getAttribute("data-ea-style"),
                      l = t.getAttribute("data-ea-force-ad"),
                      c = t.getAttribute("data-ea-force-campaign");
                    return (
                      ("image" !== n && "text" !== n) || (n += "-v1"),
                      (t.className || "").split(" ").indexOf("loaded") >= 0
                        ? (console.error("EthicalAd already loaded."), null)
                        : new e(a, n, t, {
                            keywords: o,
                            style: d,
                            campaign_types: r,
                            load_manually: i,
                            force_ad: l,
                            force_campaign: c,
                          })
                    );
                  },
                },
              ]),
              (a = [
                {
                  key: "load",
                  value: function () {
                    var e = this;
                    return (
                      (this.keywords = this.keywords.concat(
                        this.detectKeywords()
                      )),
                      this.fetch()
                        .then(function (t) {
                          if (void 0 === t)
                            throw new _("Ad decision request blocked");
                          var a = e.target.className || "";
                          for (
                            a += " loaded", e.target.className = a.trim();
                            e.target.firstChild;

                          )
                            e.target.removeChild(e.target.firstChild);
                          return e.applyStyles(t), e.target.appendChild(t), e;
                        })
                        .then(function (e) {
                          var t = setInterval(
                              function (a) {
                                if (e.inViewport(a)) {
                                  var n = document.createElement("img");
                                  (n.src = e.response.view_url),
                                    j && (n.src += "?uplift=true"),
                                    (n.className = "ea-pixel"),
                                    a.appendChild(n),
                                    clearInterval(t);
                                }
                              },
                              100,
                              e.target
                            ),
                            a = setInterval(
                              function (t) {
                                e.view_time_sent
                                  ? clearInterval(a)
                                  : e.inViewport(t) &&
                                    ((e.view_time += 1),
                                    e.view_time >= 300 && clearInterval(a));
                              },
                              1e3,
                              e.target
                            );
                          document.addEventListener(
                            "visibilitychange",
                            function t() {
                              if (
                                !(e.view_time <= 0 || e.view_time_sent) &&
                                e.response.view_time_url &&
                                ("hidden" === document.visibilityState ||
                                  "unloaded" === document.visibilityState)
                              ) {
                                var a = document.createElement("img");
                                (a.src =
                                  e.response.view_time_url +
                                  "?view_time=" +
                                  e.view_time),
                                  (a.className = "ea-pixel"),
                                  e.target.appendChild(a),
                                  (e.view_time_sent = !0),
                                  document.removeEventListener(
                                    "visibilitychange",
                                    t
                                  );
                              }
                            }
                          );
                        })
                    );
                  },
                },
                {
                  key: "inViewport",
                  value: function (e) {
                    return !!(
                      this.response &&
                      this.response.view_url &&
                      i.a.inViewport(e, -3) &&
                      "visible" === document.visibilityState
                    );
                  },
                },
                {
                  key: "fetch",
                  value: function () {
                    var e = this,
                      t =
                        "ad_" +
                        Date.now() +
                        "_" +
                        Math.floor(1e6 * Math.random()),
                      a = t;
                    this.target.id && (a = this.target.id);
                    var n = {
                      publisher: this.publisher,
                      ad_types: this.ad_type,
                      div_ids: a,
                      callback: t,
                      keywords: this.keywords.join("|"),
                      campaign_types: this.campaign_types.join("|"),
                      format: "jsonp",
                      client_version: "1.4.0",
                      url: (
                        window.location.origin + window.location.pathname
                      ).slice(0, 256),
                    };
                    this.force_ad && (n.force_ad = this.force_ad),
                      this.force_campaign &&
                        (n.force_campaign = this.force_campaign);
                    var o = new URLSearchParams(n),
                      r = new URL(
                        "https://server.ethicalads.io/api/v1/decision/?" +
                          o.toString()
                      );
                    return new Promise(function (a, n) {
                      window[t] = function (t) {
                        if (t && t.html && t.view_url) {
                          e.response = t;
                          var o = document.createElement("div");
                          return (o.innerHTML = t.html), a(o.firstChild);
                        }
                        return n(
                          new Error(
                            "Placement is configured with invalid parameters."
                          )
                        );
                      };
                      var o = document.createElement("script");
                      (o.src = r),
                        (o.type = "text/javascript"),
                        (o.async = !0),
                        o.addEventListener("error", function (e) {
                          return a();
                        }),
                        document.getElementsByTagName("head")[0].appendChild(o);
                    });
                  },
                },
                {
                  key: "detectABP",
                  value: function (e, t) {
                    var a = !1,
                      n = 2,
                      o = !1,
                      r = !1;
                    if ("function" == typeof t) {
                      e += "?ch=*&rn=*";
                      var i = 11 * Math.random(),
                        d = new Image();
                      (d.onload = c),
                        (d.onerror = function () {
                          (o = !0), c();
                        }),
                        (d.src = e.replace(/\*/, 1).replace(/\*/, i));
                      var l = new Image();
                      (l.onload = c),
                        (l.onerror = function () {
                          (r = !0), c();
                        }),
                        (l.src = e.replace(/\*/, 2).replace(/\*/, i)),
                        (function e(t, o) {
                          0 == n || o > 1e3
                            ? t(0 == n && a)
                            : setTimeout(function () {
                                e(t, 2 * o);
                              }, 2 * o);
                        })(t, 250);
                    }
                    function c() {
                      --n || (a = !o && r);
                    }
                  },
                },
                {
                  key: "detectKeywords",
                  value: function () {
                    if (S) return S;
                    for (
                      var e = {},
                        t = (
                          document.querySelector("[role='main']") ||
                          document.querySelector("main") ||
                          document.querySelector("body")
                        ).textContent.split(/\s+/),
                        a = /^[\('"]?(.*?)[,\.\?\!:;\)'"]?$/g,
                        n = 0;
                      n < t.length && n < 9999;
                      n++
                    ) {
                      var o = t[n].replace(a, "$1").toLowerCase();
                      b.hasOwnProperty(o) && (e[b[o]] = (e[b[o]] || 0) + 1);
                    }
                    var r = Object.entries(e)
                      .filter(function (e) {
                        return e[1] >= 2;
                      })
                      .sort(function (e, t) {
                        return e[1] > t[1] ? -1 : e[1] < t[1] ? 1 : 0;
                      })
                      .slice(0, 3)
                      .map(function (e) {
                        return e[0];
                      });
                    return (S = r), r;
                  },
                },
                {
                  key: "applyStyles",
                  value: function (e) {
                    if ("stickybox" === this.style) {
                      var t = document.createElement("div");
                      t.setAttribute("class", "ea-stickybox-hide"),
                        t.append("Ã—"),
                        t.addEventListener("click", function () {
                          document
                            .querySelector("[data-ea-publisher]")
                            .remove();
                        }),
                        e.appendChild(t);
                    }
                  },
                },
              ]) && y(t.prototype, a),
              n && y(t, n),
              e
            );
          })();
        function g() {
          return (
            !!(
              Object.entries &&
              window.URL &&
              window.URLSearchParams &&
              window.Promise
            ) ||
            (console.error(
              "Browser does not meet ethical ad client dependencies. Not showing ads"
            ),
            !1)
          );
        }
        function w() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = document.querySelectorAll("[data-ea-publisher]"),
            a = Array.prototype.slice.call(t);
          if (0 === a.length) throw new Error("No ad placements found.");
          return Promise.all(
            a.map(function (t, a) {
              var n = v.from_element(t);
              return (
                0 === a &&
                  n &&
                  !e &&
                  n.detectABP(
                    "https://media.ethicalads.io/abp/px.gif",
                    function (e) {
                      (j = e),
                        e &&
                          console.debug(
                            "Acceptable Ads enabled. Thanks for allowing our non-tracking ads :)"
                          );
                    }
                  ),
                !n || (!e && n.load_manually) ? null : n.load()
              );
            })
          );
        }
        var k,
          x,
          _ = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && p(e, t);
            })(o, e);
            var t,
              a,
              n =
                ((t = o),
                (a = s()),
                function () {
                  var e,
                    n = f(t);
                  if (a) {
                    var o = f(this).constructor;
                    e = Reflect.construct(n, arguments, o);
                  } else e = n.apply(this, arguments);
                  return l(this, e);
                });
            function o() {
              return h(this, o), n.apply(this, arguments);
            }
            return o;
          })(c(Error)),
          j = !1,
          S = null;
        if (a.c[a.s] !== e && g()) {
          var O = new Promise(function (e) {
            if (
              "interactive" === document.readyState ||
              "complete" === document.readyState
            )
              return e();
            document.addEventListener(
              "DOMContentLoaded",
              function () {
                e();
              },
              { capture: !0, once: !0, passive: !0 }
            );
          });
          (k = new Promise(function (e) {
            O.then(function () {
              w()
                .then(function (t) {
                  e(t);
                })
                .catch(function (t) {
                  e([]);
                  var a = n.debug || window.debug || !1;
                  if (t instanceof Error) {
                    if (t instanceof _ && !a) return;
                    console.error(t.message);
                  }
                });
            });
          })),
            (x = function () {
              console.debug("Loading placements manually"), w(!0);
            });
        }
      }.call(this, a(2)(e), a(3));
  },
  function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          Object.defineProperty(t, "exports", { enumerable: !0 }),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  function (e, t) {
    var a;
    a = (function () {
      return this;
    })();
    try {
      a = a || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (a = window);
    }
    e.exports = a;
  },
  function (e, t, a) {
    var n = a(5),
      o = a(6);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var r = { insert: "head", singleton: !1 };
    n(o, r);
    e.exports = o.locals || {};
  },
  function (e, t, a) {
    "use strict";
    var n,
      o = function () {
        return (
          void 0 === n &&
            (n = Boolean(window && document && document.all && !window.atob)),
          n
        );
      },
      r = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var a = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              a instanceof window.HTMLIFrameElement
            )
              try {
                a = a.contentDocument.head;
              } catch (e) {
                a = null;
              }
            e[t] = a;
          }
          return e[t];
        };
      })(),
      i = [];
    function d(e) {
      for (var t = -1, a = 0; a < i.length; a++)
        if (i[a].identifier === e) {
          t = a;
          break;
        }
      return t;
    }
    function l(e, t) {
      for (var a = {}, n = [], o = 0; o < e.length; o++) {
        var r = e[o],
          l = t.base ? r[0] + t.base : r[0],
          c = a[l] || 0,
          u = "".concat(l, " ").concat(c);
        a[l] = c + 1;
        var s = d(u),
          p = { css: r[1], media: r[2], sourceMap: r[3] };
        -1 !== s
          ? (i[s].references++, i[s].updater(p))
          : i.push({ identifier: u, updater: m(p, t), references: 1 }),
          n.push(u);
      }
      return n;
    }
    function c(e) {
      var t = document.createElement("style"),
        n = e.attributes || {};
      if (void 0 === n.nonce) {
        var o = a.nc;
        o && (n.nonce = o);
      }
      if (
        (Object.keys(n).forEach(function (e) {
          t.setAttribute(e, n[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var i = r(e.insert || "head");
        if (!i)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        i.appendChild(t);
      }
      return t;
    }
    var u,
      s =
        ((u = []),
        function (e, t) {
          return (u[e] = t), u.filter(Boolean).join("\n");
        });
    function p(e, t, a, n) {
      var o = a
        ? ""
        : n.media
        ? "@media ".concat(n.media, " {").concat(n.css, "}")
        : n.css;
      if (e.styleSheet) e.styleSheet.cssText = s(t, o);
      else {
        var r = document.createTextNode(o),
          i = e.childNodes;
        i[t] && e.removeChild(i[t]),
          i.length ? e.insertBefore(r, i[t]) : e.appendChild(r);
      }
    }
    function f(e, t, a) {
      var n = a.css,
        o = a.media,
        r = a.sourceMap;
      if (
        (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
        r &&
          btoa &&
          (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = n;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n));
      }
    }
    var h = null,
      y = 0;
    function m(e, t) {
      var a, n, o;
      if (t.singleton) {
        var r = y++;
        (a = h || (h = c(t))),
          (n = p.bind(null, a, r, !1)),
          (o = p.bind(null, a, r, !0));
      } else
        (a = c(t)),
          (n = f.bind(null, a, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(a);
          });
      return (
        n(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            n((e = t));
          } else o();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = o());
      var a = l((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var n = 0; n < a.length; n++) {
            var o = d(a[n]);
            i[o].references--;
          }
          for (var r = l(e, t), c = 0; c < a.length; c++) {
            var u = d(a[c]);
            0 === i[u].references && (i[u].updater(), i.splice(u, 1));
          }
          a = r;
        }
      };
    };
  },
  function (e, t, a) {
    (t = a(7)(!1)).push([
      e.i,
      '[data-ea-publisher].loaded,[data-ea-type].loaded{font-size:14px;font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;font-weight:normal;font-style:normal;leter-spacing:0px;vertical-align:baseline;line-height:1.3em}[data-ea-publisher].loaded a,[data-ea-type].loaded a{text-decoration:none}[data-ea-publisher].loaded .ea-pixel,[data-ea-type].loaded .ea-pixel{display:none}[data-ea-publisher].loaded .ea-content,[data-ea-type].loaded .ea-content{margin:1em 1em 0.5em 1em;padding:1em;background:rgba(0,0,0,0.03);color:#505050}[data-ea-publisher].loaded .ea-content a:link,[data-ea-type].loaded .ea-content a:link{color:#505050}[data-ea-publisher].loaded .ea-content a:visited,[data-ea-type].loaded .ea-content a:visited{color:#505050}[data-ea-publisher].loaded .ea-content a:hover,[data-ea-type].loaded .ea-content a:hover{color:#373737}[data-ea-publisher].loaded .ea-content a:active,[data-ea-type].loaded .ea-content a:active{color:#373737}[data-ea-publisher].loaded .ea-content a strong,[data-ea-publisher].loaded .ea-content a b,[data-ea-type].loaded .ea-content a strong,[data-ea-type].loaded .ea-content a b{color:#088cdb}[data-ea-publisher].loaded .ea-callout a:link,[data-ea-type].loaded .ea-callout a:link{color:#6a6a6a}[data-ea-publisher].loaded .ea-callout a:visited,[data-ea-type].loaded .ea-callout a:visited{color:#6a6a6a}[data-ea-publisher].loaded .ea-callout a:hover,[data-ea-type].loaded .ea-callout a:hover{color:#505050}[data-ea-publisher].loaded .ea-callout a:active,[data-ea-type].loaded .ea-callout a:active{color:#505050}[data-ea-publisher].loaded .ea-callout a strong,[data-ea-publisher].loaded .ea-callout a b,[data-ea-type].loaded .ea-callout a strong,[data-ea-type].loaded .ea-callout a b{color:#088cdb}[data-ea-publisher].loaded .ea-callout a,[data-ea-type].loaded .ea-callout a{font-size:0.8em}[data-ea-publisher].loaded.dark .ea-content,[data-ea-type].loaded.dark .ea-content{background:rgba(255,255,255,0.05);color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-content a:link,[data-ea-type].loaded.dark .ea-content a:link{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-content a:visited,[data-ea-type].loaded.dark .ea-content a:visited{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-content a:hover,[data-ea-type].loaded.dark .ea-content a:hover{color:#f6f6f6}[data-ea-publisher].loaded.dark .ea-content a:active,[data-ea-type].loaded.dark .ea-content a:active{color:#f6f6f6}[data-ea-publisher].loaded.dark .ea-content a strong,[data-ea-publisher].loaded.dark .ea-content a b,[data-ea-type].loaded.dark .ea-content a strong,[data-ea-type].loaded.dark .ea-content a b{color:#50baf9}[data-ea-publisher].loaded.dark .ea-callout a:link,[data-ea-type].loaded.dark .ea-callout a:link{color:#c3c3c3}[data-ea-publisher].loaded.dark .ea-callout a:visited,[data-ea-type].loaded.dark .ea-callout a:visited{color:#c3c3c3}[data-ea-publisher].loaded.dark .ea-callout a:hover,[data-ea-type].loaded.dark .ea-callout a:hover{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-callout a:active,[data-ea-type].loaded.dark .ea-callout a:active{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-callout a strong,[data-ea-publisher].loaded.dark .ea-callout a b,[data-ea-type].loaded.dark .ea-callout a strong,[data-ea-type].loaded.dark .ea-callout a b{color:#50baf9}@media (prefers-color-scheme: dark){[data-ea-publisher].loaded.adaptive .ea-content,[data-ea-type].loaded.adaptive .ea-content{background:rgba(255,255,255,0.05);color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-content a:link,[data-ea-type].loaded.adaptive .ea-content a:link{color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-content a:visited,[data-ea-type].loaded.adaptive .ea-content a:visited{color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-content a:hover,[data-ea-type].loaded.adaptive .ea-content a:hover{color:#f6f6f6}[data-ea-publisher].loaded.adaptive .ea-content a:active,[data-ea-type].loaded.adaptive .ea-content a:active{color:#f6f6f6}[data-ea-publisher].loaded.adaptive .ea-content a strong,[data-ea-publisher].loaded.adaptive .ea-content a b,[data-ea-type].loaded.adaptive .ea-content a strong,[data-ea-type].loaded.adaptive .ea-content a b{color:#50baf9}[data-ea-publisher].loaded.adaptive .ea-callout a:link,[data-ea-type].loaded.adaptive .ea-callout a:link{color:#c3c3c3}[data-ea-publisher].loaded.adaptive .ea-callout a:visited,[data-ea-type].loaded.adaptive .ea-callout a:visited{color:#c3c3c3}[data-ea-publisher].loaded.adaptive .ea-callout a:hover,[data-ea-type].loaded.adaptive .ea-callout a:hover{color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-callout a:active,[data-ea-type].loaded.adaptive .ea-callout a:active{color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-callout a strong,[data-ea-publisher].loaded.adaptive .ea-callout a b,[data-ea-type].loaded.adaptive .ea-callout a strong,[data-ea-type].loaded.adaptive .ea-callout a b{color:#50baf9}}[data-ea-publisher].loaded .ea-content,[data-ea-type].loaded .ea-content{border:0px;border-radius:3px;box-shadow:0px 2px 3px rgba(0,0,0,0.15)}[data-ea-publisher].loaded.raised .ea-content,[data-ea-type].loaded.raised .ea-content{border:0px;border-radius:3px;box-shadow:0px 2px 3px rgba(0,0,0,0.15)}[data-ea-publisher].loaded.bordered .ea-content,[data-ea-type].loaded.bordered .ea-content{border:1px solid rgba(0,0,0,0.04);border-radius:3px;box-shadow:none}[data-ea-publisher].loaded.bordered.dark .ea-content,[data-ea-type].loaded.bordered.dark .ea-content{border:1px solid rgba(255,255,255,0.07)}@media (prefers-color-scheme: dark){[data-ea-publisher].loaded.bordered.adaptive .ea-content,[data-ea-type].loaded.bordered.adaptive .ea-content{border:1px solid rgba(255,255,255,0.07)}}[data-ea-publisher].loaded.flat .ea-content,[data-ea-type].loaded.flat .ea-content{border:0px;border-radius:3px;box-shadow:none}[data-ea-type="image"].loaded,[data-ea-publisher]:not([data-ea-type]).loaded,.ea-type-image{display:inline-block}[data-ea-type="image"].loaded .ea-content,[data-ea-publisher]:not([data-ea-type]).loaded .ea-content,.ea-type-image .ea-content{max-width:180px;overflow:auto;text-align:center}[data-ea-type="image"].loaded .ea-content>a>img,[data-ea-publisher]:not([data-ea-type]).loaded .ea-content>a>img,.ea-type-image .ea-content>a>img{width:120px;height:90px;display:inline-block}[data-ea-type="image"].loaded .ea-content>.ea-text,[data-ea-publisher]:not([data-ea-type]).loaded .ea-content>.ea-text,.ea-type-image .ea-content>.ea-text{margin-top:1em;font-size:1em;text-align:center}[data-ea-type="image"].loaded .ea-callout,[data-ea-publisher]:not([data-ea-type]).loaded .ea-callout,.ea-type-image .ea-callout{max-width:180px;margin:0em 1em 1em 1em;padding-left:1em;padding-right:1em;font-style:italic;text-align:right}[data-ea-type="image"].loaded.horizontal .ea-content,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-content,.ea-type-image.horizontal .ea-content{max-width:320px}[data-ea-type="image"].loaded.horizontal .ea-content>a>img,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-content>a>img,.ea-type-image.horizontal .ea-content>a>img{float:left;margin-right:1em}[data-ea-type="image"].loaded.horizontal .ea-content .ea-text,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-content .ea-text,.ea-type-image.horizontal .ea-content .ea-text{margin-top:0em;text-align:left;overflow:auto}[data-ea-type="image"].loaded.horizontal .ea-callout,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-callout,.ea-type-image.horizontal .ea-callout{max-width:320px;text-align:right}[data-ea-type="text"].loaded,.ea-type-text{font-size:14px}[data-ea-type="text"].loaded .ea-content,.ea-type-text .ea-content{text-align:left}[data-ea-type="text"].loaded .ea-callout,.ea-type-text .ea-callout{margin:0.5em 1em 1em 1em;padding-left:1em;padding-right:1em;text-align:right;font-style:italic}[data-ea-style="stickybox"].loaded .ea-type-image{z-index:1000;position:fixed;bottom:20px;right:20px}[data-ea-style="stickybox"].loaded .ea-type-image .ea-stickybox-hide{cursor:pointer;position:absolute;top:0.75em;right:0.75em;background-color:#fefefe;border:1px solid #088cdb;border-radius:50%;color:#088cdb;font-size:1em;text-align:center;height:1.5em;width:1.5em;line-height:1.5em}@media (max-width: 1300px){[data-ea-style="stickybox"].loaded .ea-type-image{position:static;bottom:0;right:0;margin:auto;text-align:center}[data-ea-style="stickybox"].loaded .ea-type-image .ea-stickybox-hide{display:none}}@media (min-width: 1301px){[data-ea-style="stickybox"].loaded .ea-type-image .ea-content{background:#dcdcdc}[data-ea-style="stickybox"].loaded.dark .ea-type-image .ea-content{background:#505050}}@media (min-width: 1301px) and (prefers-color-scheme: dark){[data-ea-style="stickybox"].loaded.adaptive .ea-type-image .ea-content{background:#505050}}\n',
      "",
    ]),
      (e.exports = t);
  },
  function (e, t, a) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var a = (function (e, t) {
              var a = e[1] || "",
                n = e[3];
              if (!n) return a;
              if (t && "function" == typeof btoa) {
                var o =
                    ((i = n),
                    (d = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                    (l =
                      "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        d
                      )),
                    "/*# ".concat(l, " */")),
                  r = n.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(n.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [a].concat(r).concat([o]).join("\n");
              }
              var i, d, l;
              return [a].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(a, "}") : a;
          }).join("");
        }),
        (t.i = function (e, a, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (n)
            for (var r = 0; r < this.length; r++) {
              var i = this[r][0];
              null != i && (o[i] = !0);
            }
          for (var d = 0; d < e.length; d++) {
            var l = [].concat(e[d]);
            (n && o[l[0]]) ||
              (a &&
                (l[2]
                  ? (l[2] = "".concat(a, " and ").concat(l[2]))
                  : (l[2] = a)),
              t.push(l));
          }
        }),
        t
      );
    };
  },
]);

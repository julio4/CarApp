/*!
 *
 *     Litepicker module ranges v0.0.4 (https://github.com/wakirin/Litepicker-module-ranges)
 *     Package: litepicker-module-ranges (https://www.npmjs.com/package/litepicker-module-ranges)
 *     License: MIT (https://github.com/wakirin/Litepicker-module-ranges/blob/master/LICENCE.md)
 *     Copyright 2019-2020 Rinat G.
 *
 *     Hash: 633939847f21d7631f31
 *     Generated on: 1592908186387
 *
 */
!(function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n = t();
        for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
    }
})(window, function () {
    return (function (e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var o in e)
                        n.d(
                            r,
                            o,
                            function (t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 0))
        );
    })([
        function (e, t, n) {
            "use strict";
            var r =
                    (this && this.__assign) ||
                    function () {
                        return (r =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e;
                            }).apply(this, arguments);
                    },
                o =
                    (this && this.__importStar) ||
                    function (e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return (t.default = e), t;
                    };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = o(n(1));
            n(5);
            var a,
                c,
                s = window.Litepicker,
                u = new Date(),
                l = new Date(),
                d = function (e, t) {
                    var n = new Date(e);
                    return n.setDate(n.getDate() - t), n;
                },
                f = {
                    "Cette Semaine": [d(u, -7), l],
                    "Ce mois": ((a = u), (c = new Date(a)), [c, new Date(a.getFullYear(), a.getMonth() + 1, 0)]),
                    "Mois prochain": (function (e) {
                        var t = new Date(e);
                        return t.setDate(1), t.setMonth(e.getMonth() + 1), [t, new Date(e.getFullYear(), e.getMonth() + 2, 0)];
                    })(u),
                    "2 Mois": (function (e) {
                        var t = new Date(e);
                        return t.setDate(1), t.setMonth(e.getMonth() + 1), [t, new Date(e.getFullYear(), e.getMonth() + 3, 0)];
                    })(u),
                    "6 Mois": (function (e) {
                        var t = new Date(e);
                        return t.setDate(1), t.setMonth(e.getMonth() + 1), [t, new Date(e.getFullYear(), e.getMonth() + 7, 0)];
                    })(u),
                    "1 an": (function (e) {
                        var t = new Date(e);
                        return t.setDate(1), t.setMonth(e.getMonth() + 1), [t, new Date(e.getFullYear(), e.getMonth() + 13, 0)];
                    })(u)
                };
            s.prototype.enableModuleRanges = function (e) {
                if (e.options.singleMode) console.warn("Litepicker: module ranges are disabled since singleMode is enabled.");
                else {
                    var t = r(r({}, { position: "left", ranges: {} }), e.options.moduleRanges);
                    Object.keys(t.ranges).length || (t.ranges = r({}, f));
                    var n = document.createElement("div");
                    (n.className = i.containerPredefinedRanges),
                        Object.keys(t.ranges).forEach(function (r) {
                            var o = t.ranges[r],
                                i = document.createElement("div");
                            (i.innerText = r),
                                (i.dataset.start = o[0].getTime()),
                                (i.dataset.end = o[1].getTime()),
                                i.addEventListener("click", function (t) {
                                    var n = t.target;
                                    n && (e.setDateRange(Number(n.dataset.start), Number(n.dataset.end)), e.gotoDate(Number(n.dataset.start)));
                                }),
                                n.appendChild(i);
                        });
                    var o = e.picker.querySelector("." + i.containerMain);
                    ["bottom", "right"].includes(t.position) ? o.appendChild(n) : o.prepend(n), ["top", "bottom"].includes(t.position) ? (n.classList.add(i.flexRow), o.classList.add(i.flexColumn)) : o.classList.remove(i.flexColumn);
                }
            };
        },
        function (e, t, n) {
            var r = n(2),
                o = n(3);
            "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
            var i = { insert: "head", singleton: !1 };
            r(o, i);
            e.exports = o.locals || {};
        },
        function (e, t, n) {
            "use strict";
            var r,
                o = function () {
                    return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
                },
                i = (function () {
                    var e = {};
                    return function (t) {
                        if (void 0 === e[t]) {
                            var n = document.querySelector(t);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                            e[t] = n;
                        }
                        return e[t];
                    };
                })(),
                a = [];
            function c(e) {
                for (var t = -1, n = 0; n < a.length; n++)
                    if (a[n].identifier === e) {
                        t = n;
                        break;
                    }
                return t;
            }
            function s(e, t) {
                for (var n = {}, r = [], o = 0; o < e.length; o++) {
                    var i = e[o],
                        s = t.base ? i[0] + t.base : i[0],
                        u = n[s] || 0,
                        l = "".concat(s, " ").concat(u);
                    n[s] = u + 1;
                    var d = c(l),
                        f = { css: i[1], media: i[2], sourceMap: i[3] };
                    -1 !== d ? (a[d].references++, a[d].updater(f)) : a.push({ identifier: l, updater: b(f, t), references: 1 }), r.push(l);
                }
                return r;
            }
            function u(e) {
                var t = document.createElement("style"),
                    r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var o = n.nc;
                    o && (r.nonce = o);
                }
                if (
                    (Object.keys(r).forEach(function (e) {
                        t.setAttribute(e, r[e]);
                    }),
                    "function" == typeof e.insert)
                )
                    e.insert(t);
                else {
                    var a = i(e.insert || "head");
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t);
                }
                return t;
            }
            var l,
                d =
                    ((l = []),
                    function (e, t) {
                        return (l[e] = t), l.filter(Boolean).join("\n");
                    });
            function f(e, t, n, r) {
                var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet) e.styleSheet.cssText = d(t, o);
                else {
                    var i = document.createTextNode(o),
                        a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
                }
            }
            function p(e, t, n) {
                var r = n.css,
                    o = n.media,
                    i = n.sourceMap;
                if (
                    (o ? e.setAttribute("media", o) : e.removeAttribute("media"), i && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet)
                )
                    e.styleSheet.cssText = r;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r));
                }
            }
            var m = null,
                v = 0;
            function b(e, t) {
                var n, r, o;
                if (t.singleton) {
                    var i = v++;
                    (n = m || (m = u(t))), (r = f.bind(null, n, i, !1)), (o = f.bind(null, n, i, !0));
                } else
                    (n = u(t)),
                        (r = p.bind(null, n, t)),
                        (o = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(n);
                        });
                return (
                    r(e),
                    function (t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                            r((e = t));
                        } else o();
                    }
                );
            }
            e.exports = function (e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o());
                var n = s((e = e || []), t);
                return function (e) {
                    if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                        for (var r = 0; r < n.length; r++) {
                            var o = c(n[r]);
                            a[o].references--;
                        }
                        for (var i = s(e, t), u = 0; u < n.length; u++) {
                            var l = c(n[u]);
                            0 === a[l].references && (a[l].updater(), a.splice(l, 1));
                        }
                        n = i;
                    }
                };
            };
        },
        function (e, t, n) {
            (t = n(4)(!1)).push([
                e.i,
                ".container__main.flex-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.container__main .container__predefined-ranges{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-width:100px;width:100px;background:#fff;padding:5px;-webkit-box-shadow:0 0 5px #ddd;box-shadow:0 0 5px #ddd;border-radius:3px;margin:5px 3px}.container__main .container__predefined-ranges.flex-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around;max-width:none;width:auto}.container__main .container__predefined-ranges>div{padding:3px 0;color:#2196F3}.container__main .container__predefined-ranges>div:hover{cursor:default;opacity:.6}\n",
                "",
            ]),
                (t.locals = { containerMain: "container__main", flexColumn: "flex-column", containerPredefinedRanges: "container__predefined-ranges", flexRow: "flex-row" }),
                (e.exports = t);
        },
        function (e, t, n) {
            "use strict";
            e.exports = function (e) {
                var t = [];
                return (
                    (t.toString = function () {
                        return this.map(function (t) {
                            var n = (function (e, t) {
                                var n = e[1] || "",
                                    r = e[3];
                                if (!r) return n;
                                if (t && "function" == typeof btoa) {
                                    var o = ((a = r), (c = btoa(unescape(encodeURIComponent(JSON.stringify(a))))), (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c)), "/*# ".concat(s, " */")),
                                        i = r.sources.map(function (e) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                                        });
                                    return [n].concat(i).concat([o]).join("\n");
                                }
                                var a, c, s;
                                return [n].join("\n");
                            })(t, e);
                            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                        }).join("");
                    }),
                    (t.i = function (e, n, r) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var o = {};
                        if (r)
                            for (var i = 0; i < this.length; i++) {
                                var a = this[i][0];
                                null != a && (o[a] = !0);
                            }
                        for (var c = 0; c < e.length; c++) {
                            var s = [].concat(e[c]);
                            (r && o[s[0]]) || (n && (s[2] ? (s[2] = "".concat(n, " and ").concat(s[2])) : (s[2] = n)), t.push(s));
                        }
                    }),
                    t
                );
            };
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
        },
    ]);
});

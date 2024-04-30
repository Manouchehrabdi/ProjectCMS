/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */ ! function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.3",
        m = function (a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function (a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function () {
            return d.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function (a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a, b) {
            return m.each(this, a, b)
        },
        map: function (a) {
            return this.pushStack(m.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function (a) {
            return "array" === m.type(a)
        },
        isWindow: function (a) {
            return null != a && a == a.window
        },
        isNumeric: function (a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function (a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function (b) {
            b && m.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function () {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = "length" in a && a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function (a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            aa = /[+~]/,
            ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            da = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ea = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                    } if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function (a) {
                    return a = a.replace(ca, da),
                        function (b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
                        function (b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === o
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !d.pseudos.empty(a)
                },
                header: function (a) {
                    return Z.test(a.nodeName)
                },
                input: function (a) {
                    return Y.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function () {
                    return [0]
                }),
                last: oa(function (a, b) {
                    return [b - 1]
                }),
                eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function qa() {}
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                    return a === b
                }, h, !0), l = sa(function (a) {
                    return J(b, a) > -1
                }, h, !0), m = [function (a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                } return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                } k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function (a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function (a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function (a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function (a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function (a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function (a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    } return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function (a) {
            return D(a, "nextSibling")
        },
        prev: function (a) {
            return D(a, "previousSibling")
        },
        nextAll: function (a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return m.sibling(a.firstChild)
        },
        contents: function (a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function (l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    } b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function () {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function (b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function () {
                    return h && m.each(arguments, function (a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function (a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function () {
                    return h = [], e = 0, this
                },
                disable: function () {
                    return h = i = c = void 0, this
                },
                disabled: function () {
                    return !h
                },
                lock: function () {
                    return i = void 0, c || k.disable(), this
                },
                locked: function () {
                    return !i
                },
                fireWith: function (a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function () {
                    return k.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function (a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return m.Deferred(function (c) {
                            m.each(b, function (b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function (a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function (a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function (b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function () {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function (a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;

        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function (a, b, c) {
            return Q(a, b, c)
        },
        removeData: function (a, b) {
            return R(a, b)
        },
        _data: function (a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function (a) {
            return this.each(function () {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function () {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function () {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                m.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function (a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) m.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(m(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function () {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function () {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function aa() {
        return !0
    }

    function ba() {
        return !1
    }

    function ca() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    } return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function (a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== ca() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === ca() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function (a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function () {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba;
            else if (!d) return this;
            return 1 === e && (g = d, d = function (a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function () {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function da(a) {
        var b = ea.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fa = / jQuery\d+="(?:null|\d+)"/g,
        ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
        ha = /^\s+/,
        ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ja = /<([\w:]+)/,
        ka = /<tbody/i,
        la = /<|&#?\w+;/,
        ma = /<(?:script|style|link)/i,
        na = /checked\s*(?:[^=]|=\s*.checked.)/i,
        oa = /^$|\/(?:java|ecma)script/i,
        pa = /^true\/(.*)/,
        qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ra = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sa = da(y),
        ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;

    function ua(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function va(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wa(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xa(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function ya(a) {
        var b = pa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function za(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Aa(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Ba(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g) d[g] && Ba(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) Aa(e, d[g]);
                else Aa(a, f);
            return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (la.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
                    e = 0;
                    while (f = h[e++]) oa.test(f.type || "") && c.push(f)
                } return h = null, o
        },
        cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function (a) {
            return V(this, function (a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ua(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return m.clone(this, a, b)
            })
        },
        html: function (a) {
            return V(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ia, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function (c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ca, Da = {};

    function Ea(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fa(a) {
        var b = y,
            c = Da[a];
        return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c
    }! function () {
        var a;
        k.shrinkWrapBlocks = function () {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Ga = /^margin/,
        Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ia, Ja, Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }, Ja = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ia = function (a) {
        return a.currentStyle
    }, Ja = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function La(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function () {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function () {
                    return null == g && i(), g
                },
                boxSizingReliable: function () {
                    return null == f && i(), f
                },
                pixelPosition: function () {
                    return null == e && i(), e
                },
                reliableMarginRight: function () {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Ma = /alpha\([^)]*\)/i,
        Na = /opacity\s*=\s*([^)]*)/,
        Oa = /^(none|table(?!-c[ea]).+)/,
        Pa = new RegExp("^(" + S + ")(.*)$", "i"),
        Qa = new RegExp("^([+-])=(" + S + ")", "i"),
        Ra = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sa = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ta = ["Webkit", "O", "Moz", "ms"];

    function Ua(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Ta.length;
        while (e--)
            if (b = Ta[e] + c, b in a) return b;
        return d
    }

    function Va(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wa(a, b, c) {
        var d = Pa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Ya(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ia(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Ja(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function (a, b) {
        m.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function () {
                    return Ya(a, b, d)
                }) : Ya(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e = d && Ia(a);
                return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function (a, b) {
            return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Ja, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        m.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ga.test(a) || (m.cssHooks[a + b].set = Wa)
    }), m.fn.extend({
        css: function (a, b) {
            return V(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ia(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return Va(this, !0)
        },
        hide: function () {
            return Va(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a, b, c, d, e)
    }
    m.Tween = Za, Za.prototype = {
        constructor: Za,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = Za.propHooks[this.prop];
            return a && a.get ? a.get(this) : Za.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = Za.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this
        }
    }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Za.prototype.init, m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/,
        bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cb = /queueHooks$/,
        db = [ib],
        eb = {
            "*": [function (a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bb.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fb() {
        return setTimeout(function () {
            $a = void 0
        }), $a = m.now()
    }

    function gb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hb(a, b, c) {
        for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ib(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ab.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
                m(a).hide()
            }), n.done(function () {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kb(a, b, c) {
        var d, e, f = 0,
            g = db.length,
            h = m.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $a || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); g > f; f++)
            if (d = db[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kb, {
            tweener: function (a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b)
            },
            prefilter: function (a, b) {
                b ? db.unshift(a) : db.push(a)
            }
        }), m.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function (a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function () {
                        var b = kb(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function (a) {
                return a !== !1 && (a = a || "fx"), this.each(function () {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function (a, b) {
            var c = m.fn[b];
            m.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gb("show"),
            slideUp: gb("hide"),
            slideToggle: gb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            m.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function () {
            var a, b = m.timers,
                c = 0;
            for ($a = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $a = void 0
        }, m.fx.timer = function (a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function () {
            _a || (_a = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function () {
            clearInterval(_a), _a = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function (a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        function () {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lb = /\r/g;
    m.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        } return g
                },
                set: function (a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = {
            set: function (a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mb, nb, ob = m.expr.attrHandle,
        pb = /^(?:checked|selected)$/i,
        qb = k.getSetAttribute,
        rb = k.input;
    m.fn.extend({
        attr: function (a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nb = {
        set: function (a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ob[b] || m.find.attr;
        ob[b] = rb && qb || !pb.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e
        } : function (a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rb && qb || (m.attrHooks.value = {
        set: function (a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mb && mb.set(a, b, c)
        }
    }), qb || (mb = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, ob.id = ob.name = ob.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mb.set
    }, m.attrHooks.contenteditable = {
        set: function (a, b, c) {
            mb.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sb = /^(?:input|select|textarea|button|object)$/i,
        tb = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function (a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = m.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    } return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    } return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vb = m.now(),
        wb = /\?/,
        xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xb, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yb, zb, Ab = /#.*$/,
        Bb = /([?&])_=[^&]*/,
        Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Eb = /^(?:GET|HEAD)$/,
        Fb = /^\/\//,
        Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hb = {},
        Ib = {},
        Jb = "*/".concat("*");
    try {
        zb = location.href
    } catch (Kb) {
        zb = y.createElement("a"), zb.href = "", zb = zb.href
    }
    yb = Gb.exec(zb.toLowerCase()) || [];

    function Lb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mb(a, b, c, d) {
        var e = {},
            f = a === Ib;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nb(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Ob(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    } if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb,
            type: "GET",
            isLocal: Db.test(yb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lb(Hb),
        ajaxTransport: Lb(Ib),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cb.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t) return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Mb(Ib, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function (a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m._evalUrl = function (a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function (a) {
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return this.each(m.isFunction(a) ? function (b) {
                m(this).wrapInner(a.call(this, b))
            } : function () {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = m.isFunction(a);
            return this.each(function (c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function (a) {
        return !m.expr.filters.hidden(a)
    };
    var Qb = /%20/g,
        Rb = /\[\]$/,
        Sb = /\r?\n/g,
        Tb = /^(?:submit|button|image|reset|file)$/i,
        Ub = /^(?:input|select|textarea|keygen)/i;

    function Vb(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function (b, e) {
            c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vb(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+")
    }, m.fn.extend({
        serialize: function () {
            return m.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a))
            }).map(function (a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Sb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sb, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
    } : Zb;
    var Wb = 0,
        Xb = {},
        Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Xb) Xb[a](void 0, !0)
    }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(),
                        g = ++Wb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            } j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b()
                },
                abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zb() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $b() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function (d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _b = [],
        ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = _b.pop() || m.expando + "_" + vb++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bc = m.fn.load;
    m.fn.load = function (a, b, c) {
        if ("string" != typeof a && bc) return bc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem
        }).length
    };
    var cc = a.document.documentElement;

    function dc(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function () {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || cc;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cc
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function (a, b) {
        m.cssHooks[b] = La(k.pixelPosition, function (a, c) {
            return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function (b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function () {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return m
    });
    var ec = a.jQuery,
        fc = a.$;
    return m.noConflict = function (b) {
        return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});


/* popper JS */
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function () {
	'use strict';

	function e(e) {
		return e && '[object Function]' === {}.toString.call(e)
	}

	function t(e, t) {
		if (1 !== e.nodeType) return [];
		var o = window.getComputedStyle(e, null);
		return t ? o[t] : o
	}

	function o(e) {
		return 'HTML' === e.nodeName ? e : e.parentNode || e.host
	}

	function n(e) {
		if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName)) return window.document.body;
		var i = t(e),
			r = i.overflow,
			p = i.overflowX,
			s = i.overflowY;
		return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
	}

	function r(e) {
		var o = e && e.offsetParent,
			i = o && o.nodeName;
		return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : window.document.documentElement
	}

	function p(e) {
		var t = e.nodeName;
		return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
	}

	function s(e) {
		return null === e.parentNode ? e : s(e.parentNode)
	}

	function d(e, t) {
		if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement;
		var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
			i = o ? e : t,
			n = o ? t : e,
			a = document.createRange();
		a.setStart(i, 0), a.setEnd(n, 0);
		var f = a.commonAncestorContainer;
		if (e !== f && t !== f || i.contains(n)) return p(f) ? f : r(f);
		var l = s(e);
		return l.host ? d(l.host, t) : d(e, s(t).host)
	}

	function a(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
			o = 'top' === t ? 'scrollTop' : 'scrollLeft',
			i = e.nodeName;
		if ('BODY' === i || 'HTML' === i) {
			var n = window.document.documentElement,
				r = window.document.scrollingElement || n;
			return r[o]
		}
		return e[o]
	}

	function f(e, t) {
		var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
			i = a(t, 'top'),
			n = a(t, 'left'),
			r = o ? -1 : 1;
		return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e
	}

	function l(e, t) {
		var o = 'x' === t ? 'Left' : 'Top',
			i = 'Left' == o ? 'Right' : 'Bottom';
		return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0]
	}

	function m(e, t, o, i) {
		return _(t['offset' + e], o['client' + e], o['offset' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
	}

	function h() {
		var e = window.document.body,
			t = window.document.documentElement,
			o = ie() && window.getComputedStyle(t);
		return {
			height: m('Height', e, t, o),
			width: m('Width', e, t, o)
		}
	}

	function c(e) {
		return se({}, e, {
			right: e.left + e.width,
			bottom: e.top + e.height
		})
	}

	function g(e) {
		var o = {};
		if (ie()) try {
			o = e.getBoundingClientRect();
			var i = a(e, 'top'),
				n = a(e, 'left');
			o.top += i, o.left += n, o.bottom += i, o.right += n
		} catch (e) {} else o = e.getBoundingClientRect();
		var r = {
				left: o.left,
				top: o.top,
				width: o.right - o.left,
				height: o.bottom - o.top
			},
			p = 'HTML' === e.nodeName ? h() : {},
			s = p.width || e.clientWidth || r.right - r.left,
			d = p.height || e.clientHeight || r.bottom - r.top,
			f = e.offsetWidth - s,
			m = e.offsetHeight - d;
		if (f || m) {
			var g = t(e);
			f -= l(g, 'x'), m -= l(g, 'y'), r.width -= f, r.height -= m
		}
		return c(r)
	}

	function u(e, o) {
		var i = ie(),
			r = 'HTML' === o.nodeName,
			p = g(e),
			s = g(o),
			d = n(e),
			a = t(o),
			l = +a.borderTopWidth.split('px')[0],
			m = +a.borderLeftWidth.split('px')[0],
			h = c({
				top: p.top - s.top - l,
				left: p.left - s.left - m,
				width: p.width,
				height: p.height
			});
		if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
			var u = +a.marginTop.split('px')[0],
				b = +a.marginLeft.split('px')[0];
			h.top -= l - u, h.bottom -= l - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b
		}
		return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = f(h, o)), h
	}

	function b(e) {
		var t = window.document.documentElement,
			o = u(e, t),
			i = _(t.clientWidth, window.innerWidth || 0),
			n = _(t.clientHeight, window.innerHeight || 0),
			r = a(t),
			p = a(t, 'left'),
			s = {
				top: r - o.top + o.marginTop,
				left: p - o.left + o.marginLeft,
				width: i,
				height: n
			};
		return c(s)
	}

	function y(e) {
		var i = e.nodeName;
		return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e))
	}

	function w(e, t, i, r) {
		var p = {
				top: 0,
				left: 0
			},
			s = d(e, t);
		if ('viewport' === r) p = b(s);
		else {
			var a;
			'scrollParent' === r ? (a = n(o(e)), 'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r;
			var f = u(a, s);
			if ('HTML' === a.nodeName && !y(s)) {
				var l = h(),
					m = l.height,
					c = l.width;
				p.top += f.top - f.marginTop, p.bottom = m + f.top, p.left += f.left - f.marginLeft, p.right = c + f.left
			} else p = f
		}
		return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p
	}

	function v(e) {
		var t = e.width,
			o = e.height;
		return t * o
	}

	function E(e, t, o, i, n) {
		var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
		if (-1 === e.indexOf('auto')) return e;
		var p = w(o, i, r, n),
			s = {
				top: {
					width: p.width,
					height: t.top - p.top
				},
				right: {
					width: p.right - t.right,
					height: p.height
				},
				bottom: {
					width: p.width,
					height: p.bottom - t.bottom
				},
				left: {
					width: t.left - p.left,
					height: p.height
				}
			},
			d = Object.keys(s).map(function (e) {
				return se({
					key: e
				}, s[e], {
					area: v(s[e])
				})
			}).sort(function (e, t) {
				return t.area - e.area
			}),
			a = d.filter(function (e) {
				var t = e.width,
					i = e.height;
				return t >= o.clientWidth && i >= o.clientHeight
			}),
			f = 0 < a.length ? a[0].key : d[0].key,
			l = e.split('-')[1];
		return f + (l ? '-' + l : '')
	}

	function x(e, t, o) {
		var i = d(t, o);
		return u(o, i)
	}

	function O(e) {
		var t = window.getComputedStyle(e),
			o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
			i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
			n = {
				width: e.offsetWidth + i,
				height: e.offsetHeight + o
			};
		return n
	}

	function L(e) {
		var t = {
			left: 'right',
			right: 'left',
			bottom: 'top',
			top: 'bottom'
		};
		return e.replace(/left|right|bottom|top/g, function (e) {
			return t[e]
		})
	}

	function S(e, t, o) {
		o = o.split('-')[0];
		var i = O(e),
			n = {
				width: i.width,
				height: i.height
			},
			r = -1 !== ['right', 'left'].indexOf(o),
			p = r ? 'top' : 'left',
			s = r ? 'left' : 'top',
			d = r ? 'height' : 'width',
			a = r ? 'width' : 'height';
		return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[L(s)], n
	}

	function T(e, t) {
		return Array.prototype.find ? e.find(t) : e.filter(t)[0]
	}

	function C(e, t, o) {
		if (Array.prototype.findIndex) return e.findIndex(function (e) {
			return e[t] === o
		});
		var i = T(e, function (e) {
			return e[t] === o
		});
		return e.indexOf(i)
	}

	function N(t, o, i) {
		var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
		return n.forEach(function (t) {
			t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
			var i = t.function || t.fn;
			t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t))
		}), o
	}

	function k() {
		if (!this.state.isDestroyed) {
			var e = {
				instance: this,
				styles: {},
				attributes: {},
				flipped: !1,
				offsets: {}
			};
			e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
		}
	}

	function W(e, t) {
		return e.some(function (e) {
			var o = e.name,
				i = e.enabled;
			return i && o === t
		})
	}

	function B(e) {
		for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
			var i = t[n],
				r = i ? '' + i + o : e;
			if ('undefined' != typeof window.document.body.style[r]) return r
		}
		return null
	}

	function D() {
		return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
	}

	function H(e, t, o, i) {
		var r = 'BODY' === e.nodeName,
			p = r ? window : e;
		p.addEventListener(t, o, {
			passive: !0
		}), r || H(n(p.parentNode), t, o, i), i.push(p)
	}

	function P(e, t, o, i) {
		o.updateBound = i, window.addEventListener('resize', o.updateBound, {
			passive: !0
		});
		var r = n(e);
		return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
	}

	function A() {
		this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
	}

	function M(e, t) {
		return window.removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
			e.removeEventListener('scroll', t.updateBound)
		}), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
	}

	function I() {
		this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
	}

	function R(e) {
		return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
	}

	function U(e, t) {
		Object.keys(t).forEach(function (o) {
			var i = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && R(t[o]) && (i = 'px'), e.style[o] = t[o] + i
		})
	}

	function Y(e, t) {
		Object.keys(t).forEach(function (o) {
			var i = t[o];
			!1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
		})
	}

	function F(e, t, o) {
		var i = T(e, function (e) {
				var o = e.name;
				return o === t
			}),
			n = !!i && e.some(function (e) {
				return e.name === o && e.enabled && e.order < i.order
			});
		if (!n) {
			var r = '`' + t + '`';
			console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
		}
		return n
	}

	function j(e) {
		return 'end' === e ? 'start' : 'start' === e ? 'end' : e
	}

	function K(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
			o = ae.indexOf(e),
			i = ae.slice(o + 1).concat(ae.slice(0, o));
		return t ? i.reverse() : i
	}

	function q(e, t, o, i) {
		var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
			r = +n[1],
			p = n[2];
		if (!r) return e;
		if (0 === p.indexOf('%')) {
			var s;
			switch (p) {
				case '%p':
					s = o;
					break;
				case '%':
				case '%r':
				default:
					s = i;
			}
			var d = c(s);
			return d[t] / 100 * r
		}
		if ('vh' === p || 'vw' === p) {
			var a;
			return a = 'vh' === p ? _(document.documentElement.clientHeight, window.innerHeight || 0) : _(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
		}
		return r
	}

	function G(e, t, o, i) {
		var n = [0, 0],
			r = -1 !== ['right', 'left'].indexOf(i),
			p = e.split(/(\+|\-)/).map(function (e) {
				return e.trim()
			}),
			s = p.indexOf(T(p, function (e) {
				return -1 !== e.search(/,|\s/)
			}));
		p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
		var d = /\s*,\s*|\s+/,
			a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
		return a = a.map(function (e, i) {
			var n = (1 === i ? !r : r) ? 'height' : 'width',
				p = !1;
			return e.reduce(function (e, t) {
				return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
			}, []).map(function (e) {
				return q(e, n, t, o)
			})
		}), a.forEach(function (e, t) {
			e.forEach(function (o, i) {
				R(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
			})
		}), n
	}
	for (var z = Math.min, V = Math.floor, _ = Math.max, X = ['native code', '[object MutationObserverConstructor]'], Q = function (e) {
			return X.some(function (t) {
				return -1 < (e || '').toString().indexOf(t)
			})
		}, J = 'undefined' != typeof window, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1)
		if (J && 0 <= navigator.userAgent.indexOf(Z[ee])) {
			$ = 1;
			break
		} var i, te = J && Q(window.MutationObserver),
		oe = te ? function (e) {
			var t = !1,
				o = 0,
				i = document.createElement('span'),
				n = new MutationObserver(function () {
					e(), t = !1
				});
			return n.observe(i, {
					attributes: !0
				}),
				function () {
					t || (t = !0, i.setAttribute('x-index', o), ++o)
				}
		} : function (e) {
			var t = !1;
			return function () {
				t || (t = !0, setTimeout(function () {
					t = !1, e()
				}, $))
			}
		},
		ie = function () {
			return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i
		},
		ne = function (e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
		},
		re = function () {
			function e(e, t) {
				for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
			}
			return function (t, o, i) {
				return o && e(t.prototype, o), i && e(t, i), t
			}
		}(),
		pe = function (e, t, o) {
			return t in e ? Object.defineProperty(e, t, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = o, e
		},
		se = Object.assign || function (e) {
			for (var t, o = 1; o < arguments.length; o++)
				for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e
		},
		de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
		ae = de.slice(3),
		fe = {
			FLIP: 'flip',
			CLOCKWISE: 'clockwise',
			COUNTERCLOCKWISE: 'counterclockwise'
		},
		le = function () {
			function t(o, i) {
				var n = this,
					r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
				ne(this, t), this.scheduleUpdate = function () {
					return requestAnimationFrame(n.update)
				}, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = {
					isDestroyed: !1,
					isCreated: !1,
					scrollParents: []
				}, this.reference = o.jquery ? o[0] : o, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
					n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
				}), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
					return se({
						name: e
					}, n.options.modifiers[e])
				}).sort(function (e, t) {
					return e.order - t.order
				}), this.modifiers.forEach(function (t) {
					t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
				}), this.update();
				var p = this.options.eventsEnabled;
				p && this.enableEventListeners(), this.state.eventsEnabled = p
			}
			return re(t, [{
				key: 'update',
				value: function () {
					return k.call(this)
				}
			}, {
				key: 'destroy',
				value: function () {
					return D.call(this)
				}
			}, {
				key: 'enableEventListeners',
				value: function () {
					return A.call(this)
				}
			}, {
				key: 'disableEventListeners',
				value: function () {
					return I.call(this)
				}
			}]), t
		}();
	return le.Utils = ('undefined' == typeof window ? global : window).PopperUtils, le.placements = de, le.Defaults = {
		placement: 'bottom',
		eventsEnabled: !0,
		removeOnDestroy: !1,
		onCreate: function () {},
		onUpdate: function () {},
		modifiers: {
			shift: {
				order: 100,
				enabled: !0,
				fn: function (e) {
					var t = e.placement,
						o = t.split('-')[0],
						i = t.split('-')[1];
					if (i) {
						var n = e.offsets,
							r = n.reference,
							p = n.popper,
							s = -1 !== ['bottom', 'top'].indexOf(o),
							d = s ? 'left' : 'top',
							a = s ? 'width' : 'height',
							f = {
								start: pe({}, d, r[d]),
								end: pe({}, d, r[d] + r[a] - p[a])
							};
						e.offsets.popper = se({}, p, f[i])
					}
					return e
				}
			},
			offset: {
				order: 200,
				enabled: !0,
				fn: function (e, t) {
					var o, i = t.offset,
						n = e.placement,
						r = e.offsets,
						p = r.popper,
						s = r.reference,
						d = n.split('-')[0];
					return o = R(+i) ? [+i, 0] : G(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
				},
				offset: 0
			},
			preventOverflow: {
				order: 300,
				enabled: !0,
				fn: function (e, t) {
					var o = t.boundariesElement || r(e.instance.popper);
					e.instance.reference === o && (o = r(o));
					var i = w(e.instance.popper, e.instance.reference, t.padding, o);
					t.boundaries = i;
					var n = t.priority,
						p = e.offsets.popper,
						s = {
							primary: function (e) {
								var o = p[e];
								return p[e] < i[e] && !t.escapeWithReference && (o = _(p[e], i[e])), pe({}, e, o)
							},
							secondary: function (e) {
								var o = 'right' === e ? 'left' : 'top',
									n = p[o];
								return p[e] > i[e] && !t.escapeWithReference && (n = z(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n)
							}
						};
					return n.forEach(function (e) {
						var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
						p = se({}, p, s[t](e))
					}), e.offsets.popper = p, e
				},
				priority: ['left', 'right', 'top', 'bottom'],
				padding: 5,
				boundariesElement: 'scrollParent'
			},
			keepTogether: {
				order: 400,
				enabled: !0,
				fn: function (e) {
					var t = e.offsets,
						o = t.popper,
						i = t.reference,
						n = e.placement.split('-')[0],
						r = V,
						p = -1 !== ['top', 'bottom'].indexOf(n),
						s = p ? 'right' : 'bottom',
						d = p ? 'left' : 'top',
						a = p ? 'width' : 'height';
					return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e
				}
			},
			arrow: {
				order: 500,
				enabled: !0,
				fn: function (e, t) {
					if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
					var o = t.element;
					if ('string' == typeof o) {
						if (o = e.instance.popper.querySelector(o), !o) return e;
					} else if (!e.instance.popper.contains(o)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
					var i = e.placement.split('-')[0],
						n = e.offsets,
						r = n.popper,
						p = n.reference,
						s = -1 !== ['left', 'right'].indexOf(i),
						d = s ? 'height' : 'width',
						a = s ? 'top' : 'left',
						f = s ? 'left' : 'top',
						l = s ? 'bottom' : 'right',
						m = O(o)[d];
					p[l] - m < r[a] && (e.offsets.popper[a] -= r[a] - (p[l] - m)), p[a] + m > r[l] && (e.offsets.popper[a] += p[a] + m - r[l]);
					var h = p[a] + p[d] / 2 - m / 2,
						g = h - c(e.offsets.popper)[a];
					return g = _(z(r[d] - m, g), 0), e.arrowElement = o, e.offsets.arrow = {}, e.offsets.arrow[a] = Math.round(g), e.offsets.arrow[f] = '', e
				},
				element: '[x-arrow]'
			},
			flip: {
				order: 600,
				enabled: !0,
				fn: function (e, t) {
					if (W(e.instance.modifiers, 'inner')) return e;
					if (e.flipped && e.placement === e.originalPlacement) return e;
					var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
						i = e.placement.split('-')[0],
						n = L(i),
						r = e.placement.split('-')[1] || '',
						p = [];
					switch (t.behavior) {
						case fe.FLIP:
							p = [i, n];
							break;
						case fe.CLOCKWISE:
							p = K(i);
							break;
						case fe.COUNTERCLOCKWISE:
							p = K(i, !0);
							break;
						default:
							p = t.behavior;
					}
					return p.forEach(function (s, d) {
						if (i !== s || p.length === d + 1) return e;
						i = e.placement.split('-')[0], n = L(i);
						var a = e.offsets.popper,
							f = e.offsets.reference,
							l = V,
							m = 'left' === i && l(a.right) > l(f.left) || 'right' === i && l(a.left) < l(f.right) || 'top' === i && l(a.bottom) > l(f.top) || 'bottom' === i && l(a.top) < l(f.bottom),
							h = l(a.left) < l(o.left),
							c = l(a.right) > l(o.right),
							g = l(a.top) < l(o.top),
							u = l(a.bottom) > l(o.bottom),
							b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
							y = -1 !== ['top', 'bottom'].indexOf(i),
							w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
						(m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = j(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip'))
					}), e
				},
				behavior: 'flip',
				padding: 5,
				boundariesElement: 'viewport'
			},
			inner: {
				order: 700,
				enabled: !1,
				fn: function (e) {
					var t = e.placement,
						o = t.split('-')[0],
						i = e.offsets,
						n = i.popper,
						r = i.reference,
						p = -1 !== ['left', 'right'].indexOf(o),
						s = -1 === ['top', 'left'].indexOf(o);
					return n[p ? 'left' : 'top'] = r[t] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = c(n), e
				}
			},
			hide: {
				order: 800,
				enabled: !0,
				fn: function (e) {
					if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
					var t = e.offsets.reference,
						o = T(e.instance.modifiers, function (e) {
							return 'preventOverflow' === e.name
						}).boundaries;
					if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
						if (!0 === e.hide) return e;
						e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
					} else {
						if (!1 === e.hide) return e;
						e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
					}
					return e
				}
			},
			computeStyle: {
				order: 850,
				enabled: !0,
				fn: function (e, t) {
					var o = t.x,
						i = t.y,
						n = e.offsets.popper,
						p = T(e.instance.modifiers, function (e) {
							return 'applyStyle' === e.name
						}).gpuAcceleration;
					void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
					var s, d, a = void 0 === p ? t.gpuAcceleration : p,
						f = r(e.instance.popper),
						l = g(f),
						m = {
							position: n.position
						},
						h = {
							left: V(n.left),
							top: V(n.top),
							bottom: V(n.bottom),
							right: V(n.right)
						},
						c = 'bottom' === o ? 'top' : 'bottom',
						u = 'right' === i ? 'left' : 'right',
						b = B('transform');
					if (d = 'bottom' == c ? -l.height + h.bottom : h.top, s = 'right' == u ? -l.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';
					else {
						var y = 'bottom' == c ? -1 : 1,
							w = 'right' == u ? -1 : 1;
						m[c] = d * y, m[u] = s * w, m.willChange = c + ', ' + u
					}
					var v = {
						"x-placement": e.placement
					};
					return e.attributes = se({}, v, e.attributes), e.styles = se({}, m, e.styles), e
				},
				gpuAcceleration: !0,
				x: 'bottom',
				y: 'right'
			},
			applyStyle: {
				order: 900,
				enabled: !0,
				fn: function (e) {
					return U(e.instance.popper, e.styles), Y(e.instance.popper, e.attributes), e.offsets.arrow && U(e.arrowElement, e.offsets.arrow), e
				},
				onLoad: function (e, t, o, i, n) {
					var r = x(n, t, e),
						p = E(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
					return t.setAttribute('x-placement', p), U(t, {
						position: 'absolute'
					}), o
				},
				gpuAcceleration: void 0
			}
		}
	}, le
});
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function () {
	'use strict';

	function e(e) {
		return e && '[object Function]' === {}.toString.call(e)
	}

	function t(e, t) {
		if (1 !== e.nodeType) return [];
		var o = window.getComputedStyle(e, null);
		return t ? o[t] : o
	}

	function o(e) {
		return 'HTML' === e.nodeName ? e : e.parentNode || e.host
	}

	function n(e) {
		if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName)) return window.document.body;
		var i = t(e),
			r = i.overflow,
			p = i.overflowX,
			s = i.overflowY;
		return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
	}

	function r(e) {
		var o = e && e.offsetParent,
			i = o && o.nodeName;
		return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : window.document.documentElement
	}

	function p(e) {
		var t = e.nodeName;
		return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
	}

	function s(e) {
		return null === e.parentNode ? e : s(e.parentNode)
	}

	function d(e, t) {
		if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement;
		var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
			i = o ? e : t,
			n = o ? t : e,
			a = document.createRange();
		a.setStart(i, 0), a.setEnd(n, 0);
		var f = a.commonAncestorContainer;
		if (e !== f && t !== f || i.contains(n)) return p(f) ? f : r(f);
		var l = s(e);
		return l.host ? d(l.host, t) : d(e, s(t).host)
	}

	function a(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
			o = 'top' === t ? 'scrollTop' : 'scrollLeft',
			i = e.nodeName;
		if ('BODY' === i || 'HTML' === i) {
			var n = window.document.documentElement,
				r = window.document.scrollingElement || n;
			return r[o]
		}
		return e[o]
	}

	function f(e, t) {
		var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
			i = a(t, 'top'),
			n = a(t, 'left'),
			r = o ? -1 : 1;
		return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e
	}

	function l(e, t) {
		var o = 'x' === t ? 'Left' : 'Top',
			i = 'Left' == o ? 'Right' : 'Bottom';
		return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0]
	}

	function m(e, t, o, i) {
		return _(t['offset' + e], o['client' + e], o['offset' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
	}

	function h() {
		var e = window.document.body,
			t = window.document.documentElement,
			o = ie() && window.getComputedStyle(t);
		return {
			height: m('Height', e, t, o),
			width: m('Width', e, t, o)
		}
	}

	function c(e) {
		return se({}, e, {
			right: e.left + e.width,
			bottom: e.top + e.height
		})
	}

	function g(e) {
		var o = {};
		if (ie()) try {
			o = e.getBoundingClientRect();
			var i = a(e, 'top'),
				n = a(e, 'left');
			o.top += i, o.left += n, o.bottom += i, o.right += n
		} catch (e) {} else o = e.getBoundingClientRect();
		var r = {
				left: o.left,
				top: o.top,
				width: o.right - o.left,
				height: o.bottom - o.top
			},
			p = 'HTML' === e.nodeName ? h() : {},
			s = p.width || e.clientWidth || r.right - r.left,
			d = p.height || e.clientHeight || r.bottom - r.top,
			f = e.offsetWidth - s,
			m = e.offsetHeight - d;
		if (f || m) {
			var g = t(e);
			f -= l(g, 'x'), m -= l(g, 'y'), r.width -= f, r.height -= m
		}
		return c(r)
	}

	function u(e, o) {
		var i = ie(),
			r = 'HTML' === o.nodeName,
			p = g(e),
			s = g(o),
			d = n(e),
			a = t(o),
			l = +a.borderTopWidth.split('px')[0],
			m = +a.borderLeftWidth.split('px')[0],
			h = c({
				top: p.top - s.top - l,
				left: p.left - s.left - m,
				width: p.width,
				height: p.height
			});
		if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
			var u = +a.marginTop.split('px')[0],
				b = +a.marginLeft.split('px')[0];
			h.top -= l - u, h.bottom -= l - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b
		}
		return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = f(h, o)), h
	}

	function b(e) {
		var t = window.document.documentElement,
			o = u(e, t),
			i = _(t.clientWidth, window.innerWidth || 0),
			n = _(t.clientHeight, window.innerHeight || 0),
			r = a(t),
			p = a(t, 'left'),
			s = {
				top: r - o.top + o.marginTop,
				left: p - o.left + o.marginLeft,
				width: i,
				height: n
			};
		return c(s)
	}

	function y(e) {
		var i = e.nodeName;
		return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e))
	}

	function w(e, t, i, r) {
		var p = {
				top: 0,
				left: 0
			},
			s = d(e, t);
		if ('viewport' === r) p = b(s);
		else {
			var a;
			'scrollParent' === r ? (a = n(o(e)), 'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r;
			var f = u(a, s);
			if ('HTML' === a.nodeName && !y(s)) {
				var l = h(),
					m = l.height,
					c = l.width;
				p.top += f.top - f.marginTop, p.bottom = m + f.top, p.left += f.left - f.marginLeft, p.right = c + f.left
			} else p = f
		}
		return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p
	}

	function v(e) {
		var t = e.width,
			o = e.height;
		return t * o
	}

	function E(e, t, o, i, n) {
		var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
		if (-1 === e.indexOf('auto')) return e;
		var p = w(o, i, r, n),
			s = {
				top: {
					width: p.width,
					height: t.top - p.top
				},
				right: {
					width: p.right - t.right,
					height: p.height
				},
				bottom: {
					width: p.width,
					height: p.bottom - t.bottom
				},
				left: {
					width: t.left - p.left,
					height: p.height
				}
			},
			d = Object.keys(s).map(function (e) {
				return se({
					key: e
				}, s[e], {
					area: v(s[e])
				})
			}).sort(function (e, t) {
				return t.area - e.area
			}),
			a = d.filter(function (e) {
				var t = e.width,
					i = e.height;
				return t >= o.clientWidth && i >= o.clientHeight
			}),
			f = 0 < a.length ? a[0].key : d[0].key,
			l = e.split('-')[1];
		return f + (l ? '-' + l : '')
	}

	function x(e, t, o) {
		var i = d(t, o);
		return u(o, i)
	}

	function O(e) {
		var t = window.getComputedStyle(e),
			o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
			i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
			n = {
				width: e.offsetWidth + i,
				height: e.offsetHeight + o
			};
		return n
	}

	function L(e) {
		var t = {
			left: 'right',
			right: 'left',
			bottom: 'top',
			top: 'bottom'
		};
		return e.replace(/left|right|bottom|top/g, function (e) {
			return t[e]
		})
	}

	function S(e, t, o) {
		o = o.split('-')[0];
		var i = O(e),
			n = {
				width: i.width,
				height: i.height
			},
			r = -1 !== ['right', 'left'].indexOf(o),
			p = r ? 'top' : 'left',
			s = r ? 'left' : 'top',
			d = r ? 'height' : 'width',
			a = r ? 'width' : 'height';
		return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[L(s)], n
	}

	function T(e, t) {
		return Array.prototype.find ? e.find(t) : e.filter(t)[0]
	}

	function C(e, t, o) {
		if (Array.prototype.findIndex) return e.findIndex(function (e) {
			return e[t] === o
		});
		var i = T(e, function (e) {
			return e[t] === o
		});
		return e.indexOf(i)
	}

	function N(t, o, i) {
		var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
		return n.forEach(function (t) {
			t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
			var i = t.function || t.fn;
			t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t))
		}), o
	}

	function k() {
		if (!this.state.isDestroyed) {
			var e = {
				instance: this,
				styles: {},
				attributes: {},
				flipped: !1,
				offsets: {}
			};
			e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
		}
	}

	function W(e, t) {
		return e.some(function (e) {
			var o = e.name,
				i = e.enabled;
			return i && o === t
		})
	}

	function B(e) {
		for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
			var i = t[n],
				r = i ? '' + i + o : e;
			if ('undefined' != typeof window.document.body.style[r]) return r
		}
		return null
	}

	function D() {
		return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
	}

	function H(e, t, o, i) {
		var r = 'BODY' === e.nodeName,
			p = r ? window : e;
		p.addEventListener(t, o, {
			passive: !0
		}), r || H(n(p.parentNode), t, o, i), i.push(p)
	}

	function P(e, t, o, i) {
		o.updateBound = i, window.addEventListener('resize', o.updateBound, {
			passive: !0
		});
		var r = n(e);
		return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
	}

	function A() {
		this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
	}

	function M(e, t) {
		return window.removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
			e.removeEventListener('scroll', t.updateBound)
		}), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
	}

	function I() {
		this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
	}

	function R(e) {
		return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
	}

	function U(e, t) {
		Object.keys(t).forEach(function (o) {
			var i = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && R(t[o]) && (i = 'px'), e.style[o] = t[o] + i
		})
	}

	function Y(e, t) {
		Object.keys(t).forEach(function (o) {
			var i = t[o];
			!1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
		})
	}

	function F(e, t, o) {
		var i = T(e, function (e) {
				var o = e.name;
				return o === t
			}),
			n = !!i && e.some(function (e) {
				return e.name === o && e.enabled && e.order < i.order
			});
		if (!n) {
			var r = '`' + t + '`';
			console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
		}
		return n
	}

	function j(e) {
		return 'end' === e ? 'start' : 'start' === e ? 'end' : e
	}

	function K(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
			o = ae.indexOf(e),
			i = ae.slice(o + 1).concat(ae.slice(0, o));
		return t ? i.reverse() : i
	}

	function q(e, t, o, i) {
		var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
			r = +n[1],
			p = n[2];
		if (!r) return e;
		if (0 === p.indexOf('%')) {
			var s;
			switch (p) {
				case '%p':
					s = o;
					break;
				case '%':
				case '%r':
				default:
					s = i;
			}
			var d = c(s);
			return d[t] / 100 * r
		}
		if ('vh' === p || 'vw' === p) {
			var a;
			return a = 'vh' === p ? _(document.documentElement.clientHeight, window.innerHeight || 0) : _(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
		}
		return r
	}

	function G(e, t, o, i) {
		var n = [0, 0],
			r = -1 !== ['right', 'left'].indexOf(i),
			p = e.split(/(\+|\-)/).map(function (e) {
				return e.trim()
			}),
			s = p.indexOf(T(p, function (e) {
				return -1 !== e.search(/,|\s/)
			}));
		p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
		var d = /\s*,\s*|\s+/,
			a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
		return a = a.map(function (e, i) {
			var n = (1 === i ? !r : r) ? 'height' : 'width',
				p = !1;
			return e.reduce(function (e, t) {
				return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
			}, []).map(function (e) {
				return q(e, n, t, o)
			})
		}), a.forEach(function (e, t) {
			e.forEach(function (o, i) {
				R(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
			})
		}), n
	}
	for (var z = Math.min, V = Math.floor, _ = Math.max, X = ['native code', '[object MutationObserverConstructor]'], Q = function (e) {
			return X.some(function (t) {
				return -1 < (e || '').toString().indexOf(t)
			})
		}, J = 'undefined' != typeof window, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1)
		if (J && 0 <= navigator.userAgent.indexOf(Z[ee])) {
			$ = 1;
			break
		} var i, te = J && Q(window.MutationObserver),
		oe = te ? function (e) {
			var t = !1,
				o = 0,
				i = document.createElement('span'),
				n = new MutationObserver(function () {
					e(), t = !1
				});
			return n.observe(i, {
					attributes: !0
				}),
				function () {
					t || (t = !0, i.setAttribute('x-index', o), ++o)
				}
		} : function (e) {
			var t = !1;
			return function () {
				t || (t = !0, setTimeout(function () {
					t = !1, e()
				}, $))
			}
		},
		ie = function () {
			return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i
		},
		ne = function (e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
		},
		re = function () {
			function e(e, t) {
				for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
			}
			return function (t, o, i) {
				return o && e(t.prototype, o), i && e(t, i), t
			}
		}(),
		pe = function (e, t, o) {
			return t in e ? Object.defineProperty(e, t, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = o, e
		},
		se = Object.assign || function (e) {
			for (var t, o = 1; o < arguments.length; o++)
				for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e
		},
		de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
		ae = de.slice(3),
		fe = {
			FLIP: 'flip',
			CLOCKWISE: 'clockwise',
			COUNTERCLOCKWISE: 'counterclockwise'
		},
		le = function () {
			function t(o, i) {
				var n = this,
					r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
				ne(this, t), this.scheduleUpdate = function () {
					return requestAnimationFrame(n.update)
				}, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = {
					isDestroyed: !1,
					isCreated: !1,
					scrollParents: []
				}, this.reference = o.jquery ? o[0] : o, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
					n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
				}), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
					return se({
						name: e
					}, n.options.modifiers[e])
				}).sort(function (e, t) {
					return e.order - t.order
				}), this.modifiers.forEach(function (t) {
					t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
				}), this.update();
				var p = this.options.eventsEnabled;
				p && this.enableEventListeners(), this.state.eventsEnabled = p
			}
			return re(t, [{
				key: 'update',
				value: function () {
					return k.call(this)
				}
			}, {
				key: 'destroy',
				value: function () {
					return D.call(this)
				}
			}, {
				key: 'enableEventListeners',
				value: function () {
					return A.call(this)
				}
			}, {
				key: 'disableEventListeners',
				value: function () {
					return I.call(this)
				}
			}]), t
		}();
	return le.Utils = ('undefined' == typeof window ? global : window).PopperUtils, le.placements = de, le.Defaults = {
		placement: 'bottom',
		eventsEnabled: !0,
		removeOnDestroy: !1,
		onCreate: function () {},
		onUpdate: function () {},
		modifiers: {
			shift: {
				order: 100,
				enabled: !0,
				fn: function (e) {
					var t = e.placement,
						o = t.split('-')[0],
						i = t.split('-')[1];
					if (i) {
						var n = e.offsets,
							r = n.reference,
							p = n.popper,
							s = -1 !== ['bottom', 'top'].indexOf(o),
							d = s ? 'left' : 'top',
							a = s ? 'width' : 'height',
							f = {
								start: pe({}, d, r[d]),
								end: pe({}, d, r[d] + r[a] - p[a])
							};
						e.offsets.popper = se({}, p, f[i])
					}
					return e
				}
			},
			offset: {
				order: 200,
				enabled: !0,
				fn: function (e, t) {
					var o, i = t.offset,
						n = e.placement,
						r = e.offsets,
						p = r.popper,
						s = r.reference,
						d = n.split('-')[0];
					return o = R(+i) ? [+i, 0] : G(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
				},
				offset: 0
			},
			preventOverflow: {
				order: 300,
				enabled: !0,
				fn: function (e, t) {
					var o = t.boundariesElement || r(e.instance.popper);
					e.instance.reference === o && (o = r(o));
					var i = w(e.instance.popper, e.instance.reference, t.padding, o);
					t.boundaries = i;
					var n = t.priority,
						p = e.offsets.popper,
						s = {
							primary: function (e) {
								var o = p[e];
								return p[e] < i[e] && !t.escapeWithReference && (o = _(p[e], i[e])), pe({}, e, o)
							},
							secondary: function (e) {
								var o = 'right' === e ? 'left' : 'top',
									n = p[o];
								return p[e] > i[e] && !t.escapeWithReference && (n = z(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n)
							}
						};
					return n.forEach(function (e) {
						var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
						p = se({}, p, s[t](e))
					}), e.offsets.popper = p, e
				},
				priority: ['left', 'right', 'top', 'bottom'],
				padding: 5,
				boundariesElement: 'scrollParent'
			},
			keepTogether: {
				order: 400,
				enabled: !0,
				fn: function (e) {
					var t = e.offsets,
						o = t.popper,
						i = t.reference,
						n = e.placement.split('-')[0],
						r = V,
						p = -1 !== ['top', 'bottom'].indexOf(n),
						s = p ? 'right' : 'bottom',
						d = p ? 'left' : 'top',
						a = p ? 'width' : 'height';
					return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e
				}
			},
			arrow: {
				order: 500,
				enabled: !0,
				fn: function (e, t) {
					if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
					var o = t.element;
					if ('string' == typeof o) {
						if (o = e.instance.popper.querySelector(o), !o) return e;
					} else if (!e.instance.popper.contains(o)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
					var i = e.placement.split('-')[0],
						n = e.offsets,
						r = n.popper,
						p = n.reference,
						s = -1 !== ['left', 'right'].indexOf(i),
						d = s ? 'height' : 'width',
						a = s ? 'top' : 'left',
						f = s ? 'left' : 'top',
						l = s ? 'bottom' : 'right',
						m = O(o)[d];
					p[l] - m < r[a] && (e.offsets.popper[a] -= r[a] - (p[l] - m)), p[a] + m > r[l] && (e.offsets.popper[a] += p[a] + m - r[l]);
					var h = p[a] + p[d] / 2 - m / 2,
						g = h - c(e.offsets.popper)[a];
					return g = _(z(r[d] - m, g), 0), e.arrowElement = o, e.offsets.arrow = {}, e.offsets.arrow[a] = Math.round(g), e.offsets.arrow[f] = '', e
				},
				element: '[x-arrow]'
			},
			flip: {
				order: 600,
				enabled: !0,
				fn: function (e, t) {
					if (W(e.instance.modifiers, 'inner')) return e;
					if (e.flipped && e.placement === e.originalPlacement) return e;
					var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
						i = e.placement.split('-')[0],
						n = L(i),
						r = e.placement.split('-')[1] || '',
						p = [];
					switch (t.behavior) {
						case fe.FLIP:
							p = [i, n];
							break;
						case fe.CLOCKWISE:
							p = K(i);
							break;
						case fe.COUNTERCLOCKWISE:
							p = K(i, !0);
							break;
						default:
							p = t.behavior;
					}
					return p.forEach(function (s, d) {
						if (i !== s || p.length === d + 1) return e;
						i = e.placement.split('-')[0], n = L(i);
						var a = e.offsets.popper,
							f = e.offsets.reference,
							l = V,
							m = 'left' === i && l(a.right) > l(f.left) || 'right' === i && l(a.left) < l(f.right) || 'top' === i && l(a.bottom) > l(f.top) || 'bottom' === i && l(a.top) < l(f.bottom),
							h = l(a.left) < l(o.left),
							c = l(a.right) > l(o.right),
							g = l(a.top) < l(o.top),
							u = l(a.bottom) > l(o.bottom),
							b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
							y = -1 !== ['top', 'bottom'].indexOf(i),
							w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
						(m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = j(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip'))
					}), e
				},
				behavior: 'flip',
				padding: 5,
				boundariesElement: 'viewport'
			},
			inner: {
				order: 700,
				enabled: !1,
				fn: function (e) {
					var t = e.placement,
						o = t.split('-')[0],
						i = e.offsets,
						n = i.popper,
						r = i.reference,
						p = -1 !== ['left', 'right'].indexOf(o),
						s = -1 === ['top', 'left'].indexOf(o);
					return n[p ? 'left' : 'top'] = r[t] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = c(n), e
				}
			},
			hide: {
				order: 800,
				enabled: !0,
				fn: function (e) {
					if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
					var t = e.offsets.reference,
						o = T(e.instance.modifiers, function (e) {
							return 'preventOverflow' === e.name
						}).boundaries;
					if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
						if (!0 === e.hide) return e;
						e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
					} else {
						if (!1 === e.hide) return e;
						e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
					}
					return e
				}
			},
			computeStyle: {
				order: 850,
				enabled: !0,
				fn: function (e, t) {
					var o = t.x,
						i = t.y,
						n = e.offsets.popper,
						p = T(e.instance.modifiers, function (e) {
							return 'applyStyle' === e.name
						}).gpuAcceleration;
					void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
					var s, d, a = void 0 === p ? t.gpuAcceleration : p,
						f = r(e.instance.popper),
						l = g(f),
						m = {
							position: n.position
						},
						h = {
							left: V(n.left),
							top: V(n.top),
							bottom: V(n.bottom),
							right: V(n.right)
						},
						c = 'bottom' === o ? 'top' : 'bottom',
						u = 'right' === i ? 'left' : 'right',
						b = B('transform');
					if (d = 'bottom' == c ? -l.height + h.bottom : h.top, s = 'right' == u ? -l.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';
					else {
						var y = 'bottom' == c ? -1 : 1,
							w = 'right' == u ? -1 : 1;
						m[c] = d * y, m[u] = s * w, m.willChange = c + ', ' + u
					}
					var v = {
						"x-placement": e.placement
					};
					return e.attributes = se({}, v, e.attributes), e.styles = se({}, m, e.styles), e
				},
				gpuAcceleration: !0,
				x: 'bottom',
				y: 'right'
			},
			applyStyle: {
				order: 900,
				enabled: !0,
				fn: function (e) {
					return U(e.instance.popper, e.styles), Y(e.instance.popper, e.attributes), e.offsets.arrow && U(e.arrowElement, e.offsets.arrow), e
				},
				onLoad: function (e, t, o, i, n) {
					var r = x(n, t, e),
						p = E(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
					return t.setAttribute('x-placement', p), U(t, {
						position: 'absolute'
					}), o
				},
				gpuAcceleration: void 0
			}
		}
	}, le
});


/*!
 * Bootstrap v4.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function (t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, g, u) {
	"use strict";

	function i(t, e) {
		for (var n = 0; n < e.length; n++) {
			var i = e[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
		}
	}

	function s(t, e, n) {
		return e && i(t.prototype, e), n && i(t, n), t
	}

	function e(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var i = Object.getOwnPropertySymbols(e);
			t && (i = i.filter(function (t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			})), n.push.apply(n, i)
		}
		return n
	}

	function l(o) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? e(Object(r), !0).forEach(function (t) {
				var e, n, i;
				e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[n] = i
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach(function (t) {
				Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t))
			})
		}
		return o
	}
	g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u.hasOwnProperty("default") ? u.default : u;
	var n = "transitionend";

	function o(t) {
		var e = this,
			n = !1;
		return g(this).one(_.TRANSITION_END, function () {
			n = !0
		}), setTimeout(function () {
			n || _.triggerTransitionEnd(e)
		}, t), this
	}
	var _ = {
		TRANSITION_END: "bsTransitionEnd",
		getUID: function (t) {
			for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
			return t
		},
		getSelectorFromElement: function (t) {
			var e = t.getAttribute("data-target");
			if (!e || "#" === e) {
				var n = t.getAttribute("href");
				e = n && "#" !== n ? n.trim() : ""
			}
			try {
				return document.querySelector(e) ? e : null
			} catch (t) {
				return null
			}
		},
		getTransitionDurationFromElement: function (t) {
			if (!t) return 0;
			var e = g(t).css("transition-duration"),
				n = g(t).css("transition-delay"),
				i = parseFloat(e),
				o = parseFloat(n);
			return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
		},
		reflow: function (t) {
			return t.offsetHeight
		},
		triggerTransitionEnd: function (t) {
			g(t).trigger(n)
		},
		supportsTransitionEnd: function () {
			return Boolean(n)
		},
		isElement: function (t) {
			return (t[0] || t).nodeType
		},
		typeCheckConfig: function (t, e, n) {
			for (var i in n)
				if (Object.prototype.hasOwnProperty.call(n, i)) {
					var o = n[i],
						r = e[i],
						s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
					if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
				} var a
		},
		findShadowRoot: function (t) {
			if (!document.documentElement.attachShadow) return null;
			if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
			var e = t.getRootNode();
			return e instanceof ShadowRoot ? e : null
		},
		jQueryDetection: function () {
			if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
			var t = g.fn.jquery.split(" ")[0].split(".");
			if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
		}
	};
	_.jQueryDetection(), g.fn.emulateTransitionEnd = o, g.event.special[_.TRANSITION_END] = {
		bindType: n,
		delegateType: n,
		handle: function (t) {
			if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
		}
	};
	var r = "alert",
		a = "bs.alert",
		c = "." + a,
		h = g.fn[r],
		f = {
			CLOSE: "close" + c,
			CLOSED: "closed" + c,
			CLICK_DATA_API: "click" + c + ".data-api"
		},
		d = "alert",
		m = "fade",
		p = "show",
		v = function () {
			function i(t) {
				this._element = t
			}
			var t = i.prototype;
			return t.close = function (t) {
				var e = this._element;
				t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
			}, t.dispose = function () {
				g.removeData(this._element, a), this._element = null
			}, t._getRootElement = function (t) {
				var e = _.getSelectorFromElement(t),
					n = !1;
				return e && (n = document.querySelector(e)), n = n || g(t).closest("." + d)[0]
			}, t._triggerCloseEvent = function (t) {
				var e = g.Event(f.CLOSE);
				return g(t).trigger(e), e
			}, t._removeElement = function (e) {
				var n = this;
				if (g(e).removeClass(p), g(e).hasClass(m)) {
					var t = _.getTransitionDurationFromElement(e);
					g(e).one(_.TRANSITION_END, function (t) {
						return n._destroyElement(e, t)
					}).emulateTransitionEnd(t)
				} else this._destroyElement(e)
			}, t._destroyElement = function (t) {
				g(t).detach().trigger(f.CLOSED).remove()
			}, i._jQueryInterface = function (n) {
				return this.each(function () {
					var t = g(this),
						e = t.data(a);
					e || (e = new i(this), t.data(a, e)), "close" === n && e[n](this)
				})
			}, i._handleDismiss = function (e) {
				return function (t) {
					t && t.preventDefault(), e.close(this)
				}
			}, s(i, null, [{
				key: "VERSION",
				get: function () {
					return "4.4.1"
				}
			}]), i
		}();
	g(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', v._handleDismiss(new v)), g.fn[r] = v._jQueryInterface, g.fn[r].Constructor = v, g.fn[r].noConflict = function () {
		return g.fn[r] = h, v._jQueryInterface
	};
	var y = "button",
		E = "bs.button",
		C = "." + E,
		T = ".data-api",
		b = g.fn[y],
		S = "active",
		D = "btn",
		I = "focus",
		w = '[data-toggle^="button"]',
		A = '[data-toggle="buttons"]',
		N = '[data-toggle="button"]',
		O = '[data-toggle="buttons"] .btn',
		k = 'input:not([type="hidden"])',
		P = ".active",
		L = ".btn",
		j = {
			CLICK_DATA_API: "click" + C + T,
			FOCUS_BLUR_DATA_API: "focus" + C + T + " blur" + C + T,
			LOAD_DATA_API: "load" + C + T
		},
		H = function () {
			function n(t) {
				this._element = t
			}
			var t = n.prototype;
			return t.toggle = function () {
				var t = !0,
					e = !0,
					n = g(this._element).closest(A)[0];
				if (n) {
					var i = this._element.querySelector(k);
					if (i) {
						if ("radio" === i.type)
							if (i.checked && this._element.classList.contains(S)) t = !1;
							else {
								var o = n.querySelector(P);
								o && g(o).removeClass(S)
							}
						else "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(S) && (t = !1) : t = !1;
						t && (i.checked = !this._element.classList.contains(S), g(i).trigger("change")), i.focus(), e = !1
					}
				}
				this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S))
			}, t.dispose = function () {
				g.removeData(this._element, E), this._element = null
			}, n._jQueryInterface = function (e) {
				return this.each(function () {
					var t = g(this).data(E);
					t || (t = new n(this), g(this).data(E, t)), "toggle" === e && t[e]()
				})
			}, s(n, null, [{
				key: "VERSION",
				get: function () {
					return "4.4.1"
				}
			}]), n
		}();
	g(document).on(j.CLICK_DATA_API, w, function (t) {
		var e = t.target;
		if (g(e).hasClass(D) || (e = g(e).closest(L)[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();
		else {
			var n = e.querySelector(k);
			if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled"))) return void t.preventDefault();
			H._jQueryInterface.call(g(e), "toggle")
		}
	}).on(j.FOCUS_BLUR_DATA_API, w, function (t) {
		var e = g(t.target).closest(L)[0];
		g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
	}), g(window).on(j.LOAD_DATA_API, function () {
		for (var t = [].slice.call(document.querySelectorAll(O)), e = 0, n = t.length; e < n; e++) {
			var i = t[e],
				o = i.querySelector(k);
			o.checked || o.hasAttribute("checked") ? i.classList.add(S) : i.classList.remove(S)
		}
		for (var r = 0, s = (t = [].slice.call(document.querySelectorAll(N))).length; r < s; r++) {
			var a = t[r];
			"true" === a.getAttribute("aria-pressed") ? a.classList.add(S) : a.classList.remove(S)
		}
	}), g.fn[y] = H._jQueryInterface, g.fn[y].Constructor = H, g.fn[y].noConflict = function () {
		return g.fn[y] = b, H._jQueryInterface
	};
	var R = "carousel",
		x = "bs.carousel",
		F = "." + x,
		U = ".data-api",
		W = g.fn[R],
		q = {
			interval: 5e3,
			keyboard: !0,
			slide: !1,
			pause: "hover",
			wrap: !0,
			touch: !0
		},
		M = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			slide: "(boolean|string)",
			pause: "(string|boolean)",
			wrap: "boolean",
			touch: "boolean"
		},
		K = "next",
		Q = "prev",
		B = "left",
		V = "right",
		Y = {
			SLIDE: "slide" + F,
			SLID: "slid" + F,
			KEYDOWN: "keydown" + F,
			MOUSEENTER: "mouseenter" + F,
			MOUSELEAVE: "mouseleave" + F,
			TOUCHSTART: "touchstart" + F,
			TOUCHMOVE: "touchmove" + F,
			TOUCHEND: "touchend" + F,
			POINTERDOWN: "pointerdown" + F,
			POINTERUP: "pointerup" + F,
			DRAG_START: "dragstart" + F,
			LOAD_DATA_API: "load" + F + U,
			CLICK_DATA_API: "click" + F + U
		},
		z = "carousel",
		X = "active",
		$ = "slide",
		G = "carousel-item-right",
		J = "carousel-item-left",
		Z = "carousel-item-next",
		tt = "carousel-item-prev",
		et = "pointer-event",
		nt = ".active",
		it = ".active.carousel-item",
		ot = ".carousel-item",
		rt = ".carousel-item img",
		st = ".carousel-item-next, .carousel-item-prev",
		at = ".carousel-indicators",
		lt = "[data-slide], [data-slide-to]",
		ct = '[data-ride="carousel"]',
		ht = {
			TOUCH: "touch",
			PEN: "pen"
		},
		ut = function () {
			function r(t, e) {
				this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(at), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
			}
			var t = r.prototype;
			return t.next = function () {
				this._isSliding || this._slide(K)
			}, t.nextWhenVisible = function () {
				!document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
			}, t.prev = function () {
				this._isSliding || this._slide(Q)
			}, t.pause = function (t) {
				t || (this._isPaused = !0), this._element.querySelector(st) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
			}, t.cycle = function (t) {
				t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
			}, t.to = function (t) {
				var e = this;
				this._activeElement = this._element.querySelector(it);
				var n = this._getItemIndex(this._activeElement);
				if (!(t > this._items.length - 1 || t < 0))
					if (this._isSliding) g(this._element).one(Y.SLID, function () {
						return e.to(t)
					});
					else {
						if (n === t) return this.pause(), void this.cycle();
						var i = n < t ? K : Q;
						this._slide(i, this._items[t])
					}
			}, t.dispose = function () {
				g(this._element).off(F), g.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
			}, t._getConfig = function (t) {
				return t = l({}, q, {}, t), _.typeCheckConfig(R, t, M), t
			}, t._handleSwipe = function () {
				var t = Math.abs(this.touchDeltaX);
				if (!(t <= 40)) {
					var e = t / this.touchDeltaX;
					(this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next()
				}
			}, t._addEventListeners = function () {
				var e = this;
				this._config.keyboard && g(this._element).on(Y.KEYDOWN, function (t) {
					return e._keydown(t)
				}), "hover" === this._config.pause && g(this._element).on(Y.MOUSEENTER, function (t) {
					return e.pause(t)
				}).on(Y.MOUSELEAVE, function (t) {
					return e.cycle(t)
				}), this._config.touch && this._addTouchEventListeners()
			}, t._addTouchEventListeners = function () {
				var e = this;
				if (this._touchSupported) {
					var n = function (t) {
							e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
						},
						i = function (t) {
							e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
								return e.cycle(t)
							}, 500 + e._config.interval))
						};
					g(this._element.querySelectorAll(rt)).on(Y.DRAG_START, function (t) {
						return t.preventDefault()
					}), this._pointerEvent ? (g(this._element).on(Y.POINTERDOWN, function (t) {
						return n(t)
					}), g(this._element).on(Y.POINTERUP, function (t) {
						return i(t)
					}), this._element.classList.add(et)) : (g(this._element).on(Y.TOUCHSTART, function (t) {
						return n(t)
					}), g(this._element).on(Y.TOUCHMOVE, function (t) {
						return function (t) {
							t.originalEvent.touches && 1 < t.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
						}(t)
					}), g(this._element).on(Y.TOUCHEND, function (t) {
						return i(t)
					}))
				}
			}, t._keydown = function (t) {
				if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
					case 37:
						t.preventDefault(), this.prev();
						break;
					case 39:
						t.preventDefault(), this.next()
				}
			}, t._getItemIndex = function (t) {
				return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(ot)) : [], this._items.indexOf(t)
			}, t._getItemByDirection = function (t, e) {
				var n = t === K,
					i = t === Q,
					o = this._getItemIndex(e),
					r = this._items.length - 1;
				if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
				var s = (o + (t === Q ? -1 : 1)) % this._items.length;
				return -1 == s ? this._items[this._items.length - 1] : this._items[s]
			}, t._triggerSlideEvent = function (t, e) {
				var n = this._getItemIndex(t),
					i = this._getItemIndex(this._element.querySelector(it)),
					o = g.Event(Y.SLIDE, {
						relatedTarget: t,
						direction: e,
						from: i,
						to: n
					});
				return g(this._element).trigger(o), o
			}, t._setActiveIndicatorElement = function (t) {
				if (this._indicatorsElement) {
					var e = [].slice.call(this._indicatorsElement.querySelectorAll(nt));
					g(e).removeClass(X);
					var n = this._indicatorsElement.children[this._getItemIndex(t)];
					n && g(n).addClass(X)
				}
			}, t._slide = function (t, e) {
				var n, i, o, r = this,
					s = this._element.querySelector(it),
					a = this._getItemIndex(s),
					l = e || s && this._getItemByDirection(t, s),
					c = this._getItemIndex(l),
					h = Boolean(this._interval);
				if (o = t === K ? (n = J, i = Z, B) : (n = G, i = tt, V), l && g(l).hasClass(X)) this._isSliding = !1;
				else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
					this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
					var u = g.Event(Y.SLID, {
						relatedTarget: l,
						direction: o,
						from: a,
						to: c
					});
					if (g(this._element).hasClass($)) {
						g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
						var f = parseInt(l.getAttribute("data-interval"), 10);
						f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
						var d = _.getTransitionDurationFromElement(s);
						g(s).one(_.TRANSITION_END, function () {
							g(l).removeClass(n + " " + i).addClass(X), g(s).removeClass(X + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
								return g(r._element).trigger(u)
							}, 0)
						}).emulateTransitionEnd(d)
					} else g(s).removeClass(X), g(l).addClass(X), this._isSliding = !1, g(this._element).trigger(u);
					h && this.cycle()
				}
			}, r._jQueryInterface = function (i) {
				return this.each(function () {
					var t = g(this).data(x),
						e = l({}, q, {}, g(this).data());
					"object" == typeof i && (e = l({}, e, {}, i));
					var n = "string" == typeof i ? i : e.slide;
					if (t || (t = new r(this, e), g(this).data(x, t)), "number" == typeof i) t.to(i);
					else if ("string" == typeof n) {
						if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
						t[n]()
					} else e.interval && e.ride && (t.pause(), t.cycle())
				})
			}, r._dataApiClickHandler = function (t) {
				var e = _.getSelectorFromElement(this);
				if (e) {
					var n = g(e)[0];
					if (n && g(n).hasClass(z)) {
						var i = l({}, g(n).data(), {}, g(this).data()),
							o = this.getAttribute("data-slide-to");
						o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(x).to(o), t.preventDefault()
					}
				}
			}, s(r, null, [{
				key: "VERSION",
				get: function () {
					return "4.4.1"
				}
			}, {
				key: "Default",
				get: function () {
					return q
				}
			}]), r
		}();
	g(document).on(Y.CLICK_DATA_API, lt, ut._dataApiClickHandler), g(window).on(Y.LOAD_DATA_API, function () {
		for (var t = [].slice.call(document.querySelectorAll(ct)), e = 0, n = t.length; e < n; e++) {
			var i = g(t[e]);
			ut._jQueryInterface.call(i, i.data())
		}
	}), g.fn[R] = ut._jQueryInterface, g.fn[R].Constructor = ut, g.fn[R].noConflict = function () {
		return g.fn[R] = W, ut._jQueryInterface
	};
	var ft = "collapse",
		dt = "bs.collapse",
		gt = "." + dt,
		_t = g.fn[ft],
		mt = {
			toggle: !0,
			parent: ""
		},
		pt = {
			toggle: "boolean",
			parent: "(string|element)"
		},
		vt = {
			SHOW: "show" + gt,
			SHOWN: "shown" + gt,
			HIDE: "hide" + gt,
			HIDDEN: "hidden" + gt,
			CLICK_DATA_API: "click" + gt + ".data-api"
		},
		yt = "show",
		Et = "collapse",
		Ct = "collapsing",
		Tt = "collapsed",
		bt = "width",
		St = "height",
		Dt = ".show, .collapsing",
		It = '[data-toggle="collapse"]',
		wt = function () {
			function a(e, t) {
				this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
				for (var n = [].slice.call(document.querySelectorAll(It)), i = 0, o = n.length; i < o; i++) {
					var r = n[i],
						s = _.getSelectorFromElement(r),
						a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
							return t === e
						});
					null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
				}
				this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
			}
			var t = a.prototype;
			return t.toggle = function () {
				g(this._element).hasClass(yt) ? this.hide() : this.show()
			}, t.show = function () {
				var t, e, n = this;
				if (!this._isTransitioning && !g(this._element).hasClass(yt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Dt)).filter(function (t) {
						return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(Et)
					})).length && (t = null), !(t && (e = g(t).not(this._selector).data(dt)) && e._isTransitioning))) {
					var i = g.Event(vt.SHOW);
					if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
						t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(dt, null));
						var o = this._getDimension();
						g(this._element).removeClass(Et).addClass(Ct), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(Tt).attr("aria-expanded", !0), this.setTransitioning(!0);
						var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
							s = _.getTransitionDurationFromElement(this._element);
						g(this._element).one(_.TRANSITION_END, function () {
							g(n._element).removeClass(Ct).addClass(Et).addClass(yt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(vt.SHOWN)
						}).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px"
					}
				}
			}, t.hide = function () {
				var t = this;
				if (!this._isTransitioning && g(this._element).hasClass(yt)) {
					var e = g.Event(vt.HIDE);
					if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
						var n = this._getDimension();
						this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);
						var i = this._triggerArray.length;
						if (0 < i)
							for (var o = 0; o < i; o++) {
								var r = this._triggerArray[o],
									s = _.getSelectorFromElement(r);
								if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(yt) || g(r).addClass(Tt).attr("aria-expanded", !1)
							}
						this.setTransitioning(!0);
						this._element.style[n] = "";
						var a = _.getTransitionDurationFromElement(this._element);
						g(this._element).one(_.TRANSITION_END, function () {
							t.setTransitioning(!1), g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN)
						}).emulateTransitionEnd(a)
					}
				}
			}, t.setTransitioning = function (t) {
				this._isTransitioning = t
			}, t.dispose = function () {
				g.removeData(this._element, dt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
			}, t._getConfig = function (t) {
				return (t = l({}, mt, {}, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ft, t, pt), t
			}, t._getDimension = function () {
				return g(this._element).hasClass(bt) ? bt : St
			}, t._getParent = function () {
				var t, n = this;
				_.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
				var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
					i = [].slice.call(t.querySelectorAll(e));
				return g(i).each(function (t, e) {
					n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
				}), t
			}, t._addAriaAndCollapsedClass = function (t, e) {
				var n = g(t).hasClass(yt);
				e.length && g(e).toggleClass(Tt, !n).attr("aria-expanded", n)
			}, a._getTargetFromElement = function (t) {
				var e = _.getSelectorFromElement(t);
				return e ? document.querySelector(e) : null
			}, a._jQueryInterface = function (i) {
				return this.each(function () {
					var t = g(this),
						e = t.data(dt),
						n = l({}, mt, {}, t.data(), {}, "object" == typeof i && i ? i : {});
					if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(dt, e)), "string" == typeof i) {
						if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
						e[i]()
					}
				})
			}, s(a, null, [{
				key: "VERSION",
				get: function () {
					return "4.4.1"
				}
			}, {
				key: "Default",
				get: function () {
					return mt
				}
			}]), a
		}();
	g(document).on(vt.CLICK_DATA_API, It, function (t) {
		"A" === t.currentTarget.tagName && t.preventDefault();
		var n = g(this),
			e = _.getSelectorFromElement(this),
			i = [].slice.call(document.querySelectorAll(e));
		g(i).each(function () {
			var t = g(this),
				e = t.data(dt) ? "toggle" : n.data();
			wt._jQueryInterface.call(t, e)
		})
	}), g.fn[ft] = wt._jQueryInterface, g.fn[ft].Constructor = wt, g.fn[ft].noConflict = function () {
		return g.fn[ft] = _t, wt._jQueryInterface
	};
	var At = "dropdown",
		Nt = "bs.dropdown",
		Ot = "." + Nt,
		kt = ".data-api",
		Pt = g.fn[At],
		Lt = new RegExp("38|40|27"),
		jt = {
			HIDE: "hide" + Ot,
			HIDDEN: "hidden" + Ot,
			SHOW: "show" + Ot,
			SHOWN: "shown" + Ot,
			CLICK: "click" + Ot,
			CLICK_DATA_API: "click" + Ot + kt,
			KEYDOWN_DATA_API: "keydown" + Ot + kt,
			KEYUP_DATA_API: "keyup" + Ot + kt
		},
		Ht = "disabled",
		Rt = "show",
		xt = "dropup",
		Ft = "dropright",
		Ut = "dropleft",
		Wt = "dropdown-menu-right",
		qt = "position-static",
		Mt = '[data-toggle="dropdown"]',
		Kt = ".dropdown form",
		Qt = ".dropdown-menu",
		Bt = ".navbar-nav",
		Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
		Yt = "top-start",
		zt = "top-end",
		Xt = "bottom-start",
		$t = "bottom-end",
		Gt = "right-start",
		Jt = "left-start",
		Zt = {
			offset: 0,
			flip: !0,
			boundary: "scrollParent",
			reference: "toggle",
			display: "dynamic",
			popperConfig: null
		},
		te = {
			offset: "(number|string|function)",
			flip: "boolean",
			boundary: "(string|element)",
			reference: "(string|element)",
			display: "string",
			popperConfig: "(null|object)"
		},
		ee = function () {
			function c(t, e) {
				this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
			}
			var t = c.prototype;
			return t.toggle = function () {
				if (!this._element.disabled && !g(this._element).hasClass(Ht)) {
					var t = g(this._menu).hasClass(Rt);
					c._clearMenus(), t || this.show(!0)
				}
			}, t.show = function (t) {
				if (void 0 === t && (t = !1), !(this._element.disabled || g(this._element).hasClass(Ht) || g(this._menu).hasClass(Rt))) {
					var e = {
							relatedTarget: this._element
						},
						n = g.Event(jt.SHOW, e),
						i = c._getParentFromElement(this._element);
					if (g(i).trigger(n), !n.isDefaultPrevented()) {
						if (!this._inNavbar && t) {
							if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
							var o = this._element;
							"parent" === this._config.reference ? o = i : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(i).addClass(qt), this._popper = new u(o, this._menu, this._getPopperConfig())
						}
						"ontouchstart" in document.documentElement && 0 === g(i).closest(Bt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Rt), g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN, e))
					}
				}
			}, t.hide = function () {
				if (!this._element.disabled && !g(this._element).hasClass(Ht) && g(this._menu).hasClass(Rt)) {
					var t = {
							relatedTarget: this._element
						},
						e = g.Event(jt.HIDE, t),
						n = c._getParentFromElement(this._element);
					g(n).trigger(e), e.isDefaultPrevented() || (this._popper && this._popper.destroy(), g(this._menu).toggleClass(Rt), g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN, t)))
				}
			}, t.dispose = function () {
				g.removeData(this._element, Nt), g(this._element).off(Ot), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
			}, t.update = function () {
				this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
			}, t._addEventListeners = function () {
				var e = this;
				g(this._element).on(jt.CLICK, function (t) {
					t.preventDefault(), t.stopPropagation(), e.toggle()
				})
			}, t._getConfig = function (t) {
				return t = l({}, this.constructor.Default, {}, g(this._element).data(), {}, t), _.typeCheckConfig(At, t, this.constructor.DefaultType), t
			}, t._getMenuElement = function () {
				if (!this._menu) {
					var t = c._getParentFromElement(this._element);
					t && (this._menu = t.querySelector(Qt))
				}
				return this._menu
			}, t._getPlacement = function () {
				var t = g(this._element.parentNode),
					e = Xt;
				return t.hasClass(xt) ? (e = Yt, g(this._menu).hasClass(Wt) && (e = zt)) : t.hasClass(Ft) ? e = Gt : t.hasClass(Ut) ? e = Jt : g(this._menu).hasClass(Wt) && (e = $t), e
			}, t._detectNavbar = function () {
				return 0 < g(this._element).closest(".navbar").length
			}, t._getOffset = function () {
				var e = this,
					t = {};
				return "function" == typeof this._config.offset ? t.fn = function (t) {
					return t.offsets = l({}, t.offsets, {}, e._config.offset(t.offsets, e._element) || {}), t
				} : t.offset = this._config.offset, t
			}, t._getPopperConfig = function () {
				var t = {
					placement: this._getPlacement(),
					modifiers: {
						offset: this._getOffset(),
						flip: {
							enabled: this._config.flip
						},
						preventOverflow: {
							boundariesElement: this._config.boundary
						}
					}
				};
				return "static" === this._config.display && (t.modifiers.applyStyle = {
					enabled: !1
				}), l({}, t, {}, this._config.popperConfig)
			}, c._jQueryInterface = function (e) {
				return this.each(function () {
					var t = g(this).data(Nt);
					if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Nt, t)), "string" == typeof e) {
						if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
						t[e]()
					}
				})
			}, c._clearMenus = function (t) {
				if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
					for (var e = [].slice.call(document.querySelectorAll(Mt)), n = 0, i = e.length; n < i; n++) {
						var o = c._getParentFromElement(e[n]),
							r = g(e[n]).data(Nt),
							s = {
								relatedTarget: e[n]
							};
						if (t && "click" === t.type && (s.clickEvent = t), r) {
							var a = r._menu;
							if (g(o).hasClass(Rt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
								var l = g.Event(jt.HIDE, s);
								g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), r._popper && r._popper.destroy(), g(a).removeClass(Rt), g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN, s)))
							}
						}
					}
			}, c._getParentFromElement = function (t) {
				var e, n = _.getSelectorFromElement(t);
				return n && (e = document.querySelector(n)), e || t.parentNode
			}, c._dataApiKeydownHandler = function (t) {
				if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(Qt).length)) : Lt.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Ht))) {
					var e = c._getParentFromElement(this),
						n = g(e).hasClass(Rt);
					if (n || 27 !== t.which)
						if (n && (!n || 27 !== t.which && 32 !== t.which)) {
							var i = [].slice.call(e.querySelectorAll(Vt)).filter(function (t) {
								return g(t).is(":visible")
							});
							if (0 !== i.length) {
								var o = i.indexOf(t.target);
								38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
							}
						} else {
							if (27 === t.which) {
								var r = e.querySelector(Mt);
								g(r).trigger("focus")
							}
							g(this).trigger("click")
						}
				}
			}, s(c, null, [{
				key: "VERSION",
				get: function () {
					return "4.4.1"
				}
			}, {
				key: "Default",
				get: function () {
					return Zt
				}
			}, {
				key: "DefaultType",
				get: function () {
					return te
				}
			}]), c
		}();
	g(document).on(jt.KEYDOWN_DATA_API, Mt, ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API, Qt, ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API + " " + jt.KEYUP_DATA_API, ee._clearMenus).on(jt.CLICK_DATA_API, Mt, function (t) {
		t.preventDefault(), t.stopPropagation(), ee._jQueryInterface.call(g(this), "toggle")
	}).on(jt.CLICK_DATA_API, Kt, function (t) {
		t.stopPropagation()
	}), g.fn[At] = ee._jQueryInterface, g.fn[At].Constructor = ee, g.fn[At].noConflict = function () {
		return g.fn[At] = Pt, ee._jQueryInterface
	};
	var ne = "modal",
		ie = "bs.modal",
		oe = "." + ie,
		re = g.fn[ne],
		se = {
			backdrop: !0,
			keyboard: !0,
			focus: !0,
			show: !0
		},
		ae = {
			backdrop: "(boolean|string)",
			keyboard: "boolean",
			focus: "boolean",
			show: "boolean"
		},
		le = {
			HIDE: "hide" + oe,
			HIDE_PREVENTED: "hidePrevented" + oe,
			HIDDEN: "hidden" + oe,
			SHOW: "show" + oe,
			SHOWN: "shown" + oe,
			FOCUSIN: "focusin" + oe,
			RESIZE: "resize" + oe,
			CLICK_DISMISS: "click.dismiss" + oe,
			KEYDOWN_DISMISS: "keydown.dismiss" + oe,
			MOUSEUP_DISMISS: "mouseup.dismiss" + oe,
			MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe,
			CLICK_DATA_API: "click" + oe + ".data-api"
		},
		ce = "modal-dialog-scrollable",
		he = "modal-scrollbar-measure",
		ue = "modal-backdrop",
		fe = "modal-open",
		de = "fade",
		ge = "show",
		_e = "modal-static",
		me = ".modal-dialog",
		pe = ".modal-body",
		ve = '[data-toggle="modal"]',
		ye = '[data-dismiss="modal"]',
		Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
		Ce = ".sticky-top",
		Te = function () {
			function o(t, e) {
				this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(me), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
			}
			var t = o.prototype;
			return t.toggle = function (t) {
				return this._isShown ? this.hide() : this.show(t)
			}, t.show = function (t) {
				var e = this;
				if (!this._isShown && !this._isTransitioning) {
					g(this._element).hasClass(de) && (this._isTransitioning = !0);
					var n = g.Event(le.SHOW, {
						relatedTarget: t
					});
					g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(le.CLICK_DISMISS, ye, function (t) {
						return e.hide(t)
					}), g(this._dialog).on(le.MOUSEDOWN_DISMISS, function () {
						g(e._element).one(le.MOUSEUP_DISMISS, function (t) {
							g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
						})
					}), this._showBackdrop(function () {
						return e._showElement(t)
					}))
				}
			}, t.hide = function (t) {
				var e = this;
				if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
					var n = g.Event(le.HIDE);
					if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
						this._isShown = !1;
						var i = g(this._element).hasClass(de);
						if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(le.FOCUSIN), g(this._element).removeClass(ge), g(this._element).off(le.CLICK_DISMISS), g(this._dialog).off(le.MOUSEDOWN_DISMISS), i) {
							var o = _.getTransitionDurationFromElement(this._element);
							g(this._element).one(_.TRANSITION_END, function (t) {
								return e._hideModal(t)
							}).emulateTransitionEnd(o)
						} else this._hideModal()
					}
				}
			}, t.dispose = function () {
				[window, this._element, this._dialog].forEach(function (t) {
					return g(t).off(oe)
				}), g(document).off(le.FOCUSIN), g.removeData(this._element, ie), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
			}, t.handleUpdate = function () {
				this._adjustDialog()
			}, t._getConfig = function (t) {
				return t = l({}, se, {}, t), _.typeCheckConfig(ne, t, ae), t
			}, t._triggerBackdropTransition = function () {
				var t = this;
				if ("static" === this._config.backdrop) {
					var e = g.Event(le.HIDE_PREVENTED);
					if (g(this._element).trigger(e), e.defaultPrevented) return;
					this._element.classList.add(_e);
					var n = _.getTransitionDurationFromElement(this._element);
					g(this._element).one(_.TRANSITION_END, function () {
						t._element.classList.remove(_e)
					}).emulateTransitionEnd(n), this._element.focus()
				} else this.hide()
			}, t._showElement = function (t) {
				var e = this,
					n = g(this._element).hasClass(de),
					i = this._dialog ? this._dialog.querySelector(pe) : null;
				this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(ce) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ge), this._config.focus && this._enforceFocus();

				function o() {
					e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(r)
				}
				var r = g.Event(le.SHOWN, {
					relatedTarget: t
				});
				if (n) {
					var s = _.getTransitionDurationFromElement(this._dialog);
					g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(s)
				} else o()
			}, t._enforceFocus = function () {
				var e = this;
				g(document).off(le.FOCUSIN).on(le.FOCUSIN, function (t) {
					document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
				})
			}, t._setEscapeEvent = function () {
				var e = this;
				this._isShown && this._config.keyboard ? g(this._element).on(le.KEYDOWN_DISMISS, function (t) {
					27 === t.which && e._triggerBackdropTransition()
				}) : this._isShown || g(this._element).off(le.KEYDOWN_DISMISS)
			}, t._setResizeEvent = function () {
				var e = this;
				this._isShown ? g(window).on(le.RESIZE, function (t) {
					return e.handleUpdate(t)
				}) : g(window).off(le.RESIZE)
			}, t._hideModal = function () {
				var t = this;
				this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
					g(document.body).removeClass(fe), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(le.HIDDEN)
				})
			}, t._removeBackdrop = function () {
				this._backdrop && (g(this._backdrop).remove(), this._backdrop = null)
			}, t._showBackdrop = function (t) {
				var e = this,
					n = g(this._element).hasClass(de) ? de : "";
				if (this._isShown && this._config.backdrop) {
					if (this._backdrop = document.createElement("div"), this._backdrop.className = ue, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(le.CLICK_DISMISS, function (t) {
							e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition()
						}), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ge), !t) return;
					if (!n) return void t();
					var i = _.getTransitionDurationFromElement(this._backdrop);
					g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
				} else if (!this._isShown && this._backdrop) {
					g(this._backdrop).removeClass(ge);
					var o = function () {
						e._removeBackdrop(), t && t()
					};
					if (g(this._element).hasClass(de)) {
						var r = _.getTransitionDurationFromElement(this._backdrop);
						g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
					} else o()
				} else t && t()
			}, t._adjustDialog = function () {
				var t = this._element.scrollHeight > document.documentElement.clientHeight;
				!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
			}, t._resetAdjustments = function () {
				this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
			}, t._checkScrollbar = function () {
				var t = document.body.getBoundingClientRect();
				this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
			}, t._setScrollbar = function () {
				var o = this;
				if (this._isBodyOverflowing) {
					var t = [].slice.call(document.querySelectorAll(Ee)),
						e = [].slice.call(document.querySelectorAll(Ce));
					g(t).each(function (t, e) {
						var n = e.style.paddingRight,
							i = g(e).css("padding-right");
						g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
					}), g(e).each(function (t, e) {
						var n = e.style.marginRight,
							i = g(e).css("margin-right");
						g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
					});
					var n = document.body.style.paddingRight,
						i = g(document.body).css("padding-right");
					g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
				}
				g(document.body).addClass(fe)
			}, t._resetScrollbar = function () {
				var t = [].slice.call(document.querySelectorAll(Ee));
				g(t).each(function (t, e) {
					var n = g(e).data("padding-right");
					g(e).removeData("padding-right"), e.style.paddingRight = n || ""
				});
				var e = [].slice.call(document.querySelectorAll("" + Ce));
				g(e).each(function (t, e) {
					var n = g(e).data("margin-right");
					"undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
				});
				var n = g(document.body).data("padding-right");
				g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
			}, t._getScrollbarWidth = function () {
				var t = document.createElement("div");
				t.className = he, document.body.appendChild(t);
				var e = t.getBoundingClientRect().width - t.clientWidth;
				return document.body.removeChild(t), e
			}, o._jQueryInterface = function (n, i) {
				return this.each(function () {
					var t = g(this).data(ie),
						e = l({}, se, {}, g(this).data(), {}, "object" == typeof n && n ? n : {});
					if (t || (t = new o(this, e), g(this).data(ie, t)), "string" == typeof n) {
						if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
						t[n](i)
					} else e.show && t.show(i)
				})
			}, s(o, null, [{
				key: "VERSION",
				get: function () {
					return "4.4.1"
				}
			}, {
				key: "Default",
				get: function () {
					return se
				}
			}]), o
		}();
	g(document).on(le.CLICK_DATA_API, ve, function (t) {
		var e, n = this,
			i = _.getSelectorFromElement(this);
		i && (e = document.querySelector(i));
		var o = g(e).data(ie) ? "toggle" : l({}, g(e).data(), {}, g(this).data());
		"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
		var r = g(e).one(le.SHOW, function (t) {
			t.isDefaultPrevented() || r.one(le.HIDDEN, function () {
				g(n).is(":visible") && n.focus()
			})
		});
		Te._jQueryInterface.call(g(e), o, this)
	}), g.fn[ne] = Te._jQueryInterface, g.fn[ne].Constructor = Te, g.fn[ne].noConflict = function () {
		return g.fn[ne] = re, Te._jQueryInterface
	};
	var be = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
		Se = {
			"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
			a: ["target", "href", "title", "rel"],
			area: [],
			b: [],
			br: [],
			col: [],
			code: [],
			div: [],
			em: [],
			hr: [],
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			i: [],
			img: ["src", "alt", "title", "width", "height"],
			li: [],
			ol: [],
			p: [],
			pre: [],
			s: [],
			small: [],
			span: [],
			sub: [],
			sup: [],
			strong: [],
			u: [],
			ul: []
		},
		De = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
		Ie = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

	function we(t, r, e) {
		if (0 === t.length) return t;
		if (e && "function" == typeof e) return e(t);
		for (var n = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), i = function (t) {
				var e = a[t],
					n = e.nodeName.toLowerCase();
				if (-1 === s.indexOf(e.nodeName.toLowerCase())) return e.parentNode.removeChild(e), "continue";
				var i = [].slice.call(e.attributes),
					o = [].concat(r["*"] || [], r[n] || []);
				i.forEach(function (t) {
					! function (t, e) {
						var n = t.nodeName.toLowerCase();
						if (-1 !== e.indexOf(n)) return -1 === be.indexOf(n) || Boolean(t.nodeValue.match(De) || t.nodeValue.match(Ie));
						for (var i = e.filter(function (t) {
								return t instanceof RegExp
							}), o = 0, r = i.length; o < r; o++)
							if (n.match(i[o])) return !0;
						return !1
					}(t, o) && e.removeAttribute(t.nodeName)
				})
			}, o = 0, l = a.length; o < l; o++) i(o);
		return n.body.innerHTML
	}
	var Ae = "tooltip",
		Ne = "bs.tooltip",
		Oe = "." + Ne,
		ke = g.fn[Ae],
		Pe = "bs-tooltip",
		Le = new RegExp("(^|\\s)" + Pe + "\\S+", "g"),
		je = ["sanitize", "whiteList", "sanitizeFn"],
		He = {
			animation: "boolean",
			template: "string",
			title: "(string|element|function)",
			trigger: "string",
			delay: "(number|object)",
			html: "boolean",
			selector: "(string|boolean)",
			placement: "(string|function)",
			offset: "(number|string|function)",
			container: "(string|element|boolean)",
			fallbackPlacement: "(string|array)",
			boundary: "(string|element)",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			whiteList: "object",
			popperConfig: "(null|object)"
		},
		Re = {
			AUTO: "auto",
			TOP: "top",
			RIGHT: "right",
			BOTTOM: "bottom",
			LEFT: "left"
		},
		xe = {
			animation: !0,
			template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !1,
			selector: !1,
			placement: "top",
			offset: 0,
			container: !1,
			fallbackPlacement: "flip",
			boundary: "scrollParent",
			sanitize: !0,
			sanitizeFn: null,
			whiteList: Se,
			popperConfig: null
		},
		Fe = "show",
		Ue = "out",
		We = {
			HIDE: "hide" + Oe,
			HIDDEN: "hidden" + Oe,
			SHOW: "show" + Oe,
			SHOWN: "shown" + Oe,
			INSERTED: "inserted" + Oe,
			CLICK: "click" + Oe,
			FOCUSIN: "focusin" + Oe,
			FOCUSOUT: "focusout" + Oe,
			MOUSEENTER: "mouseenter" + Oe,
			MOUSELEAVE: "mouseleave" + Oe
		},
		qe = "fade",
		Me = "show",
		Ke = ".tooltip-inner",
		Qe = ".arrow",
		Be = "hover",
		Ve = "focus",
		Ye = "click",
		ze = "manual",
		Xe = function () {
			function i(t, e) {
				if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
				this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
			}
			var t = i.prototype;
			return t.enable = function () {
				this._isEnabled = !0
			}, t.disable = function () {
				this._isEnabled = !1
			}, t.toggleEnabled = function () {
				this._isEnabled = !this._isEnabled
			}, t.toggle = function (t) {
				if (this._isEnabled)
					if (t) {
						var e = this.constructor.DATA_KEY,
							n = g(t.currentTarget).data(e);
						n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
					} else {
						if (g(this.getTipElement()).hasClass(Me)) return void this._leave(null, this);
						this._enter(null, this)
					}
			}, t.dispose = function () {
				clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
			}, t.show = function () {
				var e = this;
				if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
				var t = g.Event(this.constructor.Event.SHOW);
				if (this.isWithContent() && this._isEnabled) {
					g(this.element).trigger(t);
					var n = _.findShadowRoot(this.element),
						i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
					if (t.isDefaultPrevented() || !i) return;
					var o = this.getTipElement(),
						r = _.getUID(this.constructor.NAME);
					o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(qe);
					var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
						a = this._getAttachment(s);
					this.addAttachmentClass(a);
					var l = this._getContainer();
					g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, this._getPopperConfig(a)), g(o).addClass(Me), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
					var c = function () {
						e.config.animation && e._fixTransition();
						var t = e._hoverState;
						e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === Ue && e._leave(null, e)
					};
					if (g(this.tip).hasClass(qe)) {
						var h = _.getTransitionDurationFromElement(this.tip);
						g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
					} else c()
				}
			}, t.hide = function (t) {
				function e() {
					n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), g(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
				}
				var n = this,
					i = this.getTipElement(),
					o = g.Event(this.constructor.Event.HIDE);
				if (g(this.element).trigger(o), !o.isDefaultPrevented()) {
					if (g(i).removeClass(Me), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ye] = !1, this._activeTrigger[Ve] = !1, this._activeTrigger[Be] = !1, g(this.tip).hasClass(qe)) {
						var r = _.getTransitionDurationFromElement(i);
						g(i).one(_.TRANSITION_END, e).emulateTransitionEnd(r)
					} else e();
					this._hoverState = ""
				}
			}, t.update = function () {
				null !== this._popper && this._popper.scheduleUpdate()
			}, t.isWithContent = function () {
				return Boolean(this.getTitle())
			}, t.addAttachmentClass = function (t) {
				g(this.getTipElement()).addClass(Pe + "-" + t)
			}, t.getTipElement = function () {
				return this.tip = this.tip || g(this.config.template)[0], this.tip
			}, t.setContent = function () {
				var t = this.getTipElement();
				this.setElementContent(g(t.querySelectorAll(Ke)), this.getTitle()), g(t).removeClass(qe + " " + Me)
			}, t.setElementContent = function (t, e) {
				"object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = we(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
			}, t.getTitle = function () {
				var t = this.element.getAttribute("data-original-title");
				return t = t || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
			}, t._getPopperConfig = function (t) {
				var e = this;
				return l({}, {
					placement: t,
					modifiers: {
						offset: this._getOffset(),
						flip: {
							behavior: this.config.fallbackPlacement
						},
						arrow: {
							element: Qe
						},
						preventOverflow: {
							boundariesElement: this.config.boundary
						}
					},
					onCreate: function (t) {
						t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
					},
					onUpdate: function (t) {
						return e._handlePopperPlacementChange(t)
					}
				}, {}, this.config.popperConfig)
			}, t._getOffset = function () {
				var e = this,
					t = {};
				return "function" == typeof this.config.offset ? t.fn = function (t) {
					return t.offsets = l({}, t.offsets, {}, e.config.offset(t.offsets, e.element) || {}), t
				} : t.offset = this.config.offset, t
			}, t._getContainer = function () {
				return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
			}, t._getAttachment = function (t) {
				return Re[t.toUpperCase()]
			}, t._setListeners = function () {
				var i = this;
				this.config.trigger.split(" ").forEach(function (t) {
					if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
						return i.toggle(t)
					});
					else if (t !== ze) {
						var e = t === Be ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
							n = t === Be ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
						g(i.element).on(e, i.config.selector, function (t) {
							return i._enter(t)
						}).on(n, i.config.selector, function (t) {
							return i._leave(t)
						})
					}
				}), this._hideModalHandler = function () {
					i.element && i.hide()
				}, g(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, {
					trigger: "manual",
					selector: ""
				}) : this._fixTitle()
			}, t._fixTitle = function () {
				var t = typeof this.element.getAttribute("data-original-title");
				!this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
			}, t._enter = function (t, e) {
				var n = this.constructor.DATA_KEY;
				(e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ve : Be] = !0), g(e.getTipElement()).hasClass(Me) || e._hoverState === Fe ? e._hoverState = Fe : (clearTimeout(e._timeout), e._hoverState = Fe, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
					e._hoverState === Fe && e.show()
				}, e.config.delay.show) : e.show())
			}, t._leave = function (t, e) {
				var n = this.constructor.DATA_KEY;
				(e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ve : Be] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Ue, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
					e._hoverState === Ue && e.hide()
				}, e.config.delay.hide) : e.hide())
			}, t._isWithActiveTrigger = function () {
				for (var t in this._activeTrigger)
					if (this._activeTrigger[t]) return !0;
				return !1
			}, t._getConfig = function (t) {
				var e = g(this.element).data();
				return Object.keys(e).forEach(function (t) {
					-1 !== je.indexOf(t) && delete e[t]
				}), "number" == typeof (t = l({}, this.constructor.Default, {}, e, {}, "object" == typeof t && t ? t : {})).delay && (t.delay = {
					show: t.delay,
					hide: t.delay
				}), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(Ae, t, this.constructor.DefaultType), t.sanitize && (t.template = we(t.template, t.whiteList, t.sanitizeFn)), t
			}, t._getDelegateConfig = function () {
				var t = {};
				if (this.config)
					for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
				return t
			}, t._cleanTipClass = function () {
				var t = g(this.getTipElement()),
					e = t.attr("class").match(Le);
				null !== e && e.length && t.removeClass(e.join(""))
			}, t._handlePopperPlacementChange = function (t) {
				var e = t.instance;
				this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
			}, t._fixTransition = function () {
				var t = this.getTipElement(),
					e = this.config.animation;
				null === t.getAttribute("x-placement") && (g(t).removeClass(qe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
			}, i._jQueryInterface = function (n) {
				return this.each(function () {
					var t = g(this).data(Ne),
						e = "object" == typeof n && n;
					if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ne, t)), "string" == typeof n)) {
						if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
						t[n]()
					}
				})
			}, s(i, null, [{
				key: "VERSION",
				get: function () {
					return "4.4.1"
				}
			}, {
				key: "Default",
				get: function () {
					return xe
				}
			}, {
				key: "NAME",
				get: function () {
					return Ae
				}
			}, {
				key: "DATA_KEY",
				get: function () {
					return Ne
				}
			}, {
				key: "Event",
				get: function () {
					return We
				}
			}, {
				key: "EVENT_KEY",
				get: function () {
					return Oe
				}
			}, {
				key: "DefaultType",
				get: function () {
					return He
				}
			}]), i
		}();
	g.fn[Ae] = Xe._jQueryInterface, g.fn[Ae].Constructor = Xe, g.fn[Ae].noConflict = function () {
		return g.fn[Ae] = ke, Xe._jQueryInterface
	};
	var $e = "popover",
		Ge = "bs.popover",
		Je = "." + Ge,
		Ze = g.fn[$e],
		tn = "bs-popover",
		en = new RegExp("(^|\\s)" + tn + "\\S+", "g"),
		nn = l({}, Xe.Default, {
			placement: "right",
			trigger: "click",
			content: "",
			template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
		}),
		on = l({}, Xe.DefaultType, {
			content: "(string|element|function)"
		}),
		rn = "fade",
		sn = "show",
		an = ".popover-header",
		ln = ".popover-body",
		cn = {
			HIDE: "hide" + Je,
			HIDDEN: "hidden" + Je,
			SHOW: "show" + Je,
			SHOWN: "shown" + Je,
			INSERTED: "inserted" + Je,
			CLICK: "click" + Je,
			FOCUSIN: "focusin" + Je,
			FOCUSOUT: "focusout" + Je,
			MOUSEENTER: "mouseenter" + Je,
			MOUSELEAVE: "mouseleave" + Je
		},
		hn = function (t) {
			function i() {
				return t.apply(this, arguments) || this
			}! function (t, e) {
				t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
			}(i, t);
			var e = i.prototype;
			return e.isWithContent = function () {
				return this.getTitle() || this._getContent()
			}, e.addAttachmentClass = function (t) {
				g(this.getTipElement()).addClass(tn + "-" + t)
			}, e.getTipElement = function () {
				return this.tip = this.tip || g(this.config.template)[0], this.tip
			}, e.setContent = function () {
				var t = g(this.getTipElement());
				this.setElementContent(t.find(an), this.getTitle());
				var e = this._getContent();
				"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ln), e), t.removeClass(rn + " " + sn)
			}, e._getContent = function () {
				return this.element.getAttribute("data-content") || this.config.content
			}, e._cleanTipClass = function () {
				var t = g(this.getTipElement()),
					e = t.attr("class").match(en);
				null !== e && 0 < e.length && t.removeClass(e.join(""))
			}, i._jQueryInterface = function (n) {
				return this.each(function () {
					var t = g(this).data(Ge),
						e = "object" == typeof n ? n : null;
					if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ge, t)), "string" == typeof n)) {
						if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
						t[n]()
					}
				})
			}, s(i, null, [{
				key: "VERSION",
				get: function () {
					return "4.4.1"
				}
			}, {
				key: "Default",
				get: function () {
					return nn
				}
			}, {
				key: "NAME",
				get: function () {
					return $e
				}
			}, {
				key: "DATA_KEY",
				get: function () {
					return Ge
				}
			}, {
				key: "Event",
				get: function () {
					return cn
				}
			}, {
				key: "EVENT_KEY",
				get: function () {
					return Je
				}
			}, {
				key: "DefaultType",
				get: function () {
					return on
				}
			}]), i
		}(Xe);
	g.fn[$e] = hn._jQueryInterface, g.fn[$e].Constructor = hn, g.fn[$e].noConflict = function () {
		return g.fn[$e] = Ze, hn._jQueryInterface
	};
	var un = "scrollspy",
		fn = "bs.scrollspy",
		dn = "." + fn,
		gn = g.fn[un],
		_n = {
			offset: 10,
			method: "auto",
			target: ""
		},
		mn = {
			offset: "number",
			method: "string",
			target: "(string|element)"
		},
		pn = {
			ACTIVATE: "activate" + dn,
			SCROLL: "scroll" + dn,
			LOAD_DATA_API: "load" + dn + ".data-api"
		},
		vn = "dropdown-item",
		yn = "active",
		En = '[data-spy="scroll"]',
		Cn = ".nav, .list-group",
		Tn = ".nav-link",
		bn = ".nav-item",
		Sn = ".list-group-item",
		Dn = ".dropdown",
		In = ".dropdown-item",
		wn = ".dropdown-toggle",
		An = "offset",
		Nn = "position",
		On = function () {
			function n(t, e) {
				var n = this;
				this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + Tn + "," + this._config.target + " " + Sn + "," + this._config.target + " " + In, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(pn.SCROLL, function (t) {
					return n._process(t)
				}), this.refresh(), this._process()
			}
			var t = n.prototype;
			return t.refresh = function () {
				var e = this,
					t = this._scrollElement === this._scrollElement.window ? An : Nn,
					o = "auto" === this._config.method ? t : this._config.method,
					r = o === Nn ? this._getScrollTop() : 0;
				this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
					var e, n = _.getSelectorFromElement(t);
					if (n && (e = document.querySelector(n)), e) {
						var i = e.getBoundingClientRect();
						if (i.width || i.height) return [g(e)[o]().top + r, n]
					}
					return null
				}).filter(function (t) {
					return t
				}).sort(function (t, e) {
					return t[0] - e[0]
				}).forEach(function (t) {
					e._offsets.push(t[0]), e._targets.push(t[1])
				})
			}, t.dispose = function () {
				g.removeData(this._element, fn), g(this._scrollElement).off(dn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
			}, t._getConfig = function (t) {
				if ("string" != typeof (t = l({}, _n, {}, "object" == typeof t && t ? t : {})).target) {
					var e = g(t.target).attr("id");
					e || (e = _.getUID(un), g(t.target).attr("id", e)), t.target = "#" + e
				}
				return _.typeCheckConfig(un, t, mn), t
			}, t._getScrollTop = function () {
				return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
			}, t._getScrollHeight = function () {
				return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
			}, t._getOffsetHeight = function () {
				return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
			}, t._process = function () {
				var t = this._getScrollTop() + this._config.offset,
					e = this._getScrollHeight(),
					n = this._config.offset + e - this._getOffsetHeight();
				if (this._scrollHeight !== e && this.refresh(), n <= t) {
					var i = this._targets[this._targets.length - 1];
					this._activeTarget !== i && this._activate(i)
				} else {
					if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
					for (var o = this._offsets.length; o--;) {
						this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
					}
				}
			}, t._activate = function (e) {
				this._activeTarget = e, this._clear();
				var t = this._selector.split(",").map(function (t) {
						return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
					}),
					n = g([].slice.call(document.querySelectorAll(t.join(","))));
				n.hasClass(vn) ? (n.closest(Dn).find(wn).addClass(yn), n.addClass(yn)) : (n.addClass(yn), n.parents(Cn).prev(Tn + ", " + Sn).addClass(yn), n.parents(Cn).prev(bn).children(Tn).addClass(yn)), g(this._scrollElement).trigger(pn.ACTIVATE, {
					relatedTarget: e
				})
			}, t._clear = function () {
				[].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
					return t.classList.contains(yn)
				}).forEach(function (t) {
					return t.classList.remove(yn)
				})
			}, n._jQueryInterface = function (e) {
				return this.each(function () {
					var t = g(this).data(fn);
					if (t || (t = new n(this, "object" == typeof e && e), g(this).data(fn, t)), "string" == typeof e) {
						if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
						t[e]()
					}
				})
			}, s(n, null, [{
				key: "VERSION",
				get: function () {
					return "4.4.1"
				}
			}, {
				key: "Default",
				get: function () {
					return _n
				}
			}]), n
		}();
	g(window).on(pn.LOAD_DATA_API, function () {
		for (var t = [].slice.call(document.querySelectorAll(En)), e = t.length; e--;) {
			var n = g(t[e]);
			On._jQueryInterface.call(n, n.data())
		}
	}), g.fn[un] = On._jQueryInterface, g.fn[un].Constructor = On, g.fn[un].noConflict = function () {
		return g.fn[un] = gn, On._jQueryInterface
	};
	var kn = "bs.tab",
		Pn = "." + kn,
		Ln = g.fn.tab,
		jn = {
			HIDE: "hide" + Pn,
			HIDDEN: "hidden" + Pn,
			SHOW: "show" + Pn,
			SHOWN: "shown" + Pn,
			CLICK_DATA_API: "click" + Pn + ".data-api"
		},
		Hn = "dropdown-menu",
		Rn = "active",
		xn = "disabled",
		Fn = "fade",
		Un = "show",
		Wn = ".dropdown",
		qn = ".nav, .list-group",
		Mn = ".active",
		Kn = "> li > .active",
		Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
		Bn = ".dropdown-toggle",
		Vn = "> .dropdown-menu .active",
		Yn = function () {
			function i(t) {
				this._element = t
			}
			var t = i.prototype;
			return t.show = function () {
				var n = this;
				if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Rn) || g(this._element).hasClass(xn))) {
					var t, i, e = g(this._element).closest(qn)[0],
						o = _.getSelectorFromElement(this._element);
					if (e) {
						var r = "UL" === e.nodeName || "OL" === e.nodeName ? Kn : Mn;
						i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
					}
					var s = g.Event(jn.HIDE, {
							relatedTarget: this._element
						}),
						a = g.Event(jn.SHOW, {
							relatedTarget: i
						});
					if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
						o && (t = document.querySelector(o)), this._activate(this._element, e);
						var l = function () {
							var t = g.Event(jn.HIDDEN, {
									relatedTarget: n._element
								}),
								e = g.Event(jn.SHOWN, {
									relatedTarget: i
								});
							g(i).trigger(t), g(n._element).trigger(e)
						};
						t ? this._activate(t, t.parentNode, l) : l()
					}
				}
			}, t.dispose = function () {
				g.removeData(this._element, kn), this._element = null
			}, t._activate = function (t, e, n) {
				function i() {
					return o._transitionComplete(t, r, n)
				}
				var o = this,
					r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Mn) : g(e).find(Kn))[0],
					s = n && r && g(r).hasClass(Fn);
				if (r && s) {
					var a = _.getTransitionDurationFromElement(r);
					g(r).removeClass(Un).one(_.TRANSITION_END, i).emulateTransitionEnd(a)
				} else i()
			}, t._transitionComplete = function (t, e, n) {
				if (e) {
					g(e).removeClass(Rn);
					var i = g(e.parentNode).find(Vn)[0];
					i && g(i).removeClass(Rn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
				}
				if (g(t).addClass(Rn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(Fn) && t.classList.add(Un), t.parentNode && g(t.parentNode).hasClass(Hn)) {
					var o = g(t).closest(Wn)[0];
					if (o) {
						var r = [].slice.call(o.querySelectorAll(Bn));
						g(r).addClass(Rn)
					}
					t.setAttribute("aria-expanded", !0)
				}
				n && n()
			}, i._jQueryInterface = function (n) {
				return this.each(function () {
					var t = g(this),
						e = t.data(kn);
					if (e || (e = new i(this), t.data(kn, e)), "string" == typeof n) {
						if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
						e[n]()
					}
				})
			}, s(i, null, [{
				key: "VERSION",
				get: function () {
					return "4.4.1"
				}
			}]), i
		}();
	g(document).on(jn.CLICK_DATA_API, Qn, function (t) {
		t.preventDefault(), Yn._jQueryInterface.call(g(this), "show")
	}), g.fn.tab = Yn._jQueryInterface, g.fn.tab.Constructor = Yn, g.fn.tab.noConflict = function () {
		return g.fn.tab = Ln, Yn._jQueryInterface
	};
	var zn = "toast",
		Xn = "bs.toast",
		$n = "." + Xn,
		Gn = g.fn[zn],
		Jn = {
			CLICK_DISMISS: "click.dismiss" + $n,
			HIDE: "hide" + $n,
			HIDDEN: "hidden" + $n,
			SHOW: "show" + $n,
			SHOWN: "shown" + $n
		},
		Zn = "fade",
		ti = "hide",
		ei = "show",
		ni = "showing",
		ii = {
			animation: "boolean",
			autohide: "boolean",
			delay: "number"
		},
		oi = {
			animation: !0,
			autohide: !0,
			delay: 500
		},
		ri = '[data-dismiss="toast"]',
		si = function () {
			function i(t, e) {
				this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
			}
			var t = i.prototype;
			return t.show = function () {
				var t = this,
					e = g.Event(Jn.SHOW);
				if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
					this._config.animation && this._element.classList.add(Zn);
					var n = function () {
						t._element.classList.remove(ni), t._element.classList.add(ei), g(t._element).trigger(Jn.SHOWN), t._config.autohide && (t._timeout = setTimeout(function () {
							t.hide()
						}, t._config.delay))
					};
					if (this._element.classList.remove(ti), _.reflow(this._element), this._element.classList.add(ni), this._config.animation) {
						var i = _.getTransitionDurationFromElement(this._element);
						g(this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(i)
					} else n()
				}
			}, t.hide = function () {
				if (this._element.classList.contains(ei)) {
					var t = g.Event(Jn.HIDE);
					g(this._element).trigger(t), t.isDefaultPrevented() || this._close()
				}
			}, t.dispose = function () {
				clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(ei) && this._element.classList.remove(ei), g(this._element).off(Jn.CLICK_DISMISS), g.removeData(this._element, Xn), this._element = null, this._config = null
			}, t._getConfig = function (t) {
				return t = l({}, oi, {}, g(this._element).data(), {}, "object" == typeof t && t ? t : {}), _.typeCheckConfig(zn, t, this.constructor.DefaultType), t
			}, t._setListeners = function () {
				var t = this;
				g(this._element).on(Jn.CLICK_DISMISS, ri, function () {
					return t.hide()
				})
			}, t._close = function () {
				function t() {
					e._element.classList.add(ti), g(e._element).trigger(Jn.HIDDEN)
				}
				var e = this;
				if (this._element.classList.remove(ei), this._config.animation) {
					var n = _.getTransitionDurationFromElement(this._element);
					g(this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(n)
				} else t()
			}, i._jQueryInterface = function (n) {
				return this.each(function () {
					var t = g(this),
						e = t.data(Xn);
					if (e || (e = new i(this, "object" == typeof n && n), t.data(Xn, e)), "string" == typeof n) {
						if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
						e[n](this)
					}
				})
			}, s(i, null, [{
				key: "VERSION",
				get: function () {
					return "4.4.1"
				}
			}, {
				key: "DefaultType",
				get: function () {
					return ii
				}
			}, {
				key: "Default",
				get: function () {
					return oi
				}
			}]), i
		}();
	g.fn[zn] = si._jQueryInterface, g.fn[zn].Constructor = si, g.fn[zn].noConflict = function () {
		return g.fn[zn] = Gn, si._jQueryInterface
	}, t.Alert = v, t.Button = H, t.Carousel = ut, t.Collapse = wt, t.Dropdown = ee, t.Modal = Te, t.Popover = hn, t.Scrollspy = On, t.Tab = Yn, t.Toast = si, t.Tooltip = Xe, t.Util = _, Object.defineProperty(t, "__esModule", {
		value: !0
	})
});
//# sourceMappingURL=bootstrap.min.js.map


/*jquery-slimscroll*/

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function (e) {
	e.fn.extend({
		slimScroll: function (f) {
			var a = e.extend({
				width: "auto",
				height: "250px",
				size: "7px",
				color: "#000",
				position: "left",
				distance: "1px",
				start: "top",
				opacity: .4,
				alwaysVisible: !1,
				disableFadeOut: !1,
				railVisible: !1,
				railColor: "#333",
				railOpacity: .2,
				railDraggable: !0,
				railClass: "slimScrollRail",
				barClass: "slimScrollBar",
				wrapperClass: "slimScrollDiv",
				allowPageScroll: !1,
				wheelStep: 20,
				touchScrollStep: 200,
				borderRadius: "7px",
				railBorderRadius: "7px"
			}, f);
			this.each(function () {
				function v(d) {
					if (r) {
						d = d || window.event;
						var c = 0;
						d.wheelDelta && (c = -d.wheelDelta / 120);
						d.detail && (c = d.detail / 3);
						e(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && n(c, !0);
						d.preventDefault && !k && d.preventDefault();
						k || (d.returnValue = !1)
					}
				}

				function n(d, g, e) {
					k = !1;
					var f = b.outerHeight() - c.outerHeight();
					g && (g = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), g = Math.min(Math.max(g, 0), f), g = 0 < d ? Math.ceil(g) : Math.floor(g), c.css({
						top: g + "px"
					}));
					l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
					g =
						l * (b[0].scrollHeight - b.outerHeight());
					e && (g = d, d = g / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), f), c.css({
						top: d + "px"
					}));
					b.scrollTop(g);
					b.trigger("slimscrolling", ~~g);
					w();
					p()
				}

				function x() {
					u = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30);
					c.css({
						height: u + "px"
					});
					var a = u == b.outerHeight() ? "none" : "block";
					c.css({
						display: a
					})
				}

				function w() {
					x();
					clearTimeout(B);
					l == ~~l ? (k = a.allowPageScroll, C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = !1;
					C = l;
					u >= b.outerHeight() ? k = !0 : (c.stop(!0,
						!0).fadeIn("fast"), a.railVisible && m.stop(!0, !0).fadeIn("fast"))
				}

				function p() {
					a.alwaysVisible || (B = setTimeout(function () {
						a.disableFadeOut && r || y || z || (c.fadeOut("slow"), m.fadeOut("slow"))
					}, 1E3))
				}
				var r, y, z, B, A, u, l, C, k = !1,
					b = e(this);
				if (b.parent().hasClass(a.wrapperClass)) {
					var q = b.scrollTop(),
						c = b.siblings("." + a.barClass),
						m = b.siblings("." + a.railClass);
					x();
					if (e.isPlainObject(f)) {
						if ("height" in f && "auto" == f.height) {
							b.parent().css("height", "auto");
							b.css("height", "auto");
							var h = b.parent().parent().height();
							b.parent().css("height",
								h);
							b.css("height", h)
						} else "height" in f && (h = f.height, b.parent().css("height", h), b.css("height", h));
						if ("scrollTo" in f) q = parseInt(a.scrollTo);
						else if ("scrollBy" in f) q += parseInt(a.scrollBy);
						else if ("destroy" in f) {
							c.remove();
							m.remove();
							b.unwrap();
							return
						}
						n(q, !1, !0)
					}
				} else if (!(e.isPlainObject(f) && "destroy" in f)) {
					a.height = "auto" == a.height ? b.parent().height() : a.height;
					q = e("<div></div>").addClass(a.wrapperClass).css({
						position: "relative",
						overflow: "hidden",
						width: a.width,
						height: a.height
					});
					b.css({
						overflow: "hidden",
						width: a.width,
						height: a.height
					});
					var m = e("<div></div>").addClass(a.railClass).css({
							width: a.size,
							height: "100%",
							position: "absolute",
							top: 0,
							display: a.alwaysVisible && a.railVisible ? "block" : "none",
							"border-radius": a.railBorderRadius,
							background: a.railColor,
							opacity: a.railOpacity,
							zIndex: 90
						}),
						c = e("<div></div>").addClass(a.barClass).css({
							background: a.color,
							width: a.size,
							position: "absolute",
							top: 0,
							opacity: a.opacity,
							display: a.alwaysVisible ? "block" : "none",
							"border-radius": a.borderRadius,
							BorderRadius: a.borderRadius,
							MozBorderRadius: a.borderRadius,
							WebkitBorderRadius: a.borderRadius,
							zIndex: 99
						}),
						h = "right" == a.position ? {
							right: a.distance
						} : {
							left: a.distance
						};
					m.css(h);
					c.css(h);
					b.wrap(q);
					b.parent().append(c);
					b.parent().append(m);
					a.railDraggable && c.bind("mousedown", function (a) {
						var b = e(document);
						z = !0;
						t = parseFloat(c.css("top"));
						pageY = a.pageY;
						b.bind("mousemove.slimscroll", function (a) {
							currTop = t + a.pageY - pageY;
							c.css("top", currTop);
							n(0, c.position().top, !1)
						});
						b.bind("mouseup.slimscroll", function (a) {
							z = !1;
							p();
							b.unbind(".slimscroll")
						});
						return !1
					}).bind("selectstart.slimscroll",
						function (a) {
							a.stopPropagation();
							a.preventDefault();
							return !1
						});
					m.hover(function () {
						w()
					}, function () {
						p()
					});
					c.hover(function () {
						y = !0
					}, function () {
						y = !1
					});
					b.hover(function () {
						r = !0;
						w();
						p()
					}, function () {
						r = !1;
						p()
					});
					b.bind("touchstart", function (a, b) {
						a.originalEvent.touches.length && (A = a.originalEvent.touches[0].pageY)
					});
					b.bind("touchmove", function (b) {
						k || b.originalEvent.preventDefault();
						b.originalEvent.touches.length && (n((A - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), A = b.originalEvent.touches[0].pageY)
					});
					x();
					"bottom" === a.start ? (c.css({
						top: b.outerHeight() - c.outerHeight()
					}), n(0, !0)) : "top" !== a.start && (n(e(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
					window.addEventListener ? (this.addEventListener("DOMMouseScroll", v, !1), this.addEventListener("mousewheel", v, !1)) : document.attachEvent("onmousewheel", v)
				}
			});
			return this
		}
	});
	e.fn.extend({
		slimscroll: e.fn.slimScroll
	})
})(jQuery);



/*!
 * screenfull
 * v4.0.0 - 2018-12-15
 * (c) Sindre Sorhus; MIT License
 */

! function () {
	"use strict";
	var u = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
		e = "undefined" != typeof module && module.exports,
		t = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
		c = function () {
			for (var e, n = [
					["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
					["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
					["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
					["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
					["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
				], r = 0, l = n.length, t = {}; r < l; r++)
				if ((e = n[r]) && e[1] in u) {
					for (r = 0; r < e.length; r++) t[n[0][r]] = e[r];
					return t
				} return !1
		}(),
		l = {
			change: c.fullscreenchange,
			error: c.fullscreenerror
		},
		n = {
			request: function (l) {
				return new Promise(function (e) {
					var n = c.requestFullscreen,
						r = function () {
							this.off("change", r), e()
						}.bind(this);
					l = l || u.documentElement, / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent) ? l[n]() : l[n](t ? Element.ALLOW_KEYBOARD_INPUT : {}), this.on("change", r)
				}.bind(this))
			},
			exit: function () {
				return new Promise(function (e) {
					var n = function () {
						this.off("change", n), e()
					}.bind(this);
					u[c.exitFullscreen](), this.on("change", n)
				}.bind(this))
			},
			toggle: function (e) {
				return this.isFullscreen ? this.exit() : this.request(e)
			},
			onchange: function (e) {
				this.on("change", e)
			},
			onerror: function (e) {
				this.on("error", e)
			},
			on: function (e, n) {
				var r = l[e];
				r && u.addEventListener(r, n, !1)
			},
			off: function (e, n) {
				var r = l[e];
				r && u.removeEventListener(r, n, !1)
			},
			raw: c
		};
	c ? (Object.defineProperties(n, {
		isFullscreen: {
			get: function () {
				return Boolean(u[c.fullscreenElement])
			}
		},
		element: {
			enumerable: !0,
			get: function () {
				return u[c.fullscreenElement]
			}
		},
		enabled: {
			enumerable: !0,
			get: function () {
				return Boolean(u[c.fullscreenEnabled])
			}
		}
	}), e ? module.exports = n : window.screenfull = n) : e ? module.exports = !1 : window.screenfull = !1
}();



/*!
 * fastclick
 */
;
(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function () {
				return method.apply(context, arguments);
			};
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function (type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function (type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function (event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	 * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	 *
	 * @type boolean
	 */
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function (target) {
		switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function (target) {
		switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
					case 'button':
					case 'checkbox':
					case 'file':
					case 'image':
					case 'radio':
					case 'submit':
						return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function (targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function (targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function (targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function (targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function (event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function (event) {
		var touch = event.changedTouches[0],
			boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function (event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function (labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function (event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function () {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function (event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function (event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function () {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function (layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

				// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function (layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function () {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());






/* jquery.sparkline 2.1.3 - http://omnipotent.net/jquery.sparkline/ 
 ** Licensed under the New BSD License - see above site for details */

(function (document, Math, undefined) {
	(function (factory) {
		if (typeof define === "function" && define.amd) {
			define(["jquery"], factory)
		} else if (jQuery && !jQuery.fn.sparkline) {
			factory(jQuery)
		}
	})(function ($) {
		"use strict";
		var UNSET_OPTION = {},
			getDefaults, createClass, SPFormat, clipval, quartile, normalizeValue, normalizeValues, remove, isNumber, all, sum, addCSS, ensureArray, formatNumber, RangeMap, MouseHandler, Tooltip, barHighlightMixin, line, bar, tristate, discrete, bullet, pie, box, defaultStyles, initStyles, VShape, VCanvas_base, VCanvas_canvas, VCanvas_vml, pending, shapeCount = 0;
		getDefaults = function () {
			return {
				common: {
					type: "line",
					lineColor: "#00f",
					fillColor: "#cdf",
					defaultPixelsPerValue: 3,
					width: "auto",
					height: "auto",
					composite: false,
					tagValuesAttribute: "values",
					tagOptionsPrefix: "spark",
					enableTagOptions: false,
					enableHighlight: true,
					highlightLighten: 1.4,
					tooltipSkipNull: true,
					tooltipPrefix: "",
					tooltipSuffix: "",
					disableHiddenCheck: false,
					numberFormatter: false,
					numberDigitGroupCount: 3,
					numberDigitGroupSep: ",",
					numberDecimalMark: ".",
					disableTooltips: false,
					disableInteraction: false
				},
				line: {
					spotColor: "#f80",
					highlightSpotColor: "#5f5",
					highlightLineColor: "#f22",
					spotRadius: 1.5,
					minSpotColor: "#f80",
					maxSpotColor: "#f80",
					lineWidth: 1,
					normalRangeMin: undefined,
					normalRangeMax: undefined,
					normalRangeColor: "#ccc",
					drawNormalOnTop: false,
					chartRangeMin: undefined,
					chartRangeMax: undefined,
					chartRangeMinX: undefined,
					chartRangeMaxX: undefined,
					tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
				},
				bar: {
					barColor: "#3366cc",
					negBarColor: "#f44",
					stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
					zeroColor: undefined,
					nullColor: undefined,
					zeroAxis: true,
					barWidth: 4,
					barSpacing: 1,
					chartRangeMax: undefined,
					chartRangeMin: undefined,
					chartRangeClip: false,
					colorMap: undefined,
					tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
				},
				tristate: {
					barWidth: 4,
					barSpacing: 1,
					posBarColor: "#6f6",
					negBarColor: "#f44",
					zeroBarColor: "#999",
					colorMap: {},
					tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
					tooltipValueLookups: {
						map: {
							"-1": "بازنده",
							0: "مساوی",
							1: "برنده"
						}
					}
				},
				discrete: {
					lineHeight: "auto",
					thresholdColor: undefined,
					thresholdValue: 0,
					chartRangeMax: undefined,
					chartRangeMin: undefined,
					chartRangeClip: false,
					tooltipFormat: new SPFormat("{{prefix}}{{value}}{{suffix}}")
				},
				bullet: {
					targetColor: "#f33",
					targetWidth: 3,
					performanceColor: "#33f",
					rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
					base: undefined,
					tooltipFormat: new SPFormat("{{fieldkey:fields}} - {{value}}"),
					tooltipValueLookups: {
						fields: {
							r: "محدوده",
							p: "نمایش",
							t: "هدف"
						}
					}
				},
				pie: {
					offset: 0,
					sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
					borderWidth: 0,
					borderColor: "#000",
					tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
				},
				box: {
					raw: false,
					boxLineColor: "#000",
					boxFillColor: "#cdf",
					whiskerColor: "#000",
					outlierLineColor: "#333",
					outlierFillColor: "#fff",
					medianColor: "#f00",
					showOutliers: true,
					outlierIQR: 1.5,
					spotRadius: 1.5,
					target: undefined,
					targetColor: "#4a2",
					chartRangeMax: undefined,
					chartRangeMin: undefined,
					tooltipFormat: new SPFormat("{{field:fields}}: {{value}}"),
					tooltipFormatFieldlistKey: "field",
					tooltipValueLookups: {
						fields: {
							lq: "چارک پایین",
							med: "متوسط",
							uq: "چارک بالا",
							lo: "چارک چپ",
							ro: "چارک راست",
							lw: "قسمت چپ",
							rw: "قسمت راست"
						}
					}
				}
			}
		};
		defaultStyles = ".jqstooltip { " + "position: absolute;" + "left: 0px;" + "top: 0px;" + "visibility: hidden;" + "background: rgb(0, 0, 0) transparent;" + "background-color: rgba(0,0,0,0.6);" + "filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);" + '-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";' + "color: white;" + "font: 10px iransans, san serif;" + "text-align: left;" + "white-space: nowrap;" + "padding: 5px;" + "border: 1px solid white;" + "box-sizing: content-box;" + "z-index: 10000;" + "}" + ".jqsfield { " + "color: white;" + "font: 10px iransans, san serif;" + "text-align: left;" + "}";
		createClass = function () {
			var Class, args;
			Class = function () {
				this.init.apply(this, arguments)
			};
			if (arguments.length > 1) {
				if (arguments[0]) {
					Class.prototype = $.extend(new arguments[0], arguments[arguments.length - 1]);
					Class._super = arguments[0].prototype
				} else {
					Class.prototype = arguments[arguments.length - 1]
				}
				if (arguments.length > 2) {
					args = Array.prototype.slice.call(arguments, 1, -1);
					args.unshift(Class.prototype);
					$.extend.apply($, args)
				}
			} else {
				Class.prototype = arguments[0]
			}
			Class.prototype.cls = Class;
			return Class
		};
		$.SPFormatClass = SPFormat = createClass({
			fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
			precre: /(\w+)\.(\d+)/,
			init: function (format, fclass) {
				this.format = format;
				this.fclass = fclass
			},
			render: function (fieldset, lookups, options) {
				var self = this,
					fields = fieldset,
					match, token, lookupkey, fieldvalue, prec;
				return this.format.replace(this.fre, function () {
					var lookup;
					token = arguments[1];
					lookupkey = arguments[3];
					match = self.precre.exec(token);
					if (match) {
						prec = match[2];
						token = match[1]
					} else {
						prec = false
					}
					fieldvalue = fields[token];
					if (fieldvalue === undefined) {
						return ""
					}
					if (lookupkey && lookups && lookups[lookupkey]) {
						lookup = lookups[lookupkey];
						if (lookup.get) {
							return lookups[lookupkey].get(fieldvalue) || fieldvalue
						} else {
							return lookups[lookupkey][fieldvalue] || fieldvalue
						}
					}
					if (isNumber(fieldvalue)) {
						if (options.get("numberFormatter")) {
							fieldvalue = options.get("numberFormatter")(fieldvalue)
						} else {
							fieldvalue = formatNumber(fieldvalue, prec, options.get("numberDigitGroupCount"), options.get("numberDigitGroupSep"), options.get("numberDecimalMark"))
						}
					}
					return fieldvalue
				})
			}
		});
		$.spformat = function (format, fclass) {
			return new SPFormat(format, fclass)
		};
		clipval = function (val, min, max) {
			if (val < min) {
				return min
			}
			if (val > max) {
				return max
			}
			return val
		};
		quartile = function (values, q) {
			var vl;
			if (q === 2) {
				vl = Math.floor(values.length / 2);
				return values.length % 2 ? values[vl] : (values[vl - 1] + values[vl]) / 2
			} else {
				if (values.length % 2) {
					vl = (values.length * q + q) / 4;
					return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 : values[vl - 1]
				} else {
					vl = (values.length * q + 2) / 4;
					return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 : values[vl - 1]
				}
			}
		};
		normalizeValue = function (val) {
			var nf;
			switch (val) {
				case "undefined":
					val = undefined;
					break;
				case "null":
					val = null;
					break;
				case "true":
					val = true;
					break;
				case "false":
					val = false;
					break;
				default:
					nf = parseFloat(val);
					if (val == nf) {
						val = nf
					}
			}
			return val
		};
		normalizeValues = function (vals) {
			var i, result = [];
			for (i = vals.length; i--;) {
				result[i] = normalizeValue(vals[i])
			}
			return result
		};
		remove = function (vals, filter) {
			var i, vl, result = [];
			for (i = 0, vl = vals.length; i < vl; i++) {
				if (vals[i] !== filter) {
					result.push(vals[i])
				}
			}
			return result
		};
		isNumber = function (num) {
			return !isNaN(parseFloat(num)) && isFinite(num)
		};
		formatNumber = function (num, prec, groupsize, groupsep, decsep) {
			var p, i;
			num = (prec === false ? parseFloat(num).toString() : num.toFixed(prec)).split("");
			p = (p = $.inArray(".", num)) < 0 ? num.length : p;
			if (p < num.length) {
				num[p] = decsep
			}
			for (i = p - groupsize; i > 0; i -= groupsize) {
				num.splice(i, 0, groupsep)
			}
			return num.join("")
		};
		all = function (val, arr, ignoreNull) {
			var i;
			for (i = arr.length; i--;) {
				if (ignoreNull && arr[i] === null) continue;
				if (arr[i] !== val) {
					return false
				}
			}
			return true
		};
		sum = function (vals) {
			var total = 0,
				i;
			for (i = vals.length; i--;) {
				total += typeof vals[i] === "number" ? vals[i] : 0
			}
			return total
		};
		ensureArray = function (val) {
			return $.isArray(val) ? val : [val]
		};
		addCSS = function (css) {
			var tag, iefail;
			if (document.createStyleSheet) {
				try {
					document.createStyleSheet().cssText = css;
					return
				} catch (e) {
					iefail = true
				}
			}
			tag = document.createElement("style");
			tag.type = "text/css";
			document.getElementsByTagName("head")[0].appendChild(tag);
			if (iefail) {
				document.styleSheets[document.styleSheets.length - 1].cssText = css
			} else {
				tag[typeof document.body.style.WebkitAppearance == "string" ? "innerText" : "innerHTML"] = css
			}
		};
		$.fn.simpledraw = function (width, height, useExisting, interact) {
			var target, mhandler;
			if (useExisting && (target = this.data("_jqs_vcanvas"))) {
				return target
			}
			if ($.fn.sparkline.canvas === false) {
				return false
			} else if ($.fn.sparkline.canvas === undefined) {
				var el = document.createElement("canvas");
				if (!!(el.getContext && el.getContext("2d"))) {
					$.fn.sparkline.canvas = function (width, height, target, interact) {
						return new VCanvas_canvas(width, height, target, interact)
					}
				} else if (document.namespaces && !document.namespaces.v) {
					document.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML");
					$.fn.sparkline.canvas = function (width, height, target, interact) {
						return new VCanvas_vml(width, height, target)
					}
				} else {
					$.fn.sparkline.canvas = false;
					return false
				}
			}
			if (width === undefined) {
				width = $(this).innerWidth()
			}
			if (height === undefined) {
				height = $(this).innerHeight()
			}
			target = $.fn.sparkline.canvas(width, height, this, interact);
			mhandler = $(this).data("_jqs_mhandler");
			if (mhandler) {
				mhandler.registerCanvas(target)
			}
			return target
		};
		$.fn.cleardraw = function () {
			var target = this.data("_jqs_vcanvas");
			if (target) {
				target.reset()
			}
		};
		$.RangeMapClass = RangeMap = createClass({
			init: function (map) {
				var key, range, rangelist = [];
				for (key in map) {
					if (map.hasOwnProperty(key) && typeof key === "string" && key.indexOf(":") > -1) {
						range = key.split(":");
						range[0] = range[0].length === 0 ? -Infinity : parseFloat(range[0]);
						range[1] = range[1].length === 0 ? Infinity : parseFloat(range[1]);
						range[2] = map[key];
						rangelist.push(range)
					}
				}
				this.map = map;
				this.rangelist = rangelist || false
			},
			get: function (value) {
				var rangelist = this.rangelist,
					i, range, result;
				if ((result = this.map[value]) !== undefined) {
					return result
				}
				if (rangelist) {
					for (i = rangelist.length; i--;) {
						range = rangelist[i];
						if (range[0] <= value && range[1] >= value) {
							return range[2]
						}
					}
				}
				return undefined
			}
		});
		$.range_map = function (map) {
			return new RangeMap(map)
		};
		MouseHandler = createClass({
			init: function (el, options) {
				var $el = $(el);
				this.$el = $el;
				this.options = options;
				this.currentPageX = 0;
				this.currentPageY = 0;
				this.el = el;
				this.splist = [];
				this.tooltip = null;
				this.over = false;
				this.displayTooltips = !options.get("disableTooltips");
				this.highlightEnabled = !options.get("disableHighlight")
			},
			registerSparkline: function (sp) {
				this.splist.push(sp);
				if (this.over) {
					this.updateDisplay()
				}
			},
			registerCanvas: function (canvas) {
				var $canvas = $(canvas.canvas);
				this.canvas = canvas;
				this.$canvas = $canvas;
				$canvas.mouseenter($.proxy(this.mouseenter, this));
				$canvas.mouseleave($.proxy(this.mouseleave, this));
				$canvas.click($.proxy(this.mouseclick, this))
			},
			reset: function (removeTooltip) {
				this.splist = [];
				if (this.tooltip && removeTooltip) {
					this.tooltip.remove();
					this.tooltip = undefined
				}
			},
			mouseclick: function (e) {
				var clickEvent = $.Event("sparklineClick");
				clickEvent.originalEvent = e;
				clickEvent.sparklines = this.splist;
				this.$el.trigger(clickEvent)
			},
			mouseenter: function (e) {
				$(document.body).unbind("mousemove.jqs");
				$(document.body).bind("mousemove.jqs", $.proxy(this.mousemove, this));
				this.over = true;
				this.currentPageX = e.pageX;
				this.currentPageY = e.pageY;
				this.currentEl = e.target;
				if (!this.tooltip && this.displayTooltips) {
					this.tooltip = new Tooltip(this.options);
					this.tooltip.updatePosition(e.pageX, e.pageY)
				}
				this.updateDisplay()
			},
			mouseleave: function () {
				$(document.body).unbind("mousemove.jqs");
				var splist = this.splist,
					spcount = splist.length,
					needsRefresh = false,
					sp, i;
				this.over = false;
				this.currentEl = null;
				if (this.tooltip) {
					this.tooltip.remove();
					this.tooltip = null
				}
				for (i = 0; i < spcount; i++) {
					sp = splist[i];
					if (sp.clearRegionHighlight()) {
						needsRefresh = true
					}
				}
				if (needsRefresh) {
					this.canvas.render()
				}
			},
			mousemove: function (e) {
				this.currentPageX = e.pageX;
				this.currentPageY = e.pageY;
				this.currentEl = e.target;
				if (this.tooltip) {
					this.tooltip.updatePosition(e.pageX, e.pageY)
				}
				this.updateDisplay()
			},
			updateDisplay: function () {
				var splist = this.splist,
					spcount = splist.length,
					needsRefresh = false,
					offset = this.$canvas.offset(),
					localX = this.currentPageX - offset.left,
					localY = this.currentPageY - offset.top,
					tooltiphtml, sp, i, result, changeEvent;
				if (!this.over) {
					return
				}
				for (i = 0; i < spcount; i++) {
					sp = splist[i];
					result = sp.setRegionHighlight(this.currentEl, localX, localY);
					if (result) {
						needsRefresh = true
					}
				}
				if (needsRefresh) {
					changeEvent = $.Event("sparklineRegionChange");
					changeEvent.sparklines = this.splist;
					this.$el.trigger(changeEvent);
					if (this.tooltip) {
						tooltiphtml = "";
						for (i = 0; i < spcount; i++) {
							sp = splist[i];
							tooltiphtml += sp.getCurrentRegionTooltip()
						}
						this.tooltip.setContent(tooltiphtml)
					}
					if (!this.disableHighlight) {
						this.canvas.render()
					}
				}
				if (result === null) {
					this.mouseleave()
				}
			}
		});
		Tooltip = createClass({
			sizeStyle: "position: static !important;" + "display: block !important;" + "visibility: hidden !important;" + "float: left !important;",
			init: function (options) {
				var tooltipClassname = options.get("tooltipClassname", "jqstooltip"),
					sizetipStyle = this.sizeStyle,
					offset;
				this.container = options.get("tooltipContainer") || document.body;
				this.tooltipOffsetX = options.get("tooltipOffsetX", 10);
				this.tooltipOffsetY = options.get("tooltipOffsetY", 12);
				$("#jqssizetip").remove();
				$("#jqstooltip").remove();
				this.sizetip = $("<div/>", {
					id: "jqssizetip",
					style: sizetipStyle,
					"class": tooltipClassname
				});
				this.tooltip = $("<div/>", {
					id: "jqstooltip",
					"class": tooltipClassname
				}).appendTo(this.container);
				offset = this.tooltip.offset();
				this.offsetLeft = offset.left;
				this.offsetTop = offset.top;
				this.hidden = true;
				$(window).unbind("resize.jqs scroll.jqs");
				$(window).bind("resize.jqs scroll.jqs", $.proxy(this.updateWindowDims, this));
				this.updateWindowDims()
			},
			updateWindowDims: function () {
				this.scrollTop = $(window).scrollTop();
				this.scrollLeft = $(window).scrollLeft();
				this.scrollRight = this.scrollLeft + $(window).width();
				this.updatePosition()
			},
			getSize: function (content) {
				this.sizetip.html(content).appendTo(this.container);
				this.width = this.sizetip.width() + 1;
				this.height = this.sizetip.height();
				this.sizetip.remove()
			},
			setContent: function (content) {
				if (!content) {
					this.tooltip.css("visibility", "hidden");
					this.hidden = true;
					return
				}
				this.getSize(content);
				this.tooltip.html(content).css({
					width: this.width,
					height: this.height,
					visibility: "visible"
				});
				if (this.hidden) {
					this.hidden = false;
					this.updatePosition()
				}
			},
			updatePosition: function (x, y) {
				if (x === undefined) {
					if (this.mousex === undefined) {
						return
					}
					x = this.mousex - this.offsetLeft;
					y = this.mousey - this.offsetTop
				} else {
					this.mousex = x = x - this.offsetLeft;
					this.mousey = y = y - this.offsetTop
				}
				if (!this.height || !this.width || this.hidden) {
					return
				}
				y -= this.height + this.tooltipOffsetY;
				x += this.tooltipOffsetX;
				if (y < this.scrollTop) {
					y = this.scrollTop
				}
				if (x < this.scrollLeft) {
					x = this.scrollLeft
				} else if (x + this.width > this.scrollRight) {
					x = this.scrollRight - this.width
				}
				this.tooltip.css({
					left: x,
					top: y
				})
			},
			remove: function () {
				this.tooltip.remove();
				this.sizetip.remove();
				this.sizetip = this.tooltip = undefined;
				$(window).unbind("resize.jqs scroll.jqs")
			}
		});
		initStyles = function () {
			addCSS(defaultStyles)
		};
		$(initStyles);
		pending = [];
		$.fn.sparkline = function (userValues, userOptions) {
			return this.each(function () {
				var options = new $.fn.sparkline.options(this, userOptions),
					$this = $(this),
					render, i;
				render = function () {
					var values, width, height, tmp, mhandler, sp, vals;
					if (userValues === "html" || userValues === undefined) {
						vals = this.getAttribute(options.get("tagValuesAttribute"));
						if (vals === undefined || vals === null) {
							vals = $this.html()
						}
						values = vals.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")
					} else {
						values = userValues
					}
					width = options.get("width") === "auto" ? values.length * options.get("defaultPixelsPerValue") : options.get("width");
					if (options.get("height") === "auto") {
						if (!options.get("composite") || !$.data(this, "_jqs_vcanvas")) {
							tmp = document.createElement("span");
							tmp.innerHTML = "a";
							$this.html(tmp);
							height = $(tmp).innerHeight() || $(tmp).height();
							$(tmp).remove();
							tmp = null
						}
					} else {
						height = options.get("height")
					}
					if (!options.get("disableInteraction")) {
						mhandler = $.data(this, "_jqs_mhandler");
						if (!mhandler) {
							mhandler = new MouseHandler(this, options);
							$.data(this, "_jqs_mhandler", mhandler)
						} else if (!options.get("composite")) {
							mhandler.reset()
						}
					} else {
						mhandler = false
					}
					if (options.get("composite") && !$.data(this, "_jqs_vcanvas")) {
						if (!$.data(this, "_jqs_errnotify")) {
							alert("Attempted to attach a composite sparkline to an element with no existing sparkline");
							$.data(this, "_jqs_errnotify", true)
						}
						return
					}
					sp = new($.fn.sparkline[options.get("type")])(this, values, options, width, height);
					sp.render();
					if (mhandler) {
						mhandler.registerSparkline(sp)
					}
				};
				if ($(this).html() && !options.get("disableHiddenCheck") && $(this).is(":hidden") || !$(this).parents("body").length) {
					if (!options.get("composite") && $.data(this, "_jqs_pending")) {
						for (i = pending.length; i; i--) {
							if (pending[i - 1][0] == this) {
								pending.splice(i - 1, 1)
							}
						}
					}
					pending.push([this, render]);
					$.data(this, "_jqs_pending", true)
				} else {
					render.call(this)
				}
			})
		};
		$.fn.sparkline.defaults = getDefaults();
		$.sparkline_display_visible = function () {
			var el, i, pl;
			var done = [];
			for (i = 0, pl = pending.length; i < pl; i++) {
				el = pending[i][0];
				if ($(el).is(":visible") && !$(el).parents().is(":hidden")) {
					pending[i][1].call(el);
					$.data(pending[i][0], "_jqs_pending", false);
					done.push(i)
				} else if (!$(el).closest("html").length && !$.data(el, "_jqs_pending")) {
					$.data(pending[i][0], "_jqs_pending", false);
					done.push(i)
				}
			}
			for (i = done.length; i; i--) {
				pending.splice(done[i - 1], 1)
			}
		};
		$.fn.sparkline.options = createClass({
			init: function (tag, userOptions) {
				var extendedOptions, defaults, base, tagOptionType;
				this.userOptions = userOptions = userOptions || {};
				this.tag = tag;
				this.tagValCache = {};
				defaults = $.fn.sparkline.defaults;
				base = defaults.common;
				this.tagOptionsPrefix = userOptions.enableTagOptions && (userOptions.tagOptionsPrefix || base.tagOptionsPrefix);
				tagOptionType = this.getTagSetting("type");
				if (tagOptionType === UNSET_OPTION) {
					extendedOptions = defaults[userOptions.type || base.type]
				} else {
					extendedOptions = defaults[tagOptionType]
				}
				this.mergedOptions = $.extend({}, base, extendedOptions, userOptions)
			},
			getTagSetting: function (key) {
				var prefix = this.tagOptionsPrefix,
					val, i, pairs, keyval;
				if (prefix === false || prefix === undefined) {
					return UNSET_OPTION
				}
				if (this.tagValCache.hasOwnProperty(key)) {
					val = this.tagValCache.key
				} else {
					val = this.tag.getAttribute(prefix + key);
					if (val === undefined || val === null) {
						val = UNSET_OPTION
					} else if (val.substr(0, 1) === "[") {
						val = val.substr(1, val.length - 2).split(",");
						for (i = val.length; i--;) {
							val[i] = normalizeValue(val[i].replace(/(^\s*)|(\s*$)/g, ""))
						}
					} else if (val.substr(0, 1) === "{") {
						pairs = val.substr(1, val.length - 2).split(",");
						val = {};
						for (i = pairs.length; i--;) {
							keyval = pairs[i].split(":", 2);
							val[keyval[0].replace(/(^\s*)|(\s*$)/g, "")] = normalizeValue(keyval[1].replace(/(^\s*)|(\s*$)/g, ""))
						}
					} else {
						val = normalizeValue(val)
					}
					this.tagValCache.key = val
				}
				return val
			},
			get: function (key, defaultval) {
				var tagOption = this.getTagSetting(key),
					result;
				if (tagOption !== UNSET_OPTION) {
					return tagOption
				}
				return (result = this.mergedOptions[key]) === undefined ? defaultval : result
			}
		});
		$.fn.sparkline._base = createClass({
			disabled: false,
			init: function (el, values, options, width, height) {
				this.el = el;
				this.$el = $(el);
				this.values = values;
				this.options = options;
				this.width = width;
				this.height = height;
				this.currentRegion = undefined
			},
			initTarget: function () {
				var interactive = !this.options.get("disableInteraction");
				if (!(this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), interactive))) {
					this.disabled = true
				} else {
					this.canvasWidth = this.target.pixelWidth;
					this.canvasHeight = this.target.pixelHeight
				}
			},
			render: function () {
				if (this.disabled) {
					this.el.innerHTML = "";
					return false
				}
				return true
			},
			getRegion: function (x, y) {},
			setRegionHighlight: function (el, x, y) {
				var currentRegion = this.currentRegion,
					highlightEnabled = !this.options.get("disableHighlight"),
					newRegion;
				if (x > this.canvasWidth || y > this.canvasHeight || x < 0 || y < 0) {
					return null
				}
				newRegion = this.getRegion(el, x, y);
				if (currentRegion !== newRegion) {
					if (currentRegion !== undefined && highlightEnabled) {
						this.removeHighlight()
					}
					this.currentRegion = newRegion;
					if (newRegion !== undefined && highlightEnabled) {
						this.renderHighlight()
					}
					return true
				}
				return false
			},
			clearRegionHighlight: function () {
				if (this.currentRegion !== undefined) {
					this.removeHighlight();
					this.currentRegion = undefined;
					return true
				}
				return false
			},
			renderHighlight: function () {
				this.changeHighlight(true)
			},
			removeHighlight: function () {
				this.changeHighlight(false)
			},
			changeHighlight: function (highlight) {},
			getCurrentRegionTooltip: function () {
				var options = this.options,
					header = "",
					entries = [],
					fields, formats, formatlen, fclass, text, i, showFields, showFieldsKey, newFields, fv, formatter, format, fieldlen, j;
				if (this.currentRegion === undefined) {
					return ""
				}
				fields = this.getCurrentRegionFields();
				formatter = options.get("tooltipFormatter");
				if (formatter) {
					return formatter(this, options, fields)
				}
				if (options.get("tooltipChartTitle")) {
					header += '<div class="jqs jqstitle">' + options.get("tooltipChartTitle") + "</div>\n"
				}
				formats = this.options.get("tooltipFormat");
				if (!formats) {
					return ""
				}
				if (!$.isArray(formats)) {
					formats = [formats]
				}
				if (!$.isArray(fields)) {
					fields = [fields]
				}
				showFields = this.options.get("tooltipFormatFieldlist");
				showFieldsKey = this.options.get("tooltipFormatFieldlistKey");
				if (showFields && showFieldsKey) {
					newFields = [];
					for (i = fields.length; i--;) {
						fv = fields[i][showFieldsKey];
						if ((j = $.inArray(fv, showFields)) != -1) {
							newFields[j] = fields[i]
						}
					}
					fields = newFields
				}
				formatlen = formats.length;
				fieldlen = fields.length;
				for (i = 0; i < formatlen; i++) {
					format = formats[i];
					if (typeof format === "string") {
						format = new SPFormat(format)
					}
					fclass = format.fclass || "jqsfield";
					for (j = 0; j < fieldlen; j++) {
						if (!fields[j].isNull || !options.get("tooltipSkipNull")) {
							$.extend(fields[j], {
								prefix: options.get("tooltipPrefix"),
								suffix: options.get("tooltipSuffix")
							});
							text = format.render(fields[j], options.get("tooltipValueLookups"), options);
							entries.push('<div class="' + fclass + '">' + text + "</div>")
						}
					}
				}
				if (entries.length) {
					return header + entries.join("\n")
				}
				return ""
			},
			getCurrentRegionFields: function () {},
			calcHighlightColor: function (color, options) {
				var highlightColor = options.get("highlightColor"),
					lighten = options.get("highlightLighten"),
					parse, mult, rgbnew, i;
				if (highlightColor) {
					return highlightColor
				}
				if (lighten) {
					parse = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);
					if (parse) {
						rgbnew = [];
						mult = color.length === 4 ? 16 : 1;
						for (i = 0; i < 3; i++) {
							rgbnew[i] = clipval(Math.round(parseInt(parse[i + 1], 16) * mult * lighten), 0, 255)
						}
						return "rgb(" + rgbnew.join(",") + ")"
					}
				}
				return color
			}
		});
		barHighlightMixin = {
			changeHighlight: function (highlight) {
				var currentRegion = this.currentRegion,
					target = this.target,
					shapeids = this.regionShapes[currentRegion],
					newShapes;
				if (shapeids) {
					newShapes = this.renderRegion(currentRegion, highlight);
					if ($.isArray(newShapes) || $.isArray(shapeids)) {
						target.replaceWithShapes(shapeids, newShapes);
						this.regionShapes[currentRegion] = $.map(newShapes, function (newShape) {
							return newShape.id
						})
					} else {
						target.replaceWithShape(shapeids, newShapes);
						this.regionShapes[currentRegion] = newShapes.id
					}
				}
			},
			render: function () {
				var values = this.values,
					target = this.target,
					regionShapes = this.regionShapes,
					shapes, ids, i, j;
				if (!this.cls._super.render.call(this)) {
					return
				}
				for (i = values.length; i--;) {
					shapes = this.renderRegion(i);
					if (shapes) {
						if ($.isArray(shapes)) {
							ids = [];
							for (j = shapes.length; j--;) {
								shapes[j].append();
								ids.push(shapes[j].id)
							}
							regionShapes[i] = ids
						} else {
							shapes.append();
							regionShapes[i] = shapes.id
						}
					} else {
						regionShapes[i] = null
					}
				}
				target.render()
			}
		};
		$.fn.sparkline.line = line = createClass($.fn.sparkline._base, {
			type: "line",
			init: function (el, values, options, width, height) {
				line._super.init.call(this, el, values, options, width, height);
				this.vertices = [];
				this.regionMap = [];
				this.xvalues = [];
				this.yvalues = [];
				this.yminmax = [];
				this.hightlightSpotId = null;
				this.lastShapeId = null;
				this.initTarget()
			},
			getRegion: function (el, x, y) {
				var i, regionMap = this.regionMap;
				for (i = regionMap.length; i--;) {
					if (regionMap[i] !== null && x >= regionMap[i][0] && x <= regionMap[i][1]) {
						return regionMap[i][2]
					}
				}
				return undefined
			},
			getCurrentRegionFields: function () {
				var currentRegion = this.currentRegion;
				return {
					isNull: this.yvalues[currentRegion] === null,
					x: this.xvalues[currentRegion],
					y: this.yvalues[currentRegion],
					color: this.options.get("lineColor"),
					fillColor: this.options.get("fillColor"),
					offset: currentRegion
				}
			},
			renderHighlight: function () {
				var currentRegion = this.currentRegion,
					target = this.target,
					vertex = this.vertices[currentRegion],
					options = this.options,
					spotRadius = options.get("spotRadius"),
					highlightSpotColor = options.get("highlightSpotColor"),
					highlightLineColor = options.get("highlightLineColor"),
					highlightSpot, highlightLine;
				if (!vertex) {
					return
				}
				if (spotRadius && highlightSpotColor) {
					highlightSpot = target.drawCircle(vertex[0], vertex[1], spotRadius, undefined, highlightSpotColor);
					this.highlightSpotId = highlightSpot.id;
					target.insertAfterShape(this.lastShapeId, highlightSpot)
				}
				if (highlightLineColor) {
					highlightLine = target.drawLine(vertex[0], this.canvasTop, vertex[0], this.canvasTop + this.canvasHeight, highlightLineColor);
					this.highlightLineId = highlightLine.id;
					target.insertAfterShape(this.lastShapeId, highlightLine)
				}
			},
			removeHighlight: function () {
				var target = this.target;
				if (this.highlightSpotId) {
					target.removeShapeId(this.highlightSpotId);
					this.highlightSpotId = null
				}
				if (this.highlightLineId) {
					target.removeShapeId(this.highlightLineId);
					this.highlightLineId = null
				}
			},
			scanValues: function () {
				var values = this.values,
					valcount = values.length,
					xvalues = this.xvalues,
					yvalues = this.yvalues,
					yminmax = this.yminmax,
					i, val, isStr, isArray, sp;
				for (i = 0; i < valcount; i++) {
					val = values[i];
					isStr = typeof values[i] === "string";
					isArray = typeof values[i] === "object" && values[i] instanceof Array;
					sp = isStr && values[i].split(":");
					if (isStr && sp.length === 2) {
						xvalues.push(Number(sp[0]));
						yvalues.push(Number(sp[1]));
						yminmax.push(Number(sp[1]))
					} else if (isArray) {
						xvalues.push(val[0]);
						yvalues.push(val[1]);
						yminmax.push(val[1])
					} else {
						xvalues.push(i);
						if (values[i] === null || values[i] === "null") {
							yvalues.push(null)
						} else {
							yvalues.push(Number(val));
							yminmax.push(Number(val))
						}
					}
				}
				if (this.options.get("xvalues")) {
					xvalues = this.options.get("xvalues")
				}
				this.maxy = this.maxyorg = Math.max.apply(Math, yminmax);
				this.miny = this.minyorg = Math.min.apply(Math, yminmax);
				this.maxx = Math.max.apply(Math, xvalues);
				this.minx = Math.min.apply(Math, xvalues);
				this.xvalues = xvalues;
				this.yvalues = yvalues;
				this.yminmax = yminmax
			},
			processRangeOptions: function () {
				var options = this.options,
					normalRangeMin = options.get("normalRangeMin"),
					normalRangeMax = options.get("normalRangeMax");
				if (normalRangeMin !== undefined) {
					if (normalRangeMin < this.miny) {
						this.miny = normalRangeMin
					}
					if (normalRangeMax > this.maxy) {
						this.maxy = normalRangeMax
					}
				}
				if (options.get("chartRangeMin") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMin") < this.miny)) {
					this.miny = options.get("chartRangeMin")
				}
				if (options.get("chartRangeMax") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMax") > this.maxy)) {
					this.maxy = options.get("chartRangeMax")
				}
				if (options.get("chartRangeMinX") !== undefined && (options.get("chartRangeClipX") || options.get("chartRangeMinX") < this.minx)) {
					this.minx = options.get("chartRangeMinX")
				}
				if (options.get("chartRangeMaxX") !== undefined && (options.get("chartRangeClipX") || options.get("chartRangeMaxX") > this.maxx)) {
					this.maxx = options.get("chartRangeMaxX")
				}
			},
			drawNormalRange: function (canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey) {
				var normalRangeMin = this.options.get("normalRangeMin"),
					normalRangeMax = this.options.get("normalRangeMax"),
					ytop = canvasTop + Math.round(canvasHeight - canvasHeight * ((normalRangeMax - this.miny) / rangey)),
					height = Math.round(canvasHeight * (normalRangeMax - normalRangeMin) / rangey);
				this.target.drawRect(canvasLeft, ytop, canvasWidth, height, undefined, this.options.get("normalRangeColor")).append()
			},
			render: function () {
				var options = this.options,
					target = this.target,
					canvasWidth = this.canvasWidth,
					canvasHeight = this.canvasHeight,
					vertices = this.vertices,
					spotRadius = options.get("spotRadius"),
					regionMap = this.regionMap,
					rangex, rangey, yvallast, canvasTop, canvasLeft, vertex, path, paths, x, y, xnext, xpos, xposnext, last, next, yvalcount, lineShapes, fillShapes, plen, valueSpots, hlSpotsEnabled, color, xvalues, yvalues, i;
				if (!line._super.render.call(this)) {
					return
				}
				this.scanValues();
				this.processRangeOptions();
				xvalues = this.xvalues;
				yvalues = this.yvalues;
				if (!this.yminmax.length || this.yvalues.length < 2) {
					return
				}
				canvasTop = canvasLeft = 0;
				rangex = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx;
				rangey = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny;
				yvallast = this.yvalues.length - 1;
				if (spotRadius && (canvasWidth < spotRadius * 4 || canvasHeight < spotRadius * 4)) {
					spotRadius = 0
				}
				if (spotRadius) {
					hlSpotsEnabled = options.get("highlightSpotColor") && !options.get("disableInteraction");
					if (hlSpotsEnabled || options.get("minSpotColor") || options.get("spotColor") && yvalues[yvallast] === this.miny) {
						canvasHeight -= Math.ceil(spotRadius)
					}
					if (hlSpotsEnabled || options.get("maxSpotColor") || options.get("spotColor") && yvalues[yvallast] === this.maxy) {
						canvasHeight -= Math.ceil(spotRadius);
						canvasTop += Math.ceil(spotRadius)
					}
					if (hlSpotsEnabled || (options.get("minSpotColor") || options.get("maxSpotColor")) && (yvalues[0] === this.miny || yvalues[0] === this.maxy)) {
						canvasLeft += Math.ceil(spotRadius);
						canvasWidth -= Math.ceil(spotRadius)
					}
					if (hlSpotsEnabled || options.get("spotColor") || (options.get("minSpotColor") || options.get("maxSpotColor") && (yvalues[yvallast] === this.miny || yvalues[yvallast] === this.maxy))) {
						canvasWidth -= Math.ceil(spotRadius)
					}
				}
				canvasHeight--;
				if (options.get("normalRangeMin") !== undefined && !options.get("drawNormalOnTop")) {
					this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey)
				}
				path = [];
				paths = [path];
				last = next = null;
				yvalcount = yvalues.length;
				for (i = 0; i < yvalcount; i++) {
					x = xvalues[i];
					xnext = xvalues[i + 1];
					y = yvalues[i];
					xpos = canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex));
					xposnext = i < yvalcount - 1 ? canvasLeft + Math.round((xnext - this.minx) * (canvasWidth / rangex)) : canvasWidth;
					next = xpos + (xposnext - xpos) / 2;
					regionMap[i] = [last || 0, next, i];
					last = next;
					if (y === null) {
						if (i) {
							if (yvalues[i - 1] !== null) {
								path = [];
								paths.push(path)
							}
							vertices.push(null)
						}
					} else {
						if (y < this.miny) {
							y = this.miny
						}
						if (y > this.maxy) {
							y = this.maxy
						}
						if (!path.length) {
							path.push([xpos, canvasTop + canvasHeight])
						}
						vertex = [xpos, canvasTop + Math.round(canvasHeight - canvasHeight * ((y - this.miny) / rangey))];
						path.push(vertex);
						vertices.push(vertex)
					}
				}
				lineShapes = [];
				fillShapes = [];
				plen = paths.length;
				for (i = 0; i < plen; i++) {
					path = paths[i];
					if (path.length) {
						if (options.get("fillColor")) {
							path.push([path[path.length - 1][0], canvasTop + canvasHeight]);
							fillShapes.push(path.slice(0));
							path.pop()
						}
						if (path.length > 2) {
							path[0] = [path[0][0], path[1][1]]
						}
						lineShapes.push(path)
					}
				}
				plen = fillShapes.length;
				for (i = 0; i < plen; i++) {
					target.drawShape(fillShapes[i], options.get("fillColor"), options.get("fillColor")).append()
				}
				if (options.get("normalRangeMin") !== undefined && options.get("drawNormalOnTop")) {
					this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey)
				}
				plen = lineShapes.length;
				for (i = 0; i < plen; i++) {
					target.drawShape(lineShapes[i], options.get("lineColor"), undefined, options.get("lineWidth")).append()
				}
				if (spotRadius && options.get("valueSpots")) {
					valueSpots = options.get("valueSpots");
					if (valueSpots.get === undefined) {
						valueSpots = new RangeMap(valueSpots)
					}
					for (i = 0; i < yvalcount; i++) {
						color = valueSpots.get(yvalues[i]);
						if (color) {
							target.drawCircle(canvasLeft + Math.round((xvalues[i] - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((yvalues[i] - this.miny) / rangey)), spotRadius, undefined, color).append()
						}
					}
				}
				if (spotRadius && options.get("spotColor") && yvalues[yvallast] !== null) {
					target.drawCircle(canvasLeft + Math.round((xvalues[xvalues.length - 1] - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((yvalues[yvallast] - this.miny) / rangey)), spotRadius, undefined, options.get("spotColor")).append()
				}
				if (this.maxy !== this.minyorg) {
					if (spotRadius && options.get("minSpotColor")) {
						x = xvalues[$.inArray(this.minyorg, yvalues)];
						target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((this.minyorg - this.miny) / rangey)), spotRadius, undefined, options.get("minSpotColor")).append()
					}
					if (spotRadius && options.get("maxSpotColor")) {
						x = xvalues[$.inArray(this.maxyorg, yvalues)];
						target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((this.maxyorg - this.miny) / rangey)), spotRadius, undefined, options.get("maxSpotColor")).append()
					}
				}
				this.lastShapeId = target.getLastShapeId();
				this.canvasTop = canvasTop;
				target.render()
			}
		});
		$.fn.sparkline.bar = bar = createClass($.fn.sparkline._base, barHighlightMixin, {
			type: "bar",
			init: function (el, values, options, width, height) {
				var barWidth = parseInt(options.get("barWidth"), 10),
					barSpacing = parseInt(options.get("barSpacing"), 10),
					chartRangeMin = options.get("chartRangeMin"),
					chartRangeMax = options.get("chartRangeMax"),
					chartRangeClip = options.get("chartRangeClip"),
					stackMin = Infinity,
					stackMax = -Infinity,
					isStackString, groupMin, groupMax, stackRanges, numValues, i, vlen, range, zeroAxis, xaxisOffset, min, max, clipMin, clipMax, stacked, vlist, j, slen, svals, val, yoffset, yMaxCalc, canvasHeightEf;
				bar._super.init.call(this, el, values, options, width, height);
				for (i = 0, vlen = values.length; i < vlen; i++) {
					val = values[i];
					isStackString = typeof val === "string" && val.indexOf(":") > -1;
					if (isStackString || $.isArray(val)) {
						stacked = true;
						if (isStackString) {
							val = values[i] = normalizeValues(val.split(":"));

						}
						val = remove(val, null);
						groupMin = Math.min.apply(Math, val);
						groupMax = Math.max.apply(Math, val);
						if (groupMin < stackMin) {
							stackMin = groupMin
						}
						if (groupMax > stackMax) {
							stackMax = groupMax
						}
					}
				}
				this.stacked = stacked;
				this.regionShapes = {};
				this.barWidth = barWidth;
				this.barSpacing = barSpacing;
				this.totalBarWidth = barWidth + barSpacing;
				this.width = width = values.length * barWidth + (values.length - 1) * barSpacing;
				this.initTarget();
				if (chartRangeClip) {
					clipMin = chartRangeMin === undefined ? -Infinity : chartRangeMin;
					clipMax = chartRangeMax === undefined ? Infinity : chartRangeMax
				}
				numValues = [];
				stackRanges = stacked ? [] : numValues;
				var stackTotals = [];
				var stackRangesNeg = [];
				for (i = 0, vlen = values.length; i < vlen; i++) {
					if (stacked) {
						vlist = values[i];
						values[i] = svals = [];
						stackTotals[i] = 0;
						stackRanges[i] = stackRangesNeg[i] = 0;
						for (j = 0, slen = vlist.length; j < slen; j++) {
							val = svals[j] = chartRangeClip ? clipval(vlist[j], clipMin, clipMax) : vlist[j];
							if (val !== null) {
								if (val > 0) {
									stackTotals[i] += val
								}
								if (stackMin < 0 && stackMax > 0) {
									if (val < 0) {
										stackRangesNeg[i] += Math.abs(val)
									} else {
										stackRanges[i] += val
									}
								} else {
									stackRanges[i] += Math.abs(val - (val < 0 ? stackMax : stackMin))
								}
								numValues.push(val)
							}
						}
					} else {
						val = chartRangeClip ? clipval(values[i], clipMin, clipMax) : values[i];
						val = values[i] = normalizeValue(val);
						if (val !== null) {
							numValues.push(val)
						}
					}
				}
				this.max = max = Math.max.apply(Math, numValues);
				this.min = min = Math.min.apply(Math, numValues);
				this.stackMax = stackMax = stacked ? Math.max.apply(Math, stackTotals) : max;
				this.stackMin = stackMin = stacked ? Math.min.apply(Math, numValues) : min;
				if (options.get("chartRangeMin") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMin") < min)) {
					min = options.get("chartRangeMin")
				}
				if (options.get("chartRangeMax") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMax") > max)) {
					max = options.get("chartRangeMax")
				}
				this.zeroAxis = zeroAxis = options.get("zeroAxis", true);
				if (min <= 0 && max >= 0 && zeroAxis) {
					xaxisOffset = 0
				} else if (zeroAxis == false) {
					xaxisOffset = min
				} else if (min > 0) {
					xaxisOffset = min
				} else {
					xaxisOffset = max
				}
				this.xaxisOffset = xaxisOffset;
				range = stacked ? Math.max.apply(Math, stackRanges) + Math.max.apply(Math, stackRangesNeg) : max - min;
				this.canvasHeightEf = zeroAxis && min < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1;
				if (min < xaxisOffset) {
					yMaxCalc = stacked && max >= 0 ? stackMax : max;
					yoffset = (yMaxCalc - xaxisOffset) / range * this.canvasHeight;
					if (yoffset !== Math.ceil(yoffset)) {
						this.canvasHeightEf -= 2;
						yoffset = Math.ceil(yoffset)
					}
				} else {
					yoffset = this.canvasHeight
				}
				this.yoffset = yoffset;
				if ($.isArray(options.get("colorMap"))) {
					this.colorMapByIndex = options.get("colorMap");
					this.colorMapByValue = null
				} else {
					this.colorMapByIndex = null;
					this.colorMapByValue = options.get("colorMap");
					if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
						this.colorMapByValue = new RangeMap(this.colorMapByValue)
					}
				}
				this.range = range
			},
			getRegion: function (el, x, y) {
				var result = Math.floor(x / this.totalBarWidth);
				return result < 0 || result >= this.values.length ? undefined : result
			},
			getCurrentRegionFields: function () {
				var currentRegion = this.currentRegion,
					values = ensureArray(this.values[currentRegion]),
					result = [],
					value, i;
				for (i = values.length; i--;) {
					value = values[i];
					result.push({
						isNull: value === null,
						value: value,
						color: this.calcColor(i, value, currentRegion),
						offset: currentRegion
					})
				}
				return result
			},
			calcColor: function (stacknum, value, valuenum) {
				var colorMapByIndex = this.colorMapByIndex,
					colorMapByValue = this.colorMapByValue,
					options = this.options,
					color, newColor;
				if (this.stacked) {
					color = options.get("stackedBarColor")
				} else {
					color = value < 0 ? options.get("negBarColor") : options.get("barColor")
				}
				if (value === 0 && options.get("zeroColor") !== undefined) {
					color = options.get("zeroColor")
				}
				if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
					color = newColor
				} else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
					color = colorMapByIndex[valuenum]
				}
				return $.isArray(color) ? color[stacknum % color.length] : color
			},
			renderRegion: function (valuenum, highlight) {
				var vals = this.values[valuenum],
					options = this.options,
					xaxisOffset = this.xaxisOffset,
					result = [],
					range = this.range,
					stacked = this.stacked,
					target = this.target,
					x = valuenum * this.totalBarWidth,
					canvasHeightEf = this.canvasHeightEf,
					yoffset = this.yoffset,
					y, height, color, isNull, yoffsetNeg, i, valcount, val, minPlotted, allMin;
				vals = $.isArray(vals) ? vals : [vals];
				valcount = vals.length;
				val = vals[0];
				isNull = all(null, vals);
				allMin = all(xaxisOffset, vals, true);
				if (isNull) {
					if (options.get("nullColor")) {
						color = highlight ? options.get("nullColor") : this.calcHighlightColor(options.get("nullColor"), options);
						y = yoffset > 0 ? yoffset - 1 : yoffset;
						return target.drawRect(x, y, this.barWidth - 1, 0, color, color)
					} else {
						return undefined
					}
				}
				yoffsetNeg = yoffset;
				for (i = 0; i < valcount; i++) {
					val = vals[i];
					if (stacked && val === xaxisOffset) {
						if (!allMin || minPlotted) {
							continue
						}
						minPlotted = true
					}
					if (range > 0) {
						height = Math.floor(canvasHeightEf * (Math.abs(val - xaxisOffset) / range)) + 1
					} else {
						height = 1
					}
					if (val < xaxisOffset || val === xaxisOffset && yoffset === 0) {
						y = yoffsetNeg;
						yoffsetNeg += height
					} else {
						y = yoffset - height;
						yoffset -= height
					}
					color = this.calcColor(i, val, valuenum);
					if (highlight) {
						color = this.calcHighlightColor(color, options)
					}
					result.push(target.drawRect(x, y, this.barWidth - 1, height - 1, color, color))
				}
				if (result.length === 1) {
					return result[0]
				}
				return result
			}
		});
		$.fn.sparkline.tristate = tristate = createClass($.fn.sparkline._base, barHighlightMixin, {
			type: "tristate",
			init: function (el, values, options, width, height) {
				var barWidth = parseInt(options.get("barWidth"), 10),
					barSpacing = parseInt(options.get("barSpacing"), 10);
				tristate._super.init.call(this, el, values, options, width, height);
				this.regionShapes = {};
				this.barWidth = barWidth;
				this.barSpacing = barSpacing;
				this.totalBarWidth = barWidth + barSpacing;
				this.values = $.map(values, Number);
				this.width = width = values.length * barWidth + (values.length - 1) * barSpacing;
				if ($.isArray(options.get("colorMap"))) {
					this.colorMapByIndex = options.get("colorMap");
					this.colorMapByValue = null
				} else {
					this.colorMapByIndex = null;
					this.colorMapByValue = options.get("colorMap");
					if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
						this.colorMapByValue = new RangeMap(this.colorMapByValue)
					}
				}
				this.initTarget()
			},
			getRegion: function (el, x, y) {
				return Math.floor(x / this.totalBarWidth)
			},
			getCurrentRegionFields: function () {
				var currentRegion = this.currentRegion;
				return {
					isNull: this.values[currentRegion] === undefined,
					value: this.values[currentRegion],
					color: this.calcColor(this.values[currentRegion], currentRegion),
					offset: currentRegion
				}
			},
			calcColor: function (value, valuenum) {
				var values = this.values,
					options = this.options,
					colorMapByIndex = this.colorMapByIndex,
					colorMapByValue = this.colorMapByValue,
					color, newColor;
				if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
					color = newColor
				} else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
					color = colorMapByIndex[valuenum]
				} else if (values[valuenum] < 0) {
					color = options.get("negBarColor")
				} else if (values[valuenum] > 0) {
					color = options.get("posBarColor")
				} else {
					color = options.get("zeroBarColor")
				}
				return color
			},
			renderRegion: function (valuenum, highlight) {
				var values = this.values,
					options = this.options,
					target = this.target,
					canvasHeight, height, halfHeight, x, y, color;
				canvasHeight = target.pixelHeight;
				halfHeight = Math.round(canvasHeight / 2);
				x = valuenum * this.totalBarWidth;
				if (values[valuenum] < 0) {
					y = halfHeight;
					height = halfHeight - 1
				} else if (values[valuenum] > 0) {
					y = 0;
					height = halfHeight - 1
				} else {
					y = halfHeight - 1;
					height = 2
				}
				color = this.calcColor(values[valuenum], valuenum);
				if (color === null) {
					return
				}
				if (highlight) {
					color = this.calcHighlightColor(color, options)
				}
				return target.drawRect(x, y, this.barWidth - 1, height - 1, color, color)
			}
		});
		$.fn.sparkline.discrete = discrete = createClass($.fn.sparkline._base, barHighlightMixin, {
			type: "discrete",
			init: function (el, values, options, width, height) {
				discrete._super.init.call(this, el, values, options, width, height);
				this.regionShapes = {};
				this.values = values = $.map(values, Number);
				this.min = Math.min.apply(Math, values);
				this.max = Math.max.apply(Math, values);
				this.range = this.max - this.min;
				this.width = width = options.get("width") === "auto" ? values.length * 2 : this.width;
				this.interval = Math.floor(width / values.length);
				this.itemWidth = width / values.length;
				if (options.get("chartRangeMin") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMin") < this.min)) {
					this.min = options.get("chartRangeMin")
				}
				if (options.get("chartRangeMax") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMax") > this.max)) {
					this.max = options.get("chartRangeMax")
				}
				this.initTarget();
				if (this.target) {
					this.lineHeight = options.get("lineHeight") === "auto" ? Math.round(this.canvasHeight * .3) : options.get("lineHeight")
				}
			},
			getRegion: function (el, x, y) {
				return Math.floor(x / this.itemWidth)
			},
			getCurrentRegionFields: function () {
				var currentRegion = this.currentRegion;
				return {
					isNull: this.values[currentRegion] === undefined,
					value: this.values[currentRegion],
					offset: currentRegion
				}
			},
			renderRegion: function (valuenum, highlight) {
				var values = this.values,
					options = this.options,
					min = this.min,
					max = this.max,
					range = this.range,
					interval = this.interval,
					target = this.target,
					canvasHeight = this.canvasHeight,
					lineHeight = this.lineHeight,
					pheight = canvasHeight - lineHeight,
					ytop, val, color, x;
				val = clipval(values[valuenum], min, max);
				x = valuenum * interval;
				ytop = Math.round(pheight - pheight * ((val - min) / range));
				color = options.get("thresholdColor") && val < options.get("thresholdValue") ? options.get("thresholdColor") : options.get("lineColor");
				if (highlight) {
					color = this.calcHighlightColor(color, options)
				}
				return target.drawLine(x, ytop, x, ytop + lineHeight, color)
			}
		});
		$.fn.sparkline.bullet = bullet = createClass($.fn.sparkline._base, {
			type: "bullet",
			init: function (el, values, options, width, height) {
				var min, max, vals;
				bullet._super.init.call(this, el, values, options, width, height);
				this.values = values = normalizeValues(values);
				vals = values.slice();
				vals[0] = vals[0] === null ? vals[2] : vals[0];
				vals[1] = values[1] === null ? vals[2] : vals[1];
				min = Math.min.apply(Math, values);
				max = Math.max.apply(Math, values);
				if (options.get("base") === undefined) {
					min = min < 0 ? min : 0
				} else {
					min = options.get("base")
				}
				this.min = min;
				this.max = max;
				this.range = max - min;
				this.shapes = {};
				this.valueShapes = {};
				this.regiondata = {};
				this.width = width = options.get("width") === "auto" ? "4.0em" : width;
				this.target = this.$el.simpledraw(width, height, options.get("composite"));
				if (!values.length) {
					this.disabled = true
				}
				this.initTarget()
			},
			getRegion: function (el, x, y) {
				var shapeid = this.target.getShapeAt(el, x, y);
				return shapeid !== undefined && this.shapes[shapeid] !== undefined ? this.shapes[shapeid] : undefined
			},
			getCurrentRegionFields: function () {
				var currentRegion = this.currentRegion;
				return {
					fieldkey: currentRegion.substr(0, 1),
					value: this.values[currentRegion.substr(1)],
					region: currentRegion
				}
			},
			changeHighlight: function (highlight) {
				var currentRegion = this.currentRegion,
					shapeid = this.valueShapes[currentRegion],
					shape;
				delete this.shapes[shapeid];
				switch (currentRegion.substr(0, 1)) {
					case "r":
						shape = this.renderRange(currentRegion.substr(1), highlight);
						break;
					case "p":
						shape = this.renderPerformance(highlight);
						break;
					case "t":
						shape = this.renderTarget(highlight);
						break
				}
				this.valueShapes[currentRegion] = shape.id;
				this.shapes[shape.id] = currentRegion;
				this.target.replaceWithShape(shapeid, shape)
			},
			renderRange: function (rn, highlight) {
				var rangeval = this.values[rn],
					rangewidth = Math.round(this.canvasWidth * ((rangeval - this.min) / this.range)),
					color = this.options.get("rangeColors")[rn - 2];
				if (highlight) {
					color = this.calcHighlightColor(color, this.options)
				}
				return this.target.drawRect(0, 0, rangewidth - 1, this.canvasHeight - 1, color, color)
			},
			renderPerformance: function (highlight) {
				var perfval = this.values[1],
					perfwidth = Math.round(this.canvasWidth * ((perfval - this.min) / this.range)),
					color = this.options.get("performanceColor");
				if (highlight) {
					color = this.calcHighlightColor(color, this.options)
				}
				return this.target.drawRect(0, Math.round(this.canvasHeight * .3), perfwidth - 1, Math.round(this.canvasHeight * .4) - 1, color, color)
			},
			renderTarget: function (highlight) {
				var targetval = this.values[0],
					x = Math.round(this.canvasWidth * ((targetval - this.min) / this.range) - this.options.get("targetWidth") / 2),
					targettop = Math.round(this.canvasHeight * .1),
					targetheight = this.canvasHeight - targettop * 2,
					color = this.options.get("targetColor");
				if (highlight) {
					color = this.calcHighlightColor(color, this.options)
				}
				return this.target.drawRect(x, targettop, this.options.get("targetWidth") - 1, targetheight - 1, color, color)
			},
			render: function () {
				var vlen = this.values.length,
					target = this.target,
					i, shape;
				if (!bullet._super.render.call(this)) {
					return
				}
				for (i = 2; i < vlen; i++) {
					shape = this.renderRange(i).append();
					this.shapes[shape.id] = "r" + i;
					this.valueShapes["r" + i] = shape.id
				}
				if (this.values[1] !== null) {
					shape = this.renderPerformance().append();
					this.shapes[shape.id] = "p1";
					this.valueShapes.p1 = shape.id
				}
				if (this.values[0] !== null) {
					shape = this.renderTarget().append();
					this.shapes[shape.id] = "t0";
					this.valueShapes.t0 = shape.id
				}
				target.render()
			}
		});
		$.fn.sparkline.pie = pie = createClass($.fn.sparkline._base, {
			type: "pie",
			init: function (el, values, options, width, height) {
				var total = 0,
					i;
				pie._super.init.call(this, el, values, options, width, height);
				this.shapes = {};
				this.valueShapes = {};
				this.values = values = $.map(values, Number);
				if (options.get("width") === "auto") {
					this.width = this.height
				}
				if (values.length > 0) {
					for (i = values.length; i--;) {
						total += values[i]
					}
				}
				this.total = total;
				this.initTarget();
				this.radius = Math.floor(Math.min(this.canvasWidth, this.canvasHeight) / 2)
			},
			getRegion: function (el, x, y) {
				var shapeid = this.target.getShapeAt(el, x, y);
				return shapeid !== undefined && this.shapes[shapeid] !== undefined ? this.shapes[shapeid] : undefined
			},
			getCurrentRegionFields: function () {
				var currentRegion = this.currentRegion;
				return {
					isNull: this.values[currentRegion] === undefined,
					value: this.values[currentRegion],
					percent: this.values[currentRegion] / this.total * 100,
					color: this.options.get("sliceColors")[currentRegion % this.options.get("sliceColors").length],
					offset: currentRegion
				}
			},
			changeHighlight: function (highlight) {
				var currentRegion = this.currentRegion,
					newslice = this.renderSlice(currentRegion, highlight),
					shapeid = this.valueShapes[currentRegion];
				delete this.shapes[shapeid];
				this.target.replaceWithShape(shapeid, newslice);
				this.valueShapes[currentRegion] = newslice.id;
				this.shapes[newslice.id] = currentRegion
			},
			renderSlice: function (valuenum, highlight) {
				var target = this.target,
					options = this.options,
					radius = this.radius,
					borderWidth = options.get("borderWidth"),
					offset = options.get("offset"),
					circle = 2 * Math.PI,
					values = this.values,
					total = this.total,
					next = offset ? 2 * Math.PI * (offset / 360) : 0,
					start, end, i, vlen, color;
				vlen = values.length;
				for (i = 0; i < vlen; i++) {
					start = next;
					end = next;
					if (total > 0) {
						end = next + circle * (values[i] / total)
					}
					if (valuenum === i) {
						color = options.get("sliceColors")[i % options.get("sliceColors").length];
						if (highlight) {
							color = this.calcHighlightColor(color, options)
						}
						return target.drawPieSlice(radius, radius, radius - borderWidth, start, end, undefined, color)
					}
					next = end
				}
			},
			render: function () {
				var target = this.target,
					values = this.values,
					options = this.options,
					radius = this.radius,
					borderWidth = options.get("borderWidth"),
					shape, i;
				if (!pie._super.render.call(this)) {
					return
				}
				if (borderWidth) {
					target.drawCircle(radius, radius, Math.floor(radius - borderWidth / 2), options.get("borderColor"), undefined, borderWidth).append()
				}
				for (i = values.length; i--;) {
					if (values[i]) {
						shape = this.renderSlice(i).append();
						this.valueShapes[i] = shape.id;
						this.shapes[shape.id] = i
					}
				}
				target.render()
			}
		});
		$.fn.sparkline.box = box = createClass($.fn.sparkline._base, {
			type: "box",
			init: function (el, values, options, width, height) {
				box._super.init.call(this, el, values, options, width, height);
				this.values = $.map(values, Number);
				this.width = options.get("width") === "auto" ? "4.0em" : width;
				this.initTarget();
				if (!this.values.length) {
					this.disabled = 1
				}
			},
			getRegion: function () {
				return 1
			},
			getCurrentRegionFields: function () {
				var result = [{
					field: "lq",
					value: this.quartiles[0]
				}, {
					field: "med",
					value: this.quartiles[1]
				}, {
					field: "uq",
					value: this.quartiles[2]
				}];
				if (this.loutlier !== undefined) {
					result.push({
						field: "lo",
						value: this.loutlier
					})
				}
				if (this.routlier !== undefined) {
					result.push({
						field: "ro",
						value: this.routlier
					})
				}
				if (this.lwhisker !== undefined) {
					result.push({
						field: "lw",
						value: this.lwhisker
					})
				}
				if (this.rwhisker !== undefined) {
					result.push({
						field: "rw",
						value: this.rwhisker
					})
				}
				return result
			},
			render: function () {
				var target = this.target,
					values = this.values,
					vlen = values.length,
					options = this.options,
					canvasWidth = this.canvasWidth,
					canvasHeight = this.canvasHeight,
					minValue = options.get("chartRangeMin") === undefined ? Math.min.apply(Math, values) : options.get("chartRangeMin"),
					maxValue = options.get("chartRangeMax") === undefined ? Math.max.apply(Math, values) : options.get("chartRangeMax"),
					canvasLeft = 0,
					lwhisker, loutlier, iqr, q1, q2, q3, rwhisker, routlier, i, size, unitSize;
				if (!box._super.render.call(this)) {
					return
				}
				if (options.get("raw")) {
					if (options.get("showOutliers") && values.length > 5) {
						loutlier = values[0];
						lwhisker = values[1];
						q1 = values[2];
						q2 = values[3];
						q3 = values[4];
						rwhisker = values[5];
						routlier = values[6]
					} else {
						lwhisker = values[0];
						q1 = values[1];
						q2 = values[2];
						q3 = values[3];
						rwhisker = values[4]
					}
				} else {
					values.sort(function (a, b) {
						return a - b
					});
					q1 = quartile(values, 1);
					q2 = quartile(values, 2);
					q3 = quartile(values, 3);
					iqr = q3 - q1;
					if (options.get("showOutliers")) {
						lwhisker = rwhisker = undefined;
						for (i = 0; i < vlen; i++) {
							if (lwhisker === undefined && values[i] > q1 - iqr * options.get("outlierIQR")) {
								lwhisker = values[i]
							}
							if (values[i] < q3 + iqr * options.get("outlierIQR")) {
								rwhisker = values[i]
							}
						}
						loutlier = values[0];
						routlier = values[vlen - 1]
					} else {
						lwhisker = values[0];
						rwhisker = values[vlen - 1]
					}
				}
				this.quartiles = [q1, q2, q3];
				this.lwhisker = lwhisker;
				this.rwhisker = rwhisker;
				this.loutlier = loutlier;
				this.routlier = routlier;
				unitSize = canvasWidth / (maxValue - minValue + 1);
				if (options.get("showOutliers")) {
					canvasLeft = Math.ceil(options.get("spotRadius"));
					canvasWidth -= 2 * Math.ceil(options.get("spotRadius"));
					unitSize = canvasWidth / (maxValue - minValue + 1);
					if (loutlier < lwhisker) {
						target.drawCircle((loutlier - minValue) * unitSize + canvasLeft, canvasHeight / 2, options.get("spotRadius"), options.get("outlierLineColor"), options.get("outlierFillColor")).append()
					}
					if (routlier > rwhisker) {
						target.drawCircle((routlier - minValue) * unitSize + canvasLeft, canvasHeight / 2, options.get("spotRadius"), options.get("outlierLineColor"), options.get("outlierFillColor")).append()
					}
				}
				target.drawRect(Math.round((q1 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * .1), Math.round((q3 - q1) * unitSize), Math.round(canvasHeight * .8), options.get("boxLineColor"), options.get("boxFillColor")).append();
				target.drawLine(Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), Math.round((q1 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), options.get("lineColor")).append();
				target.drawLine(Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 4), Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight - canvasHeight / 4), options.get("whiskerColor")).append();
				target.drawLine(Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), Math.round((q3 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), options.get("lineColor")).append();
				target.drawLine(Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 4), Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight - canvasHeight / 4), options.get("whiskerColor")).append();
				target.drawLine(Math.round((q2 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * .1), Math.round((q2 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * .9), options.get("medianColor")).append();
				if (options.get("target")) {
					size = Math.ceil(options.get("spotRadius"));
					target.drawLine(Math.round((options.get("target") - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2 - size), Math.round((options.get("target") - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2 + size), options.get("targetColor")).append();
					target.drawLine(Math.round((options.get("target") - minValue) * unitSize + canvasLeft - size), Math.round(canvasHeight / 2), Math.round((options.get("target") - minValue) * unitSize + canvasLeft + size), Math.round(canvasHeight / 2), options.get("targetColor")).append()
				}
				target.render()
			}
		});
		VShape = createClass({
			init: function (target, id, type, args) {
				this.target = target;
				this.id = id;
				this.type = type;
				this.args = args
			},
			append: function () {
				this.target.appendShape(this);
				return this
			}
		});
		VCanvas_base = createClass({
			_pxregex: /(\d+)(px)?\s*$/i,
			init: function (width, height, target) {
				if (!width) {
					return
				}
				this.width = width;
				this.height = height;
				this.target = target;
				this.lastShapeId = null;
				if (target[0]) {
					target = target[0]
				}
				$.data(target, "_jqs_vcanvas", this)
			},
			drawLine: function (x1, y1, x2, y2, lineColor, lineWidth) {
				return this.drawShape([
					[x1, y1],
					[x2, y2]
				], lineColor, lineWidth)
			},
			drawShape: function (path, lineColor, fillColor, lineWidth) {
				return this._genShape("Shape", [path, lineColor, fillColor, lineWidth])
			},
			drawCircle: function (x, y, radius, lineColor, fillColor, lineWidth) {
				return this._genShape("Circle", [x, y, radius, lineColor, fillColor, lineWidth])
			},
			drawPieSlice: function (x, y, radius, startAngle, endAngle, lineColor, fillColor) {
				return this._genShape("PieSlice", [x, y, radius, startAngle, endAngle, lineColor, fillColor])
			},
			drawRect: function (x, y, width, height, lineColor, fillColor) {
				return this._genShape("Rect", [x, y, width, height, lineColor, fillColor])
			},
			getElement: function () {
				return this.canvas
			},
			getLastShapeId: function () {
				return this.lastShapeId
			},
			reset: function () {
				alert("reset not implemented")
			},
			_insert: function (el, target) {
				$(target).html(el)
			},
			_calculatePixelDims: function (width, height, canvas) {
				var match;
				match = this._pxregex.exec(height);
				if (match) {
					this.pixelHeight = match[1]
				} else {
					this.pixelHeight = $(canvas).height()
				}
				match = this._pxregex.exec(width);
				if (match) {
					this.pixelWidth = match[1]
				} else {
					this.pixelWidth = $(canvas).width()
				}
			},
			_genShape: function (shapetype, shapeargs) {
				var id = shapeCount++;
				shapeargs.unshift(id);
				return new VShape(this, id, shapetype, shapeargs)
			},
			appendShape: function (shape) {
				alert("appendShape not implemented")
			},
			replaceWithShape: function (shapeid, shape) {
				alert("replaceWithShape not implemented")
			},
			insertAfterShape: function (shapeid, shape) {
				alert("insertAfterShape not implemented")
			},
			removeShapeId: function (shapeid) {
				alert("removeShapeId not implemented")
			},
			getShapeAt: function (el, x, y) {
				alert("getShapeAt not implemented")
			},
			render: function () {
				alert("render not implemented")
			}
		});
		VCanvas_canvas = createClass(VCanvas_base, {
			init: function (width, height, target, interact) {
				VCanvas_canvas._super.init.call(this, width, height, target);
				this.canvas = document.createElement("canvas");
				if (target[0]) {
					target = target[0]
				}
				$.data(target, "_jqs_vcanvas", this);
				$(this.canvas).css({
					display: "inline-block",
					width: width,
					height: height,
					verticalAlign: "top"
				});
				this._insert(this.canvas, target);
				this._calculatePixelDims(width, height, this.canvas);
				this.canvas.width = this.pixelWidth;
				this.canvas.height = this.pixelHeight;
				this.interact = interact;
				this.shapes = {};
				this.shapeseq = [];
				this.currentTargetShapeId = undefined;
				$(this.canvas).css({
					width: this.pixelWidth,
					height: this.pixelHeight
				})
			},
			_getContext: function (lineColor, fillColor, lineWidth) {
				var context = this.canvas.getContext("2d");
				if (lineColor !== undefined) {
					context.strokeStyle = lineColor
				}
				context.lineWidth = lineWidth === undefined ? 1 : lineWidth;
				if (fillColor !== undefined) {
					context.fillStyle = fillColor
				}
				return context
			},
			reset: function () {
				var context = this._getContext();
				context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
				this.shapes = {};
				this.shapeseq = [];
				this.currentTargetShapeId = undefined
			},
			_drawShape: function (shapeid, path, lineColor, fillColor, lineWidth) {
				var context = this._getContext(lineColor, fillColor, lineWidth),
					i, plen;
				context.beginPath();
				context.moveTo(path[0][0] + .5, path[0][1] + .5);
				for (i = 1, plen = path.length; i < plen; i++) {
					context.lineTo(path[i][0] + .5, path[i][1] + .5)
				}
				if (lineColor !== undefined) {
					context.stroke()
				}
				if (fillColor !== undefined) {
					context.fill()
				}
				if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
					this.currentTargetShapeId = shapeid
				}
			},
			_drawCircle: function (shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
				var context = this._getContext(lineColor, fillColor, lineWidth);
				context.beginPath();
				context.arc(x, y, radius, 0, 2 * Math.PI, false);
				if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
					this.currentTargetShapeId = shapeid
				}
				if (lineColor !== undefined) {
					context.stroke()
				}
				if (fillColor !== undefined) {
					context.fill()
				}
			},
			_drawPieSlice: function (shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
				var context = this._getContext(lineColor, fillColor);
				context.beginPath();
				context.moveTo(x, y);
				context.arc(x, y, radius, startAngle, endAngle, false);
				context.lineTo(x, y);
				context.closePath();
				if (lineColor !== undefined) {
					context.stroke()
				}
				if (fillColor) {
					context.fill()
				}
				if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
					this.currentTargetShapeId = shapeid
				}
			},
			_drawRect: function (shapeid, x, y, width, height, lineColor, fillColor) {
				return this._drawShape(shapeid, [
					[x, y],
					[x + width, y],
					[x + width, y + height],
					[x, y + height],
					[x, y]
				], lineColor, fillColor)
			},
			appendShape: function (shape) {
				this.shapes[shape.id] = shape;
				this.shapeseq.push(shape.id);
				this.lastShapeId = shape.id;
				return shape.id
			},
			replaceWithShape: function (shapeid, shape) {
				var shapeseq = this.shapeseq,
					i;
				this.shapes[shape.id] = shape;
				for (i = shapeseq.length; i--;) {
					if (shapeseq[i] == shapeid) {
						shapeseq[i] = shape.id
					}
				}
				delete this.shapes[shapeid]
			},
			replaceWithShapes: function (shapeids, shapes) {
				var shapeseq = this.shapeseq,
					shapemap = {},
					sid, i, first;
				for (i = shapeids.length; i--;) {
					shapemap[shapeids[i]] = true
				}
				for (i = shapeseq.length; i--;) {
					sid = shapeseq[i];
					if (shapemap[sid]) {
						shapeseq.splice(i, 1);
						delete this.shapes[sid];
						first = i
					}
				}
				for (i = shapes.length; i--;) {
					shapeseq.splice(first, 0, shapes[i].id);
					this.shapes[shapes[i].id] = shapes[i]
				}
			},
			insertAfterShape: function (shapeid, shape) {
				var shapeseq = this.shapeseq,
					i;
				for (i = shapeseq.length; i--;) {
					if (shapeseq[i] === shapeid) {
						shapeseq.splice(i + 1, 0, shape.id);
						this.shapes[shape.id] = shape;
						return
					}
				}
			},
			removeShapeId: function (shapeid) {
				var shapeseq = this.shapeseq,
					i;
				for (i = shapeseq.length; i--;) {
					if (shapeseq[i] === shapeid) {
						shapeseq.splice(i, 1);
						break
					}
				}
				delete this.shapes[shapeid]
			},
			getShapeAt: function (el, x, y) {
				this.targetX = x;
				this.targetY = y;
				this.render();
				return this.currentTargetShapeId
			},
			render: function () {
				var shapeseq = this.shapeseq,
					shapes = this.shapes,
					shapeCount = shapeseq.length,
					context = this._getContext(),
					shapeid, shape, i;
				context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
				for (i = 0; i < shapeCount; i++) {
					shapeid = shapeseq[i];
					shape = shapes[shapeid];
					this["_draw" + shape.type].apply(this, shape.args)
				}
				if (!this.interact) {
					this.shapes = {};
					this.shapeseq = []
				}
			}
		});
		VCanvas_vml = createClass(VCanvas_base, {
			init: function (width, height, target) {
				var groupel;
				VCanvas_vml._super.init.call(this, width, height, target);
				if (target[0]) {
					target = target[0]
				}
				$.data(target, "_jqs_vcanvas", this);
				this.canvas = document.createElement("span");
				$(this.canvas).css({
					display: "inline-block",
					position: "relative",
					overflow: "hidden",
					width: width,
					height: height,
					margin: "0px",
					padding: "0px",
					verticalAlign: "top"
				});
				this._insert(this.canvas, target);
				this._calculatePixelDims(width, height, this.canvas);
				this.canvas.width = this.pixelWidth;
				this.canvas.height = this.pixelHeight;
				groupel = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"' + ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>';
				this.canvas.insertAdjacentHTML("beforeEnd", groupel);
				this.group = $(this.canvas).children()[0];
				this.rendered = false;
				this.prerender = ""
			},
			_drawShape: function (shapeid, path, lineColor, fillColor, lineWidth) {
				var vpath = [],
					initial, stroke, fill, closed, vel, plen, i;
				for (i = 0, plen = path.length; i < plen; i++) {
					vpath[i] = "" + path[i][0] + "," + path[i][1]
				}
				initial = vpath.splice(0, 1);
				lineWidth = lineWidth === undefined ? 1 : lineWidth;
				stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
				fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
				closed = vpath[0] === vpath[vpath.length - 1] ? "x " : "";
				vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + initial + " l " + vpath.join(", ") + " " + closed + 'e">' + " </v:shape>";
				return vel
			},
			_drawCircle: function (shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
				var stroke, fill, vel;
				x -= radius;
				y -= radius;
				stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
				fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
				vel = "<v:oval " + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;top:' + y + "px; left:" + x + "px; width:" + radius * 2 + "px; height:" + radius * 2 + 'px"></v:oval>';
				return vel
			},
			_drawPieSlice: function (shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
				var vpath, startx, starty, endx, endy, stroke, fill, vel;
				if (startAngle === endAngle) {
					return ""
				}
				if (endAngle - startAngle === 2 * Math.PI) {
					startAngle = 0;
					endAngle = 2 * Math.PI
				}
				startx = x + Math.round(Math.cos(startAngle) * radius);
				starty = y + Math.round(Math.sin(startAngle) * radius);
				endx = x + Math.round(Math.cos(endAngle) * radius);
				endy = y + Math.round(Math.sin(endAngle) * radius);
				if (startx === endx && starty === endy) {
					if (endAngle - startAngle < Math.PI) {
						return ""
					}
					startx = endx = x + radius;
					starty = endy = y
				}
				if (startx === endx && starty === endy && endAngle - startAngle < Math.PI) {
					return ""
				}
				vpath = [x - radius, y - radius, x + radius, y + radius, startx, starty, endx, endy];
				stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + lineColor + '" ';
				fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
				vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + x + "," + y + " wa " + vpath.join(", ") + ' x e">' + " </v:shape>";
				return vel
			},
			_drawRect: function (shapeid, x, y, width, height, lineColor, fillColor) {
				return this._drawShape(shapeid, [
					[x, y],
					[x, y + height],
					[x + width, y + height],
					[x + width, y],
					[x, y]
				], lineColor, fillColor)
			},
			reset: function () {
				this.group.innerHTML = ""
			},
			appendShape: function (shape) {
				var vel = this["_draw" + shape.type].apply(this, shape.args);
				if (this.rendered) {
					this.group.insertAdjacentHTML("beforeEnd", vel)
				} else {
					this.prerender += vel
				}
				this.lastShapeId = shape.id;
				return shape.id
			},
			replaceWithShape: function (shapeid, shape) {
				var existing = $("#jqsshape" + shapeid),
					vel = this["_draw" + shape.type].apply(this, shape.args);
				existing[0].outerHTML = vel
			},
			replaceWithShapes: function (shapeids, shapes) {
				var existing = $("#jqsshape" + shapeids[0]),
					replace = "",
					slen = shapes.length,
					i;
				for (i = 0; i < slen; i++) {
					replace += this["_draw" + shapes[i].type].apply(this, shapes[i].args)
				}
				existing[0].outerHTML = replace;
				for (i = 1; i < shapeids.length; i++) {
					$("#jqsshape" + shapeids[i]).remove()
				}
			},
			insertAfterShape: function (shapeid, shape) {
				var existing = $("#jqsshape" + shapeid),
					vel = this["_draw" + shape.type].apply(this, shape.args);
				existing[0].insertAdjacentHTML("afterEnd", vel)
			},
			removeShapeId: function (shapeid) {
				var existing = $("#jqsshape" + shapeid);
				this.group.removeChild(existing[0])
			},
			getShapeAt: function (el, x, y) {
				var shapeid = el.id.substr(8);
				return shapeid
			},
			render: function () {
				if (!this.rendered) {
					this.group.innerHTML = this.prerender;
					this.rendered = true
				}
			}
		})
	})
})(document, Math);
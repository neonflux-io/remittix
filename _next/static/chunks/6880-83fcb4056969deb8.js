(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6880],
  {
    12422: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "createAsyncLocalStorage", {
          enumerable: !0,
          get: function () {
            return createAsyncLocalStorage;
          },
        });
      let r = Error(
        "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
      );
      let FakeAsyncLocalStorage = class FakeAsyncLocalStorage {
        disable() {
          throw r;
        }
        getStore() {}
        run() {
          throw r;
        }
        exit() {
          throw r;
        }
        enterWith() {
          throw r;
        }
      };
      let n = globalThis.AsyncLocalStorage;
      function createAsyncLocalStorage() {
        return n ? new n() : new FakeAsyncLocalStorage();
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    88427: function (e, t, r) {
      "use strict";
      function clientHookInServerComponentError(e) {}
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "clientHookInServerComponentError", {
          enumerable: !0,
          get: function () {
            return clientHookInServerComponentError;
          },
        }),
        r(38754),
        r(67294),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    30636: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return ReadonlyURLSearchParams;
          },
          useSearchParams: function () {
            return useSearchParams;
          },
          usePathname: function () {
            return usePathname;
          },
          ServerInsertedHTMLContext: function () {
            return u.ServerInsertedHTMLContext;
          },
          useServerInsertedHTML: function () {
            return u.useServerInsertedHTML;
          },
          useRouter: function () {
            return useRouter;
          },
          useParams: function () {
            return useParams;
          },
          useSelectedLayoutSegments: function () {
            return useSelectedLayoutSegments;
          },
          useSelectedLayoutSegment: function () {
            return useSelectedLayoutSegment;
          },
          redirect: function () {
            return i.redirect;
          },
          permanentRedirect: function () {
            return i.permanentRedirect;
          },
          RedirectType: function () {
            return i.RedirectType;
          },
          notFound: function () {
            return c.notFound;
          },
        });
      let n = r(67294),
        o = r(89031),
        a = r(11593),
        s = r(88427),
        l = r(6160),
        u = r(30252),
        i = r(37866),
        c = r(49363),
        d = Symbol("internal for urlsearchparams readonly");
      function readonlyURLSearchParamsError() {
        return Error("ReadonlyURLSearchParams cannot be modified");
      }
      let ReadonlyURLSearchParams = class ReadonlyURLSearchParams {
        [Symbol.iterator]() {
          return this[d][Symbol.iterator]();
        }
        append() {
          throw readonlyURLSearchParamsError();
        }
        delete() {
          throw readonlyURLSearchParamsError();
        }
        set() {
          throw readonlyURLSearchParamsError();
        }
        sort() {
          throw readonlyURLSearchParamsError();
        }
        constructor(e) {
          (this[d] = e),
            (this.entries = e.entries.bind(e)),
            (this.forEach = e.forEach.bind(e)),
            (this.get = e.get.bind(e)),
            (this.getAll = e.getAll.bind(e)),
            (this.has = e.has.bind(e)),
            (this.keys = e.keys.bind(e)),
            (this.values = e.values.bind(e)),
            (this.toString = e.toString.bind(e)),
            (this.size = e.size);
        }
      };
      function useSearchParams() {
        (0, s.clientHookInServerComponentError)("useSearchParams");
        let e = (0, n.useContext)(a.SearchParamsContext),
          t = (0, n.useMemo)(
            () => (e ? new ReadonlyURLSearchParams(e) : null),
            [e]
          );
        return t;
      }
      function usePathname() {
        return (
          (0, s.clientHookInServerComponentError)("usePathname"),
          (0, n.useContext)(a.PathnameContext)
        );
      }
      function useRouter() {
        (0, s.clientHookInServerComponentError)("useRouter");
        let e = (0, n.useContext)(o.AppRouterContext);
        if (null === e)
          throw Error("invariant expected app router to be mounted");
        return e;
      }
      function useParams() {
        (0, s.clientHookInServerComponentError)("useParams");
        let e = (0, n.useContext)(o.GlobalLayoutRouterContext),
          t = (0, n.useContext)(a.PathParamsContext);
        return (0, n.useMemo)(
          () =>
            (null == e ? void 0 : e.tree)
              ? (function getSelectedParams(e, t) {
                  void 0 === t && (t = {});
                  let r = e[1];
                  for (let e of Object.values(r)) {
                    let r = e[0],
                      n = Array.isArray(r),
                      o = n ? r[1] : r;
                    if (!o || o.startsWith("__PAGE__")) continue;
                    let a = n && ("c" === r[2] || "oc" === r[2]);
                    a ? (t[r[0]] = r[1].split("/")) : n && (t[r[0]] = r[1]),
                      (t = getSelectedParams(e, t));
                  }
                  return t;
                })(e.tree)
              : t,
          [null == e ? void 0 : e.tree, t]
        );
      }
      function useSelectedLayoutSegments(e) {
        void 0 === e && (e = "children"),
          (0, s.clientHookInServerComponentError)("useSelectedLayoutSegments");
        let { tree: t } = (0, n.useContext)(o.LayoutRouterContext);
        return (function getSelectedLayoutSegmentPath(e, t, r, n) {
          let o;
          if ((void 0 === r && (r = !0), void 0 === n && (n = []), r))
            o = e[1][t];
          else {
            var a;
            let t = e[1];
            o = null != (a = t.children) ? a : Object.values(t)[0];
          }
          if (!o) return n;
          let s = o[0],
            u = (0, l.getSegmentValue)(s);
          return !u || u.startsWith("__PAGE__")
            ? n
            : (n.push(u), getSelectedLayoutSegmentPath(o, t, !1, n));
        })(t, e);
      }
      function useSelectedLayoutSegment(e) {
        void 0 === e && (e = "children"),
          (0, s.clientHookInServerComponentError)("useSelectedLayoutSegment");
        let t = useSelectedLayoutSegments(e);
        return 0 === t.length ? null : t[0];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    49363: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          notFound: function () {
            return notFound;
          },
          isNotFoundError: function () {
            return isNotFoundError;
          },
        });
      let r = "NEXT_NOT_FOUND";
      function notFound() {
        let e = Error(r);
        throw ((e.digest = r), e);
      }
      function isNotFoundError(e) {
        return (null == e ? void 0 : e.digest) === r;
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    37866: function (e, t, r) {
      "use strict";
      var n, o;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          RedirectType: function () {
            return n;
          },
          getRedirectError: function () {
            return getRedirectError;
          },
          redirect: function () {
            return redirect;
          },
          permanentRedirect: function () {
            return permanentRedirect;
          },
          isRedirectError: function () {
            return isRedirectError;
          },
          getURLFromRedirectError: function () {
            return getURLFromRedirectError;
          },
          getRedirectTypeFromError: function () {
            return getRedirectTypeFromError;
          },
        });
      let a = r(23743),
        s = "NEXT_REDIRECT";
      function getRedirectError(e, t, r) {
        void 0 === r && (r = !1);
        let n = Error(s);
        n.digest = s + ";" + t + ";" + e + ";" + r;
        let o = a.requestAsyncStorage.getStore();
        return o && (n.mutableCookies = o.mutableCookies), n;
      }
      function redirect(e, t) {
        throw (void 0 === t && (t = "replace"), getRedirectError(e, t, !1));
      }
      function permanentRedirect(e, t) {
        throw (void 0 === t && (t = "replace"), getRedirectError(e, t, !0));
      }
      function isRedirectError(e) {
        if ("string" != typeof (null == e ? void 0 : e.digest)) return !1;
        let [t, r, n, o] = e.digest.split(";", 4);
        return (
          t === s &&
          ("replace" === r || "push" === r) &&
          "string" == typeof n &&
          ("true" === o || "false" === o)
        );
      }
      function getURLFromRedirectError(e) {
        return isRedirectError(e) ? e.digest.split(";", 3)[2] : null;
      }
      function getRedirectTypeFromError(e) {
        if (!isRedirectError(e)) throw Error("Not a redirect error");
        return e.digest.split(";", 3)[1];
      }
      ((o = n || (n = {})).push = "push"),
        (o.replace = "replace"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    23743: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "requestAsyncStorage", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(12422),
        o = (0, n.createAsyncLocalStorage)();
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6160: function (e, t) {
      "use strict";
      function getSegmentValue(e) {
        return Array.isArray(e) ? e[1] : e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSegmentValue", {
          enumerable: !0,
          get: function () {
            return getSegmentValue;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    30252: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ServerInsertedHTMLContext: function () {
            return a;
          },
          useServerInsertedHTML: function () {
            return useServerInsertedHTML;
          },
        });
      let n = r(61757),
        o = n._(r(67294)),
        a = o.default.createContext(null);
      function useServerInsertedHTML(e) {
        let t = (0, o.useContext)(a);
        t && t(e);
      }
    },
    6880: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return BuyNow;
          },
        });
      var n = r(85893),
        o = r(67294),
        a = r(41664),
        s = r.n(a),
        l = r(67421),
        u = r(39332);
      function BuyNow(e) {
        let {
            stagesData: t,
            summaryData: r,
            ethToUsdRate: a,
            usdToTokenRate: i,
            percentage: c,
          } = e,
          { t: d } = (0, l.$G)(),
          f = (0, u.useRouter)(),
          p = (0, o.useRef)(null),
          [m, h] = (0, o.useState)("eth"),
          [x, g] = (0, o.useState)(""),
          [y, b] = (0, o.useState)(""),
          handleChange = async (e) => {
            b(e.target.value);
          },
          calculateToAmount = () => {
            if (!y) {
              g("");
              return;
            }
            let e = 0;
            if ("eth" === m && t) {
              let r = parseFloat(t.base_price);
              e = (a * Number(y)) / Number(r);
            } else if ("usdt" === m && t) {
              let r = parseFloat(t.base_price),
                n = parseFloat(i.toFixed(0));
              e = (n * Number(y)) / Number(r);
            }
            g(e.toString());
          };
        return (
          (0, o.useEffect)(() => {
            calculateToAmount();
          }, [calculateToAmount, y, m, t, a]),
          (0, o.useEffect)(() => {
            p && p.current && (p.current.style.width = "".concat(c, "%"));
          }, [p])
        );
      }
    },
    39332: function (e, t, r) {
      e.exports = r(30636);
    },
  },
]);

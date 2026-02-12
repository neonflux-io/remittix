"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9343],
  {
    70672: function (e, t, s) {
      s.d(t, {
        AV: function () {
          return a;
        },
        ConfigCtrl: function () {
          return g;
        },
        ExplorerCtrl: function () {
          return j;
        },
        OptionsCtrl: function () {
          return u;
        },
        ThemeCtrl: function () {
          return T;
        },
        ToastCtrl: function () {
          return $;
        },
        jb: function () {
          return U;
        },
        uA: function () {
          return c;
        },
        zv: function () {
          return r;
        },
      });
      var n = s(17832),
        o = s(48764).lW;
      let i = (0, n.sj)({
          history: ["ConnectWallet"],
          view: "ConnectWallet",
          data: void 0,
        }),
        a = {
          state: i,
          subscribe: (e) => (0, n.Ld)(i, () => e(i)),
          push(e, t) {
            e !== i.view &&
              ((i.view = e), t && (i.data = t), i.history.push(e));
          },
          reset(e) {
            (i.view = e), (i.history = [e]);
          },
          replace(e) {
            i.history.length > 1 &&
              ((i.history[i.history.length - 1] = e), (i.view = e));
          },
          goBack() {
            if (i.history.length > 1) {
              i.history.pop();
              let [e] = i.history.slice(-1);
              i.view = e;
            }
          },
          setData(e) {
            i.data = e;
          },
        },
        r = {
          WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
          WCM_VERSION: "WCM_VERSION",
          RECOMMENDED_WALLET_AMOUNT: 9,
          isMobile: () =>
            "undefined" != typeof window &&
            !!(
              window.matchMedia("(pointer:coarse)").matches ||
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
                navigator.userAgent
              )
            ),
          isAndroid: () =>
            r.isMobile() &&
            navigator.userAgent.toLowerCase().includes("android"),
          isIos() {
            let e = navigator.userAgent.toLowerCase();
            return r.isMobile() && (e.includes("iphone") || e.includes("ipad"));
          },
          isHttpUrl: (e) => e.startsWith("http://") || e.startsWith("https://"),
          isArray: (e) => Array.isArray(e) && e.length > 0,
          isTelegram: () =>
            "undefined" != typeof window &&
            (!!window.TelegramWebviewProxy ||
              !!window.Telegram ||
              !!window.TelegramWebviewProxyProto),
          formatNativeUrl(e, t, s) {
            if (r.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
            let n = e;
            n.includes("://") ||
              ((n = e.replaceAll("/", "").replaceAll(":", "")),
              (n = `${n}://`)),
              n.endsWith("/") || (n = `${n}/`),
              this.setWalletConnectDeepLink(n, s);
            let o = encodeURIComponent(t);
            return `${n}wc?uri=${o}`;
          },
          formatUniversalUrl(e, t, s) {
            if (!r.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
            let n = e;
            if (n.startsWith("https://t.me")) {
              let e = o.from(t).toString("base64").replace(/[=]/g, "");
              n.endsWith("/") && (n = n.slice(0, -1)),
                this.setWalletConnectDeepLink(n, s);
              let i = new URL(n);
              i.searchParams.set("startapp", e);
              let a = i.toString();
              return a;
            }
            n.endsWith("/") || (n = `${n}/`),
              this.setWalletConnectDeepLink(n, s);
            let i = encodeURIComponent(t);
            return `${n}wc?uri=${i}`;
          },
          wait: async (e) =>
            new Promise((t) => {
              setTimeout(t, e);
            }),
          openHref(e, t) {
            let s = this.isTelegram() ? "_blank" : t;
            window.open(e, s, "noreferrer noopener");
          },
          setWalletConnectDeepLink(e, t) {
            try {
              localStorage.setItem(
                r.WALLETCONNECT_DEEPLINK_CHOICE,
                JSON.stringify({ href: e, name: t })
              );
            } catch (e) {
              console.info("Unable to set WalletConnect deep link");
            }
          },
          setWalletConnectAndroidDeepLink(e) {
            try {
              let [t] = e.split("?");
              localStorage.setItem(
                r.WALLETCONNECT_DEEPLINK_CHOICE,
                JSON.stringify({ href: t, name: "Android" })
              );
            } catch (e) {
              console.info("Unable to set WalletConnect android deep link");
            }
          },
          removeWalletConnectDeepLink() {
            try {
              localStorage.removeItem(r.WALLETCONNECT_DEEPLINK_CHOICE);
            } catch (e) {
              console.info("Unable to remove WalletConnect deep link");
            }
          },
          setModalVersionInStorage() {
            try {
              "undefined" != typeof localStorage &&
                localStorage.setItem(r.WCM_VERSION, "2.7.0");
            } catch (e) {
              console.info("Unable to set Web3Modal version in storage");
            }
          },
          getWalletRouterData() {
            var e;
            let t = null == (e = a.state.data) ? void 0 : e.Wallet;
            if (!t) throw Error('Missing "Wallet" view data');
            return t;
          },
        },
        l =
          "undefined" != typeof location &&
          (location.hostname.includes("localhost") ||
            location.protocol.includes("https")),
        d = (0, n.sj)({
          enabled: l,
          userSessionId: "",
          events: [],
          connectedWalletId: void 0,
        }),
        c = {
          state: d,
          subscribe: (e) =>
            (0, n.Ld)(d.events, () =>
              e((0, n.CO)(d.events[d.events.length - 1]))
            ),
          initialize() {
            d.enabled &&
              void 0 !== (null == crypto ? void 0 : crypto.randomUUID) &&
              (d.userSessionId = crypto.randomUUID());
          },
          setConnectedWalletId(e) {
            d.connectedWalletId = e;
          },
          click(e) {
            if (d.enabled) {
              let t = {
                type: "CLICK",
                name: e.name,
                userSessionId: d.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              d.events.push(t);
            }
          },
          track(e) {
            if (d.enabled) {
              let t = {
                type: "TRACK",
                name: e.name,
                userSessionId: d.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              d.events.push(t);
            }
          },
          view(e) {
            if (d.enabled) {
              let t = {
                type: "VIEW",
                name: e.name,
                userSessionId: d.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              d.events.push(t);
            }
          },
        },
        p = (0, n.sj)({
          chains: void 0,
          walletConnectUri: void 0,
          isAuth: !1,
          isCustomDesktop: !1,
          isCustomMobile: !1,
          isDataLoaded: !1,
          isUiLoaded: !1,
        }),
        u = {
          state: p,
          subscribe: (e) => (0, n.Ld)(p, () => e(p)),
          setChains(e) {
            p.chains = e;
          },
          setWalletConnectUri(e) {
            p.walletConnectUri = e;
          },
          setIsCustomDesktop(e) {
            p.isCustomDesktop = e;
          },
          setIsCustomMobile(e) {
            p.isCustomMobile = e;
          },
          setIsDataLoaded(e) {
            p.isDataLoaded = e;
          },
          setIsUiLoaded(e) {
            p.isUiLoaded = e;
          },
          setIsAuth(e) {
            p.isAuth = e;
          },
        },
        m = (0, n.sj)({
          projectId: "",
          mobileWallets: void 0,
          desktopWallets: void 0,
          walletImages: void 0,
          chains: void 0,
          enableAuthMode: !1,
          enableExplorer: !0,
          explorerExcludedWalletIds: void 0,
          explorerRecommendedWalletIds: void 0,
          termsOfServiceUrl: void 0,
          privacyPolicyUrl: void 0,
        }),
        g = {
          state: m,
          subscribe: (e) => (0, n.Ld)(m, () => e(m)),
          setConfig(e) {
            var t, s;
            c.initialize(),
              u.setChains(e.chains),
              u.setIsAuth(!!e.enableAuthMode),
              u.setIsCustomMobile(
                !!(null == (t = e.mobileWallets) ? void 0 : t.length)
              ),
              u.setIsCustomDesktop(
                !!(null == (s = e.desktopWallets) ? void 0 : s.length)
              ),
              r.setModalVersionInStorage(),
              Object.assign(m, e);
          },
        };
      var h = Object.defineProperty,
        f = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        v = Object.prototype.propertyIsEnumerable,
        __defNormalProp$2 = (e, t, s) =>
          t in e
            ? h(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[t] = s),
        __spreadValues$2 = (e, t) => {
          for (var s in t || (t = {}))
            b.call(t, s) && __defNormalProp$2(e, s, t[s]);
          if (f)
            for (var s of f(t)) v.call(t, s) && __defNormalProp$2(e, s, t[s]);
          return e;
        };
      let C = "https://explorer-api.walletconnect.com",
        I = "js-2.7.0";
      async function fetchListings(e, t) {
        let s = __spreadValues$2({ sdkType: "wcm", sdkVersion: I }, t),
          n = new URL(e, C);
        n.searchParams.append("projectId", g.state.projectId),
          Object.entries(s).forEach(([e, t]) => {
            t && n.searchParams.append(e, String(t));
          });
        let o = await fetch(n);
        return o.json();
      }
      let w = {
        getDesktopListings: async (e) =>
          fetchListings("/w3m/v1/getDesktopListings", e),
        getMobileListings: async (e) =>
          fetchListings("/w3m/v1/getMobileListings", e),
        getInjectedListings: async (e) =>
          fetchListings("/w3m/v1/getInjectedListings", e),
        getAllListings: async (e) => fetchListings("/w3m/v1/getAllListings", e),
        getWalletImageUrl: (e) =>
          `${C}/w3m/v1/getWalletImage/${e}?projectId=${g.state.projectId}&sdkType=wcm&sdkVersion=${I}`,
        getAssetImageUrl: (e) =>
          `${C}/w3m/v1/getAssetImage/${e}?projectId=${g.state.projectId}&sdkType=wcm&sdkVersion=${I}`,
      };
      var y = Object.defineProperty,
        L = Object.getOwnPropertySymbols,
        W = Object.prototype.hasOwnProperty,
        _ = Object.prototype.propertyIsEnumerable,
        __defNormalProp$1 = (e, t, s) =>
          t in e
            ? y(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[t] = s),
        __spreadValues$1 = (e, t) => {
          for (var s in t || (t = {}))
            W.call(t, s) && __defNormalProp$1(e, s, t[s]);
          if (L)
            for (var s of L(t)) _.call(t, s) && __defNormalProp$1(e, s, t[s]);
          return e;
        };
      let O = r.isMobile(),
        E = (0, n.sj)({
          wallets: { listings: [], total: 0, page: 1 },
          search: { listings: [], total: 0, page: 1 },
          recomendedWallets: [],
        }),
        j = {
          state: E,
          async getRecomendedWallets() {
            let {
              explorerRecommendedWalletIds: e,
              explorerExcludedWalletIds: t,
            } = g.state;
            if ("NONE" === e || ("ALL" === t && !e)) return E.recomendedWallets;
            if (r.isArray(e)) {
              let t = e.join(","),
                { listings: s } = await w.getAllListings({ recommendedIds: t }),
                n = Object.values(s);
              n.sort((t, s) => {
                let n = e.indexOf(t.id),
                  o = e.indexOf(s.id);
                return n - o;
              }),
                (E.recomendedWallets = n);
            } else {
              let { chains: e, isAuth: s } = u.state,
                n = null == e ? void 0 : e.join(","),
                o = r.isArray(t),
                i = {
                  page: 1,
                  sdks: s ? "auth_v1" : void 0,
                  entries: r.RECOMMENDED_WALLET_AMOUNT,
                  chains: n,
                  version: 2,
                  excludedIds: o ? t.join(",") : void 0,
                },
                { listings: a } = O
                  ? await w.getMobileListings(i)
                  : await w.getDesktopListings(i);
              E.recomendedWallets = Object.values(a);
            }
            return E.recomendedWallets;
          },
          async getWallets(e) {
            let t = __spreadValues$1({}, e),
              {
                explorerRecommendedWalletIds: s,
                explorerExcludedWalletIds: n,
              } = g.state,
              { recomendedWallets: o } = E;
            if ("ALL" === n) return E.wallets;
            o.length
              ? (t.excludedIds = o.map((e) => e.id).join(","))
              : r.isArray(s) && (t.excludedIds = s.join(",")),
              r.isArray(n) &&
                (t.excludedIds = [t.excludedIds, n].filter(Boolean).join(",")),
              u.state.isAuth && (t.sdks = "auth_v1");
            let { page: i, search: a } = e,
              { listings: l, total: d } = O
                ? await w.getMobileListings(t)
                : await w.getDesktopListings(t),
              c = Object.values(l),
              p = a ? "search" : "wallets";
            return (
              (E[p] = {
                listings: [...E[p].listings, ...c],
                total: d,
                page: null != i ? i : 1,
              }),
              { listings: c, total: d }
            );
          },
          getWalletImageUrl: (e) => w.getWalletImageUrl(e),
          getAssetImageUrl: (e) => w.getAssetImageUrl(e),
          resetSearch() {
            E.search = { listings: [], total: 0, page: 1 };
          },
        },
        A = (0, n.sj)({ open: !1 }),
        U = {
          state: A,
          subscribe: (e) => (0, n.Ld)(A, () => e(A)),
          open: async (e) =>
            new Promise((t) => {
              let { isUiLoaded: s, isDataLoaded: n } = u.state;
              if (
                (r.removeWalletConnectDeepLink(),
                u.setWalletConnectUri(null == e ? void 0 : e.uri),
                u.setChains(null == e ? void 0 : e.chains),
                a.reset("ConnectWallet"),
                s && n)
              )
                (A.open = !0), t();
              else {
                let e = setInterval(() => {
                  let s = u.state;
                  s.isUiLoaded &&
                    s.isDataLoaded &&
                    (clearInterval(e), (A.open = !0), t());
                }, 200);
              }
            }),
          close() {
            A.open = !1;
          },
        };
      var k = Object.defineProperty,
        M = Object.getOwnPropertySymbols,
        N = Object.prototype.hasOwnProperty,
        D = Object.prototype.propertyIsEnumerable,
        __defNormalProp = (e, t, s) =>
          t in e
            ? k(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[t] = s),
        __spreadValues = (e, t) => {
          for (var s in t || (t = {}))
            N.call(t, s) && __defNormalProp(e, s, t[s]);
          if (M)
            for (var s of M(t)) D.call(t, s) && __defNormalProp(e, s, t[s]);
          return e;
        };
      let P = (0, n.sj)({
          themeMode:
            "undefined" != typeof matchMedia &&
            matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light",
        }),
        T = {
          state: P,
          subscribe: (e) => (0, n.Ld)(P, () => e(P)),
          setThemeConfig(e) {
            let { themeMode: t, themeVariables: s } = e;
            t && (P.themeMode = t),
              s && (P.themeVariables = __spreadValues({}, s));
          },
        },
        S = (0, n.sj)({ open: !1, message: "", variant: "success" }),
        $ = {
          state: S,
          subscribe: (e) => (0, n.Ld)(S, () => e(S)),
          openToast(e, t) {
            (S.open = !0), (S.message = e), (S.variant = t);
          },
          closeToast() {
            S.open = !1;
          },
        };
    },
    59343: function (e, t, s) {
      s.d(t, {
        WalletConnectModal: function () {
          return WalletConnectModal;
        },
      });
      var n = s(70672);
      let WalletConnectModal = class WalletConnectModal {
        constructor(e) {
          (this.openModal = n.jb.open),
            (this.closeModal = n.jb.close),
            (this.subscribeModal = n.jb.subscribe),
            (this.setTheme = n.ThemeCtrl.setThemeConfig),
            n.ThemeCtrl.setThemeConfig(e),
            n.ConfigCtrl.setConfig(e),
            this.initUi();
        }
        async initUi() {
          if ("undefined" != typeof window) {
            await s.e(1391).then(s.bind(s, 41391));
            let e = document.createElement("wcm-modal");
            document.body.insertAdjacentElement("beforeend", e),
              n.OptionsCtrl.setIsUiLoaded(!0);
          }
        }
      };
    },
  },
]);

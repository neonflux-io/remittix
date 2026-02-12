"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1391],
  {
    41391: function (e, t, o) {
      o.r(t),
        o.d(t, {
          WcmModal: function () {
            return ri;
          },
          WcmQrCode: function () {
            return tg;
          },
        });
      /**
       * @license
       * Copyright 2019 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ let l = window,
        n =
          l.ShadowRoot &&
          (void 0 === l.ShadyCSS || l.ShadyCSS.nativeShadow) &&
          "adoptedStyleSheets" in Document.prototype &&
          "replace" in CSSStyleSheet.prototype,
        s = Symbol(),
        c = new WeakMap();
      let css_tag_o = class css_tag_o {
        constructor(e, t, o) {
          if (((this._$cssResult$ = !0), o !== s))
            throw Error(
              "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
            );
          (this.cssText = e), (this.t = t);
        }
        get styleSheet() {
          let e = this.o,
            t = this.t;
          if (n && void 0 === e) {
            let o = void 0 !== t && 1 === t.length;
            o && (e = c.get(t)),
              void 0 === e &&
                ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText),
                o && c.set(t, e));
          }
          return e;
        }
        toString() {
          return this.cssText;
        }
      };
      let r = (e) =>
          new css_tag_o("string" == typeof e ? e : e + "", void 0, s),
        i = (e, ...t) => {
          let o =
            1 === e.length
              ? e[0]
              : t.reduce(
                  (t, o, l) =>
                    t +
                    ((e) => {
                      if (!0 === e._$cssResult$) return e.cssText;
                      if ("number" == typeof e) return e;
                      throw Error(
                        "Value passed to 'css' function must be a 'css' function result: " +
                          e +
                          ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                      );
                    })(o) +
                    e[l + 1],
                  e[0]
                );
          return new css_tag_o(o, e, s);
        },
        S = (e, t) => {
          n
            ? (e.adoptedStyleSheets = t.map((e) =>
                e instanceof CSSStyleSheet ? e : e.styleSheet
              ))
            : t.forEach((t) => {
                let o = document.createElement("style"),
                  n = l.litNonce;
                void 0 !== n && o.setAttribute("nonce", n),
                  (o.textContent = t.cssText),
                  e.appendChild(o);
              });
        },
        d = n
          ? (e) => e
          : (e) =>
              e instanceof CSSStyleSheet
                ? ((e) => {
                    let t = "";
                    for (let o of e.cssRules) t += o.cssText;
                    return r(t);
                  })(e)
                : e,
        m = window,
        h = m.trustedTypes,
        p = h ? h.emptyScript : "",
        g = m.reactiveElementPolyfillSupport,
        f = {
          toAttribute(e, t) {
            switch (t) {
              case Boolean:
                e = e ? p : null;
                break;
              case Object:
              case Array:
                e = null == e ? e : JSON.stringify(e);
            }
            return e;
          },
          fromAttribute(e, t) {
            let o = e;
            switch (t) {
              case Boolean:
                o = null !== e;
                break;
              case Number:
                o = null === e ? null : Number(e);
                break;
              case Object:
              case Array:
                try {
                  o = JSON.parse(e);
                } catch (e) {
                  o = null;
                }
            }
            return o;
          },
        },
        a = (e, t) => t !== e && (t == t || e == e),
        b = {
          attribute: !0,
          type: String,
          converter: f,
          reflect: !1,
          hasChanged: a,
        },
        _ = "finalized";
      let u = class u extends HTMLElement {
        constructor() {
          super(),
            (this._$Ei = new Map()),
            (this.isUpdatePending = !1),
            (this.hasUpdated = !1),
            (this._$El = null),
            this._$Eu();
        }
        static addInitializer(e) {
          var t;
          this.finalize(),
            (null !== (t = this.h) && void 0 !== t ? t : (this.h = [])).push(e);
        }
        static get observedAttributes() {
          this.finalize();
          let e = [];
          return (
            this.elementProperties.forEach((t, o) => {
              let l = this._$Ep(o, t);
              void 0 !== l && (this._$Ev.set(l, o), e.push(l));
            }),
            e
          );
        }
        static createProperty(e, t = b) {
          if (
            (t.state && (t.attribute = !1),
            this.finalize(),
            this.elementProperties.set(e, t),
            !t.noAccessor && !this.prototype.hasOwnProperty(e))
          ) {
            let o = "symbol" == typeof e ? Symbol() : "__" + e,
              l = this.getPropertyDescriptor(e, o, t);
            void 0 !== l && Object.defineProperty(this.prototype, e, l);
          }
        }
        static getPropertyDescriptor(e, t, o) {
          return {
            get() {
              return this[t];
            },
            set(l) {
              let n = this[e];
              (this[t] = l), this.requestUpdate(e, n, o);
            },
            configurable: !0,
            enumerable: !0,
          };
        }
        static getPropertyOptions(e) {
          return this.elementProperties.get(e) || b;
        }
        static finalize() {
          if (this.hasOwnProperty(_)) return !1;
          this[_] = !0;
          let e = Object.getPrototypeOf(this);
          if (
            (e.finalize(),
            void 0 !== e.h && (this.h = [...e.h]),
            (this.elementProperties = new Map(e.elementProperties)),
            (this._$Ev = new Map()),
            this.hasOwnProperty("properties"))
          ) {
            let e = this.properties,
              t = [
                ...Object.getOwnPropertyNames(e),
                ...Object.getOwnPropertySymbols(e),
              ];
            for (let o of t) this.createProperty(o, e[o]);
          }
          return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
        }
        static finalizeStyles(e) {
          let t = [];
          if (Array.isArray(e)) {
            let o = new Set(e.flat(1 / 0).reverse());
            for (let e of o) t.unshift(d(e));
          } else void 0 !== e && t.push(d(e));
          return t;
        }
        static _$Ep(e, t) {
          let o = t.attribute;
          return !1 === o
            ? void 0
            : "string" == typeof o
            ? o
            : "string" == typeof e
            ? e.toLowerCase()
            : void 0;
        }
        _$Eu() {
          var e;
          (this._$E_ = new Promise((e) => (this.enableUpdating = e))),
            (this._$AL = new Map()),
            this._$Eg(),
            this.requestUpdate(),
            null === (e = this.constructor.h) ||
              void 0 === e ||
              e.forEach((e) => e(this));
        }
        addController(e) {
          var t, o;
          (null !== (t = this._$ES) && void 0 !== t
            ? t
            : (this._$ES = [])
          ).push(e),
            void 0 !== this.renderRoot &&
              this.isConnected &&
              (null === (o = e.hostConnected) || void 0 === o || o.call(e));
        }
        removeController(e) {
          var t;
          null === (t = this._$ES) ||
            void 0 === t ||
            t.splice(this._$ES.indexOf(e) >>> 0, 1);
        }
        _$Eg() {
          this.constructor.elementProperties.forEach((e, t) => {
            this.hasOwnProperty(t) &&
              (this._$Ei.set(t, this[t]), delete this[t]);
          });
        }
        createRenderRoot() {
          var e;
          let t =
            null !== (e = this.shadowRoot) && void 0 !== e
              ? e
              : this.attachShadow(this.constructor.shadowRootOptions);
          return S(t, this.constructor.elementStyles), t;
        }
        connectedCallback() {
          var e;
          void 0 === this.renderRoot &&
            (this.renderRoot = this.createRenderRoot()),
            this.enableUpdating(!0),
            null === (e = this._$ES) ||
              void 0 === e ||
              e.forEach((e) => {
                var t;
                return null === (t = e.hostConnected) || void 0 === t
                  ? void 0
                  : t.call(e);
              });
        }
        enableUpdating(e) {}
        disconnectedCallback() {
          var e;
          null === (e = this._$ES) ||
            void 0 === e ||
            e.forEach((e) => {
              var t;
              return null === (t = e.hostDisconnected) || void 0 === t
                ? void 0
                : t.call(e);
            });
        }
        attributeChangedCallback(e, t, o) {
          this._$AK(e, o);
        }
        _$EO(e, t, o = b) {
          var l;
          let n = this.constructor._$Ep(e, o);
          if (void 0 !== n && !0 === o.reflect) {
            let s = (
              void 0 !==
              (null === (l = o.converter) || void 0 === l
                ? void 0
                : l.toAttribute)
                ? o.converter
                : f
            ).toAttribute(t, o.type);
            (this._$El = e),
              null == s ? this.removeAttribute(n) : this.setAttribute(n, s),
              (this._$El = null);
          }
        }
        _$AK(e, t) {
          var o;
          let l = this.constructor,
            n = l._$Ev.get(e);
          if (void 0 !== n && this._$El !== n) {
            let e = l.getPropertyOptions(n),
              s =
                "function" == typeof e.converter
                  ? { fromAttribute: e.converter }
                  : void 0 !==
                    (null === (o = e.converter) || void 0 === o
                      ? void 0
                      : o.fromAttribute)
                  ? e.converter
                  : f;
            (this._$El = n),
              (this[n] = s.fromAttribute(t, e.type)),
              (this._$El = null);
          }
        }
        requestUpdate(e, t, o) {
          let l = !0;
          void 0 !== e &&
            ((
              (o = o || this.constructor.getPropertyOptions(e)).hasChanged || a
            )(this[e], t)
              ? (this._$AL.has(e) || this._$AL.set(e, t),
                !0 === o.reflect &&
                  this._$El !== e &&
                  (void 0 === this._$EC && (this._$EC = new Map()),
                  this._$EC.set(e, o)))
              : (l = !1)),
            !this.isUpdatePending && l && (this._$E_ = this._$Ej());
        }
        async _$Ej() {
          this.isUpdatePending = !0;
          try {
            await this._$E_;
          } catch (e) {
            Promise.reject(e);
          }
          let e = this.scheduleUpdate();
          return null != e && (await e), !this.isUpdatePending;
        }
        scheduleUpdate() {
          return this.performUpdate();
        }
        performUpdate() {
          var e;
          if (!this.isUpdatePending) return;
          this.hasUpdated,
            this._$Ei &&
              (this._$Ei.forEach((e, t) => (this[t] = e)),
              (this._$Ei = void 0));
          let t = !1,
            o = this._$AL;
          try {
            (t = this.shouldUpdate(o))
              ? (this.willUpdate(o),
                null === (e = this._$ES) ||
                  void 0 === e ||
                  e.forEach((e) => {
                    var t;
                    return null === (t = e.hostUpdate) || void 0 === t
                      ? void 0
                      : t.call(e);
                  }),
                this.update(o))
              : this._$Ek();
          } catch (e) {
            throw ((t = !1), this._$Ek(), e);
          }
          t && this._$AE(o);
        }
        willUpdate(e) {}
        _$AE(e) {
          var t;
          null === (t = this._$ES) ||
            void 0 === t ||
            t.forEach((e) => {
              var t;
              return null === (t = e.hostUpdated) || void 0 === t
                ? void 0
                : t.call(e);
            }),
            this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
            this.updated(e);
        }
        _$Ek() {
          (this._$AL = new Map()), (this.isUpdatePending = !1);
        }
        get updateComplete() {
          return this.getUpdateComplete();
        }
        getUpdateComplete() {
          return this._$E_;
        }
        shouldUpdate(e) {
          return !0;
        }
        update(e) {
          void 0 !== this._$EC &&
            (this._$EC.forEach((e, t) => this._$EO(t, this[t], e)),
            (this._$EC = void 0)),
            this._$Ek();
        }
        updated(e) {}
        firstUpdated(e) {}
      };
      (u[_] = !0),
        (u.elementProperties = new Map()),
        (u.elementStyles = []),
        (u.shadowRootOptions = { mode: "open" }),
        null == g || g({ ReactiveElement: u }),
        (null !== (en = m.reactiveElementVersions) && void 0 !== en
          ? en
          : (m.reactiveElementVersions = [])
        ).push("1.6.3");
      let y = window,
        x = y.trustedTypes,
        $ = x ? x.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
        C = "$lit$",
        A = `lit$${(Math.random() + "").slice(9)}$`,
        E = "?" + A,
        O = `<${E}>`,
        T = document,
        lit_html_u = () => T.createComment(""),
        lit_html_d = (e) =>
          null === e || ("object" != typeof e && "function" != typeof e),
        I = Array.isArray,
        v = (e) =>
          I(e) ||
          "function" == typeof (null == e ? void 0 : e[Symbol.iterator]),
        j = "[ 	\n\f\r]",
        W = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        U = /-->/g,
        B = />/g,
        F = RegExp(
          `>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
          "g"
        ),
        q = /'/g,
        K = /"/g,
        G = /^(?:script|style|textarea|title)$/i,
        w =
          (e) =>
          (t, ...o) => ({ _$litType$: e, strings: t, values: o }),
        Q = w(1),
        Y = w(2),
        X = Symbol.for("lit-noChange"),
        J = Symbol.for("lit-nothing"),
        ee = new WeakMap(),
        et = T.createTreeWalker(T, 129, null, !1);
      function P(e, t) {
        if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
          throw Error("invalid template strings array");
        return void 0 !== $ ? $.createHTML(t) : t;
      }
      let V = (e, t) => {
        let o = e.length - 1,
          l = [],
          n,
          s = 2 === t ? "<svg>" : "",
          c = W;
        for (let t = 0; t < o; t++) {
          let o = e[t],
            d,
            m,
            h = -1,
            p = 0;
          for (
            ;
            p < o.length && ((c.lastIndex = p), null !== (m = c.exec(o)));

          )
            (p = c.lastIndex),
              c === W
                ? "!--" === m[1]
                  ? (c = U)
                  : void 0 !== m[1]
                  ? (c = B)
                  : void 0 !== m[2]
                  ? (G.test(m[2]) && (n = RegExp("</" + m[2], "g")), (c = F))
                  : void 0 !== m[3] && (c = F)
                : c === F
                ? ">" === m[0]
                  ? ((c = null != n ? n : W), (h = -1))
                  : void 0 === m[1]
                  ? (h = -2)
                  : ((h = c.lastIndex - m[2].length),
                    (d = m[1]),
                    (c = void 0 === m[3] ? F : '"' === m[3] ? K : q))
                : c === K || c === q
                ? (c = F)
                : c === U || c === B
                ? (c = W)
                : ((c = F), (n = void 0));
          let g = c === F && e[t + 1].startsWith("/>") ? " " : "";
          s +=
            c === W
              ? o + O
              : h >= 0
              ? (l.push(d), o.slice(0, h) + C + o.slice(h) + A + g)
              : o + A + (-2 === h ? (l.push(void 0), t) : g);
        }
        return [P(e, s + (e[o] || "<?>") + (2 === t ? "</svg>" : "")), l];
      };
      let N = class N {
        constructor({ strings: e, _$litType$: t }, o) {
          let l;
          this.parts = [];
          let n = 0,
            s = 0,
            c = e.length - 1,
            d = this.parts,
            [m, h] = V(e, t);
          if (
            ((this.el = N.createElement(m, o)),
            (et.currentNode = this.el.content),
            2 === t)
          ) {
            let e = this.el.content,
              t = e.firstChild;
            t.remove(), e.append(...t.childNodes);
          }
          for (; null !== (l = et.nextNode()) && d.length < c; ) {
            if (1 === l.nodeType) {
              if (l.hasAttributes()) {
                let e = [];
                for (let t of l.getAttributeNames())
                  if (t.endsWith(C) || t.startsWith(A)) {
                    let o = h[s++];
                    if ((e.push(t), void 0 !== o)) {
                      let e = l.getAttribute(o.toLowerCase() + C).split(A),
                        t = /([.?@])?(.*)/.exec(o);
                      d.push({
                        type: 1,
                        index: n,
                        name: t[2],
                        strings: e,
                        ctor:
                          "." === t[1]
                            ? H
                            : "?" === t[1]
                            ? L
                            : "@" === t[1]
                            ? z
                            : k,
                      });
                    } else d.push({ type: 6, index: n });
                  }
                for (let t of e) l.removeAttribute(t);
              }
              if (G.test(l.tagName)) {
                let e = l.textContent.split(A),
                  t = e.length - 1;
                if (t > 0) {
                  l.textContent = x ? x.emptyScript : "";
                  for (let o = 0; o < t; o++)
                    l.append(e[o], lit_html_u()),
                      et.nextNode(),
                      d.push({ type: 2, index: ++n });
                  l.append(e[t], lit_html_u());
                }
              }
            } else if (8 === l.nodeType) {
              if (l.data === E) d.push({ type: 2, index: n });
              else {
                let e = -1;
                for (; -1 !== (e = l.data.indexOf(A, e + 1)); )
                  d.push({ type: 7, index: n }), (e += A.length - 1);
              }
            }
            n++;
          }
        }
        static createElement(e, t) {
          let o = T.createElement("template");
          return (o.innerHTML = e), o;
        }
      };
      function lit_html_S(e, t, o = e, l) {
        var n, s, c;
        if (t === X) return t;
        let d =
            void 0 !== l
              ? null === (n = o._$Co) || void 0 === n
                ? void 0
                : n[l]
              : o._$Cl,
          m = lit_html_d(t) ? void 0 : t._$litDirective$;
        return (
          (null == d ? void 0 : d.constructor) !== m &&
            (null === (s = null == d ? void 0 : d._$AO) ||
              void 0 === s ||
              s.call(d, !1),
            void 0 === m ? (d = void 0) : (d = new m(e))._$AT(e, o, l),
            void 0 !== l
              ? ((null !== (c = o._$Co) && void 0 !== c ? c : (o._$Co = []))[
                  l
                ] = d)
              : (o._$Cl = d)),
          void 0 !== d && (t = lit_html_S(e, d._$AS(e, t.values), d, l)),
          t
        );
      }
      let M = class M {
        constructor(e, t) {
          (this._$AV = []),
            (this._$AN = void 0),
            (this._$AD = e),
            (this._$AM = t);
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(e) {
          var t;
          let {
              el: { content: o },
              parts: l,
            } = this._$AD,
            n = (
              null !== (t = null == e ? void 0 : e.creationScope) &&
              void 0 !== t
                ? t
                : T
            ).importNode(o, !0);
          et.currentNode = n;
          let s = et.nextNode(),
            c = 0,
            d = 0,
            m = l[0];
          for (; void 0 !== m; ) {
            if (c === m.index) {
              let t;
              2 === m.type
                ? (t = new R(s, s.nextSibling, this, e))
                : 1 === m.type
                ? (t = new m.ctor(s, m.name, m.strings, this, e))
                : 6 === m.type && (t = new Z(s, this, e)),
                this._$AV.push(t),
                (m = l[++d]);
            }
            c !== (null == m ? void 0 : m.index) && ((s = et.nextNode()), c++);
          }
          return (et.currentNode = T), n;
        }
        v(e) {
          let t = 0;
          for (let o of this._$AV)
            void 0 !== o &&
              (void 0 !== o.strings
                ? (o._$AI(e, o, t), (t += o.strings.length - 2))
                : o._$AI(e[t])),
              t++;
        }
      };
      let R = class R {
        constructor(e, t, o, l) {
          var n;
          (this.type = 2),
            (this._$AH = J),
            (this._$AN = void 0),
            (this._$AA = e),
            (this._$AB = t),
            (this._$AM = o),
            (this.options = l),
            (this._$Cp =
              null === (n = null == l ? void 0 : l.isConnected) ||
              void 0 === n ||
              n);
        }
        get _$AU() {
          var e, t;
          return null !==
            (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) &&
            void 0 !== t
            ? t
            : this._$Cp;
        }
        get parentNode() {
          let e = this._$AA.parentNode,
            t = this._$AM;
          return (
            void 0 !== t &&
              11 === (null == e ? void 0 : e.nodeType) &&
              (e = t.parentNode),
            e
          );
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(e, t = this) {
          lit_html_d((e = lit_html_S(this, e, t)))
            ? e === J || null == e || "" === e
              ? (this._$AH !== J && this._$AR(), (this._$AH = J))
              : e !== this._$AH && e !== X && this._(e)
            : void 0 !== e._$litType$
            ? this.g(e)
            : void 0 !== e.nodeType
            ? this.$(e)
            : v(e)
            ? this.T(e)
            : this._(e);
        }
        k(e) {
          return this._$AA.parentNode.insertBefore(e, this._$AB);
        }
        $(e) {
          this._$AH !== e && (this._$AR(), (this._$AH = this.k(e)));
        }
        _(e) {
          this._$AH !== J && lit_html_d(this._$AH)
            ? (this._$AA.nextSibling.data = e)
            : this.$(T.createTextNode(e)),
            (this._$AH = e);
        }
        g(e) {
          var t;
          let { values: o, _$litType$: l } = e,
            n =
              "number" == typeof l
                ? this._$AC(e)
                : (void 0 === l.el &&
                    (l.el = N.createElement(P(l.h, l.h[0]), this.options)),
                  l);
          if (
            (null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === n
          )
            this._$AH.v(o);
          else {
            let e = new M(n, this),
              t = e.u(this.options);
            e.v(o), this.$(t), (this._$AH = e);
          }
        }
        _$AC(e) {
          let t = ee.get(e.strings);
          return void 0 === t && ee.set(e.strings, (t = new N(e))), t;
        }
        T(e) {
          I(this._$AH) || ((this._$AH = []), this._$AR());
          let t = this._$AH,
            o,
            l = 0;
          for (let n of e)
            l === t.length
              ? t.push(
                  (o = new R(
                    this.k(lit_html_u()),
                    this.k(lit_html_u()),
                    this,
                    this.options
                  ))
                )
              : (o = t[l]),
              o._$AI(n),
              l++;
          l < t.length &&
            (this._$AR(o && o._$AB.nextSibling, l), (t.length = l));
        }
        _$AR(e = this._$AA.nextSibling, t) {
          var o;
          for (
            null === (o = this._$AP) || void 0 === o || o.call(this, !1, !0, t);
            e && e !== this._$AB;

          ) {
            let t = e.nextSibling;
            e.remove(), (e = t);
          }
        }
        setConnected(e) {
          var t;
          void 0 === this._$AM &&
            ((this._$Cp = e),
            null === (t = this._$AP) || void 0 === t || t.call(this, e));
        }
      };
      let k = class k {
        constructor(e, t, o, l, n) {
          (this.type = 1),
            (this._$AH = J),
            (this._$AN = void 0),
            (this.element = e),
            (this.name = t),
            (this._$AM = l),
            (this.options = n),
            o.length > 2 || "" !== o[0] || "" !== o[1]
              ? ((this._$AH = Array(o.length - 1).fill(new String())),
                (this.strings = o))
              : (this._$AH = J);
        }
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(e, t = this, o, l) {
          let n = this.strings,
            s = !1;
          if (void 0 === n)
            (s =
              !lit_html_d((e = lit_html_S(this, e, t, 0))) ||
              (e !== this._$AH && e !== X)) && (this._$AH = e);
          else {
            let l, c;
            let d = e;
            for (e = n[0], l = 0; l < n.length - 1; l++)
              (c = lit_html_S(this, d[o + l], t, l)) === X &&
                (c = this._$AH[l]),
                s || (s = !lit_html_d(c) || c !== this._$AH[l]),
                c === J
                  ? (e = J)
                  : e !== J && (e += (null != c ? c : "") + n[l + 1]),
                (this._$AH[l] = c);
          }
          s && !l && this.j(e);
        }
        j(e) {
          e === J
            ? this.element.removeAttribute(this.name)
            : this.element.setAttribute(this.name, null != e ? e : "");
        }
      };
      let H = class H extends k {
        constructor() {
          super(...arguments), (this.type = 3);
        }
        j(e) {
          this.element[this.name] = e === J ? void 0 : e;
        }
      };
      let er = x ? x.emptyScript : "";
      let L = class L extends k {
        constructor() {
          super(...arguments), (this.type = 4);
        }
        j(e) {
          e && e !== J
            ? this.element.setAttribute(this.name, er)
            : this.element.removeAttribute(this.name);
        }
      };
      let z = class z extends k {
        constructor(e, t, o, l, n) {
          super(e, t, o, l, n), (this.type = 5);
        }
        _$AI(e, t = this) {
          var o;
          if (
            (e =
              null !== (o = lit_html_S(this, e, t, 0)) && void 0 !== o
                ? o
                : J) === X
          )
            return;
          let l = this._$AH,
            n =
              (e === J && l !== J) ||
              e.capture !== l.capture ||
              e.once !== l.once ||
              e.passive !== l.passive,
            s = e !== J && (l === J || n);
          n && this.element.removeEventListener(this.name, this, l),
            s && this.element.addEventListener(this.name, this, e),
            (this._$AH = e);
        }
        handleEvent(e) {
          var t, o;
          "function" == typeof this._$AH
            ? this._$AH.call(
                null !==
                  (o =
                    null === (t = this.options) || void 0 === t
                      ? void 0
                      : t.host) && void 0 !== o
                  ? o
                  : this.element,
                e
              )
            : this._$AH.handleEvent(e);
        }
      };
      let Z = class Z {
        constructor(e, t, o) {
          (this.element = e),
            (this.type = 6),
            (this._$AN = void 0),
            (this._$AM = t),
            (this.options = o);
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(e) {
          lit_html_S(this, e);
        }
      };
      let ei = y.litHtmlPolyfillSupport;
      null == ei || ei(N, R),
        (null !== (es = y.litHtmlVersions) && void 0 !== es
          ? es
          : (y.litHtmlVersions = [])
        ).push("2.8.0");
      let D = (e, t, o) => {
        var l, n;
        let s =
            null !== (l = null == o ? void 0 : o.renderBefore) && void 0 !== l
              ? l
              : t,
          c = s._$litPart$;
        if (void 0 === c) {
          let e =
            null !== (n = null == o ? void 0 : o.renderBefore) && void 0 !== n
              ? n
              : null;
          s._$litPart$ = c = new R(
            t.insertBefore(lit_html_u(), e),
            e,
            void 0,
            null != o ? o : {}
          );
        }
        return c._$AI(e), c;
      };
      let lit_element_s = class lit_element_s extends u {
        constructor() {
          super(...arguments),
            (this.renderOptions = { host: this }),
            (this._$Do = void 0);
        }
        createRenderRoot() {
          var e, t;
          let o = super.createRenderRoot();
          return (
            (null !== (e = (t = this.renderOptions).renderBefore) &&
              void 0 !== e) ||
              (t.renderBefore = o.firstChild),
            o
          );
        }
        update(e) {
          let t = this.render();
          this.hasUpdated ||
            (this.renderOptions.isConnected = this.isConnected),
            super.update(e),
            (this._$Do = D(t, this.renderRoot, this.renderOptions));
        }
        connectedCallback() {
          var e;
          super.connectedCallback(),
            null === (e = this._$Do) || void 0 === e || e.setConnected(!0);
        }
        disconnectedCallback() {
          var e;
          super.disconnectedCallback(),
            null === (e = this._$Do) || void 0 === e || e.setConnected(!1);
        }
        render() {
          return X;
        }
      };
      (lit_element_s.finalized = !0),
        (lit_element_s._$litElement$ = !0),
        null === (ec = globalThis.litElementHydrateSupport) ||
          void 0 === ec ||
          ec.call(globalThis, { LitElement: lit_element_s });
      let eo = globalThis.litElementPolyfillSupport;
      null == eo || eo({ LitElement: lit_element_s }),
        (null !== (ed = globalThis.litElementVersions) && void 0 !== ed
          ? ed
          : (globalThis.litElementVersions = [])
        ).push("3.3.3");
      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ let custom_element_e = (e) => (t) =>
          "function" == typeof t
            ? (customElements.define(e, t), t)
            : ((e, t) => {
                let { kind: o, elements: l } = t;
                return {
                  kind: o,
                  elements: l,
                  finisher(t) {
                    customElements.define(e, t);
                  },
                };
              })(e, t),
        property_i = (e, t) =>
          "method" !== t.kind || !t.descriptor || "value" in t.descriptor
            ? {
                kind: "field",
                key: Symbol(),
                placement: "own",
                descriptor: {},
                originalKey: t.key,
                initializer() {
                  "function" == typeof t.initializer &&
                    (this[t.key] = t.initializer.call(this));
                },
                finisher(o) {
                  o.createProperty(t.key, e);
                },
              }
            : {
                ...t,
                finisher(o) {
                  o.createProperty(t.key, e);
                },
              },
        property_e = (e, t, o) => {
          t.constructor.createProperty(o, e);
        };
      function property_n(e) {
        return (t, o) =>
          void 0 !== o ? property_e(e, t, o) : property_i(e, t);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ function state_t(e) {
        return property_n({ ...e, state: !0 });
      }
      null !=
        (null === (em = window.HTMLSlotElement) || void 0 === em
          ? void 0
          : em.prototype.assignedElements) ||
        ((e, t) =>
          e.assignedNodes(t).filter((e) => e.nodeType === Node.ELEMENT_NODE));
      let directive_i = class directive_i {
        constructor(e) {}
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AT(e, t, o) {
          (this._$Ct = e), (this._$AM = t), (this._$Ci = o);
        }
        _$AS(e, t) {
          return this.update(e, t);
        }
        update(e, t) {
          return this.render(...t);
        }
      };
      /**
       * @license
       * Copyright 2018 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ let el =
        ((ea = class extends directive_i {
          constructor(e) {
            var t;
            if (
              (super(e),
              1 !== e.type ||
                "class" !== e.name ||
                (null === (t = e.strings) || void 0 === t ? void 0 : t.length) >
                  2)
            )
              throw Error(
                "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
              );
          }
          render(e) {
            return (
              " " +
              Object.keys(e)
                .filter((t) => e[t])
                .join(" ") +
              " "
            );
          }
          update(e, [t]) {
            var o, l;
            if (void 0 === this.it) {
              for (let l in ((this.it = new Set()),
              void 0 !== e.strings &&
                (this.nt = new Set(
                  e.strings
                    .join(" ")
                    .split(/\s/)
                    .filter((e) => "" !== e)
                )),
              t))
                !t[l] ||
                  (null === (o = this.nt) || void 0 === o
                    ? void 0
                    : o.has(l)) ||
                  this.it.add(l);
              return this.render(t);
            }
            let n = e.element.classList;
            for (let e in (this.it.forEach((e) => {
              e in t || (n.remove(e), this.it.delete(e));
            }),
            t)) {
              let o = !!t[e];
              o === this.it.has(e) ||
                (null === (l = this.nt) || void 0 === l ? void 0 : l.has(e)) ||
                (o
                  ? (n.add(e), this.it.add(e))
                  : (n.remove(e), this.it.delete(e)));
            }
            return X;
          }
        }),
        (...e) => ({ _$litDirective$: ea, values: e }));
      var ea,
        en,
        es,
        ec,
        ed,
        em,
        eh = o(70672);
      let ep = {
          duration: 0.3,
          delay: 0,
          endDelay: 0,
          repeat: 0,
          easing: "ease",
        },
        eu = { ms: (e) => 1e3 * e, s: (e) => e / 1e3 },
        noop = () => {},
        noopReturn = (e) => e;
      function stopAnimation(e, t = !0) {
        if (e && "finished" !== e.playState)
          try {
            e.stop ? e.stop() : (t && e.commitStyles(), e.cancel());
          } catch (e) {}
      }
      let createAnimation = (e) => e(),
        withControls = (e, t, o = ep.duration) =>
          new Proxy(
            {
              animations: e.map(createAnimation).filter(Boolean),
              duration: o,
              options: t,
            },
            eg
          ),
        getActiveAnimation = (e) => e.animations[0],
        eg = {
          get: (e, t) => {
            let o = getActiveAnimation(e);
            switch (t) {
              case "duration":
                return e.duration;
              case "currentTime":
                return eu.s((null == o ? void 0 : o[t]) || 0);
              case "playbackRate":
              case "playState":
                return null == o ? void 0 : o[t];
              case "finished":
                return (
                  e.finished ||
                    (e.finished = Promise.all(
                      e.animations.map(selectFinished)
                    ).catch(noop)),
                  e.finished
                );
              case "stop":
                return () => {
                  e.animations.forEach((e) => stopAnimation(e));
                };
              case "forEachNative":
                return (t) => {
                  e.animations.forEach((o) => t(o, e));
                };
              default:
                return void 0 === (null == o ? void 0 : o[t])
                  ? void 0
                  : () => e.animations.forEach((e) => e[t]());
            }
          },
          set: (e, t, o) => {
            switch (t) {
              case "currentTime":
                o = eu.ms(o);
              case "playbackRate":
                for (let l = 0; l < e.animations.length; l++)
                  e.animations[l][t] = o;
                return !0;
            }
            return !1;
          },
        },
        selectFinished = (e) => e.finished,
        isEasingGenerator = (e) => "object" == typeof e && !!e.createAnimation,
        is_number_es_isNumber = (e) => "number" == typeof e,
        isEasingList = (e) => Array.isArray(e) && !is_number_es_isNumber(e[0]),
        mix = (e, t, o) => -o * e + o * t + e,
        progress = (e, t, o) => (t - e == 0 ? 1 : (o - e) / (t - e));
      function fillOffset(e, t) {
        let o = e[e.length - 1];
        for (let l = 1; l <= t; l++) {
          let n = progress(0, t, l);
          e.push(mix(o, 1, n));
        }
      }
      let wrap = (e, t, o) => {
          let l = t - e;
          return ((((o - e) % l) + l) % l) + e;
        },
        clamp = (e, t, o) => Math.min(Math.max(o, e), t),
        calcBezier = (e, t, o) =>
          (((1 - 3 * o + 3 * t) * e + (3 * o - 6 * t)) * e + 3 * t) * e;
      function cubicBezier(e, t, o, l) {
        if (e === t && o === l) return noopReturn;
        let getTForX = (t) =>
          (function (e, t, o, l, n) {
            let s, c;
            let d = 0;
            do
              (s = calcBezier((c = t + (o - t) / 2), l, n) - e) > 0
                ? (o = c)
                : (t = c);
            while (Math.abs(s) > 1e-7 && ++d < 12);
            return c;
          })(t, 0, 1, e, o);
        return (e) => (0 === e || 1 === e ? e : calcBezier(getTForX(e), t, l));
      }
      let steps =
          (e, t = "end") =>
          (o) => {
            o = "end" === t ? Math.min(o, 0.999) : Math.max(o, 0.001);
            let l = o * e,
              n = "end" === t ? Math.floor(l) : Math.ceil(l);
            return clamp(0, 1, n / e);
          },
        isFunction = (e) => "function" == typeof e,
        isCubicBezier = (e) => Array.isArray(e) && is_number_es_isNumber(e[0]),
        ew = {
          ease: cubicBezier(0.25, 0.1, 0.25, 1),
          "ease-in": cubicBezier(0.42, 0, 1, 1),
          "ease-in-out": cubicBezier(0.42, 0, 0.58, 1),
          "ease-out": cubicBezier(0, 0, 0.58, 1),
        },
        ev = /\((.*?)\)/;
      function easing_es_getEasingFunction(e) {
        if (isFunction(e)) return e;
        if (isCubicBezier(e)) return cubicBezier(...e);
        let t = ew[e];
        if (t) return t;
        if (e.startsWith("steps")) {
          let t = ev.exec(e);
          if (t) {
            let e = t[1].split(",");
            return steps(parseFloat(e[0]), e[1].trim());
          }
        }
        return noopReturn;
      }
      let Animation = class Animation {
        constructor(
          e,
          t = [0, 1],
          {
            easing: o,
            duration: l = ep.duration,
            delay: n = ep.delay,
            endDelay: s = ep.endDelay,
            repeat: c = ep.repeat,
            offset: d,
            direction: m = "normal",
            autoplay: h = !0,
          } = {}
        ) {
          if (
            ((this.startTime = null),
            (this.rate = 1),
            (this.t = 0),
            (this.cancelTimestamp = null),
            (this.easing = noopReturn),
            (this.duration = 0),
            (this.totalDuration = 0),
            (this.repeat = 0),
            (this.playState = "idle"),
            (this.finished = new Promise((e, t) => {
              (this.resolve = e), (this.reject = t);
            })),
            isEasingGenerator((o = o || ep.easing)))
          ) {
            let e = o.createAnimation(t);
            (o = e.easing), (t = e.keyframes || t), (l = e.duration || l);
          }
          (this.repeat = c),
            (this.easing = isEasingList(o)
              ? noopReturn
              : easing_es_getEasingFunction(o)),
            this.updateDuration(l);
          let p = (function (
            e,
            t = (function (e) {
              let t = [0];
              return fillOffset(t, e - 1), t;
            })(e.length),
            o = noopReturn
          ) {
            let l = e.length,
              n = l - t.length;
            return (
              n > 0 && fillOffset(t, n),
              (n) => {
                var s;
                let c = 0;
                for (; c < l - 2 && !(n < t[c + 1]); c++);
                let d = clamp(0, 1, progress(t[c], t[c + 1], n)),
                  m = ((s = c), isEasingList(o) ? o[wrap(0, o.length, s)] : o);
                return (d = m(d)), mix(e[c], e[c + 1], d);
              }
            );
          })(
            t,
            d,
            isEasingList(o) ? o.map(easing_es_getEasingFunction) : noopReturn
          );
          (this.tick = (t) => {
            var o;
            let l = 0;
            (l =
              void 0 !== this.pauseTime
                ? this.pauseTime
                : (t - this.startTime) * this.rate),
              (this.t = l),
              (l /= 1e3),
              (l = Math.max(l - n, 0)),
              "finished" === this.playState &&
                void 0 === this.pauseTime &&
                (l = this.totalDuration);
            let c = l / this.duration,
              d = Math.floor(c),
              h = c % 1;
            !h && c >= 1 && (h = 1), 1 === h && d--;
            let g = d % 2;
            ("reverse" === m ||
              ("alternate" === m && g) ||
              ("alternate-reverse" === m && !g)) &&
              (h = 1 - h);
            let f = l >= this.totalDuration ? 1 : Math.min(h, 1),
              b = p(this.easing(f));
            e(b);
            let _ =
              void 0 === this.pauseTime &&
              ("finished" === this.playState || l >= this.totalDuration + s);
            _
              ? ((this.playState = "finished"),
                null === (o = this.resolve) || void 0 === o || o.call(this, b))
              : "idle" !== this.playState &&
                (this.frameRequestId = requestAnimationFrame(this.tick));
          }),
            h && this.play();
        }
        play() {
          let e = performance.now();
          (this.playState = "running"),
            void 0 !== this.pauseTime
              ? (this.startTime = e - this.pauseTime)
              : this.startTime || (this.startTime = e),
            (this.cancelTimestamp = this.startTime),
            (this.pauseTime = void 0),
            (this.frameRequestId = requestAnimationFrame(this.tick));
        }
        pause() {
          (this.playState = "paused"), (this.pauseTime = this.t);
        }
        finish() {
          (this.playState = "finished"), this.tick(0);
        }
        stop() {
          var e;
          (this.playState = "idle"),
            void 0 !== this.frameRequestId &&
              cancelAnimationFrame(this.frameRequestId),
            null === (e = this.reject) || void 0 === e || e.call(this, !1);
        }
        cancel() {
          this.stop(), this.tick(this.cancelTimestamp);
        }
        reverse() {
          this.rate *= -1;
        }
        commitStyles() {}
        updateDuration(e) {
          (this.duration = e), (this.totalDuration = e * (this.repeat + 1));
        }
        get currentTime() {
          return this.t;
        }
        set currentTime(e) {
          void 0 !== this.pauseTime || 0 === this.rate
            ? (this.pauseTime = e)
            : (this.startTime = performance.now() - e / this.rate);
        }
        get playbackRate() {
          return this.rate;
        }
        set playbackRate(e) {
          this.rate = e;
        }
      };
      var invariant = function () {};
      let MotionValue = class MotionValue {
        setAnimation(e) {
          (this.animation = e),
            null == e ||
              e.finished.then(() => this.clearAnimation()).catch(() => {});
        }
        clearAnimation() {
          this.animation = this.generator = void 0;
        }
      };
      let ef = new WeakMap();
      function getAnimationData(e) {
        return (
          ef.has(e) || ef.set(e, { transforms: [], values: new Map() }),
          ef.get(e)
        );
      }
      let eb = ["", "X", "Y", "Z"],
        e_ = { x: "translateX", y: "translateY", z: "translateZ" },
        ey = {
          syntax: "<angle>",
          initialValue: "0deg",
          toDefaultUnit: (e) => e + "deg",
        },
        ex = {
          translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: (e) => e + "px",
          },
          rotate: ey,
          scale: {
            syntax: "<number>",
            initialValue: 1,
            toDefaultUnit: noopReturn,
          },
          skew: ey,
        },
        e$ = new Map(),
        asTransformCssVar = (e) => `--motion-${e}`,
        eC = ["x", "y", "z"];
      ["translate", "scale", "rotate", "skew"].forEach((e) => {
        eb.forEach((t) => {
          eC.push(e + t), e$.set(asTransformCssVar(e + t), ex[e]);
        });
      });
      let compareTransformOrder = (e, t) => eC.indexOf(e) - eC.indexOf(t),
        eA = new Set(eC),
        isTransform = (e) => eA.has(e),
        addTransformToElement = (e, t) => {
          var o;
          e_[t] && (t = e_[t]);
          let { transforms: l } = getAnimationData(e);
          (o = t),
            -1 === l.indexOf(o) && l.push(o),
            (e.style.transform = buildTransformTemplate(l));
        },
        buildTransformTemplate = (e) =>
          e
            .sort(compareTransformOrder)
            .reduce(transformListToString, "")
            .trim(),
        transformListToString = (e, t) =>
          `${e} ${t}(var(${asTransformCssVar(t)}))`,
        isCssVar = (e) => e.startsWith("--"),
        eE = new Set(),
        testAnimation = (e, t) => document.createElement("div").animate(e, t),
        eO = {
          cssRegisterProperty: () =>
            "undefined" != typeof CSS &&
            Object.hasOwnProperty.call(CSS, "registerProperty"),
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
          partialKeyframes: () => {
            try {
              testAnimation({ opacity: [1] });
            } catch (e) {
              return !1;
            }
            return !0;
          },
          finished: () =>
            !!testAnimation({ opacity: [0, 1] }, { duration: 0.001 }).finished,
          linearEasing: () => {
            try {
              testAnimation({ opacity: 0 }, { easing: "linear(0, 1)" });
            } catch (e) {
              return !1;
            }
            return !0;
          },
        },
        ek = {},
        eT = {};
      for (let e in eO)
        eT[e] = () => (void 0 === ek[e] && (ek[e] = eO[e]()), ek[e]);
      let generateLinearEasingPoints = (e, t) => {
          let o = "",
            l = Math.round(t / 0.015);
          for (let t = 0; t < l; t++) o += e(progress(0, l - 1, t)) + ", ";
          return o.substring(0, o.length - 2);
        },
        convertEasing = (e, t) =>
          isFunction(e)
            ? eT.linearEasing()
              ? `linear(${generateLinearEasingPoints(e, t)})`
              : ep.easing
            : isCubicBezier(e)
            ? cubicBezierAsString(e)
            : e,
        cubicBezierAsString = ([e, t, o, l]) =>
          `cubic-bezier(${e}, ${t}, ${o}, ${l})`,
        keyframesList = (e) => (Array.isArray(e) ? e : [e]);
      function getStyleName(e) {
        return e_[e] && (e = e_[e]), isTransform(e) ? asTransformCssVar(e) : e;
      }
      let eI = {
          get: (e, t) => {
            let o = isCssVar((t = getStyleName(t)))
              ? e.style.getPropertyValue(t)
              : getComputedStyle(e)[t];
            if (!o && 0 !== o) {
              let e = e$.get(t);
              e && (o = e.initialValue);
            }
            return o;
          },
          set: (e, t, o) => {
            isCssVar((t = getStyleName(t)))
              ? e.style.setProperty(t, o)
              : (e.style[t] = o);
          },
        },
        isString = (e) => "string" == typeof e,
        getOptions = (e, t) =>
          e[t]
            ? Object.assign(Object.assign({}, e), e[t])
            : Object.assign({}, e),
        animate = function (e, t, o = {}) {
          var l, n, s, c, d;
          "string" == typeof (l = e)
            ? n
              ? ((null !== (s = n[l]) && void 0 !== s) ||
                  (n[l] = document.querySelectorAll(l)),
                (l = n[l]))
              : (l = document.querySelectorAll(l))
            : l instanceof Element && (l = [l]),
            (e = Array.from(l || []));
          let m = e.length;
          invariant(!!m, "No valid element provided."),
            invariant(!!t, "No keyframes defined.");
          let h = [];
          for (let l = 0; l < m; l++) {
            let n = e[l];
            for (let e in t) {
              let s = getOptions(o, e);
              s.delay = ((c = s.delay), (d = l), isFunction(c) ? c(d, m) : c);
              let p = (function (e, t, o, l = {}, n) {
                var s;
                let c;
                let d = window.__MOTION_DEV_TOOLS_RECORD,
                  m = !1 !== l.record && d,
                  {
                    duration: h = ep.duration,
                    delay: p = ep.delay,
                    endDelay: g = ep.endDelay,
                    repeat: f = ep.repeat,
                    easing: b = ep.easing,
                    persist: _ = !1,
                    direction: y,
                    offset: x,
                    allowWebkitAcceleration: $ = !1,
                    autoplay: C = !0,
                  } = l,
                  A = getAnimationData(e),
                  E = isTransform(t),
                  O = eT.waapi();
                E && addTransformToElement(e, t);
                let T = getStyleName(t),
                  I =
                    ((s = A.values).has(T) || s.set(T, new MotionValue()),
                    s.get(T)),
                  j = e$.get(T);
                return (
                  stopAnimation(
                    I.animation,
                    !(isEasingGenerator(b) && I.generator) && !1 !== l.record
                  ),
                  () => {
                    let readInitialValue = () => {
                        var t, o;
                        return null !==
                          (o =
                            null !== (t = eI.get(e, T)) && void 0 !== t
                              ? t
                              : null == j
                              ? void 0
                              : j.initialValue) && void 0 !== o
                          ? o
                          : 0;
                      },
                      s = (function (e, t) {
                        for (let o = 0; o < e.length; o++)
                          null === e[o] && (e[o] = o ? e[o - 1] : t());
                        return e;
                      })(keyframesList(o), readInitialValue),
                      A = (function (e, t) {
                        var o;
                        let l =
                            (null == t ? void 0 : t.toDefaultUnit) ||
                            noopReturn,
                          n = e[e.length - 1];
                        if (isString(n)) {
                          let e =
                            (null === (o = n.match(/(-?[\d.]+)([a-z%]*)/)) ||
                            void 0 === o
                              ? void 0
                              : o[2]) || "";
                          e && (l = (t) => t + e);
                        }
                        return l;
                      })(s, j);
                    if (isEasingGenerator(b)) {
                      let e = b.createAnimation(
                        s,
                        "opacity" !== t,
                        readInitialValue,
                        T,
                        I
                      );
                      (b = e.easing),
                        (s = e.keyframes || s),
                        (h = e.duration || h);
                    }
                    if (
                      (isCssVar(T) &&
                        (eT.cssRegisterProperty()
                          ? (function (e) {
                              if (!eE.has(e)) {
                                eE.add(e);
                                try {
                                  let { syntax: t, initialValue: o } = e$.has(e)
                                    ? e$.get(e)
                                    : {};
                                  CSS.registerProperty({
                                    name: e,
                                    inherits: !1,
                                    syntax: t,
                                    initialValue: o,
                                  });
                                } catch (e) {}
                              }
                            })(T)
                          : (O = !1)),
                      E &&
                        !eT.linearEasing() &&
                        (isFunction(b) ||
                          (isEasingList(b) && b.some(isFunction))) &&
                        (O = !1),
                      O)
                    ) {
                      j &&
                        (s = s.map((e) =>
                          is_number_es_isNumber(e) ? j.toDefaultUnit(e) : e
                        )),
                        1 === s.length &&
                          (!eT.partialKeyframes() || m) &&
                          s.unshift(readInitialValue());
                      let t = {
                        delay: eu.ms(p),
                        duration: eu.ms(h),
                        endDelay: eu.ms(g),
                        easing: isEasingList(b) ? void 0 : convertEasing(b, h),
                        direction: y,
                        iterations: f + 1,
                        fill: "both",
                      };
                      (c = e.animate(
                        {
                          [T]: s,
                          offset: x,
                          easing: isEasingList(b)
                            ? b.map((e) => convertEasing(e, h))
                            : void 0,
                        },
                        t
                      )).finished ||
                        (c.finished = new Promise((e, t) => {
                          (c.onfinish = e), (c.oncancel = t);
                        }));
                      let o = s[s.length - 1];
                      c.finished
                        .then(() => {
                          _ || (eI.set(e, T, o), c.cancel());
                        })
                        .catch(noop),
                        $ || (c.playbackRate = 1.000001);
                    } else if (n && E)
                      1 ===
                        (s = s.map((e) =>
                          "string" == typeof e ? parseFloat(e) : e
                        )).length && s.unshift(parseFloat(readInitialValue())),
                        (c = new n(
                          (t) => {
                            eI.set(e, T, A ? A(t) : t);
                          },
                          s,
                          Object.assign(Object.assign({}, l), {
                            duration: h,
                            easing: b,
                          })
                        ));
                    else {
                      let t = s[s.length - 1];
                      eI.set(
                        e,
                        T,
                        j && is_number_es_isNumber(t) ? j.toDefaultUnit(t) : t
                      );
                    }
                    return (
                      m &&
                        d(
                          e,
                          t,
                          s,
                          {
                            duration: h,
                            delay: p,
                            easing: b,
                            repeat: f,
                            offset: x,
                          },
                          "motion-one"
                        ),
                      I.setAnimation(c),
                      c && !C && c.pause(),
                      c
                    );
                  }
                );
              })(n, e, t[e], s, Animation);
              h.push(p);
            }
          }
          return withControls(h, o, o.duration);
        };
      function animateProgress(e, t = {}) {
        return withControls(
          [
            () => {
              let o = new Animation(e, [0, 1], t);
              return o.finished.catch(() => {}), o;
            },
          ],
          t,
          t.duration
        );
      }
      function animate_es_animate(e, t, o) {
        let l = isFunction(e) ? animateProgress : animate;
        return l(e, t, o);
      }
      /**
       * @license
       * Copyright 2018 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ let if_defined_l = (e) => (null != e ? e : J);
      var eP = o(92592),
        eS = Object.defineProperty,
        eR = Object.getOwnPropertySymbols,
        eM = Object.prototype.hasOwnProperty,
        eL = Object.prototype.propertyIsEnumerable,
        __defNormalProp = (e, t, o) =>
          t in e
            ? eS(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              })
            : (e[t] = o),
        __spreadValues = (e, t) => {
          for (var o in t || (t = {}))
            eM.call(t, o) && __defNormalProp(e, o, t[o]);
          if (eR)
            for (var o of eR(t)) eL.call(t, o) && __defNormalProp(e, o, t[o]);
          return e;
        };
      function themeVariablesPresets() {
        return {
          "--wcm-accent-color": "#3396FF",
          "--wcm-accent-fill-color": "#FFFFFF",
          "--wcm-z-index": "89",
          "--wcm-background-color": "#3396FF",
          "--wcm-background-border-radius": "8px",
          "--wcm-container-border-radius": "30px",
          "--wcm-wallet-icon-border-radius": "15px",
          "--wcm-wallet-icon-large-border-radius": "30px",
          "--wcm-wallet-icon-small-border-radius": "7px",
          "--wcm-input-border-radius": "28px",
          "--wcm-button-border-radius": "10px",
          "--wcm-notification-border-radius": "36px",
          "--wcm-secondary-button-border-radius": "28px",
          "--wcm-icon-button-border-radius": "50%",
          "--wcm-button-hover-highlight-border-radius": "10px",
          "--wcm-text-big-bold-size": "20px",
          "--wcm-text-big-bold-weight": "600",
          "--wcm-text-big-bold-line-height": "24px",
          "--wcm-text-big-bold-letter-spacing": "-0.03em",
          "--wcm-text-big-bold-text-transform": "none",
          "--wcm-text-xsmall-bold-size": "10px",
          "--wcm-text-xsmall-bold-weight": "700",
          "--wcm-text-xsmall-bold-line-height": "12px",
          "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
          "--wcm-text-xsmall-bold-text-transform": "uppercase",
          "--wcm-text-xsmall-regular-size": "12px",
          "--wcm-text-xsmall-regular-weight": "600",
          "--wcm-text-xsmall-regular-line-height": "14px",
          "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
          "--wcm-text-xsmall-regular-text-transform": "none",
          "--wcm-text-small-thin-size": "14px",
          "--wcm-text-small-thin-weight": "500",
          "--wcm-text-small-thin-line-height": "16px",
          "--wcm-text-small-thin-letter-spacing": "-0.03em",
          "--wcm-text-small-thin-text-transform": "none",
          "--wcm-text-small-regular-size": "14px",
          "--wcm-text-small-regular-weight": "600",
          "--wcm-text-small-regular-line-height": "16px",
          "--wcm-text-small-regular-letter-spacing": "-0.03em",
          "--wcm-text-small-regular-text-transform": "none",
          "--wcm-text-medium-regular-size": "16px",
          "--wcm-text-medium-regular-weight": "600",
          "--wcm-text-medium-regular-line-height": "20px",
          "--wcm-text-medium-regular-letter-spacing": "-0.03em",
          "--wcm-text-medium-regular-text-transform": "none",
          "--wcm-font-family":
            "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
          "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
          "--wcm-success-color": "rgb(38,181,98)",
          "--wcm-error-color": "rgb(242, 90, 103)",
          "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
          "--wcm-overlay-backdrop-filter": "none",
        };
      }
      let ej = {
          getPreset: (e) => themeVariablesPresets()[e],
          setTheme() {
            let e = document.querySelector(":root"),
              { themeVariables: t } = eh.ThemeCtrl.state;
            if (e) {
              let o = __spreadValues(
                __spreadValues(
                  __spreadValues(
                    {},
                    (function () {
                      var e;
                      let t =
                          null != (e = eh.ThemeCtrl.state.themeMode)
                            ? e
                            : "dark",
                        o = {
                          light: {
                            foreground: {
                              1: "rgb(20,20,20)",
                              2: "rgb(121,134,134)",
                              3: "rgb(158,169,169)",
                            },
                            background: {
                              1: "rgb(255,255,255)",
                              2: "rgb(241,243,243)",
                              3: "rgb(228,231,231)",
                            },
                            overlay: "rgba(0,0,0,0.1)",
                          },
                          dark: {
                            foreground: {
                              1: "rgb(228,231,231)",
                              2: "rgb(148,158,158)",
                              3: "rgb(110,119,119)",
                            },
                            background: {
                              1: "rgb(20,20,20)",
                              2: "rgb(39,42,42)",
                              3: "rgb(59,64,64)",
                            },
                            overlay: "rgba(255,255,255,0.1)",
                          },
                        }[t];
                      return {
                        "--wcm-color-fg-1": o.foreground[1],
                        "--wcm-color-fg-2": o.foreground[2],
                        "--wcm-color-fg-3": o.foreground[3],
                        "--wcm-color-bg-1": o.background[1],
                        "--wcm-color-bg-2": o.background[2],
                        "--wcm-color-bg-3": o.background[3],
                        "--wcm-color-overlay": o.overlay,
                      };
                    })()
                  ),
                  themeVariablesPresets()
                ),
                t
              );
              Object.entries(o).forEach(([t, o]) => e.style.setProperty(t, o));
            }
          },
          globalCss: i`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`,
        },
        eN = i`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
      var eD = Object.defineProperty,
        eW = Object.getOwnPropertyDescriptor,
        __decorateClass$x = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? eW(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && eD(t, o, s), s;
        };
      let ez = class extends lit_element_s {
        constructor() {
          super(...arguments),
            (this.disabled = !1),
            (this.iconLeft = void 0),
            (this.iconRight = void 0),
            (this.onClick = () => null),
            (this.variant = "default");
        }
        render() {
          let e = {
              "wcm-icon-left": void 0 !== this.iconLeft,
              "wcm-icon-right": void 0 !== this.iconRight,
              "wcm-ghost": "ghost" === this.variant,
              "wcm-outline": "outline" === this.variant,
            },
            t = "inverse";
          return (
            "ghost" === this.variant && (t = "secondary"),
            "outline" === this.variant && (t = "accent"),
            Q`<button class="${el(e)}" ?disabled="${this.disabled}" @click="${
              this.onClick
            }">${
              this.iconLeft
            }<wcm-text variant="small-regular" color="${t}"><slot></slot></wcm-text>${
              this.iconRight
            }</button>`
          );
        }
      };
      (ez.styles = [ej.globalCss, eN]),
        __decorateClass$x(
          [property_n({ type: Boolean })],
          ez.prototype,
          "disabled",
          2
        ),
        __decorateClass$x([property_n()], ez.prototype, "iconLeft", 2),
        __decorateClass$x([property_n()], ez.prototype, "iconRight", 2),
        __decorateClass$x([property_n()], ez.prototype, "onClick", 2),
        __decorateClass$x([property_n()], ez.prototype, "variant", 2),
        (ez = __decorateClass$x([custom_element_e("wcm-button")], ez));
      let eU = i`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
      var eH = Object.defineProperty,
        eV = Object.getOwnPropertyDescriptor,
        __decorateClass$w = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? eV(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && eH(t, o, s), s;
        };
      let eB = class extends lit_element_s {
        constructor() {
          super(...arguments), (this.disabled = !1), (this.variant = "primary");
        }
        render() {
          let e = { "wcm-secondary": "secondary" === this.variant };
          return Q`<button ?disabled="${this.disabled}" class="${el(
            e
          )}"><slot></slot></button>`;
        }
      };
      (eB.styles = [ej.globalCss, eU]),
        __decorateClass$w(
          [property_n({ type: Boolean })],
          eB.prototype,
          "disabled",
          2
        ),
        __decorateClass$w([property_n()], eB.prototype, "variant", 2),
        (eB = __decorateClass$w([custom_element_e("wcm-button-big")], eB));
      let eZ = i`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
      var eF = Object.defineProperty,
        eq = Object.getOwnPropertyDescriptor;
      let eK = class extends lit_element_s {
        render() {
          return Q`<div><slot></slot></div>`;
        }
      };
      (eK.styles = [ej.globalCss, eZ]),
        (eK = ((e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? eq(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && eF(t, o, s), s;
        })([custom_element_e("wcm-info-footer")], eK));
      let eG = {
          CROSS_ICON: Y`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
          WALLET_CONNECT_LOGO: Y`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
          WALLET_CONNECT_ICON: Y`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
          WALLET_CONNECT_ICON_COLORED: Y`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
          BACK_ICON: Y`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
          COPY_ICON: Y`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
          RETRY_ICON: Y`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
          DESKTOP_ICON: Y`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
          MOBILE_ICON: Y`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
          ARROW_DOWN_ICON: Y`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
          ARROW_UP_RIGHT_ICON: Y`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
          ARROW_RIGHT_ICON: Y`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
          QRCODE_ICON: Y`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
          SCAN_ICON: Y`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
          CHECKMARK_ICON: Y`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
          SEARCH_ICON: Y`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
          WALLET_PLACEHOLDER: Y`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          GLOBE_ICON: Y`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`,
        },
        eQ = i`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
      var eY = Object.defineProperty,
        eX = Object.getOwnPropertyDescriptor;
      let eJ = class extends lit_element_s {
        render() {
          return Q`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${eG.WALLET_CONNECT_LOGO} <button @click="${eh.jb.close}">${eG.CROSS_ICON}</button></div>`;
        }
      };
      (eJ.styles = [ej.globalCss, eQ]),
        (eJ = ((e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? eX(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && eY(t, o, s), s;
        })([custom_element_e("wcm-modal-backcard")], eJ));
      let e0 = i`main{padding:20px;padding-top:0;width:100%}`;
      var e1 = Object.defineProperty,
        e2 = Object.getOwnPropertyDescriptor;
      let e5 = class extends lit_element_s {
        render() {
          return Q`<main><slot></slot></main>`;
        }
      };
      (e5.styles = [ej.globalCss, e0]),
        (e5 = ((e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? e2(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && e1(t, o, s), s;
        })([custom_element_e("wcm-modal-content")], e5));
      let e3 = i`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
      var e4 = Object.defineProperty,
        e7 = Object.getOwnPropertyDescriptor;
      let e6 = class extends lit_element_s {
        render() {
          return Q`<footer><slot></slot></footer>`;
        }
      };
      (e6.styles = [ej.globalCss, e3]),
        (e6 = ((e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? e7(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && e4(t, o, s), s;
        })([custom_element_e("wcm-modal-footer")], e6));
      let e8 = i`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
      var e9 = Object.defineProperty,
        te = Object.getOwnPropertyDescriptor,
        __decorateClass$r = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? te(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && e9(t, o, s), s;
        };
      let tt = class extends lit_element_s {
        constructor() {
          super(...arguments),
            (this.title = ""),
            (this.onAction = void 0),
            (this.actionIcon = void 0),
            (this.border = !1);
        }
        backBtnTemplate() {
          return Q`<button class="wcm-back-btn" @click="${eh.AV.goBack}">${eG.BACK_ICON}</button>`;
        }
        actionBtnTemplate() {
          return Q`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
        }
        render() {
          let e = { "wcm-border": this.border },
            t = eh.AV.state.history.length > 1,
            o = this.title
              ? Q`<wcm-text variant="big-bold">${this.title}</wcm-text>`
              : Q`<slot></slot>`;
          return Q`<header class="${el(e)}">${
            t ? this.backBtnTemplate() : null
          } ${o} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
        }
      };
      (tt.styles = [ej.globalCss, e8]),
        __decorateClass$r([property_n()], tt.prototype, "title", 2),
        __decorateClass$r([property_n()], tt.prototype, "onAction", 2),
        __decorateClass$r([property_n()], tt.prototype, "actionIcon", 2),
        __decorateClass$r(
          [property_n({ type: Boolean })],
          tt.prototype,
          "border",
          2
        ),
        (tt = __decorateClass$r([custom_element_e("wcm-modal-header")], tt));
      let tr = {
          MOBILE_BREAKPOINT: 600,
          WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
          EXPLORER_WALLET_URL:
            "https://explorer.walletconnect.com/?type=wallet",
          getShadowRootElement(e, t) {
            let o = e.renderRoot.querySelector(t);
            if (!o) throw Error(`${t} not found`);
            return o;
          },
          getWalletIcon({ id: e, image_id: t }) {
            let { walletImages: o } = eh.ConfigCtrl.state;
            return (null == o ? void 0 : o[e])
              ? o[e]
              : t
              ? eh.ExplorerCtrl.getWalletImageUrl(t)
              : "";
          },
          getWalletName: (e, t = !1) =>
            t && e.length > 8 ? `${e.substring(0, 8)}..` : e,
          isMobileAnimation: () => window.innerWidth <= tr.MOBILE_BREAKPOINT,
          async preloadImage(e) {
            let t = new Promise((t, o) => {
              let l = new Image();
              (l.onload = t),
                (l.onerror = o),
                (l.crossOrigin = "anonymous"),
                (l.src = e);
            });
            return Promise.race([t, eh.zv.wait(3e3)]);
          },
          getErrorMessage: (e) =>
            e instanceof Error ? e.message : "Unknown Error",
          debounce(e, t = 500) {
            let o;
            return (...l) => {
              o && clearTimeout(o),
                (o = setTimeout(function () {
                  e(...l);
                }, t));
            };
          },
          handleMobileLinking(e, t = "_self") {
            let { walletConnectUri: o } = eh.OptionsCtrl.state,
              { mobile: l, name: n } = e,
              s = null == l ? void 0 : l.native,
              c = null == l ? void 0 : l.universal;
            tr.setRecentWallet(e),
              o &&
                (function (e) {
                  if (s) {
                    let o = eh.zv.formatNativeUrl(s, e, n);
                    eh.zv.openHref(o, t);
                  } else if (c) {
                    let o = eh.zv.formatUniversalUrl(c, e, n);
                    eh.zv.openHref(o, t);
                  }
                })(o);
          },
          handleAndroidLinking() {
            let { walletConnectUri: e } = eh.OptionsCtrl.state;
            e &&
              (eh.zv.setWalletConnectAndroidDeepLink(e),
              eh.zv.openHref(e, eh.zv.isTelegram() ? "_blank" : "_self"));
          },
          async handleUriCopy() {
            let { walletConnectUri: e } = eh.OptionsCtrl.state;
            if (e)
              try {
                await navigator.clipboard.writeText(e),
                  eh.ToastCtrl.openToast("Link copied", "success");
              } catch (e) {
                eh.ToastCtrl.openToast("Failed to copy", "error");
              }
          },
          getCustomImageUrls() {
            let { walletImages: e } = eh.ConfigCtrl.state,
              t = Object.values(null != e ? e : {});
            return Object.values(t);
          },
          truncate: (e, t = 8) =>
            e.length <= t
              ? e
              : `${e.substring(0, 4)}...${e.substring(e.length - 4)}`,
          setRecentWallet(e) {
            try {
              localStorage.setItem(
                tr.WCM_RECENT_WALLET_DATA,
                JSON.stringify(e)
              );
            } catch (e) {
              console.info("Unable to set recent wallet");
            }
          },
          getRecentWallet() {
            try {
              let e = localStorage.getItem(tr.WCM_RECENT_WALLET_DATA);
              if (e) {
                let t = JSON.parse(e);
                return t;
              }
            } catch (e) {
              console.info("Unable to get recent wallet");
            }
          },
          caseSafeIncludes: (e, t) => e.toUpperCase().includes(t.toUpperCase()),
          openWalletExplorerUrl() {
            eh.zv.openHref(tr.EXPLORER_WALLET_URL, "_blank");
          },
          getCachedRouterWalletPlatforms() {
            let { desktop: e, mobile: t } = eh.zv.getWalletRouterData(),
              o = !!(null == e ? void 0 : e.native),
              l = !!(null == e ? void 0 : e.universal),
              n =
                !!(null == t ? void 0 : t.native) ||
                !!(null == t ? void 0 : t.universal);
            return { isDesktop: o, isMobile: n, isWeb: l };
          },
          goToConnectingView(e) {
            eh.AV.setData({ Wallet: e });
            let t = eh.zv.isMobile(),
              {
                isDesktop: o,
                isWeb: l,
                isMobile: n,
              } = tr.getCachedRouterWalletPlatforms();
            t
              ? n
                ? (eh.AV.push("MobileConnecting"),
                  !eh.zv.isAndroid() &&
                    eh.zv.isTelegram() &&
                    this.handleMobileLinking(e, "_blank"))
                : l
                ? eh.AV.push("WebConnecting")
                : eh.AV.push("InstallWallet")
              : o
              ? eh.AV.push("DesktopConnecting")
              : l
              ? eh.AV.push("WebConnecting")
              : n
              ? eh.AV.push("MobileQrcodeConnecting")
              : eh.AV.push("InstallWallet");
          },
        },
        ti = i`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
      var to = Object.defineProperty,
        tl = Object.getOwnPropertyDescriptor,
        __decorateClass$q = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? tl(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && to(t, o, s), s;
        };
      let ta = class extends lit_element_s {
        constructor() {
          super(),
            (this.view = eh.AV.state.view),
            (this.prevView = eh.AV.state.view),
            (this.unsubscribe = void 0),
            (this.oldHeight = "0px"),
            (this.resizeObserver = void 0),
            (this.unsubscribe = eh.AV.subscribe((e) => {
              this.view !== e.view && this.onChangeRoute();
            }));
        }
        firstUpdated() {
          (this.resizeObserver = new ResizeObserver(([e]) => {
            let t = `${e.contentRect.height}px`;
            "0px" !== this.oldHeight &&
              animate_es_animate(
                this.routerEl,
                { height: [this.oldHeight, t] },
                { duration: 0.2 }
              ),
              (this.oldHeight = t);
          })),
            this.resizeObserver.observe(this.contentEl);
        }
        disconnectedCallback() {
          var e, t;
          null == (e = this.unsubscribe) || e.call(this),
            null == (t = this.resizeObserver) || t.disconnect();
        }
        get routerEl() {
          return tr.getShadowRootElement(this, ".wcm-router");
        }
        get contentEl() {
          return tr.getShadowRootElement(this, ".wcm-content");
        }
        viewTemplate() {
          switch (this.view) {
            case "ConnectWallet":
              return Q`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
            case "DesktopConnecting":
              return Q`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
            case "MobileConnecting":
              return Q`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
            case "WebConnecting":
              return Q`<wcm-web-connecting-view></wcm-web-connecting-view>`;
            case "MobileQrcodeConnecting":
              return Q`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
            case "WalletExplorer":
              return Q`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
            case "Qrcode":
              return Q`<wcm-qrcode-view></wcm-qrcode-view>`;
            case "InstallWallet":
              return Q`<wcm-install-wallet-view></wcm-install-wallet-view>`;
            default:
              return Q`<div>Not Found</div>`;
          }
        }
        async onChangeRoute() {
          await animate_es_animate(
            this.routerEl,
            { opacity: [1, 0], scale: [1, 1.02] },
            { duration: 0.15, delay: 0.1 }
          ).finished,
            (this.view = eh.AV.state.view),
            animate_es_animate(
              this.routerEl,
              { opacity: [0, 1], scale: [0.99, 1] },
              { duration: 0.37, delay: 0.05 }
            );
        }
        render() {
          return Q`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
        }
      };
      (ta.styles = [ej.globalCss, ti]),
        __decorateClass$q([state_t()], ta.prototype, "view", 2),
        __decorateClass$q([state_t()], ta.prototype, "prevView", 2),
        (ta = __decorateClass$q([custom_element_e("wcm-modal-router")], ta));
      let tn = i`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
      var ts = Object.defineProperty,
        tc = Object.getOwnPropertyDescriptor,
        __decorateClass$p = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? tc(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && ts(t, o, s), s;
        };
      let td = class extends lit_element_s {
        constructor() {
          super(),
            (this.open = !1),
            (this.unsubscribe = void 0),
            (this.timeout = void 0),
            (this.unsubscribe = eh.ToastCtrl.subscribe((e) => {
              e.open
                ? ((this.open = !0),
                  (this.timeout = setTimeout(
                    () => eh.ToastCtrl.closeToast(),
                    2200
                  )))
                : ((this.open = !1), clearTimeout(this.timeout));
            }));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribe) || e.call(this),
            clearTimeout(this.timeout),
            eh.ToastCtrl.closeToast();
        }
        render() {
          let { message: e, variant: t } = eh.ToastCtrl.state;
          return this.open
            ? Q`<div class="${el({
                "wcm-success": "success" === t,
                "wcm-error": "error" === t,
              })}">${"success" === t ? eG.CHECKMARK_ICON : null} ${
                "error" === t ? eG.CROSS_ICON : null
              }<wcm-text variant="small-regular">${e}</wcm-text></div>`
            : null;
        }
      };
      function isAdjecentDots(e, t, o) {
        return e !== t && (e - t < 0 ? t - e : e - t) <= o + 0.1;
      }
      (td.styles = [ej.globalCss, tn]),
        __decorateClass$p([state_t()], td.prototype, "open", 2),
        (td = __decorateClass$p([custom_element_e("wcm-modal-toast")], td));
      let tm = {
          generate(e, t, o) {
            let l = "#141414",
              n = [],
              s = (function (e, t) {
                let o = Array.prototype.slice.call(
                    eP.create(e, { errorCorrectionLevel: "Q" }).modules.data,
                    0
                  ),
                  l = Math.sqrt(o.length);
                return o.reduce(
                  (e, t, o) =>
                    (o % l == 0 ? e.push([t]) : e[e.length - 1].push(t)) && e,
                  []
                );
              })(e, 0),
              c = t / s.length,
              d = [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 0, y: 1 },
              ];
            d.forEach(({ x: e, y: t }) => {
              let o = (s.length - 7) * c * e,
                m = (s.length - 7) * c * t;
              for (let e = 0; e < d.length; e += 1) {
                let t = c * (7 - 2 * e);
                n.push(
                  Y`<rect fill="${
                    e % 2 == 0 ? l : "#ffffff"
                  }" height="${t}" rx="${0.45 * t}" ry="${
                    0.45 * t
                  }" width="${t}" x="${o + c * e}" y="${m + c * e}">`
                );
              }
            });
            let m = Math.floor((o + 25) / c),
              h = s.length / 2 - m / 2,
              p = s.length / 2 + m / 2 - 1,
              g = [];
            s.forEach((e, t) => {
              e.forEach((e, o) => {
                if (
                  s[t][o] &&
                  !(
                    (t < 7 && o < 7) ||
                    (t > s.length - 8 && o < 7) ||
                    (t < 7 && o > s.length - 8)
                  ) &&
                  !(t > h && t < p && o > h && o < p)
                ) {
                  let e = t * c + c / 2,
                    l = o * c + c / 2;
                  g.push([e, l]);
                }
              });
            });
            let f = {};
            return (
              g.forEach(([e, t]) => {
                f[e] ? f[e].push(t) : (f[e] = [t]);
              }),
              Object.entries(f)
                .map(([e, t]) => {
                  let o = t.filter((e) =>
                    t.every((t) => !isAdjecentDots(e, t, c))
                  );
                  return [Number(e), o];
                })
                .forEach(([e, t]) => {
                  t.forEach((t) => {
                    n.push(
                      Y`<circle cx="${e}" cy="${t}" fill="${l}" r="${c / 2.5}">`
                    );
                  });
                }),
              Object.entries(f)
                .filter(([e, t]) => t.length > 1)
                .map(([e, t]) => {
                  let o = t.filter((e) =>
                    t.some((t) => isAdjecentDots(e, t, c))
                  );
                  return [Number(e), o];
                })
                .map(([e, t]) => {
                  t.sort((e, t) => (e < t ? -1 : 1));
                  let o = [];
                  for (let e of t) {
                    let t = o.find((t) =>
                      t.some((t) => isAdjecentDots(e, t, c))
                    );
                    t ? t.push(e) : o.push([e]);
                  }
                  return [e, o.map((e) => [e[0], e[e.length - 1]])];
                })
                .forEach(([e, t]) => {
                  t.forEach(([t, o]) => {
                    n.push(
                      Y`<line x1="${e}" x2="${e}" y1="${t}" y2="${o}" stroke="${l}" stroke-width="${
                        c / 1.25
                      }" stroke-linecap="round">`
                    );
                  });
                }),
              n
            );
          },
        },
        th = i`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
      var tp = Object.defineProperty,
        tu = Object.getOwnPropertyDescriptor,
        __decorateClass$o = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? tu(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && tp(t, o, s), s;
        };
      let tg = class extends lit_element_s {
        constructor() {
          super(...arguments),
            (this.uri = ""),
            (this.size = 0),
            (this.imageId = void 0),
            (this.walletId = void 0),
            (this.imageUrl = void 0);
        }
        svgTemplate() {
          let e = "light" === eh.ThemeCtrl.state.themeMode,
            t = e ? this.size : this.size - 36;
          return Y`<svg height="${t}" width="${t}">${tm.generate(
            this.uri,
            t,
            t / 4
          )}</svg>`;
        }
        render() {
          let e = { "wcm-dark": "dark" === eh.ThemeCtrl.state.themeMode };
          return Q`<div style="${`width: ${this.size}px`}" class="${el(e)}">${
            this.walletId || this.imageUrl
              ? Q`<wcm-wallet-image walletId="${if_defined_l(
                  this.walletId
                )}" imageId="${if_defined_l(
                  this.imageId
                )}" imageUrl="${if_defined_l(
                  this.imageUrl
                )}"></wcm-wallet-image>`
              : eG.WALLET_CONNECT_ICON_COLORED
          } ${this.svgTemplate()}</div>`;
        }
      };
      (tg.styles = [ej.globalCss, th]),
        __decorateClass$o([property_n()], tg.prototype, "uri", 2),
        __decorateClass$o(
          [property_n({ type: Number })],
          tg.prototype,
          "size",
          2
        ),
        __decorateClass$o([property_n()], tg.prototype, "imageId", 2),
        __decorateClass$o([property_n()], tg.prototype, "walletId", 2),
        __decorateClass$o([property_n()], tg.prototype, "imageUrl", 2),
        (tg = __decorateClass$o([custom_element_e("wcm-qrcode")], tg));
      let tw = i`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
      var tv = Object.defineProperty,
        tf = Object.getOwnPropertyDescriptor,
        __decorateClass$n = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? tf(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && tv(t, o, s), s;
        };
      let tb = class extends lit_element_s {
        constructor() {
          super(...arguments), (this.onChange = () => null);
        }
        render() {
          return Q`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${eG.SEARCH_ICON}`;
        }
      };
      (tb.styles = [ej.globalCss, tw]),
        __decorateClass$n([property_n()], tb.prototype, "onChange", 2),
        (tb = __decorateClass$n([custom_element_e("wcm-search-input")], tb));
      let t_ = i`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
      var ty = Object.defineProperty,
        tx = Object.getOwnPropertyDescriptor;
      let t$ = class extends lit_element_s {
        render() {
          return Q`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
        }
      };
      (t$.styles = [ej.globalCss, t_]),
        (t$ = ((e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? tx(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && ty(t, o, s), s;
        })([custom_element_e("wcm-spinner")], t$));
      let tC = i`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
      var tA = Object.defineProperty,
        tE = Object.getOwnPropertyDescriptor,
        __decorateClass$l = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? tE(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && tA(t, o, s), s;
        };
      let tO = class extends lit_element_s {
        constructor() {
          super(...arguments),
            (this.variant = "medium-regular"),
            (this.color = "primary");
        }
        render() {
          let e = {
            "wcm-big-bold": "big-bold" === this.variant,
            "wcm-medium-regular": "medium-regular" === this.variant,
            "wcm-small-regular": "small-regular" === this.variant,
            "wcm-small-thin": "small-thin" === this.variant,
            "wcm-xsmall-regular": "xsmall-regular" === this.variant,
            "wcm-xsmall-bold": "xsmall-bold" === this.variant,
            "wcm-color-primary": "primary" === this.color,
            "wcm-color-secondary": "secondary" === this.color,
            "wcm-color-tertiary": "tertiary" === this.color,
            "wcm-color-inverse": "inverse" === this.color,
            "wcm-color-accnt": "accent" === this.color,
            "wcm-color-error": "error" === this.color,
          };
          return Q`<span><slot class="${el(e)}"></slot></span>`;
        }
      };
      (tO.styles = [ej.globalCss, tC]),
        __decorateClass$l([property_n()], tO.prototype, "variant", 2),
        __decorateClass$l([property_n()], tO.prototype, "color", 2),
        (tO = __decorateClass$l([custom_element_e("wcm-text")], tO));
      let tk = i`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
      var tT = Object.defineProperty,
        tI = Object.getOwnPropertyDescriptor,
        __decorateClass$k = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? tI(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && tT(t, o, s), s;
        };
      let tP = class extends lit_element_s {
        constructor() {
          super(...arguments),
            (this.onClick = () => null),
            (this.name = ""),
            (this.walletId = ""),
            (this.label = void 0),
            (this.imageId = void 0),
            (this.installed = !1),
            (this.recent = !1);
        }
        sublabelTemplate() {
          return this.recent
            ? Q`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>`
            : this.installed
            ? Q`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>`
            : null;
        }
        handleClick() {
          eh.uA.click({ name: "WALLET_BUTTON", walletId: this.walletId }),
            this.onClick();
        }
        render() {
          var e;
          return Q`<button @click="${this.handleClick.bind(
            this
          )}"><div><wcm-wallet-image walletId="${
            this.walletId
          }" imageId="${if_defined_l(
            this.imageId
          )}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${
            null != (e = this.label) ? e : tr.getWalletName(this.name, !0)
          }</wcm-text>${this.sublabelTemplate()}</div></button>`;
        }
      };
      (tP.styles = [ej.globalCss, tk]),
        __decorateClass$k([property_n()], tP.prototype, "onClick", 2),
        __decorateClass$k([property_n()], tP.prototype, "name", 2),
        __decorateClass$k([property_n()], tP.prototype, "walletId", 2),
        __decorateClass$k([property_n()], tP.prototype, "label", 2),
        __decorateClass$k([property_n()], tP.prototype, "imageId", 2),
        __decorateClass$k(
          [property_n({ type: Boolean })],
          tP.prototype,
          "installed",
          2
        ),
        __decorateClass$k(
          [property_n({ type: Boolean })],
          tP.prototype,
          "recent",
          2
        ),
        (tP = __decorateClass$k([custom_element_e("wcm-wallet-button")], tP));
      let tS = i`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
      var tR = Object.defineProperty,
        tM = Object.getOwnPropertyDescriptor,
        __decorateClass$j = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? tM(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && tR(t, o, s), s;
        };
      let tL = class extends lit_element_s {
        constructor() {
          super(...arguments),
            (this.walletId = ""),
            (this.imageId = void 0),
            (this.imageUrl = void 0);
        }
        render() {
          var e;
          let t = (null == (e = this.imageUrl) ? void 0 : e.length)
            ? this.imageUrl
            : tr.getWalletIcon({ id: this.walletId, image_id: this.imageId });
          return Q`${
            t.length
              ? Q`<div><img crossorigin="anonymous" src="${t}" alt="${this.id}"></div>`
              : eG.WALLET_PLACEHOLDER
          }`;
        }
      };
      (tL.styles = [ej.globalCss, tS]),
        __decorateClass$j([property_n()], tL.prototype, "walletId", 2),
        __decorateClass$j([property_n()], tL.prototype, "imageId", 2),
        __decorateClass$j([property_n()], tL.prototype, "imageUrl", 2),
        (tL = __decorateClass$j([custom_element_e("wcm-wallet-image")], tL));
      var tj = Object.defineProperty,
        tN = Object.getOwnPropertyDescriptor,
        __decorateClass$i = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? tN(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && tj(t, o, s), s;
        };
      let tD = class extends lit_element_s {
        constructor() {
          super(), (this.preload = !0), this.preloadData();
        }
        async loadImages(e) {
          try {
            (null == e ? void 0 : e.length) &&
              (await Promise.all(e.map(async (e) => tr.preloadImage(e))));
          } catch (t) {
            console.info("Unsuccessful attempt at preloading some images", e);
          }
        }
        async preloadListings() {
          if (eh.ConfigCtrl.state.enableExplorer) {
            await eh.ExplorerCtrl.getRecomendedWallets(),
              eh.OptionsCtrl.setIsDataLoaded(!0);
            let { recomendedWallets: e } = eh.ExplorerCtrl.state,
              t = e.map((e) => tr.getWalletIcon(e));
            await this.loadImages(t);
          } else eh.OptionsCtrl.setIsDataLoaded(!0);
        }
        async preloadCustomImages() {
          let e = tr.getCustomImageUrls();
          await this.loadImages(e);
        }
        async preloadData() {
          try {
            this.preload &&
              ((this.preload = !1),
              await Promise.all([
                this.preloadListings(),
                this.preloadCustomImages(),
              ]));
          } catch (e) {
            console.error(e),
              eh.ToastCtrl.openToast("Failed preloading", "error");
          }
        }
      };
      __decorateClass$i([state_t()], tD.prototype, "preload", 2),
        (tD = __decorateClass$i(
          [custom_element_e("wcm-explorer-context")],
          tD
        ));
      var tW = Object.defineProperty,
        tz = Object.getOwnPropertyDescriptor;
      let tU = class extends lit_element_s {
        constructor() {
          super(),
            (this.unsubscribeTheme = void 0),
            ej.setTheme(),
            (this.unsubscribeTheme = eh.ThemeCtrl.subscribe(ej.setTheme));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribeTheme) || e.call(this);
        }
      };
      tU = ((e, t, o, l) => {
        for (
          var n, s = l > 1 ? void 0 : l ? tz(t, o) : t, c = e.length - 1;
          c >= 0;
          c--
        )
          (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
        return l && s && tW(t, o, s), s;
      })([custom_element_e("wcm-theme-context")], tU);
      let tH = i`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
      var tV = Object.defineProperty,
        tB = Object.getOwnPropertyDescriptor;
      let tZ = class extends lit_element_s {
        onGoToQrcode() {
          eh.AV.push("Qrcode");
        }
        render() {
          let { recomendedWallets: e } = eh.ExplorerCtrl.state,
            t = [...e, ...e],
            o = 2 * eh.zv.RECOMMENDED_WALLET_AMOUNT;
          return Q`<wcm-modal-header title="Connect your wallet" .onAction="${
            this.onGoToQrcode
          }" .actionIcon="${
            eG.QRCODE_ICON
          }"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${
            eG.MOBILE_ICON
          }<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[
            ...Array(o),
          ].map((e, o) => {
            let l = t[o % t.length];
            return l
              ? Q`<wcm-wallet-image walletId="${l.id}" imageId="${l.image_id}"></wcm-wallet-image>`
              : eG.WALLET_PLACEHOLDER;
          })}</div><wcm-button-big @click="${
            tr.handleAndroidLinking
          }"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
        }
      };
      (tZ.styles = [ej.globalCss, tH]),
        (tZ = ((e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? tB(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && tV(t, o, s), s;
        })([custom_element_e("wcm-android-wallet-selection")], tZ));
      let tF = i`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
      var tq = Object.defineProperty,
        tK = Object.getOwnPropertyDescriptor,
        __decorateClass$f = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? tK(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && tq(t, o, s), s;
        };
      let tG = class extends lit_element_s {
        constructor() {
          super(...arguments),
            (this.walletId = void 0),
            (this.imageId = void 0),
            (this.isError = !1),
            (this.isStale = !1),
            (this.label = "");
        }
        svgLoaderTemplate() {
          var e, t;
          let o =
              null !=
              (t =
                null == (e = eh.ThemeCtrl.state.themeVariables)
                  ? void 0
                  : e["--wcm-wallet-icon-large-border-radius"])
                ? t
                : ej.getPreset("--wcm-wallet-icon-large-border-radius"),
            l = 0;
          l =
            (o.includes("%") ? 0.88 * parseInt(o, 10) : parseInt(o, 10)) * 1.17;
          let n = 317 - 1.57 * l,
            s = 425 - 1.8 * l;
          return Q`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${l}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${n}" stroke-dashoffset="${s}"></use></svg>`;
        }
        render() {
          let e = { "wcm-error": this.isError, "wcm-stale": this.isStale };
          return Q`<div class="${el(
            e
          )}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${if_defined_l(
            this.walletId
          )}" imageId="${if_defined_l(
            this.imageId
          )}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${
            this.isError ? "error" : "primary"
          }">${this.isError ? "Connection declined" : this.label}</wcm-text>`;
        }
      };
      (tG.styles = [ej.globalCss, tF]),
        __decorateClass$f([property_n()], tG.prototype, "walletId", 2),
        __decorateClass$f([property_n()], tG.prototype, "imageId", 2),
        __decorateClass$f(
          [property_n({ type: Boolean })],
          tG.prototype,
          "isError",
          2
        ),
        __decorateClass$f(
          [property_n({ type: Boolean })],
          tG.prototype,
          "isStale",
          2
        ),
        __decorateClass$f([property_n()], tG.prototype, "label", 2),
        (tG = __decorateClass$f(
          [custom_element_e("wcm-connector-waiting")],
          tG
        ));
      let tQ = {
          manualWallets() {
            var e, t;
            let { mobileWallets: o, desktopWallets: l } = eh.ConfigCtrl.state,
              n = null == (e = tQ.recentWallet()) ? void 0 : e.id,
              s = eh.zv.isMobile() ? o : l,
              c = null == s ? void 0 : s.filter((e) => n !== e.id);
            return null !=
              (t = eh.zv.isMobile()
                ? null == c
                  ? void 0
                  : c.map(({ id: e, name: t, links: o }) => ({
                      id: e,
                      name: t,
                      mobile: o,
                      links: o,
                    }))
                : null == c
                ? void 0
                : c.map(({ id: e, name: t, links: o }) => ({
                    id: e,
                    name: t,
                    desktop: o,
                    links: o,
                  })))
              ? t
              : [];
          },
          recentWallet: () => tr.getRecentWallet(),
          recomendedWallets(e = !1) {
            var t;
            let o = e
                ? void 0
                : null == (t = tQ.recentWallet())
                ? void 0
                : t.id,
              { recomendedWallets: l } = eh.ExplorerCtrl.state,
              n = l.filter((e) => o !== e.id);
            return n;
          },
        },
        tY = {
          onConnecting(e) {
            tr.goToConnectingView(e);
          },
          manualWalletsTemplate() {
            let e = tQ.manualWallets();
            return e.map(
              (e) =>
                Q`<wcm-wallet-button walletId="${e.id}" name="${
                  e.name
                }" .onClick="${() =>
                  this.onConnecting(e)}"></wcm-wallet-button>`
            );
          },
          recomendedWalletsTemplate(e = !1) {
            let t = tQ.recomendedWallets(e);
            return t.map(
              (e) =>
                Q`<wcm-wallet-button name="${e.name}" walletId="${
                  e.id
                }" imageId="${e.image_id}" .onClick="${() =>
                  this.onConnecting(e)}"></wcm-wallet-button>`
            );
          },
          recentWalletTemplate() {
            let e = tQ.recentWallet();
            if (e)
              return Q`<wcm-wallet-button name="${e.name}" walletId="${
                e.id
              }" imageId="${if_defined_l(
                e.image_id
              )}" .recent="${!0}" .onClick="${() =>
                this.onConnecting(e)}"></wcm-wallet-button>`;
          },
        },
        tX = i`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
      var tJ = Object.defineProperty,
        t0 = Object.getOwnPropertyDescriptor;
      let t1 = class extends lit_element_s {
        render() {
          let { explorerExcludedWalletIds: e, enableExplorer: t } =
              eh.ConfigCtrl.state,
            o = tY.manualWalletsTemplate(),
            l = tY.recomendedWalletsTemplate(),
            n = tY.recentWalletTemplate(),
            s = [n, ...o, ...l];
          s = s.filter(Boolean);
          let c = s.length > 4 || ("ALL" !== e && t),
            d = [];
          d = c ? s.slice(0, 3) : s;
          let m = !!d.length;
          return Q`<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${
            tr.handleUriCopy
          }" .actionIcon="${
            eG.COPY_ICON
          }"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${
            eG.MOBILE_ICON
          }<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${
            eG.SCAN_ICON
          }<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${
            m
              ? Q`<wcm-modal-footer><div class="wcm-desktop-title">${
                  eG.DESKTOP_ICON
                }<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${d} ${
                  c
                    ? Q`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`
                    : null
                }</div></wcm-modal-footer>`
              : null
          }`;
        }
      };
      (t1.styles = [ej.globalCss, tX]),
        (t1 = ((e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? t0(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && tJ(t, o, s), s;
        })([custom_element_e("wcm-desktop-wallet-selection")], t1));
      let t2 = i`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
      var t5 = Object.defineProperty,
        t3 = Object.getOwnPropertyDescriptor;
      let t4 = class extends lit_element_s {
        render() {
          let { termsOfServiceUrl: e, privacyPolicyUrl: t } =
            eh.ConfigCtrl.state;
          return (null != e ? e : t)
            ? Q`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${
                e
                  ? Q`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`
                  : null
              } ${e && t ? "and" : null} ${
                t
                  ? Q`<a href="${t}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`
                  : null
              }</wcm-text></div>`
            : null;
        }
      };
      (t4.styles = [ej.globalCss, t2]),
        (t4 = ((e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? t3(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && t5(t, o, s), s;
        })([custom_element_e("wcm-legal-notice")], t4));
      let t7 = i`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
      var t6 = Object.defineProperty,
        t8 = Object.getOwnPropertyDescriptor;
      let t9 = class extends lit_element_s {
        onQrcode() {
          eh.AV.push("Qrcode");
        }
        render() {
          let { explorerExcludedWalletIds: e, enableExplorer: t } =
              eh.ConfigCtrl.state,
            o = tY.manualWalletsTemplate(),
            l = tY.recomendedWalletsTemplate(),
            n = tY.recentWalletTemplate(),
            s = [n, ...o, ...l];
          s = s.filter(Boolean);
          let c = s.length > 8 || ("ALL" !== e && t),
            d = [];
          d = c ? s.slice(0, 7) : s;
          let m = !!d.length;
          return Q`<wcm-modal-header title="Connect your wallet" .onAction="${
            this.onQrcode
          }" .actionIcon="${eG.QRCODE_ICON}"></wcm-modal-header>${
            m
              ? Q`<wcm-modal-content><div>${d} ${
                  c
                    ? Q`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`
                    : null
                }</div></wcm-modal-content>`
              : null
          }`;
        }
      };
      (t9.styles = [ej.globalCss, t7]),
        (t9 = ((e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? t8(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && t6(t, o, s), s;
        })([custom_element_e("wcm-mobile-wallet-selection")], t9));
      let re = i`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
      var rt = Object.defineProperty,
        rr = Object.getOwnPropertyDescriptor,
        __decorateClass$b = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? rr(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && rt(t, o, s), s;
        };
      let ri = class extends lit_element_s {
        constructor() {
          super(),
            (this.open = !1),
            (this.active = !1),
            (this.unsubscribeModal = void 0),
            (this.abortController = void 0),
            (this.unsubscribeModal = eh.jb.subscribe((e) => {
              e.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
            }));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribeModal) || e.call(this);
        }
        get overlayEl() {
          return tr.getShadowRootElement(this, ".wcm-overlay");
        }
        get containerEl() {
          return tr.getShadowRootElement(this, ".wcm-container");
        }
        toggleBodyScroll(e) {
          let t = document.querySelector("body");
          if (t) {
            if (e) {
              let e = document.getElementById("wcm-styles");
              null == e || e.remove();
            } else
              document.head.insertAdjacentHTML(
                "beforeend",
                '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>'
              );
          }
        }
        onCloseModal(e) {
          e.target === e.currentTarget && eh.jb.close();
        }
        onOpenModalEvent() {
          this.toggleBodyScroll(!1),
            this.addKeyboardEvents(),
            (this.open = !0),
            setTimeout(async () => {
              let e = tr.isMobileAnimation()
                ? { y: ["50vh", "0vh"] }
                : { scale: [0.98, 1] };
              await Promise.all([
                animate_es_animate(
                  this.overlayEl,
                  { opacity: [0, 1] },
                  { delay: 0.1, duration: 0.2 }
                ).finished,
                animate_es_animate(this.containerEl, e, {
                  delay: 0.1,
                  duration: 0.2,
                }).finished,
              ]),
                (this.active = !0);
            }, 0);
        }
        async onCloseModalEvent() {
          this.toggleBodyScroll(!0), this.removeKeyboardEvents();
          let e = tr.isMobileAnimation()
            ? { y: ["0vh", "50vh"] }
            : { scale: [1, 0.98] };
          await Promise.all([
            animate_es_animate(
              this.overlayEl,
              { opacity: [1, 0] },
              { duration: 0.2 }
            ).finished,
            animate_es_animate(this.containerEl, e, { duration: 0.2 }).finished,
          ]),
            this.containerEl.removeAttribute("style"),
            (this.active = !1),
            (this.open = !1);
        }
        addKeyboardEvents() {
          (this.abortController = new AbortController()),
            window.addEventListener(
              "keydown",
              (e) => {
                var t;
                "Escape" === e.key
                  ? eh.jb.close()
                  : "Tab" !== e.key ||
                    (null == (t = e.target)
                      ? void 0
                      : t.tagName.includes("wcm-")) ||
                    this.containerEl.focus();
              },
              this.abortController
            ),
            this.containerEl.focus();
        }
        removeKeyboardEvents() {
          var e;
          null == (e = this.abortController) || e.abort(),
            (this.abortController = void 0);
        }
        render() {
          let e = { "wcm-overlay": !0, "wcm-active": this.active };
          return Q`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${el(
            e
          )}" @click="${
            this.onCloseModal
          }" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${
            this.open
              ? Q`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>`
              : null
          }</div></div>`;
        }
      };
      (ri.styles = [ej.globalCss, re]),
        __decorateClass$b([state_t()], ri.prototype, "open", 2),
        __decorateClass$b([state_t()], ri.prototype, "active", 2),
        (ri = __decorateClass$b([custom_element_e("wcm-modal")], ri));
      let ro = i`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
      var rl = Object.defineProperty,
        ra = Object.getOwnPropertyDescriptor,
        __decorateClass$a = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? ra(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && rl(t, o, s), s;
        };
      let rn = class extends lit_element_s {
        constructor() {
          super(...arguments),
            (this.isMobile = !1),
            (this.isDesktop = !1),
            (this.isWeb = !1),
            (this.isRetry = !1);
        }
        onMobile() {
          let e = eh.zv.isMobile();
          e
            ? eh.AV.replace("MobileConnecting")
            : eh.AV.replace("MobileQrcodeConnecting");
        }
        onDesktop() {
          eh.AV.replace("DesktopConnecting");
        }
        onWeb() {
          eh.AV.replace("WebConnecting");
        }
        render() {
          return Q`<div>${this.isRetry ? Q`<slot></slot>` : null} ${
            this.isMobile
              ? Q`<wcm-button .onClick="${this.onMobile}" .iconLeft="${eG.MOBILE_ICON}" variant="outline">Mobile</wcm-button>`
              : null
          } ${
            this.isDesktop
              ? Q`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${eG.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>`
              : null
          } ${
            this.isWeb
              ? Q`<wcm-button .onClick="${this.onWeb}" .iconLeft="${eG.GLOBE_ICON}" variant="outline">Web</wcm-button>`
              : null
          }</div>`;
        }
      };
      (rn.styles = [ej.globalCss, ro]),
        __decorateClass$a(
          [property_n({ type: Boolean })],
          rn.prototype,
          "isMobile",
          2
        ),
        __decorateClass$a(
          [property_n({ type: Boolean })],
          rn.prototype,
          "isDesktop",
          2
        ),
        __decorateClass$a(
          [property_n({ type: Boolean })],
          rn.prototype,
          "isWeb",
          2
        ),
        __decorateClass$a(
          [property_n({ type: Boolean })],
          rn.prototype,
          "isRetry",
          2
        ),
        (rn = __decorateClass$a(
          [custom_element_e("wcm-platform-selection")],
          rn
        ));
      let rs = i`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
      var rc = Object.defineProperty,
        rd = Object.getOwnPropertyDescriptor;
      let rm = class extends lit_element_s {
        onClick() {
          eh.AV.push("WalletExplorer");
        }
        render() {
          let { recomendedWallets: e } = eh.ExplorerCtrl.state,
            t = tQ.manualWallets(),
            o = [...e, ...t].reverse().slice(0, 4);
          return Q`<button @click="${
            this.onClick
          }"><div class="wcm-icons">${o.map((e) => {
            let t = tr.getWalletIcon(e);
            if (t) return Q`<img crossorigin="anonymous" src="${t}">`;
            let o = tr.getWalletIcon({ id: e.id });
            return o
              ? Q`<img crossorigin="anonymous" src="${o}">`
              : eG.WALLET_PLACEHOLDER;
          })} ${[...Array(4 - o.length)].map(
            () => eG.WALLET_PLACEHOLDER
          )}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
        }
      };
      (rm.styles = [ej.globalCss, rs]),
        (rm = ((e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? rd(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && rc(t, o, s), s;
        })([custom_element_e("wcm-view-all-wallets-button")], rm));
      let rh = i`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
      var rp = Object.defineProperty,
        ru = Object.getOwnPropertyDescriptor,
        __decorateClass$8 = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? ru(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && rp(t, o, s), s;
        };
      let rg = class extends lit_element_s {
        constructor() {
          super(),
            (this.walletId = ""),
            (this.imageId = ""),
            (this.uri = ""),
            setTimeout(() => {
              let { walletConnectUri: e } = eh.OptionsCtrl.state;
              this.uri = e;
            }, 0);
        }
        get overlayEl() {
          return tr.getShadowRootElement(this, ".wcm-qr-container");
        }
        render() {
          return Q`<div class="wcm-qr-container">${
            this.uri
              ? Q`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${
                  this.uri
                }" walletId="${if_defined_l(
                  this.walletId
                )}" imageId="${if_defined_l(this.imageId)}"></wcm-qrcode>`
              : Q`<wcm-spinner></wcm-spinner>`
          }</div>`;
        }
      };
      (rg.styles = [ej.globalCss, rh]),
        __decorateClass$8([property_n()], rg.prototype, "walletId", 2),
        __decorateClass$8([property_n()], rg.prototype, "imageId", 2),
        __decorateClass$8([state_t()], rg.prototype, "uri", 2),
        (rg = __decorateClass$8(
          [custom_element_e("wcm-walletconnect-qr")],
          rg
        ));
      var rw = Object.defineProperty,
        rv = Object.getOwnPropertyDescriptor;
      let rf = class extends lit_element_s {
        viewTemplate() {
          return eh.zv.isAndroid() && !eh.zv.isTelegram()
            ? Q`<wcm-android-wallet-selection></wcm-android-wallet-selection>`
            : eh.zv.isMobile()
            ? Q`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>`
            : Q`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
        }
        render() {
          return Q`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
        }
      };
      (rf.styles = [ej.globalCss]),
        (rf = ((e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? rv(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && rw(t, o, s), s;
        })([custom_element_e("wcm-connect-wallet-view")], rf));
      let rb = i`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
      var r_ = Object.defineProperty,
        ry = Object.getOwnPropertyDescriptor,
        __decorateClass$6 = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? ry(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && r_(t, o, s), s;
        };
      let rx = class extends lit_element_s {
        constructor() {
          super(), (this.isError = !1), this.openDesktopApp();
        }
        onFormatAndRedirect(e) {
          let { desktop: t, name: o } = eh.zv.getWalletRouterData(),
            l = null == t ? void 0 : t.native,
            n = null == t ? void 0 : t.universal;
          if (l) {
            let t = eh.zv.formatNativeUrl(l, e, o);
            eh.zv.openHref(t, "_self");
          } else if (n) {
            let t = eh.zv.formatUniversalUrl(n, e, o);
            eh.zv.openHref(t, "_blank");
          }
        }
        openDesktopApp() {
          let { walletConnectUri: e } = eh.OptionsCtrl.state,
            t = eh.zv.getWalletRouterData();
          tr.setRecentWallet(t), e && this.onFormatAndRedirect(e);
        }
        render() {
          let { name: e, id: t, image_id: o } = eh.zv.getWalletRouterData(),
            { isMobile: l, isWeb: n } = tr.getCachedRouterWalletPlatforms();
          return Q`<wcm-modal-header title="${e}" .onAction="${
            tr.handleUriCopy
          }" .actionIcon="${
            eG.COPY_ICON
          }"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${if_defined_l(
            o
          )}" label="${`Continue in ${e}...`}" .isError="${
            this.isError
          }"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${l}" .isWeb="${n}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(
            this
          )}" .iconRight="${
            eG.RETRY_ICON
          }">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
        }
      };
      (rx.styles = [ej.globalCss, rb]),
        __decorateClass$6([state_t()], rx.prototype, "isError", 2),
        (rx = __decorateClass$6(
          [custom_element_e("wcm-desktop-connecting-view")],
          rx
        ));
      let r$ = i`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
      var rC = Object.defineProperty,
        rA = Object.getOwnPropertyDescriptor;
      let rE = class extends lit_element_s {
        onInstall(e) {
          e && eh.zv.openHref(e, "_blank");
        }
        render() {
          let {
            name: e,
            id: t,
            image_id: o,
            homepage: l,
          } = eh.zv.getWalletRouterData();
          return Q`<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${if_defined_l(
            o
          )}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${e} to continue. If multiple browser extensions are installed, disable non ${e} ones and try again`}</wcm-text><wcm-button .onClick="${() =>
            this.onInstall(l)}" .iconLeft="${
            eG.ARROW_DOWN_ICON
          }">Download</wcm-button></wcm-info-footer>`;
        }
      };
      (rE.styles = [ej.globalCss, r$]),
        (rE = ((e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? rA(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && rC(t, o, s), s;
        })([custom_element_e("wcm-install-wallet-view")], rE));
      let rO = i`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
      var rk = Object.defineProperty,
        rT = Object.getOwnPropertyDescriptor,
        __decorateClass$4 = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? rT(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && rk(t, o, s), s;
        };
      let rI = class extends lit_element_s {
        constructor() {
          super(), (this.isError = !1), this.openMobileApp();
        }
        onFormatAndRedirect(e, t = !1) {
          let { mobile: o, name: l } = eh.zv.getWalletRouterData(),
            n = null == o ? void 0 : o.native,
            s = null == o ? void 0 : o.universal,
            c = eh.zv.isTelegram() ? "_blank" : "_self";
          if (
            ((e =
              eh.zv.isTelegram() && eh.zv.isAndroid()
                ? encodeURIComponent(e)
                : e),
            n && !t)
          ) {
            let t = eh.zv.formatNativeUrl(n, e, l);
            eh.zv.openHref(t, c);
          } else if (s) {
            let t = eh.zv.formatUniversalUrl(s, e, l);
            eh.zv.openHref(t, c);
          }
        }
        openMobileApp(e = !1) {
          let { walletConnectUri: t } = eh.OptionsCtrl.state,
            o = eh.zv.getWalletRouterData();
          t && this.onFormatAndRedirect(t, e), tr.setRecentWallet(o);
        }
        onGoToAppStore(e) {
          e && eh.zv.openHref(e, "_blank");
        }
        render() {
          let {
              name: e,
              id: t,
              image_id: o,
              app: l,
              mobile: n,
            } = eh.zv.getWalletRouterData(),
            { isWeb: s } = tr.getCachedRouterWalletPlatforms(),
            c = null == l ? void 0 : l.ios,
            d = null == n ? void 0 : n.universal;
          return Q`<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${if_defined_l(
            o
          )}" label="Tap 'Open' to continue…" .isError="${
            this.isError
          }"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${s}" .isRetry="${!0}"><wcm-button .onClick="${() =>
            this.openMobileApp(!1)}" .iconRight="${
            eG.RETRY_ICON
          }">Retry</wcm-button></wcm-platform-selection>${
            d
              ? Q`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() =>
                  this.openMobileApp(
                    !0
                  )}">Try this alternate link</span></wcm-text>`
              : null
          }</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${t}" imageId="${if_defined_l(
            o
          )}"></wcm-wallet-image><wcm-text>${`Get ${e}`}</wcm-text></div><wcm-button .iconRight="${
            eG.ARROW_RIGHT_ICON
          }" .onClick="${() =>
            this.onGoToAppStore(
              c
            )}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
        }
      };
      (rI.styles = [ej.globalCss, rO]),
        __decorateClass$4([state_t()], rI.prototype, "isError", 2),
        (rI = __decorateClass$4(
          [custom_element_e("wcm-mobile-connecting-view")],
          rI
        ));
      let rP = i`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
      var rS = Object.defineProperty,
        rR = Object.getOwnPropertyDescriptor;
      let rM = class extends lit_element_s {
        render() {
          let { name: e, id: t, image_id: o } = eh.zv.getWalletRouterData(),
            { isDesktop: l, isWeb: n } = tr.getCachedRouterWalletPlatforms();
          return Q`<wcm-modal-header title="${e}" .onAction="${
            tr.handleUriCopy
          }" .actionIcon="${
            eG.COPY_ICON
          }"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${t}" imageId="${if_defined_l(
            o
          )}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${e} app`}</wcm-text><wcm-platform-selection .isDesktop="${l}" .isWeb="${n}"></wcm-platform-selection></wcm-info-footer>`;
        }
      };
      (rM.styles = [ej.globalCss, rP]),
        (rM = ((e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? rR(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && rS(t, o, s), s;
        })([custom_element_e("wcm-mobile-qr-connecting-view")], rM));
      var rL = Object.defineProperty,
        rj = Object.getOwnPropertyDescriptor;
      let rN = class extends lit_element_s {
        render() {
          return Q`<wcm-modal-header title="Scan the code" .onAction="${tr.handleUriCopy}" .actionIcon="${eG.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
        }
      };
      (rN.styles = [ej.globalCss]),
        (rN = ((e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? rj(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && rL(t, o, s), s;
        })([custom_element_e("wcm-qrcode-view")], rN));
      let rD = i`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
      var rW = Object.defineProperty,
        rz = Object.getOwnPropertyDescriptor,
        __decorateClass$1 = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? rz(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && rW(t, o, s), s;
        };
      let rU = class extends lit_element_s {
        constructor() {
          super(...arguments),
            (this.loading = !eh.ExplorerCtrl.state.wallets.listings.length),
            (this.firstFetch = !eh.ExplorerCtrl.state.wallets.listings.length),
            (this.search = ""),
            (this.endReached = !1),
            (this.intersectionObserver = void 0),
            (this.searchDebounce = tr.debounce((e) => {
              e.length >= 1
                ? ((this.firstFetch = !0),
                  (this.endReached = !1),
                  (this.search = e),
                  eh.ExplorerCtrl.resetSearch(),
                  this.fetchWallets())
                : this.search &&
                  ((this.search = ""),
                  (this.endReached = this.isLastPage()),
                  eh.ExplorerCtrl.resetSearch());
            }));
        }
        firstUpdated() {
          this.createPaginationObserver();
        }
        disconnectedCallback() {
          var e;
          null == (e = this.intersectionObserver) || e.disconnect();
        }
        get placeholderEl() {
          return tr.getShadowRootElement(this, ".wcm-placeholder-block");
        }
        createPaginationObserver() {
          (this.intersectionObserver = new IntersectionObserver(([e]) => {
            e.isIntersecting &&
              !(this.search && this.firstFetch) &&
              this.fetchWallets();
          })),
            this.intersectionObserver.observe(this.placeholderEl);
        }
        isLastPage() {
          let { wallets: e, search: t } = eh.ExplorerCtrl.state,
            { listings: o, total: l } = this.search ? t : e;
          return l <= 40 || o.length >= l;
        }
        async fetchWallets() {
          var e;
          let { wallets: t, search: o } = eh.ExplorerCtrl.state,
            { listings: l, total: n, page: s } = this.search ? o : t;
          if (!this.endReached && (this.firstFetch || (n > 40 && l.length < n)))
            try {
              this.loading = !0;
              let t =
                  null == (e = eh.OptionsCtrl.state.chains)
                    ? void 0
                    : e.join(","),
                { listings: o } = await eh.ExplorerCtrl.getWallets({
                  page: this.firstFetch ? 1 : s + 1,
                  entries: 40,
                  search: this.search,
                  version: 2,
                  chains: t,
                }),
                l = o.map((e) => tr.getWalletIcon(e));
              await Promise.all([
                ...l.map(async (e) => tr.preloadImage(e)),
                eh.zv.wait(300),
              ]),
                (this.endReached = this.isLastPage());
            } catch (e) {
              console.error(e),
                eh.ToastCtrl.openToast(tr.getErrorMessage(e), "error");
            } finally {
              (this.loading = !1), (this.firstFetch = !1);
            }
        }
        onConnect(e) {
          eh.zv.isAndroid()
            ? tr.handleMobileLinking(e)
            : tr.goToConnectingView(e);
        }
        onSearchChange(e) {
          let { value: t } = e.target;
          this.searchDebounce(t);
        }
        render() {
          let { wallets: e, search: t } = eh.ExplorerCtrl.state,
            { listings: o } = this.search ? t : e,
            l = this.loading && !o.length,
            n = this.search.length >= 3,
            s = tY.manualWalletsTemplate(),
            c = tY.recomendedWalletsTemplate(!0);
          n &&
            ((s = s.filter(({ values: e }) =>
              tr.caseSafeIncludes(e[0], this.search)
            )),
            (c = c.filter(({ values: e }) =>
              tr.caseSafeIncludes(e[0], this.search)
            )));
          let d = !this.loading && !o.length && !c.length,
            m = {
              "wcm-loading": l,
              "wcm-end-reached": this.endReached || !this.loading,
              "wcm-empty": d,
            };
          return Q`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(
            this
          )}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${el(
            m
          )}"><div class="wcm-grid">${l ? null : s} ${l ? null : c} ${
            l
              ? null
              : o.map(
                  (e) =>
                    Q`${
                      e
                        ? Q`<wcm-wallet-button imageId="${e.image_id}" name="${
                            e.name
                          }" walletId="${e.id}" .onClick="${() =>
                            this.onConnect(e)}"></wcm-wallet-button>`
                        : null
                    }`
                )
          }</div><div class="wcm-placeholder-block">${
            d
              ? Q`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>`
              : null
          } ${
            !d && this.loading ? Q`<wcm-spinner></wcm-spinner>` : null
          }</div></wcm-modal-content>`;
        }
      };
      (rU.styles = [ej.globalCss, rD]),
        __decorateClass$1([state_t()], rU.prototype, "loading", 2),
        __decorateClass$1([state_t()], rU.prototype, "firstFetch", 2),
        __decorateClass$1([state_t()], rU.prototype, "search", 2),
        __decorateClass$1([state_t()], rU.prototype, "endReached", 2),
        (rU = __decorateClass$1(
          [custom_element_e("wcm-wallet-explorer-view")],
          rU
        ));
      let rH = i`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
      var rV = Object.defineProperty,
        rB = Object.getOwnPropertyDescriptor,
        __decorateClass = (e, t, o, l) => {
          for (
            var n, s = l > 1 ? void 0 : l ? rB(t, o) : t, c = e.length - 1;
            c >= 0;
            c--
          )
            (n = e[c]) && (s = (l ? n(t, o, s) : n(s)) || s);
          return l && s && rV(t, o, s), s;
        };
      let rZ = class extends lit_element_s {
        constructor() {
          super(), (this.isError = !1), this.openWebWallet();
        }
        onFormatAndRedirect(e) {
          let { desktop: t, name: o } = eh.zv.getWalletRouterData(),
            l = null == t ? void 0 : t.universal;
          if (l) {
            let t = eh.zv.formatUniversalUrl(l, e, o);
            eh.zv.openHref(t, "_blank");
          }
        }
        openWebWallet() {
          let { walletConnectUri: e } = eh.OptionsCtrl.state,
            t = eh.zv.getWalletRouterData();
          tr.setRecentWallet(t), e && this.onFormatAndRedirect(e);
        }
        render() {
          let { name: e, id: t, image_id: o } = eh.zv.getWalletRouterData(),
            { isMobile: l, isDesktop: n } = tr.getCachedRouterWalletPlatforms(),
            s = eh.zv.isMobile();
          return Q`<wcm-modal-header title="${e}" .onAction="${
            tr.handleUriCopy
          }" .actionIcon="${
            eG.COPY_ICON
          }"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${if_defined_l(
            o
          )}" label="${`Continue in ${e}...`}" .isError="${
            this.isError
          }"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${e} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${l}" .isDesktop="${
            !s && n
          }" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(
            this
          )}" .iconRight="${
            eG.RETRY_ICON
          }">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
        }
      };
      (rZ.styles = [ej.globalCss, rH]),
        __decorateClass([state_t()], rZ.prototype, "isError", 2),
        __decorateClass([custom_element_e("wcm-web-connecting-view")], rZ);
    },
  },
]);

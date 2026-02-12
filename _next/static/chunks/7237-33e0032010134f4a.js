"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7237],
  {
    93677: function (e, t, n) {
      n.d(t, {
        e: function () {
          return s;
        },
      });
      let s = {
        presaleAddress: "0x207bea710fec14b70283ccb9f064311343970f95",
        usdtAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        tokenAddress: "0xcomingsoon",
        tokenDecimal: 18,
      };
    },
    79994: function (e, t, n) {
      n.r(t),
        n.d(t, {
          CopiedIcon: function () {
            return CopiedIcon;
          },
        });
      var s = n(85893);
      function CopiedIcon() {
        return (0, s.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsx)("path", {
            d: "M28.2812 6.28125L11 23.5625L3.71875 16.2812L2.28125 17.7188L10.2812 25.7188L11 26.4062L11.7188 25.7188L29.7188 7.71875L28.2812 6.28125Z",
            fill: "currentColor",
          }),
        });
      }
      n(67294),
        (t.default = function () {
          return (0, s.jsxs)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, s.jsx)("path", {
                d: "M19.0908 3.63647H18.1817V5.45466V7.27284V18.1819H9.80453V18.182H3.63623V19.091C3.63623 19.5931 4.04326 20.0001 4.54532 20.0001H19.0908C19.5928 20.0001 19.9999 19.5931 19.9999 19.091V4.54557C19.9999 4.0435 19.5928 3.63647 19.0908 3.63647Z",
                fill: "#F9FF38",
              }),
              (0, s.jsx)("path", {
                d: "M5.45455 16.3637V16.3636H15.4545C15.9566 16.3636 16.3636 15.9566 16.3636 15.4545V7.27273V5.45455V3.63636V2.92261V0.909091C16.3636 0.40703 15.9566 0 15.4545 0H0.909091C0.40703 0 0 0.40703 0 0.909091V15.4545C0 15.9566 0.40703 16.3636 0.909091 16.3636H3.63636V16.3637H5.45455Z",
                fill: "#F9FF38",
              }),
            ],
          });
        });
    },
    32785: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return VerticalDivider;
          },
        });
      var s = n(85893);
      function VerticalDivider(e) {
        return (0, s.jsxs)("svg", {
          width: "2",
          height: "28",
          viewBox: "0 0 2 28",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, s.jsx)("rect", {
              x: "0.900391",
              y: "0.533691",
              width: "1.04853",
              height: "27.2617",
              fill: "url(#paint0_linear_1541_176)",
            }),
            (0, s.jsx)("defs", {
              children: (0, s.jsxs)("linearGradient", {
                id: "paint0_linear_1541_176",
                x1: "1.42465",
                y1: "0.533691",
                x2: "1.42465",
                y2: "27.7954",
                gradientUnits: "userSpaceOnUse",
                children: [
                  (0, s.jsx)("stop", { "stop-opacity": "0" }),
                  (0, s.jsx)("stop", {
                    offset: "0.495",
                    "stop-color": "#F9FF38",
                  }),
                  (0, s.jsx)("stop", { offset: "1", "stop-opacity": "0" }),
                ],
              }),
            }),
          ],
        });
      }
      n(67294);
    },
    96458: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return Percentage;
          },
        });
      var s = n(85893),
        l = n(67421),
        i = n(40752),
        a = n(32785);
      function Percentage() {
        let { t: e } = (0, l.$G)(),
          t = [
            {
              name: "Staking",
              million: "250",
              percent: "25%",
            },
            {
              name: e("sixth_section_tokenomics_marketing"),
              million: "225",
              percent: "22.5%",
            },
            {
              name: e("sixth_section_tokenomics_exchange_listings"),
              million: "180",
              percent: "18%",
            },
            {
              name: e("sixth_section_tokenomics_ecosystem"),
              million: "150",
              percent: "15%",
            },
            {
              name: e("sixth_section_tokenomics_team"),
              million: "135",
              percent: "13.5%",
            },
            {
              name: e("sixth_section_tokenomics_rewards"),
              million: "60",
              percent: "6%",
            },
          ];
        return (0, s.jsxs)("div", {
          className: "percent-table flex flex-col max-w-[544px] w-full gap-2",
          children: [
            (0, s.jsxs)("div", {
              className: "header row items-center h-[33.76px] md:h-[49.28px]",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex text-yellow items-center gap-2",
                  children: [
                    (0, s.jsx)(i.default, {
                      className:
                        "w-[31.19px] h-[16.12px] md:w-[45.53px] md:h-[23.52px]",
                    }),
                    (0, s.jsx)("span", {
                      className: "text-[11.2px] md:text-[16.34px]",
                      children: e("sixth_section_tokenomics_coins"),
                    }),
                    (0, s.jsx)(a.default, {}),
                  ],
                }),
                (0, s.jsx)("span", {
                  className: "w-full text-right",
                  children: e("sixth_section_tokenomics_million"),
                }),
                (0, s.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, s.jsx)(a.default, {}),
                }),
                (0, s.jsx)("span", {
                  className: "w-full text-center",
                  children: "%",
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className:
                "body flex flex-col font-normal py-4 gap-2 md:gap-4 linear-border-top-left",
              children: t.map((e) =>
                (0, s.jsxs)(
                  "div",
                  {
                    className:
                      "row " +
                      ("Exchange Listings" === e.name ? "text-[#50EBFF]" : ""),
                    children: [
                      (0, s.jsx)("span", { children: e.name }),
                      (0, s.jsx)("span", {
                        className: "w-full text-right",
                        children: e.million,
                      }),
                      (0, s.jsx)("span", {}),
                      (0, s.jsx)("span", {
                        className: "text-center",
                        children: e.percent,
                      }),
                    ],
                  },
                  e.name
                )
              ),
            }),
            (0, s.jsxs)("div", {
              className:
                "header row items-center h-[38.07px] md:h-[55.57px] linear-border-top-left linear-border-bottom-right",
              children: [
                (0, s.jsx)("span", {
                  children: e("sixth_section_tokenomics_total"),
                }),
                (0, s.jsx)("span", {
                  className: "w-full text-right",
                  children: "1,000",
                }),
                (0, s.jsx)("span", {}),
                (0, s.jsx)("span", { children: "100%" }),
              ],
            }),
          ],
        });
      }
    },
    73110: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return TokenDetails;
          },
        });
      var s = n(85893),
        l = n(22920),
        i = n(93677),
        a = n(79994),
        c = n(63114),
        r = n(67421);
      function TokenDetails() {
        let { t: e } = (0, r.$G)();
        return (0, s.jsxs)("div", {
          className: "flex flex-col w-full gap-2",
          children: [
            (0, s.jsxs)("div", {
              className: "flex flex-col md:items-center",
              children: [
                (0, s.jsxs)("span", {
                  className:
                    "text-[40px] leading-[46px] md:leading-[86px] md:text-[80px] font-bold text-center",
                  children: [
                    (0, s.jsx)("span", {
                      className: "text-yellow",
                      children: e("remittix"),
                    }),
                    (0, s.jsx)("br", { className: "block md:hidden" }),
                    " ",
                    e("sixth_section_token_details"),
                  ],
                }),
                (0, s.jsx)("span", {
                  className: "text-[15px] md:text-xl font-normal text-center",
                  children: e("sixth_section_token_details_content"),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "gap-4 py-12 token-details md:py-20",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col col-span-2 gap-4 md:col-span-1",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex w-full gap-4",
                      children: [
                        (0, s.jsx)("span", {
                          className: "w-full item-title linear-border-top-left",
                          children: e(
                            "sixth_section_token_details_contract_address"
                          ),
                        }),
                        (0, s.jsx)("div", {
                          className: "item-title w-[53px] cursor-pointer",
                          onClick: () => {
                            (0, c.copyToClipboard)(i.e.tokenAddress, () => {
                              l.Am.success("Address copied");
                            });
                          },
                          children: (0, s.jsx)(a.default, {}),
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "item-content",
                      children: "0xcomingsooncomingsoon...",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    (0, s.jsx)("div", {
                      className: "item-title linear-border-bottom-left",
                      children: e("sixth_section_token_details_token_name"),
                    }),
                    (0, s.jsx)("div", {
                      className: "item-content",
                      children: "Remittix",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    (0, s.jsx)("div", {
                      className: "item-title linear-border-top-left",
                      children: e("sixth_section_token_details_token_symbol"),
                    }),
                    (0, s.jsx)("div", {
                      className: "item-content",
                      children: "RTX",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "overflow-hidden item-title linear-border-bottom-right whitespace-nowrap text-ellipsis",
                      children: e("sixth_section_token_details_token_supply"),
                    }),
                    (0, s.jsx)("div", {
                      className: "item-content",
                      children: "1,000,000,000",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    (0, s.jsx)("div", {
                      className: "item-title linear-border-top-right",
                      children: e("sixth_section_token_details_network"),
                    }),
                    (0, s.jsx)("div", {
                      className: "item-content",
                      children: "Ethereum",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex col-span-2 gap-4 md:flex-col md:col-span-1",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "flex-grow overflow-hidden item-title linear-border-bottom-left whitespace-nowrap text-ellipsis",
                      children: e("sixth_section_token_details_decimal"),
                    }),
                    (0, s.jsx)("div", {
                      className: "flex-grow item-content",
                      children: 18,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    7237: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return Tokenomics;
          },
        });
      var s = n(85893);
      n(67294);
      var l = n(96458),
        i = n(73110),
        a = n(47569),
        c = n(67421);
      function Tokenomics() {
        let { t: e } = (0, c.$G)();
        return (0, s.jsxs)("main", {
          className:
            "flex flex-col items-center justify-center py-10 z-10 relative",
          children: [
            (0, s.jsxs)("div", {
              className:
                "w-full flex flex-col px-4 lg:px-12 2xl:px-20 gap-12 relative z-10",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col items-center",
                  children: [
                    (0, s.jsx)("span", {
                      className:
                        "text-yellow text-[40px] md:text-[80px] font-bold text-center",
                      children: e("tokenomics"),
                    }),
                    (0, s.jsx)("span", {
                      className:
                        "text-[15px] md:text-xl font-normal text-center",
                      children: "The Remittix token has a limited supply of 1 billion tokens and cannot be increased.",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex justify-center md:flex-row gap-8 md:gap-20",
                  children: [
                    (0, s.jsx)("div", {
                      className: "flex justify-center md:mt-12",
                      children: (0, s.jsx)(l.default, {}),
                    }),
                    // (0, s.jsx)("div", {
                    //   className: "hidden md:flex",
                    //   children: (0, s.jsx)("img", {
                    //     src: "/images/tokenomic.png",
                    //     alt: "tokenomic",
                    //   }),
                    // }),
                    // (0, s.jsx)("div", {
                    //   className: "flex md:hidden",
                    //   children: (0, s.jsx)("img", {
                    //     src: "/images/tokenomic-small.png",
                    //     alt: "tokenomic",
                    //   }),
                    // }),
                  ],
                }),
                (0, s.jsx)(a.default, { className: "hidden md:flex -mx-12" }),
                (0, s.jsx)(i.default, {}),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "bg-tokenomics",
              children: [
                (0, s.jsx)("img", {
                  className: "absolute -bottom-1/3 -left-1/3",
                  src: "/images/noise.png",
                  alt: "noise",
                }),
                (0, s.jsx)("img", {
                  className: "absolute -bottom-40 -right-1/3",
                  src: "/images/noise.png",
                  alt: "noise",
                }),
              ],
            }),
          ],
        });
      }
    },
    63114: function (e, t, n) {
      function _tagged_template_literal(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      n.r(t),
        n.d(t, {
          calculateTokenPrice: function () {
            return calculateTokenPrice;
          },
          copyToClipboard: function () {
            return copyToClipboard;
          },
          default: function () {
            return utils;
          },
          fadeIn: function () {
            return c;
          },
          fadeInUp: function () {
            return a;
          },
          formatLocalString: function () {
            return formatLocalString;
          },
          shortenAddress: function () {
            return shortenAddress;
          },
        });
      var s = n(70917),
        l = n(15229),
        i = n(93677);
      function _templateObject() {
        let e = _tagged_template_literal([
          "\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n",
        ]);
        return (
          (_templateObject = function () {
            return e;
          }),
          e
        );
      }
      function _templateObject1() {
        let e = _tagged_template_literal([
          "\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n",
        ]);
        return (
          (_templateObject1 = function () {
            return e;
          }),
          e
        );
      }
      let a = (0, s.F4)(_templateObject()),
        c = (0, s.F4)(_templateObject1());
      function utils() {}
      let calculateTokenPrice = (e) => {
          let t = Number((0, l.b)(e, i.e.tokenDecimal));
          return Number((1 / t).toFixed(3));
        },
        formatLocalString = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
          if (!e) return 0;
          let n = (0, l.b)(e, t);
          return Number(n).toLocaleString();
        },
        copyToClipboard = (e, t) => {
          if (navigator.clipboard && navigator.permissions)
            navigator.clipboard.writeText(e).then(t);
          else if (document.queryCommandSupported("copy")) {
            let n = document.createElement("textarea");
            (n.value = e),
              document.body.appendChild(n),
              n.select(),
              document.execCommand("copy"),
              document.body.removeChild(n),
              null == t || t();
          }
        };
      function shortenAddress(e) {
        return !e || e.length < 10
          ? e
          : ""
              .concat(e.substring(0, 4), "...")
              .concat(e.substring(e.length - 4, e.length));
      }
    },
  },
]);

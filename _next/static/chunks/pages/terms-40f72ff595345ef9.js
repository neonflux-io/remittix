(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6890],
  {
    22871: function (t, e, _) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/terms",
        function () {
          return _(37569);
        },
      ]);
    },
    37569: function (t, e, _) {
      "use strict";
      _.r(e);
      var n = _(85893),
        s = _(14301),
        l = _.n(s),
        i = _(67421);
      e.default = () => {
        let { t } = (0, i.$G)(),
          e = [
            { title: t("terms_of_use_1"), content: t("terms_of_use_1_1") },
            {
              title: t("terms_copyright_1"),
              content: t("terms_copyright_1_1"),
            },
            {
              title: t("terms_email_communication_1"),
              content: t("terms_email_communication_1_1"),
            },
            {
              title: t("terms_no_warranty_1"),
              content: t("terms_no_warranty_1_1"),
            },
            {
              title: t("terms_no_liability_1"),
              content: t("terms_no_liability_1_1"),
            },
            {
              title: t("terms_changes_to_information_1"),
              content: t("terms_changes_to_information_1_1"),
            },
            {
              title: t("terms_intellectual_property_1"),
              content: t("terms_intellectual_property_1_1"),
            },
            {
              title: t("terms_third_party_1"),
              content: t("terms_third_party_1_1"),
            },
            { title: t("terms_accounts_1"), content: t("terms_accounts_1_1") },
            {
              title: t("terms_termination_1"),
              content: t("terms_termination_1_1"),
            },
            {
              title: t("terms_disclaimer_1"),
              content: t("terms_disclaimer_1_1"),
            },
            {
              title: t("terms_changes_to_terms_1"),
              content: t("terms_changes_to_terms_1_1"),
            },
          ];
        return (0, n.jsxs)("div", {
          className: "bg-term ".concat(l().className),
          children: [
            (0, n.jsxs)("div", {
              className:
                "flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:mt-20 mx-auto max-w-[943px]",
              children: [
                (0, n.jsx)("h1", {
                  className:
                    "text-3xl md:text-5xl font-bold text-yellow text-center",
                  children: t("eleventh_section_terms_of_service"),
                }),
                (0, n.jsxs)("div", {
                  className: "flex flex-col gap-12",
                  children: [
                    e.map((t) =>
                      (0, n.jsxs)(
                        "div",
                        {
                          className: "flex flex-col gap-2 md:gap-8",
                          children: [
                            (0, n.jsx)("span", {
                              className: "text-2xl md:text-3xl font-semibold",
                              children: t.title,
                            }),
                            t.content &&
                              (0, n.jsx)("span", {
                                className: "text-gray font-medium",
                                children: t.content,
                              }),
                          ],
                        },
                        t.title
                      )
                    ),
                    (0, n.jsxs)("span", {
                      className: "text-gray font-medium",
                      children: [t("terms_contact_us"), " support@remittix.io"],
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "absolute top-0 left-0 w-full h-full overflow-hidden",
              children: (0, n.jsx)("div", { className: "bg-term" }),
            }),
          ],
        });
      };
    },
    14301: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Poppins_9fef48', '__Poppins_Fallback_9fef48'",
          fontStyle: "normal",
        },
        className: "__className_9fef48",
      };
    },
  },
  function (t) {
    t.O(0, [9774, 2888, 179], function () {
      return t((t.s = 22871));
    }),
      (_N_E = t.O());
  },
]);

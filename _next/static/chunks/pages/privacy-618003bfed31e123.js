(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8915],
  {
    93027: function (_, i, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/privacy",
        function () {
          return e(33903);
        },
      ]);
    },
    33903: function (_, i, e) {
      "use strict";
      e.r(i);
      var t = e(85893),
        c = e(75117),
        o = e.n(c),
        n = e(67421);
      i.default = () => {
        let { t: _ } = (0, n.$G)(),
          i = [
            {
              title: _("privacy_introduction_1"),
              content: _("privacy_introduction_1_1"),
            },
            {
              title: _("privacy_acceptance_of_terms_1"),
              content: _("privacy_acceptance_of_terms_1_1"),
            },
            {
              title: _("privacy_definitions_1"),
              content: "",
              items: [
                _("privacy_definitions_1_1"),
                _("privacy_definitions_1_2"),
                _("privacy_definitions_1_3"),
                _("privacy_definitions_1_4"),
                _("privacy_definitions_1_5"),
                _("privacy_definitions_1_6"),
                _("privacy_definitions_1_7"),
                _("privacy_definitions_1_8"),
                _("privacy_definitions_1_9"),
              ],
            },
            {
              title: _("privacy_types_of_information_collected_1"),
              content: _("privacy_types_of_information_collected_1_1"),
              items: [
                _("privacy_types_of_information_collected_1_2"),
                _("privacy_types_of_information_collected_1_3"),
                _("privacy_types_of_information_collected_1_4"),
                _("privacy_types_of_information_collected_1_5"),
                _("privacy_types_of_information_collected_1_6"),
                _("privacy_types_of_information_collected_1_7"),
              ],
              more: _("privacy_types_of_information_collected_1_8"),
            },
            {
              title: _("privacy_collection_and_use_1"),
              content: _("privacy_collection_and_use_1_1"),
            },
            {
              title: _("privacy_use_of_collected_information_1"),
              content: _("privacy_use_of_collected_information_1_1"),
              items: [
                _("privacy_use_of_collected_information_1_2"),
                _("privacy_use_of_collected_information_1_3"),
                _("privacy_use_of_collected_information_1_4"),
                _("privacy_use_of_collected_information_1_5"),
                _("privacy_use_of_collected_information_1_6"),
              ],
              more: _("privacy_use_of_collected_information_1_7"),
            },
            {
              title: _("privacy_transfer_of_personal_information_1"),
              content: _("privacy_transfer_of_personal_information_1_1"),
            },
            {
              title: _("privacy_disclosure_of_personal_information_1"),
              content: _("privacy_disclosure_of_personal_information_1_1"),
              items: [
                _("privacy_disclosure_of_personal_information_1_2"),
                _("privacy_disclosure_of_personal_information_1_3"),
                _("privacy_disclosure_of_personal_information_1_4"),
              ],
              more: _("privacy_disclosure_of_personal_information_1_5"),
            },
            {
              title: _("privacy_data_security_1"),
              content: _("privacy_data_security_1_1"),
            },
            {
              title: _("privacy_use_data_rights_and_choices_1"),
              content: _("privacy_use_data_rights_and_choices_1_1"),
              items: [
                _("privacy_use_data_rights_and_choices_1_2"),
                _("privacy_use_data_rights_and_choices_1_3"),
                _("privacy_use_data_rights_and_choices_1_4"),
              ],
              more: _("privacy_use_data_rights_and_choices_1_5"),
            },
            {
              title: _("privacy_childrens_privacy_1"),
              content: _("privacy_childrens_privacy_1_1"),
            },
            {
              title: _("privacy_third_party_1"),
              content: _("privacy_third_party_1_1"),
            },
            {
              title: _("privacy_policy_updates_1"),
              content: _("privacy_policy_updates_1_1"),
            },
            {
              title: _("privacy_contact_us_1"),
              content: _("privacy_contact_us_1_1"),
            },
          ];
        return (0, t.jsx)("div", {
          className: "bg-term ".concat(o().className),
          children: (0, t.jsxs)("div", {
            className:
              "flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:mt-20 mx-auto max-w-[943px]",
            children: [
              (0, t.jsx)("h1", {
                className:
                  "text-3xl md:text-5xl font-bold text-yellow text-center",
                children: _("eleventh_section_privacy_policy"),
              }),
              (0, t.jsx)("div", {
                className: "flex flex-col gap-12",
                children: i.map((_) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className: "flex flex-col gap-4 md:gap-8",
                      children: [
                        (0, t.jsx)("span", {
                          className: "text-2xl md:text-3xl font-semibold",
                          children: _.title,
                        }),
                        (_.content || _.items) &&
                          (0, t.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              _.content &&
                                (0, t.jsx)("span", {
                                  className: "text-gray font-medium",
                                  children: _.content,
                                }),
                              _.items &&
                                (0, t.jsx)("ul", {
                                  className:
                                    "text-gray font-medium list-disc px-6",
                                  children: _.items.map((_, i) =>
                                    (0, t.jsx)("li", { children: _ }, i)
                                  ),
                                }),
                            ],
                          }),
                        _.more &&
                          (0, t.jsx)("span", {
                            className: "text-gray font-medium",
                            children: _.more,
                          }),
                      ],
                    },
                    _.title
                  )
                ),
              }),
            ],
          }),
        });
      };
    },
    75117: function (_) {
      _.exports = {
        style: {
          fontFamily: "'__Poppins_9fef48', '__Poppins_Fallback_9fef48'",
          fontStyle: "normal",
        },
        className: "__className_9fef48",
      };
    },
  },
  function (_) {
    _.O(0, [9774, 2888, 179], function () {
      return _((_.s = 93027));
    }),
      (_N_E = _.O());
  },
]);

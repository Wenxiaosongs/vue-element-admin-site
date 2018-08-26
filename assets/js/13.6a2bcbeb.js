(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{216:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Programmers with basic engineering literacy will focus on coding specifications, and Code Linting (Lint) is an important means of ensuring code specification consistency.")]),t._v(" "),s("p",[t._v("What are the benefits of using Lint? In my opinion, it has at least the following three points:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("Common process: write the code locally, submit, start running lint, find the failure to pass, modify the code locally, submit again, wait for the result of CI, and repeat the previous operation if there are any problems.")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("The most effective solution is to put the "),s("code",[t._v("Lint")]),t._v(" check locally. The common practice is to use\n"),s("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"https://github.com/observing/pre-commit",target:"_blank",rel:"noopener noreferrer"}},[t._v("pre-commit"),s("OutboundLink")],1),t._v(" do "),s("code",[t._v("Lint")]),t._v(" before committing locally. Here we use "),s("code",[t._v("husky")]),t._v(".")]),t._v(" "),t._m(6),s("p",[t._v("Then modify package.json to add configuration:")]),t._v(" "),t._m(7),s("p",[t._v("Finally try Git commit and you will receive feedback soon:")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("To solve the above pain points, you need to use "),s("a",{attrs:{href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"}},[t._v("lint-staged"),s("OutboundLink")],1),t._v(". It will only check the parts that you submitted or you modified.")]),t._v(" "),t._m(11),s("p",[t._v("Then, modify the package.json configuration:")]),t._v(" "),t._m(12),s("p",[t._v("As configured above, Verify that the code you submitted matches the "),s("code",[t._v("eslint")]),t._v("( "),s("router-link",{attrs:{to:"./eslint.html"}},[t._v("ESlint")]),t._v(" ) rule of your local configuration, before your local "),s("code",[t._v("commmit")]),t._v(". If it is met, the submission is successful. If it doesn't match, it will automatically execute "),s("code",[t._v("eslint --fix")]),t._v(" to try to help you fix it automatically. If the repair is successful, it will help you to submit the repaired code. If it fails, it will prompt you have an error, and you will be able to submit the code after you fix it.")],1),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("The best "),s("code",[t._v("lint")]),t._v(" specification process is to recommend team members to configure "),s("code",[t._v("eslint")]),t._v(" in their own editor, configure and enable the "),s("code",[t._v("eslint-loader")]),t._v(" error in webpack, so the editor can help you fix some simple formatting errors and remind you of some places that don't meet the "),s("code",[t._v("lint")]),t._v(" specification. And prompt you for errors on the command line. See the details "),s("router-link",{attrs:{to:"./eslint.html"}},[t._v("ESlint")]),t._v("。")],1),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"git-hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-hooks","aria-hidden":"true"}},[this._v("#")]),this._v(" Git Hooks")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Fewer bugs")]),this._v(" "),e("li",[this._v("With higher development efficiency, Lint can easily find low-level, obvious errors.")]),this._v(" "),e("li",[this._v("Higher readability")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Many times our "),e("code",[this._v("lint")]),this._v(" check is placed in the continuous integration phase.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Push Code --\x3e Run CI find problem(remote) --\x3e Fiexd in local --\x3e Push Again --\x3e Pass CI(remote)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("But there is a problem with this. Our "),e("code",[this._v("CI")]),this._v(" (continuous integration) often doesn't just do "),e("code",[this._v("Lint")]),this._v(" work, it also has many other tasks, which leads to a special waste of time, often it may take a few minutes after you In order to know that there is a problem, or sometimes you have not found that your "),e("code",[this._v("CI")]),this._v(" did not pass.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"husky"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#husky","aria-hidden":"true"}},[this._v("#")]),this._v(" husky")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" husky -D -S\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"precommit"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"eslint src/**/*.js"')]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('git commit -m "Keep calm and commit"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("But there is a problem. This is that I may only change one file for this commit. For example, I changed the file of "),e("code",[this._v("foo.js")]),this._v(", but it will still check all the "),e("code",[this._v(".js")]),this._v(" files under "),e("code",[this._v("src")]),this._v(". Very unfriendly. The problem is that I submitted the code I wrote, but I need to solve the other people code problem before.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"lint-staged"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lint-staged","aria-hidden":"true"}},[this._v("#")]),this._v(" lint-staged")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" lint-staged -D -S\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token property"}},[t._v('"precommit"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"lint-staged"')]),t._v("\n\n"),s("span",{attrs:{class:"token property"}},[t._v('"lint-staged"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"src/**/*.{js,vue}"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{attrs:{class:"token string"}},[t._v('"eslint --fix"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token string"}},[t._v('"git add"')]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"sumup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sumup","aria-hidden":"true"}},[this._v("#")]),this._v(" SumUp")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("But this is not mandatory. Some team members or newly arrived interns are not configured in the editor or ignore the error in the command line. In this case, you need to configure the mandatory checker of "),e("code",[this._v("precommit")]),this._v(" to ensure that All code submitted to the remote repository is team compliant.")])}],!1,null,null,null);a.options.__file="git-hook.md";e.default=a.exports}}]);
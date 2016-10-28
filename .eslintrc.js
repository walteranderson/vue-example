module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // --- Errors ---
    "comma-dangle": [2,"never"],
    "no-cond-assign": [2,"always"],
    "no-console": 0,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": [2,"functions"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "use-isnan": 2,
    "valid-jsdoc": 1,
    "valid-typeof": 2,

    // --- Best Practices ---
    "block-scoped-var": 1,
    "consistent-return": 2,
    "curly": 2,
    "default-case": 1,
    "dot-location": [1, "property"],
    "dot-notation": 1,
    "eqeqeq": [2, "smart"],
    "guard-for-in": 1,
    "no-alert": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 0,
    "no-else-return": 1,
    "no-empty-function": 1,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 1,
    "no-extra-label": 1,
    "no-fallthrough": 1,
    "no-floating-decimal": 1,
    "no-implicit-coercion": 0,
    "no-implicit-globals": 1,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-labels": 0,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-multi-spaces": 2,
    "no-multi-str": 0,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 1,
    "no-octal-escape": 2,
    "no-param-reassign": 0,
    "no-process-env": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": [2, "always"],
    "no-script-url": 2,
    "no-self-assign": 1,
    "no-self-compare": 2,
    "no-sequences": 1,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 2,
    "no-unused-expressions": [2, { "allowShortCircuit": true, "allowTernary": true }],
    "no-unused-labels": 1,
    "no-useless-call": 2,
    "no-useless-concat": 1,
    "no-void": 2,
    "no-warning-comments": [0, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],
    "no-with": 2,
    "radix": 2,
    "vars-on-top": 0,
    "wrap-iife": [2, "inside"],
    "yoda": 0,

    // --- Variables ---
    "init-declarations": 0,
    "no-catch-shadow": 0,
    "no-delete-var": 2,
    "no-label-var": 1,
    "no-shadow": [2, {"builtinGlobals": false}],
    "no-shadow-restricted-names": 2,
    // "no-undef": 2,
    "no-undef-init": 1,
    "no-undefined": 0,
    "no-unused-vars": 2,
    "no-use-before-define": 2,

    // --- Node.js and CommonJS (section may not be needed)
    "callback-return": 0,
    "global-require": 2,
    "handle-callback-err": [2, "error"],
    "no-mixed-requires": 2,
    "no-new-require": 2,
    "no-process-exit": 2,
    "no-sync": 2,

    // --- Stylistic Issues ---
    "array-bracket-spacing": [1, "never"],
    "block-spacing": [1, "always"],
    "brace-style": [1, "1tbs", {"allowSingleLine": true}],
    "camelcase": [1, {"properties": "always"}],
    "comma-spacing": [1, {"before": false, "after": true}],
    "comma-style": [1, "last"],
    "computed-property-spacing": [1, "never"],
    "consistent-this": [1, "that", "self", "_self"],
    "eol-last": [1, "unix"],
    "func-names": 2,
    "func-style": [1, "expression", { "allowArrowFunctions": true }],
    "id-blacklist": 0,
    "id-length": 0,
    "id-match": 0,
    "indent": [2, 2, {"SwitchCase": 1}],
    "jsx-quotes": [1, "prefer-single"],
    "key-spacing": [2, {"beforeColon": false, "afterColon": true, "mode": "strict"}],
    "keyword-spacing": [2, {"before": true, "after": true}],
    "linebreak-style": [2, "unix"],
    "lines-around-comment": 0,
    "max-depth": 0,
    "max-len": 0,
    "max-nested-callbacks": 0,
    "max-params": 0,
    "max-statements": 0,
    "new-cap": 2,
    "new-parens": 2,
    "newline-after-var": 0,
    "newline-per-chained-call": 0,
    "no-array-constructor": 0,
    "no-bitwise": 0,
    "no-continue": 0,
    "no-inline-comments": 0,
    "no-lonely-if": 1,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [2, {"max": 3, "maxBOF": 0, "maxEOF": 1}],
    "no-negated-condition": 0,
    "no-nested-ternary": 0,
    "no-new-object": 2,
    "no-plusplus": 0,
    "no-restricted-syntax": 0,
    "no-spaced-func": 2,
    "no-ternary": 0,
    "no-trailing-spaces": [1 ,{"skipBlankLines": true}],
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 1,
    "no-whitespace-before-property": 2,
    "object-curly-spacing": [2, "always"],
    "one-var": 0,
    "one-var-declaration-per-line": 0,
    "operator-assignment": 0,
    "operator-linebreak": [1, "after"],
    "padded-blocks": [2, "never"],
    "quote-props": [2, "as-needed", {"keywords": true, "unnecessary": false, "numbers": true}],
    "quotes": [2, "single"],
    "require-jsdoc": [1, {"require": {"FunctionDeclaration": true, "MethodDefinition": true, "ClassDeclaration": true}}],
    "semi": [2, "always"],
    "semi-spacing": [2, {"before": false, "after": true}],
    "sort-imports": 0,
    "sort-vars": 0,
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": [2, {"int32Hint": true}],
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    "spaced-comment": 0,
    "wrap-regex": 1,

    // --- ECMAScript 6 ---
    // "arrow-body-style": [2, "always"],
    // "arrow-parens": [2, "always"],
    // "arrow-spacing": [2, {"before": true,"after": true}],
    "constructor-super": 2,
    "generator-star-spacing": [2, {"before": false, "after": true}],
    "no-class-assign": 2,
    "no-confusing-arrow": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-new-symbol": 2,
    "no-this-before-super": 2,
    "no-useless-constructor": 1,
    // "no-var": 2,
    "object-shorthand": 0,
    "prefer-arrow-callback": 0,
    "prefer-const": 1,
    "prefer-reflect": 0,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "require-yield": 1,
    "template-curly-spacing": [2, "never"],
    "yield-star-spacing": [2, "after"]
  }
}

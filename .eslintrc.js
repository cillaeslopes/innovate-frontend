const { off } = require("process");

module.exports = {
    extends: 'airbnb-typescript-prettier',
    rules: {
        "import/prefer-default-export": "off",
        "react/jsx-props-no-spreading": "off",
        "import/no-unresolved": ["error", { "ignore": ["\\.(png|jpg|svg)\\?(.+)$"] }]
    }
};

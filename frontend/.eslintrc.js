module.exports = {
	extends: [
		"plugin:vue/vue3-recommended",
		"prettier"
	],
	plugins: [
		"vue"
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			modules: true,
			jsx: true
		}
	},
	env: {
		node: true,
		es6: true
	},
	rules: {
		"vue/multi-word-component-names": 0
	}
}
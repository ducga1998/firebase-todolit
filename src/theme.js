import { createGlobalStyle } from 'styled-components'

const theme = {

	font: '-apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif',
	gutter: 8,
	P400: '#282c70',
	P200: '#4249d7',
	P100: '#5f67ff',
	P90: '#6f76ff',
	P80: '#7f85ff',
	P70: '#8f95ff',
	P60: '#9fa4ff',
	P50: '#afb3ff',
	P40: '#bfc2ff',
	P30: '#cfd1ff',
	P20: '#dfe1ff',
	P10: '#eff0ff',
	N100: '#d1d5db',
	N90: '#d6d9df',
	N80: '#dadde2',
	N70: '#dfe2e6',
	N60: '#e3e6e9',
	N50: '#e8eaed',
	N40: '#edeef1',
	N30: '#f1f2f4',
	N20: '#f0f2f3',
	N10: '#fafbfb',
	N0: '#ffffff',
	D100: '#172b4d',
	D90: '#2e405f',
	D80: '#455571',
	D70: '#5d6b82',
	D60: '#748094',
	D50: '#8b95a6',
	D40: '#a2aab8',
	D30: '#b9bfca',
	D20: '#d1d5db',
	D10: '#e8eaed',
	R100: '#eb0e37',
	R90: '#ed264b',
	R80: '#ef3e5f',
	R60: '#f36e87',
	R40: '#f79faf',
	R20: '#fbcfd7',
	R10: '#fde7eb',
	G100: '#07884a',
	G90: '#20945c',
	G80: '#39a06e',
	G60: '#6ab893',
	G40: '#9ccfb7',
	G20: '#cde7db',
	G10: '#e6f3ed',
	B100: '#00d9fe',
	B90: '#1addfe',
	B80: '#30defb',
	B60: '#61e3f9',
	B40: '#91e8f7',
	B20: '#c2edf5',
	B10: '#e5fbff',
	Y100: '#ffc656',
	Y90: '#ffcc67',
	Y80: '#ffd178',
	Y60: '#ffdd9a',
	Y40: '#ffe8bb',
	Y20: '#fff4dd',
	Y10: '#fff9ee'
}

const GlobalStyle = createGlobalStyle`
	html, body {
		height: 100%;
		font-size: 14px;
	}
	body {
		margin: 0;
		font-family: ${p => p.theme.font};
		font-size: 1rem;
		color: ${p => p.theme.D100};
		-webkit-font-smoothing: antialiased;
		text-size-adjust: 100%;
		text-rendering: optimizeLegibility;
    	-moz-osx-font-smoothing: grayscale;
	}
	*, *:before, *:after {
		box-sizing: border-box;
	}
	*, *:focus, *:active {
		outline: 0;
	}
	a {
		text-decoration: none;
		transition: all .3s;
	}
	input, textarea, button {
		margin: 0;
		-webkit-appearance: none;
	}
`
export default theme
export { GlobalStyle }
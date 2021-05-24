import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import 'styles/globals.css';

const GlobalStyles = createGlobalStyle`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	html, body {
		margin: 0;
		padding: 0;
		word-break: break-all;
	}

	body{
		font-family: "Manrope", sans-serif;
	}
`;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;

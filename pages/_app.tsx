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
        height: 100%;
	}

	body{
		font-family: "Manrope", sans-serif;
	}

	button{
		border: none;
		padding: 0;
		margin: 0;
		background: none;
		font-size: 1rem;
	}

	* a{
		cursor: pointer;
	}
    img{
        max-width: 100%;
        border-radius: inherit;
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

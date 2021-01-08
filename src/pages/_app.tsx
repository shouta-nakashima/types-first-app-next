import "../../styles/globals.css";
import { AppProps } from "next/app";
import CssBaseLine from "@material-ui/core/CssBaseLine";
import { ThemeProvider } from "@material-ui/core/styles";

import { themeDark, themeLight } from "../../lib/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={false ? themeDark : themeLight}>
			<CssBaseLine />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;

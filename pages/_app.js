import React, { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
		// Remove the server side injected CSS
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) jssStyles.parentElement.removeChild(jssStyles)
	}, [])

	return (
		<React.Fragment>
			<Head>
				<title>Nextjs - Material Starter</title>
				<link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
			</Head>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
		</React.Fragment>
	)
}

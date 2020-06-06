import Head from 'next/head';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs - Material - Starter</title>
      </Head>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Starter</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

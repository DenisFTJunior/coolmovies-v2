import "../style/globals.css";
import "babel-polyfill";

import type { AppProps } from "next/app";
import React, { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";

import coolestMoviesTheme from "../style/config/theme";
import movieStore from "../services/stateManagament/config/movieStore";
import Header from "../components/header";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{"Coolmovies - your site for movie reviews"}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={coolestMoviesTheme}>
        <ReduxProvider store={movieStore()}>
          <Header />
          <Component {...pageProps} />
        </ReduxProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

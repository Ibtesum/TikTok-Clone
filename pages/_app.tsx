import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";

import React from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [SSR, setSSR] = useState(true);

  useEffect(() => {
    setSSR(false);
  }, []);

  if (SSR) return null;

  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
      <Navbar />
      <div className=" flex gap-6 md:gap-20">
        <div className=" h-[92vh] overflow-hidden xl:hover:overflow-auto">
          <Sidebar />
        </div>
        <div className=" mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default MyApp;

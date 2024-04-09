import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // const privateRoute = ["/admin", "/user"];

  // console.log(router.pathname);
  // console.log(privateRoute.includes(router.pathname));

  // useEffect(() => {
  //   if (privateRoute.includes(router.pathname)) {
  //     router.replace("/login");
  //     console.log("ishlamadi");
  //   }
  // }, [router.pathname])
  

  return <Component {...pageProps} />;
}

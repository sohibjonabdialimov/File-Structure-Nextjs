import Footer from "@/src/components/ui/Footer";
import Header from "@/src/components/ui/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <div className="">
          <Header />
        </div>
        <div className="height container">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

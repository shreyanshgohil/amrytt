import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${lato.variable} font-body`}>
      <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily}, ui-sans-serif, system-ui,
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, "Noto Sans", sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji";
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
}

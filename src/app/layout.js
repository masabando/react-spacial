"use client"
import "./globals.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Noto_Sans_JP } from "next/font/google";

export const noto = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--noto",
});


export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        {/* <link rel="icon" type="image/svg+xml" href="/vite.svg" /> */}
        <meta name="description" content="React" />
        <meta name="keywords" content="react, spacial web, AR" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="react-spacial" />
        <meta property="og:site_name" content="react-spacial" />
        <meta
          property="og:description"
          content="シンプルなコードで、魅力的な3Dを。"
        />
        <meta
          property="og:image"
          content="https://masabando.github.io/easy-three/easy-three.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://masabando.github.io/easy-three/easy-three.png"
        />
        <title>react-spacial</title>
      </head>
      <body className={noto.className}>
        <AntdRegistry>
          <div className="App mw-100">
            <div className="flex-grow-1 mw-100">{children}</div>
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { BackgroundProvider } from "@/lib/backgroundContext";
import { SharedBackground } from "@/components/SharedBackground";

export const metadata: Metadata = {
  title: "脸书小助手",
  description: "专为 Facebook 注册设计的身份生成工具，智能生成符合真实用户特征的姓名、生日、手机号、邮箱等信息，支持全球100+国家地区，提高账号注册成功率",
  keywords: "Facebook创号,FB注册助手,Facebook账号生成器,FB身份生成,社交媒体注册工具,Facebook注册信息,临时邮箱,测试账号",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "FB创号小助手"
  },
  openGraph: {
    title: "脸书小助手",
    description: "快速生成符合 Facebook 用户特征的真实身份信息，支持全球地区",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#1877F2" />
        <meta name="application-name" content="FB创号小助手" />
        <meta name="apple-mobile-web-app-title" content="FB创号小助手" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📱</text></svg>" />
        <link rel="preconnect" href="https://loliapi.com" />
        <link rel="dns-prefetch" href="https://loliapi.com" />
      </head>
      <body className="antialiased">
        <BackgroundProvider>
          <SharedBackground />
          {children}
        </BackgroundProvider>

        {/* 51.la 统计代码 - 修复版本 */}
        <Script
          id="la-all"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.charset = 'UTF-8';
                script.src = '//sdk.51.la/js-sdk-pro.min.js';
                script.onload = function() {
                  if (window.LA) {
                    LA.init({
                      id: "3OCxas9dwRFL8FZ6",
                      ck: "3OCxas9dwRFL8FZ6",
                      autoTrack: true,
                      hashMode: true
                    });
                  }
                };
                document.head.appendChild(script);
              })();
            `
          }}
        />
      </body>
    </html>
  );
}
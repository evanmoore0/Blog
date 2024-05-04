import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Evan's Tech Blog",
  description: "Tech through the lens of a Computer Science concentrator at Brown University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="black">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        </link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        </link>
        <link
          href="https://fonts.googleapis.com/css2?family=Anta&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        >
        </link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

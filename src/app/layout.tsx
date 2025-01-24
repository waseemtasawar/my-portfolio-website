import './globals.css'; // Import Tailwind and global CSS
import Head from "next/head";

export const metadata = {
  title: 'Waseem Tasawar Portfolio',
  description: 'A portfolio for Waseem Tasawar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}

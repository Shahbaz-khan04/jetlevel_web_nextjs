import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://jetlevel.com/wp-content/uploads/2019/08/cropped-icon-32x32.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

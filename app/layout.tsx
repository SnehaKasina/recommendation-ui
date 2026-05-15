import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; //Anything React can render. children can be any valid React UI
}>) {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}

//children means Render current page here

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: 'RexerDev',
	authors: {
		name: "chensokheng",
	},

	description:
		"Based in India, I'm a Fullstack developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "RexerDev",
		description:
			"Based in India, I'm a Fullstack developer passionate about building a modern web application that users love.",
		url: "http://localhost:3000/",
		siteName: "RexerDev",
		images: "/load.png",
		type: "website",
	},
	keywords: ["Web designing", "website designing", "developer", "freelance", "website developer", "rexerdev"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
      </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Container from "@/components/layouti/container";
import Header from "@/components/layouti/header";
import Footer from "@/components/layouti/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Leo Constantin, Developer",
    template: "%s - Leo Constantin",
  },
  description:
    "Portifolio of Leo Constantin , a FrontEnd Developer showcasing projects, skills, and experience in web development. Let's build something great together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}

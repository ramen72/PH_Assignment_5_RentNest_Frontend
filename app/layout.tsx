import "./globals.css";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const instrumentSansHeading = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-mono",
        geistMono.variable,
        instrumentSansHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <main>{children}</main>
        <Toaster position="top-right" richColors />
        {/* Footer */}
      </body>
    </html>
  );
}

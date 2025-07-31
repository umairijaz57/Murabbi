import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  verification: { google: "6dTDz6yyktfRCuYnCBx4R-xRNldAp0fJ-do-ZLSCxDs" },
  title: "Murabbi",
  description:
    " At Murabbi, we understand that traditional training methods don't always work for everyone. That's why we offer personalized solutions tailored to meet the unique needs of each learner. Our expert trainers provide continuous guidance and mentoring to ensure that each learner reaches their full potential. With a commitment to excellence, innovation, and personalized service, we aspire to be the leading provider of training solutions in the digital age. Join us on this journey and let us help you unlock your potential.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}

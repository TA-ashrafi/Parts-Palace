import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
    title: "PartPalace. - Your Ultimate Parts Marketplace",
    description: "PartPalace. - Your Ultimate Parts Marketplace",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${outfit.className} antialiased`}>
                <StoreProvider>
                    <ThemeProvider>
                        <Toaster />
                        {children}
                    </ThemeProvider>
                </StoreProvider>
            </body>
        </html>
    );
}

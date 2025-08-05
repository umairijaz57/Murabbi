import React from "react";
import { Footer } from "../app/homeComponents";
import { Navbar } from "../app/homeComponents/NavbarL";
import Link from "next/link";

export default function Custom404() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
                    <p className="text-gray-600 mb-8 max-w-md">
                        The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
} 

import React from 'react';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your App</title>
        {/* Add any global styles or meta tags here */}
      </head>
      <body>
        <header>
          <h1>My App Header</h1>
        </header>
        <main>{children }</main>
        <footer>
          <p>&copy; 2024 Your Company</p>
        </footer>
      </body>
    </html>
  );
}

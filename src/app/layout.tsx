export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My App Header</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Your Company</p>
        </footer>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monkey Rapsa",
  description: "Ketterä digitoimisto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body>
        <header>
          <nav>
            <div className="logo">
              <img src="/assets/images/Monkey_Rapsa_Logo_MV.png" alt="Monkey Rapsa Logo" />
              Monkey Rapsa
            </div>
            <div className="menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul>
              <li><a href="#palvelut">Palvelut</a></li>
              <li><a href="#projektit">Projektit</a></li>
              <li><a href="#yhteystiedot">Yhteystiedot</a></li>
              <li><a href="#blogi">Blogi</a></li>
            </ul>
          </nav>
        </header>
        {children}
        <footer>
          <p>&copy; 2025 Monkey Rapsa Oy. Kaikki oikeudet pidätetään.</p>
        </footer>
      </body>
    </html>
  );
} 
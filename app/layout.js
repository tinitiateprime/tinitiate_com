import './globals.css';
import CursorAura from '../components/CursorAura';

export const metadata = {
  metadataBase: new URL('https://www.tinitiate.com'),
  title: 'Tinitiate — Consulting, Execution & CRM',
  description: 'Consulting and technical execution from Tinitiate — data engineering, cloud migration, AI automation, business process design, and custom CRM tooling.',
  icons: { icon: '/images/favico.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CursorAura />
        {children}
      </body>
    </html>
  );
}

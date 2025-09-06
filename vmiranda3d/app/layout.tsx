export const metadata = {
  title: "Vmiranda3D — Render & Design 3D",
  description: "Estética minimalista, render premium para arquitetura e interiores.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}

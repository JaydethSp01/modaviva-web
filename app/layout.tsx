export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/carrito", label: "Carrito" }, { href: "/categor-a", label: "Categorías" }, { href: "/cliente", label: "Clientes" }, { href: "/pedido", label: "Pedidos" }, { href: "/producto", label: "Productos" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "Moda Viva", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="Moda Viva">{children}</ProtectedShell>
      </body>
    </html>
  );
}

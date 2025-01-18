import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmabin || Collection Points",
  description: "Collection Points",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

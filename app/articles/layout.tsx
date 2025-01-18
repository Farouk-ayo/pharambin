import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmabin || Articles",
  description: "Articles",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

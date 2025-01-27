import { Metadata } from "next";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: " Home || Pharmabin",
  description: " Home Pharmabin",
};

const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default HomeLayout;

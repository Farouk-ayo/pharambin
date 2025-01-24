"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { usePathname, useRouter } from "next/navigation";
import { XIcon } from "lucide-react";

import Image from "next/image";
import Modal from "@/components/modal/modalConfirmation";
import { SidebarProps } from "@/lib/types";
import {
  Articles,
  Dashboard,
  Feedback,
  Logout,
  Users,
} from "@/components/icons";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const currentPath = usePathname();
  const router = useRouter();

  const icons: Record<string, React.ReactNode> = {
    "/dashboard": <Dashboard />,
    "/dashboard/users": <Users />,
    "/dashboard/articles": <Articles />,
    "/dashboard/feedbacks": <Feedback />,
  };

  const navlinks = [
    { route: "/dashboard", label: "Home" },
    { route: "/dashboard/users", label: "Registered Users" },
    { route: "/dashboard/articles", label: "Articles" },
    { route: "/dashboard/feedbacks", label: "Feedbacks" },
  ];

  const handleLogout = () => {
    setShowLogoutModal(false);

    router.push("/login");
  };

  return (
    <>
      <div
        className={`fixed flex flex-col justify-between gap-8 h-full w-58 lg:w-72 bg-white text-gray-500 py-2 px-3 lg:px-6 transition-transform transform overflow-y-auto z-50 border-r ${
          isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{ maxHeight: "100vh" }}
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-row items-center justify-between py-6">
            <Link href={"/"}>
              <div className="relative flex items-center w-48 md:w-52 h-20">
                <Image
                  src="/pharmabin-logo.svg"
                  alt="pharmabin"
                  className="w-full h-full"
                  layout="fill"
                />
              </div>
            </Link>
            <button
              className="absolute top-10 right-5 lg:hidden"
              onClick={onClose}
            >
              <XIcon className="w-5 h-5 text-black" stroke="#fff" />
            </button>
          </div>
          <ul className="flex flex-col gap-4 text-bodyText">
            {navlinks.map((link) => (
              <Link
                key={link.route}
                className={`flex flex-row gap-5 items-center px-2 py-4 lg:p-4 font-semibold  rounded-lg hover:bg-primary2 cursor-pointer hover:text-primary hover:fill-primary ${
                  currentPath === link.route ? " text-primary fill-primary" : ""
                }`}
                href={link.route}
                onClick={isMobile ? onClose : undefined}
              >
                <span className="mr-2 fill-primary">{icons[link.route]}</span>
                <span className=" text-base">{link.label}</span>
              </Link>
            ))}
          </ul>
        </div>

        <button
          className="flex flex-row gap-3 item-center justify-center p-4 text-black rounded-lg  hover:bg-primary2 cursor-pointer hover:text-primary hover:fill-primary"
          onClick={() => setShowLogoutModal(true)}
        >
          <Logout /> <span>Logout</span>
          <span className="mr-2 cursor-pointer"></span>
        </button>
      </div>
      <Modal
        isOpen={showLogoutModal}
        title="Are you sure you want to Logout?"
        onConfirm={handleLogout}
        onClose={() => setShowLogoutModal(false)}
      />
    </>
  );
};

export default Sidebar;

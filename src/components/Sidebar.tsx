"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import AccessesIcon from "@/images/svg/Sidebar/accesses.svg";
import ConfigIcon from "@/images/svg/Sidebar/config.svg";
import DashboardIcon from "@/images/svg/Sidebar/dashboard.svg";
import ExitIcon from "@/images/svg/Sidebar/exit.svg";
import ProductsIcon from "@/images/svg/Sidebar/products.svg";
import RequestsIcon from "@/images/svg/Sidebar/requests.svg";
import UsersIcon from "@/images/svg/Sidebar/users.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPermissionsSidebar } from "@/utils/getPermissionsSidebar";

const Sidebar = () => {
  const pathname = usePathname();
  const [userPermissions, setUserPermissions] = useState([])

  const menuItems = [
    {
      href: "/dashboard",
      icon: DashboardIcon,
      label: "Dashboard",
      permission: "dashboard",
    },
    {
      href: "/requests",
      icon: RequestsIcon,
      label: "Pedidos",
      permission: "requests",
    },
    {
      href: "/products",
      icon: ProductsIcon,
      label: "Produtos",
      permission: "products",
    },
    {
      href: "/users",
      icon: UsersIcon,
      label: "Usuários",
      permission: "users",
    },
    {
      href: "/accesses",
      icon: AccessesIcon,
      label: "Gerenciar acessos",
      permission: "accesses",
    },
    {
      href: "/config",
      icon: ConfigIcon,
      label: "Configurações",
      permission: "config",
    },
  ];

  const hasPermission = (name: string) =>
    userPermissions.some((perm: any) => perm.permission_name === name);

  useEffect(() => {
    const fetchPermissions = async () => {
      const res = await getPermissionsSidebar()
      setUserPermissions(res)
    }
    fetchPermissions()
  }, [])

  return (
    <div className="w-64 h-full max-h-screen flex flex-col items-center border-t-2 border-r-2 rounded-e-xl border-border fixed">
      <div className="py-2 mb-3 mt-4">
        <Image
          src={"/logo.svg"}
          alt="Logo Bechef"
          width={148}
          height={50}
        />
      </div>

      <nav className="w-full px-3 space-y-2 flex flex-col items-start mb-9 overflow-y-auto">
        {menuItems.map(({ href, icon: Icon, label, permission }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);
          if (!hasPermission(permission)) return null;

          return (
            <Link
              key={href}
              href={href}
              className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${isActive
                  ? "bg-secondarycolor text-primarycolor"
                  : "bg-white hover:bg-opacity-80 text-grey4"
                }`}
            >
              <Icon className={isActive ? "text-primarycolor" : "text-grey4"} />
              <span className="hidden lg:inline flex-shrink text-[13px]">
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
      <div className="w-full px-3 mt-auto mb-4">
        <Link
          href={"/"}
          className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${pathname == "requests"
            ? "bg-secondarycolor text-primarycolor"
            : "bg-white hover:bg-opacity-80 text-grey4"
            }`}

        >
          <ExitIcon
            className={
              pathname == "requests" ? "text-primarycolor" : "text-grey4"
            }
          />
          <span className="hidden lg:inline flex-shrink text-[13px]">Sair</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

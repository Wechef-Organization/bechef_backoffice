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

const Sidebar = () => {
  const pathname = usePathname();

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
        <Link href={"/dashboard"}
          className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${pathname == "/dashboard"
            ? "bg-secondarycolor text-primarycolor"
            : "bg-white hover:bg-opacity-80 text-grey4"
            }`}

        >
          <DashboardIcon
            className={pathname == "/dashboard" ? "text-primarycolor" : "text-grey4"}
          />
          <span className="hidden lg:inline flex-shrink text-[13px]">
            Dashboard
          </span>
        </Link>
        <Link href={"/requests"}
          className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${pathname == "/requests"
            ? "bg-secondarycolor text-primarycolor"
            : "bg-white hover:bg-opacity-80 text-grey4"
            }`}

        >
          <RequestsIcon
            className={
              pathname == "/requests" ? "text-primarycolor" : "text-grey4"
            }
          />
          <span className="hidden lg:inline flex-shrink text-[13px]">
            Pedidos
          </span>
        </Link>
        <Link href={"/products"}
          className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${pathname == "/products"
            ? "bg-secondarycolor text-primarycolor"
            : "bg-white hover:bg-opacity-80 text-grey4"
            }`}

        >
          <ProductsIcon
            className={
              pathname == "/products" ? "text-primarycolor" : "text-grey4"
            }
          />
          <span className="hidden lg:inline flex-shrink text-[13px]">
            Produtos
          </span>
        </Link>
        <Link href={"/users"}
          className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${pathname == "/users" || pathname == "/users/approvals"
            ? "bg-secondarycolor text-primarycolor"
            : "bg-white hover:bg-opacity-80 text-grey4"
            }`}

        >
          <UsersIcon
            className={
              pathname == "/users" || pathname == "/users/approvals" ? "text-primarycolor" : "text-grey4"
            }
          />
          <span className="hidden lg:inline flex-shrink text-[13px]">
            Usuários
          </span>
        </Link>
        <Link href={"/accesses"}
          className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${pathname == "/accesses"
            ? "bg-secondarycolor text-primarycolor"
            : "bg-white hover:bg-opacity-80 text-grey4"
            }`}

        >
          <AccessesIcon
            className={
              pathname == "/accesses" ? "text-primarycolor" : "text-grey4"
            }
          />
          <span className="hidden lg:inline flex-shrink text-[13px]">
            Gerenciar acessos
          </span>
        </Link>
        <Link href={"/config"}
          className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${pathname == "/config"
            ? "bg-secondarycolor text-primarycolor"
            : "bg-white hover:bg-opacity-80 text-grey4"
            }`}
        >
          <ConfigIcon
            className={
              pathname == "/config" ? "text-primarycolor" : "text-grey4"
            }
          />
          <span className="hidden lg:inline flex-shrink text-[13px]">
            Configurações
          </span>
        </Link>
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

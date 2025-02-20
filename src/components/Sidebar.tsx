"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import DashboardIcon from "@/images/svg/Sidebar/dashboard.svg";
import RequestsIcon from "@/images/svg/Sidebar/requests.svg";
import ProductsIcon from "@/images/svg/Sidebar/products.svg";
import UsersIcon from "@/images/svg/Sidebar/users.svg";
import AccessesIcon from "@/images/svg/Sidebar/accesses.svg";
import ConfigIcon from "@/images/svg/Sidebar/config.svg";
import ExitIcon from "@/images/svg/Sidebar/exit.svg";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 h-full max-h-screen flex flex-col items-center border-t-2 border-r-2 rounded-e-xl border-grey1 fixed">
      <div className="py-2 mb-3 mt-4">
        <Image
          src={"/sidebarLogo.svg"}
          alt="Sidebar logo"
          width={148}
          height={50}
        />
      </div>

      <nav className="w-full px-3 space-y-2 flex flex-col items-start mb-9 overflow-y-auto">
        <Link href={"/"}
          className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${
            pathname == "/"
              ? "bg-secondarycolor text-primarycolor"
              : "bg-white hover:bg-opacity-80 text-grey4"
          }`}
          // onClick={() => navigate(path)}
        >
          <DashboardIcon
            className={pathname == "/" ? "text-primarycolor" : "text-grey4"}
          />
          <span className="hidden lg:inline flex-shrink text-[13px]">
            Dashboard
          </span>
        </Link>
        <Link href={"/requests"}
          className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${
            pathname == "/requests"
              ? "bg-secondarycolor text-primarycolor"
              : "bg-white hover:bg-opacity-80 text-grey4"
          }`}
          // onClick={() => navigate(path)}
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
          className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${
            pathname == "/products"
              ? "bg-secondarycolor text-primarycolor"
              : "bg-white hover:bg-opacity-80 text-grey4"
          }`}
          // onClick={() => navigate(path)}
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
          className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${
            pathname == "/users"
              ? "bg-secondarycolor text-primarycolor"
              : "bg-white hover:bg-opacity-80 text-grey4"
          }`}
          // onClick={() => navigate(path)}
        >
          <UsersIcon
            className={
              pathname == "/users" ? "text-primarycolor" : "text-grey4"
            }
          />
          <span className="hidden lg:inline flex-shrink text-[13px]">
            Usuários
          </span>
        </Link>
        <Link href={"/accesses"}
          className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${
            pathname == "/accesses"
              ? "bg-secondarycolor text-primarycolor"
              : "bg-white hover:bg-opacity-80 text-grey4"
          }`}
          // onClick={() => navigate(path)}
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
          className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${
            pathname == "/config"
              ? "bg-secondarycolor text-primarycolor"
              : "bg-white hover:bg-opacity-80 text-grey4"
          }`}
          // onClick={() => navigate(path)}
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
        <button
          className={`h-11 flex items-center gap-3 rounded px-2 py-1 w-full transition-colors ${
            pathname == "requests"
              ? "bg-secondarycolor text-primarycolor"
              : "bg-white hover:bg-opacity-80 text-grey4"
          }`}
          // onClick={() => navigate(path)}
        >
          <ExitIcon
            className={
              pathname == "requests" ? "text-primarycolor" : "text-grey4"
            }
          />
          <span className="hidden lg:inline flex-shrink text-[13px]">Sair</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

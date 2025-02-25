import { HeaderProps } from "@/interfaces/header"
import Image from "next/image"
import Link from "next/link"
import UserImage from "./UserImage"

const Header: React.FC<HeaderProps> = ({ title, name, back }) => {
    return (
        <header style={{ width: "calc(100% - 376px)" }} className=" h-32 flex flex-row items-center justify-between bg-white z-50 fixed ">
            <div className="flex items-center gap-7">
                {back &&
                    <Link href={back}>
                        <Image
                            src={"/images/Global/backPage.svg"}
                            alt="Icone de validação"
                            width={25} height={25}
                            onClick={() => { }}
                            className="cursor-pointer"
                        />
                    </Link>}
                <h1 className="text-3xl font-semibold text-primarycolor">{title}</h1>
            </div>
            <div className="w-56 h-12 p-1 border border-border rounded-full flex flex-row items-center justify-between">
                <UserImage url={"/mock/users/user.svg"} />
                <p>{name}</p>
                <Image
                    src={"/images/Header/ArrowDown.svg"}
                    alt="Seta para baixo"
                    width={8}
                    height={8}
                />
            </div>
        </header>
    )
}
export default Header
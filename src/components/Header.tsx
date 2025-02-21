import { HeaderProps } from "@/interfaces/header"
import Image from "next/image"
import UserImage from "./UserImage"

const Header: React.FC<HeaderProps> = ({ title, name }) => {
    return (
        <header className="w-full flex flex-row items-center justify-between">
            <h1 className="text-3xl font-semibold text-primarycolor">{title}</h1>
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
import Image from "next/image"

import { UserImageProps } from "@/interfaces/header"


const UserImage: React.FC<UserImageProps> = ({ url, width, header }) => {
    return (
        <Image
            src={url}
            alt="Imagem de usuário"
            width={width || 42}
            height={header || 42}
        />
    )
}
export default UserImage
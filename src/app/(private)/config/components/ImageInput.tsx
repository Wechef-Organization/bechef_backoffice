"use client"

import { InputImageProps } from "@/interfaces/inputImage";
import Image from "next/image";
import { FC, useRef } from "react";
import { Controller } from "react-hook-form";

const ImageInput: FC<InputImageProps> = ({ name, control }) => {

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handlePlaceholderClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, onChange: (value: string | null) => void) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onChange(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <div className="w-[45px] h-[45px] relative">
                    {field.value ?
                        <img src={field.value} alt="Preview" className="w-[45px] h-[45px] rounded-full object-cover"
                        />
                        :
                        <Image
                            alt="Usuário padrão"
                            src={"/images/Accesses/userDefault.svg"}
                            width={45}
                            height={45}
                        />
                    }
                    <Image
                        alt="Camera fotografica"
                        src={"/images/Accesses/camera.svg"}
                        width={16}
                        height={16}
                        className="absolute -right-1 -bottom-1 cursor-pointer"
                        onClick={handlePlaceholderClick}
                    />
                    <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, field.onChange)} className="hidden" ref={fileInputRef} />
                </div>)}
        />
    )
}
export default ImageInput
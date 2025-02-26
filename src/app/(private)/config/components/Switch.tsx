"use client"

import { useConfig } from "@/context/ConfigContext"

const Switch = () => {

    const { switchSelected, setSwitchSelected } = useConfig()

    return (
        <div className="h-11 flex gap-2 p-1 border border-border rounded-full">
            <div
                className={`flex items-center py-1 px-4 ${switchSelected == "categorys" ? "bg-primarycolor" : "bg-white"} rounded-full cursor-pointer`}
                onClick={() => {
                    setSwitchSelected("categorys")
                }}
            >
                <p className={`text-[13px] font-medium ${switchSelected == "categorys" ? "text-white" : "text-primarycolor"}`}>Categorias</p>
            </div>
            <div
                className={`flex items-center py-1 px-4 ${switchSelected == "integrations" ? "bg-primarycolor" : "bg-white"} rounded-full cursor-pointer`}
                onClick={() => {
                    // setSwitchSelected("integrations")
                }}
            >
                <p className={`text-[13px] font-medium ${switchSelected == "integrations" ? "text-white" : "text-primarycolor"}`}>Integrações (Em breve)</p>
            </div>
        </div>
    )
}
export default Switch
"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

import InputSearch from "@/components/InputSearch"
import UserImage from "@/components/UserImage"
import { useDashboard } from "@/context/DashboardContext"
import { getRecipies } from "@/utils/dashboardReq/recipies"

const Recipies = () => {
    const { recipiesList, setRecipiesList } = useDashboard()
    const [value, setValue] = useState("")

    useEffect(() => {
        const featchInfluencers = async () => {
            const response = await getRecipies();
            setRecipiesList(response);
        }
        featchInfluencers()
    }, [])

    const filteredPatients = value
        ? recipiesList.filter((item) =>
            item.description.toLowerCase().includes(value.toLowerCase())
        )
        : recipiesList;

    return (
        <div className="w-[49%] border border-border rounded-lg">
            <div className="p-4 flex flex-row items-center justify-between border-b border-border">
                <h2 className="text-base font-medium">Receitas mais vendidas</h2>
                <InputSearch value={value} setValue={setValue} />
            </div>
            <div className="w-full px-4 py-2 flex flex-row items-center bg-[#F9F9FC]">
                <div className="w-[10%] flex flex-row gap-2 ">
                    <p className="text-xs font-medium text-grey2">ID</p>
                    <Image alt={"Seta para baixo"} src={"/images/Dashboard/arrowDown.svg"} width={8} height={4} />
                </div>
                <div className="w-[50%] flex flex-row gap-2 ">
                    <p className="text-xs font-medium text-grey2">Nome da receita</p>
                </div>
                <div className="w-[20%] flex flex-row gap-2 ">
                    <p className="text-xs font-medium text-grey2">N° vendas</p>
                    <Image alt={"Seta para baixo"} src={"/images/Dashboard/arrowDown.svg"} width={8} height={4} />

                </div>
                <div className="w-[20%] flex flex-row gap-2 ">
                    <p className="text-xs font-medium text-grey2">Total</p>
                    <Image alt={"Seta para baixo"} src={"/images/Dashboard/arrowDown.svg"} width={8} height={4} />

                </div>
            </div>
            <ul className="overflow-y-auto h-[330px]">
                {filteredPatients.length > 0 && filteredPatients.map((elm) => (
                    <div className="w-full px-4 py-2 flex flex-row items-center" key={elm.id}>
                        <div className="w-[10%] pl-2 flex flex-row gap-2">
                            <p className="text-xs font-medium text-grey2">{elm.id}</p>
                        </div>
                        <div className="w-[50%] flex flex-row items-center gap-2">
                            <Image src={elm.image} alt="Imagem da receita" width={38} height={38} className="rounded" />
                            <div>
                                <h3 className="text-[13px] font-medium">
                                    {elm.description}
                                </h3>
                                <div className="flex items-center gap-1">
                                    <UserImage url={elm.user_image} width={16} header={16} />
                                    <p className="text-[11px] font-medium">@{elm.nick_name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[20%] flex flex-row gap-2 ">
                            <p className="text-xs font-medium text-grey2">{elm.sales_number}</p>

                        </div>

                        <div className="w-[20%] flex flex-row gap-2 ">
                            <p className="text-xs font-medium text-grey2">R$ {elm.total}</p>

                        </div>

                    </div>
                ))}

            </ul>
        </div>
    )
}
export default Recipies
"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

import InputSearch from "@/components/InputSearch"
import UserImage from "@/components/UserImage"
import { useDashboard } from "@/context/DashboardContext"
import { RankingItem } from "@/interfaces/dashboardContext"
import { getRancking } from "@/utils/dashboardReq/rancking"

const Ranking = () => {
    const { ranckingList, setRanckingList } = useDashboard()
    const [value, setValue] = useState("")
    const [sortOrder, setSortOrder] = useState<{
        field: "id" | "sales_number" | "total";
        direction: "asc" | "desc";
    }>({
        field: "id",
        direction: "asc",
    })

    useEffect(() => {
        const featchInfluencers = async () => {
            const response = await getRancking();
            setRanckingList(response);
        }
        featchInfluencers()
    }, [])

    const handleSort = (field: "id" | "sales_number" | "total") => {
        setSortOrder((prevState) => {
            if (prevState.field === field) {

                return {
                    field: field,
                    direction: prevState.direction === "asc" ? "desc" : "asc",
                };
            }
            return {
                field: field,
                direction: "asc",
            };
        });
    };


    const filteredPatients = value
        ? ranckingList.filter((item: RankingItem) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        )
        : ranckingList;


    const sortedPatients = [...filteredPatients].sort((a, b) => {
        const aValue = a[sortOrder.field];
        const bValue = b[sortOrder.field];

        if (sortOrder.direction === "asc") {
            return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
        } else {
            return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
        }
    });


    return (
        <div className="w-[49%] border border-border rounded-lg">
            <div className="p-4 flex flex-row items-center justify-between border-b border-border">
                <h2 className="text-base font-medium">Ranking de vendas</h2>
                <InputSearch value={value} setValue={setValue} />
            </div>
            <div className="w-full px-4 py-2 flex flex-row items-center bg-[#F9F9FC]">
                <div className="w-[10%] flex flex-row gap-2 cursor-pointer" onClick={() => handleSort("id")}>
                    <p className="text-xs font-medium text-grey2">ID</p>
                    <Image alt={"Seta para baixo"} src={"/images/Dashboard/arrowDown.svg"} width={8} height={4} />
                </div>
                <div className="w-[50%] flex flex-row gap-2">
                    <p className="text-xs font-medium text-grey2">Influencer</p>
                </div>
                <div className="w-[20%] flex flex-row gap-2 cursor-pointer" onClick={() => handleSort("sales_number")}>
                    <p className="text-xs font-medium text-grey2">N° vendas</p>
                    <Image alt={"Seta para baixo"} src={"/images/Dashboard/arrowDown.svg"} width={8} height={4} />
                </div>
                <div className="w-[20%] flex flex-row gap-2 cursor-pointer" onClick={() => handleSort("total")}>
                    <p className="text-xs font-medium text-grey2">Total</p>
                    <Image alt={"Seta para baixo"} src={"/images/Dashboard/arrowDown.svg"} width={8} height={4} />
                </div>
            </div>
            <ul className="overflow-y-auto h-[330px]">
                {sortedPatients.length > 0 && sortedPatients.map((elm) => (
                    <div className="w-full px-4 py-2 flex flex-row items-center" key={elm.id}>
                        <div className="w-[10%] pl-2 flex flex-row gap-2">
                            <p className="text-xs font-medium text-grey2">{elm.id}</p>
                        </div>
                        <div className="w-[50%] flex flex-row items-center gap-2">
                            <UserImage url={elm.image} width={32} header={32} />
                            <p className="text-xs font-medium text-grey2">{elm.name}</p>
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
export default Ranking
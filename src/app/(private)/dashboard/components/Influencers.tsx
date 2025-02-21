"use client"

import { useEffect, useState } from "react"

import InputSearch from "@/components/InputSearch"
import UserImage from "@/components/UserImage"
import { useDashboard } from "@/context/DashboardContext"
import { getInfluencers } from "@/utils/dashboardReq/influencers"

const Influencers = () => {
    const { setInfluencersList, influencersList } = useDashboard()
    const [value, setValue] = useState("")

    useEffect(() => {
        const featchInfluencers = async () => {
            const response = await getInfluencers();
            setInfluencersList(response);
        }
        featchInfluencers()
    }, [])

    const filteredPatients = value
        ? influencersList.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        )
        : influencersList;

    return (
        <div className="w-[49%] border border-border rounded-lg">
            <div className="p-4 flex flex-row items-center justify-between border-b border-border">
                <h2 className="text-base font-medium">Organograma influencers</h2>
                <div className="px-2 bg-secondarycolor rounded-full">
                    <p className="text-[11px] font-medium text-primarycolor">{filteredPatients.length} pessoas</p>
                </div>
            </div>
            <div className="w-full px-4 py-5 flex flex-row items-center justify-center">
                <InputSearch value={value} setValue={setValue} width="w-full" />
            </div>
            <ul className="overflow-y-auto h-[300px] py-3 flex justify-center gap-3 flex-wrap">
                {filteredPatients.length > 0 && filteredPatients.map((elm) => (
                    <div className="w-24 h-14 px-3 py-6 mt-3 border border-border rounded-md flex flex-col items-center justify-center relative" key={elm.id}>
                        <div className="absolute -top-4">
                            <UserImage url={elm.image} width={32} header={32} />
                        </div>
                        <p className="text-[10px] font-medium text-center">{elm.name}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}
export default Influencers
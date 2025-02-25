
"use client"

import InputSearch from "@/components/InputSearch";
import { useUsers } from "@/context/UsersContext";

const FilterHeader = () => {
    const { searchValue, setSearchValue, switchSelected, setSwitchSelected } = useUsers()

    return (
        <div className="flex items-center gap-3">
            <InputSearch width="w-80" heigth="h-11" value={searchValue} setValue={setSearchValue} />
            <div className="h-11 flex gap-2 p-1 border border-border rounded-full">
                <div
                    className={`flex items-center py-1 px-4 ${switchSelected == "users" ? "bg-primarycolor" : "bg-white"} rounded-full cursor-pointer`}
                    onClick={() => {
                        setSwitchSelected("users")
                    }}
                >
                    <p className={`text-[13px] font-medium ${switchSelected == "users" ? "text-white" : "text-primarycolor"}`}>Usuários</p>
                </div>
                <div
                    className={`flex items-center py-1 px-4 ${switchSelected == "influencers" ? "bg-primarycolor" : "bg-white"} rounded-full cursor-pointer`}
                    onClick={() => {
                        setSwitchSelected("influencers")
                    }}
                >
                    <p className={`text-[13px] font-medium ${switchSelected == "influencers" ? "text-white" : "text-primarycolor"}`}>Influencers</p>
                </div>
                <div
                    className={`flex items-center py-1 px-4 ${switchSelected == "nutri" ? "bg-primarycolor" : "bg-white"} rounded-full cursor-pointer`}
                    onClick={() => {
                        setSwitchSelected("nutri")
                    }}
                >
                    <p className={`text-[13px] ${switchSelected == "nutri" ? "text-white" : "text-primarycolor"} font-medium `}>Nutricionistas</p>
                </div>
            </div>
        </div>
    )
}
export default FilterHeader
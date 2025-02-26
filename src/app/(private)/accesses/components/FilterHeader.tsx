"use client"

import Button from "@/components/Button";
import InputSearch from "@/components/InputSearch";
import { useAccesses } from "@/context/AccessesContext";

const FilterHeader = () => {
    const { searchValue, setSearchValue, setUserSelected, setUserIsOpen } = useAccesses()

    return (
        <div className="flex items-center justify-between gap-3">
            <InputSearch width="w-80" heigth="h-11" value={searchValue} setValue={setSearchValue} />
            <Button
                name="Novo usuário"
                className="w-44 h-11"
                textColor="text-white"
                backgroundColor="bg-primarycolor"
                type="submit"
                onClick={() => {
                    setUserSelected(undefined)
                    setUserIsOpen(true)
                }}
            />
        </div>
    )
}
export default FilterHeader
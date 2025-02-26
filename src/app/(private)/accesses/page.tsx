"use client"

import Image from "next/image"
import { useEffect } from "react"

import Header from "@/components/Header"
import { useAccesses } from "@/context/AccessesContext"
import { User } from "@/interfaces/accesses"
import { getUsers } from "@/utils/accesses/users"
import FilterHeader from "./components/FilterHeader"
import UserCard from "./components/UserCard"
import ActionsModal from "./components/modals/ActionsModal"
import DeleteModal from "./components/modals/DeleteModal"
import UserModal from "./components/modals/UserModal"

const Accesses = () => {

  const { usersList, setUsersList, searchValue, setUserSelected,
    actionsIsOpen, setActionsIsOpen,
    deleteOpen, setDeleteOpen,
    userIsOpen, setUserIsOpen } = useAccesses()

  useEffect(() => {
    const fetchAccesses = async () => {
      const response = await getUsers();
      setUsersList(response);
    };

    fetchAccesses();
  }, [])

  const filteredPatients = usersList.filter((item: User) => {
    const matchesSearch = searchValue
      ? item.name.toLowerCase().includes(searchValue.toLowerCase())
      : true;

    return matchesSearch
  });

  return (
    <div className="w-full px-[60px] pb-11 flex flex-col gap-9">
      <Header title="Gerenciamento de acesso" name="Mateus barbosa" />
      <div className="pt-32">
        <FilterHeader />
      </div>
      <div className="flex flex-col gap-3">
        <div className="w-full h-14 border border-border rounded-xl flex items-center p-5 mb-1">
          <div className="w-[10%] ">
            <Image alt="Caixa de seleção" src={"/images/Global/checkBoxOff.svg"} width={15} height={15} />
          </div>
          <div className="w-[30%]">
            <p className="text-sm font-medium text-grey7">Nome do usuário</p>
          </div>
          <div className="w-[30%]">
            <p className="text-sm font-medium text-grey7">E-mail</p>
          </div>
          <div className="w-[30%]">
            <p className="text-sm font-medium text-grey7">Permissão</p>
          </div>
        </div>
        {filteredPatients.length > 0 && filteredPatients.map((elm) => (
          <UserCard key={elm.id} user={elm} setUserSelected={setUserSelected} setActionsIsOpen={setActionsIsOpen} />
        ))}
      </div>
      <ActionsModal isOpen={actionsIsOpen} setIsOpen={setActionsIsOpen} />
      <DeleteModal isOpen={deleteOpen} setIsOpen={setDeleteOpen} />
      <UserModal isOpen={userIsOpen} setIsOpen={setUserIsOpen} />
    </div>
  )
}
export default Accesses
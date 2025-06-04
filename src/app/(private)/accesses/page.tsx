"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import Header from "@/components/Header"
import { useAccesses } from "@/context/AccessesContext"
import { getAllAdms } from "@/utils/accesses/adms"
import FilterHeader from "./components/FilterHeader"
import UserCard from "./components/UserCard"
import ActionsModal from "./components/modals/ActionsModal"
import DeleteModal from "./components/modals/DeleteModal"
import UserModal from "./components/modals/UserModal"
import { LottieAnimations } from "@/components/LottieAnimations"
import { Pagination } from "@/components/Pagination"

const Accesses = () => {

  const { usersList, setUsersList, searchValue, setUserSelected,
    actionsIsOpen, setActionsIsOpen,
    deleteOpen, setDeleteOpen,
    userIsOpen, setUserIsOpen } = useAccesses()

  const [loading, setLoading] = useState(true);
  const [pageOrders, setPageOrders] = useState<number>(1);
  const [ordersCount, setOrdersCount] = useState(0);
  const [orderBy, setOrderBy] = useState('');
  const [sortBy, setSortBy] = useState<'ASC' | 'DESC'>();
  const totalPages = Math.ceil(ordersCount / 50);

  const fetchData = async () => {
    await getAllAdms({
      setLoading,
      setUsersList,
      search: searchValue,
      page: pageOrders,
      setOrdersCount,
      orderBy,
      sortBy,
    });
  }

  useEffect(() => {
    fetchData();
  }, [pageOrders, orderBy, sortBy])



  return (
    <div className="w-full px-[60px] pb-11 flex flex-col gap-9">
      <Header title="Gerenciamento de acesso" name="Mateus barbosa" />
      <div className="pt-32">
        <FilterHeader fetchData={fetchData} />
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
        {
          loading ? <div className="w-full h-[calc(100%-45px)] flex items-center justify-center">
            <LottieAnimations type={'loading'} />
          </div> :
            <>
              {usersList?.length > 0 ?
                <>
                  {usersList.length > 0 && usersList.map((elm) => (
                    <UserCard key={elm.id} user={elm} setUserSelected={setUserSelected} setActionsIsOpen={setActionsIsOpen} />
                  ))}
                  <div className="w-full flex justify-center items-center py-3">
                    <Pagination currentPage={pageOrders} setCurrentPage={setPageOrders} totalPages={totalPages} />
                  </div></>
                :
                <div className="flex flex-col gap-4 items-center justify-center">
                  <Image
                    src={"images/Global/emptyList.svg"}
                    alt="Lista vazia"
                    width={400}
                    height={420}
                  />
                  <p>Ainda não existem usuários cadastrados</p>
                </div>}
            </>
        }
      </div>
      <ActionsModal isOpen={actionsIsOpen} setIsOpen={setActionsIsOpen} />
      <DeleteModal isOpen={deleteOpen} setIsOpen={setDeleteOpen} />
      <UserModal isOpen={userIsOpen} setIsOpen={setUserIsOpen} />
    </div>
  )
}
export default Accesses
"use client"

import { useEffect, useState } from "react"

import Header from "@/components/Header"
import { useUsers } from "@/context/UsersContext"
import FilterHeader from "./components/FilterHeader"
import NutriCard from "./components/NutriCard"
import UserInfluencerCard from "./components/UserInfluencerCard"
import { getAllUsers } from "@/utils/users/users"
import { getAllInfluencers } from "@/utils/users/influencers"
import { getAllNutris } from "@/utils/users/nutri"
import { Pagination } from "@/components/Pagination"
import Image from "next/image"
import { LottieAnimations } from "@/components/LottieAnimations"

const Users = () => {
  const { searchValue, switchSelected, usersApprovalsList, setUsersApprovalsList, influencersApprovalsList, setInfluencersApprovalsList, nutriApprovalsList, setNutriApprovalsList } = useUsers()

  const [loading, setLoading] = useState(true);
  const [pageOrders, setPageOrders] = useState<number>(1);
  const [ordersCount, setOrdersCount] = useState(0);
  const [orderBy, setOrderBy] = useState('');
  const [sortBy, setSortBy] = useState<'ASC' | 'DESC'>();
  const totalPages = Math.ceil(ordersCount / 50);

  const fetchData = async () => {
    if (switchSelected == "users") {
      await getAllUsers({
        setLoading,
        setUsersList: setUsersApprovalsList,
        search: searchValue,
        page: pageOrders,
        setOrdersCount,
        orderBy,
        sortBy,
        approved: "false"
      });
    }
    if (switchSelected == "influencers") {
      await getAllInfluencers({
        setLoading,
        setInfluencersList: setInfluencersApprovalsList,
        search: searchValue,
        page: pageOrders,
        setOrdersCount,
        orderBy,
        sortBy,
        approved: "false"

      });
    }
    if (switchSelected == "nutri") {
      await getAllNutris({
        setLoading,
        setNutriList: setNutriApprovalsList,
        search: searchValue,
        page: pageOrders,
        setOrdersCount,
        orderBy,
        sortBy,
        approved: "false"

      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageOrders, orderBy, sortBy, switchSelected])

  const existItemList = () => {
    if (switchSelected == "users" && usersApprovalsList?.length > 0) {
      return true
    }
    if (switchSelected == "influencers" && influencersApprovalsList?.length > 0) {
      return true

    }
    if (switchSelected == "nutri" && nutriApprovalsList?.length > 0) {
      return true
    }
    return false
  }

  return (
    <div className="w-full px-[60px] pb-11 flex flex-col gap-11">
      <Header title="Aprovações" name="Mateus barbosa" back="/users" />
      <div className="flex flex-col gap-6 pt-32">
        <FilterHeader fetchData={fetchData} />
      </div>
      {
        loading ? <div className="w-full h-[calc(100%-45px)] flex items-center justify-center">
          <LottieAnimations type={'loading'} />
        </div> :
          <>
            {existItemList() ?
              <>
                <div className="flex flex-wrap gap-6">
                  {switchSelected == "users" && usersApprovalsList?.length > 0 && usersApprovalsList?.map((elm) => (
                    <UserInfluencerCard key={elm.id} user={elm} fetchData={fetchData} />
                  ))}
                  {switchSelected == "influencers" && influencersApprovalsList?.length > 0 && influencersApprovalsList?.map((elm) => (
                    <UserInfluencerCard key={elm.id} user={elm} fetchData={fetchData} />
                  ))}
                  {switchSelected == "nutri" && nutriApprovalsList?.length > 0 && nutriApprovalsList?.map((elm) => (
                    <NutriCard key={elm.id} nutri={elm} fetchData={fetchData} />
                  ))}
                </div>
                <div className="w-full flex justify-center items-center py-3">
                  <Pagination currentPage={pageOrders} setCurrentPage={setPageOrders} totalPages={totalPages} />
                </div></>
              : <div className="flex flex-col gap-4 items-center justify-center">
                <Image
                  src={"/images/Global/emptyList.svg"}
                  alt="Lista vazia"
                  width={400}
                  height={420}
                />
                <p>Ainda não existem {switchSelected == "users" ? "usuários" : switchSelected == "influencers" ? "influencers" : "nutricionistas"} cadastrados</p>
              </div>}
          </>
      }
    </div>
  )
}
export default Users
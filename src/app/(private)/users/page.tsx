"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { useUsers } from "@/context/UsersContext"
import { getAllInfluencers } from "@/utils/users/influencers"
import { getAllNutris } from "@/utils/users/nutri"
import { getAllUsers } from "@/utils/users/users"
import { Pagination } from "@/components/Pagination"
import { LottieAnimations } from "@/components/LottieAnimations"
import Header from "@/components/Header"
import FilterHeader from "./components/FilterHeader"
import NutriCard from "./components/NutriCard"
import UserInfluencerCard from "./components/UserInfluencerCard"

const Users = () => {
  const { searchValue, switchSelected, usersList, setUsersList, influencersList, setInfluencersList, nutriList, setNutriList } = useUsers()

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
        setUsersList,
        search: searchValue,
        page: pageOrders,
        setOrdersCount,
        orderBy,
        sortBy,
      });
    }
    if (switchSelected == "influencers") {
      await getAllInfluencers({
        setLoading,
        setInfluencersList,
        search: searchValue,
        page: pageOrders,
        setOrdersCount,
        orderBy,
        sortBy,
      });
    }
    if (switchSelected == "nutri") {
      await getAllNutris({
        setLoading,
        setNutriList,
        search: searchValue,
        page: pageOrders,
        setOrdersCount,
        orderBy,
        sortBy,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageOrders, orderBy, sortBy, switchSelected])

  const existItemList = () => {
    if (switchSelected == "users" && usersList?.length > 0) {
      return true
    }
    if (switchSelected == "influencers" && influencersList?.length > 0) {
      return true

    }
    if (switchSelected == "nutri" && nutriList?.length > 0) {
      return true
    }
    return false
  }

  return (
    <div className="w-full px-[60px] pb-11 flex flex-col gap-9">
      <Header title="Usuários" name="Mateus barbosa" />
      <div className="pt-32">
        <FilterHeader fetchData={fetchData} />
      </div>
      {
        loading ? <div className="w-full h-[calc(100%-45px)] flex items-center justify-center">
          <LottieAnimations type={'loading'} />
        </div> :
          <>
            {existItemList() ?
              <>
                <div className="flex flex-col gap-4">
                  {switchSelected == "users" && usersList?.length > 0 && usersList?.map((elm) => (
                    <UserInfluencerCard key={elm.id} user={elm} />
                  ))}
                  {switchSelected == "influencers" && influencersList?.length > 0 && influencersList?.map((elm) => (
                    <UserInfluencerCard key={elm.id} user={elm} />
                  ))}
                  {switchSelected == "nutri" && nutriList?.length > 0 && nutriList?.map((elm) => (
                    <NutriCard key={elm.id} nutri={elm} />
                  ))}
                </div>
                <div className="w-full flex justify-center items-center py-3">
                  <Pagination currentPage={pageOrders} setCurrentPage={setPageOrders} totalPages={totalPages} />
                </div></>
              :
              <div className="flex flex-col gap-4 items-center justify-center">
                <Image
                  className="cursor-pointer"
                  src={"images/Global/emptyList.svg"}
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
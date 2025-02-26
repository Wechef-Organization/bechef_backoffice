"use client"

import { useEffect } from "react"

import Header from "@/components/Header"
import { useUsers } from "@/context/UsersContext"
import { Nutri, User } from "@/interfaces/users"
import { getInfluencers } from "@/utils/users/influencers"
import { getNutri } from "@/utils/users/nutri"
import { getUsers } from "@/utils/users/users"
import FilterHeader from "./components/FilterHeader"
import NutriCard from "./components/NutriCard"
import UserInfluencerCard from "./components/UserInfluencerCard"

const Users = () => {
  const { searchValue, switchSelected, usersList, setUsersList, influencersList, setInfluencersList, nutriList, setNutriList } = useUsers()

  useEffect(() => {
    const fetchData = async () => {
      if (switchSelected == "users") {
        const response = await getUsers();
        setUsersList(response);
      }
      if (switchSelected == "influencers") {
        const response = await getInfluencers();
        setInfluencersList(response);
      }
      if (switchSelected == "nutri") {
        const response = await getNutri();
        setNutriList(response);
      }
    };
    fetchData();
  }, [switchSelected])

  const filteredUsers = usersList.filter((item: User) => {
    const matchesSearch = searchValue
      ? item.name.toLowerCase().includes(searchValue.toLowerCase())
      : true;
    return matchesSearch
  });

  const filteredUnfluencers = influencersList.filter((item: User) => {
    const matchesSearch = searchValue
      ? item.name.toLowerCase().includes(searchValue.toLowerCase())
      : true;
    return matchesSearch
  });

  const filteredNutri = nutriList.filter((item: Nutri) => {
    const matchesSearch = searchValue
      ? item.name.toLowerCase().includes(searchValue.toLowerCase())
      : true;
    return matchesSearch
  });

  return (
    <div className="w-full px-[60px] pb-11 flex flex-col gap-9">
      <Header title="Usuários" name="Mateus barbosa" />
      <div className="pt-32">
        <FilterHeader />
      </div>
      <div className="flex flex-col gap-4">
        {switchSelected == "users" && filteredUsers.length > 0 && filteredUsers.map((elm) => (
          <UserInfluencerCard key={elm.id} user={elm} />
        ))}
        {switchSelected == "influencers" && filteredUnfluencers.length > 0 && filteredUnfluencers.map((elm) => (
          <UserInfluencerCard key={elm.id} user={elm} />
        ))}
        {switchSelected == "nutri" && filteredNutri.length > 0 && filteredNutri.map((elm) => (
          <NutriCard key={elm.id} nutri={elm} />
        ))}
      </div>
    </div>
  )
}
export default Users
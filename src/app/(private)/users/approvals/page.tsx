"use client"

import { useEffect } from "react"

import Header from "@/components/Header"
import { useUsers } from "@/context/UsersContext"
import { NutriApprovals, UserApprovals } from "@/interfaces/approvals"
import { getInfluencersApprovals } from "@/utils/users/approvals/influencers"
import { getNutriApprovals } from "@/utils/users/approvals/nutri"
import { getUsersApprovals } from "@/utils/users/approvals/users"
import FilterHeader from "./components/FilterHeader"
import NutriCard from "./components/NutriCard"
import UserInfluencerCard from "./components/UserInfluencerCard"

const Users = () => {
  const { searchValue, switchSelected, usersApprovalsList, setUsersApprovalsList, influencersApprovalsList, setInfluencersApprovalsList, nutriApprovalsList, setNutriApprovalsList } = useUsers()

  useEffect(() => {
    const fetchData = async () => {
      if (switchSelected == "users") {
        const response = await getUsersApprovals();
        setUsersApprovalsList(response);
      }
      if (switchSelected == "influencers") {
        const response = await getInfluencersApprovals();
        setInfluencersApprovalsList(response);
      }
      if (switchSelected == "nutri") {
        const response = await getNutriApprovals();
        setNutriApprovalsList(response);
      }
    };
    fetchData();
  }, [switchSelected])

  const filteredUsers = usersApprovalsList.filter((item: UserApprovals) => {
    const matchesSearch = searchValue
      ? item.name.toLowerCase().includes(searchValue.toLowerCase())
      : true;
    return matchesSearch
  });

  const filteredUnfluencers = influencersApprovalsList.filter((item: UserApprovals) => {
    const matchesSearch = searchValue
      ? item.name.toLowerCase().includes(searchValue.toLowerCase())
      : true;
    return matchesSearch
  });

  const filteredNutri = nutriApprovalsList.filter((item: NutriApprovals) => {
    const matchesSearch = searchValue
      ? item.name.toLowerCase().includes(searchValue.toLowerCase())
      : true;
    return matchesSearch
  });

  return (
    <div className="w-full px-[60px] pb-11 flex flex-col gap-11">
      <Header title="Aprovações" name="Mateus barbosa" back="/users" />
      <div className="flex flex-col gap-6 pt-32">
        <FilterHeader />
      </div>
      <div className="flex flex-wrap gap-6">
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
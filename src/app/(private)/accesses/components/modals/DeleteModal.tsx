"use client"

import Button from "@/components/Button";
import { useAccesses } from "@/context/AccessesContext";
import { deleteUser } from "@/utils/accesses/adms";
import Image from "next/image";
import { FC, useEffect } from "react";
import Modal from "react-modal";


const DeleteModal: FC<ModalProps> = ({ isOpen, setIsOpen }) => {

  const { userSelected, usersList, setUsersList } = useAccesses()

  useEffect(() => {
    Modal.setAppElement(document.body);
  }, []);

  const handleDelete = () => {
    deleteUser({ setUsers: setUsersList, list: usersList, id: userSelected?.id })
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => { setIsOpen(false) }}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      className="relative w-full max-w-lg py-4 bg-white rounded-[20px] shadow-lg outline-none"
    >
      <div>
        <div className="w-full flex items-center justify-between border-b border-border pb-3 px-4">
          <div className="flex gap-5">
            <Image
              className="cursor-pointer"
              src={"images/Global/xClose.svg"}
              alt="Botão de fechar modal"
              width={13}
              height={13}
              onClick={() => { setIsOpen(false) }}
            />
            <h2 className="text-lg font-medium">Excluir usuário</h2>
          </div>
          <Button
            name="Excluir"
            className="w-[82px] h-12"
            textColor="text-red5"
            backgroundColor="bg-red4"
            type="submit"
            onClick={handleDelete}
          />
        </div>
        <div className="w-full h-[200px] flex items-center justify-center">
          <p className="text-lg text-center">
            Tem certeza que deseja excluir o usuário <p className="font-bold">{userSelected?.name} ?</p>
          </p>
        </div>
      </div>
    </Modal>
  )
}
export default DeleteModal
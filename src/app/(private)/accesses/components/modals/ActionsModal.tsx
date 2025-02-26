"use client"

import { useAccesses } from "@/context/AccessesContext";
import Image from "next/image";
import { FC, useEffect } from "react";
import Modal from "react-modal";


const ActionsModal: FC<ModalProps> = ({ isOpen, setIsOpen }) => {

  const { setUserIsOpen, setDeleteOpen } = useAccesses()

  useEffect(() => {
    Modal.setAppElement(document.body);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => { setIsOpen(false) }}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      className="relative w-full max-w-lg py-4 bg-white rounded-[20px] shadow-lg outline-none"
    >
      <div>
        <div className="w-full flex items-center justify-between border-b border-border pb-3 px-4">
          <h2 className="text-lg font-medium">Ações</h2>
          <Image
            className="cursor-pointer"
            src={"images/Global/xClose.svg"}
            alt="Botão de fechar modal"
            width={13}
            height={13}
            onClick={() => { setIsOpen(false) }}
          />
        </div>
        <div className="w-full h-[200px]">
          <div
            className="w-full h-16 border-b border-border flex items-center justify-center cursor-pointer"
            onClick={() => {
              setIsOpen(false);
              setUserIsOpen(true)
            }}
          >
            <h2 className="text-lg font-medium">Editar acesso</h2>
          </div>
          <div
            className="w-full h-16 border-b border-border flex items-center justify-center cursor-pointer"
            onClick={() => {
              setIsOpen(false);
              setDeleteOpen(true)
            }}>
            <h2 className="text-lg font-medium text-red5">Excluir acesso</h2>
          </div>
        </div>
      </div>
    </Modal>
  )
}
export default ActionsModal
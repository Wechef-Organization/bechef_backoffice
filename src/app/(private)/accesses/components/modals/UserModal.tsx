"use client"

import Button from "@/components/Button";
import InputChips from "@/components/InputChips";
import InputPassword from "@/components/InputPassword";
import InputText from "@/components/InputText";
import { useAccesses } from "@/context/AccessesContext";
import { addUser, editUser } from "@/utils/accesses/adms";
import Image from "next/image";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import ImageInput from "../ImageInput";


const UserModal: FC<ModalProps> = ({ isOpen, setIsOpen }) => {

  const { userSelected, setUserSelected, setUsersList, usersList } = useAccesses()

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<{
    image: string;
    name: string;
    email: string;
    password: string;
    permissions: string[];
  }>({
    defaultValues: {
      image: "",
      name: "",
      email: "",
      password: "",
      permissions: [],
    }
  });

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  useEffect(() => {
    if (userSelected) {
      reset({
        image: userSelected.image || "",
        name: userSelected.name || "",
        email: userSelected.email || "",
        password: userSelected.password || "",
        permissions: userSelected.permissions ? userSelected.permissions.split(',') : [],
      });
    }
  }, [userSelected, reset]);

  const onClose = () => {
    setUserSelected(undefined)
    reset({
      image: "",
      name: "",
      email: "",
      password: "",
      permissions: []
    });
    setIsOpen(false)
  }

  const onSubmit = (data: { image: string; name: string; email: string; password: string; permissions: string[] }) => {
    const formattedData = {
      ...data,
      permissions: data.permissions.join(","),
    };

    if (userSelected) {
      editUser({ setUsers: setUsersList, list: usersList, id: userSelected.id, updatedUser: formattedData });
    } else {
      addUser({ setUsers: setUsersList, list: usersList, newUser: formattedData });
    }
    onClose();
  };

  useEffect(() => {
    Modal.setAppElement(document.body);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      className="relative w-full max-w-[50%] py-4 bg-white rounded-[20px] shadow-lg outline-none"
    >
      <div className="w-full flex items-center justify-between border-b border-border pb-3 px-4">
        <div className="flex gap-5">
          <Image
            className="cursor-pointer"
            src={"images/Global/xClose.svg"}
            alt="Botão de fechar modal"
            width={13}
            height={13}
            onClick={onClose}
          />
          <h2 className="text-lg font-medium">{userSelected ? "Editar" : "Criar"} usuário</h2>
        </div>
        <Button
          name={userSelected ? "Editar" : "Criar"}
          className="w-[82px] h-12"
          textColor="text-white"
          backgroundColor="bg-primarycolor"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
      <div className="w-full flex flex-col items-center gap-5 p-5">
        <ImageInput
          name="image"
          control={control}
          rules={{
            required: "Campo obrigatório!",
          }}
          error={errors.image}
        />
        <div className="w-full flex items-center justify-between">
          <InputText
            width="w-[48%]"
            label="Nome do usuário"
            name="name"
            control={control}
            placeHolder="Insira o nome"
            rules={{
              required: "Campo obrigatório!",
            }}
            error={errors.name}
          />
          <InputText
            width="w-[48%]"
            label="E-mail"
            name="email"
            control={control}
            placeHolder="Insira seu e-mail"
            rules={{
              required: "Campo obrigatório!",
              pattern: {
                value: regexEmail,
                message: "E-mail inválido!",
              },
            }}
            error={errors.email}
          />
        </div>
        <div className="w-full flex items-start justify-between">
          <InputPassword
            width="w-[48%]"
            label="Senha"
            name="password"
            control={control}
            placeHolder="Insira sua senha"
            rules={{
              required: "Campo obrigatório!",
              minLength: {
                value: 8,
                message: "Mínimo 8 caracteres!",
              },
            }}
            error={errors.password}
          />
          <InputChips
            width="w-[48%]"
            label="Permissão"
            name="permissions"
            control={control}
            placeHolder="Insira as permissões"
            rules={{
              required: "Campo obrigatório!",
            }}
            error={errors.permissions}
          />
        </div>
      </div>
    </Modal>
  )
}
export default UserModal
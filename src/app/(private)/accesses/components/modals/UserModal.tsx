"use client"

import Button from "@/components/Button";
import MultiSelect from "@/components/MultiSelect";
import InputPassword from "@/components/InputPassword";
import InputText from "@/components/InputText";
import { useAccesses } from "@/context/AccessesContext";
import { addUser, editUser, getAllPermissions } from "@/utils/accesses/adms";
import Image from "next/image";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import ImageInput from "../ImageInput";
import { permissionsAdm } from "@/interfaces/accesses";


interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fetchData: () => Promise<void>
}

const UserModal: FC<ModalProps> = ({ isOpen, setIsOpen, fetchData }) => {

  const { userSelected, setUserSelected, setUsersList, usersList, permissionsOptions, setPermissionsOptions } = useAccesses()

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<{
    profile_photo: string;
    name: string;
    email: string;
    password: string;
    permissions: permissionsAdm[];
  }>({
    defaultValues: {
      profile_photo: "",
      name: "",
      email: "",
      password: "",
      permissions: [],
    }
  });

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  useEffect(() => {

    if (userSelected) {
      const permissions = userSelected.userpermissionsadm.map((elm) =>
        elm.permissionsAdm
      )
      reset({
        profile_photo: userSelected.profile_photo || "",
        name: userSelected.name || "",
        email: userSelected.email || "",
        permissions: permissions || [],
      });
    }
  }, [userSelected, reset]);

  const onClose = () => {
    setUserSelected(undefined)
    reset({
      profile_photo: "",
      name: "",
      email: "",
      password: "",
      permissions: []
    });
    setIsOpen(false)
  }

  const onSubmit = (data: { profile_photo: string; name: string; email: string; password: string; permissions: permissionsAdm[] }) => {


    if (userSelected) {
      editUser({ fetchData, newUser: data, id: userSelected.id });
    } else {
      addUser({ fetchData, newUser: data });
    }
    onClose();
  };

  const getPermissions = async () => {
    await getAllPermissions({ setPermissionsOptions })
  }

  useEffect(() => {
    Modal.setAppElement(document.body);
    getPermissions()
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
          name="profile_photo"
          control={control}
          error={errors.profile_photo}
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
          {userSelected ?
            <InputPassword
              width="w-[48%]"
              label="Senha"
              name="password"
              control={control}
              placeHolder="Insira sua senha"
              rules={{
                minLength: {
                  value: 8,
                  message: "Mínimo 8 caracteres!",
                },
              }}
              error={errors.password}
            /> :
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
            />}
          <MultiSelect
            width="w-[48%]"
            label="Permissão"
            name="permissions"
            control={control}
            placeHolder="Insira as permissões"
            rules={{
              required: "Campo obrigatório!",
            }}
            // error={errors.permissions}
            options={permissionsOptions}
          />
        </div>
      </div>
    </Modal>
  )
}
export default UserModal
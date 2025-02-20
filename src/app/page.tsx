"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";

import InputText from "@/components/InputText";
import InputPassword from "@/components/InputPassword";
import Button from "@/components/Button";
import LoginForm from "@/interfaces/login";

const Login = () => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const postLogin = (data: LoginForm) => {
    console.log("Dados enviados:", data);
    router.push("/dashboard");
  };

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[418px]">
        <div className=" w-full flex justify-start items-center">
          <Image
            src={"/sidebarLogo.svg"}
            alt="Sidebar logo"
            width={177}
            height={60}
          />
        </div>
        <h1 className="font-mediumc my-[40px] text-primarycolor text-2xl">
          Dados de acesso
        </h1>

        <form
          onSubmit={handleSubmit(postLogin)}
          className="flex flex-col items-center w-full gap-5"
        >
          <InputText
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

          <InputPassword
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

          <div className="w-full pt-[10px]">
            <Button
              name="Entrar"
              className="w-full h-12"
              textColor="text-white"
              backgroundColor="bg-primarycolor"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>

  );
};

export default Login;
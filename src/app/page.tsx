"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import secureLocalStorage from "react-secure-storage";

import Button from "@/components/Button";
import InputPassword from "@/components/InputPassword";
import InputText from "@/components/InputText";
import LoginForm from "@/interfaces/login";
import { useEffect, useState } from "react";
import { sendToast } from "@/utils/toasts";
import { autoLogin } from "../../services/autoLogin";
import { login } from "../../services/login";
import { LottieAnimations } from "@/components/LottieAnimations";

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

  const [isLoading, setIsLoading] = useState(false);

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const token = secureLocalStorage.getItem('@ADMINTOKEN');

  const postLogin = async (data: LoginForm) => {
    const { email, password } = data

    await login({ email, password, setIsLoading })
  };

  const handleAutoLogin = async () => {
    try {
      setIsLoading(true);
      const { permissions } = await autoLogin();
      if (permissions.length < 1) {
        sendToast('error', 'Seu usuário não tem permissão para acessar a plataforma.');
      } else {
        router.push(`/${permissions[0].permission_name}`)
      }
    } catch (error) {
      console.error('Erro ao fazer login automático:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) handleAutoLogin();
    else setIsLoading(false);
  }, [token]);

  if (isLoading) return <LottieAnimations className="h-[100vh] w-full flex items-center justify-center" type="loading" />;

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[418px]">
        <div className=" w-full flex justify-start items-center">
          <Image
            src={"/logo.svg"}
            alt="Logo Bechef"
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
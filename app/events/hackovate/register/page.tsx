"use client";

import LongFooter from "@/components/LongFooter";
import NavBar from "@/components/NavBar";
import RegisterForm from "@/components/RegisterForm";
import React from "react";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
const RegisterPage = () => {

  //redirect home
  const router = useRouter();
  useEffect(() => {
    router.push("/events/register");
  }, []);
  return (
    <>
      <NavBar />
      <RegisterForm />
      <LongFooter />
    </>
  );
};

export default RegisterPage;

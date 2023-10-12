"use client";

import Footer from "@/components/Footer";
import LongFooter from "@/components/LongFooter";
import NavBar from "@/components/NavBar";
import RegisterForm from "@/components/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <>
      <NavBar />
      <RegisterForm />
      <LongFooter />
    </>
  );
};

export default RegisterPage;

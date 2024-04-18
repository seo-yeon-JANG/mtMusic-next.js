"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "./IconButton";

const Logo = () => {
  const { push } = useRouter();
  const onClickLog = () => {
    push("/");
  };
  const onClickMenu = () => {};
  return (
    <section className="flex flex-row items-center gap-3">
      <IconButton
        icon={<RxHamburgerMenu size={24} />}
        onClickIcon={onClickMenu}
      />
      <div className="cursor-pointer" onClick={onClickLog}>
        <Image alt="logo" src={"/main-logo.svg"} width={100} height={30} />
      </div>
    </section>
  );
};

export default Logo;

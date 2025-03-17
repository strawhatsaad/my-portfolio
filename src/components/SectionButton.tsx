"use client";

import React, { ReactNode } from "react";
import CustomButton from "./CustomButton";

const SectionButton = ({
  title,
  icon,
  id,
  href,
  iconImage,
  containerStyles,
}: {
  title: string;
  icon?: string;
  iconImage?: ReactNode;
  id?: string;
  href?: string;
  containerStyles?: string;
}) => {
  const handleScroll = (id: string) => {
    const nextSection = document.getElementById(id);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <CustomButton
        title={title}
        href={href}
        icon={icon}
        iconImage={iconImage}
        containerStyles={containerStyles}
        handleClick={(e) => handleScroll(`${id}`)}
      />
    </div>
  );
};

export default SectionButton;

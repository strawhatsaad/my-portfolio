"use client";

import React, { MouseEventHandler, ReactNode } from "react";

export interface CustomButtonProps {
  title: string;
  href?: string;
  icon?: string;
  iconImage?: ReactNode;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

const CustomButton = ({
  title,
  icon,
  href,
  iconImage,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <>
      {href ? (
        <a href={href}>
          <button
            disabled={false}
            type={btnType || "button"}
            className={containerStyles}
          >
            {icon && <span className="text-2xl">{icon}</span>}
            {title}
            {iconImage && <span>{iconImage}</span>}
          </button>
        </a>
      ) : (
        <button
          disabled={false}
          type={btnType || "button"}
          className={containerStyles}
          onClick={handleClick}
        >
          {icon && <span className="text-2xl">{icon}</span>}
          {title}
          {iconImage && <span>{iconImage}</span>}
        </button>
      )}
    </>
  );
};

export default CustomButton;

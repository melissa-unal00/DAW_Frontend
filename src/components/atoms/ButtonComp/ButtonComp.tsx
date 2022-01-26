import React from "react";
import { Button } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import "./ButtonComp.scss";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: any;
  variant?: "text" | "outlined" | "contained";
  type?: "button" | "submit" | "reset" | undefined;
  icon?: boolean;
}

const ButtonComp = ({
  children,
  className,
  onClick,
  variant,
  type,
  icon,
}: Props) => {
  return (
    <div>
      <StylesProvider injectFirst>
        <Button
          onClick={onClick}
          className={
            className
              ? className + " " + "MuiButton-contained"
              : "MuiButton-contained"
          }
          variant={variant}
          type={type}
        >
          {icon ? icon : children}
        </Button>
      </StylesProvider>
    </div>
  );
};

export default ButtonComp;

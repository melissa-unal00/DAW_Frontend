import React, { ReactNode } from "react";
import { TextField, MenuItem } from "@material-ui/core";
type Props = {
  children?: ReactNode;
  className?: string;
  value?: string;
  variant: "standard" | "filled" | "outlined" | undefined;
  label: string;
  onChange?: any;
  type?: string;
  select?: boolean;
  required?: boolean;
};
const genders = ["Male", "Female", "Other"];
const categories = ["All", "Eyes", "Skin", "Lips"];

const generateYears = () => {
  let years = [];
  let currentYear = new Date().getFullYear();
  for (let i = currentYear - 100; i < currentYear; i++) {
    years.push(i);
  }
  return years;
};
const years: number[] = generateYears();

const generateMonths = () => {
  let months = [];
  for (let i = 0; i < 12; i++) {
    months.push(i + 1);
  }
  months.toString();
  for (let i = 0; i < 9; i++) {
    months[i] = "0" + months[i];
  }
  return months;
};
const months: (string | number)[] = generateMonths();

const generateDays = () => {
  let days = [];
  for (let i = 0; i < 31; i++) {
    days.push(i + 1);
  }
  days.toString();
  for (let i = 0; i < 9; i++) {
    days[i] = "0" + days[i];
  }
  return days;
};

const days: (string | number)[] = generateDays();

const FormField = ({
  className,
  value,
  variant,
  label,
  onChange,
  type,
  select,
  required,
}: Props) => {
  return (
    <TextField
      className={className}
      type={type}
      value={value}
      variant={variant}
      label={label}
      onChange={onChange}
      select={select}
      required={required}
    >
      {select && label === "Gender"
        ? genders.map((option: any) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))
        : null}
      {select && label === "Day"
        ? days.map((option: any) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))
        : null}
      {select && label === "Month"
        ? months.map((option: any) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))
        : null}
      {select && label === "Year"
        ? years.map((option: any) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))
        : null}

      {select && label === "Category"
        ? categories.map((option: any) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))
        : null}
    </TextField>
  );
};

export default FormField;

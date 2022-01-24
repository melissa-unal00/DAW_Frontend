import React, { ReactNode } from "react";
import { TextField, MenuItem } from "@material-ui/core";
import data from "../../../assets/translations/translations.json";

type Props = {
  children?: ReactNode;
  className?: string;
  value?: string;
  variant: "standard" | "filled" | "outlined" | undefined;
  label?: string;
  onChange?: any;
  type?: string;
  select?: boolean;
  required?: boolean;
};
const genders = ["Male", "Female", "Other"];
//const categories = ["All", "Eyes", "Skin", "Lips"];
const categoriesEN = [data.en.all, data.en.eyes, data.en.skin, data.en.lips];
const categoriesRO = [data.ro.all, data.ro.eyes, data.ro.skin, data.ro.lips];

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
      {(select && label === data.ro.gender) ||
      (select && label === data.en.gender)
        ? genders.map((option: any) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))
        : null}
      {(select && label === data.ro.day) || (select && label === data.en.day)
        ? days.map((option: any) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))
        : null}
      {(select && label === data.ro.month) ||
      (select && label === data.en.month)
        ? months.map((option: any) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))
        : null}
      {(select && label === data.ro.year) || (select && label === data.en.year)
        ? years.map((option: any) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))
        : null}

      {select && label == data.en.category
        ? categoriesEN.map((option: any) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))
        : categoriesRO.map((option: any) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
    </TextField>
  );
};

export default FormField;

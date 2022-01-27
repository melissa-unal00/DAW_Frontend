import React, { useContext, useState } from "react";
// import "../../atoms/Button/Button.scss";
// import "../Signup/Signup.scss";
import { FormField, ButtonComp, NavbarComp, Header, Footer } from "../../index";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Signup.scss";
import { TranslationsContext } from "../../../context/TranslationsContext";
import data from "../../../assets/translations/translations.json";

const Signup = () => {
  let translationsContextData = useContext(TranslationsContext);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [year, setYear] = useState(`${new Date().getFullYear() - 100}`);
  const [month, setMonth] = useState("01");
  const [day, setDay] = useState("01");
  const [birthday, setBirthday] = useState(`${year}-${month}-${day}`);

  const history = useHistory();

  const handleDay = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDay(e.target.value);
    setBirthday(`${year}-${month}-${e.target.value}`);
  };

  const handleMonth = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMonth(e.target.value);
    setBirthday(`${year}-${e.target.value}-${day}`);
  };

  const handleYear = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setYear(e.target.value);
    setBirthday(`${e.target.value}-${month}-${day}`);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const user = {
      lastName,
      firstName,
      username,
      email,
      password,
      birthday,
      gender,
    };

    await axios
      .post("https://localhost:44336/api/User/createUser", user)
      .then(() => {
        console.log("Ok");
        routeChange(e);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const routeChange = (e: any) => {
    e.preventDefault();
    let path = `login`;
    history.push(path);
  };

  return (
    <div className="signin__form--styling">
      {translationsContextData.isTextChanged ? (
        <form
          onSubmit={handleSubmit}
          className="formfield"
          action="https://localhost:44336/api/User/createUser"
          method="POST"
        >
          <div className="signup__margin">
            <FormField
              variant="standard"
              label={data.ro.firstname}
              type="text"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="signup__margin">
            <FormField
              variant="standard"
              label={data.ro.lastname}
              type="text"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="signup__margin">
            <FormField
              variant="standard"
              label="Email"
              type="text"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signup__margin">
            <FormField
              variant="standard"
              label={data.ro.username}
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signup__margin">
            <FormField
              variant="standard"
              label={data.ro.password}
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signup__margin">
            <FormField
              className="signup__width"
              variant="standard"
              label={data.ro.gender}
              type="text"
              select
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <FormField
            className="signup__width signup__margin"
            variant="standard"
            label={data.ro.day}
            type="text"
            select
            required
            value={day}
            onChange={handleDay}
          />
          <FormField
            className="signup__width signup__margin"
            variant="standard"
            label={data.ro.month}
            type="text"
            select
            required
            value={month}
            onChange={handleMonth}
          />
          <FormField
            className="signup__width signup__margin"
            variant="standard"
            label={data.ro.year}
            type="text"
            select
            required
            value={year}
            onChange={handleYear}
          />
          <br />
          <br />

          <div className="signup__margin">
            <ButtonComp type="submit" variant="contained">
              {data.ro.submit}
            </ButtonComp>
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="formfield"
          action="https://localhost:44336/api/User/createUser"
          method="POST"
        >
          <div className="signup__margin">
            <FormField
              variant="standard"
              label="First Name"
              type="text"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="signup__margin">
            <FormField
              variant="standard"
              label="Last Name"
              type="text"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="signup__margin">
            <FormField
              variant="standard"
              label="Email"
              type="text"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signup__margin">
            <FormField
              variant="standard"
              label="Username"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signup__margin">
            <FormField
              variant="standard"
              label="Password"
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signup__margin">
            <FormField
              className="signup__width"
              variant="standard"
              label="Gender"
              type="text"
              select
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <FormField
            className="signup__width signup__margin"
            variant="standard"
            label="Day"
            type="text"
            select
            required
            value={day}
            onChange={handleDay}
          />
          <FormField
            className="signup__width signup__margin"
            variant="standard"
            label="Month"
            type="text"
            select
            required
            value={month}
            onChange={handleMonth}
          />
          <FormField
            className="signup__width signup__margin"
            variant="standard"
            label="Year"
            type="text"
            select
            required
            value={year}
            onChange={handleYear}
          />
          <br />
          <br />
          <div className="signup__margin">
            <ButtonComp type="submit" variant="contained">
              {data.en.submit}
            </ButtonComp>
          </div>
        </form>
      )}
    </div>
  );
};

export default Signup;

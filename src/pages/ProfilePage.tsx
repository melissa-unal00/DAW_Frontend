import { StylesProvider } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  Header,
  NavbarComp,
  Footer,
  Image,
  FormField,
  ButtonComp,
} from "../components/index";
import { UserContext } from "../context/UserContext";
import "./ProfilePage.scss";

const ProfilePage = () => {
  let userContextData = useContext(UserContext);
  let { userId } = userContextData;
  console.log("User id: ", userId);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const [userData, setUserData] = useState<any>();

  const fetchUserData = (userId: any) => {
    axios
      .get(`https://localhost:44336/api/User/byId?Id=${userId}`)
      .then((res: any) => {
        setUserData(res.data);
        console.log(userData);
      });
  };

  useEffect(() => {
    fetchUserData(userId);
  }, []);

  // useEffect(() => {
  //   const fetchData = () => {
  //     axios
  //       .get(`http://localhost:3001/api/users/profile/${id}`)
  //       .then((res) => console.log(res.data));
  //   };
  //   fetchData();
  // }, []);
  return (
    <div>
      <Header />
      <NavbarComp />

      <div className="profile-page--styling">
        <div className="profile-page--flex-parent profile-page--center">
          <div className="profile-page__field-name profile-page--flex-child">
            <div className="profile-page__image">
              <Image
                className="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE26NjQaonqTRt7BXD_87Iuukitk_kcGBv3w&usqp=CAU"
                alt="Mock image"
              ></Image>
            </div>
            <div className="profile-page--flex-child">
              <br />
              <div className="height">Last Name</div>
              <br />
              <div className="height">First Name</div>
              <br />
              <div className="height">Email</div>
              <br />
              <div className="height">Username</div>
              <br />
              <div className="height">Gender</div>
              <br />
              <div className="height">Birthday</div>

              {/* <p className="profile-page__labels">Birthday</p> */}
            </div>
          </div>

          <div className="profile-page__field-box profile-page--flex-child">
            <div className="profile-page__image">
              <Image
                className="image-none"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE26NjQaonqTRt7BXD_87Iuukitk_kcGBv3w&usqp=CAU"
                alt="Mock image"
              ></Image>
            </div>
            <StylesProvider injectFirst>
              <br />
              <div>
                <FormField
                  variant="standard"
                  type="text"
                  value={userData && userData.lastName}
                  required
                ></FormField>
              </div>
              <br />
              <div>
                <FormField
                  variant="standard"
                  type="text"
                  value={userData && userData.firstName}
                  required
                ></FormField>
              </div>
              <br />
              <div>
                <FormField
                  variant="standard"
                  type="text"
                  value={userData && userData.email}
                  required
                ></FormField>
              </div>
              <br />
              <div>
                <FormField
                  variant="standard"
                  type="text"
                  value={userData && userData.username}
                  required
                ></FormField>
              </div>
              <br />
              <div>
                <FormField
                  variant="standard"
                  type="text"
                  value={userData && userData.gender}
                  required
                ></FormField>
              </div>
              <br />
              <div>
                <FormField
                  variant="standard"
                  type="text"
                  value={userData && userData.birthday.slice(0, 10)}
                  required
                ></FormField>
              </div>
            </StylesProvider>
          </div>
        </div>
        <div className="profile-page__button">
          <br />
          <br />
          <ButtonComp className="test">Update Data</ButtonComp>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;

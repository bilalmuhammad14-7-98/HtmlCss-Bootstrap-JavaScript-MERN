import { useParams } from "react-router-dom";
import { getUsers } from "../../config/firebase";
import { useEffect, useState } from "react";
import { updateUserData } from "../../config/firebase";
import "./index.css";

function UpdateUser() {
  const [userId, setUserId] = useState();
  const [username, setUserName] = useState("");
  const [dob, setDob] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");

  let { id } = useParams();
  console.log("Userid-------------", id);

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const userData = await getUsers();
    const user = userData.find((user) => user.email === id);

    console.log(user, "found uers-------");
    setUserId(user?.id);
    setCurrentUser(user);
    setUserName(user?.username);
    setEmail(user?.email);
    setDob(user?.dob);
    setPhoneNo(user?.phoneNo ? user?.phoneNo : "");
    setAddress(user?.address ? user?.address : "");
    return user || null; // Return null if no user is found
  };

  const updateUser = async () => {
    console.log(username, email, dob, phoneNo, address, userId);

    // return;
    const res = await updateUserData({
      username,
      email,
      dob,
      phoneNo,
      address,
      userId,
    });
    console.log(res, "updated user");
  };

  return (
    <>
      <h3 className="post-ad-heading mt-5">Update Profile</h3>
      <div class="post-ad-container">
        <h3 className="post-ad-heading-add-details mb-5">USER DETAILS</h3>

        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                {/* <label for="exampleFormControlInput1" class="form-label">
                Title
              </label> */}
                <h5 className="input-field-labels">Username</h5>
                <input
                  type="email"
                  class="form-control input-field"
                  id="exampleFormControlInput1"
                  placeholder="Please Enter Username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
                {/* <div id="passwordHelpBlock" class="form-text">
                  Mention the key features of your item (e.g. brand, model, age,
                  type)
                </div> */}
              </div>
            </div>

            <div class="col-md-6">
              <div class="mb-3">
                {/* <label for="exampleFormControlTextarea1" class="form-label">
              Description
            </label> */}
                <h5 className="input-field-labels">Email</h5>
                <input
                  type="email"
                  class="form-control input-field"
                  id="exampleFormControlInput1"
                  placeholder="Please Enter Email"
                  readOnly
                  //   value="rizwan@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* <div id="passwordHelpBlock" class="form-text">
                  Include condition, features and reason for selling
                </div> */}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                {/* <label for="exampleFormControlInput1" class="form-label">
                Title
              </label> */}
                <h5 className="input-field-labels">Date of Birth</h5>
                <input
                  type="date"
                  class="form-control input-field"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
                {/* <div id="passwordHelpBlock" class="form-text">
                  Please enter the price of the product you wish to sell
                </div> */}
              </div>
            </div>

            <div class="col-md-6">
              <div class="mb-3">
                {/* <label for="exampleFormControlInput1" class="form-label">
                Title
              </label> */}
                <h5 className="input-field-labels">Phone Number</h5>
                <input
                  type="text"
                  class="form-control input-field"
                  id="exampleFormControlInput1"
                  placeholder="Please Enter Phone Number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
                {/* <div id="passwordHelpBlock" class="form-text">
                  Mention the key features of your item (e.g. brand, model, age,
                  type)
                </div> */}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="mb-3">
              {/* <label for="exampleFormControlTextarea1" class="form-label">
              Description
            </label> */}
              <h5 className="input-field-labels">Address</h5>
              <input
                type="email"
                class="form-control input-field"
                id="exampleFormControlInput1"
                placeholder="Please Enter Username"
                // readOnly
                // value="rizwan@gmail.com"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {/* <div id="passwordHelpBlock" class="form-text">
                Include condition, features and reason for selling
              </div> */}
            </div>
          </div>

          <div class="row">
            <button
              type="button"
              class="btn btn-primary btn-lg post-btn"
              //   onClick={handlePostAdd}
              onClick={updateUser}
            >
              <span class="post-btn-text"> UPDATE</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateUser;

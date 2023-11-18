import React, { useState } from "react";
import Card from "../Contents/Card";
import axios from "axios";
import SearchBar from "../Contents/SearchBar";

const UserDetail = () => {
  const [datas, setData] = useState([]);

  async function fetchData() {
    try {
       await axios.get(
        "http://localhost:3400/api/v1/user/all-users"
      ).then(res=>setData(res.data.users))
      
    } catch (err) {
      console.log("Error in fetching Data", err);
    }
  }

  useState(() => {
    fetchData();
  }, []);
  return (
    <div className="user-top">
      <br></br>
      <SearchBar/>
      <h1>User-Details</h1>
      <h3>Below are list of all the details of Users</h3>
      <div className="card-ext">
        <div className="card-int">
          {datas.map((el)=>{
            return(
                <div>
                <p><Card
                key={el._id}
                username={el.username}
                email={el.email}
                password={el.password}
              /></p>
              </div>
          )
          }   
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
//<Card/>

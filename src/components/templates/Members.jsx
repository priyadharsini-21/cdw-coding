import React from "react";
import { Card, Typography, Grid } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Members() {
  const [users, setUsers] = useState([]);
  const searchValue = useSelector((state) => state.searchedWord);

  const fetchUserData = () => {
    axios
      .get("https://dummyjson.com/users?limit=12")
      .then(function (response) {
        console.log(response.data.users);
        setUsers(response.data.users);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  const fetchMemberBasedOnSearch = (searchValue) => {
    axios
      .get(`https://dummyjson.com/users/search?q=${searchValue}`)
      .then(function (response) {
        setUsers(response.data.users);
        console.log(response.data.users);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (searchValue) {
      fetchMemberBasedOnSearch(searchValue);
    }
  }, [searchValue]);

  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        style={{ margin: 10, color: "grey", fontFamily: "Poppins" }}
      >
        Members
      </Typography>
      <div style={{ flexGrow: 1 }}>
        <Grid container justifyContent="left" spacing={2}>
          {users.map((obj) => (
            <Grid item>
              <Card style={{ minWidth: 400, margin: 10 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500], width: 56, height: 56 }}
                      aria-label="recipe"
                      src={obj.image}
                    ></Avatar>
                  }
                  title={obj.firstName + obj.lastName}
                  subheader={obj.email}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

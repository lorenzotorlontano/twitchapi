import React, { useEffect, useState } from "react";
import { searchCategories, searchChannels } from "../../Service/Api/Api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotificationsIcon from "@material-ui/icons/Notifications";

function DetailsSearched() {
  const [categories, setCategories] = useState();
  const [channels, setChannels] = useState();

  const { id } = useParams();

  console.log("im coming youuu ", id);

  useEffect(() => {
    const resp = searchCategories(id).then((re) => {
      setCategories(re.data.data);
      console.log("mamm said that is okey", re.data.data);
    });
  }, []);

  useEffect(() => {
    const res = searchChannels(id).then((re) => {
      setChannels(re.data.data);
      console.log("say something im giving up on you", re.data.data);
    });
  }, []);

  return (
    <Grid
      container
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        backgroundColor: "#0E0E10",
        color: "white",
      }}
    >
      <div style={{ padding: "30px", fontSize: "18px", fontWeight: "bold" }}>
        Canali
      </div>
      <span
        style={{
          height: "1px",
          marginRight: "30px",
          marginLeft: "30px",
          width: "100%",
          backgroundColor: "white",
        }}
      ></span>
      {channels &&
        channels.map((val, index) => {
          return (
            <Grid
              style={{
                display: "flex",
                backgroundColor: "#0E0E10",
                paddingTop: "20px",
              }}
              item
              md={12}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                item
                md={3}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    width: "120px",
                    height: "120px",
                  }}
                  src={val.thumbnail_url}
                />
              </Grid>
              <Grid style={{ marginTop: "20px" }} item md={4}>
                <div
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {val.display_name}
                  </span>
                  <div style={{ display: "flex" }}>
                    <Button
                      style={{
                        backgroundColor: "#464649",
                        marginRight: "10px",
                        width: "25px",
                        height: "30px",
                        color: 'white'
                      }}
                    >
                      {" "}
                      <FavoriteIcon />{" "}
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "#464649",
                        marginRight: "10px",
                        width: "25px",
                        height: "30px",
                        color: 'white'
                      }}
                    >
                      {" "}
                      <NotificationsIcon />{" "}
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          );
        })}

      <div
        style={{
          backgroundColor: "#0E0E10",
          width: "100%",
          padding: "30px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Categorie
      </div>
      {categories &&
        categories.map((val, index) => {
          return (
            <Grid
              style={{
                display: "flex",
                backgroundColor: "#0E0E10",
                paddingTop: "20px",
              }}
              item
              md={12}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                item
                md={3}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    width: "120px",
                    height: "120px",
                  }}
                  src={val.box_art_url}
                />
              </Grid>

              <Grid style={{ marginTop: "30px" }} item md={9}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {val.name}
                </span>
              </Grid>
            </Grid>
          );
        })}
    </Grid>
  );
}

export default DetailsSearched;

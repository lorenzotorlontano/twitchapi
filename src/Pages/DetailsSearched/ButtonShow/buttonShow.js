import React from 'react'
import Grid from "@material-ui/core/Grid";

function ButtonShow({ showMore}) {
    return (
        <>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              alignSelf: "center",
            }}
          >
            <Grid
              item
              md={4}
              style={{
                backgroundColor: "white",
                height: "1px",
                alignSelf: "center",
              }}
            ></Grid>
            <Grid
              style={{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
              }}
              item
              md={2}
            >
              <button className="showMore" onClick={() => showMore()}>
                mostra di più
              </button>
            </Grid>
            <Grid
              md={4}
              style={{
                backgroundColor: "white",
                height: "1px",
                alignSelf: "center",
              }}
              item
            ></Grid>
          </Grid>   
        </>
    )
}

export default ButtonShow

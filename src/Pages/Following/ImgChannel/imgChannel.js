import React, { useState, useEffect } from "react";
import useGetUser from "../../../Hooks/useGetUser";

function ImgChannel({ id }) {
  const { data: usersDetails } = useGetUser(id);
  // const [usersDetails, setUsersDetails] = useState();

  return (
    <div>
      <img
        style={{ width: `30px`, height: `30px` }}
        src={usersDetails && usersDetails.data[0]?.profile_image_url}
      />
    </div>
  );
}

export default ImgChannel;

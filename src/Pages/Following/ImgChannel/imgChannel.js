import React, { useState, useEffect } from "react";
import {
  getCurrentUserFollows,
  getStreamsById,
  getChannel,
  getUsers,
} from "../../../Service/Api/Api";

function ImgChannel({ id }) {
  const [usersDetails, setUsersDetails] = useState();

  useEffect(() => {
    const res = getUsers(id).then((re) => {
      setUsersDetails(re.data.data[0]);
    });
  }, []);

  return (
    <div>
      <img
        style={{ width: `30px`, height: `30px` }}
        src={usersDetails && usersDetails.profile_image_url}
      />
    </div>
  );
}

export default ImgChannel;

import React, { useEffect, useState } from "react";
import { getGames } from "../../Service/Api/Api";

function Home() {
  const [games, setGames] = useState();

  useEffect(() => {
    const resp = getGames().then((re) => {
      setGames(re.data.data);
      console.log('dbfbdsfh',re.data.data)
    });
  }, []);
  

  return (
    <div>
      <p>ciao</p>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { getGames } from "../../Service/Api/Api";
import HomeCarousel from '../../Components/HomeCarousel'

function Home() {
  const [games, setGames] = useState();

  useEffect(() => {
    const resp = getGames().then((re) => {
      setGames(re.data.data);
    });
  }, []);

  return (
    <><div>
      <HomeCarousel />
    </div>
      <div style={{}}>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
        aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
        accumsan lacus vel facilisis
    </div>
    </>
  );
}

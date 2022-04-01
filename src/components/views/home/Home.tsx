import React, { useEffect } from "react"
import Banner from "./banner/Banner"
import Blogs from "./blogs/Blogs"
import Contact from "./contact/Contact"
import Services from "./services/Services"
import Team from "./team/Team"
import History from "./history/History"

import * as Styled from './Home.style'

function Home() {

    useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

    return (
        <Styled.ContainerWrap>
          <Banner/>
          <Services />
          <History />
          {/* <Clients /> */}
          <Team />
          <Blogs />
          <Contact />
      </Styled.ContainerWrap>
    )
}

export default Home
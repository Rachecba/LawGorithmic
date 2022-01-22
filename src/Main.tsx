import React from "react"
import { Route, Routes } from "react-router-dom"
import BlogDetail from "./components/views/blogDetail/BlogDetail"
import News from "./components/views/blogs/News"
import Home from "./components/views/home/Home"


function Main() {

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/us" component={WhoWeAre} /> */}
            {/* <Route path="/services" component={Products} /> */}
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<BlogDetail />} />
            {/* <Route path="/contact" component={Contact} /> */}
        </Routes>
    )
}

export default Main
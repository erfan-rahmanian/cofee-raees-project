import React from "react";
import Navbar from "./Navbar";

import Sec1 from "./body/Sec1";
import Sec2 from "./body/Sec2";
import Sec3 from "./body/Sec3";
import Sec4 from "./body/Sec4";

import Sec5 from "./body/Sec5";
import Footer from "./Footer";



function App(){
    return (
        <div>
        <Navbar />
        
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Sec5 />
     
        
        <Footer />
        
        </div>
    )
}

export default App;
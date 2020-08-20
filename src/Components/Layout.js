import React from 'react';
import {data} from "../utils/mocks/data";
import Header from "./Header";


function Layout(props) {

    return(
        <>
           <Header dataNav={data.Header} />
           {props.children}
        </>

    )
}

export default Layout
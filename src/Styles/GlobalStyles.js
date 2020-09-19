import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing:border-box;
    }
    body {
        background-color:${(props) => props.theme.bgColor};
        color:${(props) => props.theme.blackColor};
        font-size:14px;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
        padding-top: 140px;
    }
    a {
        color:${(props) => props.theme.darkBlueColor};
        text-decoration:none;
    }
    input:focus{
        border:1px solid #aaa;
        border-radius:${(props) => props.theme.borderRadius};
        outline:none;
    }
`;

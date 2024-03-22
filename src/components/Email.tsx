"use client";

import Script from "next/script"

const Email = () => {
    return (
        <>
    <Script id="constant-contact-var">
        {`var _ctct_m = "8e22d43057911946bcbe0f27b4aa6aeb";`}
    </Script>
    <Script 
        id="signupScript" 
        src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js" 
        strategy="afterInteractive"
    />
    </>
);}

export default Email;
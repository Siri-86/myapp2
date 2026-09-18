import React from 'react';
function Ex2e_StringLiteral() {

const name = "NooR";
const message = `Welcome ${name}`;

return (
<div>
<h1>String Literal Example</h1>
<h2>{message}</h2>
</div>
);
}

export default Ex2e_StringLiteral;
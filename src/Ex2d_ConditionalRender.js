import React, { useState } from 'react';
function Ex2d_ConditionalRender() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
return (
<div>
<h1>Conditional Rendering</h1>
{isLoggedIn ? (
<h2>Login Sucessfully</h2>
) : (
<h2>Click Here to Login</h2>
)}
<button onClick={() => setIsLoggedIn(!isLoggedIn)}>
Login
</button>
</div>
);
}
export default Ex2d_ConditionalRender;
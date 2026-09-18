import React from 'react';
function Ex2c_ButtonClick() {
const handleClick = () => {
alert("You have been Hacked!");
};
return (
<div>
<h1>Button Click Event</h1>
<button onClick={handleClick}>
Click Me
</button>
</div>
);
}
export default Ex2c_ButtonClick;
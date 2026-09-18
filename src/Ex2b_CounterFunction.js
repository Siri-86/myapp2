import React, { useState } from 'react';
function Ex2b_CounterFunction() {
const [count, setCount] = useState(0);
return (
<div>
<h1>Counter using Functional Component</h1>
<h2>Count: {count}</h2>
<button onClick={() => setCount(count + 1)}>
Increment
</button>
<button onClick={() => setCount(count - 1)}>
Decrement
</button>
</div>
);
}
export default Ex2b_CounterFunction;
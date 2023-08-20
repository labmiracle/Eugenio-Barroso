import React, { useState } from "react";

function ChangeAxB() {
  const [Text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const AxB = event.target.value.replace(/a/g, "b");
    setText(AxB);
  };

  return <input type="text" value={Text} onChange={handleChange} />;
}

export default ChangeAxB;

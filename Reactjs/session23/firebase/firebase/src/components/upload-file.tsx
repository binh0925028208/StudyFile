import React from "react";

const Upload = () => {
  return (
    <div>
      <input type="file" onChange={(e: any) => console.log(e.target.files)} />
      <button>vô</button>
    </div>
  );
};

export default Upload;

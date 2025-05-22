import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/chiedozieu")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setData(data);
      });
  }, []);

  return (
    <div className="bg-cyan-700 text-white text-3xl p-5 text-center">
      Github name: {data.name} followers: {data.followers} following: {data.following} 
    </div>
  );
}

export default Github;

import { useState } from "react";

const HomePage = () => {
  const [text, setText] = useState("initial state");

  return (
    <>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est atque
        sed at commodi eos blanditiis rem delectus labore! Nobis culpa eum
        pariatur porro fugit maxime voluptatibus voluptas placeat quae.
      </p>
      <input
        name="text"
        value={text}
        placeholder="Enter some text here..."
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <h3>Current input is: {text}</h3>
    </>
  );
};

export default HomePage;

// rafce в пустом jsx файле

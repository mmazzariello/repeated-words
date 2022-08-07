import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [repeatedWords, setRepeatedWords] = useState([]);

  const handleChange = (e) => {
    const words = e.target.value;
    const wordsArray = words.split(" ");
    console.log("words", words);
    console.log("wordsArray", wordsArray);

    const repeated_words = wordsArray.filter((word, index) => {
      return wordsArray.indexOf(word) !== index;
    });

    setRepeatedWords(repeated_words);

    console.log("repeated_words", repeated_words);

    setText(words);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <form style={{ height: "100px", width: "70%" }}>
        <textarea
          onChange={handleChange}
          value={text}
          placeholder="Type your text here..."
          style={{ height: "100%", width: "100%" }}
        />
      </form>
      <p>Repeat words: {repeatedWords}</p>
      <p>Cantidad de caracteres ingresados:{text.length}</p>
    </div>
  );
};

export default Home;

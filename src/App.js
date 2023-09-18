import React, { useState, useEffect } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard/ContactCard";

function App() {
  // const contacts = [
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Jenny",
  //     email: "jenny@gmail.com",
  //     age: "25",
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Paul",
  //     email: "paul@gmail.com",
  //     age: "35",
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Peter",
  //     email: "peter@gmail.com",
  //     age: "45",
  //   },
  // ];

  const [results, setResults] = useState([])

  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=5")
    .then(response=>response.json())
    .then(data=> {
      setResults(data.results)
      console.log(data)})
  }, [])


  return (
    <div>
      {results.map((result, index) => {
        return (
          <ContactCard key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
          />
        );
      })}

    </div>
  );
}

export default App;

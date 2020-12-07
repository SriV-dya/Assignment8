import React, { useState } from "react";
import "./styles.css";

var animalDictionary = {
  "🐼": "Panda: Pandas love to be loners.",
  "🦇": "Bat: Bats can find their food in total darkness.",
  "🦥": "Sloth: Sloths can be fussy eaters",
  "🦩": "Flamingo: only lay around one egg per year",
  "🐞":
    "Lady Bug: THEY LAY EXTRA EGGS AS A SNACK FOR THEIR BABIES, Lady Bugs have been in space",
  "🦟": "Mosquito: There are about 2,700 species of mosquito",
  "🦙": "Llama: Llamas are diabetic — sort of.",
  "🦂": "Scorpion: They Eat Just About Anything.",
  "🕷️": "Spider: All spiders produce silk",
  "🦗": "Cricket: Cricket's “ears” are located on their legs",
  "🐝": "Honeybee: Honey is Bee's Puke",
  "🐜": "Ant: When ants fight, it is usually to the death!",
  "🐛": "Bug: Bugs live pretty much everywhere",
  "🦋": "Butterfly: Butterflies can see red, green, and yellow.",
  "🐌": "Snail: THEY'RE RELATED TO SHELLFISH.",
  "🐙": "Octopus: They have three hearts and blue blood",
  "🦈": "Shark: Sharks do not have bones.",
  "🐠": "Fishie: Fish are vertebrate animals",
  "🐬": "Dolphin: Extremely intelligent animals",
  "🐳": "Whale: whales have flexible necks,Largest mammals",
  "🦖":
    "The Good Dino: The word dinosaur comes from the Greek language and means 'terrible lizard'",
  "🐉": "Dragon:A dragon can perhaps breathe fire(Mythical)",
  "🐢": "Turtle: Turtles aren't silent",
  "🐸": "Froggy: A group of frogs is called an army.",
  "🐒": "Monkey: Monkeys can understand written numbers and can even count.",
  "🦄": "SriV/Unicorn: Is as amazing as she is",
  "🐷": "Piggy: In their natural state, pigs are very clean animals",
  "🐘": "Elephant: Calves can stand within 20 minutes of birth"
};

var animalsWeKnow = Object.keys(animalDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function animalInputHandler(event) {
    var userInput = event.target.value;

    var meaning = animalDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function animalClickHandler(animal) {
    var meaning = animalDictionary[animal];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Animal Planet</h1>
      <h3> Gives a funfact of each animal in our database </h3>

      <input onChange={animalInputHandler} />

      <h2> {meaning} </h2>
      {}

      <h3> Animals we know </h3>
      {animalsWeKnow.map(function (animal) {
        return (
          <span
            onClick={() => animalClickHandler(animal)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={animal}
          >
            {animal}
          </span>
        );
      })}
    </div>
  );
}

import { createContext, useState } from "react";

type CharacterContextType = {
  characters: string;
  originalCharacters: string;
  hasDuplicateCharacters: boolean;
  saveCharacters: (value: string) => void;
  removeDuplicateCharacters: (char: string, index: number) => void;
};

export const CharacterContext = createContext<CharacterContextType>({
  characters: "",
  originalCharacters: "",
  hasDuplicateCharacters: true,
  saveCharacters: () => {},
  removeDuplicateCharacters: () => {},
});

const CharacterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [characters, setCharacters] = useState("");

  let originalCharacters = "";

  // Update Charactes and save copy of original characters
  const saveCharacters = (input: string) => {
    setCharacters(input);
    originalCharacters = input;
  };

  const removeDuplicateCharacters = (char: string, index: number) => {
    let result = "";
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] !== char || i === index) {
        result += characters[i];
      }
    }

    setCharacters(result);
  };

  const hasDuplicateCharacters = characters.length !== new Set(characters).size;

  const contextValue: CharacterContextType = {
    characters,
    originalCharacters,
    hasDuplicateCharacters,
    saveCharacters,
    removeDuplicateCharacters,
  };

  return (
    <CharacterContext.Provider value={contextValue}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;

import { createContext, useState } from "react";

type CharacterContextType = {
  characters: string;
  hasDuplicateCharacters: boolean;
  saveCharacters: (value: string) => void;
  removeDuplicateCharacters: (char: string, index: number) => void;
};

export const CharacterContext = createContext<CharacterContextType>({
  characters: "",
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

  let originalCharacters;

  // Update Charactes and save copy of original characters
  const saveCharacters = (input: string) => {
    setCharacters(input);
    originalCharacters = input;
  };

  const handleRemoveDuplicate = (char: string, index: number) => {};

  const hasDuplicateCharacters = true;

  const contextValue: CharacterContextType = {
    characters: characters,
    hasDuplicateCharacters,
    saveCharacters: saveCharacters,
    removeDuplicateCharacters: handleRemoveDuplicate,
  };

  return (
    <CharacterContext.Provider value={contextValue}>
      {children}
    </CharacterContext.Provider>
  );
};

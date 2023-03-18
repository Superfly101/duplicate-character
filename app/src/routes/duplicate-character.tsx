import { useContext } from "react";
import { Navigate } from "react-router-dom";
import DuplicateCharacter from "../components/DuplicateCharacter";
import { CharacterContext } from "../context/character-context";

const DuplicateCharacterPage = () => {
  const { characters } = useContext(CharacterContext);

  if (!characters) {
    return <Navigate to="/" />;
  }

  return <DuplicateCharacter />;
};

export default DuplicateCharacterPage;

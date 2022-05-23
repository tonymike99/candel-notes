import { v4 as uuid } from "uuid";
import { createContext, useContext, useState, useEffect } from "react";

const defaultObj = {};
const TagsContext = createContext(defaultObj);

const TagsProvider = ({ children }) => {
  const [tagList, setTagList] = useState([
    { _id: uuid(), name: "Personal", checked: false },
    { _id: uuid(), name: "Shared", checked: false },
  ]);

  const valueObj = { tagList, setTagList };

  return (
    <TagsContext.Provider value={valueObj}>{children}</TagsContext.Provider>
  );
};

const useTags = () => useContext(TagsContext);

export { TagsProvider, useTags };

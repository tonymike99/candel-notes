import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./index";

const defaultObj = {};
const NotesContext = createContext(defaultObj);

const NotesProvider = ({ children }) => {
  const { encodedToken } = useAuth();
  const [notes, setNotes] = useState([]);

  // ****************************************************************************************************

  useEffect(() => {
    if (encodedToken) {
      getNotes();
    }
  }, [encodedToken]);

  // ****************************************************************************************************

  const getNotes = async () => {
    try {
      const params = {
        method: "get",
        url: "/api/notes",
        headers: {
          authorization: encodedToken,
        },
      };

      const getNotesResponse = await axios.request(params);

      if (getNotesResponse.status === 200) {
        setNotes(getNotesResponse.data.notes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createNote = async (note) => {
    try {
      const params = {
        method: "post",
        url: "/api/notes",
        data: { note },
        headers: {
          authorization: encodedToken,
        },
      };

      const createNoteResponse = await axios.request(params);

      if (createNoteResponse.status === 201) {
        setNotes(createNoteResponse.data.notes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editNote = async (note) => {
    try {
      const params = {
        method: "post",
        url: `/api/notes/${note._id}`,
        data: { note },
        headers: {
          authorization: encodedToken,
        },
      };

      const editNoteResponse = await axios.request(params);

      if (editNoteResponse.status === 201) {
        setNotes(editNoteResponse.data.notes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNoteFromNotes = async (noteId) => {
    try {
      const params = {
        method: "delete",
        url: `/api/notes/${noteId}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const deleteNoteResponse = await axios.request(params);

      if (deleteNoteResponse.status === 200) {
        setNotes(deleteNoteResponse.data.notes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const valueObj = {
    notes,
    setNotes,
    getNotes,
    createNote,
    editNote,
    deleteNoteFromNotes,
  };

  // ****************************************************************************************************

  return (
    <NotesContext.Provider value={valueObj}>{children}</NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };

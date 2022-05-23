import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth, useNotes } from "./index";

const defaultObj = {};
const TrashContext = createContext(defaultObj);

const TrashProvider = ({ children }) => {
  const { encodedToken } = useAuth();
  const { setNotes } = useNotes();
  const [trash, setTrash] = useState([]);

  // ****************************************************************************************************

  useEffect(() => {
    if (encodedToken) {
      getTrash();
    }
  }, [encodedToken]);

  // ****************************************************************************************************

  const getTrash = async () => {
    try {
      const params = {
        method: "get",
        url: "/api/trash",
        headers: {
          authorization: encodedToken,
        },
      };

      const getTrashResponse = await axios.request(params);

      if (getTrashResponse.status === 200) {
        setTrash(getTrashResponse.data.trash);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addNoteFromNotesToTrash = async (note) => {
    try {
      const params = {
        method: "post",
        url: `/api/notes/trash/${note._id}`,
        data: { note },
        headers: {
          authorization: encodedToken,
        },
      };

      const addNoteFromNotesToTrashResponse = await axios.request(params);

      if (addNoteFromNotesToTrashResponse.status === 201) {
        setNotes(addNoteFromNotesToTrashResponse.data.notes);
        setTrash(addNoteFromNotesToTrashResponse.data.trash);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const restoreNoteFromTrashToNotes = async (noteId) => {
    try {
      const params = {
        method: "post",
        url: `/api/trash/restore/${noteId}`,
        data: {},
        headers: {
          authorization: encodedToken,
        },
      };

      const restoreNoteFromTrashToNotesResponse = await axios.request(params);

      if (restoreNoteFromTrashToNotesResponse.status === 200) {
        setTrash(restoreNoteFromTrashToNotesResponse.data.trash);
        setNotes(restoreNoteFromTrashToNotesResponse.data.notes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNoteFromTrash = async (noteId) => {
    try {
      const params = {
        method: "delete",
        url: `/api/trash/delete/${noteId}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const deleteNoteFromTrashResponse = await axios.request(params);

      if (deleteNoteFromTrashResponse.status === 200) {
        setTrash(deleteNoteFromTrashResponse.data.trash);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const valueObj = {
    trash,
    getTrash,
    addNoteFromNotesToTrash,
    restoreNoteFromTrashToNotes,
    deleteNoteFromTrash,
  };

  // ****************************************************************************************************

  return (
    <TrashContext.Provider value={valueObj}>{children}</TrashContext.Provider>
  );
};

const useTrash = () => useContext(TrashContext);

export { TrashProvider, useTrash };

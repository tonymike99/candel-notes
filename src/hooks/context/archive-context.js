import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth, useNotes } from "./index";

const defaultObj = {};
const ArchivesContext = createContext(defaultObj);

const ArchivesProvider = ({ children }) => {
  const { encodedToken } = useAuth();
  const { setNotes } = useNotes();
  const [archives, setArchives] = useState([]);

  // ****************************************************************************************************

  useEffect(() => {
    if (encodedToken) {
      getArchives();
    }
  }, [encodedToken]);

  // ****************************************************************************************************

  const getArchives = async () => {
    try {
      const params = {
        method: "get",
        url: "/api/archives",
        headers: {
          authorization: encodedToken,
        },
      };

      const getArchivesResponse = await axios.request(params);

      if (getArchivesResponse.status === 200) {
        setArchives(getArchivesResponse.data.archives);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addNoteFromNotesToArchives = async (note) => {
    try {
      const params = {
        method: "post",
        url: `/api/notes/archives/${note._id}`,
        data: { note },
        headers: {
          authorization: encodedToken,
        },
      };

      const addNoteFromNotesToArchivesResponse = await axios.request(params);

      if (addNoteFromNotesToArchivesResponse.status === 201) {
        setNotes(addNoteFromNotesToArchivesResponse.data.notes);
        setArchives(addNoteFromNotesToArchivesResponse.data.archives);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const restoreNoteFromArchivesToNotes = async (noteId) => {
    try {
      const params = {
        method: "post",
        url: `/api/archives/restore/${noteId}`,
        data: {},
        headers: {
          authorization: encodedToken,
        },
      };

      const restoreNoteFromArchivesToNotesResponse = await axios.request(
        params
      );

      if (restoreNoteFromArchivesToNotesResponse.status === 200) {
        setArchives(restoreNoteFromArchivesToNotesResponse.data.archives);
        setNotes(restoreNoteFromArchivesToNotesResponse.data.notes);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNoteFromArchives = async (noteId) => {
    try {
      const params = {
        method: "delete",
        url: `/api/archives/delete/${noteId}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const deleteNoteFromArchivesResponse = await axios.request(params);

      if (deleteNoteFromArchivesResponse.status === 200) {
        setArchives(deleteNoteFromArchivesResponse.data.archives);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const valueObj = {
    archives,
    getArchives,
    addNoteFromNotesToArchives,
    restoreNoteFromArchivesToNotes,
    deleteNoteFromArchives,
  };

  // ****************************************************************************************************

  return (
    <ArchivesContext.Provider value={valueObj}>
      {children}
    </ArchivesContext.Provider>
  );
};

const useArchives = () => useContext(ArchivesContext);

export { ArchivesProvider, useArchives };

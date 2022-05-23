import { useEffect } from "react";
import { Aside, CardNote, CardMain } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useNotes } from "../../hooks/context/index";

function Home() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Home");

  // ****************************************************************************************************

  const { notes, getNotes } = useNotes();

  // ****************************************************************************************************

  useEffect(() => {
    getNotes();
  }, []);

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <section className="notes">
          <CardMain />
          {notes.map((note) => (
            <CardNote key={note._id} data={note} />
          ))}
        </section>
      </main>
    </div>
  );
}

export { Home };

import { useEffect } from "react";
import { Aside, CardNote } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useTrash } from "../../hooks/context/index";

function Trash() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Trash");

  // ****************************************************************************************************

  const { trash, getTrash } = useTrash();

  useEffect(() => {
    getTrash();
  }, []);

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <section className="notes-container">
          {trash.length ? (
            trash.map((note) => <CardNote key={note._id} data={note} />)
          ) : (
            <h1>Trash is empty! 😍</h1>
          )}
        </section>
      </main>
    </div>
  );
}

export { Trash };

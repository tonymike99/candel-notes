import { useEffect } from "react";
import { Aside, CardNote } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useArchives } from "../../hooks/context/index";

function Archives() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Archives");

  // ****************************************************************************************************

  const { archives, getArchives } = useArchives();

  useEffect(() => {
    getArchives();
  }, []);

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <section className="notes">
          {archives.length ? (
            archives.map((note) => <CardNote key={note._id} data={note} />)
          ) : (
            <h1>Archives is empty! 😍</h1>
          )}
        </section>
      </main>
    </div>
  );
}

export { Archives };

import { useEffect } from "react";
import { Aside, CardNote, CardMain } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useNotes } from "../../hooks/context/index";

function Notes() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Notes");

  // ****************************************************************************************************

  const { notes, getNotes, setNotes } = useNotes();
  let priorityLevels = { "": 0, Low: 1, Medium: 2, High: 3 };

  // ****************************************************************************************************

  useEffect(() => {
    getNotes();
  }, []);

  // ****************************************************************************************************

  const handlerSortByOldestToNewestDate = (e) => {
    if (e.target.checked)
      setNotes([
        ...notes.sort(function (a, b) {
          return new Date(a.date) - new Date(b.date);
        }),
      ]);
  };

  const handlerSortByNewestToOldestDate = (e) => {
    if (e.target.checked)
      setNotes([
        ...notes.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        }),
      ]);
  };

  const handlerSortByLowToHighPriority = (e) => {
    if (e.target.checked)
      setNotes([
        ...notes.sort(function (a, b) {
          return priorityLevels[a.priority] - priorityLevels[b.priority];
        }),
      ]);
  };

  const handlerSortByHighToLowPriority = (e) => {
    if (e.target.checked)
      setNotes([
        ...notes.sort(function (a, b) {
          return priorityLevels[b.priority] - priorityLevels[a.priority];
        }),
      ]);
  };

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <section className="filters">
          <div>
            <h3>Sort by Date</h3>
            <div>
              <input
                type="radio"
                id="sortByOldestToNewestDate"
                name="sortByDate"
                onChange={(e) => handlerSortByOldestToNewestDate(e)}
              />
              <label htmlFor="sortByOldestToNewestDate">
                {" "}
                Oldest to Newest{" "}
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="sortByNewestToOldestDate"
                name="sortByDate"
                onChange={(e) => handlerSortByNewestToOldestDate(e)}
              />
              <label htmlFor="sortByNewestToOldestDate">
                {" "}
                Newest to Oldest{" "}
              </label>
            </div>
          </div>

          <div>
            <h3>Sort by Priority</h3>
            <div>
              <input
                type="radio"
                id="sortByLowToHighPriority"
                name="sortByPriority"
                onChange={(e) => handlerSortByLowToHighPriority(e)}
              />
              <label htmlFor="sortByLowToHighPriority"> Low to High </label>
            </div>
            <div>
              <input
                type="radio"
                id="sortByHighToLowPriority"
                name="sortByPriority"
                onChange={(e) => handlerSortByHighToLowPriority(e)}
              />
              <label htmlFor="sortByHighToLowPriority"> High to Low </label>
            </div>
          </div>
        </section>

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

export { Notes };

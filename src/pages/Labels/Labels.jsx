import { useState, useEffect } from "react";
import { Aside, CardNote } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useNotes, useTags } from "../../hooks/context/index";
import { v4 as uuid } from "uuid";

function Labels() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Trash");

  // ****************************************************************************************************

  const { tagList, setTagList } = useTags();
  const { notes, getNotes } = useNotes();
  const [selectedTagName, setSelectedTagName] = useState("All");
  const [selectedTagNotes, setSelectedTagNotes] = useState([...notes]);
  const [newTagName, setNewTagName] = useState("");

  // ****************************************************************************************************

  useEffect(() => {
    getNotes();
  }, []);

  // ****************************************************************************************************

  const isTagInNote = (tagName, note) => {
    const tagIndex = note.tags.findIndex(
      (tag) => tag.name === tagName && tag.checked === true
    );
    if (tagIndex !== -1) return true;
    return false;
  };

  const handleTagButtonOnClick = (tagName) => {
    setSelectedTagName(tagName);
    setSelectedTagNotes(
      tagName !== "All"
        ? notes.filter((note) => isTagInNote(tagName, note))
        : notes
    );
  };

  const handleAddNewTagOnClick = () => {
    if (newTagName.length > 0) {
      setTagList([...tagList, { _id: uuid(), name: newTagName }]);
      setNewTagName("");
    }
  };

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <section className="tags-container">
          {[{ _id: 1, name: "All" }, ...tagList].map((tag) => (
            <button
              key={tag._id}
              className={
                selectedTagName === tag.name
                  ? "btn btn-dark-theme"
                  : "btn btn-light-theme btn-light-theme-outline"
              }
              onClick={() => handleTagButtonOnClick(tag.name)}
            >
              {tag.name}
            </button>
          ))}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter tag name"
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
            />
            <span
              className="absolute badge-inside-center-right color-black pointer"
              onClick={handleAddNewTagOnClick}
            >
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
        </section>

        <section className="notes-container">
          {selectedTagNotes.length ? (
            selectedTagNotes.map((note) => (
              <CardNote key={note._id} data={note} />
            ))
          ) : (
            <h1>Notes empty!</h1>
          )}
        </section>
      </main>
    </div>
  );
}

export { Labels };

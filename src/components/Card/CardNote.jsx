import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNotes, useArchives, useTrash } from "../../hooks/context/index";

function CardNote({ data }) {
  const { _id, title, description, color, tags, priority } = data;

  const [editedNoteDetails, setEditedNoteDetails] = useState({
    _id,
    title,
    description,
    color,
    tags,
    priority,
  });

  const { notes, editNote, deleteNoteFromNotes } = useNotes();

  const {
    archives,
    addNoteFromNotesToArchives,
    restoreNoteFromArchivesToNotes,
    deleteNoteFromArchives,
  } = useArchives();

  const {
    trash,
    addNoteFromNotesToTrash,
    restoreNoteFromTrashToNotes,
    deleteNoteFromTrash,
  } = useTrash();

  const location = useLocation();

  // ****************************************************************************************************

  const isNoteInNotes = (noteId) => {
    const noteIndex = notes.findIndex((note) => note._id === noteId);
    if (noteIndex !== -1) return true;
    else return false;
  };

  const isNoteInArchives = (archiveId) => {
    const noteIndex = archives.findIndex(
      (archive) => archive._id === archiveId
    );
    if (noteIndex !== -1) return true;
    else return false;
  };

  const isNoteInTrash = (trashedNoteId) => {
    const noteIndex = trash.findIndex((note) => note._id === trashedNoteId);
    if (noteIndex !== -1) return true;
    else return false;
  };

  const isNoteInArchivesOrTrash = (id) =>
    isNoteInArchives(id) || isNoteInTrash(id);

  // ****************************************************************************************************

  // FROM NOTES PAGE

  const handleSaveNoteButtonOnClick = () => {
    editNote(editedNoteDetails);
    setLabelsDisplay(false);
  };

  const handleArchiveNoteButtonOnClick = () => {
    addNoteFromNotesToArchives(editedNoteDetails);
  };

  const handleTrashNoteButtonOnClick = () => {
    addNoteFromNotesToTrash(editedNoteDetails);
  };

  const handleDeleteNoteButtonOnClick = () => {
    deleteNoteFromNotes(_id);
  };

  // FROM ARCHIVES PAGE

  const handleRestoreNoteFromArchivesToNotesOnClick = () => {
    restoreNoteFromArchivesToNotes(_id);
  };

  const handleDeleteNoteFromArchivesOnClick = () => {
    deleteNoteFromArchives(_id);
  };

  // FROM TRASH PAGE

  const handleRestoreNoteFromTrashToNotesOnClick = () => {
    restoreNoteFromTrashToNotes(_id);
  };

  const handleDeleteNoteFromTrashOnClick = () => {
    deleteNoteFromTrash(_id);
  };

  // ****************************************************************************************************

  const [labelsDisplay, setLabelsDisplay] = useState(false);

  const handleLabelsDisplay = () => setLabelsDisplay(!labelsDisplay);

  // ****************************************************************************************************

  return (
    <div className="card" style={{ backgroundColor: editedNoteDetails.color }}>
      <div className="card-header">
        <input
          className={isNoteInArchivesOrTrash(_id) ? "disabled" : ""}
          type="text"
          placeholder="Title of the note"
          required
          value={editedNoteDetails.title}
          onChange={(e) =>
            setEditedNoteDetails({
              ...editedNoteDetails,
              title: e.target.value,
            })
          }
        />
      </div>
      <div className="card-body">
        <textarea
          className={isNoteInArchivesOrTrash(_id) ? "disabled" : ""}
          name="note-description"
          id="note-description"
          cols="10"
          rows="5"
          placeholder="Description of the note"
          required
          value={editedNoteDetails.description}
          onChange={(e) =>
            setEditedNoteDetails({
              ...editedNoteDetails,
              description: e.target.value,
            })
          }
        ></textarea>
      </div>
      {location.pathname !== "/labels" && (
        <div className="card-footer">
          {isNoteInArchives(_id) ? (
            <span onClick={handleRestoreNoteFromArchivesToNotesOnClick}>
              <label>
                Restore
                <span className="pointer">
                  <i className="fa-solid fa-clock-rotate-left"></i>
                </span>
              </label>
            </span>
          ) : (
            !isNoteInTrash(_id) && (
              <span onClick={handleArchiveNoteButtonOnClick}>
                <label>
                  Archive
                  <span className="pointer">
                    <i className="fa-solid fa-box-archive"></i>
                  </span>
                </label>
              </span>
            )
          )}

          {isNoteInTrash(_id) ? (
            <span onClick={handleRestoreNoteFromTrashToNotesOnClick}>
              <label>
                Restore
                <span className="pointer">
                  <i className="fa-solid fa-clock-rotate-left"></i>
                </span>
              </label>
            </span>
          ) : (
            !isNoteInArchives(_id) && (
              <span onClick={handleTrashNoteButtonOnClick}>
                <label>
                  Trash
                  <span className="pointer">
                    <i className="fa-solid fa-trash-can"></i>
                  </span>
                </label>
              </span>
            )
          )}

          {isNoteInArchives(_id) && (
            <span onClick={handleDeleteNoteFromArchivesOnClick}>
              <label>
                Delete
                <span className="pointer">
                  <i className="fa-solid fa-delete-left"></i>
                </span>
              </label>
            </span>
          )}

          {isNoteInTrash(_id) && (
            <span onClick={handleDeleteNoteFromTrashOnClick}>
              <label>
                Delete
                <span className="pointer">
                  <i className="fa-solid fa-delete-left"></i>
                </span>
              </label>
            </span>
          )}

          {isNoteInNotes(_id) && (
            <span onClick={handleDeleteNoteButtonOnClick}>
              <label>
                Delete
                <span className="pointer">
                  <i className="fa-solid fa-delete-left"></i>
                </span>
              </label>
            </span>
          )}
        </div>
      )}
      {!isNoteInArchivesOrTrash(_id) && (
        <div className="card-footer">
          <div>
            <label htmlFor={`pick-color-${_id}`}>
              Color:{" "}
              <span className="pointer">
                <i className="fa-solid fa-palette"></i>
              </span>
            </label>
            <input
              type="color"
              id={`pick-color-${_id}`}
              value={editedNoteDetails.color}
              onChange={(e) =>
                setEditedNoteDetails({
                  ...editedNoteDetails,
                  color: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor={`priority-${_id}`}>
              Priority:{" "}
              <span className="pointer">
                <i className="fa-solid fa-exclamation"></i>
              </span>
            </label>
            <select
              name="priority"
              id={`priority-${_id}`}
              value={editedNoteDetails.priority}
              onChange={(e) =>
                setEditedNoteDetails({
                  ...editedNoteDetails,
                  priority: e.target.value,
                })
              }
            >
              <option value="">None</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div>
            <label htmlFor={`tags-${_id}`}>
              Tags: <i className="fa-solid fa-tag"></i>
              <span className="pointer" onClick={handleLabelsDisplay}>
                <i className="fa-solid fa-caret-down"></i>
              </span>
            </label>
            <div className="relative">
              <fieldset
                className={labelsDisplay ? "absolute" : "absolute display-none"}
              >
                {editedNoteDetails.tags.map((tag, index) => (
                  <div key={tag.id}>
                    <input
                      type="checkbox"
                      id={tag.id}
                      name={tag.name}
                      defaultChecked={tag?.checked}
                      onChange={(e) =>
                        setEditedNoteDetails({
                          ...editedNoteDetails,
                          tags: [
                            ...editedNoteDetails.tags.slice(0, index),
                            { ...tag, checked: e.target.checked },
                            ...editedNoteDetails.tags.slice(index + 1),
                          ],
                        })
                      }
                    />
                    <label htmlFor={tag.id}>{tag.name}</label>
                  </div>
                ))}
              </fieldset>
            </div>
          </div>
        </div>
      )}
      <div>
        <button
          className={
            isNoteInArchivesOrTrash(_id)
              ? "btn btn-secondary btn-width-100 disabled"
              : "btn btn-secondary btn-width-100"
          }
          onClick={handleSaveNoteButtonOnClick}
        >
          <i className="fa-solid fa-floppy-disk"></i>
          Save note
        </button>
      </div>
    </div>
  );
}

export { CardNote };

import { useState } from "react";
import { useNotes, useTags } from "../../hooks/context/index";

function CardMain() {
  const { createNote } = useNotes();
  const { tagList } = useTags();
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    description: "",
    color: "lightblue",
    tags: [...tagList],
    priority: "",
  });

  // ****************************************************************************************************

  const handleAddNoteButtonOnClick = () => {
    createNote({ ...noteDetails, date: new Date().toLocaleString() });
    setLabelsDisplay(false);
    setNoteDetails({
      title: "",
      description: "",
      color: "lightblue",
      tags: [...tagList],
      priority: "",
    });
  };

  const [labelsDisplay, setLabelsDisplay] = useState(false);

  const handleLabelsDisplay = () => setLabelsDisplay(!labelsDisplay);

  // ****************************************************************************************************

  return (
    <div className="card" style={{ backgroundColor: noteDetails.color }}>
      <div className="card-header">
        <input
          type="text"
          placeholder="Title of the note"
          required
          value={noteDetails.title}
          onChange={(e) =>
            setNoteDetails({ ...noteDetails, title: e.target.value })
          }
        />
      </div>
      <div className="card-body">
        <textarea
          name="note-description"
          id="note-description"
          cols="10"
          rows="5"
          placeholder="Description of the note"
          required
          value={noteDetails.description}
          onChange={(e) =>
            setNoteDetails({ ...noteDetails, description: e.target.value })
          }
        ></textarea>
      </div>
      <div className="card-footer">
        <div>
          <label htmlFor="pick-color">
            Color:
            <span className="pointer">
              <i className="fa-solid fa-palette"></i>
            </span>
          </label>
          <input
            type="color"
            id="pick-color"
            value={noteDetails.color}
            onChange={(e) =>
              setNoteDetails({ ...noteDetails, color: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="priority">
            Priority:
            <span className="pointer">
              <i className="fa-solid fa-exclamation"></i>
            </span>
          </label>
          <select
            name="priority"
            id="priority"
            value={noteDetails.priority}
            onChange={(e) =>
              setNoteDetails({ ...noteDetails, priority: e.target.value })
            }
          >
            <option value="">None</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label htmlFor="tags">
            Tags: <i className="fa-solid fa-tag"></i>
            <span className="pointer" onClick={handleLabelsDisplay}>
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </label>

          <div className="relative">
            <fieldset
              className={labelsDisplay ? "absolute" : "absolute display-none"}
            >
              {noteDetails.tags.map((tag, index) => (
                <div key={tag._id}>
                  <input
                    type="checkbox"
                    id={tag._id}
                    name={tag.name}
                    defaultChecked={tag.checked}
                    onChange={(e) =>
                      setNoteDetails({
                        ...noteDetails,
                        tags: [
                          ...noteDetails.tags.slice(0, index),
                          { ...tag, checked: e.target.checked },
                          ...noteDetails.tags.slice(index + 1),
                        ],
                      })
                    }
                  />
                  <label htmlFor={tag._id}>{tag.name}</label>
                </div>
              ))}
            </fieldset>
          </div>
        </div>
      </div>
      <div>
        <button
          className={
            !noteDetails.title || !noteDetails.description
              ? "btn btn-primary btn-width-100 pointer disabled"
              : "btn btn-primary btn-width-100 pointer"
          }
          onClick={handleAddNoteButtonOnClick}
          disabled={!noteDetails.title || !noteDetails.description}
        >
          <i className="fa-solid fa-plus"></i>
          Add note
        </button>
      </div>
    </div>
  );
}

export { CardMain };

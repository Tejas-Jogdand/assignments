import { useState } from "react";

export function AddCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="add-card-form">
      <p className="form-toggle" onClick={() => setExpanded(!expanded)}>
        {expanded ? "➖ Hide Form" : "➕ Add New Card"}
      </p>

      {expanded && (
        <div className="form-fields">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" placeholder="Enter full name" />

          <label htmlFor="designation">Designation: </label>
          <input type="text" name="designation" placeholder="Enter your designation" />

          <label htmlFor="intrest">Intrests: </label>
          <input type="text" name="intrest" placeholder="Seprated by space" />

          <label htmlFor="linkdin">LinkedIn: </label>
          <input type="text" name="linkdin" placeholder="Enter your linkdin link"  />

          <label htmlFor="github">GitHub: </label>
          <input type="text" name="github" placeholder="Enter your github link"  />

          <label htmlFor="x">X: </label>
          <input type="text" name="x" placeholder="Enter your X link" />

          <button>Add</button>
        </div>
      )}
    </div>
  );
}

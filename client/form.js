import React, { useState } from "react";

const Form = ({ pipefy }) => {
  const [cardId, setCardId] = useState(null);
  return (
    <form>
      <div>
        <label>
          cardId:
          <input
            type="text"
            name="name"
            onChange={event => setCardId(event.target.value)}
          />
        </label>
        <button type="button" onClick={() => pipefy.openCard(cardId)}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;

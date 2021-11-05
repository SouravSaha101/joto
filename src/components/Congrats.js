import React from "react";

function Congrats({ success }) {
  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulation! You guessed the word.
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
}

export default Congrats;

import React from "react";

const DescptionBook = ({ Handelchange }) => {
  return (
    <div>
      <button className="close" onClick={() => Handelchange()}>
        close
      </button>
      <h1>         Description:</h1>
      <h2 className="book-descreption">
        An exhilarating debut novel, tracing the harrowing journey of a mother
        and son fighting for survival and a future in a world ravaged by
        environmental disaster Five years ago, a microplastic storm wiped out
        most of the population. No infrastructure. No safe havens. No goodbyes.
      </h2>
    </div>
  );
};
export default DescptionBook;

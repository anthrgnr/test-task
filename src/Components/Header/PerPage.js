import React from "react";

export default function PerPage({ setPer, currentPerPage }) {
  const PerPages = [6, 12, 24];
  return (
    <div className="field">
      {PerPages.map((perPage) => {
        if (perPage === currentPerPage) {
          return (
            <span className="perpage active" onClick={() => setPer(perPage)}>
              {perPage}
            </span>
          );
        } else {
          return (
            <span className="perpage" onClick={() => setPer(perPage)}>
              {perPage}
            </span>
          );
        }
      })}
    </div>
  );
}

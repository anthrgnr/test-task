import React from "react"

export default function Pagination({
  perPage,
  countriesCount,
  setPage,
  currentPageNumber,
}) {
  const pageButtons = []
  let left = 4
  let right = 4
  const pagesCount = Math.ceil(countriesCount / perPage)
  if (currentPageNumber > pagesCount) {
    currentPageNumber = 1
    setPage(1)
  }

  for (let i = 1; i <= pagesCount; i++) {
    pageButtons.push(i)
  }
  if (currentPageNumber <= right) {
    right = right * 2 - currentPageNumber + 1
  }
  if (currentPageNumber > pagesCount - left) {
    left = left + (currentPageNumber - (pagesCount - left)) - 1
  }

  return (
    <div className="field">
      <span className="menu" key={"start"} onClick={() => setPage(1)}>
        start
      </span>
      {pageButtons
        .filter(
          (b) => b >= currentPageNumber - left && b < currentPageNumber + right
        )
        .map((num) => {
          if (num === currentPageNumber) {
            return (
              <span
                className="page active"
                key={num}
                onClick={() => setPage(num)}
              >
                {num}
              </span>
            )
          } else {
            return (
              <span className="page" key={num} onClick={() => setPage(num)}>
                {num}
              </span>
            )
          }
        })}
      <span className="menu" key={"end"} onClick={() => setPage(pagesCount)}>
        end
      </span>
    </div>
  )
}

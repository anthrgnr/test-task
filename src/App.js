import React, { useState, useEffect } from "react"
import axios from "axios"

import List from "./Components/List/List"
import Selector from "./Components/Header/SortType"
import Pagination from "./Components/Header/Pagination"
import PerPage from "./Components/Header/PerPage"
import Context from "./Components/Context"
import "./App.css"

function App() {
  const [countries, setCountries] = useState([])
  const [initialCountries, setInitialCountries] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [perPage, setPerPage] = useState(6)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
    const getCountries = async () => {
      const response = await axios.get("https://restcountries.com/v2/all")
      setInitialCountries(response.data)
      setCountries(response.data)
      setLoaded(true)
    }
    getCountries()
  }, [])

  const lastIndex = pageNumber * perPage
  const firstIndex = lastIndex - perPage
  const currentPage = countries.slice(firstIndex, lastIndex)

  function sort() {
    let select = document.getElementsByClassName("sort")[0]
    let option = select.options[select.selectedIndex].value
    if (option === "0") {
      setCountries(initialCountries)
      return
    }

    const sortedcountries = [...countries]
    setCountries(
      sortedcountries.sort((a, b) => {
        if (a[option] > b[option]) return 1
        else if (a[option] < b[option]) return -1
        return 0
      })
    )
  }

  if (loaded) {
    return (
      <Context.Provider value={{ sort }}>
        <div className="container">
          <div className="header">
            <Selector />
            <Pagination
              perPage={perPage}
              countriesCount={countries.length}
              setPage={setPageNumber}
              currentPageNumber={pageNumber}
            />
            <PerPage setPer={setPerPage} currentPerPage={perPage} />
          </div>
          <List countries={currentPage} />
        </div>
      </Context.Provider>
    )
  }
  else {
    return (
      <div className="loading">
        <h1>Wait a second. The page is loading...</h1>
      </div>
    )
  }
}

export default App

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import List from "./Components/List/List";
import Selector from "./Components/Header/SortType";
import Pagination from "./Components/Header/Pagination";
import PerPage from "./Components/Header/PerPage";
import Context from "./Components/Context";

function App() {
  const [countries, setCountries] = useState([]);
  const [initialcountries, setInitialCountries] = useState([]); //Состояние, хранящее исходный массив стран
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [loaded, setLoaded] = useState(false); //Состояние, хрвнящее значение загрузки стран

  useEffect(() => {
    setLoaded(false);
    const getcountries = async () => {
      const response = await axios.get("https://restcountries.com/v2/all");
      setInitialCountries(response.data);
      setCountries(response.data);
      setLoaded(true);
    };
    getcountries();
  }, []);

  //Переменные для определения того, какие страны будут выведены
  const lastIndex = pageNumber * perPage;
  const firstIndex = lastIndex - perPage;
  const currentPage = countries.slice(firstIndex, lastIndex);

  //Стрелочные функции для установки нужной страницы и числа стран на странице
  const setPage = (page) => setPageNumber(page);
  const setPer = (per) => setPerPage(per);

  //Функция сортировки
  function sort() {
    let select = document.getElementsByClassName("sort")[0];
    let option = select.options[select.selectedIndex].value;
    if (option === "0") {
      setCountries(initialcountries);
      return;
    }

    const sortedcountries = [...countries];
    setCountries(
      sortedcountries.sort((a, b) => {
        if (a[option] > b[option]) return 1;
        else if (a[option] < b[option]) return -1;
        return 0;
      })
    );
  }

  //В случае, если данные были загружены рендерится основная страница
  if (loaded) {
    return (
      <Context.Provider value={{ sort }}>
        <div className="container">
          <div className="header">
            <Selector />
            <Pagination
              perPage={perPage}
              countriesCount={countries.length}
              setPage={setPage}
              currentPageNumber={pageNumber}
            />
            <PerPage setPer={setPer} currentPerPage={perPage} />
          </div>
          <List countries={currentPage} />
        </div>
      </Context.Provider>
    );
  }
  //В противном случае выводится сообщение о загрузке
  else {
    return (
      <div className="loading">
        <h1>Wait a second. The page is loading...</h1>
      </div>
    );
  }
}

export default App;

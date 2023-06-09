import React, { createContext, useState, useEffect } from "react";
import { fatchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCatagories, setSelectCatagories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fatchSelectedCategoryData(selectCatagories)
  }, [selectCatagories]);

  const fatchSelectedCategoryData = (query) => {
        setLoading(true);
        fatchDataFromApi(`search/?q=${query}`).then(({contents}) => {
            // console.log(contents);
            setSearchResults(contents);
            setLoading(false); 
        })
  }

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCatagories,
        setSelectCatagories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

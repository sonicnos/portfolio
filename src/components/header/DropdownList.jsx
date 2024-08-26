import i18next from "i18next";
import React from "react";

const DropdownList = () => {
  const languages = ["English", "Français", "Ελληνικά"];
  const languageCodes = ["en", "fr", "gr"];

  const onSelectChange = (e) => {
    const languageValue = e.target.value;
    i18next.changeLanguage(languageValue);
  };

  return (
    <label className="dropdown_menu">
      <div className="form-select-container">
        <select onChange={onSelectChange}>
          {languages.map((language, languageCode) => {
            return (
              <option
                key={languageCodes[languageCode]}
                value={languageCodes[languageCode]}
              >
                {language}
              </option>
            );
          })}
        </select>
      </div>
    </label>
  );
};

export default DropdownList;

import { useContext } from "react";

const LanguageDropdown = () => {
  return (
    <select>
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
      <option value="kn">ಕನ್ನಡ</option>
    </select>
  );
};

export default LanguageDropdown;

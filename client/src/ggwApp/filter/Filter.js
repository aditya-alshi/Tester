import { availableCountries, availableAmenities } from "./availableOptions";
import { useSelector, useDispatch } from "react-redux";

import { toggleCountry, toggleAmenities } from "./filterSlice";

const countryArraySelector = (state) => state.filter.country;
const amenitiesSelector = (state) => state.filter.amenities;

export default function Filter() {
  const dispatch = useDispatch();

  const stateCounties = useSelector(countryArraySelector);
  const stateAmenities = useSelector(amenitiesSelector);

  const countryRender = availableCountries.map((item, index) => {
    const checkValue = stateCounties.includes(item);
    return (
      <div key={index} className="countryCheckbox">
        <label htmlFor={item}>
          <input
            type="checkbox"
            name={item}
            checked={checkValue}
            onChange={(e) => {
              const countryName = e.target.name;
              const changeType = e.target.checked ? "selected" : "removed";
              dispatch(toggleCountry({ changeType, countryName }));
            }}
          />
          {item}
        </label>
      </div>
    );
  });

  const amenitiesRenderer = availableAmenities.map((item, index) => {
    const checkValue = stateAmenities.includes(item);
    return (
      <div key={index} className="amenitiesCheckbox">
        <label htmlFor={item}>
          <input
            type="checkbox"
            name={item}
            checked={checkValue}
            onChange={(e) => {
              const amenitiesName = e.target.name;
              const changeType = e.target.checked ? "selected" : "removed";
              dispatch(toggleAmenities({ amenitiesName, changeType }));
            }}
          />
          {item}
        </label>
      </div>
    );
  });

  return (
    <div className="filter--wrapper">
      <div className="filter--sections">{countryRender}</div>
      <div className="filter--sections">{amenitiesRenderer}</div>
    </div>
  );
}

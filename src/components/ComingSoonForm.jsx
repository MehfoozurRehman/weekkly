import { useState } from "react";

export default function ComingSoonForm() {
  const [isList, setIsList] = useState(false);
  const list = ["Breakfast", "Mains", "Snacks/Desserts"];
  const [selectedList, setSelectedList] = useState([]);
  return (
    <div className="comingsoon__section__content__overlay__form">
      <div className="comingsoon__section__content__overlay__form__header">
        <div className="comingsoon__section__content__overlay__form__header__heading">
          Compare
        </div>
        <select
          className="comingsoon__section__content__overlay__form__header__select"
          onChange={(e) => {
            setIsList(e.target.value === "true");
          }}
        >
          <option value="false">Same for all</option>
          <option value="true">Different for all</option>
        </select>
      </div>
      {isList ? (
        <>
          <div className="comingsoon__section__content__overlay__form__tabs">
            {list.map((item, index) => (
              <button
                className={selectedList.includes(item)
                  ? "comingsoon__section__content__overlay__form__tabs__tab comingsoon__section__content__overlay__form__tabs__tab__select"
                  : "comingsoon__section__content__overlay__form__tabs__tab"}
                key={index}
                onClick={() => {
                  if (selectedList.includes(item)) {
                    setSelectedList(selectedList.filter((i) => i !== item));
                  } else {
                    setSelectedList([...selectedList, item]);
                  }
                }}
              >
                {item}
              </button>
            ))}
          </div>
          {selectedList.map((item, index) => (
            <div
              className="comingsoon__section__content__overlay__form__input"
              key={index}
            >
              <label htmlFor="">{item}</label>
              <input
                className="comingsoon__section__content__overlay__form__input__field"
                placeholder="Quantity" />
            </div>
          ))}
        </>
      ) : (
        <div className="comingsoon__section__content__overlay__form__input">
          <label htmlFor="">Quantity</label>
          <input
            className="comingsoon__section__content__overlay__form__input__field"
            placeholder="Quantity" />
        </div>
      )}

      <button className="comingsoon__section__content__overlay__form__button">
        Compare
      </button>
    </div>
  );
}

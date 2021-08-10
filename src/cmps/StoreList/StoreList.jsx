import "./StoreList.css";
import React from "react";

export const StoreList = ({stores, setSelectedStore}) =>  {
    return (
      <div className="store-list">
        <h4 className="title">Store List</h4>
        <ul className="list-item">
          {stores.map((store) => (
            <li
              key={store.id}
              className="store-item"
              onClick={() => {
                setSelectedStore(store);
              }}
            >
              <div className="info"></div>
              <p className="bold"> {store.storeName}</p>
              <p>
                <label htmlFor="">Zip: </label>
                {store.zipCode}
              </p>
              <p>
                <label htmlFor="">Phone: </label>
                {store.phone}
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
}

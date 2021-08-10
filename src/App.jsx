import React, { Component } from "react";
import "./App.css";
import { storeService } from "../src/service/storeService";
import { StoreList } from "../src/cmps/StoreList/StoreList";
import { AppHeader } from "./cmps/AppHeader/AppHeader";
import { Map } from "../src/cmps/Map/Map";

export class App extends Component {
  state = {
    stores: null,
    selectedStore: null,
    filter: "",
    sortASC: true,
  };

  componentDidMount() {
    const stores = storeService.query();
    this.setState({ stores: stores });
  }

  setFilter = (value) => {
    this.setState({ filter: value }, () => {
      const { sortASC, filter } = this.state;
      const stores = storeService.query(filter, sortASC);
      this.setState({ stores: stores });
    });
  };

  setSelectedStore = (store) => {
    this.setState((prevState) => ({ ...prevState, selectedStore: store }));
  };

  setSort = (value) => {
    const { filter } = this.state;
    const stores = storeService.query(filter, value);
    this.setState({ stores: stores, sortASC: value });
  };

  render() {
    const { stores, selectedStore, filter, sortASC } = this.state;
    return (
      <div className="app container">
        <header className="app-header">
          <AppHeader
            filter={filter}
            setFilter={this.setFilter}
            setSort={this.setSort}
          />
        </header>
        {stores && (
          <section className="app-main">
            <StoreList
              stores={stores}
              setSelectedStore={this.setSelectedStore}
              sortASC={sortASC}
            />
            <Map stores={stores} selectedStore={selectedStore} />
          </section>
        )}
      </div>
    );
  }
}

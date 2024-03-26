import React, { useState } from "react";
import Header from "./components/Header";
import CheckoutForm from "./components/CheckoutForm";
import RecordTable from "./components/RecordTable";
import Footer from "./components/Footer";
import ProductDrawer from "./components/ProductDrawer";
import Test from "./components/Test";

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [products, setProducts] = useState([
    { id: 1, name: "Apple 1", price: 10.99 },
    { id: 2, name: "Mango 2", price: 19.99 },
    { id: 3, name: "Orange 3", price: 5.49 },
    { id: 4, name: "Pimple 4", price: 14.99 },
    { id: 5, name: "Clothes 5", price: 8.95 },
  ]);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const [records, setRecord] = useState([]);
  const addRecord = (newRecord) => {
    setRecord([...records, newRecord]);
  };

  const delRecord = (id) => {
    setRecord(records.filter((record) => record.id != id));
  };
  return (
    <div className=" max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col dark:bg-slate-300">
      <Header />

      <CheckoutForm products={products} addRecord={addRecord} />
      <RecordTable delRecord={delRecord} records={records} />
      <Footer handleDrawer={handleDrawer} />
      <ProductDrawer
        openDrawer={openDrawer}
        handleDrawer={handleDrawer}
        addProduct={addProduct}
        products={products}
      />

      {/* <Test /> */}
    </div>
  );
};

export default App;

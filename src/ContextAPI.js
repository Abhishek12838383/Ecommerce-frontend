import { createContext, useState } from "react";

// create context
export const Selectedproduct = createContext();
export const Productdata = createContext();

// provider component
export const SelectedDataProvider = ({ children }) => {
  const [selectedData, setSelectedData] = useState([]); 
  const [productdata, setProductdata] = useState([]);

  // ✅ Add to cart
  const addToCart = (item) => {
    setProductdata((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        // If already in cart → increase quantity
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      // If new product → add with qty = 1
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ✅ Remove from cart
  const removeFromCart = (id) => {
    setProductdata((prev) => prev.filter((product) => product.id !== id));
  };

  // ✅ Increment qty
  const incrementQty = (id) => {
    setProductdata((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  // ✅ Decrement qty
  const decrementQty = (id) => {
    setProductdata((prev) =>
      prev.map((p) =>
        p.id === id && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
  };

  return (
    <Selectedproduct.Provider value={{ selectedData, setSelectedData }}>
      <Productdata.Provider
        value={{
          productdata,
          setProductdata,
          addToCart,
          removeFromCart,
          incrementQty,
          decrementQty,
        }}
      >
        {children}
      </Productdata.Provider>
    </Selectedproduct.Provider>
  );
};

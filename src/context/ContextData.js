import { createContext, useState } from "react";
import products from "../components/store/Products.json"; // استيراد المنتجات

// إنشاء الـ Context
export const CreateContextData = createContext();

const ContextData = ({ children }) => {
  // تعريف State داخل الـ Component
  const [cart, setcart] = useState([]);

  // there are four function => getquantity , increaseitems ,decreaseitems , removeitems 

  // the first function .... [ 1 ]
  const getquantity =(id)=>{ 
return cart.find((item)=>item.id === id)?.quantity || 0
  }

  // the second function...  [ 2 ]
  // two cases => first case if there ara no items in cart
  // second case  if there ara items in cart and we need increase items used plus 
  

  const increaseItems = (id) => {
    setcart((currentItem) => {
      const product = products.find((p) => p.id === id); // ابحث عن المنتج في JSON
  
      if (!product) return currentItem; // لو المنتج مش موجود، لا تعدل شيء
  
      if (currentItem.find((item) => item.id === id) == null) {
        return [...currentItem, { ...product, quantity: 1 }]; // أضف المنتج بكامل بياناته
      } else {
        return currentItem.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  };
  
  // the third function...  [ 3 ]
  // two cases => first case if there ara one quantity must be delete this
  // second case  if there ara items in cart and we need decrease items used minus

const decreaseItems = (id) => {
  setcart((currentItem) => {
    if (currentItem.find((item) => item.id === id)?.quantity=== 1 ) {
      return currentItem.filter((item)=>item.id !== id)
    } else {  
      return currentItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
  });
};

  // the fourth function  ... [ 4 ]
  const removeitem = (id)=>{
setcart(currentItem=>{
  return currentItem.filter((item)=>item.id !== id);
})
}

  return (
    <CreateContextData.Provider value={{ cart, setcart ,getquantity,increaseItems,decreaseItems,removeitem }}>
      {children}
    </CreateContextData.Provider>
  );
}

export default ContextData;

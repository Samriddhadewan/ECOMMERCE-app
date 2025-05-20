import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const {navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products} = useContext(ShopContext)
  const [method, setMethod] = useState('cod');
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phoneNumber:"",

  })

  const onchangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    
    setFormData(data=> ({...data,[name]:value}))
  }

  const onsubmitHandler = async(e)=>{
    e.preventDefault();
    try {
      let orderItems = [];
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0){
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if(itemInfo){
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      console.log(orderItems);
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      }
  switch (method) {
    // API call for COD delivery order
    case 'cod':
      try {
        const response = await axios.post(backendUrl + "/api/order/place", orderData, {
          headers: { token },
        });
        console.log(response.data)
        if(response.data.success){
          setCartItems,({})
          navigate("/orders")
        }
        else{
          toast.error(response.data.message)
        }
      } catch (error) {
        toast.error(error.message);
      }
      break;

    default:
      console.warn("Unknown method:", method);
      break;
  }


    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  return (
    <form onSubmit={onsubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"}></Title>
        </div>
        <div className="flex gap-3">
          <input
          onChange={onchangeHandler}
            name="firstName"
            value={formData.firstName}
            type="text"
            required
            placeholder="First name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            onChange={onchangeHandler}
            name="lastName"
            value={formData.lastName}
            type="text"
            required
            placeholder="Last name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
        onChange={onchangeHandler}
            name="email"
            value={formData.email}
          type="email"
          required
          placeholder="Email Address"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
        onChange={onchangeHandler}
            name="street"
            value={formData.street}
          type="text"
          required
          placeholder="street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex gap-3">
          <input
          onChange={onchangeHandler}
            name="city"
            value={formData.city}
            type="text"
            required
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
          onChange={onchangeHandler}
            name="state"
            value={formData.state}
            type="text"
            required
            placeholder="State"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
          onChange={onchangeHandler}
            name="zipcode"
            value={formData.zipcode}
            type="number"
            required
            placeholder="Zipcode"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
          onChange={onchangeHandler}
            name="country"
            value={formData.country}
            type="text"
            required
            placeholder="Country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          onChange={onchangeHandler}
            name="phone"
            value={formData.phone}
          type="number"
          required
          placeholder="Phone Number"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>
      {/* right side  */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal></CartTotal>
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"}></Title>
          {/* payment method selection  */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div  onClick={()=>setMethod('stripe')} className="flex  items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe'? 'bg-green-400' : ''}`}></p>
            <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className="flex  items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay'? "bg-green-500" : ''}`}></p>
            <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className="flex  items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod'? "bg-green-500": ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button type="submit" className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>
        
        </div>

      </div>
    </form>
  );
};

export default PlaceOrder;

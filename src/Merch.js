import React, { useState } from 'react';
import axios from 'axios';

function Merch() {
  // State variables to manage user selections
  const [selectedSize, setSelectedSize] = useState(''); // To store selected size
  const [address, setAddress] = useState(''); // To store user's address
  const [paymentInfo, setPaymentInfo] = useState({}); // To store payment information

  const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjkyYzU5MTkwYTNkZTQ2ZTViZDdjMjVmMmVjYWM3NmVjZTdhYzVkMjU1YTNlM2Q0NDNlNDQ2MTQ1MzA2YThhZGE0ODM5MmQxZjkwNjIzZjliIiwiaWF0IjoxNjk3MzAwODg4LjQ3NDI0OSwibmJmIjoxNjk3MzAwODg4LjQ3NDI1MiwiZXhwIjoxNzI4OTIzMjg4LjQ2Njk1NCwic3ViIjoiMTU1NjI1MDAiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.Ah4y1IAzurHdc0yjb164K_Z99hVZnP-0_Xt-j0NRQcVSbGzyUMxzDEs7nhm_rGG-BKw0IMmF0_Ieo97iN9g'; 

  // Function to handle size selection
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  // Function to handle address input
  const handleAddressInput = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  // Function to handle payment input
  const handlePaymentInput = (event) => {
    const { name, value } = event.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  

  const getShops = async () => { 
    var url = 'https://api.printify.com/v1/shops.json';
    
    var headers = {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjkyYzU5MTkwYTNkZTQ2ZTViZDdjMjVmMmVjYWM3NmVjZTdhYzVkMjU1YTNlM2Q0NDNlNDQ2MTQ1MzA2YThhZGE0ODM5MmQxZjkwNjIzZjliIiwiaWF0IjoxNjk3MzAwODg4LjQ3NDI0OSwibmJmIjoxNjk3MzAwODg4LjQ3NDI1MiwiZXhwIjoxNzI4OTIzMjg4LjQ2Njk1NCwic3ViIjoiMTU1NjI1MDAiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.Ah4y1IAzurHdc0yjb164K_Z99hVZnP-0_Xt-j0NRQcVSbGzyUMxzDEs7nhm_rGG-BKw0IMmF0_Ieo97iN9g',
        'Content-Type': 'application/json', 
      };
    
      axios.get(url, { headers })
  .then(response => {
    // Handle the data received in the response
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });

    
  }; 

  return (
    <div>
      {/* Product Images (You can use a carousel library or custom implementation) */}
      <div>
        {/* Your product images go here */}
      </div>

      {/* Size Selection */}
      <div>
        <label>Select Size:</label>
        <select value={selectedSize} onChange={(e) => handleSizeSelection(e.target.value)}>
          <option value="">-- Select Size --</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      {/* Address Entry */}
      <div>
        <label>Shipping Address:</label>
        <textarea
          name="shippingAddress"
          value={address.shippingAddress || ''}
          onChange={handleAddressInput}
        ></textarea>
      </div>

      {/* Payment Entry (You can use a form library for better UX) */}
      <div>
        <label>Payment Information:</label>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentInfo.cardNumber || ''}
          onChange={handlePaymentInput}
        />
        {/* Include more payment input fields as needed (e.g., CVV, expiration date) */}
      </div>

      {/* Submit Button */}
      <div>
        <button >Submit Order</button>
        <button onClick={getShops}>test Get Shops</button>
      </div>
    </div>
  );
}

export default Merch;

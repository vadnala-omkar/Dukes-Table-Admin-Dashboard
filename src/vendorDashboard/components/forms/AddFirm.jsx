import React, { useState } from "react";
import { API_URL } from '../../data/apiPath';
import { ThreeCircles } from 'react-loader-spinner';


const AddFirm = () => {
  
  const [formData, setFormData] = useState({
    firmName: "",
    area: "",
    category: [],
    region: [],
    offer: "",
    image: null,
  });
  const [firmname, setFirmName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState([]);
  const [region, setRegion] = useState([]);
  const [offer, setOffer] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); 


const handleCategoryChange = (event)=>{
  const value = event.target.value;
    if(category.includes(value)){
      setCategory(category.filter((item)=> item !== value));
    }else{
        setCategory([...category, value])
    }
}
const handleRegionChange = (event)=>{
  const value = event.target.value;
    if(region.includes(value)){
      setRegion(region.filter((item)=> item !== value));
    }else{
      setRegion([...region, value])
    }
}
const handleImageUpload =(event)=>{
  const selectedImage = event.target.files[0];
  setFile(selectedImage)
}

const handleFirmSubmit = async(e)=>{
  e.preventDefault();
  setLoading(true);
  

  try {
    const loginToken = localStorage.getItem('loginToken');
    if(!loginToken){
      console.error("user not authenticated")
      alert("Token error")
    }
    const formData = new FormData();
    formData.append('firmname', firmname);
    formData.append('area', area);
    formData.append('offer', offer);
    formData.append('image', file)

    category.forEach((value)=>{
      formData.append('category', value)
    });
    region.forEach((value)=>{
      formData.append('region', value)
    })

    const response = await fetch(`${API_URL}/firm/add-firm`,{
      method:'POST',
      headers:{
        'token': `${loginToken}`
      },
      body: formData
    });
    const data = await response.json();
    console.log(data)
    if(response.ok){
      console.log(data)
      setFirmName("");
      setArea("")
      setCategory([]);
      setRegion([]);
      setOffer("");
      setFile(null)
      alert("Firm added Successfully")
    }else{
      alert('Failed to add Firm')
    }
    const mango = data.firmId;
    const vendorRestuarant = data.vendorFirmName
  } catch (error) {
    console.error("failed to add Firm")
  }finally{
    setLoading(false)
  }
}


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  return (
    <div className="flex justify-center items-center w-full lg:h-[80vh] min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg" >
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Firm</h2>
        <form onSubmit={handleFirmSubmit}  className="space-y-3">
          <div>
            <label className="block text-gray-700">Firm Name</label>
            <input
              type="text"
              name="firmname"
              id="firmname"
              value={firmname}
              onChange={(e)=>setFirmName(e.target.value)}
              className="w-full p-1.5 border border-gray-300 rounded mt-1"
              required

              
            />
          </div>
          <div>
            <label className="block text-gray-700">Area</label>
            <input
              type="text"
              name="area"
               id="area"
              value={area}
              onChange={(e)=>setArea(e.target.value)}
              className="w-full p-1.5 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Category</label>
            <div className="flex space-x-4">
              <label className="flex items-center">VEG
                <input
                   name="category"
                  type="checkbox" 
                  checked ={category.includes('veg')}
                  value="veg" onChange={handleCategoryChange}
                  className="mr-2 w-5 h-5"
                />
                
              </label>
              <label className="flex items-center">NON-VEG
                <input
                 name="category"
                  type="checkbox"
                  checked ={category.includes('non-veg')}
                  value="non-veg" onChange={handleCategoryChange}
                  className="mr-2 w-5 h-5"
                />
                
              </label>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Region</label>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center">
                <input
                  name="region"
                  type="checkbox"
                  value="south-indian"
                  checked ={region.includes('south-indian')}
                  onChange={handleRegionChange}
                  className="mr-2 w-5 h-5"
                />
                South Indian
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox" name="region"
                  value="north-indian"
                  checked ={region.includes('north-indian')}
                  onChange={handleRegionChange}
                  className="mr-2 w-5 h-5"
                />
                North Indian
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox" name="region"
                  value="chinese"
                  checked ={region.includes('chinese')}
                  onChange={handleRegionChange}
                  className="mr-2 w-5 h-5"
                />
                Chinese
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox" name="region"
                  value="bakery"
                  checked ={region.includes('bakery')}
                  onChange={handleRegionChange}
                  className="mr-2 w-5 h-5"
                />
                Bakery
              </label>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Offer</label>
            <input
              type="text"
              name="offer"
              id="offer"
              value={offer}
              onChange={(e)=>setOffer(e.target.value)}
              className="w-full p-1.5 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label htmlFor="firmImage" className="block text-gray-700">Image</label>
            <input
              type="file"
              id="firmImage"
              onChange={handleImageUpload}
              className="w-full p-1.5 border border-gray-300 rounded mt-1"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Add Firm
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFirm;


// import React, { useState } from "react";
// import { API_URL } from '../../data/apiPath';
// import { ThreeCircles } from 'react-loader-spinner';

// const AddFirm = () => {
//   const [firmname, setFirmName] = useState("");
//   const [area, setArea] = useState("");
//   const [category, setCategory] = useState([]);
//   const [region, setRegion] = useState([]);
//   const [offer, setOffer] = useState("");
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleCategoryChange = (event) => {
//     const value = event.target.value;
//     setCategory(category.includes(value) 
//       ? category.filter(item => item !== value) 
//       : [...category, value]
//     );
//   };

//   const handleRegionChange = (event) => {
//     const value = event.target.value;
//     setRegion(region.includes(value) 
//       ? region.filter(item => item !== value) 
//       : [...region, value]
//     );
//   };

//   const handleImageUpload = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleFirmSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const loginToken = localStorage.getItem('loginToken');
//       if (!loginToken) {
//         alert("Token error: Please log in again.");
//         return;
//       }

//       const formData = new FormData();
//       formData.append('firmname', firmname);
//       formData.append('area', area);
//       formData.append('offer', offer);
//       formData.append('image', file);

//       category.forEach(value => formData.append('category', value));
//       region.forEach(value => formData.append('region', value));

//       const response = await fetch(`${API_URL}/firm/add-firm`, {
//         method: 'POST',
//         headers: { 'token': loginToken },
//         body: formData
//       });

//       // Debug: Check if the response is not JSON
//       const textResponse = await response.text();
//       console.log("Raw Server Response:", textResponse);

//       let data;
//       try {
//         data = JSON.parse(textResponse); // Try parsing JSON
//       } catch (error) {
//         console.error("Error parsing JSON:", error);
//         alert("Unexpected server response. Please check the API.");
//         return;
//       }

//       console.log("Parsed Data:", data);

//       if (response.ok) {
//         alert("Firm added successfully 🎉");
//         setFirmName("");
//         setArea("");
//         setCategory([]);
//         setRegion([]);
//         setOffer("");
//         setFile(null);
//       } else if (data.message === "vendor can have only one firm") {
//         alert("Firm Exists 🥗. Only 1 firm can be added.");
//       } else {
//         alert("Failed to add Firm ❌");
//       }
//     } catch (error) {
//       console.error("Request failed:", error);
//       alert("An error occurred while adding the firm.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center w-full h-[88vh] min-h-screen bg-gray-200">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Add Firm</h2>
//         <form onSubmit={handleFirmSubmit} className="space-y-3">
//           <div>
//             <label className="block text-gray-700">Firm Name</label>
//             <input
//               type="text"
//               name="firmname"
//               value={firmname}
//               onChange={(e) => setFirmName(e.target.value)}
//               className="w-full p-1.5 border border-gray-300 rounded mt-1"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Area</label>
//             <input
//               type="text"
//               name="area"
//               value={area}
//               onChange={(e) => setArea(e.target.value)}
//               className="w-full p-1.5 border border-gray-300 rounded mt-1"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Category</label>
//             <div className="flex space-x-4">
//               {["veg", "non-veg"].map((cat) => (
//                 <label key={cat} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     value={cat}
//                     checked={category.includes(cat)}
//                     onChange={handleCategoryChange}
//                     className="mr-2 w-5 h-5"
//                   />
//                   {cat.toUpperCase()}
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div>
//             <label className="block text-gray-700">Region</label>
//             <div className="grid grid-cols-2 gap-2">
//               {["south-indian", "north-indian", "chinese", "bakery"].map((reg) => (
//                 <label key={reg} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     value={reg}
//                     checked={region.includes(reg)}
//                     onChange={handleRegionChange}
//                     className="mr-2 w-5 h-5"
//                   />
//                   {reg.replace("-", " ").toUpperCase()}
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div>
//             <label className="block text-gray-700">Offer</label>
//             <input
//               type="text"
//               name="offer"
//               value={offer}
//               onChange={(e) => setOffer(e.target.value)}
//               className="w-full p-1.5 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Image</label>
//             <input
//               type="file"
//               onChange={handleImageUpload}
//               className="w-full p-1.5 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//             disabled={loading}
//           >
//             {loading ? "Adding Firm..." : "Add Firm"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddFirm;

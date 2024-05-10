// import "../App.css"

// const Home = () => {
//   return (
//     <div className="div">
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-10 py-5 text-4xl">
//           <h1>
//             Get Where You Need to Go, <br />
//             Safely and Affordably
//           </h1>
//           <br />
//           <p className="text-2xl text-black">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
//             veritatis perspiciatis sapiente. Quis, dicta. Veritatis corrupti
//             mollitia facere{" "}
//           </p>
//           <div className="flex flex-row gap-4">
//             <button className="text-white bg-green-500 text-xl mt-4 px-6 py-3 rounded-lg">
//               Book Your Ride
//             </button>
//             <button className="text-white text-xl mt-4 px-6 py-3 border border-white rounded-lg hover:bg-green-500 hover:border-green-500">
//               Learn More
//             </button>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import "../App.css";

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('/car1.jpg')` }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-10 py-5 text-center">
        <h1 className="text-4xl lg:text-6xl">
          Get Where You Need to Go, <br />
          Safely and Affordably
        </h1>
        <br />
        <p className="text-lg lg:text-2xl text-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          veritatis perspiciatis sapiente. Quis, dicta. Veritatis corrupti
          mollitia facere{" "}
        </p>
        <div className="flex flex-col lg:flex-row gap-4 justify-center mt-8">
          <button className="text-white bg-green-500 text-xl px-6 py-3 rounded-lg">
            Book Your Ride
          </button>
          <button className="text-white text-xl px-6 py-3 border border-white rounded-lg hover:bg-green-500 hover:border-green-500 mt-4 lg:mt-0">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;


import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Cards() {
//     return (
//         <>
//             <div className="cards">
//             <div className="card" style={{ width: "18rem" }}>
//         <img
//           src="https://via.placeholder.com/150"
//           className="card-img-top"
//           alt="Card image"
//         />
//         <div className="card-body">
//           <h5 className="card-title">Card Title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//       <div className="card" style={{ width: "18rem" }}>
//         <img
//           src="https://via.placeholder.com/150"
//           className="card-img-top"
//           alt="Card image"
//         />
//         <div className="card-body">
//           <h5 className="card-title">Card Title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//       <div className="card" style={{ width: "18rem" }}>
//         <img
//           src="https://via.placeholder.com/150"
//           className="card-img-top"
//           alt="Card image"
//         />
//         <div className="card-body">
//           <h5 className="card-title">Card Title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//             </div>
//          </>
      
//     );
//   }
  

class MenuItems extends React.Component{
  render(){
    return(
      <>
   <div className="cards">
      <div className="card" style={{ width: "18rem" }}>
       <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="Card image"
        />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="Card image"
        />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="Card image"
        />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
         </>
    )
  }
}


export default MenuItems;
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NameCard({image , name , size,linktotheProduct ,id }) {
    return (
      <>
              {   
                    !linktotheProduct&&       <div className="smallcard">

                    {size=="medium" && <img src={image} alt="" width={87} />}
                    {size=="small" && <img src={image} alt="" width={57} />}
                    <h4>{name}</h4>

                    </div>
              }


              {

                  linktotheProduct && 
                  <Link 
                    to={`/description/${id}`} 
                    style={{textDecoration:"none"}} >
                    <div className="smallcard">
                    {size=="medium" && <img src={image} alt="" width={87} />}
                    {size=="small" && <img src={image} alt="" width={57} />}
                    <h4>{name}</h4>

                  </div>

                </Link>

          }
      </>

     
     
     );

     
  }



export default NameCard
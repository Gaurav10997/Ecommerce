import Carousel from "react-multi-carousel";
import "./carasoul.css"
import { Image } from "semantic-ui-react";
import { API_URL } from "../API.JSX";
import { useEffect ,useState } from "react";
import 'react-multi-carousel/lib/styles.css';
import Homepagecard from "../cards/Homepagecard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 0
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
    
  }
};
const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];


function MiniCarasoul({tag}) {

  const [deals , setDeals] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    fetch(`${API_URL}/api/v1/products/tag/${tag}`)
    .then(res=>res.json())
    .then(data=>setDeals([...deals,data]))
    .then(setIsLoaded(true))
  },[])

const dailyDealsMapArray = deals[0]?.data?.product


const dailyDealsMap = deals[0]?.data?.product.map((deal)=>{
  return (
      <Homepagecard
          key={deal._id}
          image={deal.images[0]}
          mainfeature="60 Hours PlayBack"
          name={deal.name}
          price={deal.price}
      />
    
  )
})





  return (
    <Carousel className="min__carasoul"
      ssr={true}
      partialVisible={true}
      deviceType='desktop'
      itemClass="image-item"
      responsive={responsive}
    >

       { isLoaded &&  dailyDealsMap} 
       {/* <Homepagecard 
       key={"1"}
       label={pro.label} 
       image={pro.image}   
       mainfeature={pro.mainfeature}
       name={pro.name}
       price={pro.price}
       avaiableColors={pro.avaiableColors}
       
  ></Homepagecard> */}


     { !isLoaded &&  <Homepagecard  ></Homepagecard> }
      {/*<Homepagecard></Homepagecard>
      <Homepagecard></Homepagecard>
      <Homepagecard></Homepagecard>
      <Homepagecard></Homepagecard>
      <Homepagecard></Homepagecard>
      <Homepagecard></Homepagecard> */}


    </Carousel>
  )
}

export default MiniCarasoul
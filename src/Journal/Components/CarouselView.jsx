import Carousel from "react-material-ui-carousel";
import { ItemView } from "./ItemView";

export const CarouselView = ({text}) => {
  const items = [
    [
      {
        img: "/src/motosImg/picography-classic-ducati-motorcycle-small.jpg",
        title: "Moto gilera 150 vc",
        description: "3 cuotas de $5000",
      },
      {
        img: "/src/motosImg/picography-vintage-yamaha-motor-scooter-small.jpg",
        title: "Motomel 150 s2",
        description: "3 cuotas de $5000",
      },
      {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
        description: "3 cuotas de $5000",
      },
      {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
        description: "3 cuotas de $5000",
      },
    ],

    [
      {
        img: "/src/motosImg/pexels-pixabay-39693.jpg",
        title: "Mushrooms",
        description: "3 cuotas de $5000",
      },
      {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Tomato basil",
        description: "3 cuotas de $5000",
      },
      {
        img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
        title: "Sea star",
        description: "3 cuotas de $5000",
      },
      {
        img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
        title: "Bike",
        description: "3 cuotas de $5000",
      },
    ],
  ];

  return (
    <>
      <div style={{ display: "flex", right: "50px", textAlign:'letf' }}>
        <h2 style={{ display: "flex", right: "100px", bottom: "100px", textAlign:'letf' }}>{text}</h2>
      </div>
      <Carousel autoPlay sx={{ marginBlockEnd: 2, lineHeight: 0 }} animation="slide" cycleNavigation>
        {items.map((item, i) => (
          <ItemView key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

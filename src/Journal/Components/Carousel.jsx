import Carousel from "react-material-ui-carousel";
import { Item } from "./Item";

export const Carousell = () => {
  const items = [
    {
      img: "src/motosImg/stretched-1366-768-577208.jpg",
      title: "Harley-Davidson",
    },
    {
      img: "src/motosImg/picography-vintage-yamaha-motor-scooter-small.jpg",
      title: "Gilera 150 cv",
    },
    {
      img: "src/motosImg/pexels-daniel-217872.jpg",
      title: "Harley-Davidson",
    },
    {
      img: "src/motosImg/cropped-3840-2160-598475.jpg",
      title: "Harley-Davidson",
    },
    {
      img: "src/motosImg/stretched-5120-2880-541771.jpg",
      title: "Harley-Davidson",
    },
    // {
    //   img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    //   title: "Honey",
    // },
    // {
    //   img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    //   title: "Basketball",
    // },
    // {
    //   img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    //   title: "Fern",
    // },
    // {
    //   img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    //   title: "Mushrooms",
    // },
    // {
    //   img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    //   title: "Tomato basil",
    // },
    // {
    //   img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    //   title: "Sea star",
    // },
    // {
    //   img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    //   title: "Bike",
    // },
  ];

  return (
    <Carousel  autoPlay sx={{ marginBlockEnd: 2, lineHeight: 0 }}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

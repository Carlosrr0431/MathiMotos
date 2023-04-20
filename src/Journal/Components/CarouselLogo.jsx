import Carousel from "react-material-ui-carousel";
import { ViewLogo } from "./ViewLogo";

export const CarouselLogo = () => {
  const item = [
    {
      title: "marca",
      img: "/src/motosImg/4.png",
    },
    {
      title: "marca2",
      img: "/src/motosImg/6.png",
    },
  ];

  return (
    <Carousel
      autoPlay
      navButtonsProps={{
        style: {
         display: 'none'
        },
      }}
      sx={{ marginBlockEnd: 2, lineHeight: 0 }}
      animation="fade"
      indicatorIconButtonProps={{
        style: {
          display: "none",
        },
      }}

      // duration={100}
    >
      {item.map((i, ind) => {
        return <ViewLogo item={i} key={ind} />;
      })}
    </Carousel>
  );
};

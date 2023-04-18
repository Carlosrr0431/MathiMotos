import Carousel from "react-material-ui-carousel";
import { ViewLogo } from "./ViewLogo";

export const CarouselLogo = () => {
  return (
    <Carousel
      autoPlay
      sx={{ marginBlockEnd: 2, lineHeight: 0 }}
      navButtonsProps={{
        style: {
          bottom: 0,
          top: "unset",
        },
      }}
      fullHeightHover
      cycleNavigation
      animation="slide"
      duration={100}
      height={200}
    >
      <ViewLogo />
    </Carousel>
  );
};

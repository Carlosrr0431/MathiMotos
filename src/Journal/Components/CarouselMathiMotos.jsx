import Carousel from "react-material-ui-carousel";
import { ItemViewMoto } from "./ItemViewMoto";

export const CarouselMathiMotos = () => {
  return (
    <Carousel autoPlay sx={{ marginBlockEnd: 1, lineHeight: 0, marginBottom: -20, display: "flex", maxWidth: 1000 }}>
      <ItemViewMoto></ItemViewMoto>
    </Carousel>
  );
};

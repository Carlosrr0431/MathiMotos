import { JournalLayout } from "../Layout/JournalLayout";
import { Carousell } from "../Components/Carousel";
import { CarouselView } from "../Components/CarouselView";
import { SimplePaper } from "../Components/SimplePaper";
import { CarouselMathiMotos } from "../Components/CarouselMathiMotos";
import { CarouselLogo } from "../Components/CarouselLogo";
// import { NoteView, NothingSelectedView } from '../View'

export const JournalPage = () => {
  return (
    <>
     
        <Carousell/>

        {/* {boton ? <NothingSelectedView /> : <NoteView />} */}

        <SimplePaper />

        <CarouselView text={"Motos"} />

        {/* <CarouselMathiMotos/> */}

        <CarouselView text={"Repuestos"} />

        <CarouselLogo/>
    
    </>
  );
};

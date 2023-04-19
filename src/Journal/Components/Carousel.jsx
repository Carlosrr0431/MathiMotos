import Carousel from "react-material-ui-carousel";
import { Item } from "./Item";
import { Box, CardMedia, Grid, ImageList, ImageListItem } from "@mui/material";

export const Carousell = () => {
  const items = [
    {
      img: "/src/motosImg/1.png",
      title: "Harley-Davidson",
    },
    {
      img: "/src/motosImg/2.png",
      title: "Gilera 150 cv",
    },
    {
      img: "/src/motosImg/MATHIMOTOS.png",
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
    <Carousel
      // indicatorIconButtonProps={{
      //   style: {
      //     padding: "10px", // 1
      //     color: "blue", // 3
      //   },
      // }}
      autoPlay
      sx={
        {
          // marginBlockEnd: 0,
          paddingLeft: 0,
          paddingRight: 0
          // lineHeight: 0,
          // width: "100%",
          // display: "contents",
          // width: "100%",
        }
      }
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
      {/* {items.map((item, i) => (
        <Item key={i} item={item} />
      ))} */}

      {/* {items.map((item) => (
          <ImageListItem key={item.img} sx={{width: 1200, height: 100}}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
        ))} */}

      {/* {items.map((item) => (
        <Box >
          <ImageListItem key={item.img} sx={{}} >
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              loading="lazy"
              style={{  width: "75vh", height: '500'
            }}
            />
          </ImageListItem>
        </Box>
      ))} */}

      {/* <Box
        component="img"
        sx={{
          height: 480,
          width: 1360,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        // src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=1050&dpr=2"
        src={`${items[0].img}`}
      /> */}

      {/* {items.map((item) => (
        <CardMedia
          component="img"
          sx={{
            height: 500,
            width: 2000,
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          src={`${item.img}`}
        />
      ))} */}
      {/* <Box  >
        {items.map((item) => (
          <img
            src={`${item.img}`}
            
            loading="lazy"
            style={{height: '120vh'}}
          />
        ))}
      </Box> */}
    </Carousel>
  );
};

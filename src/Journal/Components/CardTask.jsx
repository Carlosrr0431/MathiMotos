import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const CardTask = ({ post }) => {

  return (
    <>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          m: 0,
          px: 0,
          justifyContent: "center",
          maxHeight: "100%",
          marginLeft: 0,
          marginRight: 0
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="100"
            image={`${post.img}?w=164&h=164&fit=crop&auto=format`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {post.description}
            </Typography>
          </CardContent>
          {/* <Button sx={{ position: 'relative', right: -80, bottom: 15}}>Mas info</Button> */}
        </CardActionArea>
        {/* <CardActions>
          <Button sx={{ position: 'relative', right: -80, bottom: -5, height: 30, justifyContent: "center"}} > Ver mas...</Button>
        </CardActions> */}
      </Card>
    </>
  );
};

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
// ];

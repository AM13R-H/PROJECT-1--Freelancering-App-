import { ColorRing } from "react-loader-spinner";

function Loader({width= "6em" , height= "6em"}) {
  return (
    <ColorRing
      visible={true}
      height={height}
      width={width}
      wrapperStyle={{
         width: "10em",
         display: "flex",
         justifyContent: "center",
         alignItem: "center"
         //////! 
      }}
      colors={["rgb(var(--color-primary-900))" , "rgb(var(--color-primary-900))" , "rgb(var(--color-primary-900))" , "rgb(var(--color-primary-900))" , "rgb(var(--color-primary-900))" , "rgb(var(--color-primary-900))"]}
    />
  );
}


export default Loader;
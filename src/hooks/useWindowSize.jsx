import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [widthSize, setWidthSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidthSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return widthSize;
};

export default useWindowSize;

/* 

This code is a custom React hook that allows the user to track 
the window size of the browser. The useWindowSize() function uses 
the useEffect() and useState() hooks from React to set an initial 
widthSize state and then add an event listener for when the window is resized. 

The handleResize() function is called when the window is resized, 
which updates the widthSize state with the new window size. 

The return statement in useEffect() removes the event listener when the component unmounts. 

Finally, this hook is exported so it can be used in other components.


*/

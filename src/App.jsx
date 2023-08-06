import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        // if (!response.ok) {
        //   setIsLoading(false);
        //   return;
        // }
        const tours = await response.json();
        setTours(tours);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // TO DO:Refresh button
  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
};
export default App;

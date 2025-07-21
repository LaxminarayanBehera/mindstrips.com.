import useSmoothScroll from "./hooks/useSmoothScroll";
import MyApp from "./pages/MyApp";

const App = () => {
  useSmoothScroll({ autoInit: true });
  return (
    <>
      <MyApp />
    </>
  );
};

export default App;

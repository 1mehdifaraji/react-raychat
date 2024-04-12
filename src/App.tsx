import { FC, useEffect } from "react";
import { useRaychat } from "./lib";

const App: FC = () => {
  const { addRaychatScript } = useRaychat({
    id: "raychat",
    url: "https://widget-react.raychat.io/install/widget.js",
  });

  useEffect(() => addRaychatScript(), []);

  return (
    <h1 className="text-3xl font-bold text-red-600 underline">Hello world!</h1>
  );
};

export default App;

import { FC } from "react";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <h1 className="text-3xl font-bold text-red-600 underline">Hello world!</h1>
  );
};

export default App;

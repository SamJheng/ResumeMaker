import {
  createBrowserRouter,
} from "react-router-dom";
import { Resume } from "../components/resume";
import Editor from "../components/editor";
export const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Editor>
      <Resume></Resume>
    </Editor>,
  },
  {
    path: "v1",
    element: <Resume></Resume>,
  },
]);

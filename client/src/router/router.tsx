import {
  createBrowserRouter,
} from "react-router-dom";
import { Resume } from "../components/resume";
import Editor from "../components/editor";
import ResumeEN from "../components/resumeEn";
import ResumeCH from "../components/resumeCh";
export const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Editor>
      <Resume></Resume>
    </Editor>,
  },
  {
    path: "ch",
    element: <ResumeCH></ResumeCH>,
  },
  {
    path: "en",
    element: <ResumeEN></ResumeEN>,
  },
]);

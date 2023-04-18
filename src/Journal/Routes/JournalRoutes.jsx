import { Navigate, Route, Routes } from "react-router-dom";
import { JournalPage } from "../Pages/JournalPage";
import { Jamaha } from "../../pages/Jamaha";
import { JournalLayout } from "../Layout/JournalLayout";

export const JournalRoutes = () => {
  return (
    <>
      <JournalLayout>

      <div className="container">
        <Routes>
          <Route path="/" element={<JournalPage />} />

          <Route path="/*" element={<Navigate to="/" />} />

          <Route path="/motos/jamaha" element={<Jamaha/>} />

        </Routes>
      </div>
      
      </JournalLayout>
    </>
  );
};

import CenterFilterProvider from "./CenterFilterProvider";
import DataProvider  from "./DataProvider";
import DoctorFilterProvider from "./DoctorFilterProvider";
import QuizFilterProvider from "./QuizFilterProvider";
import AuthProvider from "./AuthProvider.jsx";
import { AdminDataProvider } from "./AdminProvider.jsx";
import { ModalProvider } from "./ModalProvider.jsx";

function MainProvider({ children }) {
  return (
    <CenterFilterProvider>
      <DataProvider>
        <DoctorFilterProvider>
          <QuizFilterProvider>
            <AuthProvider>
              <AdminDataProvider>
                <ModalProvider>
              {children}
              </ModalProvider>
              </AdminDataProvider>
              </AuthProvider>
          </QuizFilterProvider>
        </DoctorFilterProvider>
      </DataProvider>
    </CenterFilterProvider>
  );
}

export default MainProvider;

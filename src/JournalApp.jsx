import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";
import { PostProvider } from "./context/PostContext";

import axios from 'axios';

axios.defaults.baseURL = "https://deploy-production-5e67.up.railway.app/";

export const JournalApp = () => {
  return (
    <PostProvider>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </PostProvider>
  );
};

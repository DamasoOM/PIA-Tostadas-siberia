//NextJS
import type { Metadata } from "next";
import sharedMetadata from "@/app/_configuration/sharedMetadata";
export const metadata: Metadata = {
  ...sharedMetadata,
};


//ReactJS
import type { ReactNode } from 'react';


//Styles
import './global.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';


//Types
type RootLayoutProps = {
  readonly children: ReactNode;
};


//Main component content
const RootLayout = ({children}: RootLayoutProps): JSX.Element => {
  //Main component render
  return (
    <html lang='es' >
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme} >
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};


export default RootLayout; //Export main component

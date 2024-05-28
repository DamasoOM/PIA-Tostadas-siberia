//NextJS
import type { Metadata } from "next";
import sharedMetadata from "@/app/_configuration/sharedMetadata";
export const metadata: Metadata = {
  ...sharedMetadata,
};


//ReactJS
import type { ReactNode } from 'react';


//Styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: [
    'latin',
  ],
  weight: [
    '400',
    '500',
    '700'
  ],
});


//Types
type LayoutProps = {
  readonly children: ReactNode;
};


//Main component content
const Layout = ({children}: LayoutProps): JSX.Element => {
  //Main component render
  return (
    <html lang='es' >
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
};


export default Layout; //Export main component

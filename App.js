import React from "react";
import 'antd/dist/reset.css';
import Head from "./Component/Header";
import { Layout } from 'antd';
import CustomFooter from "./Component/Footer";
import CustomContent from "./Component/Content";

function App() {
  return (
    <><Layout>
    <Head/>
    <CustomContent/>
    <CustomFooter/>
  </Layout></>
  );
}

export default App;

import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ConvertFromPDF from "@/components/cards/covertFromPDF";
import ConvertToPDF from "@/components/cards/convertToPDF";
import Bookmarks from "@/components/cards/bookmarks";
import Navigation from "@/components/navigationBar/navigation";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Navigation />
      <Bookmarks />
      <ConvertFromPDF />
      <ConvertToPDF />
      <Footer />
    </div>
  );
};

export default Home;

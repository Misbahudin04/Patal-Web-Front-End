import React from "react";
import Join from "./join/join";
import Event from "./event/event";
import Visi from "./visi/visi";
import Article from "./article/article";
import Partnership from "./partnership/partnership";
import Misi from "./visi/misi";
import Events from "./events/events";
import Example from "./navbar/navbar";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Banner from "./banner/banner";
import Footer from "./footer/footer";

 
export default function Home() {
  return <div>
    <main>
          <Example/>
          <Banner/>
          <Join/>
          <Events/>
          <Event/>
          <Visi judul="Visi" konten1="Menciptakan SDM khususnya masyarakat sumatera selatan untuk memiliki kemampuan daya saing yang unggul dibidang digital"/>
          <Visi judul="Misi" konten1={<Misi/>}/>
          <Partnership />
          <Footer/>
        

    </main>
    </div>
}

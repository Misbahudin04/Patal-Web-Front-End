import React from "react"
import "./join.css"


class Join extends React.Component{
    render(){
        return <div id="join" class="warna">
            <div class="container-join">              
                <div class="box">
                    <div className="join">
                    <h1>Bersiap bergabung ke Patal?</h1>
                    <p>Klik tombol daftar sekarang untuk mendaftarkan diri anda terlebih dahulu!</p>  
                    <div class="boxfit"><a href="https://google.com"><button>Daftar Sekarang</button></a></div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Join;
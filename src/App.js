import React, { Component } from "react";
import Navigate from "./Navigate";
import Kategori from "./Kategori";
import UrunListesi from "./UrunListesi";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  state = { seciliKategori: "",urunler:[] ,sepet:[]};
  kategoriDegistir = (kategori) => {
    this.setState({ seciliKategori: kategori.categoryName });
  };

  urunGetir(){
	  fetch("http://localhost:3000/products")
	  .then(rsponse => rsponse.json())
	  .then(data => this.setState({urunler:data}))

  }
  componentDidMount(){
	  this.urunGetir();
  }
  sepetEkle(urun){
    alert(urun.productName) 
   }
  render() {
    let bilgiUrunListesi = { baslik: "Ürün Listesi" };
    let bilgiKategori = { baslik: "Kategori", ilaveBilgi: "İlave Bilgi" };
    return (
      <div>
        <Container>
          <Row>
            <Navigate sepet={this.state.sepet} />
          </Row>
          <Row>
            <Col xs="5">
              <Kategori
                seciliKategori={this.state.seciliKategori}
                kategoriDegistir={this.kategoriDegistir}
                bilgiKategori={bilgiKategori}
              />
            </Col>
            <Col xs="7">
              <UrunListesi
              sepetEkle={this.sepetEkle}
              urunler={this.state.urunler}
			  seciliKategori={this.state.seciliKategori}
			   bilgiUrunListesi={bilgiUrunListesi} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

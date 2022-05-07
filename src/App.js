import React, { Component } from "react";
import Navigate from "./Navigate";
import Kategori from "./Kategori";
import UrunListesi from "./UrunListesi";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";

class App extends Component {
  state = { seciliKategori: "", urunler: [], sepet: [] };
  kategoriDegistir = (kategori) => {
    this.setState({ seciliKategori: kategori.categoryName });
  };

  urunGetir() {
    fetch("http://localhost:8000/products")
      .then((rsponse) => rsponse.json())
      .then((data) => this.setState({ urunler: data }));
  }
  componentDidMount() {
    this.urunGetir();
  }
  sepetEkle = (urun) => {
    let yeniUrun = this.state.sepet;
    var urunEklendi = yeniUrun.find((s) => s.urun.id === urun.id);
    if (urunEklendi) {
      urunEklendi.quantity += 1;
    } else {
      yeniUrun.push({ urun: urun, quantity: 1 });
    }
    this.setState({ sepet: yeniUrun });
    alertify.success( urun.productName + " sepette eklendi")
    
  };
  sepettenCikar = (urun) => {
    let kalanUrunler = this.state.sepet.filter(u=> u.urun.id !== urun.id);
    this.setState({sepet:kalanUrunler})
    alertify.error( urun.productName + " sepetten çıkarıldı")
  }
  render() {
    let bilgiUrunListesi = { baslik: "Ürün Listesi" };
    let bilgiKategori = { baslik: "Kategori", ilaveBilgi: "İlave Bilgi" };
    return (
      <div>
        <Container>
          <Row>
            <Navigate sepettenCikar={this.sepettenCikar} sepet={this.state.sepet} />
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
                bilgiUrunListesi={bilgiUrunListesi}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

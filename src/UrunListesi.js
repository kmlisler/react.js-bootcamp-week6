import React, { Component } from "react";
import {
  
  Table,Button
} from "reactstrap";

class UrunListesi extends Component {
 
  render() {
    return (
      <div>
        <h3>{this.props.bilgiUrunListesi.baslik}</h3>
        <div>
          <h4>{this.props.seciliKategori}</h4>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.urunler.map(urun => (
              <tr key={urun.id}>
                <td>{urun.productName}</td>
                <td>{urun.unitPrice}</td>
                <td>{urun.unitsInStock}</td>
                <td>{urun.quantityPerUnit}</td>
                <td><Button onClick={() => this.sepetEkle(urun)} color="primary"> Ekle </Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UrunListesi;

import React, { Component } from "react";
import { Table,Button } from "reactstrap";

export default class SepetList extends Component {
  sepetContent() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Ürün Adı</th>
            <th>Birim Fiyat</th>
            <th>Units in Stock</th>
            <th>Adet</th>
          </tr>
        </thead>
        <tbody>
        {console.log(this.props.sepet)}
          {(this.props.sepet).map((sepetItem) => (
            <tr key={sepetItem.urun.id}>
              <td>{sepetItem.urun.id}</td>
              <td>{sepetItem.urun.categoryId}</td>
              <td>{sepetItem.urun.productName}</td>
              <td>{sepetItem.urun.unitPrice}</td>
              <td>{sepetItem.urun.unitsInStock}</td>
              <td>{sepetItem.quantity}</td>
              <Button color="danger" onClick={() => this.props.sepettenCikar(sepetItem.urun)}>Sil</Button>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    return <div>{this.sepetContent()}</div>;
  }
}

function ItemDetail({ lista }) {
  return (
    <>
      <div>
        <div>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={lista.imagen} className="img-fluid rounded-start"></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title tituloDetalle">{lista.nombre}</h5>
                <p className="card-text descripcionDetalle">{lista.detalle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ItemDetail;

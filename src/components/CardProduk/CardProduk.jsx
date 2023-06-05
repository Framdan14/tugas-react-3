import './CardProduk.css'

function CardProduk(props) {
  return (
    <div style={{
      height: 350,
      width: 250,
      background: "red",
      color: "black",
      borderRadius: 13,
      marginBottom: 100,
      marginTop: 40,
      justifyContent: "center",
      textAlign: "center"
      }} onClick={props.handleClick}>
      <img src={props.imageProduk} alt={props.namaProduk} style={{
        width: 150,
        height: 200,
      }}/>
      <h2>{props.namaProduk}</h2>
      <p>{props.hargaProduk}</p>
    </div>
  )
}

export default CardProduk

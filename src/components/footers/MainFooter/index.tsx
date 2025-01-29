import "./styles.css"

export default function MainFooter() {
  return(
    <div className="main-footer">
      <div className="main-footer__content">
        <h3>TESTAR O PREMIUM DE GRAÇA</h3>
        <p>
          Inscreva-se para ouvir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.
        </p>
      </div>
      <button className="main-footer__button" type="button">
        Inscreva-se grátis
      </button>
    </div>
  )
}
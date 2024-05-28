import Layout from "../components/Layout"

const Contact = () => {
    return(
        <Layout>
            <main>
                <div class="contact-section">
                    <div class="contact-info">
                        <p>¿Tienes alguna pregunta, sugerencia o simplemente deseas conocer más sobre nuestras deliciosas tostadas?</p>
                        <p>Estamos aquí para ayudarte. ¡No dudes en llamarnos al <span class="phone-number">555-1234</span>!</p>
                    </div>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.4095422108785!2d-100.31568502405766!3d25.72396681016235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629452551ea79f%3A0x66e03550ec5730cb!2sFacultad%20de%20Ingenier%C3%ADa%20Mec%C3%A1nica%20y%20El%C3%A9ctrica!5e0!3m2!1ses!2smx!4v1716496375009!5m2!1ses!2smx" width="600" height="450" style={{border: 0}} allowFullScreenullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Contact
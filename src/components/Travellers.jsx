function Travellers() {
    return(
        <section className="section__container travellers__container">
            <h2 className="section__header">Best travellers of the month</h2>
            <div className="travellers__grid">
                <div className="travellers__card">
                    <img src="assets/traveller-1.jpg" alt="traveller" />
                    <div className="travellers__card__content">
                        <img src="assets/client-1.jpg" alt="client" />
                        <h4>Emily Johnson</h4>
                        <p>Dubai</p>
                    </div>
                </div>

                <div className="travellers__card">
                    <img src="assets/traveller-2.jpg" alt="traveller" />
                    <div className="travellers__card__content">
                        <img src="assets/client-2.jpg" alt="client" />
                        <h4>David Smith</h4>
                        <p>Paris</p>
                    </div>
                </div>

                <div className="travellers__card">
                    <img src="assets/traveller-3.jpg" alt="traveller" />
                    <div className="travellers__card__content">
                        <img src="assets/client-3.jpg" alt="client" />
                        <h4>Olivia Brown</h4>
                        <p>Singapore</p>
                    </div>
                </div>

                <div className="travellers__card">
                    <img src="assets/traveller-4.jpg" alt="traveller" />
                    <div className="travellers__card__content">
                        <img src="assets/client-4.jpg" alt="client" />
                        <h4>Daniel Taylor</h4>
                        <p>Malaysia</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Travellers;
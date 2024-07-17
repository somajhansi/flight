function Booking() {
    return(
        <section className="section__container booking__container">
            <div className="booking__nav">
                <span>Economy className</span>
                <span>Business className</span>
                <span>First className</span>
            </div>
            <form>
                <div className="form__group">
                    <span><i className="ri-map-pin-line"></i></span>
                    <div className="input__content">
                        <div className="input__group">
                            <input type="text" />
                            <label>Location</label>
                        </div>
                        <p>Where are you goung?</p>
                    </div>
                </div>

                <div className="form__group">
                    <span><i className="ri-user-3-line"></i></span>
                    <div className="input__content">
                        <div className="input__group">
                            <input type="number" />
                            <label>Travellers</label>
                        </div>
                        <p>Add guests</p>
                    </div>
                </div>

                <div className="form__group">
                    <span><i className="ri-calendar-line"></i></span>
                    <div className="input__content">
                        <div className="input__group">
                            <input type="text" />
                            <label>Departure</label>
                        </div>
                        <p>Add date</p>
                    </div>
                </div>

                <div className="form__group">
                    <span><i className="ri-calendar-line"></i></span>
                    <div className="input__content">
                        <div className="input__group">
                            <input type="text" />
                            <label>Return</label>
                        </div>
                        <p>Add date</p>
                    </div>
                </div>
                
                <button className="btn"><i className="ri-search-line"></i></button>
            </form>
        </section>
    )
}

export default Booking;
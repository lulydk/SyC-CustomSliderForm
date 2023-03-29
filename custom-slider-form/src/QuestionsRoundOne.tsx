export function QuestionsRoundOne() {
    return (
        <>
            <label className="form-label mt-4">
                <b>1. Sentí que estaba en otro mundo maravilloso.</b><br/>
                <small className="translate">I felt that I was in a wonderful other world.</small>
            </label>
            <div className="d-flex row align-items-center">
                <div className="col col-1 text-center">
                    <small>No, no más de lo usual</small>
                </div>
                <div className="col">
                    <input type="range" className="form-range" id="customRange1"/>
                </div>
                <div className="col col-1 text-center">
                    <small>Sí, mucho más de lo usual</small>
                </div>
            </div>
            
            <label className="form-label mt-4">
                <b>2. Mis pensamientos y acciones se ralentizaron.</b><br/>
                <small className="translate">My thoughts and actions were slowed down.</small>
            </label>
            <div className="d-flex row align-items-center">
                <div className="col col-1 text-center">
                    <small>No, no más de lo usual</small>
                </div>
                <div className="col">
                    <input type="range" className="form-range" id="customRange2"/>
                </div>
                <div className="col col-1 text-center">
                    <small>Sí, mucho más de lo usual</small>
                </div>
            </div>

            <label className="form-label mt-4">
                <b>3. Las sensaciones corporales eran muy agradables.</b><br/>
                <small className="translate">Bodily sensations were very enjoyable.</small>
            </label>
            <div className="d-flex row align-items-center">
                <div className="col col-1 text-center">
                    <small>No, no más de lo usual</small>
                </div>
                <div className="col">
                    <input type="range" className="form-range" id="customRange3"/>
                </div>
                <div className="col col-1 text-center">
                    <small>Sí, mucho más de lo usual</small>
                </div>
            </div>
        </>
    )
}
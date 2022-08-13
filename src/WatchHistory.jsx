import React, { useContext } from "react";
import { projectContext } from "./ContextManager";
function WatchHistory() {
    const usingContext = useContext(projectContext);
    return (
        <nav className="navbar navbar-dark historyClass">
            <div className="container-fluid">
                <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon bg-black"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header bg-dark" style={{ borderBottom: "2px solid white" }}>
                        <h5 className="offcanvas-title text-white" id="offcanvasDarkNavbarLabel">History</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body bg-dark">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {usingContext.historyData.length === 0 ? "No Watch History Available" : usingContext.historyData.map((value, index) => {
                                return (
                                    <li className="nav-item history-data" key={index}>
                                        <p>{value.cardName}</p>
                                        <div className="row">
                                            <div className="col-4">{value.bucketName}</div>
                                            <div className="col-8 history-time">{value.openTime}</div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default WatchHistory;
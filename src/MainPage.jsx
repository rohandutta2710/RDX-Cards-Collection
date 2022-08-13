import React from "react";
import Cards from "./Cards";
import SidePanel from "./SidePanel";
function MainPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 sidepanel">
                    <SidePanel />
                </div>
                <div className="col-lg-10 col-md-8 col-sm-6 col-xs-6">
                    <Cards/>
                </div>
            </div>
        </div>

    );
}
export default MainPage;
import React, { useContext } from "react";
import { projectContext } from "./ContextManager";
function IFrame() {
    const usingContext = useContext(projectContext);
    return (<>
        <div className="modal fade" id="staticBackdropIFrame" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog  modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header add-form-header" style={{ background: "#65a1dd" }}>
                        <h3 className="modal-title" id="exampleModalLabel" style={{ color: "White" }}>{usingContext.iFrameState.title}</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ color: "White" }}></button>
                    </div>
                    <iframe width="100%" id={"shortIframe"} title={usingContext.iFrameState.id} height="500px" src={usingContext.iFrameState.link} />
                </div>
            </div>
        </div>
    </>)
}
export default IFrame;
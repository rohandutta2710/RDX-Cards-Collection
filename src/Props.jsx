import React from "react";
import { useContext } from "react";
import Tilt from "react-vanilla-tilt";
import { projectContext } from "./ContextManager";
import { UpdateCardModalForm } from "./ModalForms";
function SidePanelProps(props) {
    const usingContext = useContext(projectContext)
    return (
        <>
            <div className="side-panel-btns" key={props.sidePanelData.id} >
                <button  key={props.sidePanelData.id} className="" id={props.sidePanelIndex + 1} style={{ backgroundColor: `${props.sidePanelIndex === usingContext.cardDisplayIndex ? "red" : "white"}` }}
                    onClick={() => { return (usingContext.UpdateCardPage(props.sidePanelData.id)) }}>
                    {props.sidePanelData.name}
                </button>
            </div>
        </>
    );
}

function CardsProps(props) {
    const usingContext = useContext(projectContext);
    return (<>
        {/* .card-width :- cards width  */}
        {/* <Tilt className="tilt-review" key={props.cardIndex}> */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 card-width" key={props.cardIndex}>
            <div className="project-card" key={props.cardIndex}>
                <img src={props.cardData.image} alt="Loading" />
                <UpdateCardModalForm cardid={props.cardData.cardID} />
                <span id={"select_unselect" + props.cardData.cardID} className="material-symbols-outlined select-unselect-icon" onClick={() => { return (usingContext.cardSelectUnselect(props.cardData.cardID)) }}>
                    {props.cardData.selected ? "check_box" : "check_box_outline_blank"}
                </span>
                <br />
                <div className="project-data" key={props.cardIndex}>
                    <h1>{props.cardData.title}</h1>
                    <p>{props.cardData.description}</p>
                    <div className="link-project" key={props.cardIndex}>
                        <a data-bs-toggle="modal" data-bs-target="#staticBackdropIFrame"  href={props.cardData.link} id={props.cardData.cardID} target="_blank" rel="noreferrer" onClick={usingContext.IFrameFunction}>Watch</a>
                    </div>
                </div>
            </div>
        </div>

        {/* </Tilt> */}
    </>
    );
}

export { CardsProps, SidePanelProps };
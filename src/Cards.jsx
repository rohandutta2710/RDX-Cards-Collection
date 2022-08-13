import React, { useContext } from "react";
import "./index.css";
import { projectContext } from "./ContextManager";
import { CardsProps } from "./Props";
import { AddCardModalForm, DeleteModalForm, MoveToModalForm } from "./ModalForms";
import EmptyCart from "./EmptyCart";
import WatchHistory from "./WatchHistory";
import IFrame from "./IFrame";
function Cards() {
    const usingContext = useContext(projectContext);
    return (<>
        <h1>{usingContext.entireData.length === 0 ? "" : usingContext.entireData[usingContext.cardDisplayIndex].name}</h1>
        <div className="cardsCRUDButtons">
            <AddCardModalForm />
            <DeleteModalForm />
            <MoveToModalForm />
            <WatchHistory />
            <button id="select_unselect_button" className="btn btn-success add-delete-button" onClick={usingContext.selectUnselectAll}>
                {usingContext.allSelected ? "Unselect All" : "Select All"}
            </button>
        </div>
        <IFrame />
        <div className="row">
            {
                usingContext.entireData.length === 0 ? "" :
                    usingContext.entireData[usingContext.cardDisplayIndex].details.length === 0 ? <EmptyCart /> :
                        usingContext.entireData[usingContext.cardDisplayIndex].details.map((value, index) => {
                            return (value === null || value === undefined ? null : <CardsProps cardData={value} cardIndex={index} key={index}></CardsProps>);
                        })
            }
        </div>
    </>

    );
}

export default Cards;
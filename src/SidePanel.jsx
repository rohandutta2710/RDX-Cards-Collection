import React from "react";
import { useContext } from "react";
import { projectContext } from "./ContextManager";
import { SidePanelProps } from "./Props";
import { SidePanelCreate, SidePanelUpdate, SidePanelDelete } from "./ModalForms";
function SidePanel() {
    const usingContext = useContext(projectContext);
    return (
        <>
            <SidePanelCreate />
            <SidePanelUpdate />
            <SidePanelDelete />
            {usingContext.entireData.length === 0 ? "" : usingContext.entireData.map((value, index) => {
                return (<SidePanelProps sidePanelData={value} sidePanelIndex={index} key = {index}></SidePanelProps>)
            })}
        </>
    );

}
export default SidePanel;
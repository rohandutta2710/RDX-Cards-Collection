import React, { useContext } from "react";
import { projectContext } from "./ContextManager";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
function DeleteModalForm() {
    const usingContext = useContext(projectContext);
    return (
        <>
            <button type="button" className="btn btn-danger add-delete-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" disabled={usingContext.selectedCount === 0 ? true : false}>
                Delete
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5>Are you sure to delete the selected {usingContext.selectedCount} cards from {usingContext.entireData.length === 0 ? "" : usingContext.entireData[usingContext.cardDisplayIndex].name} ?</h5>
                        </div>
                        <div className="modal-footer delete-modal-footer">
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={usingContext.deleteSelectedCard}>Yes</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function AddCardModalForm() {
    const usingContext = useContext(projectContext);
    return (<>
        <button className="btn btn-primary add-delete-button" data-bs-toggle="modal" data-bs-target="#staticBackdropAdd" disabled={usingContext.entireData.length === 0 ? true : false} onClick={() => { document.getElementById("addCardButton").disabled = true }}>
            Add
        </button>
        <div className="modal fade" id="staticBackdropAdd" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header add-form-header">
                        <h3 className="modal-title" id="exampleModalLabel">Add Card to {usingContext.entireData.length === 0 ? "" : usingContext.entireData[usingContext.cardDisplayIndex].name}</h3>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="title" placeholder="Title" required={true} onChange={usingContext.onChangeText} />
                                <label htmlFor="floatingInput">Title</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Enter Description" id="description" maxLength={60} required={true} onChange={usingContext.onChangeText}></textarea>
                                <label htmlFor="floatingTextarea">Description</label>
                            </div>
                            <div className=" mb-3">
                                <input className="form-control" type="file" id="image" accept="image/png, image/gif, image/jpeg" required={true} onChange={usingContext.onChangeText} />
                            </div>
                            <div className="form-floating mb-3">
                                <input type="url" className="form-control" id="link" placeholder="Title" required={true} onChange={usingContext.onChangeText} />
                                <label htmlFor="floatingLink">Video Link</label>
                            </div>
                            <div className="modal-footer delete-modal-footer">
                                <button type="button" id="addCardButton" className="btn btn-success" data-bs-dismiss="modal" onClick={usingContext.addCardInBucket}>Add</button>
                                <button type="button" id="closeCardButton" className="btn btn-primary" data-bs-dismiss="modal" onClick={usingContext.clearFormData}>Close</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>)
}

function UpdateCardModalForm(props) {
    const usingContext = useContext(projectContext);
    return (<>
        <span className="material-symbols-outlined select-unselect-icon edit-card" data-bs-toggle="modal" data-bs-target="#staticBackdropUpdateCards" onClick={() => { usingContext.bringCardDateUpdate(props.cardid) }}>
            edit
        </span>
        <div className="modal fade" id="staticBackdropUpdateCards" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header add-form-header">
                        <h3 className="modal-title" id="exampleModalLabel">Update a Card of {usingContext.entireData[usingContext.cardDisplayIndex].name}</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={usingContext.clearFormData}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="updatetitle" placeholder="Title" required={true} onChange={usingContext.onChangeText} />
                                <label htmlFor="floatingInput">Title</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Enter Description" id="updatedescription" maxLength={60} required={true} onChange={usingContext.onChangeText}></textarea>
                                <label htmlFor="floatingTextarea">Description</label>
                            </div>
                            <div className=" mb-3">
                                <input className="form-control" type="file" id="updateimage" accept="image/png, image/gif, image/jpeg" required={true} onChange={usingContext.onChangeText} />
                            </div>
                            <div className="form-floating mb-3">
                                <input type="url" className="form-control" id="updatelink" placeholder="Title" required={true} onChange={usingContext.onChangeText} />
                                <label htmlFor="floatingLink">Video Link</label>
                            </div>
                            <div className="modal-footer delete-modal-footer">
                                <button type="button" id="udpateCardButton" className="btn btn-success" data-bs-dismiss="modal" onClick={usingContext.updateCardInBucket}>Update</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>)
}

function MoveToModalForm() {
    const usingContext = useContext(projectContext);
    return (
        <>
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-info  add-delete-button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" disabled={usingContext.selectedCount === 0 ? true : false}>
                    Move To
                </button>
                <ul className="dropdown-menu">
                    {usingContext.entireData.length === 0 ? <EmptyCart /> :
                        usingContext.entireData.map((value, index) => {
                            return (<li key={value.id}
                                style={{ display: `${usingContext.entireData[usingContext.cardDisplayIndex].id === value.id ? "none" : "block"}` }}>
                                <Link className="dropdown-item" to="#" key={value.id} onClick={(e) => { return usingContext.MoveToBucket(value.id, index, e) }}>
                                    {value.name}</Link></li>);
                        })}
                </ul>
            </div>
        </>
    );
}

function SidePanelCreate() {
    const usingContext = useContext(projectContext);
    return (<>
        <button className="btn btn-primary add-delete-button" data-bs-toggle="modal" data-bs-target="#staticBackdropSidePanelCreate" onClick={() => { document.getElementById("createSidePanelBtn").disabled = true; }}>
            Create
        </button>
        <div className="modal fade" id="staticBackdropSidePanelCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header add-form-header">
                        <h3 className="modal-title" id="exampleModalLabel">Create a new Bucket</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={usingContext.clearCreateSidePanelform}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="nameOfBucket" placeholder="Bucket Name" required={true} onChange={usingContext.inputSidePanelCreate} />
                                <label htmlFor="floatingInput">Bucket Name</label>
                            </div>
                            <div className="modal-footer delete-modal-footer">
                                <button type="button" id="createSidePanelBtn" className="btn btn-success" data-bs-dismiss="modal" onClick={usingContext.CreateSidePanelform}>
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>)
}
function SidePanelUpdate() {
    const usingContext = useContext(projectContext);
    return (<>
        <button className="btn btn-success add-delete-button" data-bs-toggle="modal" data-bs-target="#staticBackdropSidePanelUpdate" disabled={usingContext.entireData.length !== 0 ? false : true} onClick={usingContext.bringSidePanelData}>
            Update
        </button>
        <div className="modal fade" id="staticBackdropSidePanelUpdate" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header add-form-header">
                        <h3 className="modal-title" id="exampleModalLabel">Update a selected Bucket</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="nameOfBucketupdate" placeholder="Bucket Name" required={true} onChange={usingContext.inputSidePanelCreate} />
                                <label htmlFor="floatingInput">Bucket Name</label>
                            </div>
                            <div className="modal-footer delete-modal-footer">
                                <button type="button" id="updateSidePanelBtn" className="btn btn-success" data-bs-dismiss="modal" onClick={usingContext.updateSidePanelName}>
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>)
}
function SidePanelDelete() {
    const usingContext = useContext(projectContext);
    return (<><button className="btn btn-danger add-delete-button" data-bs-toggle="modal" disabled={usingContext.entireData.length !== 0 ? false : true} data-bs-target="#staticBackdropSidePanelDelete">
        Delete
    </button>
        <div className="modal fade" id="staticBackdropSidePanelDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <h5>Are you sure to delete the selected  {usingContext.entireData.length === 0 ? "" : usingContext.entireData[usingContext.cardDisplayIndex].name} ?</h5>
                    </div>
                    <div className="modal-footer delete-modal-footer">
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={usingContext.deleteSidePanelData}>Yes</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
        </div></>)
}

export { AddCardModalForm, DeleteModalForm, UpdateCardModalForm, MoveToModalForm, SidePanelCreate, SidePanelUpdate, SidePanelDelete };


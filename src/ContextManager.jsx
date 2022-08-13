import { createContext, useState } from "react";
const projectContext = createContext();
function ContextManager(props) {
    const initialData = [
        {
            name: "Batman",
            id: "".concat(Date.now(), "_", Math.floor(Math.random() * 93463)),
            details: [
                { cardID: "".concat(Date.now(), "_", Math.floor(Math.random() * 74159, "card")), image: "https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg", link: "https://www.youtube.com/embed/EXeTwQWrcwY", title: "Batman: The Dark Knight", description: "One of my favourite movie.", selected: false },
                { cardID: "".concat(Date.now(), "_", Math.floor(Math.random() * 74159, "card")), image: "https://diandrareviewsitall.com/wp-content/uploads/2022/02/batman.jpg", link: "https://www.youtube.com/embed/mqqft2x_Aa4", title: "The Batman", description: "Amazing.", selected: false },
                { cardID: "".concat(Date.now(), "_", Math.floor(Math.random() * 74159, "card")), image: "https://www.bollywoodhungama.com/wp-content/uploads/2022/06/Joker-2-Director-Todd-Phillips-confirms-the-sequel-is-officially-in-works-with-Joaquin-Phoenix-1.jpg", link: "https://www.youtube.com/embed/zAGVQLHvwOY", title: "Joker", description: "Jaoquin Phoneix won Oscar for the role of Joker.", selected: false }
            ]
        },
        {
            name: "Spider Man",
            id: "".concat(Date.now(), "_", Math.floor(Math.random() * 93463)),
            details: [
                { cardID: "".concat(Date.now(), "_", Math.floor(Math.random() * 74159, "card")), image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg", link: "https://www.youtube.com/embed/JfVOs4VSpmA", title: "Spider-Man: No Way Home", description: "Superb Graphics!", selected: false },
                { cardID: "".concat(Date.now(), "_", Math.floor(Math.random() * 74159, "card")), image: "https://m.media-amazon.com/images/I/91RuCdS7gPL._SL1500_.jpg", link: "https://www.youtube.com/embed/-tnxzJ0SSOw", title: "Amazing Spider-Man", description: "Enojyed while watching it.", selected: false }
            ]
        }
    ];
    const [cardDisplayIndex, setCardDisplayIndex] = useState(0);
    const [allSelected, setAllSelected] = useState(false);
    const [entireData, setEntireData] = useState(initialData);
    const [selectedCount, setSelectedCount] = useState(0);
    const [iFrameState, setIFrameState] = useState({});
    const [historyData, setHistoryData] = useState([]);
    // const [addCardData, setAddCardData] = useState({});
    //functions
    const UpdateCardPage = (unique) => {
        setSelectedCount(0);
        //unselecting all the cards while move from one bucket to other or setting selected as false
        //uncheck all the selected cards
        entireData[cardDisplayIndex]["details"].map((data) => {
            data.selected = false;
            document.getElementById("select_unselect" + data.cardID).innerHTML = "check_box_outline_blank";
            setAllSelected(false);
            return "";
        })

        entireData.find((value, index) => {
            if (value.id === unique) {
                setCardDisplayIndex(index);
                return true;
            }
            return false;
        });
    }
    const cardSelectUnselect = (cardID) => {
        entireData[cardDisplayIndex]["details"].find((data, index) => {
            //need to check here whther all are select one by one of not
            if (cardID === data.cardID) {
                if (data.selected) {
                    document.getElementById("select_unselect" + cardID).innerHTML = "check_box_outline_blank";
                    setSelectedCount(selectedCount - 1);
                }
                else {
                    setSelectedCount(selectedCount + 1);
                    document.getElementById("select_unselect" + cardID).innerHTML = "check_box";
                }
                data.selected = data.selected ? false : true;
                let allSelectedCheck = entireData[cardDisplayIndex]["details"].every((value) => {
                    if (value.selected === true)
                        return true;
                    return false;
                });
                if (allSelectedCheck)
                    setAllSelected(true);
                else
                    setAllSelected(false);
                return true;
            }
            return false;
        });
    }
    const selectUnselectAll = () => {
        setSelectedCount(0);
        entireData[cardDisplayIndex]["details"].map((data, index) => {
            if (allSelected === false) {
                data.selected = true;
                document.getElementById("select_unselect" + data.cardID).innerHTML = "check_box";
                setAllSelected(true);
                setSelectedCount(index + 1);
            }
            else {
                setAllSelected(false);
                setSelectedCount(0);
                data.selected = false;
                document.getElementById("select_unselect" + data.cardID).innerHTML = "check_box_outline_blank";
            }
            return true;
        })
    }

    //deleting selected cards
    const deleteSelectedCard = () => {
        let dummyArray = [...entireData];
        let len = dummyArray[cardDisplayIndex]["details"].length;
        for (let i = 0; i < len; i++) {
            document.getElementById("select_unselect" + dummyArray[cardDisplayIndex]["details"][i].cardID).innerHTML = "check_box_outline_blank";
            if (dummyArray[cardDisplayIndex]["details"][i]["selected"] === true) {
                dummyArray[cardDisplayIndex]["details"].splice(i, 1);
                i--;
                len--;
            }
        }
        setEntireData(dummyArray);
        setAllSelected(false);
        setSelectedCount(0);
    }
    //onChange of forms values
    var virtualObject = {}
    const onChangeText = (e) => {
        if (e.target.id === "image" || e.target.id === "updateimage") {
            let imageURL = e.target.files[0] === undefined ? "" : URL.createObjectURL(e.target.files[0]);
            virtualObject = { ...virtualObject, [e.target.id.includes("update") ? e.target.id.slice(6, e.target.id.length) : e.target.id]: imageURL };
        }
        else {
            virtualObject = { ...virtualObject, [e.target.id.includes("update") ? e.target.id.slice(6, e.target.id.length) : e.target.id]: e.target.value };
        }
        if (virtualObject.image === undefined || virtualObject.link === undefined || virtualObject.title === undefined || virtualObject.description === undefined ||
            virtualObject.image.length <= 3 || virtualObject.link.length <= 5 || virtualObject.title.length <= 2 || virtualObject.description <= 5) {
            if (document.getElementById("addCardButton") !== undefined && document.getElementById("addCardButton") !== null)
                document.getElementById("addCardButton").disabled = true;
            if (document.getElementById("udpateCardButton") !== undefined && document.getElementById("udpateCardButton") !== null)
                document.getElementById("udpateCardButton").disabled = true;
        }
        else {
            if (document.getElementById("udpateCardButton") !== undefined && document.getElementById("udpateCardButton") !== null)
                document.getElementById("udpateCardButton").disabled = false;
            if (document.getElementById("addCardButton") !== undefined && document.getElementById("addCardButton") !== null)
                document.getElementById("addCardButton").disabled = false;
        }
    }
    //add card in selected bucket
    const addCardInBucket = () => {
        virtualObject = { ...virtualObject, cardID: "".concat(Date.now(), "_", Math.floor(Math.random() * 74159, "card")), selected: false };
        let data = entireData;
        data[cardDisplayIndex]["details"].push(virtualObject);
        setEntireData([...data]);
        clearFormData();
        setAllSelected(false);
    }
    //remove card data from form
    function clearFormData() {
        virtualObject = {};
        document.getElementById("title").value = "";
        document.getElementById("image").value = "";
        document.getElementById("description").value = "";
        document.getElementById("link").value = "";
    }

    //udpate cards functions
    const bringCardDateUpdate = (cardID) => {
        virtualObject = entireData[cardDisplayIndex]["details"].find((data) => {
            if (cardID === data.cardID) {
                return data;
            }
            return "";
        });
        document.getElementById("updatetitle").value = virtualObject.title;
        document.getElementById("updateimage").value = "";
        document.getElementById("updatedescription").value = virtualObject.description;
        document.getElementById("updatelink").value = virtualObject.link;
    }
    const updateCardInBucket = () => {
        let data = entireData;
        data[cardDisplayIndex]["details"].map((value, index) => {
            if (virtualObject.cardID === value.cardID) {
                data[cardDisplayIndex]["details"][index] = { ...data[cardDisplayIndex]["details"][index], ...virtualObject };
                return true;
            }
            return false;
        });
        setEntireData([...data]);
        clearFormData();
    }

    //Move card function
    const MoveToBucket = (uniqueID, index, e) => {
        let dummyArray = [], fullArray = [...entireData], len = 0;
        entireData[cardDisplayIndex]["details"].map((data) => {
            if (data.selected) {
                dummyArray.push(data);
                dummyArray[len] = { ...dummyArray[len], selected: false };
                len++;
            }
            return false;
        })
        if (fullArray[index].id === uniqueID) {
            fullArray[index]["details"] = [...fullArray[index]["details"], ...dummyArray];
        }
        setEntireData([...fullArray]);
        e.preventDefault();
        deleteSelectedCard();
        setSelectedCount(0);
    }

    //Side panel JS
    function clearCreateSidePanelform() {
        if (document.getElementById("nameOfBucket") !== undefined && document.getElementById("nameOfBucket") !== null)
            document.getElementById("nameOfBucket").value = "";
    }
    const inputSidePanelCreate = (e) => {
        if (e.target.id !== "nameOfBucketupdate") {
            if (e.target.value.length >= 3)
                document.getElementById("createSidePanelBtn").disabled = false;
            else
                document.getElementById("createSidePanelBtn").disabled = true;
        }
        else {
            if (e.target.value.length >= 3)
                document.getElementById("updateSidePanelBtn").disabled = false;
            else
                document.getElementById("updateSidePanelBtn").disabled = true;
        }
    }
    const CreateSidePanelform = () => {
        let bucketName = document.getElementById("nameOfBucket").value;
        let data = {
            name: bucketName,
            id: "".concat(Date.now(), "_", Math.floor(Math.random() * 93463)),
            details: []
        };
        setEntireData([...entireData, data]);
        clearCreateSidePanelform();
    }
    const bringSidePanelData = () => {
        document.getElementById("nameOfBucketupdate").value = entireData[cardDisplayIndex].name;
    }
    const updateSidePanelName = () => {
        let bucketName = document.getElementById("nameOfBucketupdate").value;
        entireData[cardDisplayIndex].name = bucketName;
        setEntireData([...entireData]);
        clearCreateSidePanelform();
    }
    const deleteSidePanelData = () => {
        entireData.splice(cardDisplayIndex, 1);
        setEntireData([...entireData]);
        setSelectedCount(0);
        setAllSelected(false);
        setCardDisplayIndex(entireData.length !== 0 ? 0 : 0);
    }
    // iframe
    function IFrameFunction(e) {
        e.preventDefault();
        let timing = new Date(Date.now());
        timing = timing.toString();
        let tempHistory = {};
        tempHistory = { ...tempHistory, "bucketName": entireData[cardDisplayIndex].name, openTime: timing.substring(0, timing.indexOf("GMT")) };
        let historyIframe = entireData[cardDisplayIndex]["details"].find((value) => {
            if ((e.target.id) === value.cardID) {
                tempHistory = { ...tempHistory, "cardName": value.title }
                return value;
            }
            return false;
        });
        historyData.unshift(tempHistory);
        setHistoryData([...historyData])
        setIFrameState(historyIframe);
    }
    return (
        <>
            <projectContext.Provider value={{ entireData, setEntireData, cardDisplayIndex, setCardDisplayIndex, UpdateCardPage, cardSelectUnselect, selectUnselectAll, allSelected, setAllSelected, deleteSelectedCard, clearFormData, addCardInBucket, onChangeText, bringCardDateUpdate, updateCardInBucket, MoveToBucket, selectedCount, setSelectedCount, clearCreateSidePanelform, CreateSidePanelform, inputSidePanelCreate, updateSidePanelName, bringSidePanelData, deleteSidePanelData, IFrameFunction, iFrameState, setIFrameState, historyData, setHistoryData }}>
                {props.children}
            </projectContext.Provider>
        </>
    )
}
export default ContextManager;
export { projectContext };
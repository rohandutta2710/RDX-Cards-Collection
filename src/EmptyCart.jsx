import React from "react";

function EmptyCart() {
    return (<>
        <div className="container-fluid  mt-100">
            <div className="row">

                <div className="col-md-12">

                    <div className="empty-card">
                        <div className="empty-card-body empty-cart">
                            <div className="col-sm-12 empty-cart-cls text-center">
                                <img src={"https://i.imgur.com/dCdflKN.png"} alt="Loading" width="130" height="130" className="empty-img-fluid mb-4 mr-3" />
                                <h3><strong>Your Bucket is Empty.</strong></h3>
                                <h4>Add something to make me happy :)</h4>


                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    </>)
}
export default EmptyCart;
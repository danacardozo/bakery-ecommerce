import { PRODUCT_DETAILS_FAIL, 
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS }
     from "../Constants/ProductConstants"
import axios from "axios";


//lista de productos
export const listProduct = () => async(dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST });
        const {data} = await axios.get("api/products");
        dispatch({type: PRODUCT_LIST_SUCCESS, payload:data});
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

//único producto
export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST});
        const {data} = await axios.get(`/api/products/${id}`);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload:data});
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
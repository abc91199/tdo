export const REQUEST_TDO = 'REQUEST_TDO';
export const RECEIVE_TDO = 'RECEIVE_TDO';
export const LOAD_DEFAULT_TDO = 'LOAD_DEFAULT_TDO';
export const INITIALIZE_TDO = 'INITIALIZE_TDO';

export const loadDefault = () => ({
    type: LOAD_DEFAULT_TDO
});

export const initializeTDO = () => ({
    type: INITIALIZE_TDO
});



// import { Gists } from '../services/Gists';
// import { GHAuth } from '../services/GHAuth';

import { gotoAnyBoard } from './board';


// export const loadData = () => dispatch => {
//     let data = localStorage.tdo && JSON.parse(localStorage.tdo);
//     if (data) {
//         dispatch({
//             type: RECEIVE_TDO,
//             data: data
//         });
//     }
//     else {
//         dispatch(loadDefault());
//     }
//     dispatch(gotoAnyBoard());
// };


export const updateData = (data) => dispatch => {
    console.log("updating data start");
    if (data == 'init') {
        console.log('initialize tdo');
        dispatch(initializeTDO()); 
    }
    else if (data) {
        console.log('updating received');
        dispatch({
            type: RECEIVE_TDO,
            data: data
        });
    } else {
        console.log('disabling tdo');
        dispatch(loadDefault()); 
    }
    
    // dispatch(loadDefault());
    // if (data) {
    //     dispatch({
    //         type: RECEIVE_TDO,
    //         data: data
    //     });
    // }
    // else {
    //     dispatch(loadDefault());
    // }
    // dispatch(gotoAnyBoard());
};


export * from './board';
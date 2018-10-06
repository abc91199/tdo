import {Gists} from '../services/Gists';
import {GHAuth} from '../services/GHAuth';
import { getService, getSocket } from '../../socket';
import isEqual from 'lodash.isequal';
var saved, saveTaskId;


function save(tdo) {
    // console.log("first");
    // console.log(tdo);
    // console.log("second");
    // console.log(saved);

    // if (isEqual(saved, tdo)) {
    //     console.log("obj are same");
    // } else {
    //     console.log("different!!!");
    // }
          
    if (!isEqual(saved, tdo) && tdo.lists && tdo.lists.length > 0) {
        // don't save the disabled view
        if (tdo.boards[0].name != 'DISABLED: SERVER NOT CONNECTED') {
            saved = tdo;
            const service = getService();
            console.log("saving data");
            service.update('tdoStore', tdo).then((err, msg) => {
                console.log("complete saved");
            })
        }
    }
}


export default store => next => action => {
    var result = next(action);
    var {tdo} = store.getState();
    save(tdo);
    return result;
};

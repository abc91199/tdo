import uid from "uid";

// export function getDefaultData() {
//     var board = {
//         id: uid(),
//         name: 'Tasks',
//         createdDate: new Date().toISOString()
//     };

//     var list = {
//         id: uid(),
//         boardId: board.id,
//         name: 'List 1',
//         createdDate: new Date().toISOString()
//     };

//     return {
//         boards: [board],
//         lists: [list],
//         tasks: []
//     }
// }


export function getDefaultData() {
    var board = {
        id: uid(),
        name: 'DISABLED: SERVER NOT CONNECTED',
        createdDate: new Date().toISOString()
    };

    var list = {
        id: uid(),
        boardId: board.id,
        name: 'DISABLED',
        createdDate: new Date().toISOString()
    };

    return {
        boards: [board],
        lists: [list],
        tasks: []
    }
}



export function getInitData() {
    var board = {
        id: uid(),
        name: 'Tasks',
        createdDate: new Date().toISOString()
    };

    var list = {
        id: uid(),
        boardId: board.id,
        name: 'List ',
        createdDate: new Date().toISOString()
    };

    return {
        boards: [board],
        lists: [list],
        tasks: []
    }
}
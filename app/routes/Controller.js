import { Controller } from 'cx/ui';
import { append } from 'cx/data';
import uid from 'uid';
import { loadData, updateData, addBoard, gotoBoard } from '../data/actions';
import { getService, getSocket } from '../socket';


export default class extends Controller {
    init() {
        super.init();

        this.store.set('layout.mode', this.getLayoutMode())

        // this.store.dispatch(
        //     loadData()
        // );

        // setup to trigger loadData whenever data is updated
        const socket = getSocket();
        const service = getService();
        socket.on('connect', connection => {
            // // init
            // this.store.dispatch(
            //     updateData("init")
            // );            
            service.get('tdoStore').then(item => {
                this.store.dispatch(
                    updateData(item)
                );
            });
        });

        socket.on('disconnect', connection => {
            console.log("disconnected");
            this.store.dispatch(
                updateData(null)
            );            
        });


        const evts = ["created", "updated", "patched"];
        for (var i=0; i<evts.length; i++) {
            service.on(evts[i], tdodata => {
                if (tdodata["_id"]=='tdoStore') {
                    this.store.dispatch(
                        updateData(tdodata)
                    );
                } else {
                    this.store.dispatch(
                        updateData(null)
                    );
                }
            })
        }
    }

    getLayoutMode() {
        if (window.innerWidth >= 1200)
            return 'desktop';

        if (window.innerWidth >= 760)
            return 'tablet';

        return 'phone';
    }

    addBoard(e) {
        e.preventDefault();

        var id = uid();

        this.store.dispatch(
            addBoard({
                id: id,
                name: 'New Board',
                edit: true
            })
        );

        this.store.dispatch(
            gotoBoard(id)
        );
    }
}

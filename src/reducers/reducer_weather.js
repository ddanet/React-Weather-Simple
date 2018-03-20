import {FETCH_WEATHER} from "../actions/index";

export default function (state = [], action) {


    switch (action.type) {
        case FETCH_WEATHER:
            console.log('Reducer - Got Action:', action);

            // return state.concat([action.payload.data]);  same thing as below
            return [ action.payload.data, ...state ];
    }

    return state;
}
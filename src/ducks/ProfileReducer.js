import axios from 'axios';

const INITIAL_STATE = {

}

export default function ProfileReducer(state = INITIAL_STATE, action) {
    console.log("REDUCER HIT: ACTION => ", action);
    switch (action.type) {
        default:
        return { ...state };
    }
}
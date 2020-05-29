import api from '../../services/api'

export const Types = {
    ADD: "cidades/ADD",
    REMOVE: "cidades/REMOVE",
    LIST: "cidades/LIST",
    DETAIL: "cidades/DETAIL",
    GET: "cidades/GET",
};

const INITIAL_STATE = []

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD:
            return { ...state, cidades: action.payload };
        case Types.REMOVE:
            return { ...state, cidades: action.payload.data };
         case Types.LIST:
                return { ...state, cidades: action.payload.data };
        case Types.GET:
            return { ...state };
        case Types.DETAIL:
            return { ...state, cidades: action.payload.data };
        default:
            return {cidades:state};
    }
}

export const Creators = {
    ListCidades: () => {
        const request = api.get();
        return {
            type: Types.LIST,
            payload: request
        }
    },
    GetCidades: () => {
        return {
            type: Types.GET
        }
    }
}
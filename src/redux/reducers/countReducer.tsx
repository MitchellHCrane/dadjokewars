export default function countReducer(state = [], action: any) {
    switch(action.type) {
        case "create_Count":
            return [...state, {...action.count}];
            default:
            return state;
    }
}

export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payloade: num           // we can write anythink in the palace of payloade 
    }
}

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}
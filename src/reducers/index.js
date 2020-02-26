export const initialState = {
    currentKey: "",
    history: [],
    test: {
        name: "",
        text: "", // Test text
        difficulty: 1, // 1 - Easy, 2 - Medium, 3 - Hard
        duration: 1,
        wordCount: 0 // in minutes
    },
    time: {
        seconds: 0,
        minutes: 0
    },
    matches: [], // Correctly matched test letters to keys pressed
    isStarted: false,
    isComplete: false,
    stats: {
        wpm: 0,
        accuracy: ''
    }
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "setCurrentKey":
            return {
                ...state,
                currentKey: action.newKey
            };
        case "addToHistory":
            return {
                ...state,
                history: [...state.history, action.setHistory]
            };
        case "removeLastKey":
            return {
                ...state,
                history: [...state.history.slice(0, state.history.length - 1)]
            };
        case "setMatch":
            return {
                ...state,
                matches: [...state.matches, action.setMatchBool]
            };
        case "removeMatch":
            return {
                ...state,
                matches: [...state.matches.slice(0, state.matches.length - 1)]
            };
        case "setTest":
            return {
                ...state,
                test: action.testObj
            };
        case "setTimer":
            return {
                ...state,
                time: { seconds: action.setSeconds, minutes: action.setMinutes }
            };
        case "startEndTest":
            return {
                ...state,
                isStarted: action.setStartState
            };
        case "completeTest":
            return {
                ...state,
                isComplete: action.setCompleteTest
            };
        case "setStats":
            return {
                ...state,
                stats: { wpm: action.setWPM, accuracy: action.setAccuracy }
            }
        case "reset":
            return {
                ...initialState
            };
        default:
            return state;
    }
};

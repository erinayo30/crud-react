// localStorage
export const getLocalStorage = (name) => {
            if (!name){
                throw new Error("Local storage name is missing");
            }
            return JSON.parse(localStorage.getItem(name)) || [];
        };

export const setLocalStorage = (name, newData) => {
            if (!name) {
                throw new Error("Local storage is missing...");
            }
            if (!newData){
                throw new Error("Data is missing...");
            }

            localStorage.setItem(name, JSON.stringify(newData));
        };

export const BuildMockFunction = ({}) => {
    return function mockFunction({} ={}) {
        return  Object.freeze({
            getAppName: () => console.log("This is working...")
        })
    }
}


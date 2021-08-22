const budgetAllocation = require("./budgetAllocation")
// @ponicode
describe("budgetAll", () => {
    let inst

    beforeEach(() => {
        inst = new budgetAllocation.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.budgetAll({ target: { id: "_" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.budgetAll({ target: { id: "_03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.budgetAll({ target: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9_" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.budgetAll({ target: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8_7289708e-b17a-477c-8a77-9ab575c4b4d8" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.budgetAll({ target: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8__7289708e-b17a-477c-8a77-9ab575c4b4d8" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.budgetAll(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

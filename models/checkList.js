export const checkLists = [
    {
        "name": "Express",
        "description": "Some description you may or may not want to have above the steps",
        "anyOtherMetaData": "idk",
        "steps": [
            {
                "title": "Title of step 1 express",
                "description": "Longer description of necessary work at this step",
                "terminalCommand": "npm i",
                "completed": false,
                "otherStepSpecificData": "You get the point"
            },


const checkListSchema = new Schema({
    name: {type: String},
    description: {type: String},
    website: type: String
    steps: [
        {
            title: {type: String},
            description: {type: String},
            terminalCommand: {type: String},
            completed: {type: Boolean}
        },
    ],
})
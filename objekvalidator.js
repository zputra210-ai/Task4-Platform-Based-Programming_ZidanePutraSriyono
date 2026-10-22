const schema = {
    name: {
        required: true,
        type: "string"
    },
    age: {
        required: true,
        type: "number",
        min: 17
    },
    score: {
        required: true,
        type: "number",
        min: 60
    },
    major: {
        required: true,
        type: "string"
    }
};

function validate(object, schema){
    const error =[];
    for (const property in schema){
        const rules = schema[property];
        const value = object[property];

        if (rules.required && value === undefined){
            error.push(`${property}: Property Required`);
            continue;
        }

        if (value === undefined){
            continue;
        }

        if (typeof value !== rules.type){
            error.push(`${property}: Must be of type ${rules.type}`);
            continue;
        }
        
        if (rules.type === "number" && rules.min !== undefined && value < rules.min){
            error.push(`${property}: Must be at least ${rules.min}`);
        }
    }

    return error;
}

//example
const student = {
    name: "Budi",
    age: 16,
    score: 45
}

const error = validate(student,schema);

console.log(error);
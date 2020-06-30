import mongoose, {SchemaTypeOpts} from 'mongoose';

// How would we use TS to simplify our experience with databases?
// Lets try with mongoose, a TS compatible middleman for MongoDB...

// Say this is a type definition for a user in our DB. This is actually a real example from one of my personal projects, with a lot cut out.
interface User {
    username: string;
    password: string;
    firstName: string;
    email: string;
    subjects: Array<string>;
    nodebbUid: number;

    emailVerified: boolean;
}
interface IUser extends mongoose.Document,User{ } // this is the same user, but with all the mongoose functions like find() and update()

// mongoose needs a schema to tell it what fields go into mongodb.
// I once had a painful bug where I had a mismatch between how I used a field and what mongoose saved.
// I would call user.nodebbUID in my backend, and mongoose was saving as nodebbUid
// this was a huge headache because the id would never save. Typing the mongoose definition as shown helps catch bugs like these!
// if any field is missing, or mistyped TS will tell you
const definition: { [k in keyof User]: SchemaTypeOpts<any> } = {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    subjects: {
        type: Array,
        required: true,
    },



    emailVerified: {
        type: Boolean,
        required: true,
        default: false

    },


    nodebbUid: {
        type: Number,
        required: false
    },



};

const userSchema = new mongoose.Schema<IUser>(definition, {timestamps: true});
const User = mongoose.model<IUser>('User', userSchema);
// now we have a fully typed mongoose DB model. TS will tell us the fields we can access and what doesn't exist
const dummyUser: User={
    email: "",
    emailVerified: false,
    firstName: "",
    nodebbUid: 0,
    password: "",
    subjects: [],
    username: ""
}

User.create(dummyUser);
//User.create({lastName: "Bob"}); TS knows the field lastName, doesn't exist, so it doesn't let you create an object in the DB

User.findOne({}).then(user=>{
    if(!user)
        return;
    console.log(user.email); //a fully typed user object.
})




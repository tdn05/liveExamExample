import * as mongoose from 'mongoose';

interface ICar extends mongoose.Document {
    make: string,
    brand: string,
    year: number,
};

let carSchema = new mongoose.Schema ({
    make: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    }
})

export default mongoose.model<ICar>('Car', carSchema);

import mongoose from 'mongoose';

const userProductsSchema = new mongoose.Schema(
    {
        userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
        },
        productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,
        },
    },
    { timestamps: true }
)

const UserProducts = mongoose.model('userProducts', userProductsSchema);

export default UserProducts;  

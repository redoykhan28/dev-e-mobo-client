import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { format } from 'date-fns'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { authContext } from '../../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';



const AddProducts = () => {

    //use context
    const { user } = useContext(authContext)

    //use navigate
    const navigate = useNavigate()

    //image host key
    const imageHostKey = process.env.REACT_APP_imageHostKey
    // console.log(imageHostKey)

    //set date
    const date = format(new Date(), 'PP')
    // console.log(date)

    //use query
    const { data: categories = [] } = useQuery({

        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories/cat-name')
            .then(res => res.json())
    })

    //using react hook form
    const { register, handleSubmit, formState: { errors } } = useForm()

    //handle product
    const handleProduct = (data) => {

        // console.log(data)


        //upload image file
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.success) {

                    // console.log(imgData)

                    //handle post
                    const currentProduct = {

                        product_name: data.productName,
                        phone: data.phone,
                        purchase_price: data.purchasePrice,
                        selling_price: data.sellPrice,
                        location: data.location,
                        purchase_date: data.year,
                        product_img: imgData.data.url,
                        condition: data.condition,
                        seller_name: user?.displayName,
                        seller_email: user?.email,
                        category: data.category,
                        details: data.details,
                        published_date: date

                    }

                    //api for post
                    fetch('http://localhost:5000/products', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(currentProduct)
                    })
                        .then(res => res.json())
                        .then(productData => {
                            console.log(productData)
                            toast.success('Product successfully added!')
                            navigate('/myProduct')
                        })
                }

            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleProduct)} className='bg-white w-9/12 mx-auto
             my-10 rounded-xl p-12 gap-10'>
                <h3 className='text-center text-3xl font-bold mt-6 mb-10'>Add Products</h3>
                <div className='grid lg:grid-cols-2'>

                    <div>
                        <input {...register('productName', { required: 'This field is required' })} type="text" placeholder="Product Name" className="input input-bordered border-accent w-11/12 my-4 mx-auto" />
                        {errors.productName && <p className='text-red-600'><small>{errors.productName.message}</small></p>}
                    </div>

                    <div>
                        <input type="text" {...register('phone', { required: 'This field is required' })} placeholder="Mobile No" className="input input-bordered w-11/12 my-4 border-accent mx-auto" />
                        {errors.phone && <p className='text-red-600'><small>{errors.phone.message}</small></p>}
                    </div>

                    <div>
                        <input {...register('purchasePrice', { required: 'This field is required' })} type="text" placeholder="Purchase Price" className="input input-bordered w-11/12 my-4 border-accent mx-auto" />
                        {errors.purchasePrice && <p className='text-red-600'><small>{errors.purchasePrice.message}</small></p>}
                    </div>

                    <div>
                        <input {...register('sellPrice', { required: 'This field is required' })} type="text" placeholder="Selling Price" className="input input-bordered w-11/12 my-4 border-accent mx-auto" />
                        {errors.sellPrice && <p className='text-red-600'><small>{errors.sellPrice.message}</small></p>}

                    </div>

                    <div>
                        <input {...register('location', { required: 'This field is required' })} type="text" placeholder="Location" className="input input-bordered w-11/12 my-4 border-accent mx-auto" />
                        {errors.location && <p className='text-red-600'><small>{errors.location.message}</small></p>}
                    </div>

                    <div>
                        <input {...register('year', { required: 'This field is required' })} type="text" placeholder="Years of Purchase" className="input input-bordered w-11/12 my-4 border-accent mx-auto" />
                        {errors.year && <p className='text-red-600'><small>{errors.year.message}</small></p>}
                    </div>

                    <div>
                        <input {...register('image', { required: 'This field is required' })} type="file" className="file-input file-input-primary w-11/12 my-4 mx-auto" />
                        {errors.image && <p className='text-red-600'><small>{errors.image.message}</small></p>}
                    </div>

                    <div>
                        <input type="text" disabled defaultValue={user?.displayName} className="input input-bordered w-11/12 my-4 border-accent mx-auto" />

                    </div>

                    <div>
                        <label htmlFor="condition">Condition</label>
                        <div>
                            <select {...register('condition', { required: 'This field is required' })} className="select select-bordered w-11/12 my-4 border-accent mx-auto ">
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Avrage</option>
                            </select>
                        </div>
                        {errors.condition && <p className='text-red-600'><small>{errors.condition.message}</small></p>}
                    </div>

                    <div>
                        <label htmlFor="category">Category</label>
                        <div>
                            <select {...register('category', { required: 'This field is required' })} required className="select select-bordered w-11/12 my-4 border-accent mx-auto ">
                                {
                                    categories?.map(category => <option key={category._id}>{category.name}</option>)
                                }
                            </select>
                        </div>
                        {errors.category && <p className='text-red-600'><small>{errors.category.message}</small></p>}
                    </div>

                </div>
                <div>
                    <textarea {...register('details', { required: 'This field is required' })} className="textarea mb-6 w-9/12 mx-auto textarea-bordered border-accent" placeholder="Write a details..."></textarea>
                    {errors.details && <p className='text-red-600'><small>{errors.details.message}</small></p>}
                </div>
                <button className="btn w-full btn-active bg-primary text-white border-0 rounded-3 hover:bg-accent">Add Product</button>
            </form>
        </div>
    );
};

export default AddProducts;
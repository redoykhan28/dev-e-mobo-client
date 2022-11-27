import React from 'react';
import toast from 'react-hot-toast';

const ProductModal = ({ deleteProduct, setDeleteProduct, message, refetch }) => {

    //handle delete seller
    const handleDelete = (product) => {

        fetch(`http://localhost:5000/deleteProduct/${product._id}`, {

            method: "DELETE",
            headers: {

                authorization: `bearer ${localStorage.getItem('token')}`

            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {

                    console.log(data)
                    toast.success(`${deleteProduct.name} deleted successfully`)
                    setDeleteProduct(null)
                    refetch()
                }
            })

    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="shared-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="shared-modal" className="btn btn-sm btn-circle bg-accent hover:bg-black text-white  absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{message}</h3>
                    <div className='my-4 flex justify-center'>

                        <button onClick={() => setDeleteProduct(null)} className='btn btn-accent mx-2 text-white'>Cancel</button>

                        <button onClick={() => handleDelete(deleteProduct)} className='btn btn-error mx-2 text-white'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
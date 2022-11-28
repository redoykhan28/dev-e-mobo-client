import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../../Context/AuthProvider';

const BuyerModal = ({ deleteBuyer, refetch, message, setDeleteBuyer }) => {

    //use context
    const { logout } = useContext(authContext)

    //handle delete buyer
    const handleDelete = (buyer) => {

        fetch(`http://localhost:5000/deleteUser/${buyer._id}`, {

            method: "DELETE",
            headers: {

                authorization: `bearer ${localStorage.getItem('token')}`

            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {

                    return logout()


                }
                return res.json()
            })
            .then(data => {

                if (data.deletedCount > 0) {

                    console.log(data)
                    toast.success(`${deleteBuyer.name} deleted successfully`)
                    setDeleteBuyer(null)
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

                        <button onClick={() => setDeleteBuyer(null)} className='btn btn-accent mx-2 text-white'>Cancel</button>

                        <button onClick={() => handleDelete(deleteBuyer)} className='btn btn-error mx-2 text-white'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyerModal;
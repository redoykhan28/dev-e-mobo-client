import React from 'react';
import toast from 'react-hot-toast';

const AdminModal = ({ refetch, admin, setAdmin }) => {

    // update seller to admin 
    const handleAdmin = (admin) => {

        fetch(`https://e-mobo-server.vercel.app/admin/${admin._id}`, {

            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success(`${admin.name} added as admin successfully`);
                    setAdmin(null)
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
                    <h3 className="text-lg font-bold">Are you sure you want to add {admin.name} as admin?</h3>
                    <div className='my-4 flex justify-center'>

                        <button onClick={() => setAdmin(null)} className='btn btn-accent mx-2 text-white'>Cancel</button>

                        <button onClick={() => handleAdmin(admin)} className='btn bg-green-400 mx-2 text-white'>OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminModal;
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
    const location = useLocation();
    const from = location.state || "null"
    const feedbackRef = useRef(null);

    const handle = from => {
        const feedback = feedbackRef.current.value;

        fetch(`https://sports-academy-server-evrahim904.vercel.app/classes/feedback/${from._id}`, {
            method: 'PATCH',
            body: JSON.stringify({ feedback }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Feedback has been sent',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    }
    return (
        <div className="modal-box">
            <h3 className="text-center uppercase mb-3">write your feedback</h3>
            <div>
                <input type="text" className="input input-bordered input-info " ref={feedbackRef} />
                <button className="" onClick={() => handle(from)}> send feedback</button>
            </div>
        </div>
    );
};

export default Feedback;
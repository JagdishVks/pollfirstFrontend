import React, { useState, useEffect } from "react";
import TrackLeaders from "./TrackLeaders";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Leader = () => {
  const [leaders, setLeaders] = useState([]);
  const [trackLeader, setTrackLeader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [leadersPerPage] = useState(2);
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const userId = "3";

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5196/api/TrackLeader/user/${userId}`
        );
        setLeaders(response.data);
      } catch (error) {
        console.error("Error fetching leaders:", error);
      }
    };
    fetchLeaders();
  }, [userId]);

  const indexOfLastLeader = currentPage * leadersPerPage;
  const indexOfFirstLeader = indexOfLastLeader - leadersPerPage;
  const currentLeaders = leaders.slice(indexOfFirstLeader, indexOfLastLeader);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleTrackLeader = () => {
    setTrackLeader(!trackLeader);
  };

  const handleEditClick = (leader) => {
    setSelectedLeader(leader);
    setIsEditPopupOpen(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5196/api/TrackLeader/edit/${selectedLeader.id}`,
        selectedLeader
      );
      toast.success("Leader updated successfully!");
      //console.log("Leader updated:", selectedLeader);
      setIsEditPopupOpen(false);
    } catch (error) {
      toast.error("Error updating leader.");
    }
  };

  const handleDeleteClick = (leader) => {
    setSelectedLeader(leader);
    setIsDeletePopupOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(
        `http://localhost:5196/api/TrackLeader/delete/${selectedLeader.id}`
      );
      toast.success("Leader deleted successfully!");
      setLeaders(leaders.filter((l) => l.id !== selectedLeader.id));
      setIsDeletePopupOpen(false);
    } catch (error) {
      toast.error("Error deleting leader.");
    }
  };

  return (
    <>
      <div className="w-[100%] relative p-5 bg-[#FFFFFF] flex flex-col gap-3">
        <div className="flex justify-end">
          <button
            className="text-center bg-[#0B3A3D] text-[#ffffff] p-2 rounded-[14px] w-40 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200 ease-in-out hover:bg-[#154f5c] hover:text-[#FFFFFF]"
            onClick={handleTrackLeader}
          >
            Add Leader
          </button>
        </div>

        {/* Leader Table Header */}
        <div className="grid grid-cols-2 md:grid-cols-7 shadow-md bg-white rounded-xl border-2 border-gray bg-[#f4eded40] px-2 py-1">
          <div className="text-[16px] text-[#03393D] font-bold">Name</div>
          <div className="text-[16px] text-[#03393D] font-bold">Keywords</div>
          <div className="text-[16px] text-[#03393D] font-bold">Hashtag</div>
          <div className="text-[16px] text-[#03393D] font-bold">Twitter</div>
          <div className="text-[16px] text-[#03393D] font-bold">
            Facebook ID
          </div>
          <div className="text-[16px] text-[#03393D] font-bold">
            Instagram ID
          </div>
          <div className="text-[16px] text-[#03393D] font-bold">Action</div>
        </div>

        {/* Leader Rows */}
        {currentLeaders.map((leader) => (
          <div
            key={leader.id}
            className="grid grid-cols-2 md:grid-cols-7 bg-[#ffffff] rounded-xl px-2 py-1"
          >
            <div className="text-[16px] text-[#03393D]">
              {leader.leaderName}
            </div>
            <div className="text-[16px] text-[#03393D]">{leader.keywords}</div>
            <div className="text-[16px] text-[#03393D]">{leader.hashTag}</div>
            <div className="text-[16px] text-[#03393D]">
              {leader.twitterHandle}
            </div>
            <div className="text-[16px] text-[#03393D]">
              {leader.facebookId}
            </div>
            <div className="text-[16px] text-[#03393D]">
              {leader.instagramId}
            </div>
            <div className="text-[16px] text-[#03393D]">
              <button onClick={() => handleEditClick(leader)}>Edit</button> /
              <button onClick={() => handleDeleteClick(leader)}>Delete</button>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(leaders.length / leadersPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-3 py-1 mx-1 rounded ${
                  currentPage === index + 1
                    ? "bg-[#0B3A3D] text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
      <ToastContainer />
      {/* Add Leader Popup */}
      {trackLeader && (
        <div className="popup">
          <TrackLeaders show={handleTrackLeader} />
        </div>
      )}

      {/* Edit Popup */}
      {isEditPopupOpen && (
        <div className="w-[600px] h-[670px] top-[10%] left-[35%] bg-white p-6 rounded-lg shadow-lg absolute z-10 inset-0 pb-0 shadow-black border-2">
          <h2 className="text-[#0F364C] text-center text-[40px]">
            Track Leaders
          </h2>
          <div className="popup">
            <div className="popup-content">
              <div>
                <label
                  className="block text-[18px] text-[#03393D] font-semibold"
                  htmlFor="name"
                >
                  Leader Name
                </label>
                <input
                  className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
                  type="text"
                  name="name"
                  value={selectedLeader.leaderName}
                  onChange={(e) =>
                    setSelectedLeader({
                      ...selectedLeader,
                      leaderName: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  className="block text-[18px] text-[#03393D] font-semibold"
                  htmlFor="Keywords"
                >
                  Keywords
                </label>
                <input
                  className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
                  type="text"
                  name="keywords"
                  value={selectedLeader.keywords}
                  onChange={(e) =>
                    setSelectedLeader({
                      ...selectedLeader,
                      keywords: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  className="block text-[18px] text-[#03393D] font-semibold"
                  htmlFor="hashTag"
                >
                  Tags
                </label>
                <input
                  className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
                  type="text"
                  name="hashTag"
                  value={selectedLeader.hashTag}
                  onChange={(e) =>
                    setSelectedLeader({
                      ...selectedLeader,
                      hashTag: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  className="block text-[18px] text-[#03393D] font-semibold"
                  htmlFor="twitterHandle"
                >
                  Twitter Handle
                </label>
                <input
                  className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
                  type="text"
                  name="twitterHandle"
                  value={selectedLeader.twitterHandle}
                  onChange={(e) =>
                    setSelectedLeader({
                      ...selectedLeader,
                      twitterHandle: e.target.value,
                    })
                  }
                />
              </div>  
              <div>
                <label
                  className="block text-[18px] text-[#03393D] font-semibold"
                  htmlFor="facebookId"
                >
                  Facebook
                </label>
                <input
                  className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
                  type="text"
                  name="facebookId"
                  value={selectedLeader.facebookId}
                  onChange={(e) =>
                    setSelectedLeader({
                      ...selectedLeader,
                      facebookId: e.target.value,
                    })
                  }
                />
              </div>  
              <div>
                <label
                  className="block text-[18px] text-[#03393D] font-semibold"
                  htmlFor="instagramId"
                >
                  Instagram
                </label>
                <input
                  className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
                  type="text"
                  name="instagramId"
                  value={selectedLeader.instagramId}
                  onChange={(e) =>
                    setSelectedLeader({
                      ...selectedLeader,
                      instagramId: e.target.value,
                    })
                  }
                />
              </div>
              {/* <div>
                <label
                  className="block text-[18px] text-[#03393D] font-semibold"
                  htmlFor="instagramId"
                >
                  Instagram
                </label>
                <input
                  className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
                  type="text"
                  name="instagramId"
                  value={selectedLeader.instagramId}
                  onChange={(e) =>
                    setSelectedLeader({
                      ...selectedLeader,
                      instagramId: e.target.value,
                    })
                  }
                />
              </div>       */}

              {/* <button onClick={handleUpdate}>Update</button>
            <button onClick={() => setIsEditPopupOpen(false)}>Cancel</button> */}
              <div className="flex gap-16">
                <button
                  className="w-[433px] font-inter rounded-[6px] text-[24px] mt-5 px-[32px] py-2 text-gray-600 border border-gray-300 hover:bg-gray-200"
                  type="button"
                  onClick={() => setIsEditPopupOpen(false)}
                >
                  Cancel
                </button>

                <button
                  className="bg-[#0d353e] text-white hover:bg-[#154f5c] hover:text-[#FFFFFF] w-[433px] font-inter rounded-[6px] text-[24px] mt-5 px-[32px] py-2"
                  type="submit"
                  onClick={handleUpdate}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}
      {isDeletePopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Are you sure you want to delete this leader?</h2>
            <button onClick={handleDeleteConfirm}>Yes</button>
            <button onClick={() => setIsDeletePopupOpen(false)}>No</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Leader;

import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, orderBy } from "firebase/firestore";
import firebaseApp from "../../firebase";

const QueryArea = () => {
    const [allData, setAllData] = useState([]); // State to hold all data
    const [displayedData, setDisplayedData] = useState([]); // State to hold displayed data
    const [displayedCount, setDisplayedCount] = useState(12); // State to track number of items to display

    useEffect(() => {
        const readCollection = async () => {
            const db = getFirestore(firebaseApp);

            // Query the collection and sort by createdAt in descending order
            const q = query(collection(db, "users"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);

            // Map through the snapshot to extract data and document IDs
            const dataList = querySnapshot.docs.map((doc) => ({
                id: doc.id, // Add document ID
                ...doc.data(), // Spread document fields
            }));

            setAllData(dataList); // Set all data in state
            setDisplayedData(dataList.slice(0, displayedCount)); // Show first 12 items initially
        };

        readCollection();
    }, [displayedCount]);

    const handleShowMore = () => {
        const newDisplayedCount = displayedCount + 12;
        setDisplayedCount(newDisplayedCount);
        setDisplayedData(allData.slice(0, newDisplayedCount));
    };

    return (
        <section className="edu-section-gap faq-page-area">
            <div className="container">
                <div className="row">
                    {allData.length > 0 ? displayedData.map((user) => (
                        <div className="col-lg-4" key={user.id}>
                            <div className="query-card p-4 mb-4 border rounded">
                                <p>
                                    <strong>Name:</strong> {user.name} <br />
                                    <strong>Email:</strong> {user.email} <br />
                                    <strong>Phone:</strong> {user.phone} <br />
                                    <strong>Message:</strong> {user.message} <br />
                                    {user.createdAt && (
                                        <><strong>Date:</strong> {user.createdAt?.toDate ? user.createdAt.toDate().toLocaleDateString() : user.createdAt} <br /></>
                                    )}
                                </p>
                                <hr />
                            </div>
                        </div>
                    )) : (
                        <p>Loading...</p>
                    )}
                </div>

                {/* Show More Button */}
                {allData.length > 0 && allData.length > displayedData.length && (
                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <button
                                className="edu-btn btn-secondary"
                                onClick={handleShowMore}
                            >
                                Show More
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default QueryArea;

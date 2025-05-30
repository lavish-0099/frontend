// frontend/src/App.tsx
import React, { useEffect, useState } from 'react';

export default function App() {
    const [events, setEvents] = useState([]);

useEffect(() => {
    fetch('http://localhost:3000/events')
        .then(res => res.json())
        .then(data => {
            console.log('Fetched events:', data);
            setEvents(data);
        });
}, []);



    const handleGetTickets = (link: string) => {
        const email = prompt("Enter your email to get redirected:");
        if (email) window.location.href = link;
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Sydney Events</h1>
            <div className="grid gap-4">
                {events.map((e: any, idx) => (
                    <div key={idx} className="p-4 shadow rounded bg-white">
                        <h2 className="text-xl font-semibold">{e.title}</h2>
                        <p className="text-sm text-gray-600">{e.date}</p>
                        <button
                            onClick={() => handleGetTickets(e.link)}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            GET TICKETS
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

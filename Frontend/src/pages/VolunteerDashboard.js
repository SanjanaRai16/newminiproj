import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set loaded to true after the component mounts, ensuring animation triggers
        setIsLoaded(true);
    }, []);

    const containerStyle = {
        padding: '4rem',
        backgroundColor: '#f4f7fa',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '2rem',
        position: 'relative',
        backgroundImage:
            "url('https://static.toiimg.com/photo/msid-114011051,width-96,height-65.cms')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const headerStyle = {
        fontSize: '2.5rem',
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: '3rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textShadow: '2px 2px 10px rgba(0, 0, 0, 0.6)', // Added text shadow for better readability
    };

    const dashboardOptionsStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center',
        width: '100%',
        maxWidth: '600px',
    };

    const linkStyle = {
        display: 'block',
        margin: '10px auto',
        textAlign: 'center',
        padding: '2rem',
        borderRadius: '12px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        width: '80%',
        maxWidth: '400px',
        fontSize: '1.3rem',
        fontWeight: '500',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, background-color 0.3s, box-shadow 0.3s',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateX(0)' : 'translateX(100%)',
        animation: isLoaded ? 'slideInRight 1s ease-out forwards' : 'none',
    };

    const linkHoverStyle = {
        backgroundColor: '#0056b3',
        transform: 'translateY(-6px)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Volunteer Dashboard</h1>
            <div style={dashboardOptionsStyle}>
                <Link to="/volunteer/contact-admin" style={linkStyle}>Contact Admin</Link>
                <Link to="/volunteer/edit-profile" style={linkStyle}>Edit Profile</Link>
                <Link to="/volunteer/submit-report" style={linkStyle}>Submit Report</Link>
                <Link to="/volunteer/update-task-status" style={linkStyle}>Update Task Status</Link>
                <Link to="/volunteer/view-shelters" style={linkStyle}>View Shelters</Link>
                <Link to="/volunteer/profile" style={linkStyle}>Volunteer Profile</Link>
            </div>

            {/* Inline the keyframes */}
            <style>
                {`
                    @keyframes slideInRight {
                        0% {
                            transform: translateX(100%);
                            opacity: 0;
                        }
                        100% {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }

                    a:hover {
                        background-color: #0056b3;
                        transform: translateY(-6px);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    }

                    @media (max-width: 600px) {
                        h1 {
                            font-size: 2rem;
                        }

                        .linkStyle {
                            width: 90%;
                            font-size: 1rem;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Dashboard;

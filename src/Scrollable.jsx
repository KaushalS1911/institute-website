import React, { useEffect, useState } from 'react'

function Scrollable() {
    //Proceebar
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    return (
        <>
        </>
        // <div>
        //     <div className="processmain-wrapper">
        //         <div className="processMainstyle" style={{ width: `${scrollTop}%` }}></div>
        //     </div>
        // </div>
    )
}

export default Scrollable;

import React, { useState } from 'react';
// import SectionNav from SectionNav


export default function Home() {
    const [currentSection, setCurrentSection] = useState('');

    if (currentSection === '') {
        return <h3>Select a Section</h3>
    } else if (currentSection === 'Section 1') {
        return <Section1 />
    } else if (currentSection === 'Section 2') {
        return <Section2 />
    } else if (currentSection === 'Section 3') {
        return <Section3 />
    } else if (currentSection === 'Section 4') {
        return <Section4 />
    };

    const handlePageChange = (Section) => 
        setCurrentSection(Section);
    
    return (
        <div className="outer-body">
            <h1>Outer</h1>
            <div className="inner-body">
                <SectionNav 
                    currentSection={currentSection}
                    handlePageChange={handlePageChange}
                />
                <h2>Inner</h2>
                <div className="home-sections">
                    <h3>Sections</h3>
                    <div>Test</div>
                </div>
            </div>
        </div>
    )
}

// export default Home;
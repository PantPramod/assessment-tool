import { useState } from 'react';
import { Test } from '../../components/Test'
import { Dashboard } from '../../components/Dashboard';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Wrapper } from './Candidate.Styled';


const Candidate = () => {
    const [selectedTest, setSelectedTest] = useState<string | null>(null);
    return (
        <>
            {!selectedTest &&
                <Wrapper>
                    <Sidebar />
                    <Dashboard setSelectedTest={setSelectedTest} />
                </Wrapper>
            }

            {selectedTest &&

                <Test topic={selectedTest} />
            }
        </>

    )
}

export default Candidate
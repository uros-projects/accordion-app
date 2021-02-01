import React from 'react';
import Question from './Question';
import data from './data';

function App() {
    return (
        <main>
            <div className='container'>
                <h3>Account help - frequently asked questions</h3>
                <section className='info'>
                    {data.map( question => {
                        return <Question key={question.id} {...question} />
                    })}
                </section>
            </div>
        </main>
    );
}

export default App;

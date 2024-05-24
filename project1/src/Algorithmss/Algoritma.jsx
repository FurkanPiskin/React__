import React, { useState } from 'react'

import { Algorithms } from '../AlgorithmsData';
import  styles from"./algoritma.module.css"






function Algoritma() {
    const [algorithm, setAlgorithm] = useState(null); // null ile başlatın, çünkü henüz bir algoritma seçilmedi.

    const findAlgorithm = (id) => {
        const newAlgorithm = Algorithms.find((item) => item.id === id);
        setAlgorithm(newAlgorithm);
    };

    return (
        <div className={styles.algorithms}>
            <div className={styles.algorithmswrapper}>
            <div className={styles.buttons}>
            <button onClick={() => findAlgorithm(1)}>Selection Sort</button>
            <button onClick={() => findAlgorithm(2)}>Insertion Sort</button>
            <button onClick={() => findAlgorithm(3)}>Shell Sort</button>
            <button onClick={() => findAlgorithm(4)}>Merge Sort</button>
            <button onClick={() => findAlgorithm(5)}>Quick Sort</button>
            </div>

            {algorithm && (
                <div className={styles.select}>
                    
                    <div className={styles.image}>
                    <h1>{algorithm.name}</h1>
                    <img  src={algorithm.img} alt={algorithm.name} />
                    </div>
                    
                </div>
            )}
            </div>
        </div>
    );
}

export default Algoritma
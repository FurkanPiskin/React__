import React, { useEffect, useState } from 'react'
import styles from "./timer.module.css"

function Timer() {
    const [time, setTime] = useState(100);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(prevTime => {
                if (prevTime === 0) {
                    clearInterval(intervalId);
                    // Zamanlayıcı sıfır olduğunda uygulamanın başa dönmesi için bir işlem yapılabilir
                    // Örneğin, sayfayı yenileme (reload) veya belirli bir fonksiyonu çağırma gibi
                    // Bu örnekte sayfayı yeniliyorum (reload)
                    window.location.reload();
                    alert("Time is over");
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.timer}>Timer: {time}</div>
    );
}

export default Timer;

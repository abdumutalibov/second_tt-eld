import React from 'react'
import styles from "../../styles/Features.module.css";
import { IoMdTabletPortrait, } from "react-icons/io";
import { FiMonitor } from "react-icons/fi";

const Features = () => {
  return (
    <>
          <section className={styles.container} id='products/production'>
       
<div className={styles.mainCard}>
        <div className={styles.card}>

                <div className={styles.brand}><IoMdTabletPortrait/> </div>
                <div className={styles.line}></div>
            <h2 className={styles.title}> Driver App on any screen</h2>
            <p className={styles.desc}>Correct analysis of the fleet helps you set up precise business processes. Our 
"Driver App" provides the most comprehensive solutions in the market.</p>
        </div>
        <div className={styles.F_right}>
            <img className={styles.F_img1} src="https://tteld.com/assets/images/custom/mockup1.png" alt="device"/>
            <img className={styles.F_img2} src="https://tteld.com/assets/images/custom/driverAppBg.jpg" alt="" />
            </div>
</div>
<div>

</div>
    </section>
    <section className={styles.cont}>
      <div className={styles.mainCard}>
        <div className={styles.card}>
          
          <div className={styles.fadeInUp}>
            <img className={styles.F1_img1} src="https://tteld.com/assets/images/custom/dispatcher.png" alt="" />
            <img className={styles.F2_img2} src="https://tteld.com/assets/images/custom/dispatcherBg.png" alt="" />
           <div className={styles.F2_right}>

        <div className={styles.brand}><FiMonitor/> </div>
        <div className={styles.lines}></div>
        <h2 className={styles.feature}>Flexible Dispatch Board</h2>
        <p className={styles.feature2}>Dispatch Board is the dispatch software with a user-friendly interface created 
relying on customers' needs and requirements. The flexibility of our product helps 
you avoid unnecessary training of your employees.</p>
          </div>
          </div>
          
        </div>

      </div>
    </section>
    <section className={styles.container} id='products/production'>
<div className={styles.mainCard}>
        <div className={styles.card}>

                <div className={styles.brand}><IoMdTabletPortrait/> </div>
                <div className={styles.line}></div>
            <h2 className={styles.title}> Chat of drivers and dispatchers</h2>
            <p className={styles.desc}>We understand the importance of approaching each task integrally and believe in 
the power of simple and easy communication.</p>
        </div>
        <div className={styles.F_right}>
            <img className={styles.F_img1} src="https://tteld.com/assets/images/custom/chat.png" alt="device"/>
            <img className={styles.F_img2} src="https://tteld.com/assets/images/custom/chatBg.jpg" alt="" />
            </div>
</div>
<div>

</div>
    </section>
    <section className={styles.cont}>
      <div className={styles.mainCard}>
        <div className={styles.card}>
          
          <div className={styles.fadeInUp}>
            <img className={styles.F1_img1} src="https://tteld.com/assets/images/custom/gps.png" alt="" />
            <img className={styles.F2_imgs2} src="https://tteld.com/assets/images/custom/gpsBg.png" alt="" />
           <div className={styles.F2_right}>

        <div className={styles.brand}><FiMonitor/> </div>
        <div className={styles.lines}></div>
        <h2 className={styles.feature}>GPS Tracking</h2>
        <p className={styles.feature2}>Keep up with demand - dispatch and track your fleet with real-time GPS, leveraging weather and traffic data to exceed your customers expectations.</p>
          </div>
          </div>
          
        </div>

      </div>
    </section>
    </>

  )
}

export default Features
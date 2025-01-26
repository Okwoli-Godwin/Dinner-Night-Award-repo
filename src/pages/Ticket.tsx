import img from "../images/entertainment.jpg"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import img1 from "../assets/ticket1.jpg"
import img3 from "../assets/ticket3.jpg"
import img4 from "../assets/ticket4.jpg"
import styles from "./Ticket.module.css"

const Ticket = () => {
  return (
    <>
        <div className={styles.top_container}>
      <img 
        src={img} 
        alt="img"
        className={styles.image} 
      />
      <div className={styles.wrapper}>
        <div className={styles.holder}>
            <h4 className={styles.h4}>Ticket</h4>
            <MdKeyboardDoubleArrowRight size={18} className={styles.icon}/>
            <h2 className={styles.h2}>Get Your Ticket</h2>
        </div>
      </div>
    </div>

    <div className={styles.bottom_container}>
        <h2 className={styles.text}>Choose Your Tickets</h2>

        <div className={styles.content_holder}>
            <div className={styles.ticket}>
                <img src={img1} alt="img" className={styles.image2}/>
                <div className={styles.wrapper2}>
                    <div className={styles.title_holder}>
                        <h3 className={styles.title}>Regular</h3>
                    </div>

                    <div className={styles.amount_holder}>
                        <h3 className={styles.amount}>₦5,000</h3>
                    </div>
                    <div className={styles.small_text_holder}>
                        <p className={styles.small_text}>Get everything a Conference pass</p>
                        <p className={styles.small_text}>Enjoy 2 days of inspiring talks</p>
                        <p className={styles.small_text}>Breakout sessions exploring</p>
                        <p className={styles.small_text}>Challenging topics, great food.</p>
                        <p className={styles.small_text}>With experts at a Workshops</p>
                    </div>

                    <button className={styles.button}>
                        Buy
                    </button>
                </div>
            </div>

            <div className={styles.ticket}>
                <img src={img4} alt="img" className={styles.image2}/>
                <div className={styles.wrapper2}>
                    <div className={styles.title_holder}>
                        <h3 className={styles.title}>Vip</h3>
                    </div>

                    <div className={styles.amount_holder}>
                        <h3 className={styles.amount}>₦5,000</h3>
                    </div>
                    <div className={styles.small_text_holder}>
                        <p className={styles.small_text}>Get everything a Conference pass</p>
                        <p className={styles.small_text}>Enjoy 2 days of inspiring talks</p>
                        <p className={styles.small_text}>Breakout sessions exploring</p>
                        <p className={styles.small_text}>Challenging topics, great food.</p>
                        <p className={styles.small_text}>With experts at a Workshops</p>
                    </div>

                    <button className={styles.button2}>
                        Buy
                    </button>
                </div>
            </div>

            <div className={styles.ticket}>
                <img src={img3} alt="img" className={styles.image2}/>
                <div className={styles.wrapper2}>
                    <div className={styles.title_holder}>
                        <h3 className={styles.title}>Couples</h3>
                    </div>

                    <div className={styles.amount_holder}>
                        <h3 className={styles.amount}>₦5,000</h3>
                    </div>
                    <div className={styles.small_text_holder}>
                        <p className={styles.small_text}>Get everything a Conference pass</p>
                        <p className={styles.small_text}>Enjoy 2 days of inspiring talks</p>
                        <p className={styles.small_text}>Breakout sessions exploring</p>
                        <p className={styles.small_text}>Challenging topics, great food.</p>
                        <p className={styles.small_text}>With experts at a Workshops</p>
                    </div>

                    <button className={styles.button}>
                        Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Ticket

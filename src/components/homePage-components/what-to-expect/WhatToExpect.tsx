import React from "react";
// import Typography from './Typography';
import Typography from "../../typography/Typography";
import styles from "./WhatToExpect.module.css";
// import { Icon } from "lucide-react";
// import { burger } from "@lucide/lab";

const WhatToExpect: React.FC = () => {
  return (
    <section className={styles.container}>
      {/* First div with title and subtitle */}
      <div className={styles.intro}>
        <Typography variant="h3">What to Expect at the Event</Typography>
        <Typography variant="h6">Variety of benefits are.</Typography>
      </div>

      {/* Second div with columns */}
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.icon}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 53 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.1957 28.7025C49.1957 16.8212 39.9832 7.05109 28.3261 6.16011V0H24.8478V6.16011C13.1908 7.05141 3.97826 16.8212 3.97826 28.7025V32.3011H49.1957V28.7025ZM45.7174 28.8228H7.45652V28.7025C7.45652 18.154 16.0384 9.57207 26.587 9.57207C37.1355 9.57207 45.7174 18.1539 45.7174 28.7025V28.8228ZM0.5 36.5217H52.6739V40H0.5V36.5217Z"
                fill="#353535"
              />
            </svg>
          </div>
          <Typography variant="h4">Exclusive Dinner</Typography>
          <Typography variant="body">
            Indulge in a gourmet dining experience curated by top chefs,
            designed to delight your senses.
          </Typography>
        </div>
        <div className={styles.column}>
          <div className={styles.icon}>
            <svg
              width="43"
              height="44"
              viewBox="0 0 43 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.06138 15.1653C8.06138 18.7233 9.47477 22.1355 11.9906 24.6514C14.5065 27.1672 17.9187 28.5806 21.4767 28.5806C25.0347 28.5806 28.4469 27.1672 30.9628 24.6514C33.4786 22.1355 34.892 18.7233 34.892 15.1653C34.892 11.6074 33.4786 8.19512 30.9628 5.67926C28.4469 3.1634 25.0347 1.75 21.4767 1.75C17.9187 1.75 14.5065 3.1634 11.9906 5.67926C9.47477 8.19512 8.06138 11.6074 8.06138 15.1653Z"
                stroke="#353535"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.4766 28.5806L29.0786 41.75L32.6515 34.5214L40.6963 35.0401L33.0943 21.873M9.85445 21.873L2.25244 35.0424L10.2972 34.5214L13.8701 41.7478L21.4721 28.5806"
                stroke="#353535"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Typography variant="h4">Award Ceremony</Typography>
          <Typography variant="body">
            Celebrate excellence as we honor standout individuals and
            organizations in various fields.
          </Typography>
        </div>
        <div className={styles.column}>
          <div className={styles.icon}>
            <svg
              width="43"
              height="40"
              viewBox="0 0 43 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.21053 40C3.05263 40 2.06175 39.5881 1.23789 38.7642C0.414035 37.9403 0.00140351 36.9488 0 35.7895V12.6316C0 11.4737 0.412632 10.4828 1.23789 9.65895C2.06316 8.83509 3.05403 8.42246 4.21053 8.42105H12.6316V4.21053C12.6316 3.05263 13.0442 2.06175 13.8695 1.23789C14.6947 0.414035 15.6856 0.00140351 16.8421 0H25.2632C26.4211 0 27.4126 0.412632 28.2379 1.23789C29.0632 2.06316 29.4751 3.05403 29.4737 4.21053V8.42105H37.8947C39.0526 8.42105 40.0442 8.83368 40.8695 9.65895C41.6947 10.4842 42.1067 11.4751 42.1053 12.6316V35.7895C42.1053 36.9474 41.6933 37.9389 40.8695 38.7642C40.0456 39.5895 39.054 40.0014 37.8947 40H4.21053ZM16.8421 8.42105H25.2632V4.21053H16.8421V8.42105ZM37.8947 27.3684H27.3684V31.5789H14.7368V27.3684H4.21053V35.7895H37.8947V27.3684ZM18.9474 27.3684H23.1579V23.1579H18.9474V27.3684ZM4.21053 23.1579H14.7368V18.9474H27.3684V23.1579H37.8947V12.6316H4.21053V23.1579Z"
                fill="#353535"
              />
            </svg>
          </div>
          <Typography variant="h4">Business Networking</Typography>
          <Typography variant="body">
            Connect with industry leaders and like-minded professionals to
            expand your network.
          </Typography>
        </div>
        <div className={styles.column}>
          <div className={styles.icon}>
            <svg
              width="38"
              height="44"
              viewBox="0 0 38 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7883 21.5766C17.1944 21.5766 21.5766 17.1944 21.5766 11.7883C21.5766 6.38222 17.1944 2 11.7883 2C6.38222 2 2 6.38222 2 11.7883C2 17.1944 6.38222 21.5766 11.7883 21.5766Z"
                stroke="#353535"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M21.5769 12.9647C21.5906 12.9784 26.1995 18.7744 35.4038 30.3526C35.5597 30.5403 35.6399 30.7794 35.6287 31.0232C35.6174 31.2669 35.5156 31.4976 35.3431 31.6701L31.3456 35.6677C31.173 35.8402 30.9423 35.942 30.6986 35.9532C30.4549 35.9645 30.2157 35.8843 30.0281 35.7284L13.572 21.5765M22.0369 22.0365L24.806 24.8056"
                stroke="#353535"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.7671 41.2374C14.6439 38.7923 16.9245 37.5697 19.6091 37.5697C23.638 37.5697 28.3922 42.6303 32.4475 41.9343C36.5037 41.2374 37.6646 37.2379 35.1686 35.0238"
                stroke="#353535"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Typography variant="h4">Entertainment</Typography>
          <Typography variant="body">
            Indulge in a gourmet dining experience curated by top chefs,
            designed to delight your senses.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;

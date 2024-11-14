import Link from "next/link";
import styles from "../styles/Events.module.css";

export default function Events() {
  const technicalEvents = [
    { title: "Paper Presentation", location: "Room 101", eventId: "ppt" },
    { title: "Web Designing", location: "Room 102", eventId: "webDesign" },
    { title: "Quiz", location: "Room 103", eventId: "quiz" },
    { title: "Code Debugging", location: "Room 104", eventId: "codeDebugging" },
  ];

  const nonTechnicalEvents = [
    { title: "Treasure Hunt", location: "Room 201", eventId: "treasureHunt" },
    { title: "As You Like It", location: "Room 202", eventId: "asYouLikeIt" },
  ];

  return (
    <section className={styles.events}>
   
      <h2>Events</h2>

      {/* Technical Events */}
      <h3 className={styles.subheading}>Technical Events</h3>
      <div className={styles.category}>
        <div className={styles.eventCards}>
          {technicalEvents.map((event, index) => (
            <div key={index} className={styles.eventCard}>
              <Link
                href={`/events/${event.eventId}`}
                className={styles.eventLink}
              >
                <div className={styles.eventContent}>
                  {/* <h3 className={styles.eventTitle}>
                    <span className={styles.arrow}>→</span>
                    {event.title}
                  </h3> */}
                  <h3 className={styles.eventTitle}>
                    {event.title}{" "}
                    <span className={styles.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M8 5l7 7-7 7"
                          stroke="black"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </h3>

                  <p className={styles.eventLocation}>
                    Location: {event.location}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Non-Technical Events */}
      <h3 className={styles.subheading}>Non-Technical Events</h3>
      <div className={styles.category}>
        <div className={styles.eventCards}>
          {nonTechnicalEvents.map((event, index) => (
            <div key={index} className={styles.eventCard}>
              <Link
                href={`/events/${event.eventId}`}
                className={styles.eventLink}
              >
                <div className={styles.eventContent}>
                  <h3 className={styles.eventTitle}>
                    {/* <span className={styles.arrow}>→</span> */}
                    {event.title}
                    <span className={styles.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M8 5l7 7-7 7"
                          stroke="black"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </h3>
                  <p className={styles.eventLocation}>
                    Location: {event.location}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

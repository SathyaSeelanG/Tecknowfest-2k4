// pages/events/[eventId].js
import { useRouter } from 'next/router';
import styles from '../../styles/EventDetails.module.css';
import Header from '../../components/Header';
import WinnersList from '../../components/WinnersList';
import Head from 'next/head';
const eventDetails = {
  ppt: {
    title: "Paper Presentation",
    location: "Room 101",
    rules: "Submit your paper 1 week before the event. Maximum 3 members per team.",
    description: "Present your research paper in front of a panel of experts. Get a chance to showcase your skills and ideas."
  },
  webDesign: {
    title: "Web Designing",
    location: "Room 102",
    rules: "Design a functional website within 6 hours using HTML, CSS, and JavaScript.",
    description: "Compete to build the best website design in a limited time frame. Judges will evaluate based on creativity and functionality.",
    // winners: [
    //     { teamName: "Team Alpha", members: ["Alice", "Bob", "Charlie"] },
    //     { teamName: "Team Beta", members: ["David", "Eva"] },
    //     { teamName: "Team Gamma", members: ["Frank", "Grace", "Helen"] },
    //   ],  
},
  quiz: {
    title: "Quiz",
    location: "Room 103",
    rules: "Individual participation. 20 questions in 30 minutes.",
    description: "Test your knowledge in a fun and challenging quiz competition."
  },
  codeDebugging: {
    title: "Code Debugging",
    location: "Room 104",
    rules: "Identify and fix bugs in the given code. Time limit: 1 hour.",
    description: "Challenge yourself to debug a program within an hour. The one who finds and fixes the most bugs wins."
  },
  treasureHunt: {
    title: "Treasure Hunt",
    location: "Room 201",
    rules: "Follow clues and solve puzzles to find the treasure. Team-based event.",
    description: "A fun-filled treasure hunt across campus. Solve puzzles to win exciting prizes."
  },
  asYouLikeIt: {
    title: "As You Like It",
    location: "Room 202",
    rules: "Perform a scene from Shakespeare's play. Minimum 3 participants.",
    description: "A creative dramatics competition where you can perform a scene from the play."
  }
};
const winners = [
    { teamName: "Team Alpha", members: ["Alice", "Bob", "Charlie"] },
    { teamName: "Team Beta", members: ["David", "Eva"] },
    { teamName: "Team Gamma", members: ["Frank", "Grace", "Helen"] },
    // More teams if needed...
  ];
export default function EventDetails() {
  const router = useRouter();
  const { eventId } = router.query;

  const event = eventDetails[eventId];

  if (!event) {
    return <p>Event not found.</p>;
  }

  return (
    <>
    <Header/>
    <Head>
        <title>{event.title} -Tecknowfest 2k4</title> {/* Set the page title */}
        {/* <link rel="icon" href="/favicon.ico" /> Link to the favicon */}
      </Head>
    <div className={styles.eventDetails}>
      <h1>{event.title}</h1>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Rules:</strong> {event.rules}</p>
      <p><strong>Description:</strong> {event.description}</p>
    </div>
    <div className={styles.winnerDetails}>
    <WinnersList winners={event.winners} />
    </div>

    </>
  );
}

import styles from '../styles/winner.module.css';

export default function WinnersList({ winners }) {
  // Check if there are winners
  if (!winners || winners.length === 0) {
    return null; // If no winners, don't show anything
  }

  return (
    <section className={styles.winners}>
      <h2>Top 3 Winners</h2>
      <div className={styles.tableContainer}>
        <table className={styles.winnerTable}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team Name</th>
              <th>Team Members</th>
            </tr>
          </thead>
          <tbody>
            {winners.slice(0, 3).map((winner, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{winner.teamName}</td>
                <td>{winner.members.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// components/Contact.js
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const contactData = [
    {
      role: 'Staff Coordinator',
      contacts: [
        { name: 'Sathya', number: '(123) 456-7890' },
        { name: 'John', number: '(234) 567-8901' },
        { name: 'Anita', number: '(345) 678-9012' }
      ]
    },
    {
      role: 'Student Coordinator',
      contacts: [
        { name: 'Ravi', number: '(456) 789-0123' },
        { name: 'Shreya', number: '(567) 890-1234' },
        { name: 'Vikas', number: '(678) 901-2345' },
        { name: 'Priya', number: '(789) 012-3456' },
        { name: 'Karan', number: '(890) 123-4567' }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.contact}>
        <h2>Any Queries, Contact</h2>

        {contactData.map((section, index) => (
          <div key={index}>
            <div className={styles.contactHeading}>{section.role}</div>
            <div className={styles.contactList}>
              {section.contacts.map((contact, idx) => (
                <div
                  key={idx}
                  className={styles.contactListItem}
                >
                  <span className={styles.name}>{contact.name}</span> - <span className={styles.number}>{contact.number}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

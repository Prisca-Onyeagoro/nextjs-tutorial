import { useState } from 'react';
import { useRouter } from 'next/router';

const events = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const Router = useRouter();

  const fetchsports = async () => {
    const response = await fetch(
      'http://localhost:4000/events?category=sports'
    );
    const data = await response.json();
    setEvents(data);
    Router.push('/events?category=sports', undefined, { shallow: true });
  };
  const fetchpolitics = async () => {
    const response = await fetch(
      'http://localhost:4000/events?category=politics'
    );
    const datas = await response.json();
    setEvents(datas);
  };

  return (
    <>
      <h1>Events of the week</h1>
      <button onClick={fetchsports}>Sports</button>

      <button onClick={fetchpolitics}>Politics</button>

      {events.map((event) => {
        return (
          <>
            <div key={event.id}>
              <h4>
                {event.id}:{event.title}
              </h4>
              <p>
                {event.category}: {event.date}
              </p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default events;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? 'category=sports' : '/';
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}

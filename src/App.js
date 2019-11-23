import React, { useEffect, useState } from 'react';
import styles from './App.css';
import URL from 'url:./data.json';

console.log('App.css:', styles)

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(URL).then(data => data.json()).then(setData);
  }, []);

  return (
    <>
      <div className={styles.App}>
        Edit <code>index.css</code> and <code>App.css</code> a couple of times to trigger this bug.
      </div>
      {data && <pre>{JSON.stringify(data)}</pre>}
    </>
  );
}
import { Outlet } from 'react-router-dom';
import classes from './App.module.css';

const App = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Game Of Thrones API</h1>
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
};

export default App;

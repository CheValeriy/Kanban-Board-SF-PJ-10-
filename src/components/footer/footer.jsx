import React from 'react';
import './footer.css';

function Footer({ tasks }) {

  return (
    <footer className='footer'>
      <p className='footer__task-count'>Active tasks: {tasks.filter(task => task.status === "backlog").length}</p>
      <p className='footer__task-count'>Finished tasks: {tasks.filter(task => task.status === "finished").length}</p>
      <p className='footer__kanban-credits'>Kanban board by
        <a className='footer__kanban-author' href='https://github.com/CheValeriy' target='_blank' rel="noreferrer">Chernyshuk Valeriy</a>, 2024</p>
    </footer>
  )
}

export default Footer;
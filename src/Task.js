import './task.css';

export function TaskCard({ready}) {
  return (
    <div className='card'>
      <h1 className={ready ? 'bg-green' : 'bg-red'}>TaskCard</h1>
    </div>
  );
}

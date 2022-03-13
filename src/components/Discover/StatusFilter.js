const StatusFilter = ({ statuses, selected, setSelected }) => {
  return (
    <div className="grid grid-cols-2 gap-6 p-5">
      {statuses.map((status) => (
        <button
          className={`px-3 py-2 text-sm text-gray-900 border rounded-lg transition ${
            selected === status.id ? 'bg-gray-100' : ''
          }`}
          onClick={() => setSelected(status.id)}
        >
          {status.title}
        </button>
      ))}
    </div>
  );
};

export default StatusFilter;

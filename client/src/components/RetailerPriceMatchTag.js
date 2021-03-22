import PercentTag from './PercentTag';

const RetailerPriceMatchTag = ({ change, direction }) => {
  console.log(direction);
  if (direction === undefined || change === undefined) return 'N/A'
  if (change >= 0) return <div className="flex items-center"><div className="material-icons text-green">done</div><PercentTag value={change} direction={direction} /></div>;
  return <div className="flex items-center"><div className="material-icons text-red">clear</div><PercentTag value={change} direction={direction} /></div>
}

export default RetailerPriceMatchTag;
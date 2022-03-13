const TradingInfo = ({ concluded, canceled }) => {
  return (
    <div className="w-full mt-6 rounded-md shadow-lg shadow-gray-600/10 bg-white p-0.5">
      <div className="flex justify-between items-center p-3.5 border-b">
        <h2 className="text-2xl font-bold font-madeOuterSans">
          Trade Information
        </h2>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold leading-6">Price</h4>
          <span className="px-2 py-1.5 text-sm font-bold leading-4 border rounded font-madeOuterSans text-green border-green">
            105 MATIC
          </span>
        </div>
        <p className="text-sm leading-[30px] text-gray-500 mt-1">
          105 MATIC has been reserved for this trade. This includes the gas fee
          of 0.04 MATIC
        </p>

        <h4 className="text-lg font-semibold leading-6 mt-5.5">
          Contract Address
        </h4>
        <p className="text-blue-link">
          0x1746f86011ACa650092E8c964062CaFbe93eDFFA
        </p>

        <div className="flex justify-between w-full mt-4">
          <div>
            <h5 className="text-sm leading-6">Escrow Id</h5>
            <h4
              className={`font-medium leading-6 
              ${concluded || canceled ? 'text-blue-link' : ''}
            `}
            >
              1x0b8sAA082x82
            </h4>
          </div>
          <div>
            <h5 className="text-sm leading-6">Token Id</h5>
            <h4 className="font-medium leading-6 ">777</h4>
          </div>
          <div>
            <h5 className="text-sm leading-6">Token Standard</h5>
            <h4 className="font-medium leading-6 ">ERC-1155</h4>
          </div>
        </div>

        {concluded && (
          <div className="flex items-center justify-between mt-10">
            <h4 className="text-lg font-semibold leading-6">Trade Status</h4>
            <span className="px-2 py-1.5 text-sm font-bold leading-4  rounded font-madeOuterSans text-white bg-green">
              Completed
            </span>
          </div>
        )}

        {canceled && (
          <div className="flex items-center justify-between mt-10">
            <h4 className="text-lg font-semibold leading-6">Trade Status</h4>
            <span className="px-2 py-1.5 text-sm font-bold leading-4  rounded font-madeOuterSans text-white bg-red">
              Cancelled
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradingInfo;

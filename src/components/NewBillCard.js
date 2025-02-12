import React from 'react';

const NewBillCard = ({ bill, handleUnCast, handleFire }) => {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bill.id}
        onClick={() => {handleUnCast(bill)}}
      >
        <div className="image">
          <img alt={bill.name} src={bill.photo} />
        </div>
        <div className="content">
          <div className="header">{bill.name}</div>
          <div className="meta text-wrap">
            <small>{bill.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bill.health}
          </span>
          <span>
            <i className="icon dollar" />
            {bill.salary}
          </span>
          <span>
            <i className="icon star" />
            {bill.rating}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini blue button"
                onClick={(e) => {e.stopPropagation() 
                    handleFire(bill.id)} }
              >
                FIRE
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewBillCard;

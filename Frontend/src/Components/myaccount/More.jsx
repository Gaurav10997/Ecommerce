function More({Icon ,name,ArrowSymbol}) {
    return (
    <div className="moreOptions">
          <div className="moreoptinleft">
              <Icon></Icon>
              <p>{name}</p>
          </div>
          {ArrowSymbol && <ArrowSymbol></ArrowSymbol>}
         
      </div>
      
      );
  }

export default More
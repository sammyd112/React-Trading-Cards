'use strict';

function Homepage() {
  return (
    <React.Fragment>
      <p> This is a great site for viewing trading cards.</p>
      <a href="/cards">Click here to view the trading cards.</a>
      <img src="/static/img/balloonicorn.jpg" />
    </React.Fragment>
    );
}

// function TradingCardContainer() {
//   return (
//     <React.Fragment>
//       {tradingCardData.map(currentCard =>
//           <p key={currentCard.id}>{currentCard.name}</p>
//       )}
//     </React.Fragment>
//   );
// }

ReactDOM.render(<Homepage />, document.querySelector('#app'));

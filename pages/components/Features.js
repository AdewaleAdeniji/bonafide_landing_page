const Features = (props) => {
  return (
    <div className="features full-12">
      <div className="feature-title">Benefits of using Bonafide</div>
      <div className="flex-center">
        <div className="features-row-one">
            <div className="feature-card">
            <div className="f-title">
                <img src="/assets/images/2000$.svg"/>
            </div>
            <div className="f-text">
                Participate to win $2000 weekly. If you don’t win, you get your
                money back.
            </div>
            </div>
            <div className="feature-card">
            <div className="f-title">
              <img src="/assets/images/3percent.svg"/>
            </div>
            <div className="f-text">Earn 3% interest on your savings</div>
            </div>
        </div>
      </div>
      <div className="flex-center ">
      <div className="features-row-two desk">
        <div className="feature-card">
          <div className="f-text">Wire transfers to anywhere in the world.</div>
          <div className="f-image">
            <img src="/assets/images/wires.svg" />
          </div>
        </div>
        <div className="feature-card">
          <div className="f-text">Fund from any crypto exchange.</div>
          <div className="f-image">
            <img src="/assets/images/usdc.svg" />
          </div>
        </div>
        <div className="feature-card">
          <div className="f-text">Pay with cards<br/> (Coming soon)</div>
          <div className="f-image">
            <img src="/assets/images/cards.svg" />
          </div>
        </div>
      </div>
      </div>
      <div className="flex-center tabcards">
      <div className="features-row-two  desktab">
        <div className="feature-card">
          <div className="f-text">Wire transfers to anywhere in the world.</div>
          <div className="f-image">
            <img src="/assets/images/wires.svg" />
          </div>
        </div>
        <div className="feature-card">
          <div className="f-text">Wire transfers to anywhere in the world.</div>
          <div className="f-image">
            <img src="/assets/images/wires.svg" />
          </div>
        </div>
        </div>
        <div className="features-row-two desktab">
        <div className="feature-card">
          <div className="f-text">Wire transfers to anywhere in the world.</div>
          <div className="f-image">
            <img src="/assets/images/wires.svg" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Features;

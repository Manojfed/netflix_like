function Name() {
  return (
    <div>
      <Image />
      <Title />
    </div>
  );
}
function Names() {
  return (
    <section className="list display">
      <Name />
      <Name />
      <Name />
      <Name />
    </section>
  );
}
function Image() {
  return (
    <img src="https://occ-0-7275-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABefmsTKRs7kXznoWaA76E1rsz9-wYB0Jx-G7qk1the-k9MBZmJi1ISCTEccGIZqbv8JHxRlDZE1Frw00cqiUGG29ysFK4XYz151I67208h2Uxrd41Qc7BvcLXHONOni5w2mk.jpg?r=788" />
  );
}
function Title() {
  return <h1>netflix show</h1>;
}

export default Names;

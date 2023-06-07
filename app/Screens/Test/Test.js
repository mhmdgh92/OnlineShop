//Stateful
class Test extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'Chris',
      info: {
        id: 1,
        name: 2
      }
    }
  }

  render() {
    return (
      <SomeComponent />
    );
  }
}

//Stateless
const Test = () => (
  <SomeComponent />
)

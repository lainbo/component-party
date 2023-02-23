export class App {
  happy = false;

  handleAnswer(...reply) {
    this.happy = reply[0] === "yes" ? true : false;
  }
}

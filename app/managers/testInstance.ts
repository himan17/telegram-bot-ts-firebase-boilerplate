class TestInstance {
  private void() {}
  
  constructor() {
    console.log("Hello from test instance");
  }
}

export const test = new TestInstance();

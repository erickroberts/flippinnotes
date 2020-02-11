
class AuthConfig {

  constructor() {
    this.domain = "flippinnotes.auth0.com";
    this.clientId = "pn3Igopcy0KZ3KZ8k2hR0N8gMViRRFSC";

  }
  getDomain() {
    return this.domain;
  }
  getClientId(){
    return this.clientId;
  }
}


export default AuthConfig



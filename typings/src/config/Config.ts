export default class AvonConfig extends Object {
  token: string;
  prefix: string;
  nodes: object[];
  spotiId: string;
  owners: string[];
  spotiSecret: string;
  spotiNodes: object[];
  webhooks: object;
  supportId: string;
  color: string;
  server: string;
  voteUrl: string;
  voteApi: string;
  setupBgLink: string;
  constructor() {
    super();
    this.token =
      "";
    this.prefix = "+";
    this.nodes = [
      {
        name: `Avon`,
        url: `localhost:2333`,
        auth: `avonbot`,
        secure: false,
      },
    ];
    this.voteApi =
      "";
    this.webhooks = {
      guildCreate:
        "",
      guildDelete:
        "",
      Cmds: "",
    };
    this.server = "https://discord.gg/avonbot";
    this.spotiId = "02f97b118feb4ce6bed69ab034cedcef";
    this.spotiSecret = "8a56dc045e9a458183a7ca6a5db7774e";
    this.owners = ["1015763488938938388"];
    this.color = "#ff0000";
    this.supportId = "";
    this.spotiNodes = [
      {
        id: `Avon`,
        host: `localhost`,
        port: 2333,
        password: `avonbot`,
        secure: false,
      },
    ];
    this.voteUrl = "https://top.gg/bot/904317141866647592/vote";
    this.setupBgLink =
      "";
  }
}

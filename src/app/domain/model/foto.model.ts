export class Foto {
  public filepath: string;
  public webviewpath: string;
  public url: string;

  constructor()
  constructor(filepath?: string, webviewpath?: string,
              url?: string) {
    this.filepath = (filepath)? filepath : '';
    this.webviewpath = (webviewpath)? webviewpath : '';
    this.url = (url)? url : '';
  }
}

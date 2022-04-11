export class UserArticles{
    public id: number;
    public title: string;
    public subtitle: string;
    public text: string;
    public url: string;
    public image: string;
    public type: type;
  
    constructor(id?: number, title?: string, text?: string,
        subtitle?: string, url?: string, image?: string, type?: type){
      this.id = (id)? id : 999;
      this.title = (title)? title : '';
      this.text = (text)? text : '';
      this.subtitle = (subtitle)? subtitle : '';
      this.url = (url)? url : '';
      this.image = (image)? image : '';
      this.type = (type)? type : 0;
    }
  }
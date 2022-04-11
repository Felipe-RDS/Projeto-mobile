export class CommonArticles{
    public id: number;
    public title: string;
    public icon: string;
    public subtitle: string;
    public text: string;
    public url: string;
    public image: string;
  
    constructor(id?: number, title?: string, text?: string,
        subtitle?: string, url?: string, image?: string, icon?: string){
      this.id = (id)? id : 0;
      this.title = (title)? title : '';
      this.text = (text)? text : '';
      this.subtitle = (subtitle)? subtitle : '';
      this.url = (url)? url : '';
      this.image = (image)? image : '';
      this.icon = (icon)? icon : '';
    }
  }
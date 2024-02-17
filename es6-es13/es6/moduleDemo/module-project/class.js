class CreateBox{
    constructor(select,data){
       this.box = document.querySelector(select)
       this.title = data.title
       this.list = data.list
       //初始化完成后马上进行渲染
       this.render()
    }
    render(){
        let h1 = this.box.querySelector("h1")
        let ul  = this.box.querySelector("ul")
        h1.innerHTML = this.title
        ul.innerHTML = this.list.map(item=>`<li>${item}</li>`).join("")
    }
}

class CreateImgBox extends CreateBox{
    constructor(select,data){
        super(select,data)
        this.url = data.url
        this.render()
    }

    render(){
        super.render()
        let img = this.box.querySelector("img")
        img.src = this.url
    }
}
export {
    CreateBox,
    CreateImgBox
}
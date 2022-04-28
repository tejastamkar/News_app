export var RecRef = [];
export const Recommanded = (props) => {
    if (RecRef.length <= 0) {
        RecRef = JSON.parse(localStorage.getItem("Recommanded"));
    }
    RecRef.push(props);
    if (RecRef.length >= 4) {
        RecRef = RecRef.slice(1,)
    }

    localStorage.setItem("Recommanded", JSON.stringify(RecRef));
}


export const GetData = ({ News, Books, Article, Magzine }) => {
    var Data = []
    var currRecRef = JSON.parse(localStorage.getItem("Recommanded"));
    for (var i = 0; i < 3; i++) {
        if (currRecRef[i] === 'News') {
            Data[i] = News[Math.floor(Math.random() * News.length)]
        } else if (currRecRef[i] === 'Article') {
            Data[i] = Article[Math.floor(Math.random() * Article.length)]
        }
        else if (currRecRef[i] === 'Magzine') {
            Data[i] = Magzine[Math.floor(Math.random() * Magzine.length)]
        }
        else {
            Data[i] = Books[Math.floor(Math.random() * Books.length)]

        }
    }
    return Data;
}
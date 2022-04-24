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


export const GetData = ({ News, Books }) => {
    var Data = []
    var currRecRef = JSON.parse(localStorage.getItem("Recommanded"));
    for (var i = 0; i < 3; i++) {
        if (currRecRef[i] === 'News') {
            Data[i] = News[Math.floor(Math.random() * News.length)]
        } else {
            Data[i] = Books[Math.floor(Math.random() * Books.length)]

        }
    }
    return Data;
}
function CatFactCard(props) {
    const { data } = props;
    return (
        <div>
        <button>{data[0]}</button>
        <button>{data[1]}</button>
        </div>
    );
}

export default CatFactCard;
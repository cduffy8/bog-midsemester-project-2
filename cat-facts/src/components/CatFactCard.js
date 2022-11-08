function CatFactCard(props) {
    const { index, facts } = props;
    return (
        <div>
            {facts[index]}
        </div>
    );
}

export default CatFactCard;
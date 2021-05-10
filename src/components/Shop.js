function Shop(props) {

    const {items, handleSubmit} = props;

    return(
        <div id="shop">
            {items.map((item) => {
                return (
                <div key={item.id}>
                    <img src={item.img}/>
                    <p className="item-name">{item.name}</p>
                    <p className="price">${item.price}</p>

                    <form onSubmit={e => handleSubmit(e, item.id)}>
                        <input type="number" min="0" max="99" defaultValue ="0"/>
                        <button type="submit">Add to cart</button>
                    </form>
                </div>
                )}
            )}       
        </div>
    );
}

export default Shop;

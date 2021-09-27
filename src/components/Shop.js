function Shop(props) {

    const {items, tab, handleSubmit} = props;

    return(
        <div id="shop">
            <div id="shop-filters">
                <div className="tab">
                    <p onClick={() => tab()}>All</p>
                </div>
                <div className="tab">
                    <p onClick={() => tab("shoes")}>Shoes</p>
                </div>
                <div className="tab">
                    <p onClick={() => tab("bags")}>Bags</p>
                </div>
            </div>

            <div id="catalog">
                {items.map((item) => {
                    return (
                    <div key={item.id}>
                        <img src={item.img}/>
                        <p className="item-name">{item.name}</p>
                        <p className="price">${item.price}</p>

                        <form onSubmit={e => handleSubmit(e, item.id, item.name)}>
                            <input type="number" min="0" max="99" defaultValue ="0"/>
                            <button type="submit">Add to cart</button>
                        </form>
                    </div>
                    )}
                )}    
            </div>
        </div>
    );
}

export default Shop;

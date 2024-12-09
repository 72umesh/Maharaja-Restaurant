import "./MenuItem.css"

function MenuItem(props){

    return(
        <div className="menuitem">
            <div className="menuitem-head">
                <div className="menuitem-name">
                    <p className="p-cormorant" style={{color: '#DCCA87'}}>{props.title}</p>
                </div>
                <div className="menuitem-dash" />
                <div className="menuitem-price">
                    <p className='p-cormorant'>{props.price}</p>
                </div>

            </div>
            <div className="menuitem-sub">
                <p className="p-opensans" style={{color:"#AAA"}}>{props.tags}</p>
            </div>

        </div>
    )

}
export default MenuItem;
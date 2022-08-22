class App extends React.Component{
    constructor (props) {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    state = {
        items: items,
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false
    } 

    handleChange = (event) =>{
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchased: this.state.isPurchased
          }
          this.setState({
            items: [ newItem, ...this.state.items],
            item: '',
            brand: '',
            units: '',
            quantity: 0,
            isPurchased: false
        })
    }

    handleRemove = (index, event) => {
        const newItems = this.state.items
        newItems.splice(index, 1)
        
        this.setState({
            items: newItems
        })
    }

    render () {
        return(
            <div id = 'paper'>
                <h1> Grocery List </h1>

                <div id = 'form'>
                    <form onSubmit={this.handleSubmit}>
                        <label className = 'formData' htmlFor='item'>Item</label>
                        <input type='text' value={this.state.item} onChange={this.handleChange} id='item' placeholder='name of item' />
                        <br />
                        <label className = 'formData' htmlFor='brand'>Brand</label>
                        <input type='text' value={this.state.brand} onChange={this.handleChange} id='brand' />
                        <br />
                        <label className = 'formData' htmlFor='units'>Units</label>
                        <input type='text' value={this.state.units} onChange={this.handleChange} id='units' />
                        <br />
                        <label className = 'formData' htmlFor='quantity'>Quantity</label>
                        <input type='number' value={this.state.quantity} onChange={this.handleChange} id='quantity' />
                        <br />
                        <input  type="submit" />
                    </form>
                </div>

                <div id = 'list'>
                    <table>
                        <tr>
                            <th> Item </th>
                            <th> Brand </th>
                            <th> Units </th>
                            <th> Quantity </th>
                            <th>  </th>
                        </tr>
                        {this.state.items.map((product, index) => {
                            if (!product.isPurchased) {
                                return ( 
                                <tr>
                                    <td> {product.item} </td>
                                    <td> {product.brand} </td>
                                    <td> {product.units} </td>
                                    <td> {product.quantity} </td>
                                    <button onClick = {() => this.handleRemove(index)}> Remove </button>
                                </tr>
                                )
                            }
                        }
                        )
                        }
                    </table>
                </div>

            </div>     
        )
    }
}





ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
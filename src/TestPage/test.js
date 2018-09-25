import React from 'react'

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = { fetchCompleted: false, data: null }
    }

    componentDidMount(){
        this.asyncCall()
    }

     async asyncCall() {
        console.log('calling')
        let result = await fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
        let response = await result.json()
        let data = await response
        console.log(data)
        this.setState({data}) 
        this.setState( {fetchCompleted: true}) 
        
        
    }

    render() {
        const { data } = this.state
        return <div>This is just a test
            {
                this.state.fetchCompleted ?
                (
                <div>
                    <div> {data.id} </div>
                    <div> {data.title} </div>
                    <div> {data.description} </div>
                    <div> {data.director} </div>
                 </div>
                )
               
                : <div> Loading </div>
            }
            
            
        </div>
    }
}

export default Test
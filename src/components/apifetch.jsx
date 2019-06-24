import React, {Component} from 'react';
import {Link} from  "react-router-dom";
class apifetch extends Component
{
    constructor(props){
        super(props);
        this.state={
            items:[],
            isLoaded: false,
        }
    }
    componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(json => {
           this.setState({
               isLoaded: true,
               items: json,
           })
       });

    }
    render()
    {
        var{isLoaded,items} = this.state;
        if(!isLoaded){
            return <div className="App"></div>;
        }
        else{
            return(
                <div>
                    <nav class="navbar navbar-inverse" id="pad">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <a class="navbar-brand">Airtel Database Modifier</a>
                        </div>
                        <ul class="nav navbar-nav">
                        <li><a>Home</a></li>
                        <li  class="active"><a href="/apifetch">Modify Database</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                        <li><a href="/"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
                        </ul>
                    </div>
                    </nav>
                <div class="container">     
                    <div class="dropdown" id="dd1">
                        <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" id="dd">Select Table
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                        <li><Link to="#">Table1</Link></li>
                        <li><Link to="#">Table2</Link></li>
                        <li><Link to="#">Table 3</Link></li>
                        </ul>
                    </div>
                    <br></br>
                    <br></br>
                    <div class="table-responsive" id="tb">
                        <table border='1' class="table">
                        {items.map(item =>(
                            <tr key={item.id}>
                            <th contenteditable='true' id="pad">
                                {item.name} 
                            </th>
                            <th contenteditable='true' id="pad"> {item.email}</th>
                            </tr>
                   ))
                   }
                        </table>
                    </div>
                    <Link to="/Success"><button id="b1" class="btn btn-primary">Modify</button></Link>
                </div>
                </div>  
             );
            }
    }
}
export default apifetch;
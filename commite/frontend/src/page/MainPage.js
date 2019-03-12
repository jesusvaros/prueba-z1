import React,{Component} from 'react';

import axios from "axios";

class MainPage extends Component{
    // the parameters are saved here before send to server
    state={
        name:'',
        email:'',
        creacion:'',
    };
    //mount the component with the redux fetch
    componentDidMount=()=>{
        //this.props.fetchCofrade();
    }
    //change the state every event
    onChange = e =>{
        this.setState({
            [e.target.id]:e.target.value,
        });
    }
    //Submit the state to the server
    handleSubmit = event =>{
        event.preventDefault();
        let name = this.state.name;
        let email = this.state.email;
        let creacion = this.state.creacion;

        axios
            .post('http://127.0.0.1:8000/api/create/',{
                name:name,
                email:email,
                creacion:creacion,
                orden:this.state.items.length
            })
            //let blank the form
            .then(
                this.setState({
                    name :'',
                    email:'',
                    creacion:'',
                })
            )
            .catch(function(error){
                console.log(error);
            });
    }
    render(){
        return(
            <div>
                <div className="container">
                <div className="logo">
                    <img
                    style={{
                        borderTopLeftRadius: "50%",
                        borderTopRightRadius: "50%",
                        borderBottomLeftRadius: "50%",
                        borderBottomRightRadius: "50%",
                        marginRight: 15
                    }}
                    
                    width="200px"
                    alt=""
                    />
                    <div className="hermandapp">HermandAPP</div>
                </div>
                <div className="field is-grouped is-grouped-centered">
                    <form onSubmit={this.handleSubmit}>
                    <br />
                    <div className="control has-icons-left">
                        <input
                        id="name"
                        type="text"
                        onChange={this.onChange}
                        value={this.state.name}
                        placeholder="Nombre "
                        className="input is-primary is-rounded"
                        />
                        <span className="icon is-small is-left">
                        <i className="fas fa-torii-gate" />
                        </span>
                    </div>
                    <div className="control has-icons-left">
                        <input
                        id="email"
                        type="email"
                        onChange={this.onChange}
                        value={this.state.email}
                        placeholder="Email"
                        className="input is-primary is-rounded"
                        />
                        <span className="icon is-small is-left">
                        <i className="fas fa-envelope" />
                        </span>
                    </div>
                    <div className="control has-icons-left">
                        <input
                        id="creacion"
                        type="date"
                        onChange={this.onChange}
                        value={this.state.creacion}
                        className="input is-primary is-rounded"
                        />
                        <span className="icon is-small is-left">
                        <i className="fas fa-calendar-day" />
                        </span>
                    </div>
                    <div className="buttonsubmit">
                        <input
                        className="button is-primary"
                        type="submit"
                        value="enviar"
                        />
                    </div>
                    </form>
                </div>

                <div className="notification">
                    Contamos con:
                    <br />
                    <strong>123</strong> hermandades registradas
                </div>
                </div>
            </div>
    );
  }
}

export default MainPage;
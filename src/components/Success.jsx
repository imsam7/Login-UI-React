import React from "react";

const Success = () =>
{
    return (
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
        <br></br>
        <br></br>
    <div class="alert alert-success">
        <strong>Success!</strong> Database has been modified.
    </div>
    </div>
    </div>
    );
};
      
export default Success;
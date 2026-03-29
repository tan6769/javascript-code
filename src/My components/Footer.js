import React from 'react'


export const Footer = () => {
    let footerstyle = {
        position: "absolute",
        top: "100vh",
        width: "100%",
        border: "2px solid red"
    }
    return (
        <div>
            <div className="bg-dark text-light py-3"> 
                <p className="text-centre">

                </p>
                Copyright &copy; MyTodosList.com
                
            </div>
        </div>
    )
}

import myAlert from "~/myAlert"

function Button(){
    const handleClick = ()=>{
        alert('HI <3')
    }
    return (
        <button onClick={myAlert}>Click me</button>
    )
}

export default Button
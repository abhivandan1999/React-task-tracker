import Button from './Button'
const Header = ({onAdd, showAdd}) => {


    return (
        <header className='header'>
            {/*<h1 style ={{color:'red', backgroundColor:'black'}}> Task Tracker</h1>*/}
            
            {/* <h1 style ={headingStyle}>Task Tracker</h1> */}
            <h1>Task Tracker</h1>
            <Button color = {showAdd ? 'red':'green'} text={showAdd ? 'Close':'Add'} onClick={onAdd}/>
        </header>
    )
}
Header.defaultProps = {
    title : 'Task Tracker',
}
// const headingStyle = {
//     color:'red', 
//     backgroundColor:'black',
// }
export default Header

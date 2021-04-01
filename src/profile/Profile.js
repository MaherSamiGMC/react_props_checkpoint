

import PropTypes from "prop-types";

const Profile=(props)=>{
    const styleH1={color:"red",fontSize:30 }
    return (
        <>
        {props.children}
        <h1 style={styleH1}>{props.fullName}</h1>
        <p>{props.bio}</p>
        <button onClick={()=>props.handleName(props.fullName)}>click me ! </button>
        </>
    )
}
Profile.defaultProps = {
    fullName: "Maher SAMI"
   };

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    handleName:PropTypes.func,
   }
export default Profile

const Card = (props) => {
    const {user} = props;
    const {name,email,id,username} = user;
    return(

        <div className='tc bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
        <div>
          <h2>{name}</h2>
          <p>{username}</p>
          <p>{email}</p>
        </div>
      </div>
    )

}

export default Card ;

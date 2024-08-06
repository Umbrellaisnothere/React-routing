import User from './User';


function Home ({users}) {
    

    const displayUsers = users.map
    (user => <User key={user.id} user={user}/>)

        return (
            <div className='users'>
                {displayUsers}
            </div>
        );

}

export default Home;
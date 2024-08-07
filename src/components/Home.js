    // Imports the User component
import User from './User';

    // Home component which accepts 'users' as a prop
function Home ({users}) {
    
    // Mapping over the users array and renders a User component for each user
    const displayUsers = users.map
    (user => <User key={user.id} user={user}/>)

          // Returns a div that contains all the User components
        return (
            <div className='users'>
                {displayUsers}
            </div>
        );

}

export default Home;
import { useSelector } from 'react-redux'
import UserCard from '../components/UserCard'
const AllUsers = () => {
    const allUsers = useSelector(state => state.users.value)

    return(

        <div className='userCardsWrapper'>
            {allUsers.users.map((x, i) => <UserCard key={i} user={x} allUsrs={true}></UserCard>)}
        </div>
    )
}

export default AllUsers
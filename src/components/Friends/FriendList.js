import friends from './friends.json';
import FriendListItem from './FriendListItem';

console.log(friends);

export default function FriendList({ friends }) {
    return (
        <ul class="wdwd">
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    name={friend.name}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
}

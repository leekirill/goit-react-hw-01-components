import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
    return (
        <ul className="wdwd">
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

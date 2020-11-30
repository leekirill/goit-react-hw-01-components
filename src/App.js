import FriendList from './components/Friends/FriendList';

import friends from './components/Friends/friends.json';

export default function App() {
    return (
        <div>
            <h2>Task 2</h2>
            <FriendList friends={friends} />
        </div>
    );
}

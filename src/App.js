import FriendList from './components/Friends/FriendList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import friends from './components/Friends/friends.json';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
    return (
        <div>
            <h1>Task 1</h1>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <h1>Task 2</h1>
            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />
            <h1>Task 3</h1>
            <FriendList friends={friends} />
            <h1>Task 4</h1>
            <TransactionHistory items={transactions} />
        </div>
    );
}

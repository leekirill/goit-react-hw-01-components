import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name, id }) => {
    return (
        <li className="item">
            <span className="status">{isOnline ? 'Онлайн' : 'Оффлайн'}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
};

export default FriendListItem;

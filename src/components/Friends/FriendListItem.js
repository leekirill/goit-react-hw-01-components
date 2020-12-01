import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({ isOnline, avatar, name, id }) => {
    return (
        <li className={styles.item}>
            <span className={styles.status}>
                {isOnline ? 'Онлайн' : 'Оффлайн'}
            </span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
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

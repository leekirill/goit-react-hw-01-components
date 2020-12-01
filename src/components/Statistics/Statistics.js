import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>
            <ul className="stat-list">
                {stats.map(stat => {
                    return (
                        <li className="item" key={stat.id}>
                            <span className="label">{stat.label}</span>
                            <span>{'  '}</span>
                            <span className="percentage">
                                {stat.percentage}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

Statistics.defaultProps = {
    title: 'Upload stats',
    stats: [],
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
};

export default Statistics;

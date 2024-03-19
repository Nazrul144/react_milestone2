import PropTypes from 'prop-types'; // ES6

const Link = ({route}) => {
    return (
        <li className='lg:flex text-2xl mr-8'><a href={route.path}>{route.name}</a></li>
    );
};
Link.propTypes = {
    route: PropTypes.object
}

export default Link;
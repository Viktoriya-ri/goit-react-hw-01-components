import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  AvatarName,
  Tag,
  Location,
    Stats,
    Quantiny,
    Label,
  
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <AvatarName>{username}</AvatarName>
        <Tag>{tag} </Tag>
        <Location>{location} </Location>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantiny>{stats.followers} </Quantiny>
        </li>
        <li>
          <Label>Views</Label>
          <Quantiny>{stats.views} </Quantiny>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantiny>{stats.likes}</Quantiny>
        </li>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

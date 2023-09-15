import PropTypes from 'prop-types';
import { Statistics, StatisticTitle,StatList,Label,StatItem,Percantage } from './Statistic.styled';

export const Statistic = ({title="",stats}) => {
    return(<Statistics>
  {title && <StatisticTitle>{title}</StatisticTitle>}

        <StatList>
            {stats.map(({ id, label, percentage }) => (
                 <StatItem key={id}>
      <Label>{label}</Label>
      <Percantage>{percentage}</Percantage>
    </StatItem>
            ))}
   
  </StatList>
</Statistics>)
}

Statistic.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}